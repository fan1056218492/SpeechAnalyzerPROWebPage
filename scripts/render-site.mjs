import { site, locales, screenshotLocales, screenshotFiles } from '../site.config.mjs';
export const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e = escape;
const cards = items => items.map(([title, text]) => `<article><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('');
export function renderPage(locale, c, {root = false} = {}) {
  const path = `/${locale}/`;
  const screenshotLocale = screenshotLocales[locale] || locale;
  const image = i => `/assets/marketing/1.2/${screenshotLocale}/${screenshotFiles[i]}`;
  const download = `<a class="button primary" data-app-store href="${e(site.nativeStore)}">${e(c.hero.download)}</a>`;
  const webStore = `<a class="store-fallback" href="${e(site.store)}">${e(c.hero.webStore)} ↗</a>`;
  return `<!doctype html>
<html lang="${locale}"${root ? ' data-language-entry="true"' : ''}>
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(c.meta.title)}</title><meta name="description" content="${e(c.meta.description)}">
<meta name="theme-color" content="#eef5f4"><link rel="canonical" href="${site.origin}${path}">
${Object.keys(locales).map(code => `<link rel="alternate" hreflang="${code}" href="${site.origin}/${code}/">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${site.origin}/">
<meta property="og:type" content="website"><meta property="og:site_name" content="OfflineScribe">
<meta property="og:title" content="${e(c.meta.title)}"><meta property="og:description" content="${e(c.meta.description)}">
<meta property="og:url" content="${site.origin}${path}"><meta property="og:image" content="${site.origin}${image(0)}"><meta property="og:image:alt" content="${e(c.gallery.alts[0])}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(c.meta.title)}"><meta name="twitter:description" content="${e(c.meta.description)}"><meta name="twitter:image" content="${site.origin}${image(0)}">
<link rel="icon" href="/assets/icons/favicon.png"><link rel="apple-touch-icon" href="/assets/icons/icon.png">
<link rel="stylesheet" href="/styles.css"><script type="module" src="/script.js"></script>
</head>
<body>
<a class="skip-link" href="#main">${e(c.skip)}</a>
<header class="site-header">
<a class="brand" href="${path}"><img src="/assets/icons/icon.png" alt="" width="42" height="42"><span>OfflineScribe</span></a>
<nav class="nav-links">${Object.entries(c.nav).map(([id,label]) => `<a href="#${id}">${e(label)}</a>`).join('')}</nav>
<details class="language-picker"><summary aria-label="${e(c.language)}: ${e(locales[locale])}"><span aria-hidden="true">◎</span> ${e(locales[locale])} <span aria-hidden="true">⌄</span></summary><nav class="language-menu" aria-label="${e(c.language)}">${Object.entries(locales).map(([code,label]) => `<a lang="${code}" hreflang="${code}" aria-label="${e(label)}" href="/${code}/"${code===locale?' aria-current="true"':''}>${e(label)}</a>`).join('')}</nav></details>
</header>
<main id="main">
<section class="hero" id="top" aria-labelledby="hero-title"><div class="hero-shade" aria-hidden="true"></div><div class="hero-content"><div class="hero-copy">
<p class="eyebrow">OfflineScribe · macOS 26+</p><h1 id="hero-title">${e(c.hero.title)}</h1><p class="hero-lead">${e(c.hero.lead)}</p>
<div class="hero-actions">${download}<a class="button secondary" href="#features">${e(c.nav.features)}</a></div>${webStore}
<p class="purchase-note">${e(c.pricing.title)}</p>
</div><a class="hero-visual" href="${image(0)}" target="_blank" rel="noopener"><img src="${image(0)}" alt="${e(c.gallery.alts[0])}" width="1600" height="1000" fetchpriority="high"></a></div></section>
<section class="section" id="features" aria-labelledby="features-title"><div class="section-heading"><p class="eyebrow">${e(c.nav.features)}</p><h2 id="features-title">${e(c.features.title)}</h2></div><div class="feature-grid">${cards(c.features.items)}</div></section>
<section class="section review-showcase" id="screenshots" aria-labelledby="gallery-title"><div class="section-heading"><h2 id="gallery-title">${e(c.gallery.title)}</h2></div><div class="screenshot-grid">${screenshotFiles.map((_,i) => `<a class="screenshot-card" href="${image(i)}" target="_blank" rel="noopener"><img src="${image(i)}" alt="${e(c.gallery.alts[i])}" width="1600" height="1000" loading="lazy"></a>`).join('')}</div><p class="gallery-note">${e(c.gallery.note)}</p><div class="review-details feature-grid">${cards([[c.gallery.videoTitle,c.gallery.videoText]])}</div></section>
<section class="section format-section" aria-labelledby="formats-title"><div class="section-heading"><h2 id="formats-title">${e(c.formats.title)}</h2></div><div class="format-grid">${cards([[c.formats.input,'AAC, AIFF, CAF, FLAC, M4A, M4B, MP3, Ogg, Opus, WAV · MP4, MOV'],[c.formats.output,'TXT, Markdown, HTML, DOCX, SRT, VTT'],[c.formats.finderTitle,c.formats.finderText]])}</div></section>
<section class="section privacy" id="privacy" aria-labelledby="privacy-title"><div class="section-heading"><p class="eyebrow">${e(c.nav.privacy)}</p><h2 id="privacy-title">${e(c.privacy.title)}</h2></div><div class="policy-grid">${cards([...c.privacy.items,[c.pricing.title,c.pricing.note]])}</div></section>
<section class="section pricing" id="pricing" aria-labelledby="pricing-title"><div class="section-heading"><h2 id="pricing-title">${e(c.pricing.title)}</h2><p>${e(c.pricing.text)}</p></div><div class="hero-actions">${download}</div>${webStore}<p class="requirements">${e(c.hero.requirements)}</p></section>
<section class="section faq" id="faq" aria-labelledby="faq-title"><div class="section-heading"><h2 id="faq-title">${e(c.faq.title)}</h2></div>${c.faq.items.map(([q,a]) => `<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</section>
<section class="section support" id="support" aria-labelledby="support-title"><div><p class="eyebrow">${e(c.nav.support)}</p><h2 id="support-title">${e(c.support.title)}</h2><p>${e(c.support.text)}</p></div><div class="support-box"><strong>OfflineScribe</strong><p>${e(c.support.note)}</p><a class="button primary contact-button" href="mailto:${site.email}?subject=OfflineScribe%20Support">${e(c.support.email)}</a><a class="support-email" href="mailto:${site.email}">${site.email}</a></div></section>
</main><footer class="site-footer"><span>OfflineScribe · ${e(c.meta.title.split(' — ')[0])}</span><a href="#top">${e(c.back)}</a></footer>
</body></html>`;
}
