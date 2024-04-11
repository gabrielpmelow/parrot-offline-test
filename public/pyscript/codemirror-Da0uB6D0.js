import{V as e,a as t,E as i,b as s,c as n,r as o,h as r,W as a,d as l,e as c,f as h,i as d,j as u,m as f,n as m,o as p,k as g}from"./codemirror_view-Bz8y6BoV.js";import{codePointAt as v,fromCodePoint as x,codePointSize as b,StateEffect as w,Facet as y,combineConfig as k,CharCategory as S,EditorSelection as C,Prec as M,StateField as A,EditorState as L,findClusterBreak as q,RangeSetBuilder as R}from"./codemirror_state-BKbyfKsm.js";import{k as D,l as W,m as F,n as I,o as P,p as E}from"./codemirror_language-DCl5sMoK.js";import{history as $,defaultKeymap as T,historyKeymap as O}from"./codemirror_commands-Cda0Zxd7.js";import{a as z,b as B,d as j,e as _}from"./index-2LL_kWLg.js";function V(){var e=arguments[0];"string"==typeof e&&(e=document.createElement(e));var t=1,i=arguments[1];if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var n=i[s];"string"==typeof n?e.setAttribute(s,n):null!=n&&(e[s]=n)}t++}for(;t<arguments.length;t++)H(e,arguments[t]);return e}function H(e,t){if("string"==typeof t)e.appendChild(document.createTextNode(t));else if(null==t);else if(null!=t.nodeType)e.appendChild(t);else{if(!Array.isArray(t))throw new RangeError("Unsupported child node: "+t);for(var i=0;i<t.length;i++)H(e,t[i])}}const N="function"==typeof String.prototype.normalize?e=>e.normalize("NFKD"):e=>e;class U{constructor(e,t,i=0,s=e.length,n,o){this.test=o,this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(i,s),this.bufferStart=i,this.normalize=n?e=>n(N(e)):N,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return v(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=x(e),i=this.bufferStart+this.bufferPos;this.bufferPos+=b(e);let s=this.normalize(t);for(let e=0,n=i;;e++){let o=s.charCodeAt(e),r=this.match(o,n,this.bufferPos+this.bufferStart);if(e==s.length-1){if(r)return this.value=r,this;break}n==i&&e<t.length&&t.charCodeAt(e)==o&&n++}}}match(e,t,i){let s=null;for(let t=0;t<this.matches.length;t+=2){let n=this.matches[t],o=!1;this.query.charCodeAt(n)==e&&(n==this.query.length-1?s={from:this.matches[t+1],to:i}:(this.matches[t]++,o=!0)),o||(this.matches.splice(t,2),t-=2)}return this.query.charCodeAt(0)==e&&(1==this.query.length?s={from:t,to:i}:this.matches.push(1,t)),s&&this.test&&!this.test(s.from,s.to,this.buffer,this.bufferStart)&&(s=null),s}}"undefined"!=typeof Symbol&&(U.prototype[Symbol.iterator]=function(){return this});const K={from:-1,to:-1,match:/.*/.exec("")},Q="gm"+(null==/x/.unicode?"":"u");class G{constructor(e,t,i,s=0,n=e.length){if(this.text=e,this.to=n,this.curLine="",this.done=!1,this.value=K,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new J(e,t,i,s,n);this.re=new RegExp(t,Q+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.iter=e.iter();let o=e.lineAt(s);this.curLineStart=o.from,this.matchPos=X(e,s),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let i=this.curLineStart+t.index,s=i+t[0].length;if(this.matchPos=X(this.text,s+(i==s?1:0)),i==this.curLineStart+this.curLine.length&&this.nextLine(),(i<s||i>this.value.to)&&(!this.test||this.test(i,s,t)))return this.value={from:i,to:s,match:t},this;e=this.matchPos-this.curLineStart}else{if(!(this.curLineStart+this.curLine.length<this.to))return this.done=!0,this;this.nextLine(),e=0}}}}const Y=new WeakMap;class Z{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(e,t,i){let s=Y.get(e);if(!s||s.from>=i||s.to<=t){let s=new Z(t,e.sliceString(t,i));return Y.set(e,s),s}if(s.from==t&&s.to==i)return s;let{text:n,from:o}=s;return o>t&&(n=e.sliceString(t,o)+n,o=t),s.to<i&&(n+=e.sliceString(s.to,i)),Y.set(e,new Z(o,n)),new Z(t,n.slice(t-o,i-o))}}class J{constructor(e,t,i,s,n){this.text=e,this.to=n,this.done=!1,this.value=K,this.matchPos=X(e,s),this.re=new RegExp(t,Q+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.flat=Z.get(e,s,this.chunkEnd(s+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let e=this.flat.from+t.index,i=e+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(e,i,t)))return this.value={from:e,to:i,match:t},this.matchPos=X(this.text,i+(e==i?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=Z.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+2*this.flat.text.length))}}}function X(e,t){if(t>=e.length)return t;let i,s=e.lineAt(t);for(;t<s.to&&(i=s.text.charCodeAt(t-s.from))>=56320&&i<57344;)t++;return t}function ee(e){let t=V("input",{class:"cm-textfield",name:"line",value:String(e.state.doc.lineAt(e.state.selection.main.head).number)});function s(){let s=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);if(!s)return;let{state:n}=e,o=n.doc.lineAt(n.selection.main.head),[,r,a,l,c]=s,h=l?+l.slice(1):0,d=a?+a:o.number;if(a&&c){let e=d/100;r&&(e=e*("-"==r?-1:1)+o.number/n.doc.lines),d=Math.round(n.doc.lines*e)}else a&&r&&(d=d*("-"==r?-1:1)+o.number);let u=n.doc.line(Math.max(1,Math.min(n.doc.lines,d))),f=C.cursor(u.from+Math.max(0,Math.min(h,u.length)));e.dispatch({effects:[te.of(!1),i.scrollIntoView(f.from,{y:"center"})],selection:f}),e.focus()}return{dom:V("form",{class:"cm-gotoLine",onkeydown:t=>{27==t.keyCode?(t.preventDefault(),e.dispatch({effects:te.of(!1)}),e.focus()):13==t.keyCode&&(t.preventDefault(),s())},onsubmit:e=>{e.preventDefault(),s()}},V("label",e.state.phrase("Go to line"),": ",t)," ",V("button",{class:"cm-button",type:"submit"},e.state.phrase("go")))}}"undefined"!=typeof Symbol&&(G.prototype[Symbol.iterator]=J.prototype[Symbol.iterator]=function(){return this});const te=w.define(),ie=A.define({create:()=>!0,update(e,t){for(let i of t.effects)i.is(te)&&(e=i.value);return e},provide:e=>n.from(e,(e=>e?ee:null))}),se=i.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),ne={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},oe=y.define({combine:e=>k(e,ne,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})});function re(e){let t=[de,he];return e&&t.push(oe.of(e)),t}const ae=t.mark({class:"cm-selectionMatch"}),le=t.mark({class:"cm-selectionMatch cm-selectionMatch-main"});function ce(e,t,i,s){return!(0!=i&&e(t.sliceDoc(i-1,i))==S.Word||s!=t.doc.length&&e(t.sliceDoc(s,s+1))==S.Word)}const he=e.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.selectionSet||e.docChanged||e.viewportChanged)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let i=e.state.facet(oe),{state:s}=e,n=s.selection;if(n.ranges.length>1)return t.none;let o,r=n.main,a=null;if(r.empty){if(!i.highlightWordAroundCursor)return t.none;let e=s.wordAt(r.head);if(!e)return t.none;a=s.charCategorizer(r.head),o=s.sliceDoc(e.from,e.to)}else{let e=r.to-r.from;if(e<i.minSelectionLength||e>200)return t.none;if(i.wholeWords){if(o=s.sliceDoc(r.from,r.to),a=s.charCategorizer(r.head),!ce(a,s,r.from,r.to)||!function(e,t,i,s){return e(t.sliceDoc(i,i+1))==S.Word&&e(t.sliceDoc(s-1,s))==S.Word}(a,s,r.from,r.to))return t.none}else if(o=s.sliceDoc(r.from,r.to),!o)return t.none}let l=[];for(let n of e.visibleRanges){let e=new U(s.doc,o,n.from,n.to);for(;!e.next().done;){let{from:n,to:o}=e.value;if((!a||ce(a,s,n,o))&&(r.empty&&n<=r.from&&o>=r.to?l.push(le.range(n,o)):(n>=r.to||o<=r.from)&&l.push(ae.range(n,o)),l.length>i.maxMatches))return t.none}}return t.set(l)}},{decorations:e=>e.decorations}),de=i.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}});const ue=y.define({combine:e=>k(e,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new je(e),scrollToMatch:e=>i.scrollIntoView(e)})});class fe{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||"",this.valid=!!this.search&&(!this.regexp||function(e){try{return new RegExp(e,Q),!0}catch(e){return!1}}(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,((e,t)=>"n"==t?"\n":"r"==t?"\r":"t"==t?"\t":"\\"))}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord}create(){return this.regexp?new we(this):new ge(this)}getCursor(e,t=0,i){let s=e.doc?e:L.create({doc:e});return null==i&&(i=s.doc.length),this.regexp?ve(this,s,t,i):pe(this,s,t,i)}}class me{constructor(e){this.spec=e}}function pe(e,t,i,s){return new U(t.doc,e.unquoted,i,s,e.caseSensitive?void 0:e=>e.toLowerCase(),e.wholeWord?(n=t.doc,o=t.charCategorizer(t.selection.main.head),(e,t,i,s)=>((s>e||s+i.length<t)&&(s=Math.max(0,e-2),i=n.sliceString(s,Math.min(n.length,t+2))),!(o(xe(i,e-s))==S.Word&&o(be(i,e-s))==S.Word||o(be(i,t-s))==S.Word&&o(xe(i,t-s))==S.Word))):void 0);var n,o}class ge extends me{constructor(e){super(e)}nextMatch(e,t,i){let s=pe(this.spec,e,i,e.doc.length).nextOverlapping();return s.done&&(s=pe(this.spec,e,0,t).nextOverlapping()),s.done?null:s.value}prevMatchInRange(e,t,i){for(let s=i;;){let i=Math.max(t,s-1e4-this.spec.unquoted.length),n=pe(this.spec,e,i,s),o=null;for(;!n.nextOverlapping().done;)o=n.value;if(o)return o;if(i==t)return null;s-=1e4}}prevMatch(e,t,i){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,i,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let i=pe(this.spec,e,0,e.doc.length),s=[];for(;!i.next().done;){if(s.length>=t)return null;s.push(i.value)}return s}highlight(e,t,i,s){let n=pe(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(i+this.spec.unquoted.length,e.doc.length));for(;!n.next().done;)s(n.value.from,n.value.to)}}function ve(e,t,i,s){return new G(t.doc,e.search,{ignoreCase:!e.caseSensitive,test:e.wholeWord?(n=t.charCategorizer(t.selection.main.head),(e,t,i)=>!i[0].length||(n(xe(i.input,i.index))!=S.Word||n(be(i.input,i.index))!=S.Word)&&(n(be(i.input,i.index+i[0].length))!=S.Word||n(xe(i.input,i.index+i[0].length))!=S.Word)):void 0},i,s);var n}function xe(e,t){return e.slice(q(e,t,!1),t)}function be(e,t){return e.slice(t,q(e,t))}class we extends me{nextMatch(e,t,i){let s=ve(this.spec,e,i,e.doc.length).next();return s.done&&(s=ve(this.spec,e,0,t).next()),s.done?null:s.value}prevMatchInRange(e,t,i){for(let s=1;;s++){let n=Math.max(t,i-1e4*s),o=ve(this.spec,e,n,i),r=null;for(;!o.next().done;)r=o.value;if(r&&(n==t||r.from>n+10))return r;if(n==t)return null}}prevMatch(e,t,i){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,i,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&\d+])/g,((t,i)=>"$"==i?"$":"&"==i?e.match[0]:"0"!=i&&+i<e.match.length?e.match[i]:t))}matchAll(e,t){let i=ve(this.spec,e,0,e.doc.length),s=[];for(;!i.next().done;){if(s.length>=t)return null;s.push(i.value)}return s}highlight(e,t,i,s){let n=ve(this.spec,e,Math.max(0,t-250),Math.min(i+250,e.doc.length));for(;!n.next().done;)s(n.value.from,n.value.to)}}const ye=w.define(),ke=w.define(),Se=A.define({create:e=>new Ce(Ee(e).create(),null),update(e,t){for(let i of t.effects)i.is(ye)?e=new Ce(i.value.create(),e.panel):i.is(ke)&&(e=new Ce(e.query,i.value?Pe:null));return e},provide:e=>n.from(e,(e=>e.panel))});class Ce{constructor(e,t){this.query=e,this.panel=t}}const Me=t.mark({class:"cm-searchMatch"}),Ae=t.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Le=e.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(Se))}update(e){let t=e.state.field(Se);(t!=e.startState.field(Se)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(t))}highlight({query:e,panel:i}){if(!i||!e.spec.valid)return t.none;let{view:s}=this,n=new R;for(let t=0,i=s.visibleRanges,o=i.length;t<o;t++){let{from:r,to:a}=i[t];for(;t<o-1&&a>i[t+1].from-500;)a=i[++t].to;e.highlight(s.state,r,a,((e,t)=>{let i=s.state.selection.ranges.some((i=>i.from==e&&i.to==t));n.add(e,t,i?Ae:Me)}))}return n.finish()}},{decorations:e=>e.decorations});function qe(e){return t=>{let i=t.state.field(Se,!1);return i&&i.query.spec.valid?e(t,i):Oe(t)}}const Re=qe(((e,{query:t})=>{let{to:i}=e.state.selection.main,s=t.nextMatch(e.state,i,i);if(!s)return!1;let n=C.single(s.from,s.to),o=e.state.facet(ue);return e.dispatch({selection:n,effects:[Ne(e,s),o.scrollToMatch(n.main,e)],userEvent:"select.search"}),Te(e),!0})),De=qe(((e,{query:t})=>{let{state:i}=e,{from:s}=i.selection.main,n=t.prevMatch(i,s,s);if(!n)return!1;let o=C.single(n.from,n.to),r=e.state.facet(ue);return e.dispatch({selection:o,effects:[Ne(e,n),r.scrollToMatch(o.main,e)],userEvent:"select.search"}),Te(e),!0})),We=qe(((e,{query:t})=>{let i=t.matchAll(e.state,1e3);return!(!i||!i.length)&&(e.dispatch({selection:C.create(i.map((e=>C.range(e.from,e.to)))),userEvent:"select.search.matches"}),!0)})),Fe=qe(((e,{query:t})=>{let{state:s}=e,{from:n,to:o}=s.selection.main;if(s.readOnly)return!1;let r=t.nextMatch(s,n,n);if(!r)return!1;let a,l,c=[],h=[];if(r.from==n&&r.to==o&&(l=s.toText(t.getReplacement(r)),c.push({from:r.from,to:r.to,insert:l}),r=t.nextMatch(s,r.from,r.to),h.push(i.announce.of(s.phrase("replaced match on line $",s.doc.lineAt(n).number)+"."))),r){let t=0==c.length||c[0].from>=r.to?0:r.to-r.from-l.length;a=C.single(r.from-t,r.to-t),h.push(Ne(e,r)),h.push(s.facet(ue).scrollToMatch(a.main,e))}return e.dispatch({changes:c,selection:a,effects:h,userEvent:"input.replace"}),!0})),Ie=qe(((e,{query:t})=>{if(e.state.readOnly)return!1;let s=t.matchAll(e.state,1e9).map((e=>{let{from:i,to:s}=e;return{from:i,to:s,insert:t.getReplacement(e)}}));if(!s.length)return!1;let n=e.state.phrase("replaced $ matches",s.length)+".";return e.dispatch({changes:s,effects:i.announce.of(n),userEvent:"input.replace.all"}),!0}));function Pe(e){return e.state.facet(ue).createPanel(e)}function Ee(e,t){var i,s,n,o,r;let a=e.selection.main,l=a.empty||a.to>a.from+100?"":e.sliceDoc(a.from,a.to);if(t&&!l)return t;let c=e.facet(ue);return new fe({search:(null!==(i=null==t?void 0:t.literal)&&void 0!==i?i:c.literal)?l:l.replace(/\n/g,"\\n"),caseSensitive:null!==(s=null==t?void 0:t.caseSensitive)&&void 0!==s?s:c.caseSensitive,literal:null!==(n=null==t?void 0:t.literal)&&void 0!==n?n:c.literal,regexp:null!==(o=null==t?void 0:t.regexp)&&void 0!==o?o:c.regexp,wholeWord:null!==(r=null==t?void 0:t.wholeWord)&&void 0!==r?r:c.wholeWord})}function $e(e){let t=s(e,Pe);return t&&t.dom.querySelector("[main-field]")}function Te(e){let t=$e(e);t&&t==e.root.activeElement&&t.select()}const Oe=e=>{let t=e.state.field(Se,!1);if(t&&t.panel){let i=$e(e);if(i&&i!=e.root.activeElement){let s=Ee(e.state,t.query.spec);s.valid&&e.dispatch({effects:ye.of(s)}),i.focus(),i.select()}}else e.dispatch({effects:[ke.of(!0),t?ye.of(Ee(e.state,t.query.spec)):w.appendConfig.of(Ke)]});return!0},ze=e=>{let t=e.state.field(Se,!1);if(!t||!t.panel)return!1;let i=s(e,Pe);return i&&i.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:ke.of(!1)}),!0},Be=[{key:"Mod-f",run:Oe,scope:"editor search-panel"},{key:"F3",run:Re,shift:De,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:Re,shift:De,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:ze,scope:"editor search-panel"},{key:"Mod-Shift-l",run:({state:e,dispatch:t})=>{let i=e.selection;if(i.ranges.length>1||i.main.empty)return!1;let{from:s,to:n}=i.main,o=[],r=0;for(let t=new U(e.doc,e.sliceDoc(s,n));!t.next().done;){if(o.length>1e3)return!1;t.value.from==s&&(r=o.length),o.push(C.range(t.value.from,t.value.to))}return t(e.update({selection:C.create(o,r),userEvent:"select.search.matches"})),!0}},{key:"Mod-Alt-g",run:e=>{let t=s(e,ee);if(!t){let i=[te.of(!0)];null==e.state.field(ie,!1)&&i.push(w.appendConfig.of([ie,se])),e.dispatch({effects:i}),t=s(e,ee)}return t&&t.dom.querySelector("input").select(),!0}},{key:"Mod-d",run:({state:e,dispatch:t})=>{let{ranges:s}=e.selection;if(s.some((e=>e.from===e.to)))return(({state:e,dispatch:t})=>{let{selection:i}=e,s=C.create(i.ranges.map((t=>e.wordAt(t.head)||C.cursor(t.head))),i.mainIndex);return!s.eq(i)&&(t(e.update({selection:s})),!0)})({state:e,dispatch:t});let n=e.sliceDoc(s[0].from,s[0].to);if(e.selection.ranges.some((t=>e.sliceDoc(t.from,t.to)!=n)))return!1;let o=function(e,t){let{main:i,ranges:s}=e.selection,n=e.wordAt(i.head),o=n&&n.from==i.from&&n.to==i.to;for(let i=!1,n=new U(e.doc,t,s[s.length-1].to);;){if(n.next(),!n.done){if(i&&s.some((e=>e.from==n.value.from)))continue;if(o){let t=e.wordAt(n.value.from);if(!t||t.from!=n.value.from||t.to!=n.value.to)continue}return n.value}if(i)return null;n=new U(e.doc,t,0,Math.max(0,s[s.length-1].from-1)),i=!0}}(e,n);return!!o&&(t(e.update({selection:e.selection.addRange(C.range(o.from,o.to),!1),effects:i.scrollIntoView(o.to)})),!0)},preventDefault:!0}];class je{constructor(e){this.view=e;let t=this.query=e.state.field(Se).query.spec;function i(e,t,i){return V("button",{class:"cm-button",name:e,onclick:t,type:"button"},i)}this.commit=this.commit.bind(this),this.searchField=V("input",{value:t.search,placeholder:_e(e,"Find"),"aria-label":_e(e,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=V("input",{value:t.replace,placeholder:_e(e,"Replace"),"aria-label":_e(e,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=V("input",{type:"checkbox",name:"case",form:"",checked:t.caseSensitive,onchange:this.commit}),this.reField=V("input",{type:"checkbox",name:"re",form:"",checked:t.regexp,onchange:this.commit}),this.wordField=V("input",{type:"checkbox",name:"word",form:"",checked:t.wholeWord,onchange:this.commit}),this.dom=V("div",{onkeydown:e=>this.keydown(e),class:"cm-search"},[this.searchField,i("next",(()=>Re(e)),[_e(e,"next")]),i("prev",(()=>De(e)),[_e(e,"previous")]),i("select",(()=>We(e)),[_e(e,"all")]),V("label",null,[this.caseField,_e(e,"match case")]),V("label",null,[this.reField,_e(e,"regexp")]),V("label",null,[this.wordField,_e(e,"by word")]),...e.state.readOnly?[]:[V("br"),this.replaceField,i("replace",(()=>Fe(e)),[_e(e,"replace")]),i("replaceAll",(()=>Ie(e)),[_e(e,"replace all")])],V("button",{name:"close",onclick:()=>ze(e),"aria-label":_e(e,"close"),type:"button"},["×"])])}commit(){let e=new fe({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:ye.of(e)}))}keydown(e){o(this.view,e,"search-panel")?e.preventDefault():13==e.keyCode&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?De:Re)(this.view)):13==e.keyCode&&e.target==this.replaceField&&(e.preventDefault(),Fe(this.view))}update(e){for(let t of e.transactions)for(let e of t.effects)e.is(ye)&&!e.value.eq(this.query)&&this.setQuery(e.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(ue).top}}function _e(e,t){return e.state.phrase(t)}const Ve=30,He=/[\s\.,:;?!]/;function Ne(e,{from:t,to:s}){let n=e.state.doc.lineAt(t),o=e.state.doc.lineAt(s).to,r=Math.max(n.from,t-Ve),a=Math.min(o,s+Ve),l=e.state.sliceDoc(r,a);if(r!=n.from)for(let e=0;e<Ve;e++)if(!He.test(l[e+1])&&He.test(l[e])){l=l.slice(e);break}if(a!=o)for(let e=l.length-1;e>l.length-Ve;e--)if(!He.test(l[e-1])&&He.test(l[e])){l=l.slice(0,e);break}return i.announce.of(`${e.state.phrase("current match")}. ${l} ${e.state.phrase("on line")} ${n.number}.`)}const Ue=i.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),Ke=[Se,M.low(Le),Ue];class Qe{constructor(e,t,i){this.from=e,this.to=t,this.diagnostic=i}}class Ge{constructor(e,t,i){this.diagnostics=e,this.panel=t,this.selected=i}static init(e,i,s){let n=e,o=s.facet(rt).markerFilter;o&&(n=o(n,s));let r=t.set(n.map((e=>e.from==e.to||e.from==e.to-1&&s.doc.lineAt(e.from).to==e.from?t.widget({widget:new ct(e),diagnostic:e}).range(e.from):t.mark({attributes:{class:"cm-lintRange cm-lintRange-"+e.severity+(e.markClass?" "+e.markClass:"")},diagnostic:e,inclusive:!0}).range(e.from,e.to))),!0);return new Ge(r,i,Ye(r))}}function Ye(e,t=null,i=0){let s=null;return e.between(i,1e9,((e,i,{spec:n})=>{if(!t||n.diagnostic==t)return s=new Qe(e,i,n.diagnostic),!1})),s}const Ze=w.define(),Je=w.define(),Xe=w.define(),et=A.define({create:()=>new Ge(t.none,null,null),update(e,t){if(t.docChanged){let i=e.diagnostics.map(t.changes),s=null;if(e.selected){let n=t.changes.mapPos(e.selected.from,1);s=Ye(i,e.selected.diagnostic,n)||Ye(i,null,n)}e=new Ge(i,e.panel,s)}for(let i of t.effects)i.is(Ze)?e=Ge.init(i.value,e.panel,t.state):i.is(Je)?e=new Ge(e.diagnostics,i.value?dt.open:null,e.selected):i.is(Xe)&&(e=new Ge(e.diagnostics,e.panel,i.value));return e},provide:e=>[n.from(e,(e=>e.panel)),i.decorations.from(e,(e=>e.diagnostics))]}),tt=t.mark({class:"cm-lintRange cm-lintRange-active",inclusive:!0});function it(e,t,i){let{diagnostics:s}=e.state.field(et),n=[],o=2e8,r=0;s.between(t-(i<0?1:0),t+(i>0?1:0),((e,s,{spec:a})=>{t>=e&&t<=s&&(e==s||(t>e||i>0)&&(t<s||i<0))&&(n.push(a.diagnostic),o=Math.min(e,o),r=Math.max(s,r))}));let a=e.state.facet(rt).tooltipFilter;return a&&(n=a(n,e.state)),n.length?{pos:o,end:r,above:e.state.doc.lineAt(o).to<r,create:()=>({dom:st(e,n)})}:null}function st(e,t){return V("ul",{class:"cm-tooltip-lint"},t.map((t=>lt(e,t,!1))))}const nt=e=>{let t=e.state.field(et,!1);return!(!t||!t.panel)&&(e.dispatch({effects:Je.of(!1)}),!0)},ot=[{key:"Mod-Shift-m",run:e=>{let t=e.state.field(et,!1);var i,n;t&&t.panel||e.dispatch({effects:(i=e.state,n=[Je.of(!0)],i.field(et,!1)?n:n.concat(w.appendConfig.of(mt)))});let o=s(e,dt.open);return o&&o.dom.querySelector(".cm-panel-lint ul").focus(),!0},preventDefault:!0},{key:"F8",run:e=>{let t=e.state.field(et,!1);if(!t)return!1;let i=e.state.selection.main,s=t.diagnostics.iter(i.to+1);return!(!s.value&&(s=t.diagnostics.iter(0),!s.value||s.from==i.from&&s.to==i.to))&&(e.dispatch({selection:{anchor:s.from,head:s.to},scrollIntoView:!0}),!0)}}],rt=y.define({combine:e=>Object.assign({sources:e.map((e=>e.source)).filter((e=>null!=e))},k(e.map((e=>e.config)),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null},{needsRefresh:(e,t)=>e?t?i=>e(i)||t(i):e:t}))});function at(e){let t=[];if(e)e:for(let{name:i}of e){for(let e=0;e<i.length;e++){let s=i[e];if(/[a-zA-Z]/.test(s)&&!t.some((e=>e.toLowerCase()==s.toLowerCase()))){t.push(s);continue e}}t.push("")}return t}function lt(e,t,i){var s;let n=i?at(t.actions):[];return V("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},V("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage():t.message),null===(s=t.actions)||void 0===s?void 0:s.map(((i,s)=>{let o=!1,r=s=>{if(s.preventDefault(),o)return;o=!0;let n=Ye(e.state.field(et).diagnostics,t);n&&i.apply(e,n.from,n.to)},{name:a}=i,l=n[s]?a.indexOf(n[s]):-1,c=l<0?a:[a.slice(0,l),V("u",a.slice(l,l+1)),a.slice(l+1)];return V("button",{type:"button",class:"cm-diagnosticAction",onclick:r,onmousedown:r,"aria-label":` Action: ${a}${l<0?"":` (access key "${n[s]})"`}.`},c)})),t.source&&V("div",{class:"cm-diagnosticSource"},t.source))}class ct extends a{constructor(e){super(),this.diagnostic=e}eq(e){return e.diagnostic==this.diagnostic}toDOM(){return V("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class ht{constructor(e,t){this.diagnostic=t,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=lt(e,t,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class dt{constructor(e){this.view=e,this.items=[];this.list=V("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:t=>{if(27==t.keyCode)nt(this.view),this.view.focus();else if(38==t.keyCode||33==t.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(40==t.keyCode||34==t.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(36==t.keyCode)this.moveSelection(0);else if(35==t.keyCode)this.moveSelection(this.items.length-1);else if(13==t.keyCode)this.view.focus();else{if(!(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:i}=this.items[this.selectedIndex],s=at(i.actions);for(let n=0;n<s.length;n++)if(s[n].toUpperCase().charCodeAt(0)==t.keyCode){let t=Ye(this.view.state.field(et).diagnostics,i);t&&i.actions[n].apply(e,t.from,t.to)}}}t.preventDefault()},onclick:e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)}}),this.dom=V("div",{class:"cm-panel-lint"},this.list,V("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>nt(this.view)},"×")),this.update()}get selectedIndex(){let e=this.view.state.field(et).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(et),i=0,s=!1,n=null;for(e.between(0,this.view.state.doc.length,((e,o,{spec:r})=>{let a,l=-1;for(let e=i;e<this.items.length;e++)if(this.items[e].diagnostic==r.diagnostic){l=e;break}l<0?(a=new ht(this.view,r.diagnostic),this.items.splice(i,0,a),s=!0):(a=this.items[l],l>i&&(this.items.splice(i,l-i),s=!0)),t&&a.diagnostic==t.diagnostic?a.dom.hasAttribute("aria-selected")||(a.dom.setAttribute("aria-selected","true"),n=a):a.dom.hasAttribute("aria-selected")&&a.dom.removeAttribute("aria-selected"),i++}));i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)s=!0,this.items.pop();0==this.items.length&&(this.items.push(new ht(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),s=!0),n?(this.list.setAttribute("aria-activedescendant",n.id),this.view.requestMeasure({key:this,read:()=>({sel:n.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let i=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/i:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/i)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),s&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)t();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=Ye(this.view.state.field(et).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:Xe.of(t)})}static open(e){return new dt(e)}}function ut(e){return function(e,t='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const ft=i.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:ut("#d11")},".cm-lintRange-warning":{backgroundImage:ut("orange")},".cm-lintRange-info":{backgroundImage:ut("#999")},".cm-lintRange-hint":{backgroundImage:ut("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}}),mt=[et,i.decorations.compute([et],(e=>{let{selected:i,panel:s}=e.field(et);return i&&s&&i.from!=i.to?t.set([tt.range(i.from,i.to)]):t.none})),r(it,{hideOn:function(e,t){let i=e.startState.doc.lineAt(t.pos);return!(!e.effects.some((e=>e.is(Ze)))&&!e.changes.touchesRange(i.from,i.to))}}),ft],pt=(()=>[l(),c(),h(),$(),D(),d(),u(),L.allowMultipleSelections.of(!0),W(),F(I,{fallback:!0}),P(),z(),B(),f(),m(),p(),re(),g.of([...j,...T,...Be,...O,...E,..._,...ot])])(),gt=(()=>[h(),$(),d(),F(I,{fallback:!0}),g.of([...T,...O])])();export{i as EditorView,pt as basicSetup,gt as minimalSetup};
//# sourceMappingURL=codemirror-Da0uB6D0.js.map
