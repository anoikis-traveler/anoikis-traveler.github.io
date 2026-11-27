/* Anoikis Traveler · the end of each cycle of the background video:
   a fade into a poster (New Eden, the face, "Anoikis Traveler · We need you") held 10 s, then a fade into a new cycle.
   The face and the title only go where the page leaves room (box()): nothing of the page covers them, they cover nothing. */
window.anoikisFinale = function (o){
  const HOLD = o.hold || 10000, FADE = 4500, R = o.root || '', v = o.video;
  if (!document.getElementById('afin-css')){
    const st = document.createElement('style'); st.id = 'afin-css';
    st.textContent = `
@font-face{font-family:"Exo2T";src:url(${R}fonts/exo2-200.woff2) format("woff2");font-weight:200;font-display:swap}
@font-face{font-family:"Michroma";src:url(${R}fonts/michroma.woff2) format("woff2");font-display:swap}
.afin{position:${o.fixed ? 'fixed' : 'absolute'};inset:0;z-index:${o.z == null ? 1 : o.z};pointer-events:none;opacity:0;transition:opacity 4.5s cubic-bezier(.42,0,.3,1);overflow:hidden;
  background:radial-gradient(ellipse 60% 75% at 60% 40%,rgba(70,35,20,.55),transparent 72%),linear-gradient(120deg,#04050a 0%,#0a0a10 45%,#16120f 100%)}
.afin.on{opacity:1}
.afin-map{position:absolute;inset:-4%;background:url(${R}img/neweden.jpg) center/cover no-repeat;mix-blend-mode:screen;opacity:.8;transform:scale(1.06);transition:transform 18s ease-out}
.afin.on .afin-map{transform:scale(1.12)}
.afin-stage{position:absolute}
.afin-veil{position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,7,13,.88) 0%,rgba(5,7,13,.6) 35%,rgba(5,7,13,0) 62%),linear-gradient(0deg,rgba(5,7,13,.7) 0%,rgba(5,7,13,0) 30%)}
.afin-stage .flare{position:absolute;inset:-25%;mix-blend-mode:screen;background:radial-gradient(circle at 30% 38%,rgba(255,250,235,.85) 0,rgba(255,170,70,.6) 4%,rgba(255,110,30,.3) 14%,rgba(160,40,0,.1) 28%,transparent 42%),radial-gradient(ellipse 34% 40% at 46% 24%,rgba(255,220,170,.25),transparent 70%)}
.afin.on .flare{animation:afinFlare 10s ease-in-out infinite alternate}
@keyframes afinFlare{from{opacity:.75}to{opacity:1}}
.afin-face{position:absolute;left:50%;top:0;height:var(--fh);transform:translateX(-50%) scale(1.02);transform-origin:50% 60%;transition:transform 16s ease-out;
  -webkit-mask:radial-gradient(ellipse 48% 52% at 50% 48%,#000 55%,transparent 100%);mask:radial-gradient(ellipse 48% 52% at 50% 48%,#000 55%,transparent 100%);filter:contrast(1.3) brightness(.58) saturate(.85)}
.afin.on .afin-face{transform:translateX(-50%) scale(1.07)}
.afin-t{position:absolute;left:0;right:0;bottom:0;text-align:center;color:#fff;white-space:nowrap}
.afin-brand{display:flex;align-items:center;justify-content:center;gap:.8em;font:400 var(--fb) "Michroma",sans-serif;letter-spacing:.28em;text-transform:uppercase;margin-bottom:.5em;text-shadow:0 0 18px rgba(0,0,0,.8)}
.afin-brand i{display:block;width:4em;height:1px;background:linear-gradient(90deg,transparent,#fff)}
.afin-brand i:last-child{background:linear-gradient(90deg,#fff,transparent)}
.afin-big{font:200 var(--ft)/.98 "Exo2T",sans-serif;letter-spacing:.14em;text-transform:uppercase;text-shadow:0 0 30px rgba(0,0,0,.55),0 0 2px rgba(255,255,255,.6)}
.afin.on .afin-t{animation:afinIn 4s cubic-bezier(.42,0,.3,1) both 1.5s}
@keyframes afinIn{from{opacity:0;filter:blur(6px)}to{opacity:1;filter:none}}`;
    document.head.appendChild(st);
  }
  const fin = document.createElement('div'); fin.className = 'afin'; fin.setAttribute('aria-hidden', 'true');
  fin.innerHTML = `<div class="afin-map"></div>${o.veil ? '<div class="afin-veil"></div>' : ''}<div class="afin-stage"><div class="flare"></div><img class="afin-face" src="${R}img/finale-face.jpg" alt=""><div class="afin-t"><div class="afin-brand"><i></i>Anoikis Traveler<i></i></div><div class="afin-big">We need you</div></div></div>`;
  v.after(fin);
  const stg = fin.querySelector('.afin-stage'), map = fin.querySelector('.afin-map');
  let on = false, t = 0;
  function place(){
    const b = o.box(); if (!b) return false;
    const w = b.r - b.l, h = b.b - b.t; if (w < 220 || h < 200) return false;
    const ft = Math.min(w / 6.4, h * 0.13), fb = Math.max(9, ft * 0.17);
    Object.assign(stg.style, { left:b.l + 'px', top:b.t + 'px', width:w + 'px', height:h + 'px' });
    let f = ft; stg.style.setProperty('--ft', f + 'px'); stg.style.setProperty('--fb', fb + 'px');
    const big = stg.querySelector('.afin-big'), bw = big.scrollWidth;                 // the title always fits its space
    if (bw > w * 0.96){ f = f * w * 0.96 / bw; stg.style.setProperty('--ft', f + 'px'); stg.style.setProperty('--fb', Math.max(9, f * 0.17) + 'px'); }
    stg.style.setProperty('--fh', Math.max(80, h - f * 1.05 - Math.max(9, f * 0.17) * 2.2 - 10) + 'px');
    return true;
  }
  addEventListener('resize', () => { if (on) place(); });
  /* rhythm: the poster when the page opens, then every ~20 s of video (a third, two thirds, the end), 10 s each;
     the one at the end always covers the jump from the last image to the first. Under the poster the video waits. */
  let next = 0, holding = false;
  const cues = () => [v.duration / 3, v.duration * 2 / 3];
  const hide = () => { fin.classList.remove('on'); setTimeout(() => on = false, FADE); };
  const show = () => { if (on) return true; if (!place()) return false; on = true; fin.classList.remove('on'); void fin.offsetWidth; fin.classList.add('on'); return true; };
  const hold = then => { holding = true; v.pause(); clearTimeout(t);
    t = setTimeout(() => { holding = false; then(); if (!(o.isPaused && o.isPaused())) v.play().catch(() => {}); hide(); }, HOLD); };
  v.loop = false;
  v.addEventListener('timeupdate', () => {
    if (!v.duration || holding) return;
    const c = cues(), tm = v.currentTime, lead = FADE / 1000;
    if (next < c.length){
      if (tm >= c[next]){ const k = next++; if (on) hold(() => {}); }                       // the poster is in: the video waits under it
      else if (tm >= c[next] - lead && !on && !show()) next++;                             // fading in while the video slows to it
    } else if (!on && v.duration - tm < lead) show();                                       // the end of the cycle
  });
  v.addEventListener('ended', () => {
    if (!on && !show()){ next = 0; v.currentTime = 0; v.play().catch(() => {}); return; }  // no room for the poster on this screen: straight on
    hold(() => { next = 0; v.currentTime = 0; });                                            // the loop point happens under the poster
  });
  // the page opens on the poster; the video comes in when it fades
  setTimeout(() => { if (show()){ fin.style.transition = 'none'; void fin.offsetWidth; fin.style.transition = ''; v.currentTime = 0; hold(() => {}); } }, 0);
  return { resume(){ if (v.ended) v.dispatchEvent(new Event('ended')); }, holding:() => holding };
};
