!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),u=new N(n||[]);return i(a,"_invoke",{value:E(t,r,u)}),a}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}r.wrap=f;var d={};function h(){}function p(){}function v(){}var g={};l(g,u,(function(){return this}));var x=Object.getPrototypeOf,m=x&&x(x(L([])));m&&m!==n&&o.call(m,u)&&(g=m);var b=v.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(i,a,u,c){var s=y(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=A(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=y(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function A(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,A(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=y(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function L(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,i(b,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(k.prototype),l(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=L,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(l){s=!0,o=l}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./chakra-legacy-286557eb.js","./index-legacy-5e58d251.js","./react-legacy-5e1577ad.js","./clipboard-legacy-52d7b8ef.js","./helpers-legacy-65d87107.js","./misc-nodes-legacy-5dd4c40f.js","./stations-legacy-7f14935f.js"],(function(t,n){"use strict";var s,l,f,y,d,h,p,v,g,x,m,b,w,k,E,A,j,S,N,L,O,P,I,_,C,D,T,z,K,W,M,F,R,G,B,U,Y,V,J,Z,q;return{setters:[function(t){s=t.j},function(t){l=t.t,f=t.N,y=t.q,d=t.j,h=t.d,p=t.af,v=t.ag,g=t.ah,x=t.ai,m=t.aj,b=t.y,w=t.z,k=t.S,E=t.e,A=t.p,j=t.v,S=t.r,N=t.E,L=t.A,O=t.D,P=t.Q,I=t.K,_=t.J,C=t.a4,D=t.a6},function(t){T=t.r,z=t.b},function(t){K=t.u,W=t.e,M=t.i},function(t){F=t.b,R=t.r,G=t.f,B=t.F,U=t.p,Y=t.d,V=t.e,J=t.a},function(t){Z=t.m},function(t){q=t.s}],execute:function(){var n=function(t){return t.filterNodes((function(t,e){return t.startsWith("stn")})).map((function(e){return[e,t.getNodeAttributes(e)]})).filter((function(t){var e=u(t,2);e[0];return e[1].visible})).sort((function(t,e){return t[1].zIndex-e[1].zIndex})).map((function(t){var e=u(t,2),r=e[0],n=e[1];return a({node:r,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type},n.type,n[n.type])}))},H=function(t){return t.filterDirectedEdges((function(t,e,r,n,o,i,a){return t.startsWith("line")&&e.visible&&""===e.reconcileId})).sort((function(e,r){return t.getEdgeAttribute(e,"zIndex")-t.getEdgeAttribute(r,"zIndex")})).map((function(e){var r=t.getEdgeAttribute(e,"type"),n=t.getEdgeAttribute(e,r),o=t.getEdgeAttribute(e,"style"),i=t.getEdgeAttribute(e,o),a=u(t.extremities(e),2),c=a[0],s=a[1],l=t.getNodeAttributes(c),f=t.getNodeAttributes(s);return{edge:e,x1:l.x,y1:l.y,x2:f.x,y2:f.y,type:r,attr:n,style:o,styleAttr:i}}))},Q=function(t){return t.filterNodes((function(t,e){return t.startsWith("misc_node")})).map((function(e){return[e,t.getNodeAttributes(e)]})).filter((function(t){var e=u(t,2);e[0];return e[1].visible})).sort((function(t,e){return t[1].zIndex-e[1].zIndex})).map((function(t){var e=u(t,2),r=e[0],n=e[1];return a({node:r,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type},n.type,n[n.type])}))},X=function(t){var e,r={},n=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=c(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(t.filterDirectedEdges((function(t,e,r,n,o,i,a){return t.startsWith("line")&&""!==e.reconcileId})));try{for(n.s();!(e=n.n()).done;){var o=e.value,i=t.getEdgeAttribute(o,"reconcileId");i in r?r[i].push(o):r[i]=[o]}}catch(a){n.e(a)}finally{n.f()}return r},$=function(t){var e=t.id,r=t.x,n=t.y,o=t.handlePointerDown,i=t.handlePointerMove,a=t.handlePointerUp,u=z.useCallback((function(t){return o(e,t)}),[e,o]),c=z.useCallback((function(t){return i(e,t)}),[e,i]),l=z.useCallback((function(t){return a(e,t)}),[e,a]);return s.jsx("g",{id:e,transform:"translate(".concat(r-6.4,",").concat(n-6.4,")scale(0.025)"),onPointerDown:u,onPointerMove:c,onPointerUp:l,style:{cursor:"move"},children:s.jsx("path",{id:"stn_core_".concat(e),fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},tt=function(t){var e=t.id,r=t.path,n=t.handleClick,o=z.useCallback((function(t){return n(e,t)}),[e,n]);return s.jsx("path",{id:e,d:r,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onClick:o})},et=function(t){var e,r,n=t.id,o=t.type,i=t.attrs,a=void 0===i?l[o].defaultAttrs:i,c=t.styleType,d=t.styleAttrs,h=void 0===d?f[c].defaultAttrs:d,p=t.newLine,v=t.handleClick,g=t.x1,x=t.y1,m=t.x2,b=t.y2,w=u(z.useState("M 0,0 L 0,0"),2),k=w[0],E=w[1];z.useEffect((function(){var t="M 0,0 L 0,0";if(o in l)if(["offsetFrom","offsetTo"].every((function(t){return Object.keys(a).includes(t)}))&&!Number.isNaN(a.offsetFrom)&&!Number.isNaN(a.offsetTo)&&a.offsetFrom===a.offsetTo&&((g===m||x===b)&&[y.Diagonal,y.Perpendicular].includes(o)||1===Math.abs((b-x)/(m-g))&&[y.Diagonal,y.RotatePerpendicular].includes(o))){var e=a.offsetFrom;t=l[y.Simple].generatePath(g,m,x,b,{offset:e})}else t=l[o].generatePath(g,m,x,b,a);else t="M ".concat(g,",").concat(x," L ").concat(m,",").concat(b);E(t)}),[o,JSON.stringify(a),g,m,x,b]);var A=null!==(e=null===(r=f[c])||void 0===r?void 0:r.component)&&void 0!==e?e:tt;return z.useMemo((function(){return s.jsx(A,{id:n,type:o,path:k,styleAttrs:h,newLine:p,handleClick:v})}),[n,o,k,c,JSON.stringify(h),p,v])},rt=function(){var t=d(),e=z.useRef(window.graph),r=h((function(t){return t.app})).telemetry.project,c=h((function(t){return t.param})).svgViewBoxZoom,P=h((function(t){return t.runtime})),I=P.selected,_=P.refresh,C=_.nodes,D=_.edges,T=P.mode,W=P.active,M=P.keepLastPath,G=P.theme,B=u(z.useState({x:0,y:0}),2),U=B[0],Y=B[1],V=u(z.useState({x:0,y:0}),2),J=V[0],rt=V[1],nt=K((function(e,r){r.stopPropagation(),"select"===T&&t(p("free"));var n=r.currentTarget,o=F(r),i=o.x,a=o.y;n.setPointerCapture(r.pointerId),Y({x:i,y:a}),t(v(e)),r.shiftKey?I.has(e)?t(x(e)):t(m(e)):I.has(e)||t(g(new Set([e])))})),ot=K((function(r,n){var i=F(n),a=i.x,u=i.y;"free"===T&&W===r?(I.forEach((function(t){e.current.hasNode(t)&&e.current.updateNodeAttributes(t,(function(t){return o(o({},t),{},{x:R(t.x-(U.x-a)*c/100,n.altKey?1:5),y:R(t.y-(U.y-u)*c/100,n.altKey?1:5)})}))})),t(b()),t(w())):T.startsWith("line")&&rt({x:(U.x-a)*c/100,y:(U.y-u)*c/100})})),it=K((function(n,o){if(T.startsWith("line")){M||t(p("free"));var u=[].concat(i(Object.values(k)),[E.Virtual]),c=e.current.hasNode(W)&&u.includes(e.current.getNodeAttribute(W,"type"));["stn_core_","virtual_circle_"].forEach((function(t){var n,i=null===(n=document.elementsFromPoint(o.clientX,o.clientY)[0].attributes)||void 0===n||null===(n=n.getNamedItem("id"))||void 0===n?void 0:n.value,u=null==i?void 0:i.startsWith(t);if(c&&u){var s,f=T.slice(5),y="line_".concat(A(10));e.current.addDirectedEdgeWithKey(y,W,i.slice(t.length),(a(s={visible:!0,zIndex:0,type:f},f,structuredClone(l[f].defaultAttrs)),a(s,"style",j.SingleColor),a(s,j.SingleColor,{color:G}),a(s,"reconcileId",""),s)),r&&S.event(N.ADD_LINE,{type:f})}})),t(w()),t(L(e.current.export()))}else if("free"===T&&W){var s=F(o),f=s.x,y=s.y;U.x-f==0&&U.y-y==0||t(L(e.current.export()))}t(v(void 0))})),at=K((function(e,r){r.shiftKey||t(O()),r.shiftKey&&I.has(e)?t(x(e)):t(m(e))})),ut=u(z.useState(n(e.current)),2),ct=ut[0],st=ut[1],lt=u(z.useState(Q(e.current)),2),ft=lt[0],yt=lt[1],dt=u(z.useState(H(e.current)),2),ht=dt[0],pt=dt[1],vt=u(z.useState([]),2),gt=vt[0],xt=vt[1],mt=u(z.useState([]),2),bt=mt[0],wt=mt[1];return z.useEffect((function(){st(n(e.current)),yt(Q(e.current))}),[C]),z.useEffect((function(){pt(H(e.current));var t=function(t){var e=X(t),r=[],n=[];return Object.values(e).forEach((function(e){if(1!==e.length){var o=t.getEdgeAttribute(e.at(0),"type");if(e.every((function(e){return t.getEdgeAttribute(e,"type")===o}))){var a=t.getEdgeAttribute(e.at(0),"style");if(e.every((function(e){return t.getEdgeAttribute(e,"style")===a}))){var c={},s=new Set,l=new Set,f=Object.fromEntries(e.map((function(e){var r,n,o=u(t.extremities(e),2),i=o[0],a=o[1];return c[i]=(null!==(r=c[i])&&void 0!==r?r:0)+1,c[a]=(null!==(n=c[a])&&void 0!==n?n:0)+1,s.add(i),l.add(a),[i,[e,a]]}))),y=Array.from(s).filter((function(t){return 1===c[t]})),d=Array.from(l).filter((function(t){return 1===c[t]}));if(1===y.length&&1===d.length){var h=y[0],p=d[0];if(h!==p){for(var v=[f[h][0]],g=f[h][1],x=1;x<e.length;x+=1){var m,b=null===(m=f[g])||void 0===m?void 0:m.at(1);if(!b)return void n.push.apply(n,i(e));v.push(f[g][0]),g=b}g===p&&v.length===e.length?r.push(v):n.push.apply(n,i(e))}else n.push.apply(n,i(e))}else n.push.apply(n,i(e))}else n.push.apply(n,i(e))}else n.push.apply(n,i(e))}else n.push.apply(n,i(e))})),{allReconciledLines:r,danglingLines:n}}(e.current),r=t.allReconciledLines,n=t.danglingLines;xt(r),wt(n)}),[D]),s.jsxs(s.Fragment,{children:[bt.map((function(t){var r=u(e.current.extremities(t),2),n=r[0],o=r[1],i=e.current.getNodeAttributes(n),a=e.current.getNodeAttributes(o);return s.jsx(et,{id:t,x1:i.x,y1:i.y,x2:a.x,y2:a.y,newLine:!1,type:y.Simple,attrs:l[y.Simple].defaultAttrs,styleType:j.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:at},t)})),gt.map((function(t){var r,n,o=function(t,e){if(e.every((function(e){return t.hasEdge(e)}))){for(var r=e.map((function(e){var r,n,o,i=u(t.extremities(e),2),a=i[0],c=i[1],s=t.getNodeAttributes(a),f=t.getNodeAttributes(c),y=t.getEdgeAttribute(e,"type"),d=null!==(r=t.getEdgeAttribute(e,y))&&void 0!==r?r:l[y].defaultAttrs;return null!==(n=null===(o=l[y])||void 0===o?void 0:o.generatePath(s.x,f.x,s.y,f.y,d))&&void 0!==n?n:"M ".concat(s.x,",").concat(s.y," L ").concat(f.x,",").concat(f.y)})),n="".concat(r[0]," "),o=1;o<e.length;o+=1)n+=r[o].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return n}}(e.current,t);if(!o)return s.jsx(s.Fragment,{});var i=t.at(0),a=e.current.getEdgeAttribute(i,"type"),c=e.current.getEdgeAttribute(i,"style"),y=e.current.getEdgeAttribute(i,c),d=null!==(r=null===(n=f[c])||void 0===n?void 0:n.component)&&void 0!==r?r:tt;return s.jsx(d,{id:i,type:a,path:o,styleAttrs:y,newLine:!1,handleClick:at},i)})),ht.map((function(t){var e=t.edge,r=t.x1,n=t.y1,o=t.x2,i=t.y2,a=t.type,u=t.attr,c=t.style,l=t.styleAttr;return s.jsx(et,{id:e,x1:r,y1:n,x2:o,y2:i,newLine:!1,type:a,attrs:u,styleType:c,styleAttrs:l,handleClick:at},e)})),ft.map((function(t){var e,r,n=t.node,o=t.x,i=t.y,a=t.type,u=null!==(e=null===(r=Z[a])||void 0===r?void 0:r.component)&&void 0!==e?e:$;return s.jsx(u,{id:n,x:o,y:i,attrs:t[a],handlePointerDown:nt,handlePointerMove:ot,handlePointerUp:it},n)})),ct.map((function(t){var e,r,n=t.node,o=t.x,i=t.y,u=t.type,c=null!==(e=null===(r=q[u])||void 0===r?void 0:r.component)&&void 0!==e?e:$;return s.jsx(c,{id:n,x:o,y:i,attrs:a({},u,t[u]),handlePointerDown:nt,handlePointerMove:ot,handlePointerUp:it},n)})),T.startsWith("line")&&W&&s.jsx(et,{id:"create_in_progress___no_use",x1:e.current.getNodeAttribute(W,"x"),y1:e.current.getNodeAttribute(W,"y"),x2:e.current.getNodeAttribute(W,"x")-J.x,y2:e.current.getNodeAttribute(W,"y")-J.y,newLine:!0,type:T.slice(5),attrs:l[T.slice(5)].defaultAttrs,styleType:j.SingleColor,styleAttrs:{color:G}})]})};t("default",(function(){var t,n,o,c,l,f=d(),y=z.useRef(window.graph),x=function(){f(b()),f(w()),f(L(y.current.export()))},m=h((function(t){return t.app})).telemetry.project,k=h((function(t){return t.param})),E=k.svgViewBoxZoom,j=k.svgViewBoxMin,H=h((function(t){return t.runtime})),Q=H.mode,X=H.lastTool,$=H.active,tt=H.selected,et=H.keepLastPath,nt=H.theme,ot=H.refresh.nodes,it=(o=u(T.useState({width:void 0,height:void 0}),2),c=o[0],l=o[1],T.useEffect((function(){function t(){l({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),c),at=(null!==(t=it.height)&&void 0!==t?t:1280)-40,ut=(null!==(n=it.width)&&void 0!==n?n:720)-40;z.useEffect((function(){var t=G(y.current);Object.entries(t).filter((function(t){var e=u(t,2),r=e[0];return e[1]&&r in B})).map((function(t){var e=u(t,2),r=e[0];e[1];return r})).filter((function(t){return B[t]&&null===document.getElementById(B[t].cssName)})).map((function(t){return B[t].cssName})).filter((function(t,e,r){return e===r.findIndex((function(e){return e===t}))})).forEach((function(t){var e=document.createElement("link");e.rel="stylesheet",e.id=t,e.href="/rmp/"+"styles/".concat(t,".css"),document.head.append(e)}))}),[ot]);var ct=u(z.useState({x:0,y:0}),2),st=ct[0],lt=ct[1],ft=u(z.useState({x:0,y:0}),2),yt=ft[0],dt=ft[1],ht=u(z.useState({x:0,y:0}),2),pt=ht[0],vt=ht[1],gt=u(z.useState({x:0,y:0}),2),xt=gt[0],mt=gt[1],bt=K((function(t){var e=F(t),r=e.x,n=e.y;if(Q.startsWith("station")){f(p("free"));var o=A(10),i="stn_".concat(o),u=Q.slice(8),c=structuredClone(q[u].defaultAttrs);"color"in c&&(c.color=nt);var s=U(r,n,E,j),l=s.x,d=s.y;y.current.addNode(i,a({visible:!0,zIndex:0,x:R(l,5),y:R(d,5),type:u},u,c)),x(),m&&S.event(N.ADD_STATION,{type:u}),f(g(new Set([i])))}else if(Q.startsWith("misc-node")){f(p("free"));var h=A(10),b="misc_node_".concat(h),w=Q.slice(10),k=U(r,n,E,j),L=k.x,I=k.y;y.current.addNode(b,a({visible:!0,zIndex:0,x:R(L,5),y:R(I,5),type:w},w,structuredClone(Z[w].defaultAttrs))),x(),m&&S.event(N.ADD_STATION,{type:w}),f(g(new Set([b])))}else"free"===Q||Q.startsWith("line")?(Q.startsWith("line")&&(f(p("free")),et&&f(P(!1))),vt({x:r,y:n}),mt(j),t.shiftKey||(f(v("background")),f(O()))):"select"===Q&&(lt(U(r,n,E,j)),dt(U(r,n,E,j)))})),wt=K((function(t){if("select"===Q){if(0!=st.x&&0!=st.y){var e=F(t),r=e.x,n=e.y;dt(U(r,n,E,j))}}else if("background"===$){var o=F(t),i=o.x,a=o.y;f(I({x:xt.x+(pt.x-i)*E/100,y:xt.y+(pt.y-a)*E/100}))}})),kt=K((function(t){if("select"===Q){var e=F(t),r=e.x,n=e.y,o=U(r,n,E,j),a=o.x,u=o.y,c=Y(y.current,st.x,st.y,a,u),s=V(y.current,new Set(c));f(g(new Set([].concat(i(t.shiftKey?tt:[]),i(c),i(s))))),f(p("free")),lt({x:0,y:0}),dt({x:0,y:0})}"background"!==$||t.shiftKey||f(v(void 0))})),Et=K((function(t){var e=E;t.deltaY>0&&E+10<400?e=E+10:t.deltaY<0&&E-10>0&&(e=E-10),f(_(e));var r=F(t),n=r.x,o=r.y,i=t.currentTarget.getBoundingClientRect(),a=n/i.width,u=o/i.height;f(I({x:j.x+n*E/100-ut*e/100*a,y:j.y+o*E/100-at*e/100*u}))})),At=K(function(){var t,n=(t=e().mark((function t(r){var n,o,i,a,u,c,s,l,d,h,v,m,b;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(J?"Backspace"===r.key:"Delete"===r.key)){t.next=4;break}tt.size>0&&(tt.forEach((function(t){y.current.hasNode(t)?y.current.dropNode(t):y.current.hasEdge(t)&&y.current.dropEdge(t)})),f(O()),x()),t.next=50;break;case 4:if(!r.key.startsWith("Arrow")){t.next=11;break}n=r.key.endsWith("Left")?-1:r.key.endsWith("Right")?1:0,o=r.key.endsWith("Up")?-1:r.key.endsWith("Down")?1:0,f(I(U(100*n,100*o,E,j))),t.next=50;break;case 11:if("i"!==r.key&&"j"!==r.key&&"k"!==r.key&&"l"!==r.key){t.next=18;break}i=10*("j"===r.key?-1:"l"===r.key?1:0),a=10*("i"===r.key?-1:"k"===r.key?1:0),tt.size>0&&tt.forEach((function(t){y.current.hasNode(t)&&(y.current.updateNodeAttribute(t,"x",(function(t){return(null!=t?t:0)+i})),y.current.updateNodeAttribute(t,"y",(function(t){return(null!=t?t:0)+a})),x())})),t.next=50;break;case 18:if("f"!==r.key||!X){t.next=22;break}f(p(X)),t.next=50;break;case 22:if("z"!==r.key||!(J?r.metaKey&&!r.shiftKey:r.ctrlKey)){t.next=27;break}J&&r.preventDefault(),f(C()),t.next=50;break;case 27:if("s"!==r.key){t.next=31;break}f(p("select")),t.next=50;break;case 31:if("c"!==r.key&&"x"!==r.key||!(J?r.metaKey&&!r.shiftKey:r.ctrlKey)){t.next=37;break}u=W(y.current,tt),navigator.clipboard.writeText(u),"x"===r.key&&(f(O()),tt.forEach((function(t){y.current.hasNode(t)?y.current.dropNode(t):y.current.hasEdge(t)&&y.current.dropEdge(t)})),x()),t.next=50;break;case 37:if("v"!==r.key||!(J?r.metaKey&&!r.shiftKey:r.ctrlKey)){t.next=49;break}return t.next=40,navigator.clipboard.readText();case 40:c=t.sent,s=U(ut/2,at/2,E,j),l=s.x,d=s.y,h=M(c,y.current,R(l,5),R(d,5)),v=h.nodes,m=h.edges,x(),b=structuredClone(v),m.forEach((function(t){return b.add(t)})),f(g(b)),t.next=50;break;case 49:(J&&"z"===r.key&&r.metaKey&&r.shiftKey||!J&&"y"===r.key&&r.ctrlKey)&&f(D());case 50:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(t){return n.apply(this,arguments)}}()),jt=u(z.useState({sx:0,sy:0,ex:0,ey:0}),2),St=jt[0],Nt=jt[1];return z.useEffect((function(){Nt({sx:st.x<=yt.x?st.x:yt.x,ex:st.x>yt.x?st.x:yt.x,sy:st.y<=yt.y?st.y:yt.y,ey:st.y>yt.y?st.y:yt.y})}),[yt.x,yt.y]),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:at,width:ut,viewBox:"".concat(j.x," ").concat(j.y," ").concat(ut*E/100," ").concat(at*E/100),onPointerDown:bt,onPointerMove:wt,onPointerUp:kt,onWheel:Et,tabIndex:0,onKeyDown:At,children:[s.jsx(rt,{}),"select"===Q&&0!=st.x&&0!=st.y&&s.jsx("rect",{x:St.sx,y:St.sy,width:St.ex-St.sx,height:St.ey-St.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"})]})}))}}}))}();
