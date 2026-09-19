import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, locales, screenshotLocales, screenshotFiles } from '../site.config.mjs';
import { renderPage } from './render-site.mjs';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const shape = value => Array.isArray(value) ? value.map(shape) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(k=>[k,shape(value[k])])) : typeof value;
const copy = Object.fromEntries(Object.keys(locales).map(locale => [locale, JSON.parse(readFileSync(join(root,'content',`${locale}.json`),'utf8'))]));
const expected = JSON.stringify(shape(copy['zh-Hans']));
for (const [locale,c] of Object.entries(copy)) {
  if (JSON.stringify(shape(c)) !== expected) throw new Error(`Translation schema mismatch: ${locale}`);
  function validate(value) {
    if (typeof value === 'string' && (!value.trim() || /\b(TODO|TBD|Lorem ipsum)\b/.test(value))) throw new Error(`Incomplete translation: ${locale}`);
    if (value && typeof value === 'object') Object.values(value).forEach(validate);
  }
  validate(c);
  for (const file of screenshotFiles) if (!existsSync(join(root,'assets/marketing/1.2',screenshotLocales[locale] || locale,file))) throw new Error(`Missing screenshot: ${locale}/${file}`);
}
rmSync(dist,{recursive:true,force:true}); mkdirSync(dist,{recursive:true});
for (const name of ['styles.css','script.js','assets','_headers']) cpSync(join(root,name),join(dist,name),{recursive:true});
writeFileSync(join(dist,'site-locales.js'),`export const supported = ${JSON.stringify(Object.keys(locales))};\n`);
for (const [locale,c] of Object.entries(copy)) {
  mkdirSync(join(dist,locale),{recursive:true});
  writeFileSync(join(dist,locale,'index.html'),renderPage(locale,c));
}
writeFileSync(join(dist,'index.html'),renderPage('en',copy.en,{root:true}));
writeFileSync(join(dist,'404.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width, initial-scale=1"><title>404 — OfflineScribe</title><link rel="stylesheet" href="/styles.css"></head><body><main class="section"><h1>404</h1><a href="/">OfflineScribe →</a></main></body></html>');
writeFileSync(join(dist,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`);
writeFileSync(join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(locales).map(l=>`<url><loc>${site.origin}/${l}/</loc></url>`).join('')}</urlset>\n`);
// Cloudflare preserves existing bookmarks while normalizing the Portuguese route.
writeFileSync(join(dist,'_redirects'),'/pt-PT /pt/ 301\n/pt-PT/ /pt/ 301\n/privacy /en/#privacy 302\n/privacy/ /en/#privacy 302\n');
console.log(`Built ${Object.keys(copy).length} complete localized pages, root, sitemap and 404.`);
