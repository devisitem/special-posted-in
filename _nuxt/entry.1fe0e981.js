var Bf=Object.defineProperty;var zf=(e,t,n)=>t in e?Bf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Z=(e,t,n)=>(zf(e,typeof t!="symbol"?t+"":t,n),n);function yo(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ve={},En=[],ot=()=>{},Uf=()=>!1,Wf=/^on[^a-z]/,Pr=e=>Wf.test(e),bo=e=>e.startsWith("onUpdate:"),Pe=Object.assign,_o=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Kf=Object.prototype.hasOwnProperty,ie=(e,t)=>Kf.call(e,t),ee=Array.isArray,Sn=e=>Tr(e)==="[object Map]",uc=e=>Tr(e)==="[object Set]",Vf=e=>Tr(e)==="[object RegExp]",te=e=>typeof e=="function",_e=e=>typeof e=="string",Ms=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",fc=e=>(ge(e)||te(e))&&te(e.then)&&te(e.catch),dc=Object.prototype.toString,Tr=e=>dc.call(e),Yf=e=>Tr(e).slice(8,-1),pc=e=>Tr(e)==="[object Object]",wo=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tr=yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ns=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},qf=/-(\w)/g,mt=Ns(e=>e.replace(qf,(t,n)=>n?n.toUpperCase():"")),Jf=/\B([A-Z])/g,Fn=Ns(e=>e.replace(Jf,"-$1").toLowerCase()),Ls=Ns(e=>e.charAt(0).toUpperCase()+e.slice(1)),na=Ns(e=>e?`on${Ls(e)}`:""),on=(e,t)=>!Object.is(e,t),nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},hc=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let vi;const ka=()=>vi||(vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hs(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=_e(r)?ed(r):Hs(r);if(s)for(const a in s)t[a]=s[a]}return t}else if(_e(e)||ge(e))return e}const Gf=/;(?![^(]*\))/g,Qf=/:([^]+)/,Zf=/\/\*[^]*?\*\//g;function ed(e){const t={};return e.replace(Zf,"").split(Gf).forEach(n=>{if(n){const r=n.split(Qf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qe(e){let t="";if(_e(e))t=e;else if(ee(e))for(let n=0;n<e.length;n++){const r=Qe(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function td(e){if(!e)return null;let{class:t,style:n}=e;return t&&!_e(t)&&(e.class=Qe(t)),n&&(e.style=Hs(n)),e}const nd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rd=yo(nd);function mc(e){return!!e||e===""}const Cn=e=>_e(e)?e:e==null?"":ee(e)||ge(e)&&(e.toString===dc||!te(e.toString))?JSON.stringify(e,gc,2):String(e),gc=(e,t)=>t&&t.__v_isRef?gc(e,t.value):Sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:uc(t)?{[`Set(${t.size})`]:[...t.values()]}:ge(t)&&!ee(t)&&!pc(t)?String(t):t;let Ve;class vc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ve;try{return Ve=this,t()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function xo(e){return new vc(e)}function sd(e,t=Ve){t&&t.active&&t.effects.push(e)}function yc(){return Ve}function ad(e){Ve&&Ve.cleanups.push(e)}const ko=e=>{const t=new Set(e);return t.w=0,t.n=0,t},bc=e=>(e.w&Ut)>0,_c=e=>(e.n&Ut)>0,od=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ut},id=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];bc(s)&&!_c(s)?s.delete(e):t[n++]=s,s.w&=~Ut,s.n&=~Ut}t.length=n}},ds=new WeakMap;let Gn=0,Ut=1;const Ea=30;let rt;const rn=Symbol(""),Sa=Symbol("");class Eo{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sd(this,r)}run(){if(!this.active)return this.fn();let t=rt,n=Dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=rt,rt=this,Dt=!0,Ut=1<<++Gn,Gn<=Ea?od(this):yi(this),this.fn()}finally{Gn<=Ea&&id(this),Ut=1<<--Gn,rt=this.parent,Dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(yi(this),this.onStop&&this.onStop(),this.active=!1)}}function yi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Dt=!0;const wc=[];function Dn(){wc.push(Dt),Dt=!1}function Bn(){const e=wc.pop();Dt=e===void 0?!0:e}function We(e,t,n){if(Dt&&rt){let r=ds.get(e);r||ds.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=ko()),xc(s)}}function xc(e,t){let n=!1;Gn<=Ea?_c(e)||(e.n|=Ut,n=!bc(e)):n=!e.has(rt),n&&(e.add(rt),rt.deps.push(e))}function _t(e,t,n,r,s,a){const o=ds.get(e);if(!o)return;let i=[];if(t==="clear")i=[...o.values()];else if(n==="length"&&ee(e)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||!Ms(c)&&c>=l)&&i.push(u)})}else switch(n!==void 0&&i.push(o.get(n)),t){case"add":ee(e)?wo(n)&&i.push(o.get("length")):(i.push(o.get(rn)),Sn(e)&&i.push(o.get(Sa)));break;case"delete":ee(e)||(i.push(o.get(rn)),Sn(e)&&i.push(o.get(Sa)));break;case"set":Sn(e)&&i.push(o.get(rn));break}if(i.length===1)i[0]&&Ca(i[0]);else{const l=[];for(const u of i)u&&l.push(...u);Ca(ko(l))}}function Ca(e,t){const n=ee(e)?e:[...e];for(const r of n)r.computed&&bi(r);for(const r of n)r.computed||bi(r)}function bi(e,t){(e!==rt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function ld(e,t){var n;return(n=ds.get(e))==null?void 0:n.get(t)}const cd=yo("__proto__,__v_isRef,__isVue"),kc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ms)),_i=ud();function ud(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ae(this);for(let a=0,o=this.length;a<o;a++)We(r,"get",a+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Dn();const r=ae(this)[t].apply(this,n);return Bn(),r}}),e}function fd(e){const t=ae(this);return We(t,"has",e),t.hasOwnProperty(e)}class Ec{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,a=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return a;if(n==="__v_raw"&&r===(s?a?Ed:Pc:a?Ac:Cc).get(t))return t;const o=ee(t);if(!s){if(o&&ie(_i,n))return Reflect.get(_i,n,r);if(n==="hasOwnProperty")return fd}const i=Reflect.get(t,n,r);return(Ms(n)?kc.has(n):cd(n))||(s||We(t,"get",n),a)?i:ke(i)?o&&wo(n)?i:i.value:ge(i)?s?Tc(i):de(i):i}}class Sc extends Ec{constructor(t=!1){super(!1,t)}set(t,n,r,s){let a=t[n];if(ln(a)&&ke(a)&&!ke(r))return!1;if(!this._shallow&&(!ps(r)&&!ln(r)&&(a=ae(a),r=ae(r)),!ee(t)&&ke(a)&&!ke(r)))return a.value=r,!0;const o=ee(t)&&wo(n)?Number(n)<t.length:ie(t,n),i=Reflect.set(t,n,r,s);return t===ae(s)&&(o?on(r,a)&&_t(t,"set",n,r):_t(t,"add",n,r)),i}deleteProperty(t,n){const r=ie(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&_t(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ms(n)||!kc.has(n))&&We(t,"has",n),r}ownKeys(t){return We(t,"iterate",ee(t)?"length":rn),Reflect.ownKeys(t)}}class dd extends Ec{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const pd=new Sc,hd=new dd,md=new Sc(!0),So=e=>e,$s=e=>Reflect.getPrototypeOf(e);function $r(e,t,n=!1,r=!1){e=e.__v_raw;const s=ae(e),a=ae(t);n||(on(t,a)&&We(s,"get",t),We(s,"get",a));const{has:o}=$s(s),i=r?So:n?Po:dr;if(o.call(s,t))return i(e.get(t));if(o.call(s,a))return i(e.get(a));e!==s&&e.get(t)}function jr(e,t=!1){const n=this.__v_raw,r=ae(n),s=ae(e);return t||(on(e,s)&&We(r,"has",e),We(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Fr(e,t=!1){return e=e.__v_raw,!t&&We(ae(e),"iterate",rn),Reflect.get(e,"size",e)}function wi(e){e=ae(e);const t=ae(this);return $s(t).has.call(t,e)||(t.add(e),_t(t,"add",e,e)),this}function xi(e,t){t=ae(t);const n=ae(this),{has:r,get:s}=$s(n);let a=r.call(n,e);a||(e=ae(e),a=r.call(n,e));const o=s.call(n,e);return n.set(e,t),a?on(t,o)&&_t(n,"set",e,t):_t(n,"add",e,t),this}function ki(e){const t=ae(this),{has:n,get:r}=$s(t);let s=n.call(t,e);s||(e=ae(e),s=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return s&&_t(t,"delete",e,void 0),a}function Ei(){const e=ae(this),t=e.size!==0,n=e.clear();return t&&_t(e,"clear",void 0,void 0),n}function Dr(e,t){return function(r,s){const a=this,o=a.__v_raw,i=ae(o),l=t?So:e?Po:dr;return!e&&We(i,"iterate",rn),o.forEach((u,c)=>r.call(s,l(u),l(c),a))}}function Br(e,t,n){return function(...r){const s=this.__v_raw,a=ae(s),o=Sn(a),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=s[e](...r),c=n?So:t?Po:dr;return!t&&We(a,"iterate",l?Sa:rn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:i?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function Tt(e){return function(...t){return e==="delete"?!1:this}}function gd(){const e={get(a){return $r(this,a)},get size(){return Fr(this)},has:jr,add:wi,set:xi,delete:ki,clear:Ei,forEach:Dr(!1,!1)},t={get(a){return $r(this,a,!1,!0)},get size(){return Fr(this)},has:jr,add:wi,set:xi,delete:ki,clear:Ei,forEach:Dr(!1,!0)},n={get(a){return $r(this,a,!0)},get size(){return Fr(this,!0)},has(a){return jr.call(this,a,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Dr(!0,!1)},r={get(a){return $r(this,a,!0,!0)},get size(){return Fr(this,!0)},has(a){return jr.call(this,a,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Br(a,!1,!1),n[a]=Br(a,!0,!1),t[a]=Br(a,!1,!0),r[a]=Br(a,!0,!0)}),[e,n,t,r]}const[vd,yd,bd,_d]=gd();function Co(e,t){const n=t?e?_d:bd:e?yd:vd;return(r,s,a)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,a)}const wd={get:Co(!1,!1)},xd={get:Co(!1,!0)},kd={get:Co(!0,!1)},Cc=new WeakMap,Ac=new WeakMap,Pc=new WeakMap,Ed=new WeakMap;function Sd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cd(e){return e.__v_skip||!Object.isExtensible(e)?0:Sd(Yf(e))}function de(e){return ln(e)?e:Ao(e,!1,pd,wd,Cc)}function Rr(e){return Ao(e,!1,md,xd,Ac)}function Tc(e){return Ao(e,!0,hd,kd,Pc)}function Ao(e,t,n,r,s){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=s.get(e);if(a)return a;const o=Cd(e);if(o===0)return e;const i=new Proxy(e,o===2?r:n);return s.set(e,i),i}function Bt(e){return ln(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function ps(e){return!!(e&&e.__v_isShallow)}function Rc(e){return Bt(e)||ln(e)}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function js(e){return fs(e,"__v_skip",!0),e}const dr=e=>ge(e)?de(e):e,Po=e=>ge(e)?Tc(e):e;function Oc(e){Dt&&rt&&(e=ae(e),xc(e.dep||(e.dep=ko())))}function Ic(e,t){e=ae(e);const n=e.dep;n&&Ca(n)}function ke(e){return!!(e&&e.__v_isRef===!0)}function xe(e){return Mc(e,!1)}function pr(e){return Mc(e,!0)}function Mc(e,t){return ke(e)?e:new Ad(e,t)}class Ad{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ae(t),this._value=n?t:dr(t)}get value(){return Oc(this),this._value}set value(t){const n=this.__v_isShallow||ps(t)||ln(t);t=n?t:ae(t),on(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:dr(t),Ic(this))}}function Q(e){return ke(e)?e.value:e}const Pd={get:(e,t,n)=>Q(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Nc(e){return Bt(e)?e:new Proxy(e,Pd)}function Td(e){const t=ee(e)?new Array(e.length):{};for(const n in e)t[n]=Lc(e,n);return t}class Rd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ld(ae(this._object),this._key)}}class Od{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Id(e,t,n){return ke(e)?e:te(e)?new Od(e):ge(e)&&arguments.length>1?Lc(e,t,n):xe(e)}function Lc(e,t,n){const r=e[t];return ke(r)?r:new Rd(e,t,n)}class Md{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Eo(t,()=>{this._dirty||(this._dirty=!0,Ic(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ae(this);return Oc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Nd(e,t,n=!1){let r,s;const a=te(e);return a?(r=e,s=ot):(r=e.get,s=e.set),new Md(r,s,a||!s,n)}function zt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(a){zn(a,t,n)}return s}function Ze(e,t,n,r){if(te(e)){const a=zt(e,t,n,r);return a&&fc(a)&&a.catch(o=>{zn(o,t,n)}),a}const s=[];for(let a=0;a<e.length;a++)s.push(Ze(e[a],t,n,r));return s}function zn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,i=n;for(;a;){const u=a.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,i)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){zt(l,null,10,[e,o,i]);return}}Ld(e,n,s,r)}function Ld(e,t,n,r=!0){console.error(e)}let hr=!1,Aa=!1;const Le=[];let dt=0;const An=[];let vt=null,Gt=0;const Hc=Promise.resolve();let To=null;function fn(e){const t=To||Hc;return e?t.then(this?e.bind(this):e):t}function Hd(e){let t=dt+1,n=Le.length;for(;t<n;){const r=t+n>>>1,s=Le[r],a=mr(s);a<e||a===e&&s.pre?t=r+1:n=r}return t}function Fs(e){(!Le.length||!Le.includes(e,hr&&e.allowRecurse?dt+1:dt))&&(e.id==null?Le.push(e):Le.splice(Hd(e.id),0,e),$c())}function $c(){!hr&&!Aa&&(Aa=!0,To=Hc.then(jc))}function $d(e){const t=Le.indexOf(e);t>dt&&Le.splice(t,1)}function Pa(e){ee(e)?An.push(...e):(!vt||!vt.includes(e,e.allowRecurse?Gt+1:Gt))&&An.push(e),$c()}function Si(e,t=hr?dt+1:0){for(;t<Le.length;t++){const n=Le[t];n&&n.pre&&(Le.splice(t,1),t--,n())}}function hs(e){if(An.length){const t=[...new Set(An)];if(An.length=0,vt){vt.push(...t);return}for(vt=t,vt.sort((n,r)=>mr(n)-mr(r)),Gt=0;Gt<vt.length;Gt++)vt[Gt]();vt=null,Gt=0}}const mr=e=>e.id==null?1/0:e.id,jd=(e,t)=>{const n=mr(e)-mr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function jc(e){Aa=!1,hr=!0,Le.sort(jd);const t=ot;try{for(dt=0;dt<Le.length;dt++){const n=Le[dt];n&&n.active!==!1&&zt(n,null,14)}}finally{dt=0,Le.length=0,hs(),hr=!1,To=null,(Le.length||An.length)&&jc()}}function Fd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ve;let s=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[c]||ve;d&&(s=n.map(p=>_e(p)?p.trim():p)),f&&(s=n.map(Xf))}let i,l=r[i=na(t)]||r[i=na(mt(t))];!l&&a&&(l=r[i=na(Fn(t))]),l&&Ze(l,e,6,s);const u=r[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Ze(u,e,6,s)}}function Fc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const a=e.emits;let o={},i=!1;if(!te(e)){const l=u=>{const c=Fc(u,t,!0);c&&(i=!0,Pe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!i?(ge(e)&&r.set(e,null),null):(ee(a)?a.forEach(l=>o[l]=null):Pe(o,a),ge(e)&&r.set(e,o),o)}function Ds(e,t){return!e||!Pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Fn(t))||ie(e,t))}let ze=null,Bs=null;function ms(e){const t=ze;return ze=e,Bs=e&&e.type.__scopeId||null,t}function Dd(e){Bs=e}function Bd(){Bs=null}function Ro(e,t=ze,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Fi(-1);const a=ms(t);let o;try{o=e(...s)}finally{ms(a),r._d&&Fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ra(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:a,propsOptions:[o],slots:i,attrs:l,emit:u,render:c,renderCache:f,data:d,setupState:p,ctx:b,inheritAttrs:k}=e;let S,_;const y=ms(e);try{if(n.shapeFlag&4){const m=s||r;S=Xe(c.call(m,m,f,a,p,d,b)),_=l}else{const m=t;S=Xe(m.length>1?m(a,{attrs:l,slots:i,emit:u}):m(a,null)),_=t.props?l:Ud(l)}}catch(m){sr.length=0,zn(m,e,1),S=he(Ue)}let g=S;if(_&&k!==!1){const m=Object.keys(_),{shapeFlag:x}=g;m.length&&x&7&&(o&&m.some(bo)&&(_=Wd(_,o)),g=wt(g,_))}return n.dirs&&(g=wt(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),S=g,ms(y),S}function zd(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(yr(r)){if(r.type!==Ue||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Ud=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pr(n))&&((t||(t={}))[n]=e[n]);return t},Wd=(e,t)=>{const n={};for(const r in e)(!bo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Kd(e,t,n){const{props:r,children:s,component:a}=e,{props:o,children:i,patchFlag:l}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ci(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(o[d]!==r[d]&&!Ds(u,d))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?Ci(r,o,u):!0:!!o;return!1}function Ci(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const a=r[s];if(t[a]!==e[a]&&!Ds(n,a))return!0}return!1}function Oo({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Dc=e=>e.__isSuspense,Vd={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,a,o,i,l,u){e==null?Yd(t,n,r,s,a,o,i,l,u):qd(e,t,n,r,s,o,i,l,u)},hydrate:Jd,create:Io,normalize:Xd},Bc=Vd;function gr(e,t){const n=e.props&&e.props[t];te(n)&&n()}function Yd(e,t,n,r,s,a,o,i,l){const{p:u,o:{createElement:c}}=l,f=c("div"),d=e.suspense=Io(e,s,r,t,f,n,a,o,i,l);u(null,d.pendingBranch=e.ssContent,f,null,r,d,a,o),d.deps>0?(gr(e,"onPending"),gr(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,a,o),Pn(d,e.ssFallback)):d.resolve(!1,!0)}function qd(e,t,n,r,s,a,o,i,{p:l,um:u,o:{createElement:c}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const d=t.ssContent,p=t.ssFallback,{activeBranch:b,pendingBranch:k,isInFallback:S,isHydrating:_}=f;if(k)f.pendingBranch=d,st(d,k)?(l(k,d,f.hiddenContainer,null,s,f,a,o,i),f.deps<=0?f.resolve():S&&(l(b,p,n,r,s,null,a,o,i),Pn(f,p))):(f.pendingId++,_?(f.isHydrating=!1,f.activeBranch=k):u(k,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),S?(l(null,d,f.hiddenContainer,null,s,f,a,o,i),f.deps<=0?f.resolve():(l(b,p,n,r,s,null,a,o,i),Pn(f,p))):b&&st(d,b)?(l(b,d,n,r,s,f,a,o,i),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,s,f,a,o,i),f.deps<=0&&f.resolve()));else if(b&&st(d,b))l(b,d,n,r,s,f,a,o,i),Pn(f,d);else if(gr(t,"onPending"),f.pendingBranch=d,f.pendingId++,l(null,d,f.hiddenContainer,null,s,f,a,o,i),f.deps<=0)f.resolve();else{const{timeout:y,pendingId:g}=f;y>0?setTimeout(()=>{f.pendingId===g&&f.fallback(p)},y):y===0&&f.fallback(p)}}function Io(e,t,n,r,s,a,o,i,l,u,c=!1){const{p:f,m:d,um:p,n:b,o:{parentNode:k,remove:S}}=u;let _;const y=Gd(e);y&&t!=null&&t.pendingBranch&&(_=t.pendingId,t.deps++);const g=e.props?hc(e.props.timeout):void 0,m={vnode:e,parent:t,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:a,deps:0,pendingId:0,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:c,isUnmounted:!1,effects:[],resolve(x=!1,T=!1){const{vnode:R,activeBranch:C,pendingBranch:O,pendingId:N,effects:V,parentComponent:L,container:J}=m;let ue=!1;if(m.isHydrating)m.isHydrating=!1;else if(!x){ue=C&&O.transition&&O.transition.mode==="out-in",ue&&(C.transition.afterLeave=()=>{N===m.pendingId&&(d(O,J,ne,0),Pa(V))});let{anchor:ne}=m;C&&(ne=b(C),p(C,L,m,!0)),ue||d(O,J,ne,0)}Pn(m,O),m.pendingBranch=null,m.isInFallback=!1;let oe=m.parent,F=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...V),F=!0;break}oe=oe.parent}!F&&!ue&&Pa(V),m.effects=[],y&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,t.deps===0&&!T&&t.resolve()),gr(R,"onResolve")},fallback(x){if(!m.pendingBranch)return;const{vnode:T,activeBranch:R,parentComponent:C,container:O,isSVG:N}=m;gr(T,"onFallback");const V=b(R),L=()=>{m.isInFallback&&(f(null,x,O,V,C,null,N,i,l),Pn(m,x))},J=x.transition&&x.transition.mode==="out-in";J&&(R.transition.afterLeave=L),m.isInFallback=!0,p(R,C,null,!0),J||L()},move(x,T,R){m.activeBranch&&d(m.activeBranch,x,T,R),m.container=x},next(){return m.activeBranch&&b(m.activeBranch)},registerDep(x,T){const R=!!m.pendingBranch;R&&m.deps++;const C=x.vnode.el;x.asyncDep.catch(O=>{zn(O,x,0)}).then(O=>{if(x.isUnmounted||m.isUnmounted||m.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:N}=x;Na(x,O,!1),C&&(N.el=C);const V=!C&&x.subTree.el;T(x,N,k(C||x.subTree.el),C?null:b(x.subTree),m,o,l),V&&S(V),Oo(x,N.el),R&&--m.deps===0&&m.resolve()})},unmount(x,T){m.isUnmounted=!0,m.activeBranch&&p(m.activeBranch,n,x,T),m.pendingBranch&&p(m.pendingBranch,n,x,T)}};return m}function Jd(e,t,n,r,s,a,o,i,l){const u=t.suspense=Io(t,r,n,e.parentNode,document.createElement("div"),null,s,a,o,i,!0),c=l(e,u.pendingBranch=t.ssContent,n,u,a,o);return u.deps===0&&u.resolve(!1,!0),c}function Xd(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Ai(r?n.default:n),e.ssFallback=r?Ai(n.fallback):he(Ue)}function Ai(e){let t;if(te(e)){const n=Mn&&e._c;n&&(e._d=!1,pe()),e=e(),n&&(e._d=!0,t=Ge,cu())}return ee(e)&&(e=zd(e)),e=Xe(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function zc(e,t){t&&t.pendingBranch?ee(e)?t.effects.push(...e):t.effects.push(e):Pa(e)}function Pn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,s=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=s,Oo(r,s))}function Gd(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}function w_(e,t){return Mo(e,null,t)}const zr={};function sn(e,t,n){return Mo(e,t,n)}function Mo(e,t,{immediate:n,deep:r,flush:s,onTrack:a,onTrigger:o}=ve){var i;const l=yc()===((i=Ce)==null?void 0:i.scope)?Ce:null;let u,c=!1,f=!1;if(ke(e)?(u=()=>e.value,c=ps(e)):Bt(e)?(u=()=>e,r=!0):ee(e)?(f=!0,c=e.some(m=>Bt(m)||ps(m)),u=()=>e.map(m=>{if(ke(m))return m.value;if(Bt(m))return en(m);if(te(m))return zt(m,l,2)})):te(e)?t?u=()=>zt(e,l,2):u=()=>{if(!(l&&l.isUnmounted))return d&&d(),Ze(e,l,3,[p])}:u=ot,t&&r){const m=u;u=()=>en(m())}let d,p=m=>{d=y.onStop=()=>{zt(m,l,4)}},b;if(Ln)if(p=ot,t?n&&Ze(t,l,3,[u(),f?[]:void 0,p]):u(),s==="sync"){const m=Up();b=m.__watcherHandles||(m.__watcherHandles=[])}else return ot;let k=f?new Array(e.length).fill(zr):zr;const S=()=>{if(y.active)if(t){const m=y.run();(r||c||(f?m.some((x,T)=>on(x,k[T])):on(m,k)))&&(d&&d(),Ze(t,l,3,[m,k===zr?void 0:f&&k[0]===zr?[]:k,p]),k=m)}else y.run()};S.allowRecurse=!!t;let _;s==="sync"?_=S:s==="post"?_=()=>Ie(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),_=()=>Fs(S));const y=new Eo(u,_);t?n?S():k=y.run():s==="post"?Ie(y.run.bind(y),l&&l.suspense):y.run();const g=()=>{y.stop(),l&&l.scope&&_o(l.scope.effects,y)};return b&&b.push(g),g}function Qd(e,t,n){const r=this.proxy,s=_e(e)?e.includes(".")?Uc(r,e):()=>r[e]:e.bind(r,r);let a;te(t)?a=t:(a=t.handler,n=t);const o=Ce;Nn(this);const i=Mo(s,a.bind(r),n);return o?Nn(o):an(),i}function Uc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function en(e,t){if(!ge(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ke(e))en(e.value,t);else if(ee(e))for(let n=0;n<e.length;n++)en(e[n],t);else if(uc(e)||Sn(e))e.forEach(n=>{en(n,t)});else if(pc(e))for(const n in e)en(e[n],t);return e}function x_(e,t){const n=ze;if(n===null)return e;const r=Ws(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,i,l,u=ve]=t[a];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&en(i),s.push({dir:o,instance:r,value:i,oldValue:void 0,arg:l,modifiers:u}))}return e}function ft(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let o=0;o<s.length;o++){const i=s[o];a&&(i.oldValue=a[o].value);let l=i.dir[r];l&&(Dn(),Ze(l,n,8,[e.el,i,e,t]),Bn())}}const Ht=Symbol("_leaveCb"),Ur=Symbol("_enterCb");function Zd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Un(()=>{e.isMounted=!0}),No(()=>{e.isUnmounting=!0}),e}const Je=[Function,Array],Wc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},ep={name:"BaseTransition",props:Wc,setup(e,{slots:t}){const n=Do(),r=Zd();let s;return()=>{const a=t.default&&Vc(t.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const k of a)if(k.type!==Ue){o=k;break}}const i=ae(e),{mode:l}=i;if(r.isLeaving)return sa(o);const u=Pi(o);if(!u)return sa(o);const c=Ta(u,i,r,n);gs(u,c);const f=n.subTree,d=f&&Pi(f);let p=!1;const{getTransitionKey:b}=u.type;if(b){const k=b();s===void 0?s=k:k!==s&&(s=k,p=!0)}if(d&&d.type!==Ue&&(!st(u,d)||p)){const k=Ta(d,i,r,n);if(gs(d,k),l==="out-in")return r.isLeaving=!0,k.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},sa(o);l==="in-out"&&u.type!==Ue&&(k.delayLeave=(S,_,y)=>{const g=Kc(r,d);g[String(d.key)]=d,S[Ht]=()=>{_(),S[Ht]=void 0,delete c.delayedLeave},c.delayedLeave=y})}return o}}},tp=ep;function Kc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ta(e,t,n,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:i,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:b,onBeforeAppear:k,onAppear:S,onAfterAppear:_,onAppearCancelled:y}=t,g=String(e.key),m=Kc(n,e),x=(C,O)=>{C&&Ze(C,r,9,O)},T=(C,O)=>{const N=O[1];x(C,O),ee(C)?C.every(V=>V.length<=1)&&N():C.length<=1&&N()},R={mode:a,persisted:o,beforeEnter(C){let O=i;if(!n.isMounted)if(s)O=k||i;else return;C[Ht]&&C[Ht](!0);const N=m[g];N&&st(e,N)&&N.el[Ht]&&N.el[Ht](),x(O,[C])},enter(C){let O=l,N=u,V=c;if(!n.isMounted)if(s)O=S||l,N=_||u,V=y||c;else return;let L=!1;const J=C[Ur]=ue=>{L||(L=!0,ue?x(V,[C]):x(N,[C]),R.delayedLeave&&R.delayedLeave(),C[Ur]=void 0)};O?T(O,[C,J]):J()},leave(C,O){const N=String(e.key);if(C[Ur]&&C[Ur](!0),n.isUnmounting)return O();x(f,[C]);let V=!1;const L=C[Ht]=J=>{V||(V=!0,O(),J?x(b,[C]):x(p,[C]),C[Ht]=void 0,m[N]===e&&delete m[N])};m[N]=e,d?T(d,[C,L]):L()},clone(C){return Ta(C,t,n,r)}};return R}function sa(e){if(Or(e))return e=wt(e),e.children=null,e}function Pi(e){return Or(e)?e.children?e.children[0]:void 0:e}function gs(e,t){e.shapeFlag&6&&e.component?gs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vc(e,t=!1,n){let r=[],s=0;for(let a=0;a<e.length;a++){let o=e[a];const i=n==null?o.key:String(n)+String(o.key!=null?o.key:a);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(Vc(o.children,t,i))):(t||o.type!==Ue)&&r.push(i!=null?wt(o,{key:i}):o)}if(s>1)for(let a=0;a<r.length;a++)r[a].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ye(e,t){return te(e)?(()=>Pe({name:e.name},t,{setup:e}))():e}const Tn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ti(e){te(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:a,suspensible:o=!0,onError:i}=e;let l=null,u,c=0;const f=()=>(c++,l=null,d()),d=()=>{let p;return l||(p=l=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),i)return new Promise((k,S)=>{i(b,()=>k(f()),()=>S(b),c+1)});throw b}).then(b=>p!==l&&l?l:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return Ye({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return u},setup(){const p=Ce;if(u)return()=>aa(u,p);const b=y=>{l=null,zn(y,p,13,!r)};if(o&&p.suspense||Ln)return d().then(y=>()=>aa(y,p)).catch(y=>(b(y),()=>r?he(r,{error:y}):null));const k=xe(!1),S=xe(),_=xe(!!s);return s&&setTimeout(()=>{_.value=!1},s),a!=null&&setTimeout(()=>{if(!k.value&&!S.value){const y=new Error(`Async component timed out after ${a}ms.`);b(y),S.value=y}},a),d().then(()=>{k.value=!0,p.parent&&Or(p.parent.vnode)&&Fs(p.parent.update)}).catch(y=>{b(y),S.value=y}),()=>{if(k.value&&u)return aa(u,p);if(S.value&&r)return he(r,{error:S.value});if(n&&!_.value)return he(n)}}})}function aa(e,t){const{ref:n,props:r,children:s,ce:a}=t.vnode,o=he(e,r,s);return o.ref=n,o.ce=a,delete t.vnode.ce,o}const Or=e=>e.type.__isKeepAlive,np={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Do(),r=n.ctx;if(!r.renderer)return()=>{const y=t.default&&t.default();return y&&y.length===1?y[0]:y};const s=new Map,a=new Set;let o=null;const i=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:f}}}=r,d=f("div");r.activate=(y,g,m,x,T)=>{const R=y.component;u(y,g,m,0,i),l(R.vnode,y,g,m,R,i,x,y.slotScopeIds,T),Ie(()=>{R.isDeactivated=!1,R.a&&nr(R.a);const C=y.props&&y.props.onVnodeMounted;C&&Be(C,R.parent,y)},i)},r.deactivate=y=>{const g=y.component;u(y,d,null,1,i),Ie(()=>{g.da&&nr(g.da);const m=y.props&&y.props.onVnodeUnmounted;m&&Be(m,g.parent,y),g.isDeactivated=!0},i)};function p(y){oa(y),c(y,n,i,!0)}function b(y){s.forEach((g,m)=>{const x=La(g.type);x&&(!y||!y(x))&&k(m)})}function k(y){const g=s.get(y);!o||!st(g,o)?p(g):o&&oa(o),s.delete(y),a.delete(y)}sn(()=>[e.include,e.exclude],([y,g])=>{y&&b(m=>Qn(y,m)),g&&b(m=>!Qn(g,m))},{flush:"post",deep:!0});let S=null;const _=()=>{S!=null&&s.set(S,ia(n.subTree))};return Un(_),qc(_),No(()=>{s.forEach(y=>{const{subTree:g,suspense:m}=n,x=ia(g);if(y.type===x.type&&y.key===x.key){oa(x);const T=x.component.da;T&&Ie(T,m);return}p(y)})}),()=>{if(S=null,!t.default)return null;const y=t.default(),g=y[0];if(y.length>1)return o=null,y;if(!yr(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let m=ia(g);const x=m.type,T=La(Tn(m)?m.type.__asyncResolved||{}:x),{include:R,exclude:C,max:O}=e;if(R&&(!T||!Qn(R,T))||C&&T&&Qn(C,T))return o=m,g;const N=m.key==null?x:m.key,V=s.get(N);return m.el&&(m=wt(m),g.shapeFlag&128&&(g.ssContent=m)),S=N,V?(m.el=V.el,m.component=V.component,m.transition&&gs(m,m.transition),m.shapeFlag|=512,a.delete(N),a.add(N)):(a.add(N),O&&a.size>parseInt(O,10)&&k(a.values().next().value)),m.shapeFlag|=256,o=m,Dc(g.type)?g:m}}},rp=np;function Qn(e,t){return ee(e)?e.some(n=>Qn(n,t)):_e(e)?e.split(",").includes(t):Vf(e)?e.test(t):!1}function sp(e,t){Yc(e,"a",t)}function ap(e,t){Yc(e,"da",t)}function Yc(e,t,n=Ce){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(zs(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Or(s.parent.vnode)&&op(r,t,n,s),s=s.parent}}function op(e,t,n,r){const s=zs(t,e,r,!0);Jc(()=>{_o(r[t],s)},n)}function oa(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ia(e){return e.shapeFlag&128?e.ssContent:e}function zs(e,t,n=Ce,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Dn(),Nn(n);const i=Ze(t,n,e,o);return an(),Bn(),i});return r?s.unshift(a):s.push(a),a}}const St=e=>(t,n=Ce)=>(!Ln||e==="sp")&&zs(e,(...r)=>t(...r),n),ip=St("bm"),Un=St("m"),lp=St("bu"),qc=St("u"),No=St("bum"),Jc=St("um"),cp=St("sp"),up=St("rtg"),fp=St("rtc");function Xc(e,t=Ce){zs("ec",e,t)}const Lo="components";function dp(e,t){return Qc(Lo,e,!0,t)||e}const Gc=Symbol.for("v-ndc");function pp(e){return _e(e)?Qc(Lo,e,!1)||e:e||Gc}function Qc(e,t,n=!0,r=!1){const s=ze||Ce;if(s){const a=s.type;if(e===Lo){const i=La(a,!1);if(i&&(i===t||i===mt(t)||i===Ls(mt(t))))return a}const o=Ri(s[e]||a[e],t)||Ri(s.appContext[e],t);return!o&&r?a:o}}function Ri(e,t){return e&&(e[t]||e[mt(t)]||e[Ls(mt(t))])}function vs(e,t,n,r){let s;const a=n&&n[r];if(ee(e)||_e(e)){s=new Array(e.length);for(let o=0,i=e.length;o<i;o++)s[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,a&&a[o])}else if(ge(e))if(e[Symbol.iterator])s=Array.from(e,(o,i)=>t(o,i,void 0,a&&a[i]));else{const o=Object.keys(e);s=new Array(o.length);for(let i=0,l=o.length;i<l;i++){const u=o[i];s[i]=t(e[u],u,i,a&&a[i])}}else s=[];return n&&(n[r]=s),s}const Ra=e=>e?pu(e)?Ws(e)||e.proxy:Ra(e.parent):null,rr=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ra(e.parent),$root:e=>Ra(e.root),$emit:e=>e.emit,$options:e=>Ho(e),$forceUpdate:e=>e.f||(e.f=()=>Fs(e.update)),$nextTick:e=>e.n||(e.n=fn.bind(e.proxy)),$watch:e=>Qd.bind(e)}),la=(e,t)=>e!==ve&&!e.__isScriptSetup&&ie(e,t),hp={get({_:e},t){const{ctx:n,setupState:r,data:s,props:a,accessCache:o,type:i,appContext:l}=e;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(la(r,t))return o[t]=1,r[t];if(s!==ve&&ie(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&ie(u,t))return o[t]=3,a[t];if(n!==ve&&ie(n,t))return o[t]=4,n[t];Oa&&(o[t]=0)}}const c=rr[t];let f,d;if(c)return t==="$attrs"&&We(e,"get",t),c(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(n!==ve&&ie(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,ie(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:a}=e;return la(s,t)?(s[t]=n,!0):r!==ve&&ie(r,t)?(r[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:a}},o){let i;return!!n[o]||e!==ve&&ie(e,o)||la(t,o)||(i=a[0])&&ie(i,o)||ie(r,o)||ie(rr,o)||ie(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Oi(e){return ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Oa=!0;function mp(e){const t=Ho(e),n=e.proxy,r=e.ctx;Oa=!1,t.beforeCreate&&Ii(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:o,watch:i,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:p,updated:b,activated:k,deactivated:S,beforeDestroy:_,beforeUnmount:y,destroyed:g,unmounted:m,render:x,renderTracked:T,renderTriggered:R,errorCaptured:C,serverPrefetch:O,expose:N,inheritAttrs:V,components:L,directives:J,filters:ue}=t;if(u&&gp(u,r,null),o)for(const ne in o){const Y=o[ne];te(Y)&&(r[ne]=Y.bind(n))}if(s){const ne=s.call(n,n);ge(ne)&&(e.data=de(ne))}if(Oa=!0,a)for(const ne in a){const Y=a[ne],et=te(Y)?Y.bind(n,n):te(Y.get)?Y.get.bind(n,n):ot,Pt=!te(Y)&&te(Y.set)?Y.set.bind(n):ot,lt=Oe({get:et,set:Pt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>lt.value,set:je=>lt.value=je})}if(i)for(const ne in i)Zc(i[ne],r,n,ne);if(l){const ne=te(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(Y=>{Rn(Y,ne[Y])})}c&&Ii(c,e,"c");function F(ne,Y){ee(Y)?Y.forEach(et=>ne(et.bind(n))):Y&&ne(Y.bind(n))}if(F(ip,f),F(Un,d),F(lp,p),F(qc,b),F(sp,k),F(ap,S),F(Xc,C),F(fp,T),F(up,R),F(No,y),F(Jc,m),F(cp,O),ee(N))if(N.length){const ne=e.exposed||(e.exposed={});N.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:et=>n[Y]=et})})}else e.exposed||(e.exposed={});x&&e.render===ot&&(e.render=x),V!=null&&(e.inheritAttrs=V),L&&(e.components=L),J&&(e.directives=J)}function gp(e,t,n=ot){ee(e)&&(e=Ia(e));for(const r in e){const s=e[r];let a;ge(s)?"default"in s?a=He(s.from||r,s.default,!0):a=He(s.from||r):a=He(s),ke(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function Ii(e,t,n){Ze(ee(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zc(e,t,n,r){const s=r.includes(".")?Uc(n,r):()=>n[r];if(_e(e)){const a=t[e];te(a)&&sn(s,a)}else if(te(e))sn(s,e.bind(n));else if(ge(e))if(ee(e))e.forEach(a=>Zc(a,t,n,r));else{const a=te(e.handler)?e.handler.bind(n):t[e.handler];te(a)&&sn(s,a,e)}}function Ho(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,i=a.get(t);let l;return i?l=i:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>ys(l,u,o,!0)),ys(l,t,o)),ge(t)&&a.set(t,l),l}function ys(e,t,n,r=!1){const{mixins:s,extends:a}=t;a&&ys(e,a,n,!0),s&&s.forEach(o=>ys(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const i=vp[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const vp={data:Mi,props:Ni,emits:Ni,methods:Zn,computed:Zn,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Zn,directives:Zn,watch:bp,provide:Mi,inject:yp};function Mi(e,t){return t?e?function(){return Pe(te(e)?e.call(this,this):e,te(t)?t.call(this,this):t)}:t:e}function yp(e,t){return Zn(Ia(e),Ia(t))}function Ia(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function Zn(e,t){return e?Pe(Object.create(null),e,t):t}function Ni(e,t){return e?ee(e)&&ee(t)?[...new Set([...e,...t])]:Pe(Object.create(null),Oi(e),Oi(t??{})):t}function bp(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const r in t)n[r]=$e(e[r],t[r]);return n}function eu(){return{app:null,config:{isNativeTag:Uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _p=0;function wp(e,t){return function(r,s=null){te(r)||(r=Pe({},r)),s!=null&&!ge(s)&&(s=null);const a=eu(),o=new WeakSet;let i=!1;const l=a.app={_uid:_p++,_component:r,_props:s,_container:null,_context:a,_instance:null,version:mu,get config(){return a.config},set config(u){},use(u,...c){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(l,...c)):te(u)&&(o.add(u),u(l,...c))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,c){return c?(a.components[u]=c,l):a.components[u]},directive(u,c){return c?(a.directives[u]=c,l):a.directives[u]},mount(u,c,f){if(!i){const d=he(r,s);return d.appContext=a,c&&t?t(d,u):e(d,u,f),i=!0,l._container=u,u.__vue_app__=l,Ws(d.component)||d.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return a.provides[u]=c,l},runWithContext(u){vr=l;try{return u()}finally{vr=null}}};return l}}let vr=null;function Rn(e,t){if(Ce){let n=Ce.provides;const r=Ce.parent&&Ce.parent.provides;r===n&&(n=Ce.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=Ce||ze;if(r||vr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:vr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&te(t)?t.call(r&&r.proxy):t}}function $o(){return!!(Ce||ze||vr)}function xp(e,t,n,r=!1){const s={},a={};fs(a,Us,1),e.propsDefaults=Object.create(null),tu(e,t,s,a);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Rr(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function kp(e,t,n,r){const{props:s,attrs:a,vnode:{patchFlag:o}}=e,i=ae(s),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Ds(e.emitsOptions,d))continue;const p=t[d];if(l)if(ie(a,d))p!==a[d]&&(a[d]=p,u=!0);else{const b=mt(d);s[b]=Ma(l,i,b,p,e,!1)}else p!==a[d]&&(a[d]=p,u=!0)}}}else{tu(e,t,s,a)&&(u=!0);let c;for(const f in i)(!t||!ie(t,f)&&((c=Fn(f))===f||!ie(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=Ma(l,i,f,void 0,e,!0)):delete s[f]);if(a!==i)for(const f in a)(!t||!ie(t,f))&&(delete a[f],u=!0)}u&&_t(e,"set","$attrs")}function tu(e,t,n,r){const[s,a]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(tr(l))continue;const u=t[l];let c;s&&ie(s,c=mt(l))?!a||!a.includes(c)?n[c]=u:(i||(i={}))[c]=u:Ds(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(a){const l=ae(n),u=i||ve;for(let c=0;c<a.length;c++){const f=a[c];n[f]=Ma(s,l,f,u[f],e,!ie(u,f))}}return o}function Ma(e,t,n,r,s,a){const o=e[n];if(o!=null){const i=ie(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:u}=s;n in u?r=u[n]:(Nn(s),r=u[n]=l.call(null,t),an())}else r=l}o[0]&&(a&&!i?r=!1:o[1]&&(r===""||r===Fn(n))&&(r=!0))}return r}function nu(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const a=e.props,o={},i=[];let l=!1;if(!te(e)){const c=f=>{l=!0;const[d,p]=nu(f,t,!0);Pe(o,d),p&&i.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return ge(e)&&r.set(e,En),En;if(ee(a))for(let c=0;c<a.length;c++){const f=mt(a[c]);Li(f)&&(o[f]=ve)}else if(a)for(const c in a){const f=mt(c);if(Li(f)){const d=a[c],p=o[f]=ee(d)||te(d)?{type:d}:Pe({},d);if(p){const b=ji(Boolean,p.type),k=ji(String,p.type);p[0]=b>-1,p[1]=k<0||b<k,(b>-1||ie(p,"default"))&&i.push(f)}}}const u=[o,i];return ge(e)&&r.set(e,u),u}function Li(e){return e[0]!=="$"}function Hi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function $i(e,t){return Hi(e)===Hi(t)}function ji(e,t){return ee(t)?t.findIndex(n=>$i(n,e)):te(t)&&$i(t,e)?0:-1}const ru=e=>e[0]==="_"||e==="$stable",jo=e=>ee(e)?e.map(Xe):[Xe(e)],Ep=(e,t,n)=>{if(t._n)return t;const r=Ro((...s)=>jo(t(...s)),n);return r._c=!1,r},su=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ru(s))continue;const a=e[s];if(te(a))t[s]=Ep(s,a,r);else if(a!=null){const o=jo(a);t[s]=()=>o}}},au=(e,t)=>{const n=jo(t);e.slots.default=()=>n},Sp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ae(t),fs(t,"_",n)):su(t,e.slots={})}else e.slots={},t&&au(e,t);fs(e.slots,Us,1)},Cp=(e,t,n)=>{const{vnode:r,slots:s}=e;let a=!0,o=ve;if(r.shapeFlag&32){const i=t._;i?n&&i===1?a=!1:(Pe(s,t),!n&&i===1&&delete s._):(a=!t.$stable,su(t,s)),o=t}else t&&(au(e,t),o={default:1});if(a)for(const i in s)!ru(i)&&o[i]==null&&delete s[i]};function bs(e,t,n,r,s=!1){if(ee(e)){e.forEach((d,p)=>bs(d,t&&(ee(t)?t[p]:t),n,r,s));return}if(Tn(r)&&!s)return;const a=r.shapeFlag&4?Ws(r.component)||r.component.proxy:r.el,o=s?null:a,{i,r:l}=e,u=t&&t.r,c=i.refs===ve?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==l&&(_e(u)?(c[u]=null,ie(f,u)&&(f[u]=null)):ke(u)&&(u.value=null)),te(l))zt(l,i,12,[o,c]);else{const d=_e(l),p=ke(l);if(d||p){const b=()=>{if(e.f){const k=d?ie(f,l)?f[l]:c[l]:l.value;s?ee(k)&&_o(k,a):ee(k)?k.includes(a)||k.push(a):d?(c[l]=[a],ie(f,l)&&(f[l]=c[l])):(l.value=[a],e.k&&(c[e.k]=l.value))}else d?(c[l]=o,ie(f,l)&&(f[l]=o)):p&&(l.value=o,e.k&&(c[e.k]=o))};o?(b.id=-1,Ie(b,n)):b()}}}let Rt=!1;const Wr=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Kr=e=>e.nodeType===8;function Ap(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:a,parentNode:o,remove:i,insert:l,createComment:u}}=e,c=(g,m)=>{if(!m.hasChildNodes()){n(null,g,m),hs(),m._vnode=g;return}Rt=!1,f(m.firstChild,g,null,null,null),hs(),m._vnode=g,Rt&&console.error("Hydration completed but contains mismatches.")},f=(g,m,x,T,R,C=!1)=>{const O=Kr(g)&&g.data==="[",N=()=>k(g,m,x,T,R,O),{type:V,ref:L,shapeFlag:J,patchFlag:ue}=m;let oe=g.nodeType;m.el=g,ue===-2&&(C=!1,m.dynamicChildren=null);let F=null;switch(V){case In:oe!==3?m.children===""?(l(m.el=s(""),o(g),g),F=g):F=N():(g.data!==m.children&&(Rt=!0,g.data=m.children),F=a(g));break;case Ue:if(oe!==8||O)if(g.tagName.toLowerCase()==="template"){const ne=m.el.content.firstChild;_(ne,g,x),m.el=g=ne,F=a(g)}else F=N();else F=a(g);break;case ss:if(O&&(g=a(g),oe=g.nodeType),oe===1||oe===3){F=g;const ne=!m.children.length;for(let Y=0;Y<m.staticCount;Y++)ne&&(m.children+=F.nodeType===1?F.outerHTML:F.data),Y===m.staticCount-1&&(m.anchor=F),F=a(F);return O?a(F):F}else N();break;case Ne:O?F=b(g,m,x,T,R,C):F=N();break;default:if(J&1)(oe!==1||m.type.toLowerCase()!==g.tagName.toLowerCase())&&!y(g)?F=N():F=d(g,m,x,T,R,C);else if(J&6){m.slotScopeIds=R;const ne=o(g);if(O?F=S(g):Kr(g)&&g.data==="teleport start"?F=S(g,g.data,"teleport end"):F=a(g),t(m,ne,null,x,T,Wr(ne),C),Tn(m)){let Y;O?(Y=he(Ne),Y.anchor=F?F.previousSibling:ne.lastChild):Y=g.nodeType===3?_s(""):he("div"),Y.el=g,m.component.subTree=Y}}else J&64?oe!==8?F=N():F=m.type.hydrate(g,m,x,T,R,C,e,p):J&128&&(F=m.type.hydrate(g,m,x,T,Wr(o(g)),R,C,e,f))}return L!=null&&bs(L,null,T,m),F},d=(g,m,x,T,R,C)=>{C=C||!!m.dynamicChildren;const{type:O,props:N,patchFlag:V,shapeFlag:L,dirs:J,transition:ue}=m,oe=O==="input"&&J||O==="option";if(oe||V!==-1){if(J&&ft(m,null,x,"created"),N)if(oe||!C||V&48)for(const Y in N)(oe&&Y.endsWith("value")||Pr(Y)&&!tr(Y))&&r(g,Y,null,N[Y],!1,void 0,x);else N.onClick&&r(g,"onClick",null,N.onClick,!1,void 0,x);let F;(F=N&&N.onVnodeBeforeMount)&&Be(F,x,m);let ne=!1;if(y(g)){ne=iu(T,ue)&&x&&x.vnode.props&&x.vnode.props.appear;const Y=g.content.firstChild;ne&&ue.beforeEnter(Y),_(Y,g,x),m.el=g=Y}if(J&&ft(m,null,x,"beforeMount"),((F=N&&N.onVnodeMounted)||J||ne)&&zc(()=>{F&&Be(F,x,m),ne&&ue.enter(g),J&&ft(m,null,x,"mounted")},T),L&16&&!(N&&(N.innerHTML||N.textContent))){let Y=p(g.firstChild,m,g,x,T,R,C);for(;Y;){Rt=!0;const et=Y;Y=Y.nextSibling,i(et)}}else L&8&&g.textContent!==m.children&&(Rt=!0,g.textContent=m.children)}return g.nextSibling},p=(g,m,x,T,R,C,O)=>{O=O||!!m.dynamicChildren;const N=m.children,V=N.length;for(let L=0;L<V;L++){const J=O?N[L]:N[L]=Xe(N[L]);if(g)g=f(g,J,T,R,C,O);else{if(J.type===In&&!J.children)continue;Rt=!0,n(null,J,x,null,T,R,Wr(x),C)}}return g},b=(g,m,x,T,R,C)=>{const{slotScopeIds:O}=m;O&&(R=R?R.concat(O):O);const N=o(g),V=p(a(g),m,N,x,T,R,C);return V&&Kr(V)&&V.data==="]"?a(m.anchor=V):(Rt=!0,l(m.anchor=u("]"),N,V),V)},k=(g,m,x,T,R,C)=>{if(Rt=!0,m.el=null,C){const V=S(g);for(;;){const L=a(g);if(L&&L!==V)i(L);else break}}const O=a(g),N=o(g);return i(g),n(null,m,N,O,x,T,Wr(N),R),O},S=(g,m="[",x="]")=>{let T=0;for(;g;)if(g=a(g),g&&Kr(g)&&(g.data===m&&T++,g.data===x)){if(T===0)return a(g);T--}return g},_=(g,m,x)=>{const T=m.parentNode;T&&T.replaceChild(g,m);let R=x;for(;R;)R.vnode.el===m&&(R.vnode.el=g,R.subTree.el=g),R=R.parent},y=g=>g.nodeType===1&&g.tagName.toLowerCase()==="template";return[c,f]}const Ie=zc;function Pp(e){return ou(e)}function Tp(e){return ou(e,Ap)}function ou(e,t){const n=ka();n.__VUE__=!0;const{insert:r,remove:s,patchProp:a,createElement:o,createText:i,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:p=ot,insertStaticContent:b}=e,k=(h,v,w,E=null,P=null,I=null,D=!1,H=null,$=!!v.dynamicChildren)=>{if(h===v)return;h&&!st(h,v)&&(E=A(h),je(h,P,I,!0),h=null),v.patchFlag===-2&&($=!1,v.dynamicChildren=null);const{type:M,ref:X,shapeFlag:W}=v;switch(M){case In:S(h,v,w,E);break;case Ue:_(h,v,w,E);break;case ss:h==null&&y(v,w,E,D);break;case Ne:L(h,v,w,E,P,I,D,H,$);break;default:W&1?x(h,v,w,E,P,I,D,H,$):W&6?J(h,v,w,E,P,I,D,H,$):(W&64||W&128)&&M.process(h,v,w,E,P,I,D,H,$,j)}X!=null&&P&&bs(X,h&&h.ref,I,v||h,!v)},S=(h,v,w,E)=>{if(h==null)r(v.el=i(v.children),w,E);else{const P=v.el=h.el;v.children!==h.children&&u(P,v.children)}},_=(h,v,w,E)=>{h==null?r(v.el=l(v.children||""),w,E):v.el=h.el},y=(h,v,w,E)=>{[h.el,h.anchor]=b(h.children,v,w,E,h.el,h.anchor)},g=({el:h,anchor:v},w,E)=>{let P;for(;h&&h!==v;)P=d(h),r(h,w,E),h=P;r(v,w,E)},m=({el:h,anchor:v})=>{let w;for(;h&&h!==v;)w=d(h),s(h),h=w;s(v)},x=(h,v,w,E,P,I,D,H,$)=>{D=D||v.type==="svg",h==null?T(v,w,E,P,I,D,H,$):O(h,v,P,I,D,H,$)},T=(h,v,w,E,P,I,D,H)=>{let $,M;const{type:X,props:W,shapeFlag:G,transition:re,dirs:se}=h;if($=h.el=o(h.type,I,W&&W.is,W),G&8?c($,h.children):G&16&&C(h.children,$,null,E,P,I&&X!=="foreignObject",D,H),se&&ft(h,null,E,"created"),R($,h,h.scopeId,D,E),W){for(const fe in W)fe!=="value"&&!tr(fe)&&a($,fe,null,W[fe],I,h.children,E,P,Me);"value"in W&&a($,"value",null,W.value),(M=W.onVnodeBeforeMount)&&Be(M,E,h)}se&&ft(h,null,E,"beforeMount");const me=iu(P,re);me&&re.beforeEnter($),r($,v,w),((M=W&&W.onVnodeMounted)||me||se)&&Ie(()=>{M&&Be(M,E,h),me&&re.enter($),se&&ft(h,null,E,"mounted")},P)},R=(h,v,w,E,P)=>{if(w&&p(h,w),E)for(let I=0;I<E.length;I++)p(h,E[I]);if(P){let I=P.subTree;if(v===I){const D=P.vnode;R(h,D,D.scopeId,D.slotScopeIds,P.parent)}}},C=(h,v,w,E,P,I,D,H,$=0)=>{for(let M=$;M<h.length;M++){const X=h[M]=H?$t(h[M]):Xe(h[M]);k(null,X,v,w,E,P,I,D,H)}},O=(h,v,w,E,P,I,D)=>{const H=v.el=h.el;let{patchFlag:$,dynamicChildren:M,dirs:X}=v;$|=h.patchFlag&16;const W=h.props||ve,G=v.props||ve;let re;w&&Yt(w,!1),(re=G.onVnodeBeforeUpdate)&&Be(re,w,v,h),X&&ft(v,h,w,"beforeUpdate"),w&&Yt(w,!0);const se=P&&v.type!=="foreignObject";if(M?N(h.dynamicChildren,M,H,w,E,se,I):D||Y(h,v,H,null,w,E,se,I,!1),$>0){if($&16)V(H,v,W,G,w,E,P);else if($&2&&W.class!==G.class&&a(H,"class",null,G.class,P),$&4&&a(H,"style",W.style,G.style,P),$&8){const me=v.dynamicProps;for(let fe=0;fe<me.length;fe++){const Se=me[fe],tt=W[Se],mn=G[Se];(mn!==tt||Se==="value")&&a(H,Se,tt,mn,P,h.children,w,E,Me)}}$&1&&h.children!==v.children&&c(H,v.children)}else!D&&M==null&&V(H,v,W,G,w,E,P);((re=G.onVnodeUpdated)||X)&&Ie(()=>{re&&Be(re,w,v,h),X&&ft(v,h,w,"updated")},E)},N=(h,v,w,E,P,I,D)=>{for(let H=0;H<v.length;H++){const $=h[H],M=v[H],X=$.el&&($.type===Ne||!st($,M)||$.shapeFlag&70)?f($.el):w;k($,M,X,null,E,P,I,D,!0)}},V=(h,v,w,E,P,I,D)=>{if(w!==E){if(w!==ve)for(const H in w)!tr(H)&&!(H in E)&&a(h,H,w[H],null,D,v.children,P,I,Me);for(const H in E){if(tr(H))continue;const $=E[H],M=w[H];$!==M&&H!=="value"&&a(h,H,M,$,D,v.children,P,I,Me)}"value"in E&&a(h,"value",w.value,E.value)}},L=(h,v,w,E,P,I,D,H,$)=>{const M=v.el=h?h.el:i(""),X=v.anchor=h?h.anchor:i("");let{patchFlag:W,dynamicChildren:G,slotScopeIds:re}=v;re&&(H=H?H.concat(re):re),h==null?(r(M,w,E),r(X,w,E),C(v.children,w,X,P,I,D,H,$)):W>0&&W&64&&G&&h.dynamicChildren?(N(h.dynamicChildren,G,w,P,I,D,H),(v.key!=null||P&&v===P.subTree)&&lu(h,v,!0)):Y(h,v,w,X,P,I,D,H,$)},J=(h,v,w,E,P,I,D,H,$)=>{v.slotScopeIds=H,h==null?v.shapeFlag&512?P.ctx.activate(v,w,E,D,$):ue(v,w,E,P,I,D,$):oe(h,v,$)},ue=(h,v,w,E,P,I,D)=>{const H=h.component=Hp(h,E,P);if(Or(h)&&(H.ctx.renderer=j),$p(H),H.asyncDep){if(P&&P.registerDep(H,F),!h.el){const $=H.subTree=he(Ue);_(null,$,v,w)}return}F(H,h,v,w,P,I,D)},oe=(h,v,w)=>{const E=v.component=h.component;if(Kd(h,v,w))if(E.asyncDep&&!E.asyncResolved){ne(E,v,w);return}else E.next=v,$d(E.update),E.update();else v.el=h.el,E.vnode=v},F=(h,v,w,E,P,I,D)=>{const H=()=>{if(h.isMounted){let{next:X,bu:W,u:G,parent:re,vnode:se}=h,me=X,fe;Yt(h,!1),X?(X.el=se.el,ne(h,X,D)):X=se,W&&nr(W),(fe=X.props&&X.props.onVnodeBeforeUpdate)&&Be(fe,re,X,se),Yt(h,!0);const Se=ra(h),tt=h.subTree;h.subTree=Se,k(tt,Se,f(tt.el),A(tt),h,P,I),X.el=Se.el,me===null&&Oo(h,Se.el),G&&Ie(G,P),(fe=X.props&&X.props.onVnodeUpdated)&&Ie(()=>Be(fe,re,X,se),P)}else{let X;const{el:W,props:G}=v,{bm:re,m:se,parent:me}=h,fe=Tn(v);if(Yt(h,!1),re&&nr(re),!fe&&(X=G&&G.onVnodeBeforeMount)&&Be(X,me,v),Yt(h,!0),W&&le){const Se=()=>{h.subTree=ra(h),le(W,h.subTree,h,P,null)};fe?v.type.__asyncLoader().then(()=>!h.isUnmounted&&Se()):Se()}else{const Se=h.subTree=ra(h);k(null,Se,w,E,h,P,I),v.el=Se.el}if(se&&Ie(se,P),!fe&&(X=G&&G.onVnodeMounted)){const Se=v;Ie(()=>Be(X,me,Se),P)}(v.shapeFlag&256||me&&Tn(me.vnode)&&me.vnode.shapeFlag&256)&&h.a&&Ie(h.a,P),h.isMounted=!0,v=w=E=null}},$=h.effect=new Eo(H,()=>Fs(M),h.scope),M=h.update=()=>$.run();M.id=h.uid,Yt(h,!0),M()},ne=(h,v,w)=>{v.component=h;const E=h.vnode.props;h.vnode=v,h.next=null,kp(h,v.props,E,w),Cp(h,v.children,w),Dn(),Si(),Bn()},Y=(h,v,w,E,P,I,D,H,$=!1)=>{const M=h&&h.children,X=h?h.shapeFlag:0,W=v.children,{patchFlag:G,shapeFlag:re}=v;if(G>0){if(G&128){Pt(M,W,w,E,P,I,D,H,$);return}else if(G&256){et(M,W,w,E,P,I,D,H,$);return}}re&8?(X&16&&Me(M,P,I),W!==M&&c(w,W)):X&16?re&16?Pt(M,W,w,E,P,I,D,H,$):Me(M,P,I,!0):(X&8&&c(w,""),re&16&&C(W,w,E,P,I,D,H,$))},et=(h,v,w,E,P,I,D,H,$)=>{h=h||En,v=v||En;const M=h.length,X=v.length,W=Math.min(M,X);let G;for(G=0;G<W;G++){const re=v[G]=$?$t(v[G]):Xe(v[G]);k(h[G],re,w,null,P,I,D,H,$)}M>X?Me(h,P,I,!0,!1,W):C(v,w,E,P,I,D,H,$,W)},Pt=(h,v,w,E,P,I,D,H,$)=>{let M=0;const X=v.length;let W=h.length-1,G=X-1;for(;M<=W&&M<=G;){const re=h[M],se=v[M]=$?$t(v[M]):Xe(v[M]);if(st(re,se))k(re,se,w,null,P,I,D,H,$);else break;M++}for(;M<=W&&M<=G;){const re=h[W],se=v[G]=$?$t(v[G]):Xe(v[G]);if(st(re,se))k(re,se,w,null,P,I,D,H,$);else break;W--,G--}if(M>W){if(M<=G){const re=G+1,se=re<X?v[re].el:E;for(;M<=G;)k(null,v[M]=$?$t(v[M]):Xe(v[M]),w,se,P,I,D,H,$),M++}}else if(M>G)for(;M<=W;)je(h[M],P,I,!0),M++;else{const re=M,se=M,me=new Map;for(M=se;M<=G;M++){const Ke=v[M]=$?$t(v[M]):Xe(v[M]);Ke.key!=null&&me.set(Ke.key,M)}let fe,Se=0;const tt=G-se+1;let mn=!1,hi=0;const Yn=new Array(tt);for(M=0;M<tt;M++)Yn[M]=0;for(M=re;M<=W;M++){const Ke=h[M];if(Se>=tt){je(Ke,P,I,!0);continue}let ct;if(Ke.key!=null)ct=me.get(Ke.key);else for(fe=se;fe<=G;fe++)if(Yn[fe-se]===0&&st(Ke,v[fe])){ct=fe;break}ct===void 0?je(Ke,P,I,!0):(Yn[ct-se]=M+1,ct>=hi?hi=ct:mn=!0,k(Ke,v[ct],w,null,P,I,D,H,$),Se++)}const mi=mn?Rp(Yn):En;for(fe=mi.length-1,M=tt-1;M>=0;M--){const Ke=se+M,ct=v[Ke],gi=Ke+1<X?v[Ke+1].el:E;Yn[M]===0?k(null,ct,w,gi,P,I,D,H,$):mn&&(fe<0||M!==mi[fe]?lt(ct,w,gi,2):fe--)}}},lt=(h,v,w,E,P=null)=>{const{el:I,type:D,transition:H,children:$,shapeFlag:M}=h;if(M&6){lt(h.component.subTree,v,w,E);return}if(M&128){h.suspense.move(v,w,E);return}if(M&64){D.move(h,v,w,j);return}if(D===Ne){r(I,v,w);for(let W=0;W<$.length;W++)lt($[W],v,w,E);r(h.anchor,v,w);return}if(D===ss){g(h,v,w);return}if(E!==2&&M&1&&H)if(E===0)H.beforeEnter(I),r(I,v,w),Ie(()=>H.enter(I),P);else{const{leave:W,delayLeave:G,afterLeave:re}=H,se=()=>r(I,v,w),me=()=>{W(I,()=>{se(),re&&re()})};G?G(I,se,me):me()}else r(I,v,w)},je=(h,v,w,E=!1,P=!1)=>{const{type:I,props:D,ref:H,children:$,dynamicChildren:M,shapeFlag:X,patchFlag:W,dirs:G}=h;if(H!=null&&bs(H,null,w,h,!0),X&256){v.ctx.deactivate(h);return}const re=X&1&&G,se=!Tn(h);let me;if(se&&(me=D&&D.onVnodeBeforeUnmount)&&Be(me,v,h),X&6)Hr(h.component,w,E);else{if(X&128){h.suspense.unmount(w,E);return}re&&ft(h,null,v,"beforeUnmount"),X&64?h.type.remove(h,v,w,P,j,E):M&&(I!==Ne||W>0&&W&64)?Me(M,v,w,!1,!0):(I===Ne&&W&384||!P&&X&16)&&Me($,v,w),E&&pn(h)}(se&&(me=D&&D.onVnodeUnmounted)||re)&&Ie(()=>{me&&Be(me,v,h),re&&ft(h,null,v,"unmounted")},w)},pn=h=>{const{type:v,el:w,anchor:E,transition:P}=h;if(v===Ne){hn(w,E);return}if(v===ss){m(h);return}const I=()=>{s(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(h.shapeFlag&1&&P&&!P.persisted){const{leave:D,delayLeave:H}=P,$=()=>D(w,I);H?H(h.el,I,$):$()}else I()},hn=(h,v)=>{let w;for(;h!==v;)w=d(h),s(h),h=w;s(v)},Hr=(h,v,w)=>{const{bum:E,scope:P,update:I,subTree:D,um:H}=h;E&&nr(E),P.stop(),I&&(I.active=!1,je(D,h,v,w)),H&&Ie(H,v),Ie(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Me=(h,v,w,E=!1,P=!1,I=0)=>{for(let D=I;D<h.length;D++)je(h[D],v,w,E,P)},A=h=>h.shapeFlag&6?A(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),U=(h,v,w)=>{h==null?v._vnode&&je(v._vnode,null,null,!0):k(v._vnode||null,h,v,null,null,null,w),Si(),hs(),v._vnode=h},j={p:k,um:je,m:lt,r:pn,mt:ue,mc:C,pc:Y,pbc:N,n:A,o:e};let q,le;return t&&([q,le]=t(j)),{render:U,hydrate:q,createApp:wp(U,q)}}function Yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function iu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function lu(e,t,n=!1){const r=e.children,s=t.children;if(ee(r)&&ee(s))for(let a=0;a<r.length;a++){const o=r[a];let i=s[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[a]=$t(s[a]),i.el=o.el),n||lu(o,i)),i.type===In&&(i.el=o.el)}}function Rp(e){const t=e.slice(),n=[0];let r,s,a,o,i;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(a=0,o=n.length-1;a<o;)i=a+o>>1,e[n[i]]<u?a=i+1:o=i;u<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Op=e=>e.__isTeleport,Ne=Symbol.for("v-fgt"),In=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),ss=Symbol.for("v-stc"),sr=[];let Ge=null;function pe(e=!1){sr.push(Ge=e?null:[])}function cu(){sr.pop(),Ge=sr[sr.length-1]||null}let Mn=1;function Fi(e){Mn+=e}function uu(e){return e.dynamicChildren=Mn>0?Ge||En:null,cu(),Mn>0&&Ge&&Ge.push(e),e}function Re(e,t,n,r,s,a){return uu(z(e,t,n,r,s,a,!0))}function yt(e,t,n,r,s){return uu(he(e,t,n,r,s,!0))}function yr(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const Us="__vInternal",fu=({key:e})=>e??null,as=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||ke(e)||te(e)?{i:ze,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,s=null,a=e===Ne?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fu(t),ref:t&&as(t),scopeId:Bs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ze};return i?(Fo(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),Mn>0&&!o&&Ge&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ge.push(l),l}const he=Ip;function Ip(e,t=null,n=null,r=0,s=null,a=!1){if((!e||e===Gc)&&(e=Ue),yr(e)){const i=wt(e,t,!0);return n&&Fo(i,n),Mn>0&&!a&&Ge&&(i.shapeFlag&6?Ge[Ge.indexOf(e)]=i:Ge.push(i)),i.patchFlag|=-2,i}if(Bp(e)&&(e=e.__vccOpts),t){t=du(t);let{class:i,style:l}=t;i&&!_e(i)&&(t.class=Qe(i)),ge(l)&&(Rc(l)&&!ee(l)&&(l=Pe({},l)),t.style=Hs(l))}const o=_e(e)?1:Dc(e)?128:Op(e)?64:ge(e)?4:te(e)?2:0;return z(e,t,n,r,s,o,a,!0)}function du(e){return e?Rc(e)||Us in e?Pe({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:s,patchFlag:a,children:o}=e,i=t?Mp(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&fu(i),ref:t&&t.ref?n&&s?ee(s)?s.concat(as(t)):[s,as(t)]:as(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function _s(e=" ",t=0){return he(In,null,e,t)}function br(e="",t=!1){return t?(pe(),yt(Ue,null,e)):he(Ue,null,e)}function Xe(e){return e==null||typeof e=="boolean"?he(Ue):ee(e)?he(Ne,null,e.slice()):typeof e=="object"?$t(e):he(In,null,String(e))}function $t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function Fo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ee(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Fo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Us in t)?t._ctx=ze:s===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),r&64?(n=16,t=[_s(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Qe([t.class,r.class]));else if(s==="style")t.style=Hs([t.style,r.style]);else if(Pr(s)){const a=t[s],o=r[s];o&&a!==o&&!(ee(a)&&a.includes(o))&&(t[s]=a?[].concat(a,o):o)}else s!==""&&(t[s]=r[s])}return t}function Be(e,t,n,r=null){Ze(e,t,7,[n,r])}const Np=eu();let Lp=0;function Hp(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Np,a={uid:Lp++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nu(r,s),emitsOptions:Fc(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Fd.bind(null,a),e.ce&&e.ce(a),a}let Ce=null;const Do=()=>Ce||ze;let Bo,gn,Di="__VUE_INSTANCE_SETTERS__";(gn=ka()[Di])||(gn=ka()[Di]=[]),gn.push(e=>Ce=e),Bo=e=>{gn.length>1?gn.forEach(t=>t(e)):gn[0](e)};const Nn=e=>{Bo(e),e.scope.on()},an=()=>{Ce&&Ce.scope.off(),Bo(null)};function pu(e){return e.vnode.shapeFlag&4}let Ln=!1;function $p(e,t=!1){Ln=t;const{props:n,children:r}=e.vnode,s=pu(e);xp(e,n,s,t),Sp(e,r);const a=s?jp(e,t):void 0;return Ln=!1,a}function jp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=js(new Proxy(e.ctx,hp));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Dp(e):null;Nn(e),Dn();const a=zt(r,e,0,[e.props,s]);if(Bn(),an(),fc(a)){if(a.then(an,an),t)return a.then(o=>{Na(e,o,t)}).catch(o=>{zn(o,e,0)});e.asyncDep=a}else Na(e,a,t)}else hu(e,t)}function Na(e,t,n){te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=Nc(t)),hu(e,n)}let Bi;function hu(e,t,n){const r=e.type;if(!e.render){if(!t&&Bi&&!r.render){const s=r.template||Ho(e).template;if(s){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:l}=r,u=Pe(Pe({isCustomElement:a,delimiters:i},o),l);r.render=Bi(s,u)}}e.render=r.render||ot}{Nn(e),Dn();try{mp(e)}finally{Bn(),an()}}}function Fp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return We(e,"get","$attrs"),t[n]}}))}function Dp(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Fp(e)},slots:e.slots,emit:e.emit,expose:t}}function Ws(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Nc(js(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rr)return rr[n](e)},has(t,n){return n in t||n in rr}}))}function La(e,t=!0){return te(e)?e.displayName||e.name:e.name||t&&e.__name}function Bp(e){return te(e)&&"__vccOpts"in e}const Oe=(e,t)=>Nd(e,t,Ln);function ht(e,t,n){const r=arguments.length;return r===2?ge(t)&&!ee(t)?yr(t)?he(e,null,[t]):he(e,t):he(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yr(n)&&(n=[n]),he(e,t,n))}const zp=Symbol.for("v-scx"),Up=()=>He(zp),mu="3.3.7",Wp="http://www.w3.org/2000/svg",Qt=typeof document<"u"?document:null,zi=Qt&&Qt.createElement("template"),Kp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Qt.createElementNS(Wp,e):Qt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Qt.createTextNode(e),createComment:e=>Qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,a){const o=n?n.previousSibling:t.lastChild;if(s&&(s===a||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===a||!(s=s.nextSibling)););else{zi.innerHTML=r?`<svg>${e}</svg>`:e;const i=zi.content;if(r){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ot="transition",qn="animation",_r=Symbol("_vtc"),zo=(e,{slots:t})=>ht(tp,Vp(e),t);zo.displayName="Transition";const gu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};zo.props=Pe({},Wc,gu);const qt=(e,t=[])=>{ee(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ui=e=>e?ee(e)?e.some(t=>t.length>1):e.length>1:!1;function Vp(e){const t={};for(const L in e)L in gu||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:c=i,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,b=Yp(s),k=b&&b[0],S=b&&b[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:g,onLeave:m,onLeaveCancelled:x,onBeforeAppear:T=_,onAppear:R=y,onAppearCancelled:C=g}=t,O=(L,J,ue)=>{Jt(L,J?c:i),Jt(L,J?u:o),ue&&ue()},N=(L,J)=>{L._isLeaving=!1,Jt(L,f),Jt(L,p),Jt(L,d),J&&J()},V=L=>(J,ue)=>{const oe=L?R:y,F=()=>O(J,L,ue);qt(oe,[J,F]),Wi(()=>{Jt(J,L?l:a),It(J,L?c:i),Ui(oe)||Ki(J,r,k,F)})};return Pe(t,{onBeforeEnter(L){qt(_,[L]),It(L,a),It(L,o)},onBeforeAppear(L){qt(T,[L]),It(L,l),It(L,u)},onEnter:V(!1),onAppear:V(!0),onLeave(L,J){L._isLeaving=!0;const ue=()=>N(L,J);It(L,f),Xp(),It(L,d),Wi(()=>{L._isLeaving&&(Jt(L,f),It(L,p),Ui(m)||Ki(L,r,S,ue))}),qt(m,[L,ue])},onEnterCancelled(L){O(L,!1),qt(g,[L])},onAppearCancelled(L){O(L,!0),qt(C,[L])},onLeaveCancelled(L){N(L),qt(x,[L])}})}function Yp(e){if(e==null)return null;if(ge(e))return[ca(e.enter),ca(e.leave)];{const t=ca(e);return[t,t]}}function ca(e){return hc(e)}function It(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[_r]||(e[_r]=new Set)).add(t)}function Jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[_r];n&&(n.delete(t),n.size||(e[_r]=void 0))}function Wi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let qp=0;function Ki(e,t,n,r){const s=e._endId=++qp,a=()=>{s===e._endId&&r()};if(n)return setTimeout(a,n);const{type:o,timeout:i,propCount:l}=Jp(e,t);if(!o)return r();const u=o+"end";let c=0;const f=()=>{e.removeEventListener(u,d),a()},d=p=>{p.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},i+1),e.addEventListener(u,d)}function Jp(e,t){const n=window.getComputedStyle(e),r=b=>(n[b]||"").split(", "),s=r(`${Ot}Delay`),a=r(`${Ot}Duration`),o=Vi(s,a),i=r(`${qn}Delay`),l=r(`${qn}Duration`),u=Vi(i,l);let c=null,f=0,d=0;t===Ot?o>0&&(c=Ot,f=o,d=a.length):t===qn?u>0&&(c=qn,f=u,d=l.length):(f=Math.max(o,u),c=f>0?o>u?Ot:qn:null,d=c?c===Ot?a.length:l.length:0);const p=c===Ot&&/\b(transform|all)(,|$)/.test(r(`${Ot}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:p}}function Vi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Yi(n)+Yi(e[r])))}function Yi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Xp(){return document.body.offsetHeight}function Gp(e,t,n){const r=e[_r];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Uo=Symbol("_vod"),k_={beforeMount(e,{value:t},{transition:n}){e[Uo]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Jn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Jn(e,!0),r.enter(e)):r.leave(e,()=>{Jn(e,!1)}):Jn(e,t))},beforeUnmount(e,{value:t}){Jn(e,t)}};function Jn(e,t){e.style.display=t?e[Uo]:"none"}function Qp(e,t,n){const r=e.style,s=_e(n);if(n&&!s){if(t&&!_e(t))for(const a in t)n[a]==null&&Ha(r,a,"");for(const a in n)Ha(r,a,n[a])}else{const a=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Uo in e&&(r.display=a)}}const qi=/\s*!important$/;function Ha(e,t,n){if(ee(n))n.forEach(r=>Ha(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zp(e,t);qi.test(n)?e.setProperty(Fn(r),n.replace(qi,""),"important"):e[r]=n}}const Ji=["Webkit","Moz","ms"],ua={};function Zp(e,t){const n=ua[t];if(n)return n;let r=mt(t);if(r!=="filter"&&r in e)return ua[t]=r;r=Ls(r);for(let s=0;s<Ji.length;s++){const a=Ji[s]+r;if(a in e)return ua[t]=a}return t}const Xi="http://www.w3.org/1999/xlink";function eh(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Xi,t.slice(6,t.length)):e.setAttributeNS(Xi,t,n);else{const a=rd(t);n==null||a&&!mc(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function th(e,t,n,r,s,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,a),e[t]=n??"";return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=n;const u=i==="OPTION"?e.getAttribute("value"):e.value,c=n??"";u!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=mc(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function nh(e,t,n,r){e.addEventListener(t,n,r)}function rh(e,t,n,r){e.removeEventListener(t,n,r)}const Gi=Symbol("_vei");function sh(e,t,n,r,s=null){const a=e[Gi]||(e[Gi]={}),o=a[t];if(r&&o)o.value=r;else{const[i,l]=ah(t);if(r){const u=a[t]=lh(r,s);nh(e,i,u,l)}else o&&(rh(e,i,o,l),a[t]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function ah(e){let t;if(Qi.test(e)){t={};let r;for(;r=e.match(Qi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Fn(e.slice(2)),t]}let fa=0;const oh=Promise.resolve(),ih=()=>fa||(oh.then(()=>fa=0),fa=Date.now());function lh(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ze(ch(r,n.value),t,5,[r])};return n.value=e,n.attached=ih(),n}function ch(e,t){if(ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Zi=/^on[a-z]/,uh=(e,t,n,r,s=!1,a,o,i,l)=>{t==="class"?Gp(e,r,s):t==="style"?Qp(e,n,r):Pr(t)?bo(t)||sh(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fh(e,t,r,s))?th(e,t,r,a,o,i,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),eh(e,t,r,s))};function fh(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Zi.test(t)&&te(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Zi.test(t)&&_e(n)?!1:t in e}const vu=Pe({patchProp:uh},Kp);let ar,el=!1;function dh(){return ar||(ar=Pp(vu))}function ph(){return ar=el?ar:Tp(vu),el=!0,ar}const hh=(...e)=>{const t=dh().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yu(r);if(!s)return;const a=t._component;!te(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},mh=(...e)=>{const t=ph().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yu(r);if(s)return n(s,!0,s instanceof SVGElement)},t};function yu(e){return _e(e)?document.querySelector(e):e}const gh=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,vh=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,yh=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function bh(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){_h(e);return}return t}function _h(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function ws(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.at(-1)==='"'&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!yh.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(gh.test(e)||vh.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,bh)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const wh=/#/g,xh=/&/g,kh=/=/g,Wo=/\+/g,Eh=/%5e/gi,Sh=/%60/gi,Ch=/%7c/gi,Ah=/%20/gi;function Ph(e){return encodeURI(""+e).replace(Ch,"|")}function $a(e){return Ph(typeof e=="string"?e:JSON.stringify(e)).replace(Wo,"%2B").replace(Ah,"+").replace(wh,"%23").replace(xh,"%26").replace(Sh,"`").replace(Eh,"^")}function da(e){return $a(e).replace(kh,"%3D")}function xs(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function Th(e){return xs(e.replace(Wo," "))}function Rh(e){return xs(e.replace(Wo," "))}function Oh(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=Th(r[1]);if(s==="__proto__"||s==="constructor")continue;const a=Rh(r[2]||"");t[s]===void 0?t[s]=a:Array.isArray(t[s])?t[s].push(a):t[s]=[t[s],a]}return t}function Ih(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${da(e)}=${$a(n)}`).join("&"):`${da(e)}=${$a(t)}`:da(e)}function Mh(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>Ih(t,e[t])).filter(Boolean).join("&")}const Nh=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Lh=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Hh=/^([/\\]\s*){2,}[^/\\]/;function Ks(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?Nh.test(e):Lh.test(e)||(t.acceptRelative?Hh.test(e):!1)}const $h=/^[\s\0]*(blob|data|javascript|vbscript):$/i;function jh(e){return!!e&&$h.test(e)}const Fh=/\/$|\/\?/;function ja(e="",t=!1){return t?Fh.test(e):e.endsWith("/")}function bu(e="",t=!1){if(!t)return(ja(e)?e.slice(0,-1):e)||"/";if(!ja(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Fa(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(ja(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function Dh(e=""){return e.startsWith("/")}function tl(e=""){return Dh(e)?e:"/"+e}function Bh(e,t){if(wu(t)||Ks(e))return e;const n=bu(t);return e.startsWith(n)?e:Wn(n,e)}function nl(e,t){if(wu(t))return e;const n=bu(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function _u(e,t){const n=Ko(e),r={...Oh(n.search),...t};return n.search=Mh(r),Kh(n)}function wu(e){return!e||e==="/"}function zh(e){return e&&e!=="/"}const Uh=/^\.?\//;function Wn(e,...t){let n=e||"";for(const r of t.filter(s=>zh(s)))if(n){const s=r.replace(Uh,"");n=Fa(n)+s}else n=r;return n}function Wh(e,t,n={}){return n.trailingSlash||(e=Fa(e),t=Fa(t)),n.leadingSlash||(e=tl(e),t=tl(t)),n.encoding||(e=xs(e),t=xs(t)),e===t}function Ko(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(n){const[,f,d=""]=n;return{protocol:f,pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!Ks(e,{acceptRelative:!0}))return t?Ko(t+e):rl(e);const[,r="",s,a=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",i=""]=a.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:u,hash:c}=rl(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:c}}function rl(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function Kh(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",r=e.hash||"",s=e.auth?e.auth+"@":"",a=e.host||"";return(e.protocol?e.protocol+"//":"")+s+a+t+n+r}class Vh extends Error{constructor(t,n){super(t,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Yh(e){var l,u,c,f,d;const t=((l=e.error)==null?void 0:l.message)||((u=e.error)==null?void 0:u.toString())||"",n=((c=e.request)==null?void 0:c.method)||((f=e.options)==null?void 0:f.method)||"GET",r=((d=e.request)==null?void 0:d.url)||String(e.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,a=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${s}: ${a}${t?` ${t}`:""}`,i=new Vh(o,e.error?{cause:e.error}:void 0);for(const p of["request","options","response"])Object.defineProperty(i,p,{get(){return e[p]}});for(const[p,b]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(i,p,{get(){return e.response&&e.response[b]}});return i}const qh=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function sl(e="GET"){return qh.has(e.toUpperCase())}function Jh(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Xh=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Gh=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Qh(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return Gh.test(t)?"json":Xh.has(t)||t.startsWith("text/")?"text":"blob"}function Zh(e,t,n=globalThis.Headers){const r={...t,...e};if(t!=null&&t.params&&(e!=null&&e.params)&&(r.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),t!=null&&t.query&&(e!=null&&e.query)&&(r.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),t!=null&&t.headers&&(e!=null&&e.headers)){r.headers=new n((t==null?void 0:t.headers)||{});for(const[s,a]of new n((e==null?void 0:e.headers)||{}))r.headers.set(s,a)}return r}const em=new Set([408,409,425,429,500,502,503,504]),tm=new Set([101,204,205,304]);function xu(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=e;async function s(i){const l=i.error&&i.error.name==="AbortError"&&!i.options.timeout||!1;if(i.options.retry!==!1&&!l){let c;typeof i.options.retry=="number"?c=i.options.retry:c=sl(i.options.method)?0:1;const f=i.response&&i.response.status||500;if(c>0&&(Array.isArray(i.options.retryStatusCodes)?i.options.retryStatusCodes.includes(f):em.has(f))){const d=i.options.retryDelay||0;return d>0&&await new Promise(p=>setTimeout(p,d)),a(i.request,{...i.options,retry:c-1,timeout:i.options.timeout})}}const u=Yh(i);throw Error.captureStackTrace&&Error.captureStackTrace(u,a),u}const a=async function(l,u={}){var d;const c={request:l,options:Zh(u,e.defaults,n),response:void 0,error:void 0};if(c.options.method=(d=c.options.method)==null?void 0:d.toUpperCase(),c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=Bh(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=_u(c.request,{...c.options.params,...c.options.query}))),c.options.body&&sl(c.options.method)&&(Jh(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half"))),!c.options.signal&&c.options.timeout){const p=new r;setTimeout(()=>p.abort(),c.options.timeout),c.options.signal=p.signal}try{c.response=await t(c.request,c.options)}catch(p){return c.error=p,c.options.onRequestError&&await c.options.onRequestError(c),await s(c)}if(c.response.body&&!tm.has(c.response.status)&&c.options.method!=="HEAD"){const p=(c.options.parseResponse?"json":c.options.responseType)||Qh(c.response.headers.get("content-type")||"");switch(p){case"json":{const b=await c.response.text(),k=c.options.parseResponse||ws;c.response._data=k(b);break}case"stream":{c.response._data=c.response.body;break}default:c.response._data=await c.response[p]()}}return c.options.onResponse&&await c.options.onResponse(c),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),await s(c)):c.response},o=async function(l,u){return(await a(l,u))._data};return o.raw=a,o.native=(...i)=>t(...i),o.create=(i={})=>xu({...e,defaults:{...e.defaults,...i}}),o}const Vo=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),nm=Vo.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),rm=Vo.Headers,sm=Vo.AbortController,am=xu({fetch:nm,Headers:rm,AbortController:sm}),om=am,im=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},ks=im().app,lm=()=>ks.baseURL,cm=()=>ks.buildAssetsDir,um=(...e)=>Wn(ku(),cm(),...e),ku=(...e)=>{const t=ks.cdnURL||ks.baseURL;return e.length?Wn(t,...e):t};globalThis.__buildAssetsURL=um,globalThis.__publicAssetsURL=ku;function Da(e,t={},n){for(const r in e){const s=e[r],a=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Da(s,t,a):typeof s=="function"&&(t[a]=s)}return t}const fm={run:e=>e()},dm=()=>fm,Eu=typeof console.createTask<"u"?console.createTask:dm;function pm(e,t){const n=t.shift(),r=Eu(n);return e.reduce((s,a)=>s.then(()=>r.run(()=>a(...t))),Promise.resolve())}function hm(e,t){const n=t.shift(),r=Eu(n);return Promise.all(e.map(s=>r.run(()=>s(...t))))}function pa(e,t){for(const n of[...e])n(t)}class mm{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const s=t;let a;for(;this._deprecatedHooks[t];)a=this._deprecatedHooks[t],t=a.to;if(a&&!r.allowDeprecated){let o=a.message;o||(o=`${s} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,s=(...a)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...a));return r=this.hook(t,s),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const s of r)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Da(t),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(t){const n=Da(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(pm,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(hm,t,...n)}callHookWith(t,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&pa(this._before,s);const a=t(n in this._hooks?[...this._hooks[n]]:[],r);return a instanceof Promise?a.finally(()=>{this._after&&s&&pa(this._after,s)}):(this._after&&s&&pa(this._after,s),a)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Su(){return new mm}function gm(e={}){let t,n=!1;const r=o=>{if(t&&t!==o)throw new Error("Context conflict")};let s;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const a=()=>{if(s&&t===void 0){const o=s.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=a();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>a(),set:(o,i)=>{i||r(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,i)=>{r(o),t=o;try{return s?s.run(o,i):i()}finally{n||(t=void 0)}},async callAsync(o,i){t=o;const l=()=>{t=o},u=()=>t===o?l:void 0;Ba.add(u);try{const c=s?s.run(o,i):i();return n||(t=void 0),await c}finally{Ba.delete(u)}}}}function vm(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=gm({...e,...r})),t[n],t[n]}}}const Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},al="__unctx__",ym=Es[al]||(Es[al]=vm()),bm=(e,t={})=>ym.get(e,t),ol="__unctx_async_handlers__",Ba=Es[ol]||(Es[ol]=new Set);function wr(e){const t=[];for(const s of Ba){const a=s();a&&t.push(a)}const n=()=>{for(const s of t)s()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Cu=bm("nuxt-app",{asyncContext:!1}),_m="__nuxt_plugin";function wm(e){let t=0;const n={_scope:xo(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.8.0"},get vue(){return n.vueApp.version}},payload:de({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>n._scope.run(()=>Em(n,s)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...e};n.hooks=Su(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,a)=>{const o="$"+s;Vr(n,o,a),Vr(n.vueApp.config.globalProperties,o,a)},Vr(n.vueApp,"$nuxt",n),Vr(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",a=>{n.callHook("app:chunkError",{error:a.payload})}),window.useNuxtApp=window.useNuxtApp||Ee;const s=n.hook("app:error",(...a)=>{console.error("[nuxt] error caught during app initialization",...a)});n.hook("app:mounted",s)}const r=de(n.payload.config);return n.provide("config",r),n}async function xm(e,t){if(t.hooks&&e.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}}async function km(e,t){const n=[],r=[];for(const s of t){const a=xm(e,s);s.parallel?n.push(a.catch(o=>r.push(o))):await a}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function Ct(e){return typeof e=="function"?e:(delete e.name,Object.assign(e.setup||(()=>{}),e,{[_m]:!0}))}function Em(e,t,n){const r=()=>n?t(...n):t();return Cu.set(e),e.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function Ee(){var t;let e;if($o()&&(e=(t=Do())==null?void 0:t.appContext.app.$nuxt),e=e||Cu.tryUse(),!e)throw new Error("[nuxt] instance unavailable");return e}/*! @__NO_SIDE_EFFECTS__ */function Vs(){return Ee().$config}function Vr(e,t,n){Object.defineProperty(e,t,{get:()=>n})}const Sm="modulepreload",Cm=function(e,t){return e[0]==="."?new URL(e,t).href:e},il={},Am=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Cm(a,r),a in il)return;il[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const f=s[c];if(f.href===a&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Sm,o||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),o)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},Ft=(...e)=>Am(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t}),Pm=-1,Tm=-2,Rm=-3,Om=-4,Im=-5,Mm=-6;function Nm(e,t){return Lm(JSON.parse(e),t)}function Lm(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function s(a,o=!1){if(a===Pm)return;if(a===Rm)return NaN;if(a===Om)return 1/0;if(a===Im)return-1/0;if(a===Mm)return-0;if(o)throw new Error("Invalid input");if(a in r)return r[a];const i=n[a];if(!i||typeof i!="object")r[a]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const l=i[0],u=t==null?void 0:t[l];if(u)return r[a]=u(s(i[1]));switch(l){case"Date":r[a]=new Date(i[1]);break;case"Set":const c=new Set;r[a]=c;for(let p=1;p<i.length;p+=1)c.add(s(i[p]));break;case"Map":const f=new Map;r[a]=f;for(let p=1;p<i.length;p+=2)f.set(s(i[p]),s(i[p+1]));break;case"RegExp":r[a]=new RegExp(i[1],i[2]);break;case"Object":r[a]=Object(i[1]);break;case"BigInt":r[a]=BigInt(i[1]);break;case"null":const d=Object.create(null);r[a]=d;for(let p=1;p<i.length;p+=2)d[i[p]]=s(i[p+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(i.length);r[a]=l;for(let u=0;u<i.length;u+=1){const c=i[u];c!==Tm&&(l[u]=s(c))}}else{const l={};r[a]=l;for(const u in i){const c=i[u];l[u]=s(c)}}return r[a]}return s(0)}function Hm(e){return Array.isArray(e)?e:[e]}const $m=["title","titleTemplate","script","style","noscript"],os=["base","meta","link","style","script","noscript"],jm=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Fm=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Au=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"],Dm=typeof window<"u";function Yo(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ll(e){return e._h||Yo(e._d?e._d:`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Pu(e,t){const{props:n,tag:r}=e;if(Fm.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const a of s)if(typeof n[a]<"u"){const o=String(n[a]);return t&&!t(o)?!1:`${r}:${a}:${o}`}return!1}function cl(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function Bm(e,t,n){const r={tag:e,props:await Tu(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[["script","noscript","style"].includes(e)?"innerHTML":"textContent"]:t},["templateParams","titleTemplate"].includes(e))};return Au.forEach(s=>{const a=typeof r.props[s]<"u"?r.props[s]:n[s];typeof a<"u"&&((!["innerHTML","textContent"].includes(s)||$m.includes(r.tag))&&(r[s]=a),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.props.children&&(r.innerHTML=r.props.children,delete r.props.children),r.tag==="script"&&(typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),r.innerHTML&&["application/ld+json","application/json"].includes(r.props.type)&&(r.innerHTML=r.innerHTML.replace(/</g,"\\u003C"))),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function zm(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Tu(e,t){for(const n of Object.keys(e)){if(n==="class"){e[n]=zm(e[n]);continue}if(e[n]instanceof Promise&&(e[n]=await e[n]),!t&&!Au.includes(n)){const r=String(e[n]),s=n.startsWith("data-");r==="true"||r===""?e[n]=s?"true":!0:e[n]||(s&&r==="false"?e[n]="false":delete e[n])}}return e}const Um=10;async function Wm(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r<"u"&&jm.includes(n)).forEach(([n,r])=>{const s=Hm(r);t.push(...s.map(a=>Bm(n,a,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e=e._i,e.mode&&(n._m=e.mode),n._p=(e._i<<Um)+r,n))}const ul={base:-10,title:10},fl={critical:-80,high:-10,low:20};function Ss(e){let t=100;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props["http-equiv"]==="content-security-policy"&&(t=-30),e.props.charset&&(t=-20),e.props.name==="viewport"&&(t=-15)):e.tag==="link"&&e.props.rel==="preconnect"?t=20:e.tag in ul&&(t=ul[e.tag]),typeof n=="string"&&n in fl?t+fl[n]:t)}const Km=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Ru=["onload","onerror","onabort","onprogress","onloadstart"],Mt="%separator";function is(e,t,n){if(typeof e!="string"||!e.includes("%"))return e;function r(o){let i;return["s","pageTitle"].includes(o)?i=t.pageTitle:o.includes(".")?i=o.split(".").reduce((l,u)=>l&&l[u]||void 0,t):i=t[o],typeof i<"u"?(i||"").replace(/"/g,'\\"'):!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const i=r(o.slice(1));typeof i=="string"&&(e=e.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,u)=>`${i}${u}`).trim())}),e.includes(Mt)&&(e.endsWith(Mt)&&(e=e.slice(0,-Mt.length).trim()),e.startsWith(Mt)&&(e=e.slice(Mt.length).trim()),e=e.replace(new RegExp(`\\${Mt}\\s*\\${Mt}`,"g"),Mt),e=is(e,{separator:n},n)),e}async function Vm(e){const t={tag:e.tagName.toLowerCase(),props:await Tu(e.getAttributeNames().reduce((n,r)=>({...n,[r]:e.getAttribute(r)}),{})),innerHTML:e.innerHTML};return t._d=Pu(t),t}async function Ou(e,t={}){var c;const n=t.document||e.resolvedOptions.document;if(!n)return;const r={shouldRender:e.dirty,tags:[]};if(await e.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await e.resolveTags()).map(f=>({tag:f,id:os.includes(f.tag)?ll(f):f.tag,shouldRender:!0}));let a=e._dom;if(!a){a={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const f of["body","head"]){const d=(c=n==null?void 0:n[f])==null?void 0:c.children;for(const p of[...d].filter(b=>os.includes(b.tagName.toLowerCase())))a.elMap[p.getAttribute("data-hid")||ll(await Vm(p))]=p}}a.pendingSideEffects={...a.sideEffects||{}},a.sideEffects={};function o(f,d,p){const b=`${f}:${d}`;a.sideEffects[b]=p,delete a.pendingSideEffects[b]}function i({id:f,$el:d,tag:p}){const b=p.tag.endsWith("Attrs");a.elMap[f]=d,b||(["textContent","innerHTML"].forEach(k=>{p[k]&&p[k]!==d[k]&&(d[k]=p[k])}),o(f,"el",()=>{a.elMap[f].remove(),delete a.elMap[f]})),Object.entries(p.props).forEach(([k,S])=>{const _=`attr:${k}`;if(k==="class")for(const y of(S||"").split(" ").filter(Boolean))b&&o(f,`${_}:${y}`,()=>d.classList.remove(y)),!d.classList.contains(y)&&d.classList.add(y);else d.getAttribute(k)!==S&&d.setAttribute(k,S===!0?"":String(S)),b&&o(f,_,()=>d.removeAttribute(k))})}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:d,shouldRender:p,id:b}=f;if(p){if(d.tag==="title"){n.title=d.textContent;continue}f.$el=f.$el||a.elMap[b],f.$el?i(f):os.includes(d.tag)&&l.push(f)}}for(const f of l){const d=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),i(f),u[d]=u[d]||n.createDocumentFragment(),u[d].appendChild(f.$el)}for(const f of s)await e.hooks.callHook("dom:renderTag",f,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(a.pendingSideEffects).forEach(f=>f()),e._dom=a,e.dirty=!1,await e.hooks.callHook("dom:rendered",{renders:s})}async function Ym(e,t={}){const n=t.delayFn||(r=>setTimeout(r,10));return e._domUpdatePromise=e._domUpdatePromise||new Promise(r=>n(async()=>{await Ou(e,t),delete e._domUpdatePromise,r()}))}function qm(e){return t=>{var r,s;const n=((s=(r=t.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(a){Ym(a,e)}}}}}const Jm=["templateParams","htmlAttrs","bodyAttrs"],Xm={hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const n=Pu(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,a=t[s];if(a){let i=r==null?void 0:r.tagDuplicateStrategy;if(!i&&Jm.includes(r.tag)&&(i="merge"),i==="merge"){const l=a.props;["class","style"].forEach(u=>{r.props[u]&&l[u]&&(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),r.props[u]=`${l[u]} ${r.props[u]}`)}),t[s].props={...l,...r.props};return}else if(r._e===a._e){a._duped=a._duped||[],r._d=`${a._d}:${a._duped.length+1}`,a._duped.push(r);return}else if(Ss(r)>Ss(a))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(os.includes(r.tag)&&o===0){delete t[s];return}t[s]=r});const n=[];Object.values(t).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),e.tags=n,e.tags=e.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Gm={mode:"server",hooks:{"tags:resolve":function(e){const t={};e.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{t[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(t).length&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Qm=["script","link","bodyAttrs"];function Zm(e){const t={},n={};return Object.entries(e.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"?(Ru.includes(r)&&(t[r]=`this.dataset.${r} = true`),n[r]=s):t[r]=s}),{props:t,eventHandlers:n}}const eg=e=>({hooks:{"tags:resolve":function(t){for(const n of t.tags)if(Qm.includes(n.tag)){const{props:r,eventHandlers:s}=Zm(n);n.props=r,Object.keys(s).length&&((n.props.src||n.props.href)&&(n.key=n.key||Yo(n.props.src||n.props.href)),n._eventHandlers=s)}},"dom:renderTag":function(t,n,r){if(!t.tag._eventHandlers)return;const s=t.tag.tag==="bodyAttrs"?n.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([a,o])=>{const i=`${t.tag._d||t.tag._p}:${a}`,l=a.slice(2).toLowerCase(),u=`data-h-${l}`;if(r(t.id,i,()=>{}),t.$el.hasAttribute(u))return;t.$el.setAttribute(u,"");let c;const f=d=>{o(d),c==null||c.disconnect()};a in t.$el.dataset?f(new Event(a.replace("on",""))):Ru.includes(a)&&typeof MutationObserver<"u"?(c=new MutationObserver(d=>{d.some(b=>b.attributeName===`data-${a}`)&&(f(new Event(a.replace("on",""))),c==null||c.disconnect())}),c.observe(t.$el,{attributes:!0})):s.addEventListener(l,f),r(t.id,i,()=>{c==null||c.disconnect(),s.removeEventListener(l,f),t.$el.removeAttribute(u)})})}}}),tg=["link","style","script","noscript"],ng={hooks:{"tag:normalise":({tag:e})=>{e.key&&tg.includes(e.tag)&&(e.props["data-hid"]=e._h=Yo(e.key))}}},rg={hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of Km)for(const s of e.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(n))){const a=t(s.tagPriority.replace(n,""));typeof a<"u"&&(s._p=a+r)}e.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Ss(n)-Ss(r))}}},sg={meta:"content",link:"href",htmlAttrs:"lang"},ag={hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,n=(o=t.find(i=>i.tag==="title"))==null?void 0:o.textContent,r=t.findIndex(i=>i.tag==="templateParams"),s=r!==-1?t[r].props:{},a=s.separator||"|";delete s.separator,s.pageTitle=is(s.pageTitle||n||"",s,a);for(const i of t.filter(l=>l.processTemplateParams!==!1)){const l=sg[i.tag];l&&typeof i.props[l]=="string"?i.props[l]=is(i.props[l],s,a):(i.processTemplateParams===!0||["titleTemplate","title"].includes(i.tag))&&["innerHTML","textContent"].forEach(u=>{typeof i[u]=="string"&&(i[u]=is(i[u],s,a))})}e.tags=t.filter(i=>i.tag!=="templateParams")}}},og={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const r=t.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=cl(t[n].textContent,t[r].textContent);s!==null?t[r].textContent=s||t[r].textContent:delete t[r]}else if(n!==-1){const s=cl(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}};let Iu;function ig(e={}){const t=lg(e);return t.use(qm()),Iu=t}function dl(e,t){return!e||e==="server"&&t||e==="client"&&!t}function lg(e={}){const t=Su();t.addHooks(e.hooks||{}),e.document=e.document||(Dm?document:void 0);const n=!e.document,r=()=>{i.dirty=!0,t.callHook("entries:updated",i)};let s=0,a=[];const o=[],i={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return a},use(l){const u=typeof l=="function"?l(i):l;(!u.key||!o.some(c=>c.key===u.key))&&(o.push(u),dl(u.mode,n)&&t.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const c={_i:s++,input:l,...u};return dl(c.mode,n)&&(a.push(c),r()),{dispose(){a=a.filter(f=>f._i!==c._i),t.callHook("entries:updated",i),r()},patch(f){a=a.map(d=>(d._i===c._i&&(d.input=c.input=f),d)),r()}}},async resolveTags(){const l={tags:[],entries:[...a]};await t.callHook("entries:resolve",l);for(const u of l.entries){const c=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(c):c),u.resolvedInput)for(const f of await Wm(u)){const d={tag:f,entry:u,resolvedOptions:i.resolvedOptions};await t.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),l.tags},ssr:n};return[Xm,Gm,eg,ng,rg,ag,og,...(e==null?void 0:e.plugins)||[]].forEach(l=>i.use(l)),i.hooks.callHook("init",i),i}function Mu(){return Iu}function cg(e,t={}){const n=t.head||Mu();return n==null?void 0:n.push(e,t)}const ug=mu.startsWith("3");function fg(e){return typeof e=="function"?e():Q(e)}function za(e,t=""){if(e instanceof Promise)return e;const n=fg(e);return!e||!n?n:Array.isArray(n)?n.map(r=>za(r,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Q(s)]:[r,za(s,r)])):n}const dg={hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=za(t.input)}}},Nu="usehead";function pg(e){return{install(n){ug&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Nu,e))}}.install}function hg(e={}){e.domDelayFn=e.domDelayFn||(n=>fn(()=>setTimeout(()=>n(),0)));const t=ig(e);return t.use(dg),t.install=pg(t),t}const Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wa="__unhead_injection_handler__";function mg(e){Ua[Wa]=e}function E_(){if(Wa in Ua)return Ua[Wa]();const e=He(Nu);return e||Mu()}function gg(e){return{ctx:{table:e},matchAll:t=>Hu(t,e)}}function Lu(e){const t={};for(const n in e)t[n]=n==="dynamic"?new Map(Object.entries(e[n]).map(([r,s])=>[r,Lu(s)])):new Map(Object.entries(e[n]));return t}function vg(e){return gg(Lu(e))}function Hu(e,t){const n=[];for(const[s,a]of pl(t.wildcard))e.startsWith(s)&&n.push(a);for(const[s,a]of pl(t.dynamic))if(e.startsWith(s+"/")){const o="/"+e.slice(s.length).split("/").splice(2).join("/");n.push(...Hu(o,a))}const r=t.static.get(e);return r&&n.push(r),n.filter(Boolean)}function pl(e){return[...e.entries()].sort((t,n)=>t[0].length-n[0].length)}function Ka(e,t,n=".",r){if(!ha(t))return Ka(e,{},n,r);const s=Object.assign({},t);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const o=e[a];o!=null&&(r&&r(s,a,o,n)||(Array.isArray(o)&&Array.isArray(s[a])?s[a]=[...o,...s[a]]:ha(o)&&ha(s[a])?s[a]=Ka(o,s[a],(n?`${n}.`:"")+a.toString(),r):s[a]=o))}return s}function ha(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function $u(e){return(...t)=>t.reduce((n,r)=>Ka(n,r,"",e),{})}const ju=$u(),yg=$u((e,t,n)=>{if(e[t]!==void 0&&typeof n=="function")return e[t]=n(e[t]),!0});function bg(e,t){try{return t in e}catch{return!1}}var _g=Object.defineProperty,wg=(e,t,n)=>t in e?_g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xt=(e,t,n)=>(wg(e,typeof t!="symbol"?t+"":t,n),n);class Va extends Error{constructor(t,n={}){super(t,n),Xt(this,"statusCode",500),Xt(this,"fatal",!1),Xt(this,"unhandled",!1),Xt(this,"statusMessage"),Xt(this,"data"),Xt(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const t={message:this.message,statusCode:qa(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Fu(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Xt(Va,"__h3_error__",!0);function Ya(e){if(typeof e=="string")return new Va(e);if(xg(e))return e;const t=new Va(e.message??e.statusMessage??"",{cause:e.cause||e});if(bg(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=qa(e.statusCode,t.statusCode):e.status&&(t.statusCode=qa(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;Fu(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function xg(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const kg=/[^\u0009\u0020-\u007E]/g;function Fu(e=""){return e.replace(kg,"")}function qa(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const Eg=Symbol("layout-meta"),Ys=Symbol("route"),dn=()=>{var e;return(e=Ee())==null?void 0:e.$router},Sg=()=>$o()?He(Ys,Ee()._route):Ee()._route;/*! @__NO_SIDE_EFFECTS__ */const Cg=()=>{try{if(Ee()._processingMiddleware)return!0}catch{return!0}return!1},S_=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:_u(e.path||"/",e.query||{})+(e.hash||"");if(t!=null&&t.open){{const{target:i="_blank",windowFeatures:l={}}=t.open,u=Object.entries(l).filter(([c,f])=>f!==void 0).map(([c,f])=>`${c.toLowerCase()}=${f}`).join(", ");open(n,i,u)}return Promise.resolve()}const r=(t==null?void 0:t.external)||Ks(n,{acceptRelative:!0});if(r){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const i=Ko(n).protocol;if(i&&jh(i))throw new Error(`Cannot navigate to a URL with '${i}' protocol.`)}const s=Cg();if(!r&&s)return e;const a=dn(),o=Ee();return r?(o._scope.stop(),t!=null&&t.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?a.replace(e):a.push(e)},qs=()=>Id(Ee().payload,"error"),wn=e=>{const t=qo(e);try{const n=Ee(),r=qs();n.hooks.callHook("app:error",t),r.value=r.value||t}catch{throw t}return t},Ag=async(e={})=>{const t=Ee(),n=qs();t.callHook("app:error:cleared",e),e.redirect&&await dn().replace(e.redirect),n.value=null},Pg=e=>!!(e&&typeof e=="object"&&"__nuxt_error"in e),qo=e=>{const t=Ya(e);return t.__nuxt_error=!0,t},hl=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),C_=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),Tg=e=>{const t=Ee();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{hl(e)}):hl(e)},Ja=!1,Rg=!1,A_={componentName:"NuxtLink"},Og="#__nuxt";function Ig(e={}){const t=e.path||window.location.pathname;let n={};try{n=ws(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ee().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const Mg={nuxt:{buildId:"d40c82cb-8356-4081-ae4e-ee71947ba9c1"}},Ng=yg(Mg);function Lg(){const e=Ee();return e._appConfig||(e._appConfig=de(Ng)),e._appConfig}let ls,Du;function Hg(){var n;const e=Vs(),t=(n=Lg().nuxt)==null?void 0:n.buildId;return ls=$fetch(Wn(e.app.cdnURL||e.app.baseURL,e.app.buildAssetsDir,`builds/meta/${t}.json`)),ls.then(r=>{Du=vg(r.matcher)}),ls}function Bu(){return ls||Hg()}async function $g(e){return await Bu(),ju({},...Du.matchAll(e).reverse())}async function jg(e){return null}let Yr=null;async function Fg(){if(Yr)return Yr;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=Dg(e.textContent||""),n=e.dataset.src?await jg(e.dataset.src):void 0;return Yr={...t,...n,...window.__NUXT__},Yr}function Dg(e){return Nm(e,Ee()._payloadRevivers)}function Bg(e,t){Ee()._payloadRevivers[e]=t}const ml={NuxtError:e=>qo(e),EmptyShallowRef:e=>pr(e==="_"?void 0:e==="0n"?BigInt(0):ws(e)),EmptyRef:e=>xe(e==="_"?void 0:e==="0n"?BigInt(0):ws(e)),ShallowRef:e=>pr(e),ShallowReactive:e=>Rr(e),Ref:e=>xe(e),Reactive:e=>de(e)},zg=Ct({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const r in ml)Bg(r,ml[r]);Object.assign(e.payload,([t,n]=wr(()=>e.runWithContext(Fg)),t=await t,n(),t)),window.__NUXT__=e.payload}}),Ug=[],Wg=Ct({name:"nuxt:head",enforce:"pre",setup(e){const t=hg({plugins:Ug});mg(()=>Ee().vueApp._context.provides.usehead),e.vueApp.use(t);{let n=!0;const r=async()=>{n=!1,await Ou(t)};t.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||r()}),e.hooks.hook("app:error",r),e.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bn=typeof window<"u";function Kg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ce=Object.assign;function ma(e,t){const n={};for(const r in t){const s=t[r];n[r]=it(s)?s.map(e):e(s)}return n}const or=()=>{},it=Array.isArray,Vg=/\/$/,Yg=e=>e.replace(Vg,"");function ga(e,t,n="/"){let r,s={},a="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,i>-1?i:t.length),s=e(a)),i>-1&&(r=r||t.slice(0,i),o=t.slice(i,t.length)),r=Gg(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:s,hash:o}}function qg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function gl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Jg(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hn(t.matched[r],n.matched[s])&&zu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Xg(e[n],t[n]))return!1;return!0}function Xg(e,t){return it(e)?vl(e,t):it(t)?vl(t,e):e===t}function vl(e,t){return it(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Gg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let a=n.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var xr;(function(e){e.pop="pop",e.push="push"})(xr||(xr={}));var ir;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ir||(ir={}));function Qg(e){if(!e)if(bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Yg(e)}const Zg=/^[^#]+#/;function ev(e,t){return e.replace(Zg,"#")+t}function tv(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Js=()=>({left:window.pageXOffset,top:window.pageYOffset});function nv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=tv(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function yl(e,t){return(history.state?history.state.position-t:-1)+e}const Xa=new Map;function rv(e,t){Xa.set(e,t)}function sv(e){const t=Xa.get(e);return Xa.delete(e),t}let av=()=>location.protocol+"//"+location.host;function Uu(e,t){const{pathname:n,search:r,hash:s}=t,a=e.indexOf("#");if(a>-1){let i=s.includes(e.slice(a))?e.slice(a).length:1,l=s.slice(i);return l[0]!=="/"&&(l="/"+l),gl(l,"")}return gl(n,e)+r+s}function ov(e,t,n,r){let s=[],a=[],o=null;const i=({state:d})=>{const p=Uu(e,location),b=n.value,k=t.value;let S=0;if(d){if(n.value=p,t.value=d,o&&o===b){o=null;return}S=k?d.position-k.position:0}else r(p);s.forEach(_=>{_(n.value,b,{delta:S,type:xr.pop,direction:S?S>0?ir.forward:ir.back:ir.unknown})})};function l(){o=n.value}function u(d){s.push(d);const p=()=>{const b=s.indexOf(d);b>-1&&s.splice(b,1)};return a.push(p),p}function c(){const{history:d}=window;d.state&&d.replaceState(ce({},d.state,{scroll:Js()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function bl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Js():null}}function iv(e){const{history:t,location:n}=window,r={value:Uu(e,n)},s={value:t.state};s.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,u,c){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:av()+e+l;try{t[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),n[c?"replace":"assign"](d)}}function o(l,u){const c=ce({},t.state,bl(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});a(l,c,!0),r.value=l}function i(l,u){const c=ce({},s.value,t.state,{forward:l,scroll:Js()});a(c.current,c,!0);const f=ce({},bl(r.value,l,null),{position:c.position+1},u);a(l,f,!1),r.value=l}return{location:r,state:s,push:i,replace:o}}function Wu(e){e=Qg(e);const t=iv(e),n=ov(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const s=ce({location:"",base:e,go:r,createHref:ev.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function lv(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Wu(e)}function cv(e){return typeof e=="string"||e&&typeof e=="object"}function Ku(e){return typeof e=="string"||typeof e=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vu=Symbol("");var _l;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_l||(_l={}));function $n(e,t){return ce(new Error,{type:e,[Vu]:!0},t)}function gt(e,t){return e instanceof Error&&Vu in e&&(t==null||!!(e.type&t))}const wl="[^/]+?",uv={sensitive:!1,strict:!1,start:!0,end:!0},fv=/[.+*?^${}()[\]/\\]/g;function dv(e,t){const n=ce({},uv,t),r=[];let s=n.start?"^":"";const a=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const d=u[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(fv,"\\$&"),p+=40;else if(d.type===1){const{value:b,repeatable:k,optional:S,regexp:_}=d;a.push({name:b,repeatable:k,optional:S});const y=_||wl;if(y!==wl){p+=10;try{new RegExp(`(${y})`)}catch(m){throw new Error(`Invalid custom RegExp for param "${b}" (${y}): `+m.message)}}let g=k?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(g=S&&u.length<2?`(?:/${g})`:"/"+g),S&&(g+="?"),s+=g,p+=20,S&&(p+=-8),k&&(p+=-20),y===".*"&&(p+=-50)}c.push(p)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function i(u){const c=u.match(o),f={};if(!c)return null;for(let d=1;d<c.length;d++){const p=c[d]||"",b=a[d-1];f[b.name]=p&&b.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of d)if(p.type===0)c+=p.value;else if(p.type===1){const{value:b,repeatable:k,optional:S}=p,_=b in u?u[b]:"";if(it(_)&&!k)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const y=it(_)?_.join("/"):_;if(!y)if(S)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);c+=y}}return c||"/"}return{re:o,score:r,keys:a,parse:i,stringify:l}}function pv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hv(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const a=pv(r[n],s[n]);if(a)return a;n++}if(Math.abs(s.length-r.length)===1){if(xl(r))return 1;if(xl(s))return-1}return s.length-r.length}function xl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mv={type:0,value:""},gv=/[a-zA-Z0-9_]/;function vv(e){if(!e)return[[]];if(e==="/")return[[mv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let a;function o(){a&&s.push(a),a=[]}let i=0,l,u="",c="";function f(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:gv.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function yv(e,t,n){const r=dv(vv(e.path),n),s=ce(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function bv(e,t){const n=[],r=new Map;t=Sl({strict:!1,end:!0,sensitive:!1},t);function s(c){return r.get(c)}function a(c,f,d){const p=!d,b=_v(c);b.aliasOf=d&&d.record;const k=Sl(t,c),S=[b];if("alias"in c){const g=typeof c.alias=="string"?[c.alias]:c.alias;for(const m of g)S.push(ce({},b,{components:d?d.record.components:b.components,path:m,aliasOf:d?d.record:b}))}let _,y;for(const g of S){const{path:m}=g;if(f&&m[0]!=="/"){const x=f.record.path,T=x[x.length-1]==="/"?"":"/";g.path=f.record.path+(m&&T+m)}if(_=yv(g,f,k),d?d.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),p&&c.name&&!El(_)&&o(c.name)),b.children){const x=b.children;for(let T=0;T<x.length;T++)a(x[T],_,d&&d.children[T])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:or}function o(c){if(Ku(c)){const f=r.get(c);f&&(r.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function i(){return n}function l(c){let f=0;for(;f<n.length&&hv(c,n[f])>=0&&(c.record.path!==n[f].record.path||!Yu(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!El(c)&&r.set(c.record.name,c)}function u(c,f){let d,p={},b,k;if("name"in c&&c.name){if(d=r.get(c.name),!d)throw $n(1,{location:c});k=d.record.name,p=ce(kl(f.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),c.params&&kl(c.params,d.keys.map(y=>y.name))),b=d.stringify(p)}else if("path"in c)b=c.path,d=n.find(y=>y.re.test(b)),d&&(p=d.parse(b),k=d.record.name);else{if(d=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!d)throw $n(1,{location:c,currentLocation:f});k=d.record.name,p=ce({},f.params,c.params),b=d.stringify(p)}const S=[];let _=d;for(;_;)S.unshift(_.record),_=_.parent;return{name:k,path:b,params:p,matched:S,meta:xv(S)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:u,removeRoute:o,getRoutes:i,getRecordMatcher:s}}function kl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _v(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function wv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function El(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xv(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Sl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Yu(e,t){return t.children.some(n=>n===e||Yu(e,n))}const qu=/#/g,kv=/&/g,Ev=/\//g,Sv=/=/g,Cv=/\?/g,Ju=/\+/g,Av=/%5B/g,Pv=/%5D/g,Xu=/%5E/g,Tv=/%60/g,Gu=/%7B/g,Rv=/%7C/g,Qu=/%7D/g,Ov=/%20/g;function Jo(e){return encodeURI(""+e).replace(Rv,"|").replace(Av,"[").replace(Pv,"]")}function Iv(e){return Jo(e).replace(Gu,"{").replace(Qu,"}").replace(Xu,"^")}function Ga(e){return Jo(e).replace(Ju,"%2B").replace(Ov,"+").replace(qu,"%23").replace(kv,"%26").replace(Tv,"`").replace(Gu,"{").replace(Qu,"}").replace(Xu,"^")}function Mv(e){return Ga(e).replace(Sv,"%3D")}function Nv(e){return Jo(e).replace(qu,"%23").replace(Cv,"%3F")}function Lv(e){return e==null?"":Nv(e).replace(Ev,"%2F")}function Cs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Hv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const a=r[s].replace(Ju," "),o=a.indexOf("="),i=Cs(o<0?a:a.slice(0,o)),l=o<0?null:Cs(a.slice(o+1));if(i in t){let u=t[i];it(u)||(u=t[i]=[u]),u.push(l)}else t[i]=l}return t}function Cl(e){let t="";for(let n in e){const r=e[n];if(n=Mv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(it(r)?r.map(a=>a&&Ga(a)):[r&&Ga(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function $v(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=it(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const jv=Symbol(""),Al=Symbol(""),Xs=Symbol(""),Xo=Symbol(""),Qa=Symbol("");function Xn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function jt(e,t,n,r,s){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,i)=>{const l=f=>{f===!1?i($n(4,{from:n,to:t})):f instanceof Error?i(f):cv(f)?i($n(2,{from:t,to:f})):(a&&r.enterCallbacks[s]===a&&typeof f=="function"&&a.push(f),o())},u=e.call(r&&r.instances[s],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>i(f))})}function va(e,t,n,r){const s=[];for(const a of e)for(const o in a.components){let i=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(Fv(i)){const u=(i.__vccOpts||i)[t];u&&s.push(jt(u,n,r,a,o))}else{let l=i();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const c=Kg(u)?u.default:u;a.components[o]=c;const d=(c.__vccOpts||c)[t];return d&&jt(d,n,r,a,o)()}))}}return s}function Fv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pl(e){const t=He(Xs),n=He(Xo),r=Oe(()=>t.resolve(Q(e.to))),s=Oe(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(Hn.bind(null,c));if(d>-1)return d;const p=Tl(l[u-2]);return u>1&&Tl(c)===p&&f[f.length-1].path!==p?f.findIndex(Hn.bind(null,l[u-2])):d}),a=Oe(()=>s.value>-1&&Uv(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&zu(n.params,r.value.params));function i(l={}){return zv(l)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(or):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:a,isExactActive:o,navigate:i}}const Dv=Ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pl,setup(e,{slots:t}){const n=de(Pl(e)),{options:r}=He(Xs),s=Oe(()=>({[Rl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:ht("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),Bv=Dv;function zv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Uv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!it(s)||s.length!==r.length||r.some((a,o)=>a!==s[o]))return!1}return!0}function Tl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rl=(e,t,n)=>e??t??n,Wv=Ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(Qa),s=Oe(()=>e.route||r.value),a=He(Al,0),o=Oe(()=>{let u=Q(a);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),i=Oe(()=>s.value.matched[o.value]);Rn(Al,Oe(()=>o.value+1)),Rn(jv,i),Rn(Qa,s);const l=xe();return sn(()=>[l.value,i.value,e.name],([u,c,f],[d,p,b])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!Hn(c,p)||!d)&&(c.enterCallbacks[f]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=i.value,d=f&&f.components[c];if(!d)return Ol(n.default,{Component:d,route:u});const p=f.props[c],b=p?p===!0?u.params:typeof p=="function"?p(u):p:null,S=ht(d,ce({},b,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Ol(n.default,{Component:S,route:u})||S}}});function Ol(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zu=Wv;function Kv(e){const t=bv(e.routes,e),n=e.parseQuery||Hv,r=e.stringifyQuery||Cl,s=e.history,a=Xn(),o=Xn(),i=Xn(),l=pr(ut);let u=ut;bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ma.bind(null,A=>""+A),f=ma.bind(null,Lv),d=ma.bind(null,Cs);function p(A,U){let j,q;return Ku(A)?(j=t.getRecordMatcher(A),q=U):q=A,t.addRoute(q,j)}function b(A){const U=t.getRecordMatcher(A);U&&t.removeRoute(U)}function k(){return t.getRoutes().map(A=>A.record)}function S(A){return!!t.getRecordMatcher(A)}function _(A,U){if(U=ce({},U||l.value),typeof A=="string"){const w=ga(n,A,U.path),E=t.resolve({path:w.path},U),P=s.createHref(w.fullPath);return ce(w,E,{params:d(E.params),hash:Cs(w.hash),redirectedFrom:void 0,href:P})}let j;if("path"in A)j=ce({},A,{path:ga(n,A.path,U.path).path});else{const w=ce({},A.params);for(const E in w)w[E]==null&&delete w[E];j=ce({},A,{params:f(w)}),U.params=f(U.params)}const q=t.resolve(j,U),le=A.hash||"";q.params=c(d(q.params));const h=qg(r,ce({},A,{hash:Iv(le),path:q.path})),v=s.createHref(h);return ce({fullPath:h,hash:le,query:r===Cl?$v(A.query):A.query||{}},q,{redirectedFrom:void 0,href:v})}function y(A){return typeof A=="string"?ga(n,A,l.value.path):ce({},A)}function g(A,U){if(u!==A)return $n(8,{from:U,to:A})}function m(A){return R(A)}function x(A){return m(ce(y(A),{replace:!0}))}function T(A){const U=A.matched[A.matched.length-1];if(U&&U.redirect){const{redirect:j}=U;let q=typeof j=="function"?j(A):j;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=y(q):{path:q},q.params={}),ce({query:A.query,hash:A.hash,params:"path"in q?{}:A.params},q)}}function R(A,U){const j=u=_(A),q=l.value,le=A.state,h=A.force,v=A.replace===!0,w=T(j);if(w)return R(ce(y(w),{state:typeof w=="object"?ce({},le,w.state):le,force:h,replace:v}),U||j);const E=j;E.redirectedFrom=U;let P;return!h&&Jg(r,q,j)&&(P=$n(16,{to:E,from:q}),lt(q,q,!0,!1)),(P?Promise.resolve(P):N(E,q)).catch(I=>gt(I)?gt(I,2)?I:Pt(I):Y(I,E,q)).then(I=>{if(I){if(gt(I,2))return R(ce({replace:v},y(I.to),{state:typeof I.to=="object"?ce({},le,I.to.state):le,force:h}),U||E)}else I=L(E,q,!0,v,le);return V(E,q,I),I})}function C(A,U){const j=g(A,U);return j?Promise.reject(j):Promise.resolve()}function O(A){const U=hn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(A):A()}function N(A,U){let j;const[q,le,h]=Vv(A,U);j=va(q.reverse(),"beforeRouteLeave",A,U);for(const w of q)w.leaveGuards.forEach(E=>{j.push(jt(E,A,U))});const v=C.bind(null,A,U);return j.push(v),Me(j).then(()=>{j=[];for(const w of a.list())j.push(jt(w,A,U));return j.push(v),Me(j)}).then(()=>{j=va(le,"beforeRouteUpdate",A,U);for(const w of le)w.updateGuards.forEach(E=>{j.push(jt(E,A,U))});return j.push(v),Me(j)}).then(()=>{j=[];for(const w of h)if(w.beforeEnter)if(it(w.beforeEnter))for(const E of w.beforeEnter)j.push(jt(E,A,U));else j.push(jt(w.beforeEnter,A,U));return j.push(v),Me(j)}).then(()=>(A.matched.forEach(w=>w.enterCallbacks={}),j=va(h,"beforeRouteEnter",A,U),j.push(v),Me(j))).then(()=>{j=[];for(const w of o.list())j.push(jt(w,A,U));return j.push(v),Me(j)}).catch(w=>gt(w,8)?w:Promise.reject(w))}function V(A,U,j){i.list().forEach(q=>O(()=>q(A,U,j)))}function L(A,U,j,q,le){const h=g(A,U);if(h)return h;const v=U===ut,w=bn?history.state:{};j&&(q||v?s.replace(A.fullPath,ce({scroll:v&&w&&w.scroll},le)):s.push(A.fullPath,le)),l.value=A,lt(A,U,j,v),Pt()}let J;function ue(){J||(J=s.listen((A,U,j)=>{if(!Hr.listening)return;const q=_(A),le=T(q);if(le){R(ce(le,{replace:!0}),q).catch(or);return}u=q;const h=l.value;bn&&rv(yl(h.fullPath,j.delta),Js()),N(q,h).catch(v=>gt(v,12)?v:gt(v,2)?(R(v.to,q).then(w=>{gt(w,20)&&!j.delta&&j.type===xr.pop&&s.go(-1,!1)}).catch(or),Promise.reject()):(j.delta&&s.go(-j.delta,!1),Y(v,q,h))).then(v=>{v=v||L(q,h,!1),v&&(j.delta&&!gt(v,8)?s.go(-j.delta,!1):j.type===xr.pop&&gt(v,20)&&s.go(-1,!1)),V(q,h,v)}).catch(or)}))}let oe=Xn(),F=Xn(),ne;function Y(A,U,j){Pt(A);const q=F.list();return q.length?q.forEach(le=>le(A,U,j)):console.error(A),Promise.reject(A)}function et(){return ne&&l.value!==ut?Promise.resolve():new Promise((A,U)=>{oe.add([A,U])})}function Pt(A){return ne||(ne=!A,ue(),oe.list().forEach(([U,j])=>A?j(A):U()),oe.reset()),A}function lt(A,U,j,q){const{scrollBehavior:le}=e;if(!bn||!le)return Promise.resolve();const h=!j&&sv(yl(A.fullPath,0))||(q||!j)&&history.state&&history.state.scroll||null;return fn().then(()=>le(A,U,h)).then(v=>v&&nv(v)).catch(v=>Y(v,A,U))}const je=A=>s.go(A);let pn;const hn=new Set,Hr={currentRoute:l,listening:!0,addRoute:p,removeRoute:b,hasRoute:S,getRoutes:k,resolve:_,options:e,push:m,replace:x,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:a.add,beforeResolve:o.add,afterEach:i.add,onError:F.add,isReady:et,install(A){const U=this;A.component("RouterLink",Bv),A.component("RouterView",Zu),A.config.globalProperties.$router=U,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(l)}),bn&&!pn&&l.value===ut&&(pn=!0,m(s.location).catch(le=>{}));const j={};for(const le in ut)Object.defineProperty(j,le,{get:()=>l.value[le],enumerable:!0});A.provide(Xs,U),A.provide(Xo,Rr(j)),A.provide(Qa,l);const q=A.unmount;hn.add(A),A.unmount=function(){hn.delete(A),hn.size<1&&(u=ut,J&&J(),J=null,l.value=ut,pn=!1,ne=!1),q()}}};function Me(A){return A.reduce((U,j)=>U.then(()=>O(j)),Promise.resolve())}return Hr}function Vv(e,t){const n=[],r=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const i=t.matched[o];i&&(e.matched.find(u=>Hn(u,i))?r.push(i):n.push(i));const l=e.matched[o];l&&(t.matched.find(u=>Hn(u,l))||s.push(l))}return[n,r,s]}function ef(){return He(Xs)}function tf(){return He(Xo)}const Il=[{name:"docs-PostView",path:"/docs/PostView",meta:{},alias:[],redirect:void 0,component:()=>Ft(()=>import("./PostView.a835d2af.js"),["./PostView.a835d2af.js","./vue.f36acd1f.ab456e0e.js","./_commonjsHelpers.a43c4801.js","./_commonjsHelpers.3ae27843.css","./markUp.17919c20.js","./PostView.c0acebbe.css"],import.meta.url).then(e=>e.default||e)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>Ft(()=>import("./index.193f8404.js"),["./index.193f8404.js","./nuxt-link.4d627739.js","./markUp.17919c20.js","./_commonjsHelpers.a43c4801.js","./_commonjsHelpers.3ae27843.css","./index.298566b8.css"],import.meta.url).then(e=>e.default||e)}],Yv={routes:e=>[{name:"home",path:"/",component:()=>Ft(()=>import("./index.193f8404.js"),["./index.193f8404.js","./nuxt-link.4d627739.js","./markUp.17919c20.js","./_commonjsHelpers.a43c4801.js","./_commonjsHelpers.3ae27843.css","./index.298566b8.css"],import.meta.url)},{name:"post",path:"/docs/:pathMatch(.*)*",component:()=>Ft(()=>import("./PostView.a835d2af.js"),["./PostView.a835d2af.js","./vue.f36acd1f.ab456e0e.js","./_commonjsHelpers.a43c4801.js","./_commonjsHelpers.3ae27843.css","./markUp.17919c20.js","./PostView.c0acebbe.css"],import.meta.url)},{name:"tag",path:"/tags/:tag/:page(\\d+)",component:()=>Ft(()=>import("./TagList.d35aa959.js"),["./TagList.d35aa959.js","./_commonjsHelpers.a43c4801.js","./_commonjsHelpers.3ae27843.css","./TagList.3275f93a.css"],import.meta.url)},{name:"tags",path:"/tags",component:()=>Ft(()=>import("./TagList.d35aa959.js"),["./TagList.d35aa959.js","./_commonjsHelpers.a43c4801.js","./_commonjsHelpers.3ae27843.css","./TagList.3275f93a.css"],import.meta.url)}],scrollBehavior:()=>(document.getElementById("main-content-wrapper"),{behavior:"smooth",top:0,left:0})},qv={scrollBehavior(e,t,n){var u;const r=Ee(),s=((u=dn().options)==null?void 0:u.scrollBehaviorType)??"auto";let a=n||void 0;const o=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop;if(!a&&t&&e&&o!==!1&&Jv(t,e)&&(a={left:0,top:0}),e.path===t.path){if(t.hash&&!e.hash)return{left:0,top:0};if(e.hash)return{el:e.hash,top:Ml(e.hash),behavior:s}}const i=c=>!!(c.meta.pageTransition??Ja),l=i(t)&&i(e)?"page:transition:finish":"page:finish";return new Promise(c=>{r.hooks.hookOnce(l,async()=>{await fn(),e.hash&&(a={el:e.hash,top:Ml(e.hash),behavior:s}),c(a)})})}};function Ml(e){try{const t=document.querySelector(e);if(t)return parseFloat(getComputedStyle(t).scrollMarginTop)}catch{}return 0}function Jv(e,t){return t.path!==e.path||JSON.stringify(e.params)!==JSON.stringify(t.params)}const Xv={},Fe={...Xv,...qv,...Yv},Gv=async e=>{var l;let t,n;if(!((l=e.meta)!=null&&l.validate))return;const r=Ee(),s=dn();if(([t,n]=wr(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t)===!0)return;const o=qo({statusCode:404,statusMessage:`Page Not Found: ${e.fullPath}`}),i=s.beforeResolve(u=>{if(i(),u===e){const c=s.afterEach(async()=>{c(),await r.runWithContext(()=>wn(o)),window.history.pushState({},"",e.fullPath)});return!1}})},Qv=async e=>{let t,n;const r=([t,n]=wr(()=>$g(e.path)),t=await t,n(),t);if(r.redirect)return r.redirect},Zv=[Gv,Qv],lr={};function e1(e,t,n){const{pathname:r,search:s,hash:a}=t,o=e.indexOf("#");if(o>-1){const u=a.includes(e.slice(o))?e.slice(o).length:1;let c=a.slice(u);return c[0]!=="/"&&(c="/"+c),nl(c,"")}const i=nl(r,e),l=!n||Wh(i,n,{trailingSlash:!0})?i:n;return l+(l.includes("?")?"":s)+a}const t1=Ct({name:"nuxt:router",enforce:"pre",async setup(e){var k,S;let t,n,r=Vs().app.baseURL;Fe.hashMode&&!r.includes("#")&&(r+="#");const s=((k=Fe.history)==null?void 0:k.call(Fe,r))??(Fe.hashMode?lv(r):Wu(r)),a=((S=Fe.routes)==null?void 0:S.call(Fe,Il))??Il;let o;const i=e1(r,window.location,e.payload.path),l=Kv({...Fe,scrollBehavior:(_,y,g)=>{var m;if(y===ut){o=g;return}return l.options.scrollBehavior=Fe.scrollBehavior,(m=Fe.scrollBehavior)==null?void 0:m.call(Fe,_,ut,o||g)},history:s,routes:a});e.vueApp.use(l);const u=pr(l.currentRoute.value);l.afterEach((_,y)=>{u.value=y}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>u.value});const c=pr(l.resolve(i)),f=()=>{c.value=l.currentRoute.value};e.hook("page:finish",f),l.afterEach((_,y)=>{var g,m,x,T;((m=(g=_.matched[0])==null?void 0:g.components)==null?void 0:m.default)===((T=(x=y.matched[0])==null?void 0:x.components)==null?void 0:T.default)&&f()});const d={};for(const _ in c.value)Object.defineProperty(d,_,{get:()=>c.value[_]});e._route=Rr(d),e._middleware=e._middleware||{global:[],named:{}};const p=qs();try{[t,n]=wr(()=>l.isReady()),await t,n()}catch(_){[t,n]=wr(()=>e.runWithContext(()=>wn(_))),await t,n()}const b=e.payload.state._layout;return l.beforeEach(async(_,y)=>{var g;_.meta=de(_.meta),e.isHydrating&&b&&!ln(_.meta.layout)&&(_.meta.layout=b),e._processingMiddleware=!0;{const m=new Set([...Zv,...e._middleware.global]);for(const x of _.matched){const T=x.meta.middleware;if(T)if(Array.isArray(T))for(const R of T)m.add(R);else m.add(T)}for(const x of m){const T=typeof x=="string"?e._middleware.named[x]||await((g=lr[x])==null?void 0:g.call(lr).then(C=>C.default||C)):x;if(!T)throw new Error(`Unknown route middleware: '${x}'.`);const R=await e.runWithContext(()=>T(_,y));if(!e.payload.serverRendered&&e.isHydrating&&(R===!1||R instanceof Error)){const C=R||Ya({statusCode:404,statusMessage:`Page Not Found: ${i}`});return await e.runWithContext(()=>wn(C)),!1}if(R!==!0&&(R||R===!1))return R}}}),l.onError(()=>{delete e._processingMiddleware}),l.afterEach(async(_,y,g)=>{delete e._processingMiddleware,!e.isHydrating&&p.value&&await e.runWithContext(Ag),_.matched.length===0&&await e.runWithContext(()=>wn(Ya({statusCode:404,fatal:!1,statusMessage:`Page not found: ${_.fullPath}`})))}),e.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(i),name:void 0,force:!0}),l.options.scrollBehavior=Fe.scrollBehavior}catch(_){await e.runWithContext(()=>wn(_))}}),{provide:{router:l}}}}),n1=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let nf;const Ir=e=>nf=e,rf=Symbol();function Za(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var cr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(cr||(cr={}));function r1(){const e=xo(!0),t=e.run(()=>xe({}));let n=[],r=[];const s=js({install(a){Ir(s),s._a=a,a.provide(rf,s),a.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(a){return!this._a&&!n1?r.push(a):n.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const sf=()=>{};function Nl(e,t,n,r=sf){e.push(t);const s=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),r())};return!n&&yc()&&ad(s),s}function vn(e,...t){e.slice().forEach(n=>{n(...t)})}const s1=e=>e();function eo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Za(s)&&Za(r)&&e.hasOwnProperty(n)&&!ke(r)&&!Bt(r)?e[n]=eo(s,r):e[n]=r}return e}const a1=Symbol();function o1(e){return!Za(e)||!e.hasOwnProperty(a1)}const{assign:Lt}=Object;function i1(e){return!!(ke(e)&&e.effect)}function l1(e,t,n,r){const{state:s,actions:a,getters:o}=t,i=n.state.value[e];let l;function u(){i||(n.state.value[e]=s?s():{});const c=Td(n.state.value[e]);return Lt(c,a,Object.keys(o||{}).reduce((f,d)=>(f[d]=js(Oe(()=>{Ir(n);const p=n._s.get(e);return o[d].call(p,p)})),f),{}))}return l=af(e,u,t,n,r,!0),l}function af(e,t,n={},r,s,a){let o;const i=Lt({actions:{}},n),l={deep:!0};let u,c,f=[],d=[],p;const b=r.state.value[e];!a&&!b&&(r.state.value[e]={}),xe({});let k;function S(C){let O;u=c=!1,typeof C=="function"?(C(r.state.value[e]),O={type:cr.patchFunction,storeId:e,events:p}):(eo(r.state.value[e],C),O={type:cr.patchObject,payload:C,storeId:e,events:p});const N=k=Symbol();fn().then(()=>{k===N&&(u=!0)}),c=!0,vn(f,O,r.state.value[e])}const _=a?function(){const{state:O}=n,N=O?O():{};this.$patch(V=>{Lt(V,N)})}:sf;function y(){o.stop(),f=[],d=[],r._s.delete(e)}function g(C,O){return function(){Ir(r);const N=Array.from(arguments),V=[],L=[];function J(F){V.push(F)}function ue(F){L.push(F)}vn(d,{args:N,name:C,store:x,after:J,onError:ue});let oe;try{oe=O.apply(this&&this.$id===e?this:x,N)}catch(F){throw vn(L,F),F}return oe instanceof Promise?oe.then(F=>(vn(V,F),F)).catch(F=>(vn(L,F),Promise.reject(F))):(vn(V,oe),oe)}}const m={_p:r,$id:e,$onAction:Nl.bind(null,d),$patch:S,$reset:_,$subscribe(C,O={}){const N=Nl(f,C,O.detached,()=>V()),V=o.run(()=>sn(()=>r.state.value[e],L=>{(O.flush==="sync"?c:u)&&C({storeId:e,type:cr.direct,events:p},L)},Lt({},l,O)));return N},$dispose:y},x=de(m);r._s.set(e,x);const R=(r._a&&r._a.runWithContext||s1)(()=>r._e.run(()=>(o=xo()).run(t)));for(const C in R){const O=R[C];if(ke(O)&&!i1(O)||Bt(O))a||(b&&o1(O)&&(ke(O)?O.value=b[C]:eo(O,b[C])),r.state.value[e][C]=O);else if(typeof O=="function"){const N=g(C,O);R[C]=N,i.actions[C]=O}}return Lt(x,R),Lt(ae(x),R),Object.defineProperty(x,"$state",{get:()=>r.state.value[e],set:C=>{S(O=>{Lt(O,C)})}}),r._p.forEach(C=>{Lt(x,o.run(()=>C({store:x,app:r._a,pinia:r,options:i})))}),b&&a&&n.hydrate&&n.hydrate(x.$state,b),u=!0,c=!0,x}function Gs(e,t,n){let r,s;const a=typeof t=="function";typeof e=="string"?(r=e,s=a?n:t):(s=e,r=e.id);function o(i,l){const u=$o();return i=i||(u?He(rf,null):null),i&&Ir(i),i=nf,i._s.has(r)||(a?af(r,t,s,i):l1(r,s,i)),i._s.get(r)}return o.$id=r,o}const c1=Ct(e=>{const t=r1();return e.vueApp.use(t),Ir(t),e.payload&&e.payload.pinia&&(t.state.value=e.payload.pinia),{provide:{pinia:t}}}),u1=Ct({name:"nuxt:global-components"}),qr={},f1=Ct({name:"nuxt:prefetch",setup(e){const t=dn();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof qr[r]=="function"&&await qr[r]()})}),e.hooks.hook("link:prefetch",n=>{var o,i,l,u;if(Ks(n))return;const r=t.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let a=Array.isArray((i=r==null?void 0:r.meta)==null?void 0:i.middleware)?(l=r==null?void 0:r.meta)==null?void 0:l.middleware:[(u=r==null?void 0:r.meta)==null?void 0:u.middleware];a=a.filter(c=>typeof c=="string");for(const c of a)typeof lr[c]=="function"&&lr[c]();s&&typeof qr[s]=="function"&&qr[s]()})}}),d1=Ct({name:"nuxt:chunk-reload",setup(e){const t=dn(),n=Vs(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook("app:chunkError",({error:a})=>{r.add(a)});function s(a){const i="href"in a&&a.href.startsWith("#")?n.app.baseURL+a.href:Wn(n.app.baseURL,a.fullPath);Ig({path:i,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(s)}),t.onError((a,o)=>{r.has(a)&&s(o)})}}),p1=Ct(e=>{let t;const n=Vs();async function r(){const s=await Bu();t&&clearTimeout(t),t=setTimeout(r,1e3*60*60);const a=await $fetch(Wn(n.app.cdnURL||n.app.baseURL,n.app.buildAssetsDir,"builds/latest.json"));a.id!==s.id&&e.hooks.callHook("app:manifest:update",a)}Tg(()=>{t=setTimeout(r,1e3*60*60)})});function Ll(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ll(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ll(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}function h1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m1(e,t,n){return t&&Hl(e.prototype,t),n&&Hl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Go(e,t){return v1(e)||b1(e,t)||of(e,t)||w1()}function Mr(e){return g1(e)||y1(e)||of(e)||_1()}function g1(e){if(Array.isArray(e))return to(e)}function v1(e){if(Array.isArray(e))return e}function y1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function b1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],s=!0,a=!1,o,i;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));s=!0);}catch(l){a=!0,i=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(a)throw i}}return r}}function of(e,t){if(e){if(typeof e=="string")return to(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return to(e,t)}}function to(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $l=function(){},Qo={},lf={},cf=null,uf={mark:$l,measure:$l};try{typeof window<"u"&&(Qo=window),typeof document<"u"&&(lf=document),typeof MutationObserver<"u"&&(cf=MutationObserver),typeof performance<"u"&&(uf=performance)}catch{}var x1=Qo.navigator||{},jl=x1.userAgent,Fl=jl===void 0?"":jl,Wt=Qo,be=lf,Dl=cf,Jr=uf;Wt.document;var At=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",ff=~Fl.indexOf("MSIE")||~Fl.indexOf("Trident/"),Xr,Gr,Qr,Zr,es,xt="___FONT_AWESOME___",no=16,df="fa",pf="svg-inline--fa",cn="data-fa-i2svg",ro="data-fa-pseudo-element",k1="data-fa-pseudo-element-pending",Zo="data-prefix",ei="data-icon",Bl="fontawesome-i2svg",E1="async",S1=["HTML","HEAD","STYLE","SCRIPT"],hf=function(){try{return!0}catch{return!1}}(),ye="classic",we="sharp",ti=[ye,we];function Nr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ye]}})}var kr=Nr((Xr={},Te(Xr,ye,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Te(Xr,we,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Xr)),Er=Nr((Gr={},Te(Gr,ye,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Te(Gr,we,{solid:"fass",regular:"fasr",light:"fasl"}),Gr)),Sr=Nr((Qr={},Te(Qr,ye,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Te(Qr,we,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Qr)),C1=Nr((Zr={},Te(Zr,ye,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Te(Zr,we,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Zr)),A1=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,mf="fa-layers-text",P1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,T1=Nr((es={},Te(es,ye,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Te(es,we,{900:"fass",400:"fasr",300:"fasl"}),es)),gf=[1,2,3,4,5,6,7,8,9,10],R1=gf.concat([11,12,13,14,15,16,17,18,19,20]),O1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cr=new Set;Object.keys(Er[ye]).map(Cr.add.bind(Cr));Object.keys(Er[we]).map(Cr.add.bind(Cr));var I1=[].concat(ti,Mr(Cr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tn.GROUP,tn.SWAP_OPACITY,tn.PRIMARY,tn.SECONDARY]).concat(gf.map(function(e){return"".concat(e,"x")})).concat(R1.map(function(e){return"w-".concat(e)})),ur=Wt.FontAwesomeConfig||{};function M1(e){var t=be.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function N1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(be&&typeof be.querySelector=="function"){var L1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];L1.forEach(function(e){var t=Go(e,2),n=t[0],r=t[1],s=N1(M1(n));s!=null&&(ur[r]=s)})}var vf={styleDefault:"solid",familyDefault:"classic",cssPrefix:df,replacementClass:pf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ur.familyPrefix&&(ur.cssPrefix=ur.familyPrefix);var jn=B(B({},vf),ur);jn.autoReplaceSvg||(jn.observeMutations=!1);var K={};Object.keys(vf).forEach(function(e){Object.defineProperty(K,e,{enumerable:!0,set:function(n){jn[e]=n,fr.forEach(function(r){return r(K)})},get:function(){return jn[e]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(t){jn.cssPrefix=t,fr.forEach(function(n){return n(K)})},get:function(){return jn.cssPrefix}});Wt.FontAwesomeConfig=K;var fr=[];function H1(e){return fr.push(e),function(){fr.splice(fr.indexOf(e),1)}}var Nt=no,pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $1(e){if(!(!e||!At)){var t=be.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=be.head.childNodes,r=null,s=n.length-1;s>-1;s--){var a=n[s],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return be.head.insertBefore(t,r),e}}var j1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ar(){for(var e=12,t="";e-- >0;)t+=j1[Math.random()*62|0];return t}function Kn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ni(e){return e.classList?Kn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function yf(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(yf(e[n]),'" ')},"").trim()}function Qs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ri(e){return e.size!==pt.size||e.x!==pt.x||e.y!==pt.y||e.rotate!==pt.rotate||e.flipX||e.flipY}function D1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,s={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(i)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function B1(e){var t=e.transform,n=e.width,r=n===void 0?no:n,s=e.height,a=s===void 0?no:s,o=e.startCentered,i=o===void 0?!1:o,l="";return i&&ff?l+="translate(".concat(t.x/Nt-r/2,"em, ").concat(t.y/Nt-a/2,"em) "):i?l+="translate(calc(-50% + ".concat(t.x/Nt,"em), calc(-50% + ").concat(t.y/Nt,"em)) "):l+="translate(".concat(t.x/Nt,"em, ").concat(t.y/Nt,"em) "),l+="scale(".concat(t.size/Nt*(t.flipX?-1:1),", ").concat(t.size/Nt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var z1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function bf(){var e=df,t=pf,n=K.cssPrefix,r=K.replacementClass,s=z1;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");s=s.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(i,".".concat(r))}return s}var zl=!1;function ya(){K.autoAddCss&&!zl&&($1(bf()),zl=!0)}var U1={mixout:function(){return{dom:{css:bf,insertCss:ya}}},hooks:function(){return{beforeDOMElementCreation:function(){ya()},beforeI2svg:function(){ya()}}}},kt=Wt||{};kt[xt]||(kt[xt]={});kt[xt].styles||(kt[xt].styles={});kt[xt].hooks||(kt[xt].hooks={});kt[xt].shims||(kt[xt].shims=[]);var at=kt[xt],_f=[],W1=function e(){be.removeEventListener("DOMContentLoaded",e),Ps=1,_f.map(function(t){return t()})},Ps=!1;At&&(Ps=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),Ps||be.addEventListener("DOMContentLoaded",W1));function K1(e){At&&(Ps?setTimeout(e,0):_f.push(e))}function Lr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,s=e.children,a=s===void 0?[]:s;return typeof e=="string"?yf(e):"<".concat(t," ").concat(F1(r),">").concat(a.map(Lr).join(""),"</").concat(t,">")}function Ul(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var V1=function(t,n){return function(r,s,a,o){return t.call(n,r,s,a,o)}},ba=function(t,n,r,s){var a=Object.keys(t),o=a.length,i=s!==void 0?V1(n,s):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=i(c,t[u],u,t);return c};function Y1(e){for(var t=[],n=0,r=e.length;n<r;){var s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((s&1023)<<10)+(a&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function so(e){var t=Y1(e);return t.length===1?t[0].toString(16):null}function q1(e,t){var n=e.length,r=e.charCodeAt(t),s;return r>=55296&&r<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Wl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],s=!!r.icon;return s?t[r.iconName]=r.icon:t[n]=r,t},{})}function ao(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,a=Wl(t);typeof at.hooks.addPack=="function"&&!s?at.hooks.addPack(e,Wl(t)):at.styles[e]=B(B({},at.styles[e]||{}),a),e==="fas"&&ao("fa",t)}var ts,ns,rs,xn=at.styles,J1=at.shims,X1=(ts={},Te(ts,ye,Object.values(Sr[ye])),Te(ts,we,Object.values(Sr[we])),ts),si=null,wf={},xf={},kf={},Ef={},Sf={},G1=(ns={},Te(ns,ye,Object.keys(kr[ye])),Te(ns,we,Object.keys(kr[we])),ns);function Q1(e){return~I1.indexOf(e)}function Z1(e,t){var n=t.split("-"),r=n[0],s=n.slice(1).join("-");return r===e&&s!==""&&!Q1(s)?s:null}var Cf=function(){var t=function(a){return ba(xn,function(o,i,l){return o[l]=ba(i,a,{}),o},{})};wf=t(function(s,a,o){if(a[3]&&(s[a[3]]=o),a[2]){var i=a[2].filter(function(l){return typeof l=="number"});i.forEach(function(l){s[l.toString(16)]=o})}return s}),xf=t(function(s,a,o){if(s[o]=o,a[2]){var i=a[2].filter(function(l){return typeof l=="string"});i.forEach(function(l){s[l]=o})}return s}),Sf=t(function(s,a,o){var i=a[2];return s[o]=o,i.forEach(function(l){s[l]=o}),s});var n="far"in xn||K.autoFetchSvg,r=ba(J1,function(s,a){var o=a[0],i=a[1],l=a[2];return i==="far"&&!n&&(i="fas"),typeof o=="string"&&(s.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:i,iconName:l}),s},{names:{},unicodes:{}});kf=r.names,Ef=r.unicodes,si=Zs(K.styleDefault,{family:K.familyDefault})};H1(function(e){si=Zs(e.styleDefault,{family:K.familyDefault})});Cf();function ai(e,t){return(wf[e]||{})[t]}function ey(e,t){return(xf[e]||{})[t]}function nn(e,t){return(Sf[e]||{})[t]}function Af(e){return kf[e]||{prefix:null,iconName:null}}function ty(e){var t=Ef[e],n=ai("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Kt(){return si}var oi=function(){return{prefix:null,iconName:null,rest:[]}};function Zs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ye:n,s=kr[r][e],a=Er[r][e]||Er[r][s],o=e in at.styles?e:null;return a||o||null}var Kl=(rs={},Te(rs,ye,Object.keys(Sr[ye])),Te(rs,we,Object.keys(Sr[we])),rs);function ea(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,a=(t={},Te(t,ye,"".concat(K.cssPrefix,"-").concat(ye)),Te(t,we,"".concat(K.cssPrefix,"-").concat(we)),t),o=null,i=ye;(e.includes(a[ye])||e.some(function(u){return Kl[ye].includes(u)}))&&(i=ye),(e.includes(a[we])||e.some(function(u){return Kl[we].includes(u)}))&&(i=we);var l=e.reduce(function(u,c){var f=Z1(K.cssPrefix,c);if(xn[c]?(c=X1[i].includes(c)?C1[i][c]:c,o=c,u.prefix=c):G1[i].indexOf(c)>-1?(o=c,u.prefix=Zs(c,{family:i})):f?u.iconName=f:c!==K.replacementClass&&c!==a[ye]&&c!==a[we]&&u.rest.push(c),!s&&u.prefix&&u.iconName){var d=o==="fa"?Af(u.iconName):{},p=nn(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!xn.far&&xn.fas&&!K.autoFetchSvg&&(u.prefix="fas")}return u},oi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===we&&(xn.fass||K.autoFetchSvg)&&(l.prefix="fass",l.iconName=nn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Kt()||"fas"),l}var ny=function(){function e(){h1(this,e),this.definitions={}}return m1(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(i){n.definitions[i]=B(B({},n.definitions[i]||{}),o[i]),ao(i,o[i]);var l=Sr[ye][i];l&&ao(l,o[i]),Cf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(a){var o=s[a],i=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[i]||(n[i]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[i][f]=u)}),n[i][l]=u}),n}}]),e}(),Vl=[],kn={},On={},ry=Object.keys(On);function sy(e,t){var n=t.mixoutsTo;return Vl=e,kn={},Object.keys(On).forEach(function(r){ry.indexOf(r)===-1&&delete On[r]}),Vl.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),As(s[o])==="object"&&Object.keys(s[o]).forEach(function(i){n[o]||(n[o]={}),n[o][i]=s[o][i]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){kn[o]||(kn[o]=[]),kn[o].push(a[o])})}r.provides&&r.provides(On)}),n}function oo(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var a=kn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=kn[e]||[];s.forEach(function(a){a.apply(null,n)})}function Et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return On[e]?On[e].apply(null,t):void 0}function io(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Kt();if(t)return t=nn(n,t)||t,Ul(Pf.definitions,n,t)||Ul(at.styles,n,t)}var Pf=new ny,ay=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,un("noAuto")},oy={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return At?(un("beforeI2svg",t),Et("pseudoElements2svg",t),Et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,K1(function(){ly({autoReplaceSvgRoot:n}),un("watch",t)})}},iy={icon:function(t){if(t===null)return null;if(As(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:nn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Zs(t[0]);return{prefix:r,iconName:nn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(K.cssPrefix,"-"))>-1||t.match(A1))){var s=ea(t.split(" "),{skipLookups:!0});return{prefix:s.prefix||Kt(),iconName:nn(s.prefix,s.iconName)||s.iconName}}if(typeof t=="string"){var a=Kt();return{prefix:a,iconName:nn(a,t)||t}}}},qe={noAuto:ay,config:K,dom:oy,parse:iy,library:Pf,findIconDefinition:io,toHtml:Lr},ly=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?be:n;(Object.keys(at.styles).length>0||K.autoFetchSvg)&&At&&K.autoReplaceSvg&&qe.dom.i2svg({node:r})};function ta(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Lr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(At){var r=be.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function cy(e){var t=e.children,n=e.main,r=e.mask,s=e.attributes,a=e.styles,o=e.transform;if(ri(o)&&n.found&&!r.found){var i=n.width,l=n.height,u={x:i/l/2,y:.5};s.style=Qs(B(B({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function uy(e){var t=e.prefix,n=e.iconName,r=e.children,s=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(K.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},s),{},{id:o}),children:r}]}]}function ii(e){var t=e.icons,n=t.main,r=t.mask,s=e.prefix,a=e.iconName,o=e.transform,i=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,p=d===void 0?!1:d,b=r.found?r:n,k=b.width,S=b.height,_=s==="fak",y=[K.replacementClass,a?"".concat(K.cssPrefix,"-").concat(a):""].filter(function(O){return f.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(f.classes).join(" "),g={children:[],attributes:B(B({},f.attributes),{},{"data-prefix":s,"data-icon":a,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(S)})},m=_&&!~f.classes.indexOf("fa-fw")?{width:"".concat(k/S*16*.0625,"em")}:{};p&&(g.attributes[cn]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Ar())},children:[l]}),delete g.attributes.title);var x=B(B({},g),{},{prefix:s,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:i,styles:B(B({},m),f.styles)}),T=r.found&&n.found?Et("generateAbstractMask",x)||{children:[],attributes:{}}:Et("generateAbstractIcon",x)||{children:[],attributes:{}},R=T.children,C=T.attributes;return x.children=R,x.attributes=C,i?uy(x):cy(x)}function Yl(e){var t=e.content,n=e.width,r=e.height,s=e.transform,a=e.title,o=e.extra,i=e.watchable,l=i===void 0?!1:i,u=B(B(B({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[cn]="");var c=B({},o.styles);ri(s)&&(c.transform=B1({transform:s,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Qs(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function fy(e){var t=e.content,n=e.title,r=e.extra,s=B(B(B({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Qs(r.styles);a.length>0&&(s.style=a);var o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var _a=at.styles;function lo(e){var t=e[0],n=e[1],r=e.slice(4),s=Go(r,1),a=s[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(tn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(tn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(tn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var dy={found:!1,width:512,height:512};function py(e,t){!hf&&!K.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function co(e,t){var n=t;return t==="fa"&&K.styleDefault!==null&&(t=Kt()),new Promise(function(r,s){if(Et("missingIconAbstract"),n==="fa"){var a=Af(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&_a[t]&&_a[t][e]){var o=_a[t][e];return r(lo(o))}py(e,t),r(B(B({},dy),{},{icon:K.showMissingIcons&&e?Et("missingIconAbstract")||{}:{}}))})}var ql=function(){},uo=K.measurePerformance&&Jr&&Jr.mark&&Jr.measure?Jr:{mark:ql,measure:ql},er='FA "6.4.2"',hy=function(t){return uo.mark("".concat(er," ").concat(t," begins")),function(){return Tf(t)}},Tf=function(t){uo.mark("".concat(er," ").concat(t," ends")),uo.measure("".concat(er," ").concat(t),"".concat(er," ").concat(t," begins"),"".concat(er," ").concat(t," ends"))},li={begin:hy,end:Tf},cs=function(){};function Jl(e){var t=e.getAttribute?e.getAttribute(cn):null;return typeof t=="string"}function my(e){var t=e.getAttribute?e.getAttribute(Zo):null,n=e.getAttribute?e.getAttribute(ei):null;return t&&n}function gy(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(K.replacementClass)}function vy(){if(K.autoReplaceSvg===!0)return us.replace;var e=us[K.autoReplaceSvg];return e||us.replace}function yy(e){return be.createElementNS("http://www.w3.org/2000/svg",e)}function by(e){return be.createElement(e)}function Rf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yy:by:n;if(typeof e=="string")return be.createTextNode(e);var s=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){s.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){s.appendChild(Rf(o,{ceFn:r}))}),s}function _y(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var us={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(s){n.parentNode.insertBefore(Rf(s),n)}),n.getAttribute(cn)===null&&K.keepOriginalSource){var r=be.createComment(_y(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ni(n).indexOf(K.replacementClass))return us.replace(t);var s=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(i,l){return l===K.replacementClass||l.match(s)?i.toSvg.push(l):i.toNode.push(l),i},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(i){return Lr(i)}).join(`
`);n.setAttribute(cn,""),n.innerHTML=o}};function Xl(e){e()}function Of(e,t){var n=typeof t=="function"?t:cs;if(e.length===0)n();else{var r=Xl;K.mutateApproach===E1&&(r=Wt.requestAnimationFrame||Xl),r(function(){var s=vy(),a=li.begin("mutate");e.map(s),a(),n()})}}var ci=!1;function If(){ci=!0}function fo(){ci=!1}var Ts=null;function Gl(e){if(Dl&&K.observeMutations){var t=e.treeCallback,n=t===void 0?cs:t,r=e.nodeCallback,s=r===void 0?cs:r,a=e.pseudoElementsCallback,o=a===void 0?cs:a,i=e.observeMutationsRoot,l=i===void 0?be:i;Ts=new Dl(function(u){if(!ci){var c=Kt();Kn(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Jl(f.addedNodes[0])&&(K.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&K.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Jl(f.target)&&~O1.indexOf(f.attributeName))if(f.attributeName==="class"&&my(f.target)){var d=ea(ni(f.target)),p=d.prefix,b=d.iconName;f.target.setAttribute(Zo,p||c),b&&f.target.setAttribute(ei,b)}else gy(f.target)&&s(f.target)})}}),At&&Ts.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wy(){Ts&&Ts.disconnect()}function xy(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,s){var a=s.split(":"),o=a[0],i=a.slice(1);return o&&i.length>0&&(r[o]=i.join(":").trim()),r},{})),n}function ky(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",s=ea(ni(e));return s.prefix||(s.prefix=Kt()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=ey(s.prefix,e.innerText)||ai(s.prefix,so(e.innerText))),!s.iconName&&K.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function Ey(e){var t=Kn(e.attributes).reduce(function(s,a){return s.name!=="class"&&s.name!=="style"&&(s[a.name]=a.value),s},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return K.autoA11y&&(n?t["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||Ar()):(t["aria-hidden"]="true",t.focusable="false")),t}function Sy(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ql(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ky(e),r=n.iconName,s=n.prefix,a=n.rest,o=Ey(e),i=oo("parseNodeAttributes",{},e),l=t.styleParser?xy(e):[];return B({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:pt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},i)}var Cy=at.styles;function Mf(e){var t=K.autoReplaceSvg==="nest"?Ql(e,{styleParser:!1}):Ql(e);return~t.extra.classes.indexOf(mf)?Et("generateLayersText",e,t):Et("generateSvgReplacementMutation",e,t)}var Vt=new Set;ti.map(function(e){Vt.add("fa-".concat(e))});Object.keys(kr[ye]).map(Vt.add.bind(Vt));Object.keys(kr[we]).map(Vt.add.bind(Vt));Vt=Mr(Vt);function Zl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!At)return Promise.resolve();var n=be.documentElement.classList,r=function(f){return n.add("".concat(Bl,"-").concat(f))},s=function(f){return n.remove("".concat(Bl,"-").concat(f))},a=K.autoFetchSvg?Vt:ti.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Cy));a.includes("fa")||a.push("fa");var o=[".".concat(mf,":not([").concat(cn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(cn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var i=[];try{i=Kn(e.querySelectorAll(o))}catch{}if(i.length>0)r("pending"),s("complete");else return Promise.resolve();var l=li.begin("onTree"),u=i.reduce(function(c,f){try{var d=Mf(f);d&&c.push(d)}catch(p){hf||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Of(d,function(){r("active"),r("complete"),s("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Ay(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mf(e).then(function(n){n&&Of([n],t)})}function Py(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:io(t||{}),s=n.mask;return s&&(s=(s||{}).icon?s:io(s||{})),e(r,B(B({},n),{},{mask:s}))}}var Ty=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?pt:r,a=n.symbol,o=a===void 0?!1:a,i=n.mask,l=i===void 0?null:i,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,b=p===void 0?null:p,k=n.classes,S=k===void 0?[]:k,_=n.attributes,y=_===void 0?{}:_,g=n.styles,m=g===void 0?{}:g;if(t){var x=t.prefix,T=t.iconName,R=t.icon;return ta(B({type:"icon"},t),function(){return un("beforeDOMElementCreation",{iconDefinition:t,params:n}),K.autoA11y&&(d?y["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(b||Ar()):(y["aria-hidden"]="true",y.focusable="false")),ii({icons:{main:lo(R),mask:l?lo(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:T,transform:B(B({},pt),s),symbol:o,title:d,maskId:c,titleId:b,extra:{attributes:y,styles:m,classes:S}})})}},Ry={mixout:function(){return{icon:Py(Ty)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zl,n.nodeCallback=Ay,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,s=r===void 0?be:r,a=n.callback,o=a===void 0?function(){}:a;return Zl(s,o)},t.generateSvgReplacementMutation=function(n,r){var s=r.iconName,a=r.title,o=r.titleId,i=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,b){Promise.all([co(s,i),c.iconName?co(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var S=Go(k,2),_=S[0],y=S[1];p([n,ii({icons:{main:_,mask:y},prefix:i,iconName:s,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,a=n.main,o=n.transform,i=n.styles,l=Qs(i);l.length>0&&(s.style=l);var u;return ri(o)&&(u=Et("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:s}}}},Oy={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,a=s===void 0?[]:s;return ta({type:"layer"},function(){un("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(i){Array.isArray(i)?i.map(function(l){o=o.concat(l.abstract)}):o=o.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Mr(a)).join(" ")},children:o}]})}}}},Iy={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,a=s===void 0?null:s,o=r.classes,i=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return ta({type:"counter",content:n},function(){return un("beforeDOMElementCreation",{content:n,params:r}),fy({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Mr(i))}})})}}}},My={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,a=s===void 0?pt:s,o=r.title,i=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return ta({type:"text",content:n},function(){return un("beforeDOMElementCreation",{content:n,params:r}),Yl({content:n,transform:B(B({},pt),a),title:i,extra:{attributes:f,styles:p,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Mr(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var s=r.title,a=r.transform,o=r.extra,i=null,l=null;if(ff){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();i=c.width/u,l=c.height/u}return K.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yl({content:n.innerHTML,width:i,height:l,transform:a,title:s,extra:o,watchable:!0})])}}},Ny=new RegExp('"',"ug"),ec=[1105920,1112319];function Ly(e){var t=e.replace(Ny,""),n=q1(t,0),r=n>=ec[0]&&n<=ec[1],s=t.length===2?t[0]===t[1]:!1;return{value:so(s?t[0]:t),isSecondary:r||s}}function tc(e,t){var n="".concat(k1).concat(t.replace(":","-"));return new Promise(function(r,s){if(e.getAttribute(n)!==null)return r();var a=Kn(e.children),o=a.filter(function(R){return R.getAttribute(ro)===t})[0],i=Wt.getComputedStyle(e,t),l=i.getPropertyValue("font-family").match(P1),u=i.getPropertyValue("font-weight"),c=i.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=i.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?we:ye,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Er[d][l[2].toLowerCase()]:T1[d][u],b=Ly(f),k=b.value,S=b.isSecondary,_=l[0].startsWith("FontAwesome"),y=ai(p,k),g=y;if(_){var m=ty(k);m.iconName&&m.prefix&&(y=m.iconName,p=m.prefix)}if(y&&!S&&(!o||o.getAttribute(Zo)!==p||o.getAttribute(ei)!==g)){e.setAttribute(n,g),o&&e.removeChild(o);var x=Sy(),T=x.extra;T.attributes[ro]=t,co(y,p).then(function(R){var C=ii(B(B({},x),{},{icons:{main:R,mask:oi()},prefix:p,iconName:g,extra:T,watchable:!0})),O=be.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=C.map(function(N){return Lr(N)}).join(`
`),e.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function Hy(e){return Promise.all([tc(e,"::before"),tc(e,"::after")])}function $y(e){return e.parentNode!==document.head&&!~S1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ro)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function nc(e){if(At)return new Promise(function(t,n){var r=Kn(e.querySelectorAll("*")).filter($y).map(Hy),s=li.begin("searchPseudoElements");If(),Promise.all(r).then(function(){s(),fo(),t()}).catch(function(){s(),fo(),n()})})}var jy={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=nc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?be:r;K.searchPseudoElements&&nc(s)}}},rc=!1,Fy={mixout:function(){return{dom:{unwatch:function(){If(),rc=!0}}}},hooks:function(){return{bootstrap:function(){Gl(oo("mutationObserverCallbacks",{}))},noAuto:function(){wy()},watch:function(n){var r=n.observeMutationsRoot;rc?fo():Gl(oo("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},sc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,s){var a=s.toLowerCase().split("-"),o=a[0],i=a.slice(1).join("-");if(o&&i==="h")return r.flipX=!0,r;if(o&&i==="v")return r.flipY=!0,r;if(i=parseFloat(i),isNaN(i))return r;switch(o){case"grow":r.size=r.size+i;break;case"shrink":r.size=r.size-i;break;case"left":r.x=r.x-i;break;case"right":r.x=r.x+i;break;case"up":r.y=r.y-i;break;case"down":r.y=r.y+i;break;case"rotate":r.rotate=r.rotate+i;break}return r},n)},Dy={mixout:function(){return{parse:{transform:function(n){return sc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=sc(s)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,a=n.containerWidth,o=n.iconWidth,i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),c="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:i,inner:f,path:d};return{tag:"g",attributes:B({},p.outer),children:[{tag:"g",attributes:B({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:B(B({},r.icon.attributes),p.path)}]}]}}}},wa={x:0,y:0,width:"100%",height:"100%"};function ac(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function By(e){return e.tag==="g"?e.children:[e]}var zy={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),a=s?ea(s.split(" ").map(function(o){return o.trim()})):oi();return a.prefix||(a.prefix=Kt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,s=n.attributes,a=n.main,o=n.mask,i=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,d=o.icon,p=D1({transform:l,containerWidth:f,iconWidth:u}),b={tag:"rect",attributes:B(B({},wa),{},{fill:"white"})},k=c.children?{children:c.children.map(ac)}:{},S={tag:"g",attributes:B({},p.inner),children:[ac(B({tag:c.tag,attributes:B(B({},c.attributes),p.path)},k))]},_={tag:"g",attributes:B({},p.outer),children:[S]},y="mask-".concat(i||Ar()),g="clip-".concat(i||Ar()),m={tag:"mask",attributes:B(B({},wa),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,_]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:By(d)},m]};return r.push(x,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(y,")")},wa)}),{children:r,attributes:s}}}},Uy={provides:function(t){var n=!1;Wt.matchMedia&&(n=Wt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:B(B({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=B(B({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:B(B({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||i.children.push({tag:"animate",attributes:B(B({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(i),r.push({tag:"path",attributes:B(B({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:B(B({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:B(B({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Wy={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return n.symbol=a,n}}}},Ky=[U1,Ry,Oy,Iy,My,jy,Fy,Dy,zy,Uy,Wy];sy(Ky,{mixoutsTo:qe});qe.noAuto;var Vy=qe.config,Yy=qe.library;qe.dom;var po=qe.parse;qe.findIconDefinition;qe.toHtml;var qy=qe.icon;qe.layer;qe.text;qe.counter;var Jy={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"]},Xy={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Gy={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},Qy={prefix:"fas",iconName:"helmet-safety",icon:[576,512,["hard-hat","hat-hard"],"f807","M256 32c-17.7 0-32 14.3-32 32v2.3 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288v64H544l0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V66.3 64c0-17.7-14.3-32-32-32H256zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6H16.6z"]},Zy={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},e0={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},t0={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},n0={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},r0={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},s0={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},a0={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},o0={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},i0={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},l0={prefix:"far",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"]},c0={prefix:"far",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"]};function oc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oc(Object(n),!0).forEach(function(r){De(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u0(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function f0(e,t){if(e==null)return{};var n=u0(e,t),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nf={exports:{}};(function(e){(function(t){var n=function(_,y,g){if(!u(y)||f(y)||d(y)||p(y)||l(y))return y;var m,x=0,T=0;if(c(y))for(m=[],T=y.length;x<T;x++)m.push(n(_,y[x],g));else{m={};for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(m[_(R,g)]=n(_,y[R],g))}return m},r=function(_,y){y=y||{};var g=y.separator||"_",m=y.split||/(?=[A-Z])/;return _.split(m).join(g)},s=function(_){return b(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(y,g){return g?g.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},a=function(_){var y=s(_);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(_,y){return r(_,y).toLowerCase()},i=Object.prototype.toString,l=function(_){return typeof _=="function"},u=function(_){return _===Object(_)},c=function(_){return i.call(_)=="[object Array]"},f=function(_){return i.call(_)=="[object Date]"},d=function(_){return i.call(_)=="[object RegExp]"},p=function(_){return i.call(_)=="[object Boolean]"},b=function(_){return _=_-0,_===_},k=function(_,y){var g=y&&"process"in y?y.process:y;return typeof g!="function"?_:function(m,x){return g(m,_,x)}},S={camelize:s,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(_,y){return n(k(s,y),_)},decamelizeKeys:function(_,y){return n(k(o,y),_,y)},pascalizeKeys:function(_,y){return n(k(a,y),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(d0)})(Nf);var p0=Nf.exports,h0=["class","style"];function m0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),s=p0.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[s]=a,t},{})}function g0(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Lf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Lf(l)}),s=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=g0(c);break;case"style":l.style=m0(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,i=f0(n,h0);return ht(e.tag,bt(bt(bt({},t),{},{class:s.class,style:bt(bt({},s.style),o)},s.attrs),i),r)}var Hf=!1;try{Hf=!0}catch{}function v0(){if(!Hf&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xa(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?De({},e,t):{}}function y0(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},De(t,"fa-".concat(e.size),e.size!==null),De(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),De(t,"fa-pull-".concat(e.pull),e.pull!==null),De(t,"fa-swap-opacity",e.swapOpacity),De(t,"fa-bounce",e.bounce),De(t,"fa-shake",e.shake),De(t,"fa-beat",e.beat),De(t,"fa-fade",e.fade),De(t,"fa-beat-fade",e.beatFade),De(t,"fa-flash",e.flash),De(t,"fa-spin-pulse",e.spinPulse),De(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ic(e){if(e&&Rs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(po.icon)return po.icon(e);if(e===null)return null;if(Rs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var b0=Ye({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,s=Oe(function(){return ic(t.icon)}),a=Oe(function(){return xa("classes",y0(t))}),o=Oe(function(){return xa("transform",typeof t.transform=="string"?po.transform(t.transform):t.transform)}),i=Oe(function(){return xa("mask",ic(t.mask))}),l=Oe(function(){return qy(s.value,bt(bt(bt(bt({},a.value),o.value),i.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(c){if(!c)return v0("Could not find one or more icon(s)",s.value,i.value)},{immediate:!0});var u=Oe(function(){return l.value?Lf(l.value.abstract[0],{},r):null});return function(){return u.value}}});function _0(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(s){s(n)}),(r=e.get("*"))&&r.slice().map(function(s){s(t,n)})}}}Yy.add(t0,Xy,Zy,Jy,Gy,Qy,e0,n0,i0,o0,a0,s0,c0,l0,r0);Vy.autoAddCss=!1;const w0=Ct(e=>{e.vueApp.component("FontAwesomeIcon",b0);const t=_0();e.provide("emitter",t)}),x0=[zg,Wg,t1,c1,u1,f1,d1,p1,w0],k0=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""}),ho=(e,t)=>{const n=e.route.matched.find(s=>{var a;return((a=s.components)==null?void 0:a.default)===e.Component.type}),r=t??(n==null?void 0:n.meta.key)??(n&&k0(e.route,n));return typeof r=="function"?r(e.route):r},E0=(e,t)=>({default:()=>e?ht(rp,e===!0?{}:e,t):t}),S0=Ye({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const t=e.renderKey,n=e.route,r={};for(const s in e.route)Object.defineProperty(r,s,{get:()=>t===e.renderKey?e.route[s]:n[s]});return Rn(Ys,Rr(r)),()=>ht(e.vnode,{ref:e.vnodeRef})}}),C0=(e,t,n)=>(t=t===!0?{}:t,{default:()=>{var r;return t?ht(e,t,n):(r=n.default)==null?void 0:r.call(n)}}),A0=Ye({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,expose:n}){const r=Ee(),s=xe(),a=He(Ys,null);n({pageRef:s});const o=He(Eg,null);let i;const l=r.deferHydration();return()=>ht(Zu,{name:e.name,route:e.route,...t},{default:u=>{const c=R0(a,u.route,u.Component),f=a&&a.matched.length===u.route.matched.length;if(!u.Component){if(i&&!f)return i;l();return}if(i&&o&&!o.isCurrent(u.route))return i;if(c&&a&&(!o||o!=null&&o.isCurrent(a)))return f?i:null;const d=ho(u,e.pageKey),p=!!(e.transition??u.route.meta.pageTransition??Ja),b=p&&T0([e.transition,u.route.meta.pageTransition,Ja,{onAfterLeave:()=>{r.callHook("page:transition:finish",u.Component)}}].filter(Boolean));return i=C0(zo,p&&b,E0(e.keepalive??u.route.meta.keepalive??Rg,ht(Bc,{suspensible:!0,onPending:()=>r.callHook("page:start",u.Component),onResolve:()=>{fn(()=>r.callHook("page:finish",u.Component).finally(l))}},{default:()=>ht(S0,{key:d,vnode:u.Component,route:u.route,renderKey:d,trackRootNodes:p,vnodeRef:s})}))).default(),i}})}});function P0(e){return Array.isArray(e)?e:e?[e]:[]}function T0(e){const t=e.map(n=>({...n,onAfterLeave:P0(n.onAfterLeave)}));return ju(...t)}function R0(e,t,n){if(!e)return!1;const r=t.matched.findIndex(s=>{var a;return((a=s.components)==null?void 0:a.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:t.matched.slice(0,r).some((s,a)=>{var o,i,l;return((o=s.components)==null?void 0:o.default)!==((l=(i=e.matched[a])==null?void 0:i.components)==null?void 0:l.default)})||n&&ho({route:t,Component:n})!==ho({route:e,Component:n})}const O0={DIR:"DIRECTORY",POST:"POST"};class Os{constructor(t){Z(this,"_path");Z(this,"_name");Z(this,"_type");Z(this,"_summary");Z(this,"_ext");Z(this,"_hasIcon");Z(this,"_files");Z(this,"_group");this._path=t._path,this._name=t._name,this._type=t._type,this._summary=t._summary,this._ext=t._ext,this._hasIcon=t._hasIcon,this._files=t._files!==void 0?Os.toFileTrees(t._files):void 0,this._group=t._group}get type(){return this._type}get path(){return this._path}get name(){return this._name}get files(){return this._files}get summary(){return this._summary}get group(){return this._group}isDirectory(){return this._type==O0.DIR}hasIcon(){return this._hasIcon}static toFileTrees(t){return t.map(n=>new Os(n))}}const I0="special-posted-in",M0="devisitem",N0="devis",L0="https://devis.kr",H0="DEVIS의 기술블로그",$0="불편해야 성장할 수 있어.",j0="https://devisitem.github.io/special-posted-in/",F0="https://avatars.githubusercontent.com/u/65699391?v=4",D0="MIT",B0={boot:"node core/script/boot.js","test-ts":"tsc core/script/tsTest.ts && node core/script/tsTest.js",build:"yarn boot && nuxt build",dev:"yarn boot && nuxt dev",generate:"yarn boot && nuxt generate",preview:"nuxt preview",postinstall:"nuxt prepare",deploy:"NODE_ENV=production yarn boot && nuxt generate && push-dir --dir=dist --branch=gh-pages --cleanup"},z0={"@fortawesome/fontawesome-svg-core":"^6.3.0","@fortawesome/free-regular-svg-icons":"^6.3.0","@fortawesome/free-solid-svg-icons":"^6.3.0","@fortawesome/vue-fontawesome":"^3.0.3","@nuxt/bridge":"^0.10.1","@nuxt/image":"^1.0.0-rc.1","@pinia/nuxt":"^0.4.7","@types/escape-html":"^1.0.2","@types/prismjs":"^1.26.0","date-format-parse":"^0.2.7","jekyll-markdown-parser":"^4.0.0","markdown-it":"^13.0.1","markdown-it-sub":"^1.0.0",mitt:"^3.0.0",paginator:"^1.0.0",pinia:"^2.0.33",prismjs:"^1.29.0","vue-utterances":"^0.3.4"},U0={"@types/markdown-it":"^12.2.3","gh-pages":"^5.0.0",nuxt:"^3.2.3",path:"^0.12.7","push-dir":"^0.4.1",sass:"^1.49.9","sass-loader":"^12.6.0",sitemap:"^7.1.1"},yn={name:I0,fullname:M0,username:N0,domain:L0,title:H0,description:$0,homepage:j0,defaultProfile:F0,license:D0,scripts:B0,dependencies:z0,devDependencies:U0};class ui{constructor(t,n,r,s,a,o){Z(this,"_fullName");Z(this,"_username");Z(this,"_domain");Z(this,"_title");Z(this,"_description");Z(this,"_defaultProfile");this._fullName=t,this._username=n,this._domain=r,this._title=s,this._description=a,this._defaultProfile=o}get domain(){return this._domain}get title(){return this._title}get fullName(){return this._fullName}get username(){return this._username}get description(){return this._description}get defaultProfile(){return this._defaultProfile}static create(t,n,r,s,a,o){return new ui(t,n,r,s,a,o)}}class fi{constructor(t,n,r){Z(this,"_didScroll");Z(this,"_lastScrollTop");Z(this,"_delta");Z(this,"_header");Z(this,"_isDown");this._didScroll=t,this._lastScrollTop=n,this._delta=r,this._header=null,this._isDown=!1}loadHeader(){this._header=document.getElementById("main-header")}get didScroll(){return this._didScroll}get lastScrollTop(){return this._lastScrollTop}get delta(){return this._delta}get header(){return this._header}get isDown(){return this._isDown}on(){this._didScroll=!0}hasScrolled(){const t=window.scrollY;Math.abs(this._lastScrollTop-t)<=this._delta||(t>this.lastScrollTop&&t>this._header.clientHeight?this._isDown=!0:t+window.outerHeight<document.getElementById("application-container").clientHeight&&(this._isDown=!1),this._lastScrollTop=t)}checkScroll(){setInterval(()=>{this._didScroll&&(this.hasScrolled(),this._didScroll=!1)},250)}static ofDefault(){return new fi(!1,0,5)}}const Ae={postContents:de([]),contentsForSearch:de([]),naviStack:de([]),feeds:de([]),tagMap:de({store:new Map}),fileNodeMap:de({store:new Map}),blogInfo:de(ui.create(yn.fullname,yn.username,yn.domain,yn.title,yn.description,yn.defaultProfile)),scrollStatus:de(fi.ofDefault())};class W0{constructor(t,n){Z(this,"name");Z(this,"nodes",[]);this.name=t,this.nodes=n}}class $f{constructor(t,n){Z(this,"_src");Z(this,"_alt");this._src=t,this._alt=n}get src(){return this._src}get alt(){return this._alt}}class K0{constructor(t){Z(this,"layout");Z(this,"title");Z(this,"categories");Z(this,"tags");Z(this,"date");Z(this,"images");Z(this,"thumbnail");Z(this,"current_company");Z(this,"current_position");Z(this,"profile_image");Z(this,"summary");Z(this,"expose_images");Z(this,"excerpt_separator");Z(this,"hide");Z(this,"breadcrumbs");this.layout=t.layout,this.title=t.title,this.categories=t.categories,this.tags=t.tags,this.date=new Date(t.date),this.images=t.images.map(n=>new $f(n.src,n.alt)),this.thumbnail=this.getOrDefaultThumbnail(t.thumbnail),this.current_company=t.current_company,this.current_position=t.current_position,this.profile_image=t.profile_image,this.summary=t.summary,this.expose_images=t.expose_images,this.excerpt_separator=t.excerpt_separator,this.hide=t.hide,this.breadcrumbs=t.breadcrumbs}getOrDefaultThumbnail(t){const n=["default1.JPG","default2.jpeg","default3.jpeg"],r=Math.floor(Math.random()*n.length);return t??`/assets/blogging/default/${n[r]}`}}class Is{constructor(t){Z(this,"_path");Z(this,"_header");Z(this,"_description");Z(this,"_content");this._path=t._path,this._header=new K0(t._header),this._description=t._description,this._content=t._content}get path(){return this._path}get content(){return this._content}get description(){return this._description}get header(){return this._header}static toPostContent(t){return new Is(t)}static toPosts(t){return t.map(n=>Is.toPostContent(n))}}const P_=de({file_list:[]}),T_=de({latest_index:0,postDataList:[]}),mo=de({is_calling:!0}),V0=de({input_text:"",result_list:[]}),go=de({isActive:!1});de({isActive:!1});de({isNotClickable:!1});de({isActive:!1});const Y0=de({map:new Map}),q0=[{_path:"/docs/algorithm",_name:"algorithm",_ext:"",_summary:"알고리즘",_type:"DIRECTORY",_files:[{_path:"/docs/algorithm/heap_sort",_name:"Heap_Sort",_ext:"md",_summary:"힙과 힙정렬",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["알고리즘","힙과 힙정렬"],_group:"algorithm"},{_path:"/docs/algorithm/insertion_sort",_name:"rt",_ext:"md",_summary:"삽입 정렬 알아보기",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["알고리즘","삽입 정렬 알아보기"],_group:"algorithm"},{_path:"/docs/algorithm/mathematical_induction",_name:"ction",_ext:"md",_summary:"수학적 귀납법",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["알고리즘","수학적 귀납법"],_group:"algorithm"},{_path:"/docs/algorithm/selection_sort",_summary:"선택 정렬",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["알고리즘","선택 정렬"],_group:"algorithm"}],_hasIcon:!0,_breadcrumbs:["탐색","알고리즘"],_group:"docs"},{_path:"/docs/computer",_name:"computer",_ext:"",_summary:"computer",_type:"DIRECTORY",_files:[{_path:"/docs/computer/hard_disk_1",_name:"hard_disk_1",_ext:"md",_summary:"하드디스크란 무엇이고, 어떻게 동작할까?",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["computer","하드디스크란 무엇이고, 어떻게 동작할까?"],_group:"computer"}],_hasIcon:!1,_breadcrumbs:["탐색",null],_group:"docs"},{_path:"/docs/electric",_name:"electric",_ext:"",_summary:"electric",_type:"DIRECTORY",_files:[{_path:"/docs/electric/about_atom",_summary:"원자란?",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["electric","원자란?"],_group:"electric"},{_path:"/docs/electric/about_electron",_name:"about_electron",_ext:"md",_summary:"전자란?",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["electric","전자란?"],_group:"electric"}],_hasIcon:!1,_breadcrumbs:["탐색",null],_group:"docs"},{_path:"/docs/life",_name:"life",_ext:"",_summary:"life",_type:"DIRECTORY",_files:[],_hasIcon:!1,_breadcrumbs:["탐색",null],_group:"docs"},{_path:"/docs/tools",_name:"tools",_ext:"",_summary:"도구",_type:"DIRECTORY",_files:[{_path:"/docs/tools/intellij_config",_name:"d",_summary:"단축키와 기본설정",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["도구","단축키와 기본설정"],_group:"tools"}],_hasIcon:!0,_breadcrumbs:["탐색","도구"],_group:"docs"},{_path:"/docs/typescript",_name:"typescript",_ext:"",_summary:"타입스크립트",_type:"DIRECTORY",_files:[{_path:"/docs/typescript/typescript_getting_start",_name:"_start",_ext:"md",_summary:"타입스크립트 소개",_type:"POST",_files:[],_hasIcon:!1,_breadcrumbs:["타입스크립트","타입스크립트 소개"],_group:"typescript"}],_hasIcon:!0,_breadcrumbs:["탐색","타입스크립트"],_group:"docs"}],J0=[{_path:"/docs/electric/about_atom",_header:{layout:"tweet",title:"만물을 이루는 원자",categories:["Development","Electric"],tags:["원자","전자","원자핵","양성자","중성자","반도체"],date:169348662e4,profile_image:"/assets/blogging/profile/winkkom.png",current_company:"NEOWIZ",current_position:"Software Engineer",summary:"원자란?",excerpt_separator:"<!--more-->",hide:!1,breadcrumbs:["electric","원자란?"],images:[]},_description:`# 만물을 이루는 원자

