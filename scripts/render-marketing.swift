#!/usr/bin/env swift

import AppKit
import CoreGraphics
import Foundation

private let canvasSize = NSSize(width: 2_880, height: 1_800)

private struct MarketingCopy: Decodable {
    var locales: [LocaleCopy]
}

private struct LocaleCopy: Decodable {
    var storeLocale: String
    var sourceLocale: String
    var direction: String?
    var slides: [SlideCopy]
}

private struct SlideCopy: Decodable {
    var id: String
    var filename: String
    var source: String
    var title: String
    var subtitle: String
}

private struct Palette {
    var top: NSColor
    var bottom: NSColor
    var title: NSColor
    var subtitle: NSColor
    var accent: NSColor
    var brandFill: NSColor
    var brandBorder: NSColor
    var screenshotBorder: NSColor
    var shadow: NSColor
}

private enum RenderError: LocalizedError {
    case missingFile(URL)
    case invalidConfiguration(String)
    case cannotCreateBitmap
    case cannotEncodePNG(URL)

    var errorDescription: String? {
        switch self {
        case let .missingFile(url): "缺少文件：\(url.path)"
        case let .invalidConfiguration(message): message
        case .cannotCreateBitmap: "无法创建 RGB 位图。"
        case let .cannotEncodePNG(url): "无法写入 PNG：\(url.path)"
        }
    }
}

private let scriptURL = URL(fileURLWithPath: CommandLine.arguments[0]).standardizedFileURL
private let webRoot = scriptURL.deletingLastPathComponent().deletingLastPathComponent()
private let baseURL = URL(fileURLWithPath: ProcessInfo.processInfo.environment["APP_MARKETING_DIR"] ?? webRoot.deletingLastPathComponent().appendingPathComponent("SpeechAnalyzer PRO/Marketing/AppStore/1.2").path)
private let outputRoot = webRoot.appendingPathComponent("build/marketing")
private let fileManager = FileManager.default

private func color(_ hex: UInt32, alpha: CGFloat = 1) -> NSColor {
    NSColor(
        srgbRed: CGFloat((hex >> 16) & 0xFF) / 255,
        green: CGFloat((hex >> 8) & 0xFF) / 255,
        blue: CGFloat(hex & 0xFF) / 255,
        alpha: alpha
    )
}

private func palette(for id: String) -> Palette {
    switch id {
    case "bilingual-subtitles":
        Palette(
            top: color(0x123F47), bottom: color(0x071F2A), title: .white,
            subtitle: color(0xD7EFF0), accent: color(0xF2BA46),
            brandFill: color(0xFFFFFF, alpha: 0.10), brandBorder: color(0xFFFFFF, alpha: 0.25),
            screenshotBorder: color(0xFFFFFF, alpha: 0.30), shadow: color(0x020D12, alpha: 0.70)
        )
    case "private-on-mac":
        Palette(
            top: color(0x243330), bottom: color(0x07110F), title: .white,
            subtitle: color(0xD8E7E0), accent: color(0x40D2B2),
            brandFill: color(0xFFFFFF, alpha: 0.09), brandBorder: color(0xFFFFFF, alpha: 0.22),
            screenshotBorder: color(0xFFFFFF, alpha: 0.24), shadow: color(0x000000, alpha: 0.72)
        )
    case "batch-pause-resume":
        Palette(
            top: color(0xFFF9ED), bottom: color(0xEDE2CA), title: color(0x26332E),
            subtitle: color(0x5D6A64), accent: color(0xD79124),
            brandFill: color(0xFFFFFF, alpha: 0.72), brandBorder: color(0xFFFFFF, alpha: 0.94),
            screenshotBorder: color(0xFFFFFF, alpha: 0.90), shadow: color(0x574A31, alpha: 0.30)
        )
    case "review-and-seek":
        Palette(
            top: color(0xF2FAF8), bottom: color(0xD7ECEA), title: color(0x153333),
            subtitle: color(0x536C69), accent: color(0x1BAA9F),
            brandFill: color(0xFFFFFF, alpha: 0.72), brandBorder: color(0xFFFFFF, alpha: 0.96),
            screenshotBorder: color(0xFFFFFF, alpha: 0.94), shadow: color(0x174544, alpha: 0.26)
        )
    case "export-formats":
        Palette(
            top: color(0xFAFBF6), bottom: color(0xDBEEE4), title: color(0x17332B),
            subtitle: color(0x536B62), accent: color(0x219F83),
            brandFill: color(0xFFFFFF, alpha: 0.74), brandBorder: color(0xFFFFFF, alpha: 0.98),
            screenshotBorder: color(0xFFFFFF, alpha: 0.94), shadow: color(0x194438, alpha: 0.25)
        )
    default:
        Palette(
            top: color(0xFCF8F1), bottom: color(0xDDEFE9), title: color(0x15312E),
            subtitle: color(0x536A65), accent: color(0x1AA89D),
            brandFill: color(0xFFFFFF, alpha: 0.72), brandBorder: color(0xFFFFFF, alpha: 0.96),
            screenshotBorder: color(0xFFFFFF, alpha: 0.94), shadow: color(0x173F3D, alpha: 0.27)
        )
    }
}

