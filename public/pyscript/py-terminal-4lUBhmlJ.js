import{T as e,c as t,e as r,a as n}from"./core-2NwtOg82.js";import{notify as i}from"./error-CYOIlKpM.js";const o=[],s=e=>{throw i(e),new Error(e)},a=({attributes:{worker:e}})=>!e,l=new WeakSet;let d=!0;const c=({interpreter:e,io:t,run:r,type:n},{sync:i})=>{if(!i.is_pyterminal())return;r("from polyscript import currentScript as _; __terminal__ = _.terminal; del _");let o="";const{pyterminal_read:s,pyterminal_write:a}=i,l=new TextDecoder,d={isatty:!1,write:e=>(o=l.decode(e),a(o),e.length)};if(t.stderr=e=>{a(String(e.message||e))},"mpy"===n){e.registerJsModule("_pyscript_input",{input:s}),r("from _pyscript_input import input");const n=e=>{const t=[];let r=0;return n=>{let i=0;for(const o of n)t.push(o),r?r--:194<=o&&o<=223?r=1:224<=o&&o<=239?r=2:240<=o&&o<=244&&(r=3),r||(i+=t.length,e(new Uint8Array(t.splice(0))));return i}};t.stdout=n(d.write),e.registerJsModule("code",{interact(){let r="",i=1;const o=new TextEncoder,d=[],c=n((e=>{d.push(...e),a(l.decode(e))}));t.stdout=e=>i++>r.length?c(e):0,e.replInit(),function t(){const n=l.decode(new Uint8Array(d.splice(0))),a=`${s(n.split("\n").at(-1))}\r`;i=0,r=o.encode(a);for(const t of r)e.replProcessChar(t);t()}()}})}else e.setStdout(d),e.setStderr(d),e.setStdin({isatty:!1,stdin:()=>s(o)})},m=async e=>{const[{Terminal:t},{Readline:i},{FitAddon:o}]=await Promise.all([import("./xterm-DqawCVsv.js"),import("./xterm-readline-D247p8vq.js"),import("./xterm_addon-fit--gyF3PcZ.js")]),s=new i,a=r=>{let i=e;const a=e.getAttribute("target");if(a){if(i=document.getElementById(a)||document.querySelector(a),!i)throw new Error(`Unknown target ${a}`)}else i=document.createElement("py-terminal"),i.style.display="block",e.after(i);const l=new t({theme:{background:"#191A19",foreground:"#F5F2E7"},...r}),d=new o;return l.loadAddon(d),l.loadAddon(s),l.open(i),d.fit(),l.focus(),n(e,{terminal:{value:l},process:{value:async e=>{for(const t of e.split(/(?:\r|\n|\r\n)/)){l.paste(`${t}\n`);do{await new Promise((e=>setTimeout(e,0)))}while(!s.activeRead?.resolve);s.activeRead.resolve(t)}}}}),l};e.hasAttribute("worker")?(r.main.onWorker.add((function e(t,n){l.has(n)||(l.add(n),r.main.onWorker.delete(e),a({disableStdin:!1,cursorBlink:!0,cursorStyle:"block"}),n.sync.is_pyterminal=()=>!0,n.sync.pyterminal_read=s.read.bind(s),n.sync.pyterminal_write=s.write.bind(s))})),r.worker.onReady.add(c)):r.main.onReady.add((function e({interpreter:t,io:n,run:i,type:o}){console.warn("py-terminal is read only on main thread"),r.main.onReady.delete(e),globalThis.__py_terminal__=a({disableStdin:!0,cursorBlink:!1,cursorStyle:"underline"}),i("from js import __py_terminal__ as __terminal__"),delete globalThis.__py_terminal__,n.stderr=e=>{s.write(String(e.message||e))},"mpy"===o&&(t.setStdin=Object,t.setStderr=Object,t.setStdout=({write:e})=>{n.stdout=e});let l="";const d=new TextDecoder,c={isatty:!1,write:e=>(l=d.decode(e),s.write(l),e.length)};t.setStdout(c),t.setStderr(c),t.setStdin({isatty:!1,stdin:()=>s.read(l)})}))};for(const r of e.keys()){const e=`script[type="${r}"][terminal],${r}-script[terminal]`;o.push(e),t.set(e,(async e=>{const t=document.querySelectorAll(o.join(","));[].filter.call(t,a).length>1&&s("You can use at most 1 main terminal"),d&&(d=!1,document.head.append(Object.assign(document.createElement("link"),{rel:"stylesheet",href:new URL("./xterm.css",import.meta.url)}))),await m(e)}))}
//# sourceMappingURL=py-terminal-4lUBhmlJ.js.map
