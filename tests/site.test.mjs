import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { locales, site, screenshotFiles, screenshotLocales } from '../site.config.mjs';
import { matchLanguage, isMac } from '../dist/script.js';
const read = path => readFileSync(resolve('dist',path),'utf8');
test('browser locale negotiation and old links',()=>{
  for (const [prefs,want] of [
    [['zh-TW'],'zh-Hant'],[['zh-HK'],'zh-Hant'],[['zh-Hans-HK'],'zh-Hans'],[['zh_CN'],'zh-Hans'],
    [['pt-PT'],'pt'],[['pt-BR'],'pt-BR'],[['no-NO'],'nb'],[['en-AU'],'en'],[['fr-CA'],'fr-CA'],
    [['es-MX'],'es-MX'],[['unsupported','nl-NL'],'nl'],[[],'en'],[['cs-CZ'],'cs'],[['tr-TR'],'tr'],
  ]) assert.equal(matchLanguage(prefs),want);
});
test('Mac links do not misidentify an iPad using a desktop user agent',()=>{
  assert.equal(isMac({platform:'MacIntel',maxTouchPoints:0}),true);
  assert.equal(isMac({platform:'MacIntel',maxTouchPoints:5}),false);
  assert.equal(isMac({platform:'Win32'}),false);
});
test('every language has complete indexable HTML, metadata, real images and native download links',()=>{
  assert.equal(Object.keys(locales).length,22);
  for (const locale of Object.keys(locales)) {
    const html=read(`${locale}/index.html`);
    assert.ok(html.includes(`<html lang="${locale}">`),locale);
    assert.ok(html.includes(`rel="canonical" href="${site.origin}/${locale}/"`),locale);
    assert.equal((html.match(/<h1\b/g)||[]).length,1,locale);
    assert.equal((html.match(/hreflang="x-default"/g)||[]).length,1,locale);
    for (const alternate of Object.keys(locales)) assert.ok(html.includes(`rel="alternate" hreflang="${alternate}" href="${site.origin}/${alternate}/"`),`${locale} → ${alternate}`);
    for (const [code,label] of Object.entries(locales)) assert.ok(html.includes(`lang="${code}" hreflang="${code}" aria-label="${label}"`),`${locale}: language link ${code}`);
    assert.equal((html.match(/data-app-store /g)||[]).length,2);
    assert.ok(html.includes(`href="${site.nativeStore.replaceAll('&','&amp;')}"`));
    assert.ok(html.includes(`href="${site.store.replaceAll('&','&amp;')}"`));
    assert.ok(!html.includes('data-i18n'),locale);
    assert.ok(!html.includes('data-language-entry'),locale);
    assert.ok(!html.includes('/us/app/'),locale);
    assert.ok(!/localStorage|google-analytics|googletagmanager/.test(html));
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    for (const [,anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(anchor),`${locale}: #${anchor}`);
    for (const [,url] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
      const clean=url.split('#')[0];
      assert.ok(existsSync(resolve('dist','.'+clean)),`${locale}: ${url}`);
    }
    for (const file of screenshotFiles) assert.ok(html.includes(`/assets/marketing/1.2/${screenshotLocales[locale]||locale}/${file}`),`${locale}: ${file}`);
    const copy=JSON.parse(readFileSync(`content/${locale}.json`));
    assert.ok(html.includes(copy.hero.title.replaceAll('&','&amp;').replaceAll("'",'&#39;')));
    assert.equal(copy.faq.items.length,3);
  }
});
test('root, sitemap, metadata and privacy compatibility',()=>{
  assert.ok(read('index.html').includes('data-language-entry="true"'));
  assert.ok(read('en/index.html').includes('Audio to Text for Mac'));
  assert.ok(read('en/index.html').includes('speech to text'));
  assert.ok(read('zh-Hans/index.html').includes('音频转文字'));
  assert.equal((read('sitemap.xml').match(/<loc>/g)||[]).length,22);
  assert.ok(read('robots.txt').includes(`${site.origin}/sitemap.xml`));
  assert.ok(read('_redirects').includes('/pt-PT/ /pt/ 301'));
  assert.ok(read('404.html').includes('noindex'));
  assert.ok(readFileSync('wrangler.toml','utf8').includes('404-page'));
});
test('English UI disclosures are present in the three approved marketing variants',()=>{
  const marketing=JSON.parse(readFileSync('content/marketing.json'));
  for (const locale of marketing.locales) {
    assert.equal(locale.sourceLocale,'en');
    const marker={pl:'angielski',cs:'angličtina',tr:'İngilizce'}[locale.storeLocale];
    assert.ok(marker);
    assert.equal(locale.slides.length,6);
    locale.slides.forEach(slide=>assert.ok(slide.subtitle.includes(marker)));
  }
});
