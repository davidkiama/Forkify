function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,r){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.0d861678.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,v=Function.prototype.call;f=p?v.bind(v):function(){return v.apply(v,arguments)};var m={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y=g&&!m.call({1:2},1);h=y?function(e){var t=g(this,e);return!!t&&t.enumerable}:m;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,F=p&&O.bind(j,j),L=(E=p?function(e){return e&&F(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),M=E("".slice);w=function(e){return M(L(e),8,-1)};var x=Object,P=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?P(e,""):x(e)}:x;var $,T=TypeError;$=function(e){if(null==e)throw T("Can't call method on "+e);return e},_=function(e){return k($(e))};var H,N,q,I;I=function(e){return"function"==typeof e},q=function(e){return"object"==typeof e?null!==e:I(e)};var C,A={},R=function(e){return I(e)?e:void 0};C=function(e,t){return arguments.length<2?R(c[e]):c[e]&&c[e][t]};var W={};W=E({}.isPrototypeOf);var z,D,U,G={};G=C("navigator","userAgent")||"";var B,J,V=c.process,Y=c.Deno,Q=V&&V.versions||Y&&Y.version,X=Q&&Q.v8;X&&(J=(B=X.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!J&&G&&(!(B=G.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=G.match(/Chrome\/(\d+)/))&&(J=+B[1]),U=J,D=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&U&&U<41})),z=D&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var K=Object;A=z?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return I(t)&&W(t.prototype,K(e))};var Z,ee,te,re=String;te=function(e){try{return re(e)}catch(e){return"Object"}};var ne=TypeError;ee=function(e){if(I(e))return e;throw ne(te(e)+" is not a function")},Z=function(e,t){var r=e[t];return null==r?void 0:ee(r)};var ie,oe=TypeError;ie=function(e,t){var r,n;if("string"===t&&I(r=e.toString)&&!q(n=f(r,e)))return n;if(I(r=e.valueOf)&&!q(n=f(r,e)))return n;if("string"!==t&&I(r=e.toString)&&!q(n=f(r,e)))return n;throw oe("Can't convert object to primitive value")};var ae,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(r){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.8",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,fe={},he=Object;pe=function(e){return he($(e))};var ve=E({}.hasOwnProperty);fe=Object.hasOwn||function(e,t){return ve(pe(e),t)};var me,ge=0,ye=Math.random(),be=E(1..toString);me=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ge+ye,36)};var _e=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=z?we:we&&we.withoutSetter||me;ae=function(e){if(!fe(_e,e)||!D&&"string"!=typeof _e[e]){var t="Symbol."+e;D&&fe(we,e)?_e[e]=we[e]:_e[e]=z&&ke?ke(t):Ee(t)}return _e[e]};var Se=TypeError,Oe=ae("toPrimitive");N=function(e,t){if(!q(e)||A(e))return e;var r,n=Z(e,Oe);if(n){if(void 0===t&&(t="default"),r=f(n,e,t),!q(r)||A(r))return r;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},H=function(e){var t=N(e,"string");return A(t)?t:t+""};var je,Fe,Le=c.document,Me=q(Le)&&q(Le.createElement);Fe=function(e){return Me?Le.createElement(e):{}},je=!l&&!d((function(){return 7!=Object.defineProperty(Fe("div"),"a",{get:function(){return 7}}).a}));var xe,Pe,$e=Object.getOwnPropertyDescriptor,Te=s=l?$e:function(e,t){if(e=_(e),t=H(t),je)try{return $e(e,t)}catch(e){}if(fe(e,t))return b(!f(h,e,t),e[t])},He={};Pe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ne,qe=String,Ie=TypeError;Ne=function(e){if(q(e))return e;throw Ie(qe(e)+" is not an object")};var Ce=TypeError,Ae=Object.defineProperty,Re=Object.getOwnPropertyDescriptor;xe=l?Pe?function(e,t,r){if(Ne(e),t=H(t),Ne(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=Re(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ae(e,t,r)}:Ae:function(e,t,r){if(Ne(e),t=H(t),Ne(r),je)try{return Ae(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Ce("Accessors not supported");return"value"in r&&(e[t]=r.value),e},He=l?function(e,t,r){return xe(e,t,b(1,r))}:function(e,t,r){return e[t]=r,e};var We,ze,De=Function.prototype,Ue=l&&Object.getOwnPropertyDescriptor,Ge=fe(De,"name"),Be={EXISTS:Ge,PROPER:Ge&&"something"===function(){}.name,CONFIGURABLE:Ge&&(!l||l&&Ue(De,"name").configurable)}.CONFIGURABLE,Je={},Ve=E(Function.toString);I(ue.inspectSource)||(ue.inspectSource=function(e){return Ve(e)}),Je=ue.inspectSource;var Ye,Qe,Xe=c.WeakMap;Qe=I(Xe)&&/native code/.test(Je(Xe));var Ke,Ze=se("keys");Ke=function(e){return Ze[e]||(Ze[e]=me(e))};var et={};et={};var tt,rt,nt,it=c.TypeError,ot=c.WeakMap;if(Qe||ue.state){var at=ue.state||(ue.state=new ot),st=E(at.get),ct=E(at.has),ut=E(at.set);tt=function(e,t){if(ct(at,e))throw new it("Object already initialized");return t.facade=e,ut(at,e,t),t},rt=function(e){return st(at,e)||{}},nt=function(e){return ct(at,e)}}else{var lt=Ke("state");et[lt]=!0,tt=function(e,t){if(fe(e,lt))throw new it("Object already initialized");return t.facade=e,He(e,lt,t),t},rt=function(e){return fe(e,lt)?e[lt]:{}},nt=function(e){return fe(e,lt)}}var dt=(Ye={set:tt,get:rt,has:nt,enforce:function(e){return nt(e)?rt(e):tt(e,{})},getterFor:function(e){return function(t){var r;if(!q(t)||(r=rt(t)).type!==e)throw it("Incompatible receiver, "+e+" required");return r}}}).enforce,pt=Ye.get,ft=Object.defineProperty,ht=l&&!d((function(){return 8!==ft((function(){}),"length",{value:8}).length})),vt=String(String).split("String"),mt=ze=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!fe(e,"name")||Be&&e.name!==t)&&ft(e,"name",{value:t,configurable:!0}),ht&&r&&fe(r,"arity")&&e.length!==r.arity&&ft(e,"length",{value:r.arity});try{r&&fe(r,"constructor")&&r.constructor?l&&ft(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=dt(e);return fe(n,"source")||(n.source=vt.join("string"==typeof t?t:"")),e};Function.prototype.toString=mt((function(){return I(this)&&pt(this).source||Je(this)}),"toString"),We=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;return I(r)&&ze(r,o,n),n.global?i?e[t]=r:ce(t,r):(n.unsafe?e[t]&&(i=!0):delete e[t],i?e[t]=r:He(e,t,r)),e};var gt,yt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Ft=Math.max,Lt=Math.min;wt=function(e,t){var r=kt(e);return r<0?Ft(r+t,0):Lt(r,t)};var Mt,xt,Pt=Math.min;xt=function(e){return e>0?Pt(kt(e),9007199254740991):0},Mt=function(e){return xt(e.length)};var $t=function(e){return function(t,r,n){var i,o=_(t),a=Mt(o),s=wt(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},Tt=(_t={includes:$t(!0),indexOf:$t(!1)}).indexOf,Ht=E([].push);bt=function(e,t){var r,n=_(e),i=0,o=[];for(r in n)!fe(et,r)&&fe(n,r)&&Ht(o,r);for(;t.length>i;)fe(n,r=t[i++])&&(~Tt(o,r)||Ht(o,r));return o};var Nt,qt={},It=(qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");yt=Object.getOwnPropertyNames||function(e){return bt(e,It)},Nt=Object.getOwnPropertySymbols;var Ct=E([].concat);Et=C("Reflect","ownKeys")||function(e){var t=yt(Ne(e));return Nt?Ct(t,Nt(e)):t},gt=function(e,t,r){for(var n=Et(t),i=xe,o=s,a=0;a<n.length;a++){var c=n[a];fe(e,c)||r&&fe(r,c)||i(e,c,o(t,c))}};var At={},Rt=/#|\.prototype\./,Wt=function(e,t){var r=Dt[zt(e)];return r==Gt||r!=Ut&&(I(t)?d(t):!!t)},zt=Wt.normalize=function(e){return String(e).replace(Rt,".").toLowerCase()},Dt=Wt.data={},Ut=Wt.NATIVE="N",Gt=Wt.POLYFILL="P";At=Wt,a=function(e,t){var r,n,i,o,a,s=e.target,u=e.global,l=e.stat;if(r=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(a=Te(r,n))&&a.value:r[n],!At(u?n:s+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;gt(o,i)}(e.sham||i&&i.sham)&&He(o,"sham",!0),We(r,n,o,e)}};var Bt,Jt,Vt=_t.includes,Yt={},Qt={};Qt=Object.keys||function(e){return bt(e,qt)},Jt=l&&!Pe?Object.defineProperties:function(e,t){Ne(e);for(var r,n=_(t),i=Qt(t),o=i.length,a=0;o>a;)xe(e,r=i[a++],n[r]);return e};var Xt={};Xt=C("document","documentElement");var Kt,Zt=Ke("IE_PROTO"),er=function(){},tr=function(e){return"<script>"+e+"<\/script>"},rr=function(e){e.write(tr("")),e.close();var t=e.parentWindow.Object;return e=null,t},nr=function(){try{Kt=new ActiveXObject("htmlfile")}catch(e){}var e,t;nr="undefined"!=typeof document?document.domain&&Kt?rr(Kt):((t=Fe("iframe")).style.display="none",Xt.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(tr("document.F=Object")),e.close(),e.F):rr(Kt);for(var r=qt.length;r--;)delete nr.prototype[qt[r]];return nr()};et[Zt]=!0,Yt=Object.create||function(e,t){var r;return null!==e?(er.prototype=Ne(e),r=new er,er.prototype=null,r[Zt]=e):r=nr(),void 0===t?r:Jt(r,t)};var ir=xe,or=ae("unscopables"),ar=Array.prototype;null==ar[or]&&ir(ar,or,{configurable:!0,value:Yt(null)}),Bt=function(e){ar[or][e]=!0},a({target:"Array",proto:!0,forced:d((function(){return!Array(1).includes()}))},{includes:function(e){return Vt(this,e,arguments.length>1?arguments[1]:void 0)}}),Bt("includes");var sr,cr={},ur=Function.prototype,lr=ur.apply,dr=ur.call;cr="object"==typeof Reflect&&Reflect.apply||(p?dr.bind(lr):function(){return dr.apply(lr,arguments)});var pr,fr=E(E.bind);pr=function(e,t){return ee(e),void 0===t?e:p?fr(e,t):function(){return e.apply(t,arguments)}};var hr={};hr=E([].slice);var vr,mr=TypeError;vr=function(e,t){if(e<t)throw mr("Not enough arguments");return e};var gr;gr=/(?:ipad|iphone|ipod).*applewebkit/i.test(G);var yr;yr="process"==w(c.process);var br,_r,wr,kr,Er=c.setImmediate,Sr=c.clearImmediate,Or=c.process,jr=c.Dispatch,Fr=c.Function,Lr=c.MessageChannel,Mr=c.String,xr=0,Pr={};try{br=c.location}catch(e){}var $r=function(e){if(fe(Pr,e)){var t=Pr[e];delete Pr[e],t()}},Tr=function(e){return function(){$r(e)}},Hr=function(e){$r(e.data)},Nr=function(e){c.postMessage(Mr(e),br.protocol+"//"+br.host)};Er&&Sr||(Er=function(e){vr(arguments.length,1);var t=I(e)?e:Fr(e),r=hr(arguments,1);return Pr[++xr]=function(){cr(t,void 0,r)},_r(xr),xr},Sr=function(e){delete Pr[e]},yr?_r=function(e){Or.nextTick(Tr(e))}:jr&&jr.now?_r=function(e){jr.now(Tr(e))}:Lr&&!gr?(kr=(wr=new Lr).port2,wr.port1.onmessage=Hr,_r=pr(kr.postMessage,kr)):c.addEventListener&&I(c.postMessage)&&!c.importScripts&&br&&"file:"!==br.protocol&&!d(Nr)?(_r=Nr,c.addEventListener("message",Hr,!1)):_r="onreadystatechange"in Fe("script")?function(e){Xt.appendChild(Fe("script")).onreadystatechange=function(){Xt.removeChild(this),$r(e)}}:function(e){setTimeout(Tr(e),0)});var qr=(sr={set:Er,clear:Sr}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==qr},{clearImmediate:qr});var Ir=sr.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==Ir},{setImmediate:Ir});var Cr=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new L(n||[]);return o._invoke=function(e,t,r){var n=d;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return x()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function M(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return g.prototype=y,c(k,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;F(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=Cr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Cr:Function("r","regeneratorRuntime = r")(Cr)}const Ar=async(e,t)=>{try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([n,(r=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${r} second`))}),1e3*r)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message}, (${i.status})`);return o}catch(e){throw e}var r},Rr={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},Wr=e=>{const{recipe:t}=e.data;return{id:t.id,title:t.title,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,image:t.image_url,cookingTime:t.cooking_time,sourceUrl:t.source_url,...t.key&&{key:t.key}}},zr=(e=Rr.search.page)=>{Rr.search.page=e;const t=(e-1)*Rr.search.resultsPerPage,r=e*Rr.search.resultsPerPage;return Rr.search.results.slice(t,r)},Dr=()=>{localStorage.setItem("bookmarks",JSON.stringify(Rr.bookmarks))},Ur=e=>{Rr.bookmarks.push(e),e.id===Rr.recipe.id&&(Rr.recipe.bookmarked=!0),Dr()};(()=>{const e=localStorage.getItem("bookmarks");e&&(Rr.bookmarks=JSON.parse(e))})();var Gr,Br,Jr,Vr;Gr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Yr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0==e.length)return this.renderError();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t).querySelectorAll("*"),n=this._parentElement.querySelectorAll("*");r.forEach(((e,t)=>{const r=n[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>{r.setAttribute(e.name,e.value)}))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n          <div class="spinner">\n            <svg>\n              <use href="${r(Gr)}#icon-loader"></use>\n            </svg>\n          </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${r(Gr)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div> \n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",t)}renderSuccess(e=this._successMessage){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${r(Gr)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div> \n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Jr=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Vr=function(e,t){if(t){var r=Math.pow(10,t);return Math.round(e*r)/r}return Math.round(e)},function(){if(Jr(this.denominator)){var e=Vr(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Jr(this.numerator)&&(e=Vr(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return n.forEach((function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))})),0===r.length?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},Br=Fraction;var Qr=new class extends Yr{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Try another one.";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const n=+r.dataset.updateTo;n>0&&e(n)}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n      <img src=${this._data.image} alt=${this._data.title} class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n\n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${r(Gr)}#icon-clock"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${r(Gr)}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n        <span class="recipe__info-text">servings</span>\n\n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n            <svg>\n              <use href="${r(Gr)}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n            <svg>\n              <use href="${r(Gr)}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n\n      <div class="recipe__user-generated   ${this._data.key?"":"hidden"}">\n        <svg>\n          <use href="${r(Gr)}#icon-user"></use>\n        </svg>\n      </div>\n      <button class="btn--round btn--bookmark">\n        <svg class="">\n          <use href="${r(Gr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n        </svg>\n      </button>\n    </div>\n\n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n\n      ${this._data.ingredients.map(this._generateIngredientMarkup).join("")}  \n      </ul>\n    </div>\n\n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href=${this._data.sourceUrl}\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="src/img/icons.svg#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>  \n      `}_generateIngredientMarkup(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${r(Gr)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new Br(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n    `}};var Xr=new class{_parentElement=document.querySelector(".search");getQuery(){return this._parentElement.querySelector(".search__field").value}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Kr=new class extends Yr{_parentElement="";_generateMarkup(e){const t=window.location.hash.slice(1);return`\n        <li class="preview">\n            <a class="\n            preview__link \n            ${this._data.id===t?"preview__link--active":""}"    \n            href="#${this._data.id}">\n            <figure class="preview__fig">\n                <img src=${this._data.image} alt="Test" />\n            </figure>\n            <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                <p class="preview__publisher">${this._data.publisher}</p> \n\n                <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                  <svg>\n                    <use href="${r(Gr)}#icon-user"></use>\n                  </svg>\n                </div>\n            </div>\n            </a>\n        </li>\n      `}};var Zr=new class extends Yr{_parentElement=document.querySelector(".results");_errorMessage="No recipes found. Please try again";_successMessage="";_generateMarkup(){return this._data.map((e=>Kr.render(e,!1))).join("")}};var en=new class extends Yr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ";_successMessage="";addBookmarkHandler(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Kr.render(e,!1))).join("")}};var tn=new class extends Yr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._nextMarkup(e):e===t&&t>1?this._prevMarkup(e):e<t?`${this._prevMarkup(e)} ${this._nextMarkup(e)}`:""}_prevMarkup(e){return`\n    <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n      <svg class="search__icon">\n        <use href=${r(Gr)}#icon-arrow-left></use>\n      </svg>\n      <span>Page ${e-1}</span>\n    </button>\n    `}_nextMarkup(e){return`\n    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n      <span>Page ${e+1}</span>\n      <svg class="search__icon">\n        <use href="${r(Gr)}#icon-arrow-right"></use>\n      </svg>\n    </button>`}};var rn=new class extends Yr{_parentElement=document.querySelector(".upload");_successMessage="Recipe was successfully added.";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const r=[...new FormData(this)],n=Object.fromEntries(r);e(n)}))}};const nn=async()=>{try{const e=window.location.hash.slice(1);if(!e)return;Qr.renderSpinner(),Zr.update(zr()),en.update(Rr.bookmarks),await(async e=>{try{const t=await Ar(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=39c25e7f-29ad-4afb-ad04-78700e08b4c6`);Rr.recipe=Wr(t),Rr.bookmarks.some((t=>t.id===e))?Rr.recipe.bookmarked=!0:Rr.recipe.bookmarked=!1}catch(e){throw e}})(e),Qr.render(Rr.recipe)}catch(e){Qr.renderError()}},on=async()=>{try{Zr.renderSpinner();const e=Xr.getQuery();if(!e)return;await(async e=>{try{Rr.search.query=e;const{data:t}=await Ar(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=39c25e7f-29ad-4afb-ad04-78700e08b4c6`);Rr.search.results=t.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Rr.search.page=1}catch(e){throw e}})(e),Zr.render(zr()),tn.render(Rr.search)}catch(e){Zr.renderError()}},an=e=>{Zr.render(zr(e)),tn.render(Rr.search)},sn=e=>{(e=>{Rr.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Rr.recipe.servings})),Rr.recipe.servings=e})(e),Qr.update(Rr.recipe)},cn=()=>{Rr.recipe.bookmarked?(e=>{const t=Rr.bookmarks.findIndex((t=>t.id===e));Rr.bookmarks.splice(t,1),e===Rr.recipe.id&&(Rr.recipe.bookmarked=!1),Dr()})(Rr.recipe.id):Ur(Rr.recipe),Qr.update(Rr.recipe),en.render(Rr.bookmarks)},un=()=>{en.render(Rr.bookmarks)},ln=async e=>{try{rn.renderSpinner(),await(async e=>{try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong format. Please use the correct format.");const[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}})),r={title:e.title,publisher:e.publisher,servings:+e.servings,image_url:e.image,cooking_time:+e.cookingTime,source_url:e.sourceUrl,ingredients:t},n=await Ar("https://forkify-api.herokuapp.com/api/v2/recipes/?key=39c25e7f-29ad-4afb-ad04-78700e08b4c6",r);Rr.recipe=Wr(n),Ur(Rr.recipe)}catch(e){throw e}})(e),Qr.render(Rr.recipe),rn.renderSuccess(),en.render(Rr.bookmarks),window.history.pushState(null,"",`#${Rr.recipe.id}`),setTimeout((()=>{rn.toggleWindow()}),2500)}catch(e){rn.renderError(e)}};en.addBookmarkHandler(un),Qr.addHandlerRender(nn),Qr.addHandlerUpdateServings(sn),Qr.addHandlerBookmark(cn),Xr.addHandlerSearch(on),tn.addHandlerClick(an),rn.addHandlerUpload(ln);
//# sourceMappingURL=index.0d861678.js.map
