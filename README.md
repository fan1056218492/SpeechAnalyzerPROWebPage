# OfflineScribe Web Page

Static product page for OfflineScribe, a macOS app for private, on-device audio/video transcription, synchronized review, translation, and document or bilingual subtitle export.

OfflineScribe is available on the [Mac App Store](https://apps.apple.com/app/id6787419596?mt=12) as a one-time paid download. Every app feature is included; there are no in-app purchases, subscriptions, trials, or usage quotas.

## Contents

- `content/<locale>.json` - complete localized page copy and metadata
- `scripts/render-site.mjs` - static HTML renderer
- `scripts/build-site.mjs` - generates the root entry, 22 locale routes, sitemap, robots file, and 404 page
- `site.config.mjs` - site URLs, locale routes, and screenshot mapping
- `styles.css` - responsive layout and visual design
- `script.js` - root-language negotiation, native App Store behavior, and menu interactions
- `assets/icons/` - OfflineScribe app icon assets
- `assets/marketing/1.2/<locale>/` - localized, web-optimized product screenshots generated from the reviewed App Store artwork
- `_headers` - Cloudflare static asset header rules

## Local Preview

Build the site and start the local preview server:

```sh
npm run build
npm run preview
```

Then open:

```text
http://127.0.0.1:4173
```

## Languages

The page supports:

- English
- Deutsch
- Español
- Español (España)
- Español (México)
- Français
- Français (Canada)
- Italiano
- 日本語
- 한국어
- Português
- Português do Brasil
- Nederlands
- Polski
- Svenska
- Dansk
- Norsk bokmål
- Suomi
- Čeština
- Türkçe
- Simplified Chinese
- Traditional Chinese

Each language has a stable, indexable route. Legacy `?lang=<locale>` URLs are still redirected in the browser:

```text
/zh-Hans/
/ja/
/de/
```

## Privacy Policy

The page includes a user-facing privacy policy for the app and website:

- OfflineScribe does not upload audio, video, transcript text, or translations.
- Transcription, text translation, and export happen locally after the required macOS system models are installed.
- Language and translation models are managed by macOS System Settings.
- The app is a paid App Store download and does not use in-app purchases, subscriptions, trials, purchase restoration, or feature unlocking.
- The static website does not include analytics scripts, advertising trackers, forms, or cookies.

## Cloudflare Workers Static Assets

This repository deploys static assets with Cloudflare Workers Static Assets.

Recommended Cloudflare settings:

- Framework preset: `None`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Build output directory: `dist`
- Production branch: `main`

```sh
npm run build
npm run deploy
```