private func makeBitmap(size: NSSize) throws -> NSBitmapImageRep {
    guard let bitmap = NSBitmapImageRep(
        bitmapDataPlanes: nil,
        pixelsWide: Int(size.width),
        pixelsHigh: Int(size.height),
        bitsPerSample: 8,
        samplesPerPixel: 4,
        hasAlpha: true,
        isPlanar: false,
        colorSpaceName: .deviceRGB,
        bytesPerRow: Int(size.width) * 4,
        bitsPerPixel: 32
    ) else {
        throw RenderError.cannotCreateBitmap
    }
    bitmap.size = size
    return bitmap
}

private func render(size: NSSize, drawing: () throws -> Void) throws -> NSBitmapImageRep {
    let bitmap = try makeBitmap(size: size)
    guard let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
        throw RenderError.cannotCreateBitmap
    }
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = context
    context.imageInterpolation = .high
    defer { NSGraphicsContext.restoreGraphicsState() }
    try drawing()
    context.flushGraphics()
    return bitmap
}

private func writePNG(_ bitmap: NSBitmapImageRep, to url: URL) throws {
    guard let source = bitmap.cgImage,
          let space = CGColorSpace(name: CGColorSpace.sRGB),
          let context = CGContext(
            data: nil,
            width: bitmap.pixelsWide,
            height: bitmap.pixelsHigh,
            bitsPerComponent: 8,
            bytesPerRow: bitmap.pixelsWide * 4,
            space: space,
            bitmapInfo: CGBitmapInfo.byteOrder32Big.rawValue | CGImageAlphaInfo.noneSkipLast.rawValue
          )
    else {
        throw RenderError.cannotCreateBitmap
    }
    context.setFillColor(NSColor.white.cgColor)
    context.fill(CGRect(origin: .zero, size: CGSize(width: bitmap.pixelsWide, height: bitmap.pixelsHigh)))
    context.draw(source, in: CGRect(origin: .zero, size: CGSize(width: bitmap.pixelsWide, height: bitmap.pixelsHigh)))
    guard let flattened = context.makeImage(),
          let data = NSBitmapImageRep(cgImage: flattened).representation(using: .png, properties: [:])
    else {
        throw RenderError.cannotEncodePNG(url)
    }
    try fileManager.createDirectory(at: url.deletingLastPathComponent(), withIntermediateDirectories: true)
    try data.write(to: url, options: .atomic)
}

private func drawText(
    _ text: String,
    in rect: NSRect,
    size: CGFloat,
    weight: NSFont.Weight,
    color: NSColor,
    minimumSize: CGFloat,
    alignment: NSTextAlignment = .left,
    rightToLeft: Bool = false
) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineBreakMode = .byWordWrapping
    paragraph.lineHeightMultiple = 1.02
    paragraph.alignment = alignment
    paragraph.baseWritingDirection = rightToLeft ? .rightToLeft : .leftToRight
    var fontSize = size
    func attributes(_ value: CGFloat) -> [NSAttributedString.Key: Any] {
        [
            .font: NSFont.systemFont(ofSize: value, weight: weight),
            .foregroundColor: color,
            .paragraphStyle: paragraph,
            .kern: value >= 72 ? -1.4 : 0
        ]
    }
    while fontSize > minimumSize {
        let measured = (text as NSString).boundingRect(
            with: rect.size,
            options: [.usesLineFragmentOrigin, .usesFontLeading],
            attributes: attributes(fontSize)
        )
        if measured.width <= rect.width + 1, measured.height <= rect.height + 1 { break }
        fontSize -= 2
    }
    (text as NSString).draw(
        with: rect,
        options: [.usesLineFragmentOrigin, .usesFontLeading],
        attributes: attributes(fontSize)
    )
}

