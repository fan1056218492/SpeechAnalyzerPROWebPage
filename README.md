# SpeechAnalyzer PRO Web Page

Static product page for SpeechAnalyzer PRO, a macOS app for local speech transcription, timeline translation, and translated transcript export.

## Contents

- `index.html` - single-page product site
- `styles.css` - responsive layout and visual design
- `script.js` - language switching and localized copy
- `assets/icons/` - SpeechAnalyzer PRO app icon assets
- `assets/marketing/` - product hero bitmap
- `_headers` - Cloudflare static asset header rules

## Local Preview

Open `index.html` directly, or run a local static server:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Languages

The page supports:

- English
- Deutsch
- Espanol
- Espanol (Espana)
- Espanol (Mexico)
- Francais
- Francais (Canada)
- Italiano
- Japanese
- Korean
- Portugues (Brasil)
- Portugues (Portugal)
- Simplified Chinese
- Traditional Chinese

Use `?lang=<locale>` to open a specific language, for example:

```text
/?lang=zh-Hans
/?lang=ja
/?lang=de
```

## Privacy Policy

The page includes a user-facing privacy policy for the app and website:

- SpeechAnalyzer PRO does not upload audio, transcript text, or translations.
- Transcription, text translation, and export happen locally after the required macOS system models are installed.
- Language and translation models are managed by macOS System Settings.
- Apple StoreKit purchase, restore, and price-loading flows are Apple system flows.
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
