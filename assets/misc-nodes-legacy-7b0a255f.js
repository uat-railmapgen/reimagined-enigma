!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function t(n,t,r){return(t=function(n){var t=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,t||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===e(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(s){u=!0,i=s}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}(e,n)||o(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-10b9dfaf.js","./chakra-legacy-fe32153b.js","./react-legacy-9060605e.js","./stations-legacy-64a8ec23.js"],(function(e,o){"use strict";var a,l,c,u,s,d,h;return{setters:[function(e){a=e.C,l=e.v,c=e.ak,u=e.H},function(e){s=e.j},function(e){d=e.b},function(e){h=e.M}],execute:function(){var o,m,f={component:function(e){var n=e.id,t=e.x,r=e.y,i=e.handlePointerDown,o=e.handlePointerMove,a=e.handlePointerUp,l=d.useCallback((function(e){return i(n,e)}),[n,i]),c=d.useCallback((function(e){return o(n,e)}),[n,o]),u=d.useCallback((function(e){return a(n,e)}),[n,a]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(r,")rotate(45)"),children:[s.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),s.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),s.jsx("circle",{id:"virtual_circle_".concat(n),r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:l,onPointerMove:c,onPointerUp:u,style:{cursor:"move"}})]})}),[n,t,r,l,c,u])},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[s.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),s.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),s.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},fields:[],metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},x={num:1,color:[a.Shanghai,"sh1","#E4002B",l.white]},p=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:x).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:x;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.ShmetroNumLineBadge,defaultAttrs:x})}],g={component:function(e){var n=e.id,t=e.x,o=e.y,a=e.attrs,l=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=a?a:x,m=h.num,f=void 0===m?x.num:m,p=h.color,g=void 0===p?x.color:p,y=i(f>=10?[22.67,10.75]:[21,10],2),v=y[0],b=y[1],j=d.useCallback((function(e){return l(n,e)}),[n,l]),w=d.useCallback((function(e){return c(n,e)}),[n,c]),S=d.useCallback((function(e){return u(n,e)}),[n,u]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(o,")"),children:[s.jsx("rect",{fill:g[2],width:v,height:"22.67"}),s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:b,y:"19",fill:g[3],fontSize:"21.33",letterSpacing:"-1.75",children:f}),s.jsx("text",{className:"rmp-name__zh",x:v+2,y:"12",fontSize:"14.67",children:"号线"}),s.jsxs("text",{className:"rmp-name__en",x:v+4,y:"21.5",fontSize:"8",children:["Line ",f]}),s.jsx("rect",{fill:"white",fillOpacity:"0",width:v,height:"22.67",onPointerDown:j,onPointerMove:w,onPointerUp:S,style:{cursor:"move"}})]})}),[n,t,o,f].concat(r(g),[j,w,S]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),s.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),s.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),s.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:x,fields:p,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},y={names:["浦江线","Pujiang Line"],color:[a.Shanghai,"pjl","#B5B5B6",l.white]},v=[{type:"input",label:"panel.details.nodes.common.nameZh",value:function(e){return(null!=e?e:y).names[0]},onChange:function(e,n){var t=null!=n?n:y;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:function(e){return(null!=e?e:y).names[1]},onChange:function(e,n){var t=null!=n?n:y;return t.names[1]=e.toString(),t}},{type:"custom",component:s.jsx(c,{type:u.ShmetroTextLineBadge,defaultAttrs:y})}],b={component:function(e){var n=e.id,t=e.x,o=e.y,a=e.attrs,l=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=a?a:y,m=h.names,f=void 0===m?y.names:m,x=h.color,p=void 0===x?y.color:x,g=d.useRef(null),v=i(d.useState({width:12}),2),b=v[0],j=v[1];d.useEffect((function(){return j(g.current.getBBox())}),[].concat(r(f),[j,g]));var w=d.useCallback((function(e){return l(n,e)}),[n,l]),S=d.useCallback((function(e){return c(n,e)}),[n,c]),N=d.useCallback((function(e){return u(n,e)}),[n,u]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(o,")"),children:[s.jsx("rect",{fill:p[2],x:"0",width:b.width+7,height:"21"}),s.jsxs("g",{ref:g,children:[s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(b.width+7)/2,y:"4",fontSize:"10",fill:p[3],letterSpacing:"-0.25",children:f[0]}),s.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(b.width+7)/2,y:"13",fontSize:"5",fill:p[3],letterSpacing:"-0.25",children:f[1]})]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:b.width+7,height:"21",onPointerDown:w,onPointerMove:S,onPointerUp:N,style:{cursor:"move"}})]})}),[n,t,o].concat(r(f),[b],r(p),[w,S,N]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),s.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),s.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:y,fields:v,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},j=function(e){var n=e.lineName,t=e.commonPart,r=d.useRef(null),o=i(d.useState({x:0,height:0,width:0}),2),a=o[0],l=o[1];d.useEffect((function(){r.current&&l(r.current.getBBox())}),[n.toString()]);var c=S/Math.max(S,a.width),u=(-a.x-a.width/2)*c,h=a.height*(1-c)*1.2/2;return s.jsx("g",{ref:r,transform:"translate(".concat(u,",").concat(h,")scale(").concat(c,")"),children:s.jsxs("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",dominantBaseline:"central",children:[t,s.jsx("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",dominantBaseline:"central",children:n[0].slice(t.length).trim()}),s.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",dominantBaseline:"central",children:n[1].slice(t.length).trim()})]})})},w=function(e){return s.jsx("rect",function(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({x:-22.5,height:24,width:45,rx:4.5},e))},S=42,N=function(e){var n=e.lineName,t=e.foregroundColour,r=e.backgroundColour,o=e.passed,a=i(B(n),2),c=a[0],u=a[1],h=d.useRef(null),m=d.useRef(null),f=i(d.useState({width:0}),2),x=f[0],p=f[1],g=i(d.useState({width:0}),2),y=g[0],v=g[1];d.useEffect((function(){h.current&&p(h.current.getBBox()),m.current&&v(m.current.getBBox())}),[n.toString()]);var b=S/Math.max(S,x.width),N=S/Math.max(S,y.width),P={nameZh:{y:7.3+13.5*(1-b)*b/2},nameEn:{y:19.5-9*(1-N)*N/2}};return s.jsxs("g",{textAnchor:"middle",fill:o?l.white:t,children:[s.jsx(w,{fill:o?"#aaa":r}),2===c?s.jsx(j,{lineName:n,commonPart:u}):s.jsxs(s.Fragment,{children:[s.jsx("text",{ref:h,className:"rmp-name__zh",fontSize:12,transform:"translate(0,".concat(P.nameZh.y,")scale(").concat(b,")"),dominantBaseline:"central",children:1===c?s.jsxs(s.Fragment,{children:[s.jsx("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:u}),s.jsx("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:n[0].slice(u.length)})]}):n[0]}),s.jsx("text",{ref:m,className:"rmp-name__en",fontSize:8,transform:"translate(0,".concat(P.nameEn.y,")scale(").concat(N,")"),dominantBaseline:"middle",children:n[1]})]})]})},B=function(e){var n=e[0].match(/^(\d+)\D+$/);if(n)return[1,n[1]];var t=e.map((function(e){return e.match(/^(\w+).+$/)}));return t[0]&&t[1]&&t[0][1]===t[1][1]?[2,t[0][1]]:[3,""]},P={names:["1号线","Line 1"],color:[a.Guangzhou,"gz1","#F3D03E",l.black]},C=[{type:"input",label:"panel.details.nodes.common.nameZh",value:function(e){return(null!=e?e:P).names[0]},onChange:function(e,n){var t=null!=n?n:P;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:function(e){return(null!=e?e:P).names[1]},onChange:function(e,n){var t=null!=n?n:P;return t.names[1]=e.toString(),t}},{type:"custom",component:s.jsx(c,{type:u.GzmtrLineBadge,defaultAttrs:P})}],z={component:function(e){var n=e.id,t=e.x,i=e.y,o=e.attrs,a=e.handlePointerDown,l=e.handlePointerMove,c=e.handlePointerUp,u=null!=o?o:P,h=u.names,m=void 0===h?P.names:h,f=u.color,x=void 0===f?P.color:f,p=d.useCallback((function(e){return a(n,e)}),[n,a]),g=d.useCallback((function(e){return l(n,e)}),[n,l]),y=d.useCallback((function(e){return c(n,e)}),[n,c]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx(N,{lineName:m,foregroundColour:x[3],backgroundColour:x[2]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:p,onPointerMove:g,onPointerUp:y,style:{cursor:"move"}})]})}),[n,t,i].concat(r(m),r(x),[p,g,y]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),s.jsx("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1号线"}),s.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),defaultAttrs:P,fields:C,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},A=11.84375,_={num:1,color:[a.Beijing,"bj1","#c23a30",l.white]},k=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:_).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:_;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.BjsubwayNumLineBadge,defaultAttrs:_})}],M={component:function(e){var n=e.id,t=e.x,i=e.y,o=e.attrs,a=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=o?o:_,m=h.num,f=void 0===m?_.num:m,x=h.color,p=void 0===x?_.color:x,g=d.useCallback((function(e){return a(n,e)}),[n,a]),y=d.useCallback((function(e){return c(n,e)}),[n,c]),v=d.useCallback((function(e){return u(n,e)}),[n,u]),b=p[3]===l.black?"#003670":l.white;return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx("rect",{fill:p[2],x:"0",width:32.84375,height:"16",rx:"2"}),s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:7.921875,y:"13.5",fill:b,fontSize:"15",letterSpacing:"-1.5",children:f}),s.jsx("text",{className:"rmp-name__zh",x:A+(f>9?5.5:3),y:"8.5",fontSize:"7",fill:b,children:"号线"}),s.jsxs("text",{className:"rmp-name__en",x:A+(f>9?6:4.5),y:"13.5",fontSize:"4",fill:b,children:["Line ",f]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:34.84375,height:"16",rx:"2",onPointerDown:g,onPointerMove:y,onPointerUp:v,style:{cursor:"move"}})]})}),[n,t,i,f].concat(r(p),[g,y,v]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),s.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),s.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),s.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:_,fields:k,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},L={names:["八通线","Batong Line"],color:[a.Beijing,"bj1","#c23a30",l.white]},D=[{type:"input",label:"panel.details.nodes.common.nameZh",value:function(e){return(null!=e?e:L).names[0]},onChange:function(e,n){var t=null!=n?n:L;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:function(e){return(null!=e?e:L).names[1]},onChange:function(e,n){var t=null!=n?n:L;return t.names[1]=e.toString(),t}},{type:"custom",component:s.jsx(c,{type:u.BjsubwayTextLineBadge,defaultAttrs:L})}],O={component:function(e){var n=e.id,t=e.x,o=e.y,a=e.attrs,c=e.handlePointerDown,u=e.handlePointerMove,h=e.handlePointerUp,m=null!=a?a:L,f=m.names,x=void 0===f?L.names:f,p=m.color,g=void 0===p?L.color:p,y=d.useRef(null),v=i(d.useState({width:12}),2),b=v[0],j=v[1];d.useEffect((function(){return j(y.current.getBBox())}),[].concat(r(x),[j,y]));var w=d.useCallback((function(e){return c(n,e)}),[n,c]),S=d.useCallback((function(e){return u(n,e)}),[n,u]),N=d.useCallback((function(e){return h(n,e)}),[n,h]),B=Math.max(28.84375,b.width),P=g[3]===l.black?"#003670":l.white;return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(o,")"),children:[s.jsx("rect",{fill:g[2],x:"0",width:B+4,height:"16",rx:"2"}),s.jsxs("g",{ref:y,children:[s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(B+4)/2,y:"8",fontSize:"7",fill:P,children:x[0]}),s.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(B+4)/2,y:"13.5",fontSize:"4",fill:P,children:x[1]})]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:B+3,height:"16",rx:"2",onPointerDown:w,onPointerMove:S,onPointerUp:N,style:{cursor:"move"}})]})}),[n,t,o].concat(r(x),[b],r(g),[w,S,N]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),s.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),s.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:L,fields:D,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},U={num:1,branch:!1,color:[a.Suzhou,"sz1","#78BA25",l.white]},E=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:U).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:U;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:function(e){var n;return null!==(n=null==e?void 0:e.branch)&&void 0!==n?n:U.branch},onChange:function(e,n){var t=null!=n?n:U;return t.branch=e,t}},{type:"custom",component:s.jsx(c,{type:u.SuzhouRTNumLineBadge,defaultAttrs:U})}],T={component:function(e){var n=e.id,t=e.x,i=e.y,o=e.attrs,a=e.handlePointerDown,l=e.handlePointerMove,c=e.handlePointerUp,u=null!=o?o:U,h=u.num,m=void 0===h?U.num:h,f=u.branch,x=void 0===f?U.branch:f,p=u.color,g=void 0===p?U.color:p,y=d.useCallback((function(e){return a(n,e)}),[n,a]),v=d.useCallback((function(e){return l(n,e)}),[n,l]),b=d.useCallback((function(e){return c(n,e)}),[n,c]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx("rect",{fill:g[2],width:"20",height:"20",rx:"2",ry:"2"}),s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:g[3],fontSize:"15",letterSpacing:"-1",children:m}),x&&s.jsxs(s.Fragment,{children:[s.jsx("text",{className:"rmp-name__zh",x:22.5,y:"10",fontSize:"10",children:"支线"}),s.jsx("text",{className:"rmp-name__en",x:22.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]}),s.jsx("rect",{fill:"white",fillOpacity:"0",width:"20",height:"20",rx:"2",ry:"2",onPointerDown:y,onPointerMove:v,onPointerUp:b,style:{cursor:"move"}})]})}),[n,t,i,m,x].concat(r(g),[y,v,b]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),s.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:U,fields:E,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},R={type:"tiananmen"},H=[{type:"select",label:"panel.details.nodes.facilities.type",value:function(e){return(null!=e?e:R).type},options:(o={},t(o,"airport","Airport"),t(o,"maglev","Maglev"),t(o,"disney","Disney"),t(o,"railway","Railway"),t(o,"hsr","HSR"),t(o,"airport_hk","Airport Hongkong"),t(o,"disney_hk","Disney Hongkong"),t(o,"ngong_ping_360","Ngong Ping 360"),t(o,"tiananmen","Tiananmen"),t(o,"airport_bj","Airport Beijing"),o),onChange:function(e,n){var t=null!=n?n:R;return t.type=e,t}}],I={component:function(e){var n=e.id,t=e.x,r=e.y,o=e.attrs,a=e.handlePointerDown,l=e.handlePointerMove,c=e.handlePointerUp,u=(null!=o?o:R).type,h=void 0===u?R.type:u,m=d.useRef(null),f=i(d.useState({width:25,height:25}),2),x=f[0],p=f[1];d.useEffect((function(){return p(m.current.getBBox())}),[h,p,m]);var g=d.useCallback((function(e){return a(n,e)}),[n,a]),y=d.useCallback((function(e){return l(n,e)}),[n,l]),v=d.useCallback((function(e){return c(n,e)}),[n,c]);return d.useMemo((function(){return s.jsx("g",{id:n,transform:"translate(".concat(t-x.width/2,", ").concat(r-x.height/2,")"),children:s.jsx("image",{ref:m,href:"/rmp/"+"/images/facilities/".concat(h,".svg"),onLoad:function(){return p(m.current.getBBox())},onPointerDown:g,onPointerMove:y,onPointerUp:v,style:{cursor:"move"}})})}),[n,t,r,h,x,g,y,v])},icon:s.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:s.jsxs("g",{transform:"translate(12, 0)scale(0.4)",children:[s.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"currentColor"}),s.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]})}),defaultAttrs:R,fields:H,metadata:{displayName:"panel.details.nodes.facilities.displayName",tags:[]}},F={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[a.Shanghai,"jsr","#000000",l.white],rotate:0,italic:!1},Z=[{type:"textarea",label:"panel.details.nodes.text.content",value:function(e){return(null!=e?e:F).content},onChange:function(e,n){var t=null!=n?n:F;return t.content=e.toString(),t}},{type:"input",label:"panel.details.nodes.text.fontSize",value:function(e){return(null!=e?e:F).fontSize},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,n){var t=null!=n?n:F;return t.fontSize=Number(e),t}},{type:"input",label:"panel.details.nodes.text.lineHeight",value:function(e){return(null!=e?e:F).lineHeight},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,n){var t=null!=n?n:F;return t.lineHeight=Number(e),t}},{type:"select",label:"panel.details.nodes.text.textAnchor",value:function(e){return(null!=e?e:F).textAnchor},options:{start:"start",middle:"middle",end:"end"},onChange:function(e,n){var t=null!=n?n:F;return t.textAnchor=e,t}},{type:"select",label:"panel.details.nodes.text.dominantBaseline",value:function(e){return(null!=e?e:F).dominantBaseline},options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:function(e,n){var t=null!=n?n:F;return t.dominantBaseline=e,t}},{type:"select",label:"panel.details.nodes.text.language",value:function(e){return(null!=e?e:F).language},options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:function(e,n){var t=null!=n?n:F;return t.language=e.toString(),t}},{type:"select",label:"panel.details.nodes.text.rotate",value:function(e){var n;return null!==(n=null==e?void 0:e.rotate)&&void 0!==n?n:F.rotate},options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:function(e,n){var t=null!=n?n:F;return t.rotate=Number(e),t}},{type:"switch",label:"panel.details.nodes.text.italic",isChecked:function(e){var n;return null!==(n=null==e?void 0:e.italic)&&void 0!==n?n:F.italic},onChange:function(e,n){var t=null!=n?n:F;return t.italic=e,t}},{type:"custom",component:s.jsx(c,{type:u.Text,defaultAttrs:F})}],G={component:function(e){var n=e.id,t=e.x,r=e.y,o=e.attrs,a=e.handlePointerDown,l=e.handlePointerMove,c=e.handlePointerUp,u=null!=o?o:F,m=u.content,f=void 0===m?F.content:m,x=u.fontSize,p=void 0===x?F.fontSize:x,g=u.lineHeight,y=void 0===g?F.lineHeight:g,v=u.textAnchor,b=void 0===v?F.textAnchor:v,j=u.dominantBaseline,w=void 0===j?F.dominantBaseline:j,S=u.language,N=void 0===S?F.language:S,B=u.color,P=void 0===B?F.color:B,C=u.rotate,z=void 0===C?F.rotate:C,A=u.italic,_=void 0===A?F.italic:A,k=d.useRef(null),M=i(d.useState({x:0,y:0,width:32,height:16}),2),L=M[0],D=M[1];d.useEffect((function(){return D(k.current.getBBox())}),[f,b,w,D,k]);var O=d.useCallback((function(e){return a(n,e)}),[n,a]),U=d.useCallback((function(e){return l(n,e)}),[n,l]),E=d.useCallback((function(e){return c(n,e)}),[n,c]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(r,")rotate(").concat(z,")"),children:[s.jsx(h,{ref:k,text:f.split("\n"),lineHeight:y,grow:"down",className:"rmp-name-station rmp-name__".concat(N),fontSize:p,textAnchor:b,dominantBaseline:w,fill:P[2],fontStyle:_?"italic":"normal"}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:L.x-1.5,y:L.y-1.5,width:L.width+3,height:L.height+3,onPointerDown:O,onPointerMove:U,onPointerUp:E,style:{cursor:"move"}})]})}),[n,t,r,f,p,y,b,w,N,P,z,_,L,O,U,E])},icon:s.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:s.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),defaultAttrs:F,fields:Z,metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},$={num:1,color:[a.Berlin,"bu1","#62AD2D",l.white]},V=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:$).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:$;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.BerlinUBahnLineBadge,defaultAttrs:$})}],q={component:function(e){var n=e.id,t=e.x,i=e.y,o=e.attrs,a=e.handlePointerDown,l=e.handlePointerMove,c=e.handlePointerUp,u=null!=o?o:$,h=u.num,m=void 0===h?$.num:h,f=u.color,x=void 0===f?$.color:f,p=d.useCallback((function(e){return a(n,e)}),[n,a]),g=d.useCallback((function(e){return l(n,e)}),[n,l]),y=d.useCallback((function(e){return c(n,e)}),[n,c]),v=x[3];return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx("rect",{fill:x[2],x:"0",width:"25",height:"15"}),s.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:v,fontSize:"14",letterSpacing:"1",children:["U",m]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"25",height:"15",onPointerDown:p,onPointerMove:g,onPointerUp:y,style:{cursor:"move"}})]})}),[n,t,i,m].concat(r(x),[p,g,y]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),s.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),defaultAttrs:$,fields:V,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},J={num:1,color:[a.Berlin,"bs1","#DD6CA6",l.white]},K=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:J).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:J;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.BerlinSBahnLineBadge,defaultAttrs:J})}],Q={component:function(e){var n=e.id,t=e.x,o=e.y,a=e.attrs,l=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=a?a:J,m=h.num,f=void 0===m?J.num:m,x=h.color,p=void 0===x?J.color:x,g=i(f>=10?[6,19.75]:[10,20],2),y=g[0],v=g[1],b=d.useCallback((function(e){return l(n,e)}),[n,l]),j=d.useCallback((function(e){return c(n,e)}),[n,c]),w=d.useCallback((function(e){return u(n,e)}),[n,u]),S=p[3];return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(o,")"),children:[s.jsx("rect",{fill:p[2],x:"0",width:"30",height:"15",rx:"8"}),s.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:y,y:"12.5",fill:S,fontSize:"14",letterSpacing:"0",children:"S"}),s.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:v,y:"12.5",fill:S,fontSize:"14",letterSpacing:"-0.2",children:f}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"30",height:"15",onPointerDown:b,onPointerMove:j,onPointerUp:w,style:{cursor:"move"}})]})}),[n,t,o,f].concat(r(p),[b,j,w]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),s.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),defaultAttrs:J,fields:K,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}};e("m",(t(m={},u.Virtual,f),t(m,u.ShmetroNumLineBadge,g),t(m,u.ShmetroTextLineBadge,b),t(m,u.GzmtrLineBadge,z),t(m,u.BjsubwayNumLineBadge,M),t(m,u.BjsubwayTextLineBadge,O),t(m,u.SuzhouRTNumLineBadge,T),t(m,u.BerlinSBahnLineBadge,Q),t(m,u.BerlinUBahnLineBadge,q),t(m,u.Facilities,I),t(m,u.Text,G),m))}}}))}();