private func drawBackground(_ palette: Palette) {
    let canvas = NSRect(origin: .zero, size: canvasSize)
    NSGradient(starting: palette.bottom, ending: palette.top)?.draw(in: canvas, angle: 90)

    let glow = NSRect(x: 2_130, y: 1_290, width: 860, height: 700)
    palette.accent.withAlphaComponent(0.12).setFill()
    NSBezierPath(ovalIn: glow).fill()
    let lowerGlow = NSRect(x: -260, y: -210, width: 880, height: 650)
    color(0xF0B544, alpha: 0.10).setFill()
    NSBezierPath(ovalIn: lowerGlow).fill()
}

private func drawBrand(icon: NSImage, palette: Palette) {
    let rect = NSRect(x: 160, y: 1_598, width: 470, height: 84)
    let path = NSBezierPath(roundedRect: rect, xRadius: 42, yRadius: 42)
    palette.brandFill.setFill()
    path.fill()
    palette.brandBorder.setStroke()
    path.lineWidth = 2
    path.stroke()
    icon.draw(
        in: NSRect(x: 178, y: 1_610, width: 60, height: 60),
        from: .zero,
        operation: .sourceOver,
        fraction: 1,
        respectFlipped: false,
        hints: [.interpolation: NSImageInterpolation.high]
    )
    drawText(
        "OfflineScribe",
        in: NSRect(x: 256, y: 1_616, width: 340, height: 52),
        size: 34,
        weight: .semibold,
        color: palette.title,
        minimumSize: 30
    )
}

private func screenshotRect(for slideID: String) -> NSRect {
    switch slideID {
    case "private-on-mac": NSRect(x: 210, y: -330, width: 2_460, height: 1_537.5)
    case "batch-pause-resume": NSRect(x: 195, y: -310, width: 2_490, height: 1_556.25)
    default: NSRect(x: 220, y: -385, width: 2_440, height: 1_525)
    }
}

private func drawScreenshot(_ image: NSImage, slideID: String, palette: Palette) {
    let rect = screenshotRect(for: slideID)
    let radius: CGFloat = 42
    NSGraphicsContext.saveGraphicsState()
    let shadow = NSShadow()
    shadow.shadowColor = palette.shadow
    shadow.shadowBlurRadius = 58
    shadow.shadowOffset = NSSize(width: 0, height: -18)
    shadow.set()
    NSColor.white.setFill()
    NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).fill()
    NSGraphicsContext.restoreGraphicsState()

    NSGraphicsContext.saveGraphicsState()
    NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).addClip()
    image.draw(
        in: rect,
        from: NSRect(origin: .zero, size: image.size),
        operation: .sourceOver,
        fraction: 1,
        respectFlipped: false,
        hints: [.interpolation: NSImageInterpolation.high]
    )
    NSGraphicsContext.restoreGraphicsState()

    palette.screenshotBorder.setStroke()
    let border = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
    border.lineWidth = 3
    border.stroke()
}

private func drawSlide(
    _ slide: SlideCopy,
    source: NSImage,
    icon: NSImage,
    rightToLeft: Bool
) throws -> NSBitmapImageRep {
    let palette = palette(for: slide.id)
    return try render(size: canvasSize) {
        drawBackground(palette)
        drawBrand(icon: icon, palette: palette)
        drawText(
            slide.title,
            in: NSRect(x: 160, y: 1_380, width: 2_560, height: 138),
            size: 104,
            weight: .bold,
            color: palette.title,
            minimumSize: 58,
            alignment: rightToLeft ? .right : .left,
            rightToLeft: rightToLeft
        )
        drawText(
            slide.subtitle,
            in: NSRect(x: 164, y: 1_278, width: 2_500, height: 66),
            size: 40,
            weight: .medium,
            color: palette.subtitle,
            minimumSize: 30,
            alignment: rightToLeft ? .right : .left,
            rightToLeft: rightToLeft
        )
        drawScreenshot(source, slideID: slide.id, palette: palette)
    }
}

private func image(from bitmap: NSBitmapImageRep, size: NSSize) -> NSImage {
    NSImage(size: size, flipped: false) { rect in
        bitmap.draw(in: rect)
        return true
    }
}

