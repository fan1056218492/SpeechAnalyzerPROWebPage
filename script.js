import { supported } from './site-locales.js';
export function matchLanguage(preferences = []) {
  for (const preference of preferences) {
    if (typeof preference !== 'string') continue;
    const tag = preference.replaceAll('_','-').toLowerCase();
    const exact = supported.find(locale=>locale.toLowerCase()===tag);
    if (exact) return exact;
    const [base,...parts] = tag.split('-');
    if (base === 'zh') {
      if (parts.includes('hant')) return 'zh-Hant';
      if (parts.includes('hans')) return 'zh-Hans';
      return parts.some(p=>['tw','hk','mo'].includes(p)) ? 'zh-Hant' : 'zh-Hans';
    }
    if (base === 'pt') return parts.includes('br') ? 'pt-BR' : 'pt';
    if (base === 'no') return 'nb';
    if (supported.includes(base)) return base;
  }
  return 'en';
}
export function isMac(navigator) {
  return navigator.userAgentData?.platform === 'macOS' || (/Mac/.test(navigator.platform || navigator.userAgent || '') && (navigator.maxTouchPoints || 0) < 2);
}
if (typeof document !== 'undefined') {
  // Only the root negotiates language. Explicit language links always stay stable.
  if (location.pathname === '/' && document.documentElement.dataset.languageEntry === 'true') {
    const query = new URLSearchParams(location.search);
    const locale = query.has('lang') ? matchLanguage([query.get('lang')]) : matchLanguage(navigator.languages || [navigator.language]);
    query.delete('lang');
    const rest = query.toString();
    location.replace(`/${locale}/${rest ? `?${rest}` : ''}${location.hash}`);
  }
  // Native anchors stay synchronous with the user's click; no pop-up or timeout.
  // The adjacent HTTPS link also works when a browser blocks external protocols.
  if (!isMac(navigator)) document.querySelectorAll('[data-app-store]').forEach(link => {
    link.href = 'https://apps.apple.com/app/id6787419596?mt=12';
  });
  document.querySelectorAll('.language-menu a').forEach(link => {
    link.href += location.hash;
  });
  document.addEventListener('keydown',event=>{
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.language-picker[open]').forEach(menu=>{menu.open=false;menu.querySelector('summary').focus();});
  });
  document.addEventListener('click',event=>{
    document.querySelectorAll('.language-picker[open]').forEach(menu=>{if (!menu.contains(event.target)) menu.open=false;});
  });
}
