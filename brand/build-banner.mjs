import {chromium} from 'playwright-core';

const W=1584, H=396;
// LinkedIn overlays the circular profile photo on the banner's bottom-left and crops
// the sides on mobile. Everything that carries meaning stays right of SAFE_X.
const SAFE_X = 380;

const NAME    = 'AHMED ABOUSEIF';
const COMPANY = 'ARKS INVESTMENT HOLDING LTD';
// Supplied headline, split at a pipe boundary — 117 characters on one line is
// unreadable once LinkedIn scales the banner down on a phone.
const HL1 = 'HR & People Operations | AI Implementation | EV Fleet Management';
const HL2 = 'Sustainable Transport | Labour Law | Dubai, UAE';
const pipes = s => s.split(' | ').join(' <span class="sep">|</span> ');

const base = `
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${W}px;height:${H}px;overflow:hidden}
  .b{position:relative;width:${W}px;height:${H}px;overflow:hidden;
     font-family:'IBM Plex Sans',sans-serif;-webkit-font-smoothing:antialiased}
  .lock{position:absolute;left:${SAFE_X}px}
  .name{font-family:'Archivo',sans-serif;font-weight:800;font-size:62px;line-height:.95;letter-spacing:-.015em}
  .rule{height:3px;width:76px;margin:20px 0 0}
  .hl{font-size:19px;line-height:1.52;letter-spacing:.004em;margin-top:19px}
  .sep{opacity:.38}
  .co{font-family:'IBM Plex Mono',monospace;font-weight:500;font-size:15px;letter-spacing:.22em;margin-top:22px}
  svg{position:absolute;inset:0}
`;

/* Deterministic ascending profile. The highlight belongs at the top of the climb. */
function bars(x0,x1,yBase,maxH,color,hiFromEnd){
  const step=15, w=6, n=Math.floor((x1-x0-w)/step)+1; let out='';
  for(let i=0;i<n;i++){
    const x=x0+i*step, t=i/(n-1);
    const v=0.26 + t*0.62 + Math.sin(t*9.4)*0.065 + Math.sin(t*4.3+0.7)*0.055;
    const h=Math.max(8,v*maxH);
    out+=`<rect x="${x}" y="${yBase-h}" width="${w}" height="${h}" rx="1.5" fill="${color}" opacity="${i>=n-hiFromEnd?0.9:0.16}"/>`;
  }
  return out;
}
function lockup(top,c){
  return `<div class="lock" style="top:${top}px">
    <div class="name" style="color:${c.name}">${NAME}</div>
    <div class="rule" style="background:${c.rule}"></div>
    <div class="hl" style="color:${c.hl}">${pipes(HL1)}<br>${pipes(HL2)}</div>
    <div class="co" style="color:${c.co}">${COMPANY}</div>
  </div>`;
}

const A = `<style>${base}.b{background:#0A171C}</style>
<div class="b">
  <svg viewBox="0 0 ${W} ${H}">
    <defs><radialGradient id="g" cx="80%" cy="115%" r="70%">
      <stop offset="0" stop-color="#14606F" stop-opacity=".5"/>
      <stop offset="1" stop-color="#0A171C" stop-opacity="0"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    ${bars(1044,1520,314,182,'#4FA8BC',7)}
    <rect x="1044" y="314" width="476" height="1" fill="#4FA8BC" opacity=".28"/>
  </svg>
  ${lockup(94,{name:'#F3F7F6',rule:'#4FA8BC',hl:'#A9C6CD',co:'#8FB2BA'})}
</div>`;

const B = `<style>${base}.b{background:#EFF2F1}</style>
<div class="b">
  <svg viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#EFF2F1"/>
    <rect x="0" y="0" width="${W}" height="5" fill="#0E3B45"/>
    ${bars(1074,1520,304,158,'#125566',6)}
    <rect x="1074" y="304" width="446" height="1" fill="#125566" opacity=".35"/>
  </svg>
  ${lockup(96,{name:'#0C262D',rule:'#125566',hl:'#415D66',co:'#125566'})}
</div>`;

/* An index line: the one motif that means something for a holding company.
   Full-bleed so the area fill has no hard vertical edges, held low on the left
   so it clears the lockup. */
function curve(){
  const pts=[[0,368],[210,360],[420,352],[640,356],[860,332],[1060,338],[1240,272],[1380,238],[1500,166],[1584,138]];
  let d=`M ${pts[0][0]} ${pts[0][1]}`;
  for(let i=1;i<pts.length;i++){
    const [px,py]=pts[i-1],[x,y]=pts[i],cx=(px+x)/2;
    d+=` C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`;
  }
  return {d,node:[1380,238]};
}
const c=curve();
const C = `<style>${base}.b{background:#08151A}</style>
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
        <feGaussianBlur stdDeviation="7" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <g opacity=".16" stroke="#4FA8BC" stroke-width="1">
      ${Array.from({length:11},(_,i)=>`<line x1="0" y1="${36*i+18}" x2="${W}" y2="${36*i+18}"/>`).join('')}
    </g>
    <path d="${c.d} L ${W} ${H} L 0 ${H} Z" fill="url(#fill)"/>
    <path d="${c.d}" fill="none" stroke="url(#ln)" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="${c.node[0]}" cy="${c.node[1]}" r="6.5" fill="#9FE4F0" filter="url(#gl)"/>
  </svg>
  ${lockup(84,{name:'#F3F7F6',rule:'#4FA8BC',hl:'#A9C6CD',co:'#8FB2BA'})}
</div>`;

const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
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