private func makeContactSheet(images: [NSImage], locale: String) throws -> NSBitmapImageRep {
    let size = NSSize(width: 2_880, height: 1_360)
    let thumb = NSSize(width: 860, height: 537.5)
    return try render(size: size) {
        color(0xE9EFEC).setFill()
        NSBezierPath(rect: NSRect(origin: .zero, size: size)).fill()
        drawText(
            "OfflineScribe 1.2 · \(locale)",
            in: NSRect(x: 110, y: 1_245, width: 2_660, height: 64),
            size: 42,
            weight: .semibold,
            color: color(0x17332B),
            minimumSize: 36
        )
        for (index, item) in images.enumerated() {
            let column = index % 3
            let row = index / 3
            let rect = NSRect(
                x: 110 + CGFloat(column) * 915,
                y: 645 - CGFloat(row) * 590,
                width: thumb.width,
                height: thumb.height
            )
            NSGraphicsContext.saveGraphicsState()
            let shadow = NSShadow()
            shadow.shadowColor = color(0x17332B, alpha: 0.20)
            shadow.shadowBlurRadius = 22
            shadow.shadowOffset = NSSize(width: 0, height: -8)
            shadow.set()
            NSColor.white.setFill()
            NSBezierPath(roundedRect: rect, xRadius: 24, yRadius: 24).fill()
            NSGraphicsContext.restoreGraphicsState()
            NSGraphicsContext.saveGraphicsState()
            NSBezierPath(roundedRect: rect, xRadius: 24, yRadius: 24).addClip()
            item.draw(in: rect, from: NSRect(origin: .zero, size: item.size), operation: .sourceOver, fraction: 1)
            NSGraphicsContext.restoreGraphicsState()
        }
    }
}

private func loadImage(_ url: URL) throws -> NSImage {
    guard fileManager.fileExists(atPath: url.path) else { throw RenderError.missingFile(url) }
    guard let image = NSImage(contentsOf: url), image.isValid else {
        throw RenderError.invalidConfiguration("无法读取图像：\(url.path)")
    }
    return image
}

private func run() throws {
    let copy = try JSONDecoder().decode(
        MarketingCopy.self,
        from: Data(contentsOf: webRoot.appendingPathComponent("content/marketing.json"))
    )
    let localeFlag = CommandLine.arguments.firstIndex(of: "--locale")
    let requestedLocale = localeFlag.flatMap { index in
        CommandLine.arguments.indices.contains(index + 1) ? CommandLine.arguments[index + 1] : nil
    }
    let locales = requestedLocale.map { requested in
        copy.locales.filter { $0.storeLocale == requested }
    } ?? copy.locales
    guard !locales.isEmpty else {
        throw RenderError.invalidConfiguration("没有找到指定的 App Store 地区。")
    }
    let icon = try loadImage(
        webRoot.appendingPathComponent("assets/icons/icon.png")
            .standardizedFileURL
    )
    for locale in locales {
        guard locale.slides.count == 6 else {
            throw RenderError.invalidConfiguration("\(locale.storeLocale) 必须配置六张宣传图。")
        }
        var rendered: [NSImage] = []
        for slide in locale.slides {
            let sourceURL = baseURL
                .appendingPathComponent("source")
                .appendingPathComponent(locale.sourceLocale)
                .appendingPathComponent(slide.source)
            let outputURL = outputRoot
                .appendingPathComponent(locale.storeLocale)
                .appendingPathComponent(slide.filename)
            let bitmap = try drawSlide(
                slide,
                source: loadImage(sourceURL),
                icon: icon,
                rightToLeft: locale.direction == "rtl"
            )
            try writePNG(bitmap, to: outputURL)
            rendered.append(image(from: bitmap, size: canvasSize))
            print("Generated \(outputURL.path)")
        }
        let contact = try makeContactSheet(images: rendered, locale: locale.storeLocale)
        let contactURL = outputRoot.appendingPathComponent("contact-sheet-\(locale.storeLocale).png")
        try writePNG(contact, to: contactURL)
        print("Generated \(contactURL.path)")
    }
}

do {
    try run()
} catch {
    FileHandle.standardError.write(Data("error: \(error.localizedDescription)\n".utf8))
    exit(EXIT_FAILURE)
}
