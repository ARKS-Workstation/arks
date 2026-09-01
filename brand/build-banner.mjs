import fs from 'fs';
import {chromium} from 'playwright-core';

const W=1584, H=396;
// LinkedIn overlays the circular profile photo on the banner's bottom-left and crops
// the sides on mobile. Keep every element that carries meaning inside this band.
const SAFE_X = 380;          // avatar clears at ~290 in 1584-space; 380 leaves margin
const NAME = 'ARKS';
const SUB  = 'INVESTMENT HOLDING LTD';
const PLACE= 'DUBAI · UNITED ARAB EMIRATES';
const DESC = 'Sustainable transport · EV fleet operations · Operational AI';

const base = `
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${W}px;height:${H}px;overflow:hidden}
  .b{position:relative;width:${W}px;height:${H}px;overflow:hidden;
     font-family:'IBM Plex Sans',sans-serif;-webkit-font-smoothing:antialiased}
  .name{font-family:'Archivo',sans-serif;font-weight:800;font-size:96px;line-height:.92;
        letter-spacing:-.022em}
  .sub{font-family:'IBM Plex Mono',monospace;font-weight:500;font-size:20px;letter-spacing:.30em}
  .tiny{font-family:'IBM Plex Mono',monospace;font-weight:400;font-size:13px;letter-spacing:.20em}
  .desc{font-family:'IBM Plex Sans',sans-serif;font-weight:400;font-size:17px;letter-spacing:.005em}
  svg{position:absolute;inset:0}
`;

/* A deterministic ascending profile — the highlight belongs at the top of the
   climb, not in a trough. Texture comes from two out-of-phase sines. */
function bars(x0,x1,yBase,maxH,color,hiFromEnd){
  const step=15, w=6; const n=Math.floor((x1-x0-w)/step)+1; let out='';
  for(let i=0;i<n;i++){
    const x=x0+i*step, t=i/(n-1);
    const v=0.26 + t*0.62 + Math.sin(t*9.4)*0.065 + Math.sin(t*4.3+0.7)*0.055;
    const h=Math.max(8,v*maxH);
    const on = i >= n-hiFromEnd;
    out+=`<rect x="${x}" y="${yBase-h}" width="${w}" height="${h}" rx="1.5" fill="${color}" opacity="${on?0.9:0.16}"/>`;
  }
  return out;
}

const A = `<style>${base}
  .b{background:#0A171C}
  .name{color:#F3F7F6}
  .sub{color:#7FB0BC}
  .tiny{color:#4E6C74}
</style>
<div class="b">
  <svg viewBox="0 0 ${W} ${H}">
    <defs><radialGradient id="g" cx="78%" cy="112%" r="72%">
      <stop offset="0" stop-color="#14606F" stop-opacity=".55"/>
      <stop offset="1" stop-color="#0A171C" stop-opacity="0"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    ${bars(944,1516,318,196,'#4FA8BC',7)}
    <rect x="944" y="318" width="572" height="1" fill="#4FA8BC" opacity=".28"/>
  </svg>
  <div style="position:absolute;left:${SAFE_X}px;top:118px">
    <div class="name">${NAME}</div>
    <div style="width:70px;height:3px;background:#4FA8BC;margin:22px 0 18px"></div>
    <div class="sub">${SUB}</div>
  </div>
  <div class="tiny" style="position:absolute;left:${SAFE_X}px;bottom:34px;opacity:.85">${PLACE}</div>
</div>`;

const B = `<style>${base}
  .b{background:#EFF2F1}
  .name{color:#0C262D}
  .sub{color:#125566}
  .tiny{color:#7E9198}
  .desc{color:#4A6169}
</style>
<div class="b">
  <svg viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#EFF2F1"/>
    <rect x="0" y="0" width="${W}" height="5" fill="#0E3B45"/>
    ${bars(1046,1520,300,168,'#125566',6)}
    <rect x="1046" y="300" width="474" height="1" fill="#125566" opacity=".35"/>
  </svg>
  <div style="position:absolute;left:${SAFE_X}px;top:104px">
    <div style="width:86px;height:6px;background:#125566;margin-bottom:26px"></div>
    <div class="name">${NAME}</div>
    <div class="sub" style="margin-top:24px">${SUB}</div>
  </div>
  <div class="tiny" style="position:absolute;left:${SAFE_X}px;bottom:38px">${PLACE}</div>
</div>`;

/* An index line: the one motif that actually means something for a holding
   company. Full-bleed so the area fill has no hard vertical edges, and held
   low on the left so it clears the descriptor text. */
function curve(){
  const pts=[[0,366],[210,358],[420,348],[640,352],[860,322],[1060,330],[1240,268],[1380,236],[1500,166],[1584,138]];
  let d=`M ${pts[0][0]} ${pts[0][1]}`;
  for(let i=1;i<pts.length;i++){
    const [px,py]=pts[i-1], [x,y]=pts[i], cx=(px+x)/2;
    d+=` C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`;
  }
  return {d, node:[1380,236]};
}
const c=curve();
const C = `<style>${base}
  .b{background:#08151A}
  .name{color:#F3F7F6}
  .sub{color:#7FB0BC}
  .tiny{color:#4E6C74}
  .desc{color:#9DBCC3}
</style>
<div class="b">
  <svg viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="ln" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#125566" stop-opacity=".15"/>
        <stop offset=".55" stop-color="#4FA8BC" stop-opacity=".9"/>
        <stop offset="1" stop-color="#7FD3E2" stop-opacity="1"/></linearGradient>
      <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4FA8BC" stop-opacity=".20"/>
        <stop offset="1" stop-color="#4FA8BC" stop-opacity="0"/></linearGradient>
      <filter id="gl" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="7" result="b"/><feMerge>
        <feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <g opacity=".16" stroke="#4FA8BC" stroke-width="1">
      ${Array.from({length:11},(_,i)=>`<line x1="0" y1="${36*i+18}" x2="${W}" y2="${36*i+18}"/>`).join('')}
    </g>
    <path d="${c.d} L 1584 396 L 0 396 Z" fill="url(#fill)"/>
    <path d="${c.d}" fill="none" stroke="url(#ln)" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="${c.node[0]}" cy="${c.node[1]}" r="6.5" fill="#9FE4F0" filter="url(#gl)"/>
  </svg>
  <div style="position:absolute;left:${SAFE_X}px;top:86px">
    <div class="name">${NAME}</div>
    <div class="sub" style="margin-top:20px">${SUB}</div>
    <div class="desc" style="margin-top:15px;opacity:.8">${DESC}</div>
    <div class="tiny" style="margin-top:18px;color:#5F818A">${PLACE}</div>
  </div>
</div>`;

const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
/* 2x for retina sharpness, 1x as a spec-exact 1584x396 fallback. */
for(const [scale,dir] of [[2,'brand'],[1,'brand/1x']]){
  const ctx=await b.newContext({viewport:{width:W,height:H},deviceScaleFactor:scale});
  for(const [name,html] of [['arks-banner-a-dark',A],['arks-banner-b-light',B],['arks-banner-c-index',C]]){
    const pg=await ctx.newPage();
    await pg.setContent('<!doctype html><meta charset="utf-8">'+html,{waitUntil:'load'});
    await pg.waitForTimeout(300);
    await pg.screenshot({path:`${dir}/${name}.png`});
    await pg.close();
  }
  await ctx.close();
  console.log(dir+' -> 3 files at '+(W*scale)+'x'+(H*scale));
}
await b.close();