원자는 모든 물질을 이루는 가장 기본적인 입자이다. 
원자핵과 그 주변을 이동하는 전자로 구성되어있다. 
원자핵을 구성하는 핵자는 양성자와 중성자가 있으며, 화학적 또는 물리적 방법으로 분해할 수 없다.

일반적으로 원자핵을 양전하를 띄고, 전자는 음전하를 띈다. 
원자핵에서 양성자가 양전하를 띄게 되는데,  해당 양전하의 개수와 전자의 개수가 같을 때 가장 안정적으로 전기적인 중성 상태가 된다. 
즉, 전하를 띄지 않는다. 양성자는 바꿀 수 없지만, 전자는 다른 원자로 이동시킬 수 있기 때문에 양전하와 음전하의 개수가 달라지게 된다.

이때, 양전하의 개수보다 음전하(전자)의 개수가 많으면 음이온, 적으면 양이온이라고 칭하기도 한다. 
전자는 원자핵 주변을 돌게 되는데 이때 이동 속도는 약 30만 km (진공 상태의 빛의 속도)이다. 
전자가 이동하는 궤도는 양자 역학으로 인해 일정하지 않다고 한다. 
전자의 수(또는 양성자의 수)에 따라 원자번호가 결정되기 때문에 우리가 과학적으로 정의하는 원소가 고유성을 가질 수 있는 이유이기도 하다. 
양성자를 비롯한 핵자의 수가 바뀌는건 핵융합과 핵분열이 대표적이다.

