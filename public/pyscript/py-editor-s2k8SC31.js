import{T as t,d as e,X as r,H as n,s as o}from"./core-2NwtOg82.js";let i=0;const s=t=>`${t}-editor-${i++}`,a=new Map,c=new Map,l={worker:{codeBeforeRun:()=>o,onReady:({runAsync:t,io:e},{sync:r})=>{e.stdout=e.buffered(r.write),e.stderr=e.buffered(r.writeErr),r.revoke(),r.runAsync=t}}};async function u({currentTarget:t}){const{env:e,pySrc:o,outDiv:i}=this,s=!!t;if(s&&(t.disabled=!0,i.innerHTML=""),!a.has(e)){const t=URL.createObjectURL(new Blob([""])),o={type:this.interpreter},{config:i}=this;if(i){o.configURL=i;const{parse:t}=i.endsWith(".toml")?await import("./toml-CvAfdf9_.js"):JSON;o.config=t(await fetch(i).then((t=>t.text())))}const s=r.call(new n(null,l),t,o),{sync:c}=s,{promise:u,resolve:d}=Promise.withResolvers();a.set(e,u),c.revoke=()=>{URL.revokeObjectURL(t),d(s)}}a.get(e).then((e=>{e.onerror=({error:t})=>{s&&(i.innerHTML+=`<span style='color:red'>${t.message||t}</span>\n`),console.error(t)};const r=()=>{s&&(t.disabled=!1)},{sync:n}=e;n.write=t=>{s&&(i.innerText+=`${t}\n`)},n.writeErr=t=>{s&&(i.innerHTML+=`<span style='color:red'>${t}</span>\n`)},n.runAsync(o).then(r,r)}))}const d=(t,e)=>{const r=document.createElement("div");r.className=`${e}-editor-input`,r.setAttribute("aria-label","Python Script Area");const n=((t,e)=>{const r=document.createElement("button");return r.className=`absolute ${e}-editor-run-button`,r.innerHTML='<svg style="height:20px;width:20px;vertical-align:-.125em;transform-origin:center;overflow:visible;color:green" viewBox="0 0 384 512" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="translate(192 256)" transform-origin="96 0"><g transform="translate(0,0) scale(1,1)"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" fill="currentColor" transform="translate(-192 -256)"></path></g></g></svg>',r.setAttribute("aria-label","Python Script Run Button"),r.addEventListener("click",t),r})(t,e),o=document.createElement("div");return o.addEventListener("keydown",(t=>{t.stopPropagation()})),r.append(n,o),r},m=(t,e)=>{const r=document.createElement("div");r.className=`${e}-editor-box`;const n=d(t,e),o=(t=>{const e=document.createElement("div");return e.className=`${t}-editor-output`,e.id=`${s(t)}-output`,e})(e);return r.append(n,o),[r,o]},p=async(t,r,n)=>{const[{basicSetup:o,EditorView:i},{Compartment:a},{python:l},{indentUnit:d},{keymap:p},{defaultKeymap:f}]=await Promise.all([import("./codemirror-Da0uB6D0.js"),import("./codemirror_state-BKbyfKsm.js"),import("./codemirror_lang-python-DIyWB5tk.js"),import("./codemirror_language-DCl5sMoK.js").then((function(t){return t.x})),import("./codemirror_view-Bz8y6BoV.js").then((function(t){return t.q})),import("./codemirror_commands-Cda0Zxd7.js")]),h=t.hasAttribute("setup"),g=t.hasAttribute("config"),v=`${n}-${t.getAttribute("env")||s(r)}`;if(g&&c.has(v))throw new SyntaxError(c.get(v)?`duplicated config for env: ${v}`:`unable to add a config to the env: ${v}`);c.set(v,g);const y=t.src?await fetch(t.src).then((t=>t.text())):t.textContent,b={interpreter:n,env:v,config:g&&new URL(t.getAttribute("config"),location.href).href,get pySrc(){return h?y:k.state.doc.toString()},get outDiv(){return h?null:A}};if(h)return void u.call(b,{currentTarget:null});const w=t.getAttribute("target");let $;if(w){if($=document.getElementById(w)||document.querySelector(w),!$)throw new Error(`Unknown target ${w}`)}else $=document.createElement(`${r}-editor`),$.style.display="block",t.after($);$.id||($.id=s(r)),$.hasAttribute("exec-id")||$.setAttribute("exec-id",0),$.hasAttribute("root")||$.setAttribute("root",$.id);const E=u.bind(b),[x,A]=m(E,r);x.dataset.env=t.hasAttribute("env")?v:n;const L=x.querySelector(`.${r}-editor-input > div`).attachShadow({mode:"open"});L.innerHTML="<style> :host { all: initial; }</style>",$.appendChild(x);const C=e(t.textContent).trim(),S=/^(\s+)/m.test(C)?RegExp.$1:"    ",k=new i({extensions:[d.of(S),(new a).of(l()),p.of([...f,{key:"Ctrl-Enter",run:E,preventDefault:!0},{key:"Cmd-Enter",run:E,preventDefault:!0},{key:"Shift-Enter",run:E,preventDefault:!0}]),o],parent:L,doc:C});k.focus()};let f=0,h=Promise.resolve();const g=()=>{f=0,v()},v=()=>{if(!f){f=setTimeout(g,250);for(const[e,r]of t){const t=`script[type="${e}-editor"]`;for(const n of document.querySelectorAll(t))n.type+="-active",h=h.then((()=>p(n,e,r)))}return h}};new MutationObserver(v).observe(document,{childList:!0,subtree:!0});var y=v();export{y as default};
//# sourceMappingURL=py-editor-s2k8SC31.js.map
