/* v2 is being rebuilt: only the site owner's characters (logged in on this browser) can open it.
   Everyone else gets an "under construction" page. */
(function(){
  const OWNERS = ['cloporte', 'Sava Yesh', 'Calimeroombrageux'];
  let ok = false;
  try{ for (let i = 0; i < localStorage.length; i++){ const k = localStorage.key(i); if (k && k.startsWith('whmap.tok.')){ const t = JSON.parse(localStorage.getItem(k) || 'null'); if (t && OWNERS.includes(t.charName)) ok = true; } } }catch(e){}
  if (ok || /[?&]code=/.test(location.search)) return;          // a login coming back is let through, it checks itself
  document.documentElement.style.background = '#03050b';
  document.write(`<div style="position:fixed;inset:0;z-index:99999;background:#03050b;color:#e2e8f3;font:16px/1.5 'IBM Plex Sans',system-ui,sans-serif;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px">
    <div><div style="font:700 34px 'Saira Condensed','Arial Narrow',sans-serif;letter-spacing:.08em;text-transform:uppercase">Anoikis <b style="color:#f2a74b">Traveler</b></div>
    <p style="color:#9aa6bd;margin:12px 0 18px">Page under construction · Page en construction</p>
    <a href="${location.pathname.includes('/appraisal') ? '../../appraisal/' : '../regions/'}" style="color:#f2a74b">Open the current version · Ouvrir la version actuelle</a></div></div>`);
  document.write('<plaintext style="display:none">');   // the rest of the page becomes inert text: none of its scripts run
})();