전자는 원자핵 주위를 돌며 , 원자의 가장 안쪽 핵자의 주변부터 원자의 밖의 방향으로 껍질처럼 배치된 위치에서 운동한다. 
또한 최대로 배치될 수 있는 이 개수는 (양성자의 개수와 같아야 하기 때문에) 정해져 있다.  
전자는 외부로부터 에너지를 가하면, 가장자리부터 떨어져 나가며, 모든 전자가 떨어져 나가, 원자핵만 남은 경우 플라즈마라고 한다.
`,_content:`

`},{_path:"/docs/tools/intellij_config",_header:{layout:"post",title:"Intellij 단축키 와 설정",categories:["Development","Tools"],tags:["Intellij","Shortcut","인텔리제이","단축키","기본설정"],date:169321932e4,profile_image:"/assets/blogging/profile/winkkom.png",current_company:"NEOWIZ",current_position:"Software Engineer",thumbnail:"/assets/blogging/tool/intellij_shortcut.png",summary:"단축키와 기본설정",excerpt_separator:"<!--more-->",hide:!1,breadcrumbs:["도구","단축키와 기본설정"],images:[{src:"/assets/blogging/intellij/intellij1.png",alt:"Live Template 설정"}]},_description:`Intellij에서 유용한 단축키 정리
`,_content:'\n\n## 기본 단축키\n| 단축키 <span class="key key-mac">`MAC`</span> <span class="key key-win">`Win`</span>     | 설명 |\n|:-----------|:--|\n| <span class="key-mac">`⌥` `⌘` `X`</span><br/><span class="key-win">`Ctrl` `Alt` `X`</span>   | 리턴타입이 있는 메소드 호출위에 커서를 두고 실행 |\n| <span class="key-mac">`⌃` `⇧` `숫자`</span><br/><span class="key-win">`Ctrl` `Shift` `숫자`</span> | 북마크된 라인으로 이동은 <span class="key-mac">`⌃`</span> or <span class="key-win">`Ctrl`</span>) + `숫자` |\n| <span class="key-mac">`⌥` `⌘` `V`</span><br/><span class="key-win">`Ctrl` `Alt` `V`</span> | 리턴타입 자동 완성 |\n| <span class="key-mac">`⌥` `⌥` 누른 상태로 `↓` or `↑` </span><br/><span class="key-win">`Shift` `Shift` 누른 상태로 `↓` or `↑`</span> | 멀티라인 선택 |\n| <span class="key-mac">`⌥` `⌘` `←` or `→` </span><br/><span class="key-win">`Shift` `Shift` `←` or `→`</span> | 커서 스택내 이동 |\n\n##  Live Template\nSetting > Live Template 검색  \ncustom 으로 등록  \n![Live Template 설정](/assets/blogging/intellij/intellij1.png)\n'},{_path:"/docs/algorithm/heap_sort",_header:{layout:"post",title:"-Algorithm- Heap sort (힙 정렬) feat.java",categories:["Development","Algorithm"],tags:["Java","Algorithm","Sort","Heap Sort","Heap"],date:165183798e4,profile_image:"/assets/blogging/profile/profile4.jpeg",thumbnail:"/assets/blogging/algorithm/heap/heap_sort_intro.png",current_company:"Herit Corporation",current_position:"Backend Server Developer",summary:"힙과 힙정렬",expose_images:!0,excerpt_separator:"<!--more-->",hide:!1,breadcrumbs:["알고리즘","힙과 힙정렬"],images:[{src:"/assets/blogging/algorithm/heap/tree_images.svg",alt:"위 트리중 어떤것이 힙인지 찾아보세요."},{src:"/assets/blogging/algorithm/heap/first_iteration.svg",alt:"힙을 만드려면 완전 이진트리가 있어야 해요."},{src:"/assets/blogging/algorithm/heap/other_iteration.svg",alt:"만약 마지막 내부노드부터 순회할 때, 쵀대힙을 만드려면 위와 같이 만들수 있어요."},{src:"/assets/blogging/algorithm/heap/last_iteration.svg",alt:"최대힙을 만들어 이런 형태로 노드를 나눌수 있어요."},{src:"/assets/blogging/algorithm/heap/add_new_17.svg",alt:"만약 다음의 힙에서 17이라는 값이 추가 된다면"},{src:"/assets/blogging/algorithm/heap/add_new_17_2.svg",alt:"이런식으로 부모노드와 바꿔가며, 다시 힙을 유지할 수 있어요."},{src:"/assets/blogging/algorithm/heap/heap_sort_1_1.svg",alt:"힙 정렬 1"},{src:"/assets/blogging/algorithm/heap/heap_sort_1_2.svg",alt:"힙 정렬 2"},{src:"/assets/blogging/algorithm/heap/heap_sort_1_3.svg",alt:"힙 정렬 3"},{src:"/assets/blogging/algorithm/heap/heap_sort_1_4.svg",alt:"힙 정렬 4"},{src:"/assets/blogging/algorithm/heap/heap_sort_1_5.svg",alt:"힙 정렬 5"},{src:"/assets/blogging/algorithm/heap/heap_sort_1_6.svg",alt:"힙 정렬 6"},{src:"/assets/blogging/algorithm/heap/heap_sort_1_7.svg",alt:"힙 정렬 7"},{src:"/assets/blogging/algorithm/heap/heap_sort_1_8.svg",alt:"힙 정렬 8"}]},_description:`열라 간단한 우선순위 큐의 자료구조인 Heap에 대해 공부합니다.
힙의 속성?! 힙이 최소 또는 최대값을 유지하는 방법?!

