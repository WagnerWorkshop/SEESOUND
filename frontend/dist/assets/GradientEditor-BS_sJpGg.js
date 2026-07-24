var e=`gradient-editor-styles`,t=`seesound_gradient_presets_v1`;function n(){return{"Color spectrum":[{position:0,color:`#ff0000`},{position:.166,color:`#ffff00`},{position:.333,color:`#00ff00`},{position:.5,color:`#00ffff`},{position:.666,color:`#0000ff`},{position:.833,color:`#ff00ff`},{position:1,color:`#ff0000`}],"Scriabin colors":[{position:0,color:`#ff4444`},{position:.083,color:`#ff88aa`},{position:.167,color:`#ffcc44`},{position:.25,color:`#ddcc88`},{position:.333,color:`#aaccff`},{position:.417,color:`#ccaadd`},{position:.5,color:`#ff6644`},{position:.583,color:`#ff8844`},{position:.667,color:`#cc88cc`},{position:.75,color:`#44cc44`},{position:.833,color:`#44aacc`},{position:.917,color:`#4488ff`},{position:1,color:`#ff4444`}],"Circle of fifths":[{position:0,color:`#44aa44`},{position:.083,color:`#66bb44`},{position:.167,color:`#88cc44`},{position:.25,color:`#aacc44`},{position:.333,color:`#cccc44`},{position:.417,color:`#ccaa44`},{position:.5,color:`#cc8844`},{position:.583,color:`#cc6644`},{position:.667,color:`#cc4444`},{position:.75,color:`#cc4466`},{position:.833,color:`#cc4488`},{position:.917,color:`#cc44aa`},{position:1,color:`#44aa44`}],Warm:[{position:0,color:`#331100`},{position:.25,color:`#cc4400`},{position:.5,color:`#ff8800`},{position:.75,color:`#ffcc44`},{position:1,color:`#ffffaa`}],Cold:[{position:0,color:`#001133`},{position:.25,color:`#0044cc`},{position:.5,color:`#0088ff`},{position:.75,color:`#44ccff`},{position:1,color:`#aaeeff`}],Nature:[{position:0,color:`#1a3300`},{position:.2,color:`#336600`},{position:.4,color:`#669933`},{position:.6,color:`#88aa44`},{position:.8,color:`#44aa88`},{position:1,color:`#aaddcc`}],Sundown:[{position:0,color:`#1a0a2e`},{position:.2,color:`#4a1942`},{position:.4,color:`#cc3355`},{position:.6,color:`#ff6644`},{position:.8,color:`#ffaa33`},{position:1,color:`#ffdd88`}]}}function r(){let e=n();try{let n=localStorage.getItem(t);if(n){let t=JSON.parse(n);if(t&&typeof t==`object`){for(let[n,r]of Object.entries(t))!e[n]&&Array.isArray(r)&&r.length>=2&&(e[n]=r);if(Array.isArray(t._deleted))for(let n of t._deleted)delete e[n]}}}catch{}return e}function i(e){try{let r=new Set(Object.keys(n())),i={_deleted:[]};for(let[t,n]of Object.entries(e))r.has(t)||(i[t]=n);for(let t of r)e[t]||i._deleted.push(t);localStorage.setItem(t,JSON.stringify(i))}catch{}}var a=r();function o(){return{mode:`basic`,preset:null,stops:[{position:0,color:`#ff4444`},{position:1,color:`#4444ff`}]}}function s(e){return!e||typeof e!=`object`?o():{mode:e.mode||`basic`,preset:e.preset||null,stops:Array.isArray(e.stops)?e.stops.map(e=>({position:e.position,color:e.color})):[{position:0,color:`#ff4444`},{position:1,color:`#4444ff`}]}}function c(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:255,g:255,b:255}}function l(e,t,n){let r=e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`);return`#${r(e)}${r(t)}${r(n)}`}function u(e,t,n){let r=c(e),i=c(t),a=Math.max(0,Math.min(1,n));return l(r.r+(i.r-r.r)*a,r.g+(i.g-r.g)*a,r.b+(i.b-r.b)*a)}function d(e,t=256){let n=document.createElement(`canvas`);n.width=t,n.height=1;let r=n.getContext(`2d`),i=f(e),a=r.createLinearGradient(0,0,t,0);for(let e of i)a.addColorStop(e.position,e.color);return r.fillStyle=a,r.fillRect(0,0,t,1),n}function f(e){return a=r(),e.preset&&a[e.preset]?a[e.preset]:Array.isArray(e.stops)&&e.stops.length>0?e.stops:[{position:0,color:`#ffffff`},{position:1,color:`#ffffff`}]}function p(){if(document.getElementById(e))return;let t=document.createElement(`style`);t.id=e,t.textContent=`
.ge-overlay {
    position: fixed; inset: 0; z-index: 9998;
    background: rgba(5, 10, 8, 0.75);
    backdrop-filter: blur(3px);
    display: flex; align-items: center; justify-content: center;
}
.ge-popup {
    width: min(540px, 94vw);
    border: 1px solid var(--color-border-strong, #4f7562);
    border-radius: 10px;
    background: var(--color-bg-solid, #0d1410);
    box-shadow: 0 8px 48px rgba(0,0,0,0.72);
    color: var(--color-text, #e2f0eb);
    font-family: var(--font-ui, 'Segoe UI', system-ui, sans-serif);
    font-size: 12px;
    display: flex; flex-direction: column; overflow: hidden;
}
.ge-header {
    display: flex; align-items: center; gap: 8px;
    border-bottom: 1px solid var(--color-border-strong, #4f7562);
    padding: 8px 12px;
    background: var(--color-bg-raised, #0b1410);
}
.ge-title {
    flex: 1; font-size: 11px; letter-spacing: 0.1em;
    text-transform: uppercase; font-weight: 700;
    color: var(--color-text-muted, #b9a79b);
}
.ge-btn {
    background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px);
    font-size: 11px; cursor: pointer; padding: 4px 10px;
}
.ge-btn:hover { border-color: var(--color-text-muted, #b9a79b); }
.ge-btn-primary {
    color: var(--color-accent, #d2910a);
    border-color: rgba(210,145,10,0.4);
    background: rgba(210,145,10,0.12);
}
.ge-btn-danger {
    color: var(--color-danger, #e67a7a);
    border-color: rgba(212,85,6,0.4);
    background: rgba(212,85,6,0.08);
}
.ge-body {
    padding: 16px; display: flex; flex-direction: column; gap: 14px;
}
.ge-section-label {
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--color-text-dim, #7a8c82); margin-bottom: -8px;
}
.ge-mode-row {
    display: flex; gap: 8px;
}
.ge-mode-btn {
    flex: 1; padding: 6px; border-radius: var(--radius-s, 4px);
    border: 1px solid var(--color-border, #4f7562);
    background: var(--color-bg, #111a16);
    color: var(--color-text-dim, #8a9c92);
    font-size: 11px; cursor: pointer; text-align: center;
}
.ge-mode-btn.active {
    border-color: var(--color-accent, #d2910a);
    color: var(--color-accent, #d2910a);
    background: rgba(210,145,10,0.1);
}
/* ── Gradient preview bar (thicker) ── */
.ge-bar-wrap {
    position: relative; height: 52px; border-radius: 6px;
    border: 1px solid var(--color-border-strong, #4f7562);
    overflow: visible; cursor: crosshair; margin: 4px 0;
    background: var(--color-bg, #111a16);
}
.ge-bar-canvas {
    width: 100%; height: 100%; border-radius: 5px;
}
/* ── Handles (pin below bar, stem points UP into the bar) ── */
.ge-handle {
    position: absolute; top: 0; width: 18px; height: 68px;
    margin-left: -9px; cursor: grab; z-index: 3; pointer-events: auto;
}
.ge-handle-pin {
    width: 16px; height: 16px; border-radius: 50%;
    border: 2px solid var(--color-text, #e2f0eb);
    box-shadow: 0 1px 4px rgba(0,0,0,0.6);
    position: absolute; bottom: 8px; left: 1px;
    box-sizing: border-box; transition: transform 0.1s;
}
.ge-handle:hover .ge-handle-pin,
.ge-handle.active .ge-handle-pin {
    transform: scale(1.3); border-color: var(--color-accent, #d2910a);
}
.ge-handle.active .ge-handle-pin { border-width: 3px; }
.ge-handle-stem {
    position: absolute; bottom: 24px; left: 8px;
    width: 2px; height: 36px;
    background: var(--color-text, #e2f0eb);
}
/* ── Colour input row ── */
.ge-color-row {
    display: flex; align-items: center; gap: 8px;
}
.ge-color-picker {
    width: 32px; height: 28px; border: 1px solid var(--color-border, #4f7562);
    border-radius: var(--radius-s, 4px); cursor: pointer; padding: 0;
    background: transparent;
}
.ge-color-hex {
    flex: 1; background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px); padding: 4px 8px;
    font-size: 12px; font-family: var(--font-mono, monospace); outline: none;
}
.ge-color-hex:focus { border-color: var(--color-accent, #d2910a); }
.ge-pos-input {
    width: 56px; background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px); padding: 4px 6px;
    font-size: 12px; font-family: var(--font-mono, monospace);
    outline: none; text-align: center;
}
.ge-pos-input:focus { border-color: var(--color-accent, #d2910a); }
.ge-delete-stop-btn {
    background: none; border: 1px solid rgba(212,85,6,0.4);
    color: var(--color-danger, #e67a7a);
    border-radius: var(--radius-s, 4px); cursor: pointer;
    padding: 4px 8px; font-size: 11px;
}
.ge-delete-stop-btn:hover { background: rgba(212,85,6,0.15); }
.ge-delete-stop-btn:disabled { opacity: 0.3; cursor: default; }
/* ── Preset list ── */
.ge-presets-list {
    display: flex; flex-direction: column; gap: 4px;
    max-height: 200px; overflow-y: auto;
}
.ge-preset-item {
    display: flex; align-items: center; gap: 8px;
    padding: 5px 8px; border-radius: var(--radius-s, 4px);
    cursor: pointer; border: 1px solid transparent; font-size: 11px;
    position: relative;
}
.ge-preset-item:hover {
    border-color: var(--color-border, #4f7562);
    background: var(--color-bg, rgba(255,255,255,0.04));
}
.ge-preset-item.active {
    border-color: var(--color-accent, #d2910a);
    background: rgba(210,145,10,0.08);
}
.ge-preset-swatch {
    width: 48px; height: 14px; border-radius: 3px;
    border: 1px solid var(--color-border, #4f7562); flex-shrink: 0;
}
.ge-preset-name { flex: 1; }
.ge-preset-remove-btn {
    position: absolute; right: 4px; top: 50%; transform: translateY(-50%);
    width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(212,85,6,0.4);
    background: rgba(212,85,6,0.12); color: var(--color-danger, #e67a7a);
    font-size: 10px; cursor: pointer; display: none;
    align-items: center; justify-content: center; padding: 0; line-height: 1;
}
.ge-preset-item:hover .ge-preset-remove-btn { display: flex; }
.ge-preset-remove-btn:hover { background: rgba(212,85,6,0.25); }
/* ── Add preset row ── */
.ge-add-preset-row {
    display: flex; gap: 6px; margin-top: 4px;
}
.ge-add-preset-input {
    flex: 1; background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px); padding: 4px 8px;
    font-size: 11px; outline: none;
}
.ge-add-preset-input:focus { border-color: var(--color-accent, #d2910a); }
.ge-footer {
    border-top: 1px solid var(--color-border-strong, #4f7562);
    padding: 10px 12px; display: flex; justify-content: flex-end;
    gap: 8px; background: var(--color-bg-raised, #0b1410);
}
`,document.head.appendChild(t)}function m(e,t){let n=f(e),r=t.width;t.height=1;let i=t.getContext(`2d`),a=i.createLinearGradient(0,0,r,0);for(let e of n)a.addColorStop(e.position,e.color);i.fillStyle=a,i.fillRect(0,0,r,1)}function h(e,t=48){let n=document.createElement(`canvas`);return n.width=t,m(e,n),n}function g(e,t){p();let o=s(e),c=0,l=o.preset||null,d=document.createElement(`div`);d.className=`ge-overlay`;let m=document.createElement(`div`);m.className=`ge-popup`;let g=document.createElement(`div`);g.className=`ge-header`;let _=document.createElement(`span`);_.className=`ge-title`,_.textContent=`Gradient Editor`,g.appendChild(_),m.appendChild(g);let v=document.createElement(`div`);v.className=`ge-body`;let y=document.createElement(`div`);y.className=`ge-section-label`,y.textContent=`Mode`;let b=document.createElement(`div`);b.className=`ge-mode-row`;let x=document.createElement(`button`);x.className=`ge-mode-btn`+(o.mode===`basic`?` active`:``),x.textContent=`Basic`;let S=document.createElement(`button`);S.className=`ge-mode-btn`+(o.mode===`detailed`?` active`:``),S.textContent=`Detailed`,x.addEventListener(`click`,()=>{o.mode=`basic`,x.classList.add(`active`),S.classList.remove(`active`),o.stops.length!==2&&(o.stops=[{position:0,color:o.stops[0]?.color||`#ff4444`},{position:1,color:o.stops[o.stops.length-1]?.color||`#4444ff`}]),o.preset=null,l=null,c=0,H(),K()}),S.addEventListener(`click`,()=>{o.mode=`detailed`,S.classList.add(`active`),x.classList.remove(`active`),o.preset=null,l=null,c=0,H(),K()}),b.append(x,S),v.appendChild(y),v.appendChild(b);let C=document.createElement(`div`);C.className=`ge-bar-wrap`;let w=document.createElement(`canvas`);w.className=`ge-bar-canvas`,C.appendChild(w);let T=document.createElement(`div`);T.style.cssText=`position:absolute;inset:0;pointer-events:none;`,C.appendChild(T),v.appendChild(C);let E=document.createElement(`div`);E.className=`ge-section-label`,E.textContent=`Selected Stop`,v.appendChild(E);let D=document.createElement(`div`);D.className=`ge-color-row`;let O=document.createElement(`input`);O.type=`color`,O.className=`ge-color-picker`;let k=document.createElement(`input`);k.type=`text`,k.className=`ge-color-hex`,k.maxLength=7;let A=document.createElement(`input`);A.type=`text`,A.className=`ge-pos-input`,A.maxLength=6;let j=document.createElement(`button`);j.className=`ge-delete-stop-btn`,j.textContent=`✕`,j.title=`Remove stop`,D.append(O,k,A,j),v.appendChild(D);let M=document.createElement(`div`);M.className=`ge-section-label`,M.textContent=`Predefined Gradients`;let N=document.createElement(`div`);N.className=`ge-presets-list`,N.style.display=`flex`;let P=document.createElement(`div`);P.className=`ge-add-preset-row`;let F=document.createElement(`input`);F.type=`text`,F.className=`ge-add-preset-input`,F.placeholder=`New preset name...`,F.maxLength=40;let I=document.createElement(`button`);I.className=`ge-btn ge-btn-sm`,I.textContent=`+ Save Current`,I.title=`Save current gradient as a new preset`,P.append(F,I);function L(){N.innerHTML=``,a=r();for(let[e,t]of Object.entries(a)){let r=document.createElement(`div`);r.className=`ge-preset-item`,l===e&&r.classList.add(`active`);let s=h({stops:t});s.className=`ge-preset-swatch`,r.appendChild(s);let u=document.createElement(`span`);if(u.className=`ge-preset-name`,u.textContent=e,r.appendChild(u),!Object.keys(n()).includes(e)){let t=document.createElement(`button`);t.className=`ge-preset-remove-btn`,t.textContent=`✕`,t.title=`Delete preset`,t.addEventListener(`click`,t=>{t.stopPropagation(),delete a[e],i(a),l===e&&(l=null,o.preset=null),L()}),r.appendChild(t)}r.addEventListener(`click`,()=>{l=e,o.preset=e,o.stops=t.map(e=>({position:e.position,color:e.color})),o.mode=`detailed`,S.classList.add(`active`),x.classList.remove(`active`),c=0,L(),H(),K()}),N.appendChild(r)}}L(),I.addEventListener(`click`,()=>{let e=F.value.trim();if(!(!e||e.length<2)){if(n()[e]){F.value=``;return}a[e]=o.stops.map(e=>({position:e.position,color:e.color})),i(a),F.value=``,l=e,o.preset=e,L(),H()}}),P.style.display=`flex`,N.style.display=`flex`,v.appendChild(M),v.appendChild(N),v.appendChild(P),m.appendChild(v);let R=document.createElement(`div`);R.className=`ge-footer`;let z=document.createElement(`button`);z.className=`ge-btn`,z.textContent=`Cancel`;let B=document.createElement(`button`);B.className=`ge-btn ge-btn-primary`,B.textContent=`Apply`,R.append(z,B),m.appendChild(R),d.appendChild(m),document.body.appendChild(d);function V(){d.remove()}z.addEventListener(`click`,V),d.addEventListener(`click`,e=>{e.target===d&&V()}),B.addEventListener(`click`,()=>{o.stops.sort((e,t)=>e.position-t.position),o.stops.length>0&&(o.stops[0].position=0),o.stops.length>1&&(o.stops[o.stops.length-1].position=1),t({mode:o.mode,preset:o.preset||null,stops:o.stops.map(e=>({position:e.position,color:e.color}))}),V()});function H(){if(T.querySelectorAll(`.ge-handle`).forEach(e=>e.remove()),U(),o.mode===`basic`||o.preset){let e=o.stops;for(let t of[0,e.length-1])W(t,e[t])}else for(let e=0;e<o.stops.length;e++)W(e,o.stops[e])}function U(){let e=C.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width));w.width=t,w.height=C.clientHeight||52;let n=f(o),r=w.getContext(`2d`),i=r.createLinearGradient(0,0,t,0);for(let e of n)i.addColorStop(e.position,e.color);r.fillStyle=i,r.fillRect(0,0,t,w.height)}function W(e,t){let n=document.createElement(`div`);n.className=`ge-handle`,n.style.left=`${t.position*100}%`,n.dataset.index=e,n.style.pointerEvents=`auto`;let r=document.createElement(`div`);r.className=`ge-handle-pin`,r.style.backgroundColor=t.color;let i=document.createElement(`div`);i.className=`ge-handle-stem`,n.append(i,r),e===c&&n.classList.add(`active`),n.addEventListener(`pointerdown`,t=>{t.preventDefault(),t.stopPropagation(),c=e,T.querySelectorAll(`.ge-handle`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),K(),n.setPointerCapture(t.pointerId);let r=t=>{t.preventDefault();let r=C.getBoundingClientRect(),i=(t.clientX-r.left)/r.width;i=Math.max(0,Math.min(1,i));let a=o.stops;(o.mode===`basic`||o.preset)&&(e===0?i=0:e===a.length-1&&(i=1)),e>0&&(i=Math.max(i,a[e-1].position+.001)),e<a.length-1&&(i=Math.min(i,a[e+1].position-.001)),a[e].position=parseFloat(i.toFixed(4)),n.style.left=`${a[e].position*100}%`,U(),K()},i=()=>{document.removeEventListener(`pointermove`,r),document.removeEventListener(`pointerup`,i),document.removeEventListener(`pointercancel`,i),U()};document.addEventListener(`pointermove`,r),document.addEventListener(`pointerup`,i),document.addEventListener(`pointercancel`,i)}),T.appendChild(n)}C.addEventListener(`click`,e=>{if(o.mode!==`detailed`||o.preset||e.target.closest(`.ge-handle`))return;let t=C.getBoundingClientRect(),n=(e.clientX-t.left)/t.width;n=parseFloat(Math.max(0,Math.min(1,n)).toFixed(4));for(let e of o.stops)if(Math.abs(e.position-n)<.015)return;let r=G(o.stops,n);o.stops.push({position:n,color:r}),o.stops.sort((e,t)=>e.position-t.position),c=o.stops.findIndex(e=>e.position===n),H(),K()});function G(e,t){if(e.length===0)return`#ffffff`;let n=e[0],r=e[e.length-1];for(let i of e)i.position<=t&&(n=i),i.position>=t&&i.position<r.position&&(r=i);if(n===r)return n.color;let i=(t-n.position)/(r.position-n.position||.001);return u(n.color,r.color,i)}function K(){let e=o.stops[c];if(!e)return;O.value=e.color,k.value=e.color,A.value=e.position.toFixed(3);let t=o.mode===`basic`||!!o.preset;A.disabled=t,j.disabled=t||o.stops.length<=2,A.style.opacity=t?`0.4`:`1`,j.style.opacity=t||o.stops.length<=2?`0.3`:`1`}O.addEventListener(`input`,()=>{let e=o.stops[c];if(!e)return;e.color=O.value,k.value=O.value;let t=T.querySelector(`.ge-handle[data-index="${c}"]`);t&&(t.querySelector(`.ge-handle-pin`).style.backgroundColor=O.value),U()}),k.addEventListener(`change`,()=>{let e=o.stops[c];if(!e)return;let t=k.value.trim();if(t.startsWith(`#`)||(t=`#`+t),/^#[0-9a-fA-F]{6}$/.test(t)){e.color=t,O.value=t;let n=T.querySelector(`.ge-handle[data-index="${c}"]`);n&&(n.querySelector(`.ge-handle-pin`).style.backgroundColor=t),U()}}),A.addEventListener(`change`,()=>{if(o.mode===`basic`||o.preset)return;let e=o.stops[c];if(!e)return;let t=parseFloat(A.value);Number.isFinite(t)&&(t=Math.max(0,Math.min(1,t)),c>0&&(t=Math.max(t,o.stops[c-1].position+.001)),c<o.stops.length-1&&(t=Math.min(t,o.stops[c+1].position-.001)),e.position=parseFloat(t.toFixed(4)),A.value=e.position.toFixed(3),H())}),j.addEventListener(`click`,()=>{o.mode===`basic`||o.preset||o.stops.length<=2||(o.stops.splice(c,1),c=Math.min(c,o.stops.length-1),H(),K())}),requestAnimationFrame(()=>{U(),H(),K()});let q=new ResizeObserver(()=>{U(),H()});q.observe(C);let J=e=>{e.key===`Escape`&&V()};window.addEventListener(`keydown`,J);let Y=()=>{window.removeEventListener(`keydown`,J),q.disconnect(),d.remove()};z.onclick=Y,d.onclick=e=>{e.target===d&&Y()},B.addEventListener(`click`,()=>{window.removeEventListener(`keydown`,J),q.disconnect()})}export{a as PREDEFINED_GRADIENTS,d as bakeGradientToCanvas,s as cloneGradient,o as getDefaultGradient,f as getEffectiveStops,g as openGradientEditor};