힙을통해 정렬하는 방법까지 공부합니다. 😁
`,_content:`


# 힙 정렬 (Heap Sort)

## 배울수 있는 내용

* Heap의 속성
* Heap을 만드는 방법
* Heap이 우선 값을 유지하는 방법
* Heap을 이용해 정렬을 하는 방법

🌸 힙(Heap)은 요소의 우선순위를 이용하여 정렬된 상태를 유지할 수 있는 매우 편한 자료구조입니다.
먼저, 힙 정렬을 알기전에 힙이 어떤 속성을 갖고 있는지 알아보아요.

---

## 설명

간단하게 말하여, 힙은 우선순위 큐 입니다. \`JAVA\`에서는 \`PriorityQueue\`라는 구현체를 통해 Heap 자료구조를 사용할 수 있어요.
힙은 두 종류가 있는데 \`최대 힙\`과 \`최소 힙\`이 있어요. 
최대 Heap(최소 Heap)은 단어와 같이 최대 값(최소 값)을 우선순위로 판단하여, 어떠한 값이 들어와도, 항상 같은 순서의
트리를 유지하며, 언제든지 최고 우선순위의 값을 적은 비용으로 쉽게 얻을수 있는 자료구조 입니다.

### Heap의 속성 (특징)

* 최대 힙(**또는 최소 힙**)은 \`잎(leaf)\`의 계층을 제외한 모든 노드는 자식의 노드 보다 큰(**또는 작은**) 값을 가지고 있어야합니다.
* 왼쪽부터 차례대로 채워져있는 \`완전 이진 트리(Complete binary tree)\`이어야 합니다.
* 같은 계층의 노드들과는 정렬하지 않습니다.
* 루트(뿌리)노드로 부터 내려오는 위치의 노드들 오름차순(**또는 내림차순**)입니다

![위 트리중 어떤것이 힙인지 찾아보세요.](/assets/blogging/algorithm/heap/tree_images.svg)

트리 A: 잎을 제외한 노드는 모두 정렬되었지만, 왼쪽부터 채워지지않아 Heap이 아닙니다.
트리 B: 왼쪽부터 채워졌지만, 2번노드의 값은 그 자식에값보다 작습니다. 따라서 Heap이 아닙니다.
트리 C: 잎을 제외한 모든 노드가 자식 또는 부모와 정렬 되어있고, 왼쪽부터 채워져있으므로 \`Heap\`입니다.

이를 정리하면 아래와 같습니다.

> 1. 𝑛개의 노드를 가진 힙은 정확히 하나만 있고 그 힙(트리)의 높이(height)는 ⎣log₂𝑛⎦이다
> * 트리의 전체 노드의 개수가 8일경우 트리(힙)의 높이는 3이다. 즉 힢의 높이는 힙의 성질(속성)에 부합되는 노드들만 인정이 된다는 의미이다.

> 2. 힙의 루트 노드는 항상 최댓값(**또는 최솟값**)을 저장한다.
> * 최대 힙(**또는 최소 힙**)은 쵀댓값(**또는 최솟값**)을 효율적으로 관리하기 위한 자료구조이며, 루트에는 항상 가장 큰(**또는 작은**)값을 유지한다.

> 3. 힙의 한 노드와 그 노드의 자손 노드들로 이루어진 부분 트리(subtree)도 힙이다.
> * 힙은 힙으로 이루어져있으며 자식노드도 힙이 될수있지만, 노드의 자식이없다면 힙이될 수없다. 따라서 위 C 트리의 4, 5, 6번 노드는 힙이 아니다.


### Heap을 만드는 방법

힙을 구성 하기 위해서는 다음의 순서대로 진행됩니다.

1. 순회를 시작할 힙이되는 마지막 노드\`⎣𝑛/₂⎦\`를 찾는다.
2. 마지막 노드 i를 이용해 자식노드가 있는지, 또한 있다면 그 중 자신 보다 큰값을 자신과 찾는다.
3. 찾은 값과 자신을 바꾸고 바꾼 자신의 위치는 그값의 자식이 되며, 자신보다 큰값이 나오지 않을때까지 반복한다.
4. 다음 노드(i -1)에서 다시 \`3.\`을 반복한다.

- 자식 노드의 위치를 찾을때는 왼쪽\`arr[2i]\`값과 오른쪽\`arr[2i + 1]\`로 구할 수 있습니다.

위 의 내용을 정리하면 아래와 같습니다.


![힙을 만드려면 완전 이진트리가 있어야 해요.](/assets/blogging/algorithm/heap/first_iteration.svg)

> 위의 트리는 *완전 이진트리* 입니다. 힙은 완전이진트리에서 만들수 있으므로, 일반 이진트리는 Compact하게 완전이진트리로 바꿔야
> 힙을 만들수 있습니다.
> 
> 왼쪽 트리의 마지막 힙의 값은 15 이며, 이는 자식(6, 4) 어느것 보다도 큰값입니다. 따라서 다음 순회로 넘어갑니다.
> 순회는 내부 노드의 마지막 힙의 위치에서 부터 1까지 이어집니다. 따라서 다음 인덱스인 3번 노드(9)로 넘어갑니다.
> 3번노드는 자신의 자식들 중 6번째, 7번째 (7, 12)와 비교하여 더 큰값을 가지는 12와 바꿉니다.

![만약 마지막 내부노드부터 순회할 때, 쵀대힙을 만드려면 위와 같이 만들수 있어요.](/assets/blogging/algorithm/heap/other_iteration.svg)

> 이후 과정은 위와 같이 반복됩니다. 내부노드를 순회하며 자신의 자식노드가 있는지 확인하고 있다면, 자신과 비교하여 더큰 값으로
> 바꿉니다. 이는 바꾼이후에도 \`3.\`이 반복되게 됩니다.
> 
> 순회되는 노드가 최상위노드가 되고 모든 내부노드가 힙이 될때, 전체 트리는 힙이 됩니다. 
> 마지막까지 바꾼 최종트리는 아래와 같습니다. 


![최대힙을 만들어 이런 형태로 노드를 나눌수 있어요.](/assets/blogging/algorithm/heap/last_iteration.svg)

* 최상위 노드(루트)가 가장 큰값이 되며, 위는 최대힙을 만드는 단계였습니다.
* 부모노드와 자식노드끼리는 순서의 값을 가지며, 항상 최대의 값을 가집니다.  

### Heap이 우선 값을 유지하는 방법

위에서는 완전이진트리로 힙을 어떻게 만드는지에 대해 알아봤습니다.
하지만, 힙은 언제나 새로운값이 들어와도 항상 우선 순위로 값을 관리합니다. 만약 저기서 더큰값이 추가된다면,
저 힙트리는 어떻게 바뀔까요? 새로운 값들을 추가해서 힙이 다시 어떻게 유지되는지 배워봅니다.

#### 값추가

힙트리에서 값을 추가 할때는 마지막 노드로 붙여주고 위에서 했던것과 동일하게 힙을 만들어 줍니다.
만약 새로운 값 17이 힙에 들어온다면 순서는 아래와 같이 바뀝니다.

![만약 다음의 힙에서 17이라는 값이 추가 된다면](/assets/blogging/algorithm/heap/add_new_17.svg)
![이런식으로 부모노드와 바꿔가며, 다시 힙을 유지할 수 있어요.](/assets/blogging/algorithm/heap/add_new_17_2.svg)


> A: 새로 들어온 값 17은 트리의 맨뒤인 10번노드로 들어갑니다.   
> 또한 마지막 내부노드이자 자신의 부모인 5번 노드(4)부터 다시 순회를 시작하며, 
> 자신보다 큰 값은 가진 자식 10번 노드(17)과 값을 바꿉니다.
> 
> B: 값이 바뀐 10번 노드(4)는 자식을 가지고있지 않으므로 다음 순회로 넘어갑니다.
> 
> C: 다음 순회인 4번 노드(6)은 자식들보다 큰값이므로 다음 3번 노드(12)로 이동합니다. 하지만 이또한 자식들보다 값이 크므로,
> 2번 노드(8)로 이동합니다. 자신보다 큰값을 가지는 5번 자식노드(17)과 바꿉니다.
> 
> D: 값이 바뀐 5번 노드(8)은 자식들 보다 값이 커, 바꿀 필요가 없으므로 다음 순회인 1번 노드(15)로 이동합니다.
> 
> E: 현재 순회인 1번 노드(15)는 자신의 2번 노드(17)보다 값이 작으므로 바꿉니다.
> 
> F: 최종적으로 힙이 완성되었습니다. 



### Heap을 이용해 정렬을 하는 방법

힙 정렬을 위해서는 사전에 완전 이진 트리를 힙으로 만들고, 정렬을 수행할 수 있습니다.
위에서 만든 힙을 통해 정렬을 하는 방법을 구현합니다.  
힙 정렬은 간단하게, 아래의 정렬하는 순서를 가지고있습니다.

1. 최상위 노드 \`A\`와 가장 끝의 노드 \`B\`를 바꾼다.
2. 바꿔진 A는 맨뒤로 가며,힙에서 제외한다. 
3. 바꾼 값 \`B\`는, 자신의 자식이 있다면, 두개를 비교하여 가장 큰 값과 맞 바꾼다.
4. \`3.\`의 내용을 힙이될때까지 반복한다.

위의 순서를 반복하며, 만든 힙 정렬은 아래와 같습니다.

![힙 정렬 1](/assets/blogging/algorithm/heap/heap_sort_1_1.svg)
![힙 정렬 2](/assets/blogging/algorithm/heap/heap_sort_1_2.svg)
![힙 정렬 3](/assets/blogging/algorithm/heap/heap_sort_1_3.svg)
![힙 정렬 4](/assets/blogging/algorithm/heap/heap_sort_1_4.svg)
![힙 정렬 5](/assets/blogging/algorithm/heap/heap_sort_1_5.svg)
![힙 정렬 6](/assets/blogging/algorithm/heap/heap_sort_1_6.svg)
![힙 정렬 7](/assets/blogging/algorithm/heap/heap_sort_1_7.svg)
![힙 정렬 8](/assets/blogging/algorithm/heap/heap_sort_1_8.svg)

## 구현 코드 (Java)

\`\`\`java
import java.util.Arrays;

public class Heap {
    
    //== 힙(Heap) 을 만드는 메소드 ==//
    public static void makeHeap(int arr[]) {
        // last heap
        int lh = arr.length / 2;
        System.out.println("Normal Array = " + Arrays.toString(arr));
        int eh = arr.length;
        while (lh-- > 0) {

            System.out.println("i: " + lh);
            pushDown(arr, lh, eh);
        }

        System.out.println("Array as Max Heap = " + Arrays.toString(arr));
    }
    
    
    //== 노드와 그 자식중에서 더큰(또는 작은) 위치를 찾는 메소드 ==//
    public static int findLargest(int arr[], int node, int eh) {
        // first child
        int fc = (2 * (node + 1)) - 1;

        if (fc + 1 < eh) {
            if (arr[fc] <= arr[fc + 1]) {
                return arr[fc + 1] <= arr[node] ? node : fc + 1;
            } else {
                return arr[fc] <= arr[node] ? node : fc;
            }
        }
        if (fc < eh && arr[node] < arr[fc]) {
            return fc;
        } else {
            return node;
        }
    }
    //== 값을 아래로 내리는 메소드 ==//

    /**
     * 간단하게 보면 트리에서 마지막 힙의 위치를 구하고,
     * 루트 노드까지 역순으로 힙을 만들어갑니다.
     * 
     * 최대 힙(또는 최소 힙)의 조건에 따라 더큰(또는 더 작은)값을 기준으로,
     * 해당 노드를 위로올리고 변경된 대상은 아래로 내려가며 계속 바꿉니다.
     */
    public static void pushDown(int arr[], int node, int eh) {
        do {
            System.out.println("j: " + node);
            int temp = arr[node];
            int large = findLargest(arr, node, eh);
            System.out.println(drawBinaryTree(arr));

            if (large == node)
                break;

            arr[node] = arr[large];
            arr[large] = temp;

            node = large;
        } while (node <= eh);
    }

    public static void sort(int arr[]) {
        int last = arr.length;
        makeHeap(arr);

        while (--last >= 0) {

            int temp = arr[0];
            arr[0] = arr[last];
            arr[last] = temp;

            System.out.println("last: " + last);
            pushDown(arr, 0, last);
        }
        ;
    }

    //== 출력 메소드 ==//
    public static String drawBinaryTree(int arr[]) {
        StringBuilder builder = new StringBuilder();

        int nol = (int) (Math.log(arr.length) / Math.log(2)) + 1;
        int max = (int) Math.pow(2, nol - 1);

        int printed = 0;
        for (int i = 0; i < nol; i++) {
            int perFloor = (int) Math.pow(2, i);
            int tab = (max - perFloor) / 2 + (max - perFloor) % 2;
            int last = printed + perFloor;

            for (int j = 0; j < tab; j++) {
                builder.append("  ");
            }
            for (int j = printed; (j < arr.length && j < last); j++) {
                builder.append(String.format("(%d)", arr[j]));
            }
            builder.append("\\n");
            printed += perFloor;
        }

        return builder.toString();
    }
    
    public static void main(String args []) throws Exception {
        //== 힙 으로 만들기==//
        int arrForMake [] = {1, 5, 8, 2, 74, 9, 12, 104, 87, 43};
        Heap.makeHeap();
        
        //== 힙 + 정렬 ==//
        int arrForSort [] = {1, 8, 9, 15, 4, 7, 12, 6, 4, 17};
        Heap.sort(arr);
        
    }
}
\`\`\`



`},{_path:"/docs/algorithm/insertion_sort",_header:{layout:"post",title:"삽입 정렬 알아보기(Java)",categories:["Development","Algorithm"],tags:["Java","Algorithm","Sort","Insertion Sort"],date:16505511e5,thumbnail:"/assets/blogging/algorithm/insertion_sort_intro.png",current_company:"Herit Corporation",current_position:"Backend Server Developer",summary:"삽입 정렬 알아보기",excerpt_separator:"<!--more-->",hide:!1,breadcrumbs:["알고리즘","삽입 정렬 알아보기"],images:[]},_description:`이번 포스팅 순서는, 
기본 정렬 알고리즘중 하나인 삽입 정렬(Insertion Sort)입니다.

이전 포스팅의 선택정렬하고는 또 다른 맛이있네용 ㅋㅋ

지적 및 조언 댓글 환영입니다. ㅎㅎ
`,_content:`


## 삽입정렬 (Insertion Sort)


🌸 삽입정렬은 배열을 순회하며, 삽입할 위치를 찾고 요소들을 **한단계씩 밀어** 해당 위치에 삽입하며 정렬하는 알고리즘 입니다.
삽입정렬 또한 선택정렬과 마찬가지로 정렬된 부분과 정렬되지 않은 부분으로 나뉩니다.

> **한단계씩 밀어** 라는 말은 [ 1 ][ 3 ][ 2 ] 에서 2라는 요소를 임시로 빼고 1 과 3사이에 들어갈공간을 만들기 위해 뺀 2의 자리로 3을 한 단계밀어,
> [ 1 ][   ][ 3 ] 처럼 빈 공간을 만든 다는 의미입니다.


---

### 설명

순회 인덱스 i: 3 (0, 1, 2는 요소가 1, 4, 7이므로 정렬이되어 있으므로, 넘어갑니다.)

<div class="array">
    <span class="over">1</span>
    <span class="over">4</span>
    <span class="target">7</span>
    <span class="current">3</span>
    <span>2</span>
    <span>5</span>
</div>

> 삽입정렬은 선택정렬과 다르게 지나온 요소들과 비교하여 밀면서 정렬해 나갑니다. 위 배열에서 1, 4, 7 요소는 정렬 되있기때문에,
> j는(j = i - 1, 현재 3) 0이 될때까지 계속 순회하며 이전값과 비교하여 정렬 대상인지 아닌지를 판단합니다. 3은 7과 정렬 대상이기 때문에 정렬을 위해 밀고 삽입합니다.


순회 인덱스 i: 3 

<div class="array">
    <span class="over">1</span>
    <span class="over">4</span>
    <span class="target">7</span>
    <span class="current">7</span>
    <span>2</span>
    <span>5</span>
</div>

> 3의 값을 복사해두고 3의 자리로 7을 밀게됩니다. 그럼 위와 같은 상황이되고 삽입할 위치에 3을 삽입하여, 아래처럼 만들수있습니다.


순회 인덱스 i: 3

<div class="array">
    <span class="over">1</span>
    <span class="over">4</span>
    <span class="target">3</span>
    <span class="current">7</span>
    <span>2</span>
    <span>5</span>
</div>

> 한번의 정렬이 끝났으니 j를 감소시켜 또다시 이전 요소 (3과 4)를 비교하여 정렬대상이 되었습니다. 
> i는 현재 3이지만 i이전의 인덱스를 가진 요소들은 정렬되지 않았기 때문에 j를 감소시켜가며 끝까지 정렬합니다.


* 순회 인덱스 i: 3
* 내부 순회 인덱스 j: 2

<div class="array">
    <span class="over">1</span>
    <span class="target">4</span>
    <span class="current">4</span>
    <span class="over">7</span>
    <span>2</span>
    <span>5</span>
</div>

* 내부 순회 인덱스 j: 1

<div class="array">
    <span class="target">1</span>
    <span class="current">3</span>
    <span class="over">4</span>
    <span class="over">7</span>
    <span>2</span>
    <span>5</span>
</div>

> 내부 순회 인덱스를 줄여가며 정렬을 하였고 현재 내부 순회 인덱스(j)인 1에대한 요소(3)가 비교할 인덱스 0에대한 요소(1)과 정렬되어있다고 판단 하기에,
> j는 더이상 감소시키지 않습니다. 따라서 i를 다시 증가시키며 이과정을 반복하여 정렬합니다.
> 이후의 과정은 아래와 같습니다.

* 순회 인덱스 i: 4
* 내부 순회 인덱스 j: 3 (i - 1)

<div class="array">
    <span class="over">1</span>
    <span class="over">3</span>
    <span class="over">4</span>
    <span class="target">7</span>
    <span class="current">2</span>
    <span>5</span>
</div>

<div class="array">
    <span class="over">1</span>
    <span class="over">3</span>
    <span class="over">4</span>
    <span class="current">2</span>
    <span class="target">7</span>
    <span>5</span>
</div>

* 순회 인덱스 i: 4
* 내부 순회 인덱스 j: 2 (j--)

<div class="array">
    <span class="over">1</span>
    <span class="over">3</span>
    <span class="target">4</span>
    <span class="current">2</span>
    <span>7</span>
    <span>5</span>
</div>

<div class="array">
    <span class="over">1</span>
    <span class="over">3</span>
    <span class="current">2</span>
    <span class="target">4</span>
    <span class="over">7</span>
    <span>5</span>
</div>

* 순회 인덱스 i: 4
* 내부 순회 인덱스 j: 1 (j--)

<div class="array">
    <span class="over">1</span>
    <span class="target">3</span>
    <span class="current">2</span>
    <span class="over">4</span>
    <span class="over">7</span>
    <span>5</span>
</div>

<div class="array">
    <span class="over">1</span>
    <span class="current">2</span>
    <span class="target">3</span>
    <span class="over">4</span>
    <span class="over">7</span>
    <span>5</span>
</div>

* 순회 인덱스 i: 5
* 내부 순회 인덱스 j: 4 (j - 1)

<div class="array">
    <span class="over">1</span>
    <span class="over">3</span>
    <span class="over">2</span>
    <span class="over">4</span>
    <span class="target">7</span>
    <span class="current">5</span>
</div>

<div class="array">
    <span class="over">1</span>
    <span class="over">2</span>
    <span class="over">3</span>
    <span class="over">4</span>
    <span class="target">5</span>
    <span class="current">7</span>
</div>

* 정렬 결과

<div class="array">
    <span class="over">1</span>
    <span class="over">2</span>
    <span class="over">3</span>
    <span class="over">4</span>
    <span class="target">5</span>
    <span class="current">7</span>
</div>

> 모든 정렬을 수행했으므로 정렬이 완료되었습니다.


### 예제코드

* 예제코드는 생각 보다 단순합니다. 아래와 같이 배열을 순회하는 i가 있고, \`array[1..i]\`에서 정렬을 하는 방식입니다.


\`\`\`java
public class InsertionSort {
    
    public static void sort(int [] array) {

        for (int i = 1; i < array.length; i++) {
            int current = array[i];
            int j = i - 1;

            while(array[j + 1] < array[j]) {
                array[j + 1] = array[j];
                array[j--] = current;
            }
        }
    }
}
\`\`\`
`},{_path:"/docs/algorithm/mathematical_induction",_header:{layout:"post",title:"-Algorithm- Mathematical Induction (수학적 귀납법) feat.java",categories:["Development","Algorithm"],tags:["Java","Algorithm","Mathematical Induction"],date:164968164e4,thumbnail:"/assets/blogging/algorithm/Mathematical_Induction.png",current_company:"Herit Corporation",current_position:"Backend Server Developer",summary:"수학적 귀납법",excerpt_separator:"<!--more-->",hide:!1,breadcrumbs:["알고리즘","수학적 귀납법"],images:[]},_description:`
이진탐색 주제의 전형적인 예로,
배열에서 특정값을 찾을수 있는 알고리즘을 기준으로,
수학적 귀납법을 조금이나마 쉽게 이해할 수 있어요.

`,_content:`


## 수학적 귀납법(Mathematical Induction)

🌸 정의: 수학적 귀납법은 모든 자연수가 어떤 주어진 성질을 만족시킨다는 명제를 증명하는 방법의 하나.  
  
위의 정의 처럼 배열내 최대값을 구하는(주어진 성질) 알고리즘이 어떤 명제에 의해 증명되는지 간단하게 정리 할 거에요.

## 가정 및 순서

* 가정
> 𝑵(>= 1) : 탐색범위에 있는 정렬된 정수들의 수 (배열의 길이)  
> 𝓍 : 찾는 정수

* 단계

1. 기본단계  
𝑵 = 1일 때 𝓍를 목록에 있는 하나뿐인 정수와 한 번만 비교하면 𝓍가 목록에 있는지 여부를 알 수 있으므로 이진탐색은 맞다.  
> 설명: 배열에 길이(𝑵)가 1이더라도 해당 요소와 "한 번" 비교하여 목록에 있는지 알 수 있기 때문에 이진탐색 이라는 의미.

2. 귀납적 가설  
𝑵 <= 𝓴(양의 정수)일 때 이진 탐색은 𝓍가 목록에 있는지 여부를 알려 준다고 가정하자.
> 설명: 배열의 길이(𝑵)가 무조건 양수(정수)인 경우에 그값이 한 개라도 있다면 비교가 가능하기에 있는지에 대한 여부를 확인할수 있다.

3. 귀납적 단계  
𝑵 = 𝓴 + 1일 때 이진 탐색은 𝓍가 목록에 있는지 여부를 알려 준다는 것을 증명하자. 이진탐색은 먼저 𝓍를 𝑵개의 정수들의 중간 요소와 비교한다. 비교 결과는 다음과 같이 세 가지 경우가 있다.
> 설명:  𝑵 = 𝓴 + 1라는 가정(배열내 요소가 존재)에서 이진탐색을 통해 𝓍가 목록에 있는지에 대한 여부를 알아 낼 수있다. 이진 탐색은 기본적으로 중간값 피벗을 정해두고 이를 기준으로 오른쪽(큰수) 또는 왼쪽(작은수)의 배열을 사용할 지를 구분할 수 있다.  
> 물론 이 기준은 현재의 상황에서 오름차순(또는 내림차순)으로 정렬되어있는 경우에 이진 탐색을 시도할 수 있다.  
> 만약 \`[12, 22, 37, 39 ,50]\`이라는 배열이 있고 찾는 값인 𝓍가 가운데 값인 \`37\`과 비교해서 어떤 배열(또는 37)에서 찾을 수 있는 지를 의미한다.  
> 찾는값이 37이상 이라면 아래처럼 왼쪽의 값들은 비교조차 안하며 초록색의 값들에서만 찾는다.


<div class="array">
    <span class="over">12</span>
    <span class="over">22</span>
    <span class="current">37</span>
    <span class="target">39</span>
    <span class="target">50</span>
</div>


<table class="case-table">
    <tbody>
        <tr>
            <th><span class="case-head">경우 1</span></th>
            <td><span class="case-body">𝓍가 중간요소와 같다.<br/>이 경우는 𝓍를 찾았으므로 이진 탐색은 맞다.</span></td>
        </tr>
        <tr>
            <th><span class="case-head">경우 2</span></th>
            <td><span class="case-body">𝓍가 중간 요소보다 작다.<br>이 경우는 𝓍를 목록의 왼쪽 반에서 찾아야한다. 목록의 왼쪽 반의 크기 𝑵'은 ⎣𝑵/2⎦이다. 𝑵' <= 𝓴이므로 귀납적 가설에 의해 이진탐색은 𝓍가 목록에 있는지 여부를 알려 준다.<br/>따라서 이진탐색은 맞다.</span></td>
        </tr>
        <tr>
            <th><span class="case-head">경우 3</span></th>
            <td><span class="case-body">𝓍가 중간요소보다 크다.<br/>이 경우는 경우 2와 비슷한 논리로 맞다.</span></td>
        </tr>
    </tbody>
</table>

따라서 이진탐색은 𝑵 = 𝓴 + 1일 때 맞다.

> 잘못 설명된 내용이 있거나, 부적절한 예시가 있다면, 아래 댓글로 조언 부탁드립니다.  
> 감사합니다.  😄`},{_path:"/docs/algorithm/selection_sort",_header:{layout:"post",title:"-Algorithm- Selection Sort (선택정렬 알고리즘) feat.java",categories:["Development","Algorithm"],tags:["Java","Algorithm","Sort","Selection Sort"],date:164908284e4,thumbnail:"/assets/blogging/algorithm/selection_sort_intro.png",current_company:"Herit Corporation",current_position:"Backend Server Developer",summary:"선택 정렬",excerpt_separator:"<!--more-->",hide:!1,breadcrumbs:["알고리즘","선택 정렬"],images:[]},_description:`기본 정렬 알고리즘중 하나인 선택 정렬(Selection Sort)입니다.
간단한 그림과 함께 쉽게 이해할 수 있도록 정리했어요.
`,_content:`


## 선택정렬 (Selection Sort)


🌸 선택 정렬은 정렬할 배열을 순회하며, 어떤 원소로 대치할지 선택하여 정렬하는 알고리즘 입니다.
설명을 보기에 앞서, 통상적으로 정렬은 오름 또는 내림으로 배열의 수열을 맞추어 순서를 만드는 행위로 의미합니다.

---
  
  
  

<div class="array">
    <span>1</span>
    <span>4</span>
    <span>7</span>
    <span>3</span>
    <span>2</span>
    <span>5</span>
</div>


> 정렬을 하기위해 배열을 준비합니다. 또한, 해당 배열을 순회하면서 *나머지들의 값들중 가장작은 값으로 변경합니다.

순회 인덱스 i: 0

<div class="array">
    <span class="current">1</span>
    <span>4</span>
    <span>7</span>
    <span>3</span>
    <span>2</span>
    <span>5</span>
</div>

> 첫번째 순회요소는 나머지의 값들중 가장작은 값인 1 입니다. 따라서, 변경하지않습니다.

순회 인덱스 i: 1

<div class="array">
    <span class="over">1</span>
    <span class="current">4</span>
    <span>7</span>
    <span>3</span>
    <span class="target">2</span>
    <span>5</span>
</div>

> 두번째는 4입니다. 나머지의 요소들중 가장작은값이 2가 존재합니다. 4와 2를 변경합니다. 다음 부터는 정렬 순서가 동일합니다. 배열의 끝까지 순회하며 나머지 값들로 선택후 변경으로 정렬합니다.

순회 인덱스 i: 2

<div class="array">
    <span class="over">1</span>
    <span class="over">2</span>
    <span class="current">7</span>
    <span class="target">3</span>
    <span>4</span>
    <span>5</span>
</div>

순회 인덱스 i: 3

<div class="array">
    <span class="over">1</span>
    <span class="over">2</span>
    <span class="over">3</span>
    <span class="current">7</span>
    <span class="target">4</span>
    <span>5</span>
</div>

순회 인덱스 i: 4

<div class="array">
    <span class="over">1</span>
    <span class="over">2</span>
    <span class="over">3</span>
    <span class="over">4</span>
    <span class="current">7</span>
    <span class="target">5</span>
</div>

순회 인덱스 i: 5

<div class="array">
    <span class="over">1</span>
    <span class="over">2</span>
    <span class="over">3</span>
    <span class="over">4</span>
    <span class="over">5</span>
    <span class="over">7</span>
</div>

## 과정 코드

* 요소 교환
\`\`\`java
    /**
     * i 와 j 값 변경
     * 각 인덱스로 접근하므로 시간복잡도는 상수시간을 갖는다. O(1)
     * @param array
     * @param i
     * @param j
     */
public static void swapElements(int [] array, int i, int j) {
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
\`\`\`

* 최소값 찾기
\`\`\`java
/**
 * start 인덱스 부터 시작해서 끝까지 순회중 가장 작은 값을 리턴한다.
 * @param array
 * @param start
 * @return
 */
public static int indexLowest(int [] array, int start) {
    int lowIndex = start;

    for(int i = start;i < array.length;i++) {
        if(array[i] < array[lowIndex]) {
            lowIndex = i;
        }
    }
    return lowIndex;
}
\`\`\`

* 최소값을 찾고, 변경
\`\`\`java
/**
 * indexLowest 메서드를 통해 얻어온 가장작은값의 인덱스를 현재 인덱스와 변경한다.
 * @param array
 */
public static void selectionSort(int [] array) {
    System.out.printf("before selection sort : %s\\n", Arrays.toString(array));
    for(int i = 0;i < array.length;i++) {
        int j = indexLowest(array, i);
        swapElements(array, i, j);

        System.out.printf("(i = %d) array : %s\\n",i , Arrays.toString(array));
    }

}
\`\`\`

### 호출

\`\`\`java
import sort.selection_sort.SelectionSort;

public class Main {

    public static void main(String[] args) throws Exception {
    
        int [] needSort = {1, 4, 7, 3, 2, 5};
        
        SelectionSort.selectionSort(needSort);
    }
}
\`\`\`

### 콘솔
\`\`\`
before selection sort : [1, 4, 7, 3, 2, 5]
(i = 0) array : [1, 4, 7, 3, 2, 5]
(i = 1) array : [1, 2, 7, 3, 4, 5]
(i = 2) array : [1, 2, 3, 7, 4, 5]
(i = 3) array : [1, 2, 3, 4, 7, 5]
(i = 4) array : [1, 2, 3, 4, 5, 7]
(i = 5) array : [1, 2, 3, 4, 5, 7]
after selection sort : [1, 2, 3, 4, 5, 7]
\`\`\`

> 풀이 또는 잘못된 설명은 아래 댓글로 말씀 부탁드립니다.

`}],X0=q0,G0=J0,Zt=class Zt{constructor(t){Z(this,"isInitialized");this.isInitialized=!1}static getInstance(){return Zt.instance||(Zt.instance=new Zt(!1)),Zt.instance}settingFileNodes(){const t=Os.toFileTrees(X0);Ae.naviStack.push(new W0("탐색",t)),this.cacheFileNodeMap(t)}cacheFileNodeMap(t){for(let n of t)Ae.fileNodeMap.store.set(n._path,n),n._files&&this.cacheFileNodeMap(n._files)}settingPostMap(){Is.toPosts(G0).sort((t,n)=>n.header.date.getTime()-t.header.date.getTime()).forEach(t=>{Ae.postContents.push(t),!this.isInitialized&&(Y0.map.set(t._path,t),Ae.contentsForSearch.push(t),t.header&&this.setTags(t.header,t._path))})}init(){this.settingPostMap(),!this.isInitialized&&this.settingFileNodes()}setTags(t,n){t.tags.forEach(r=>{const s=Ae.tagMap.store.get(r);s?s.includes(n)||(s.push(n),Ae.tagMap.store.set(r,s)):Ae.tagMap.store.set(r,[n])})}};Z(Zt,"instance");let vo=Zt;const Q0=vo.getInstance(),Z0=Ye({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const r=xe(!1);return Un(()=>{r.value=!0}),s=>{var l;if(r.value)return(l=t.default)==null?void 0:l.call(t);const a=t.fallback||t.placeholder;if(a)return a();const o=s.fallback||s.placeholder||"",i=s.fallbackTag||s.placeholderTag||"span";return Re(i,n,o)}}}),eb=""+globalThis.__publicAssetsURL("assets/dev_is_record.png"),tb=e=>{const t=Date.parse(e),r=(+new Date-t)/1e3;if(r<60)return"방금 전";const s=r/60;if(s<60)return`${Math.floor(s)}분 전`;const a=s/60;if(a<24)return`${Math.floor(a)}시간 전`;const o=a/24;if(o<7)return`${Math.floor(o)}일 전`;const i=o/7;if(i<5)return`${Math.floor(i)}주 전`;const l=o/30;if(l<12)return`${Math.floor(l)}개월 전`;const u=o/365;return`${Math.round(u)}년 전`},R_=e=>{const t=Ae.blogInfo.title;document.title=e?`${e} | ${t}`:t};function nb(e,t){const n=new Map;for(let r of e){const s=t(r),a=n.has(s)?n.get(s):[];a&&(a.push(r),n.set(s,a))}return n}function jf(e,t){const n=new Map;for(let r=0;r<e.length;r++){const s=t(e[r],r);if(n.has(s))throw Promise.reject(`Can't Mapped by duplicated key '${s}'. `);n.set(s,e[r])}return n}const di=Gs("searchStatus",()=>{const e=xe(!1);function t(){e.value=!0;const r=document.querySelector("html");r.style.overflow="hidden",document.body.style.overflow="hidden"}function n(){e.value=!1;const r=document.querySelector("html");r.style.overflow="unset",document.body.style.overflow="unset"}return{isSearchMode:e,searching:t,cancelSearch:n}});var nt=(e=>(e.APPEAR="appear",e.READY="ready",e.CARRY_ON="carry-on",e.FINALIZE="finalize",e.DISAPPEAR="disappear",e))(nt||{});class rb{constructor(t){Z(this,"_status");Z(this,"_isSelected");Z(this,"_postContent");this._status=nt.APPEAR,this._isSelected=!1,this._postContent=t}get content(){return this._postContent}get status(){return this._status}selected(t){this._isSelected=t}get isSelected(){return this._isSelected}is(t){return this._status==t}change(t){this._status=t}}var _n=(e=>(e.BACKSPACE="Backspace",e.ARROW_DOWN="ArrowDown",e.ARROW_UP="ArrowUp",e.ARROW_LEFT="ArrowLeft",e.ARROW_RIGHT="ArrowRight",e.ENTER="Enter",e.ESC="Escape",e))(_n||{});const pi=Gs("photoViewStatus",()=>{const e=xe(!1),t=xe(!1),n=xe(new Map),r=xe(1),s=xe(0),a=5,o=1;function i(T){l(),n.value=jf(T,(R,C)=>C+1),n.value.size>0&&(s.value=1)}function l(){r.value=1,t.value=!1}function u(T){if(n.value.size==0||(s.value=T,e.value))return;e.value=!0;const R=document.querySelector("html");R.style.overflow="hidden",document.body.style.overflow="hidden"}function c(){e.value=!1;const T=document.querySelector("html");T.style.overflow="unset",document.body.style.overflow="unset"}function f(){a>r.value&&r.value++}function d(){o<r.value&&r.value--}function p(){b()&&s.value++}function b(){return n.value.size!==0&&s.value<n.value.size}function k(){S()&&s.value--}function S(){return n.value.size!==0&&s.value>1}function _(){return n.value.has(s.value)?n.value.get(s.value):new $f("https://placehold.co/200x600","이미지 불러오는 중")}function y(){return[...n.value.entries()].sort((T,R)=>T[0]-R[0]).map(([T,R])=>R)}function g(){t.value=!0}function m(){t.value=!1}function x(){return n.value.size}return{isPhotoView:e,isFullScreen:t,currentIndex:s,zoom:r,imageList:y,load:i,open:u,imageCount:x,close:c,zoomIn:f,zoomOut:d,beforeImage:k,nextImage:p,current:_,hasNext:b,hasBefore:S,activateFullScreen:g,inactivateFullScreen:m}}),sb={class:"header-center"},ab=z("img",{src:eb,style:{height:"100%",cursor:"pointer"}},null,-1),ob=[ab],ib={class:"search-box-wrapper"},lb={class:"menu-icon-wrapper"},cb={class:"menu-icon"},ub={class:"menu-title"},fb={class:"cancel-search"},db={class:"top-menu-area"},pb={class:"top-level-menu"},hb={class:"top-menu-list"},mb={class:"menu-item"},gb={href:"/tags"},vb={class:"menu-icon-wrapper"},yb={class:"menu-icon"},bb=z("div",{class:"menu-title"},[z("span",null,"태그")],-1),_b=Ye({__name:"MainHeader",setup(e){tf();const t=dn(),{$emitter:n}=Ee(),r=di(),s=pi();go.isActive,Un(()=>{n.on("initScroll",()=>{console.log("initScroll"),window.scrollTo({top:0,behavior:"smooth"})}),n.on("resetSearchBar",()=>{o.inactivateSearchMode()})});const a=/([a-zA-Z가-힣0-9@\W\-\_])/,o={activateSearchMode:()=>{r.searching(),document.getElementById("search-bar").focus()},inactivateSearchMode:()=>{const i=document.getElementById("search-bar");i.value="",i.blur(),r.cancelSearch()},typeForText:()=>{const l=document.getElementById("search-bar").value??"";o.searchText(l)},sendKeyboardEvent:i=>{if(i.code==_n.ESC)o.inactivateSearchMode();else if(i.code==_n.ENTER){n.emit("moveToSelectedPost");return}else if(i.code==_n.ARROW_DOWN||i.code==_n.ARROW_UP){const l=i.code==_n.ARROW_DOWN?0:1;n.emit("selectResult",l)}},searchText:i=>{if(i===""&&n.emit("searchText",[]),a.test(i)){const l=new RegExp(`(.+)?(${i})(.+)?`,"i"),u=Ae.contentsForSearch.filter(c=>{const f=c.header.title;return l.test(f)}).map(c=>new rb(c));n.emit("searchText",u)}}};return(i,l)=>{const u=dp("font-awesome-icon"),c=Z0;return pe(),Re("header",null,[z("div",{id:"main-header",class:Qe(["header-wrapper",{"search-mode":Q(r).isSearchMode,"going-down":Q(Ae).scrollStatus.isDown||Q(s).isPhotoView}])},[z("div",sb,[z("div",{class:"blog-ci-area",onClick:l[0]||(l[0]=f=>Q(t).push("/"))},ob),z("div",ib,[z("div",{class:"search-box",onClick:l[3]||(l[3]=f=>o.activateSearchMode())},[z("div",lb,[z("span",cb,[he(u,{icon:["fas","magnifying-glass"]})])]),z("div",ub,[z("input",{type:"text",placeholder:"찾기",id:"search-bar",onInput:l[1]||(l[1]=f=>o.typeForText()),onKeyup:l[2]||(l[2]=f=>o.sendKeyboardEvent(f))},null,32)])]),z("div",fb,[z("button",{type:"button",class:"cancel-button",onClick:l[4]||(l[4]=f=>o.inactivateSearchMode())},"Cancel")])]),z("div",db,[z("div",pb,[z("ul",hb,[z("li",mb,[he(c,null,{default:Ro(()=>[z("a",gb,[z("div",vb,[z("span",yb,[he(u,{icon:["fa","tags"]})])]),bb])]),_:1})])])])]),br("",!0)])],2)])}}});const wb=Gs("spinnerSwitch",()=>{const e=xe(!1);function t(){e.value=!0}function n(){e.value=!1}return{isOn:e,on:t,off:n}}),xb=z("div",{class:"spinner-background"},[z("div",{class:"spinner-area"})],-1),kb=[xb],Eb=Ye({__name:"LoadingBar",setup(e){const n={isOn:wb().isOn};return(r,s)=>(pe(),Re("div",{class:Qe(["global-spinner-wrapper",{on:n.isOn}])},kb,2))}});class Ff{constructor(t,n){Z(this,"_icon");Z(this,"_searchResults");this._icon=t,this._searchResults=jf(n,r=>r.content.path)}get icon(){return this._icon}get results(){return[...this._searchResults.values()]}update(t){t.forEach(n=>{const r=n.content.path;if(this._searchResults.has(r)){const s=this._searchResults.get(r);if(s!=null&&s.is(nt.CARRY_ON)||s!=null&&s.is(nt.FINALIZE)){s==null||s.change(nt.READY);return}}else this._searchResults.set(r,n)}),this.results.forEach(n=>{n.is(nt.APPEAR)&&n.change(nt.READY),n.is(nt.CARRY_ON)&&this._searchResults.delete(n.content.path)})}updateNewer(){this.results.forEach(t=>{t.is(nt.APPEAR)&&t.change(nt.READY)})}finalizeAllChild(){this.results.forEach(t=>{t.change(nt.FINALIZE)})}}const Sb={class:"search-result-row"},Cb={class:"category-icon-area"},Ab={class:"category-icon"},Pb=["src"],Tb={class:"detected-content-area"},Rb={class:"detected-list"},Ob=["onClick"],Ib={class:"result-string"},Mb={class:"result-breadcrumb"},Nb=Ye({__name:"SearchResult",props:{row:Ff},setup(e){const t=ef(),n=di(),r=e,s=a=>{t.push(a),n.cancelSearch()};return(a,o)=>(pe(),Re("div",Sb,[z("div",Cb,[z("span",Ab,[z("img",{src:`/assets/icon/${r.row.icon}.png`},null,8,Pb)])]),z("div",Tb,[z("ul",Rb,[(pe(!0),Re(Ne,null,vs(r.row.results,i=>(pe(),Re("li",{class:Qe(["each-detected-content",[`${i.status}`,{select:i.isSelected}]]),key:i.content.path,onClick:l=>s(i.content.path)},[z("div",Ib,[z("span",null,Cn(i.content.header.title),1)]),z("div",Mb,[z("ul",null,[(pe(!0),Re(Ne,null,vs(i.content.header.breadcrumbs,l=>(pe(),Re("li",null,Cn(l),1))),256))])])],10,Ob))),128))])])]))}});const Df=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Lb=Df(Nb,[["__scopeId","data-v-fb07d197"]]),Hb={class:"main-footer"},$b={class:"footer-text"},jb=["href"],Fb=Ye({__name:"MainFooter",setup(e){return(t,n)=>(pe(),Re("div",Hb,[z("div",$b,[z("span",null,[_s("© 2022 "),z("a",{href:`https://github.com/${Q(Ae).blogInfo.fullname}`},Cn(Q(Ae).blogInfo.username)+".",9,jb),_s(" All rights reserved.")])])]))}});const Vn=e=>(Dd("data-v-d79c5cad"),e=e(),Bd(),e),Db={class:"svg-inline--fa fa-chevron-left",style:{},"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512","data-v-eb64f7a0":""},Bb=Vn(()=>z("path",{class:"",style:{},fill:"currentColor",d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"},null,-1)),zb=[Bb],Ub=["src","alt"],Wb={class:"image-description"},Kb=Vn(()=>z("svg",{class:"svg-inline--fa fa-chevron-right","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[z("path",{class:"",fill:"currentColor",d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"})],-1)),Vb=[Kb],Yb={class:"image-toolbar-wrapper"},qb={class:"tool-list"},Jb={class:"image-tool"},Xb={class:"image-tool"},Gb=Vn(()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[z("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"})],-1)),Qb=[Gb],Zb=Vn(()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[z("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"})],-1)),e_=[Zb],t_=Vn(()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[z("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})],-1)),n_=[t_],r_=Vn(()=>z("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[z("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"})],-1)),s_=[r_],a_={class:"photo-view-wrapper"},o_={class:"photo-view-list",id:"image-preview-wrapper"},i_=["onClick"],l_=["src","alt"],c_=Ye({__name:"PhotoView",setup(e){const t=pi(),n={zoonIn(){t.zoomIn()},zoonOut(){t.zoomOut()},toggleFullScreen(){t.isFullScreen?t.inactivateFullScreen():t.activateFullScreen()}};return(r,s)=>(pe(),Re("div",{class:Qe(["photo-view-area",{"full-screen":Q(t).isFullScreen}])},[z("div",{class:Qe(["photo-view-panel",Q(t).zoom!==1&&`x${Q(t).zoom}`])},[Q(t).hasBefore()?(pe(),Re("button",{key:0,class:"before-button",type:"button",onClick:s[0]||(s[0]=a=>Q(t).beforeImage())},[(pe(),Re("svg",Db,zb))])):br("",!0),z("img",{id:"current-image",src:Q(t).current().src,alt:Q(t).current().alt},null,8,Ub),z("span",Wb,Cn(Q(t).current().alt),1),Q(t).hasNext()?(pe(),Re("button",{key:1,class:"next-button",type:"button",onClick:s[1]||(s[1]=a=>Q(t).nextImage())},Vb)):br("",!0),z("div",Yb,[z("ul",qb,[z("li",Jb,[z("span",null,Cn(`${Q(t).currentIndex}/${Q(t).imageCount()}`),1)]),z("li",Xb,[z("span",null,Cn(`x${Q(t).zoom}`),1)]),z("li",{class:"image-tool",onClick:s[2]||(s[2]=a=>n.zoonIn())},Qb),z("li",{class:"image-tool",onClick:s[3]||(s[3]=a=>n.zoonOut())},e_),z("li",{class:"image-tool",onClick:s[4]||(s[4]=a=>n.toggleFullScreen())},n_),z("li",{class:"image-tool",onClick:s[5]||(s[5]=a=>Q(t).close())},s_)])])],2),z("div",a_,[z("ol",o_,[(pe(!0),Re(Ne,null,vs(Q(t).imageList(),(a,o)=>(pe(),Re("li",{class:Qe({selected:Q(t).currentIndex===o+1}),key:o,onClick:i=>Q(t).open(o+1)},[z("img",{class:"image-preview",src:a.src,alt:a.alt},null,8,l_)],10,i_))),128))])])],2))}});const u_=Df(c_,[["__scopeId","data-v-d79c5cad"]]),f_=Gs("darkModeSwitch",()=>{const e=xe(!1);function t(){e.value=!e}function n(r){e.value=r}return{isDarkMode:e,collapse:t,force:n}});class d_{constructor(t,n){Z(this,"_left");Z(this,"_right");this._left=t,this._right=n}get left(){return this._left}get right(){return this._right}}const p_=4,h_=()=>{for(let e=0;e<p_&&Ae.postContents.length!=0;e++){const t=Ae.postContents.shift();t!==void 0&&Ae.feeds.push(t)}mo.is_calling=!1},m_={key:0,class:"search-result-area"},g_=Ye({__name:"app",setup(e){Q0.init();const t=f_(),n=tf(),r=ef(),{$emitter:s}=Ee(),a=di(),o=pi(),i={mobileNaviStore:go,route:n},l=xe(new Map),u=xe([]),c=xe(0),f={clickBackground:d=>{a.isSearchMode?(i.mobileNaviStore.isActive=!1,a.cancelSearch()):o.isPhotoView&&o.close()}};return Un(()=>{s.on("searchText",b=>{const k=nb(b,g=>Ae.fileNodeMap.store.get(g.content.path).group);[...l.value.keys()].forEach(g=>{if(k.has(g)){const m=k.get(g)??[];k.delete(g);const x=l.value.get(g);x==null||x.update(m),(x==null?void 0:x.results.length)==0&&(console.log("delete key:",g),l.value.delete(g));return}else l.value.delete(g)}),[...k.entries()].forEach(([g,m])=>{const x=new Ff(g,m);l.value.set(g,x),x.updateNewer()});const y=[...l.value.values()];u.value=y.map(g=>g.results.map((m,x)=>new d_(g.icon,x))).flat(),c.value=0}),s.on("selectResult",b=>{var T,R;const k=u.value.length;if(k===0){c.value=0;return}const S=c.value,_=u.value[S],y=(T=l.value.get(_.left))==null?void 0:T.results[_.right];if(S===0&&!(y!=null&&y.isSelected)){y==null||y.selected(!0);return}const g=b==0?S+1>k-1?k-1:S+1:S-1<0?0:S-1,m=u.value[g];y==null||y.selected(!1);const x=(R=l.value.get(m.left))==null?void 0:R.results[m.right];x==null||x.selected(!0),c.value=g}),s.on("moveToSelectedPost",()=>{var _;const b=c.value,k=u.value[b],S=(_=l.value.get(k.left))==null?void 0:_.results[k.right];c.value===0&&!(S!=null&&S.isSelected)||(r.push((S==null?void 0:S.content.path)??""),a.cancelSearch(),c.value=0,s.emit("resetSearchBar"))});const d=document.getElementById("application-container"),p=b=>{const k=window.scrollY,S=window.innerHeight,_=d.scrollHeight,y=(100*k/(_-S)).toFixed(0),g=parseFloat(y);!mo.is_calling&&g>80&&(mo.is_calling=!0,h_()),Ae.scrollStatus.on(),Ae.scrollStatus.loadHeader(),Ae.scrollStatus.checkScroll()};window.addEventListener("scroll",p)}),cg({htmlAttrs:{lang:"ko-kr"},meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0"}]}),(d,p)=>{const b=A0;return pe(),Re("div",{id:"application-container",class:Qe(["app-container",{dark:Q(t).isDarkMode}])},[he(_b),he(b,{class:"current-content",id:"current-content-element","page-key":Q(n).fullPath},null,8,["page-key"]),he(Fb),z("div",{class:Qe(["background",{active:i.mobileNaviStore.isActive||Q(o).isPhotoView||Q(a).isSearchMode}]),onClick:p[2]||(p[2]=k=>f.clickBackground(k))},[Q(a).isSearchMode?(pe(),Re("div",m_,[z("div",{class:"search-result-panel",onClick:p[0]||(p[0]=k=>k.stopPropagation())},[(pe(!0),Re(Ne,null,vs(Q(l).values(),k=>(pe(),yt(Lb,{key:k,row:k},null,8,["row"]))),128))])])):br("",!0),Q(o).isPhotoView?(pe(),yt(u_,{key:1,onClick:p[1]||(p[1]=k=>k.stopPropagation())})):br("",!0)],2),he(Eb)],2)}}});const v_={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,a=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),i=void 0,c=s?Ti(()=>Ft(()=>import("./error-404.756b4eef.js"),["./error-404.756b4eef.js","./nuxt-link.4d627739.js","./vue.f36acd1f.ab456e0e.js","./error-404.7fc72018.css"],import.meta.url).then(f=>f.default||f)):Ti(()=>Ft(()=>import("./error-500.381fa68a.js"),["./error-500.381fa68a.js","./vue.f36acd1f.ab456e0e.js","./error-500.c5df6088.css"],import.meta.url).then(f=>f.default||f));return(f,d)=>(pe(),yt(Q(c),td(du({statusCode:Q(r),statusMessage:Q(a),description:Q(o),stack:Q(i)})),null,16))}},y_=v_,b_={__name:"nuxt-root",setup(e){const t=()=>null,n=Ee(),r=n.deferHydration(),s=!1;Rn(Ys,Sg()),n.hooks.callHookWith(i=>i.map(l=>l()),"vue:setup");const a=qs();Xc((i,l,u)=>{if(n.hooks.callHook("vue:error",i,l,u).catch(c=>console.error("[nuxt] Error in `vue:error` hook",c)),Pg(i)&&(i.fatal||i.unhandled))return n.runWithContext(()=>wn(i)),!1});const o=!1;return(i,l)=>(pe(),yt(Bc,{onResolve:Q(r)},{default:Ro(()=>[Q(a)?(pe(),yt(Q(y_),{key:0,error:Q(a)},null,8,["error"])):Q(o)?(pe(),yt(Q(t),{key:1,context:Q(o)},null,8,["context"])):Q(s)?(pe(),yt(pp(Q(s)),{key:2})):(pe(),yt(Q(g_),{key:3}))]),_:1},8,["onResolve"]))}},lc=b_;globalThis.$fetch||(globalThis.$fetch=om.create({baseURL:lm()}));let cc;{let e;cc=async function(){var a,o;if(e)return e;const r=!!((a=window.__NUXT__)!=null&&a.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?mh(lc):hh(lc),s=wm({vueApp:r});try{await km(s,x0)}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(Og),await s.hooks.callHook("app:mounted",r),await fn()}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}return r},e=cc().catch(t=>{console.error("Error while mounting app:",t)})}export{A_ as $,sn as A,No as B,ap as C,sp as D,za as E,Do as F,br as G,K0 as H,Ne as I,vs as J,go as K,h_ as L,T_ as M,P_ as N,mo as O,Is as P,R_ as Q,Z0 as R,dn as S,Ks as T,Tg as U,hl as V,C_ as W,ht as X,Ko as Y,Oh as Z,Df as _,z as a,Fa as a0,bu as a1,Ee as a2,S_ as a3,Sg as a4,x_ as a5,k_ as a6,he as b,Re as c,_s as d,Bd as e,Ye as f,yt as g,tb as h,Gs as i,tf as j,de as k,Oe as l,Un as m,dp as n,pe as o,Dd as p,Qe as q,xe as r,Q as s,Cn as t,pi as u,Ae as v,Ro as w,Y0 as x,E_ as y,w_ as z};
