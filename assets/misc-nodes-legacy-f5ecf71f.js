!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function t(n,t,r){return(t=function(n){var t=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,t||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===e(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l,o,a=[],c=!0,u=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=l.call(t)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(s){u=!0,i=s}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}(e,n)||l(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-00b07dde.js","./chakra-legacy-99ea1e3b.js","./react-legacy-57266490.js","./stations-legacy-409a28b0.js"],(function(e,l){"use strict";var o,a,c,u,s,d,h,m;return{setters:[function(e){o=e.C,a=e.e,c=e.al,u=e.d},function(e){s=e.j},function(e){d=e.b},function(e){h=e.M,m=e.f}],execute:function(){var l,f={component:function(e){var n=e.id,t=e.x,r=e.y,i=e.handlePointerDown,l=e.handlePointerMove,o=e.handlePointerUp,a=d.useCallback((function(e){return i(n,e)}),[n,i]),c=d.useCallback((function(e){return l(n,e)}),[n,l]),u=d.useCallback((function(e){return o(n,e)}),[n,o]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(r,")rotate(45)"),children:[s.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),s.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),s.jsx("circle",{id:"virtual_circle_".concat(n),r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:a,onPointerMove:c,onPointerUp:u,style:{cursor:"move"}})]})}),[n,t,r,a,c,u])},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[s.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),s.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),s.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},fields:[],metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},x={num:1,color:[o.Shanghai,"sh1","#E4002B",a.white]},p=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:x).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:x;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.ShmetroNumLineBadge,defaultAttrs:x})}],g={component:function(e){var n=e.id,t=e.x,l=e.y,o=e.attrs,a=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=o?o:x,m=h.num,f=void 0===m?x.num:m,p=h.color,g=void 0===p?x.color:p,y=i(f>=10?[22.67,10.75]:[21,10],2),v=y[0],b=y[1],j=d.useCallback((function(e){return a(n,e)}),[n,a]),w=d.useCallback((function(e){return c(n,e)}),[n,c]),S=d.useCallback((function(e){return u(n,e)}),[n,u]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(l,")"),children:[s.jsx("rect",{fill:g[2],width:v,height:"22.67"}),s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:b,y:"19",fill:g[3],fontSize:"21.33",letterSpacing:"-1.75",children:f}),s.jsx("text",{className:"rmp-name__zh",x:v+2,y:"12",fontSize:"14.67",children:"号线"}),s.jsxs("text",{className:"rmp-name__en",x:v+4,y:"21.5",fontSize:"8",children:["Line ",f]}),s.jsx("rect",{fill:"white",fillOpacity:"0",width:v,height:"22.67",onPointerDown:j,onPointerMove:w,onPointerUp:S,style:{cursor:"move"}})]})}),[n,t,l,f].concat(r(g),[j,w,S]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),s.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),s.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),s.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:x,fields:p,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},y={names:["浦江线","Pujiang Line"],color:[o.Shanghai,"pjl","#B5B5B6",a.white]},v=[{type:"input",label:"panel.details.nodes.common.nameZh",value:function(e){return(null!=e?e:y).names[0]},onChange:function(e,n){var t=null!=n?n:y;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:function(e){return(null!=e?e:y).names[1]},onChange:function(e,n){var t=null!=n?n:y;return t.names[1]=e.toString(),t}},{type:"custom",component:s.jsx(c,{type:u.ShmetroTextLineBadge,defaultAttrs:y})}],b={component:function(e){var n=e.id,t=e.x,l=e.y,o=e.attrs,a=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=o?o:y,m=h.names,f=void 0===m?y.names:m,x=h.color,p=void 0===x?y.color:x,g=d.useRef(null),v=i(d.useState({width:12}),2),b=v[0],j=v[1];d.useEffect((function(){return j(g.current.getBBox())}),[].concat(r(f),[j,g]));var w=d.useCallback((function(e){return a(n,e)}),[n,a]),S=d.useCallback((function(e){return c(n,e)}),[n,c]),N=d.useCallback((function(e){return u(n,e)}),[n,u]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(l,")"),children:[s.jsx("rect",{fill:p[2],x:"0",width:b.width+7,height:"21"}),s.jsxs("g",{ref:g,children:[s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(b.width+7)/2,y:"4",fontSize:"10",fill:p[3],letterSpacing:"-0.25",children:f[0]}),s.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(b.width+7)/2,y:"13",fontSize:"5",fill:p[3],letterSpacing:"-0.25",children:f[1]})]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:b.width+7,height:"21",onPointerDown:w,onPointerMove:S,onPointerUp:N,style:{cursor:"move"}})]})}),[n,t,l].concat(r(f),[b],r(p),[w,S,N]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),s.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),s.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:y,fields:v,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},j=function(e){var n=e.lineName,t=e.commonPart,r=d.useRef(null),l=i(d.useState({x:0,height:0,width:0}),2),o=l[0],a=l[1];d.useEffect((function(){r.current&&a(r.current.getBBox())}),[n.toString()]);var c=S/Math.max(S,o.width),u=(-o.x-o.width/2)*c,h=o.height*(1-c)*1.2/2;return s.jsx("g",{ref:r,transform:"translate(".concat(u,",").concat(h,")scale(").concat(c,")"),children:s.jsxs("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",dominantBaseline:"central",children:[t,s.jsx("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",dominantBaseline:"central",children:n[0].slice(t.length).trim()}),s.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",dominantBaseline:"central",children:n[1].slice(t.length).trim()})]})})},w=function(e){return s.jsx("rect",function(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({x:-22.5,height:24,width:45,rx:4.5},e))},S=42,N=function(e){var n=e.lineName,t=e.foregroundColour,r=e.backgroundColour,l=e.passed,o=i(B(n),2),c=o[0],u=o[1],h=d.useRef(null),m=d.useRef(null),f=i(d.useState({width:0}),2),x=f[0],p=f[1],g=i(d.useState({width:0}),2),y=g[0],v=g[1];d.useEffect((function(){h.current&&p(h.current.getBBox()),m.current&&v(m.current.getBBox())}),[n.toString()]);var b=S/Math.max(S,x.width),N=S/Math.max(S,y.width),P={nameZh:{y:7.3+13.5*(1-b)*b/2},nameEn:{y:19.5-9*(1-N)*N/2}};return s.jsxs("g",{textAnchor:"middle",fill:l?a.white:t,children:[s.jsx(w,{fill:l?"#aaa":r}),2===c?s.jsx(j,{lineName:n,commonPart:u}):s.jsxs(s.Fragment,{children:[s.jsx("text",{ref:h,className:"rmp-name__zh",fontSize:12,transform:"translate(0,".concat(P.nameZh.y,")scale(").concat(b,")"),dominantBaseline:"central",children:1===c?s.jsxs(s.Fragment,{children:[s.jsx("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:u}),s.jsx("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:n[0].slice(u.length)})]}):n[0]}),s.jsx("text",{ref:m,className:"rmp-name__en",fontSize:8,transform:"translate(0,".concat(P.nameEn.y,")scale(").concat(N,")"),dominantBaseline:"middle",children:n[1]})]})]})},B=function(e){var n=e[0].match(/^(\d+)\D+$/);if(n)return[1,n[1]];var t=e.map((function(e){return e.match(/^(\w+).+$/)}));return t[0]&&t[1]&&t[0][1]===t[1][1]?[2,t[0][1]]:[3,""]},P={names:["1号线","Line 1"],color:[o.Guangzhou,"gz1","#F3D03E",a.black]},C=[{type:"input",label:"panel.details.nodes.common.nameZh",value:function(e){return(null!=e?e:P).names[0]},onChange:function(e,n){var t=null!=n?n:P;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:function(e){return(null!=e?e:P).names[1]},onChange:function(e,n){var t=null!=n?n:P;return t.names[1]=e.toString(),t}},{type:"custom",component:s.jsx(c,{type:u.GzmtrLineBadge,defaultAttrs:P})}],z={component:function(e){var n=e.id,t=e.x,i=e.y,l=e.attrs,o=e.handlePointerDown,a=e.handlePointerMove,c=e.handlePointerUp,u=null!=l?l:P,h=u.names,m=void 0===h?P.names:h,f=u.color,x=void 0===f?P.color:f,p=d.useCallback((function(e){return o(n,e)}),[n,o]),g=d.useCallback((function(e){return a(n,e)}),[n,a]),y=d.useCallback((function(e){return c(n,e)}),[n,c]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx(N,{lineName:m,foregroundColour:x[3],backgroundColour:x[2]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:p,onPointerMove:g,onPointerUp:y,style:{cursor:"move"}})]})}),[n,t,i].concat(r(m),r(x),[p,g,y]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),s.jsx("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1号线"}),s.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),defaultAttrs:P,fields:C,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},A=11.84375,_={num:1,color:[o.Beijing,"bj1","#c23a30",a.white]},k=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:_).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:_;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.BjsubwayNumLineBadge,defaultAttrs:_})}],M={component:function(e){var n=e.id,t=e.x,i=e.y,l=e.attrs,o=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=l?l:_,m=h.num,f=void 0===m?_.num:m,x=h.color,p=void 0===x?_.color:x,g=d.useCallback((function(e){return o(n,e)}),[n,o]),y=d.useCallback((function(e){return c(n,e)}),[n,c]),v=d.useCallback((function(e){return u(n,e)}),[n,u]),b=p[3]===a.black?"#003670":a.white;return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx("rect",{fill:p[2],x:"0",width:32.84375,height:"16",rx:"2"}),s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:7.921875,y:"13.5",fill:b,fontSize:"15",letterSpacing:"-1.5",children:f}),s.jsx("text",{className:"rmp-name__zh",x:A+(f>9?5.5:3),y:"8.5",fontSize:"7",fill:b,children:"号线"}),s.jsxs("text",{className:"rmp-name__en",x:A+(f>9?6:4.5),y:"13.5",fontSize:"4",fill:b,children:["Line ",f]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:34.84375,height:"16",rx:"2",onPointerDown:g,onPointerMove:y,onPointerUp:v,style:{cursor:"move"}})]})}),[n,t,i,f].concat(r(p),[g,y,v]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),s.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),s.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),s.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:_,fields:k,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},L={names:["八通线","Batong Line"],color:[o.Beijing,"bj1","#c23a30",a.white]},O=[{type:"input",label:"panel.details.nodes.common.nameZh",value:function(e){return(null!=e?e:L).names[0]},onChange:function(e,n){var t=null!=n?n:L;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:function(e){return(null!=e?e:L).names[1]},onChange:function(e,n){var t=null!=n?n:L;return t.names[1]=e.toString(),t}},{type:"custom",component:s.jsx(c,{type:u.BjsubwayTextLineBadge,defaultAttrs:L})}],D={component:function(e){var n=e.id,t=e.x,l=e.y,o=e.attrs,c=e.handlePointerDown,u=e.handlePointerMove,h=e.handlePointerUp,m=null!=o?o:L,f=m.names,x=void 0===f?L.names:f,p=m.color,g=void 0===p?L.color:p,y=d.useRef(null),v=i(d.useState({width:12}),2),b=v[0],j=v[1];d.useEffect((function(){return j(y.current.getBBox())}),[].concat(r(x),[j,y]));var w=d.useCallback((function(e){return c(n,e)}),[n,c]),S=d.useCallback((function(e){return u(n,e)}),[n,u]),N=d.useCallback((function(e){return h(n,e)}),[n,h]),B=Math.max(28.84375,b.width),P=g[3]===a.black?"#003670":a.white;return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(l,")"),children:[s.jsx("rect",{fill:g[2],x:"0",width:B+4,height:"16",rx:"2"}),s.jsxs("g",{ref:y,children:[s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(B+4)/2,y:"8",fontSize:"7",fill:P,children:x[0]}),s.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(B+4)/2,y:"13.5",fontSize:"4",fill:P,children:x[1]})]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:B+3,height:"16",rx:"2",onPointerDown:w,onPointerMove:S,onPointerUp:N,style:{cursor:"move"}})]})}),[n,t,l].concat(r(x),[b],r(g),[w,S,N]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),s.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),s.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:L,fields:O,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},U={num:1,branch:!1,color:[o.Suzhou,"sz1","#78BA25",a.white]},E=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:U).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:U;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:function(e){var n;return null!==(n=null==e?void 0:e.branch)&&void 0!==n?n:U.branch},onChange:function(e,n){var t=null!=n?n:U;return t.branch=e,t}},{type:"custom",component:s.jsx(c,{type:u.SuzhouRTNumLineBadge,defaultAttrs:U})}],T={component:function(e){var n=e.id,t=e.x,i=e.y,l=e.attrs,o=e.handlePointerDown,a=e.handlePointerMove,c=e.handlePointerUp,u=null!=l?l:U,h=u.num,m=void 0===h?U.num:h,f=u.branch,x=void 0===f?U.branch:f,p=u.color,g=void 0===p?U.color:p,y=d.useCallback((function(e){return o(n,e)}),[n,o]),v=d.useCallback((function(e){return a(n,e)}),[n,a]),b=d.useCallback((function(e){return c(n,e)}),[n,c]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx("rect",{fill:g[2],width:"20",height:"20",rx:"2",ry:"2"}),s.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:g[3],fontSize:"15",letterSpacing:"-1",children:m}),x&&s.jsxs(s.Fragment,{children:[s.jsx("text",{className:"rmp-name__zh",x:22.5,y:"10",fontSize:"10",children:"支线"}),s.jsx("text",{className:"rmp-name__en",x:22.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]}),s.jsx("rect",{fill:"white",fillOpacity:"0",width:"20",height:"20",rx:"2",ry:"2",onPointerDown:y,onPointerMove:v,onPointerUp:b,style:{cursor:"move"}})]})}),[n,t,i,m,x].concat(r(g),[y,v,b]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),s.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:U,fields:E,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},R={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[o.Shanghai,"jsr","#000000",a.white],rotate:0,italic:"normal",bold:"normal"},H=[{type:"textarea",label:"panel.details.nodes.text.content",value:function(e){return(null!=e?e:R).content},onChange:function(e,n){var t=null!=n?n:R;return t.content=e.toString(),t}},{type:"input",label:"panel.details.nodes.text.fontSize",value:function(e){return(null!=e?e:R).fontSize},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,n){var t=null!=n?n:R;return t.fontSize=Number(e),t}},{type:"input",label:"panel.details.nodes.text.lineHeight",value:function(e){return(null!=e?e:R).lineHeight},validator:function(e){return Number.isInteger(e)&&Number(e)>0},onChange:function(e,n){var t=null!=n?n:R;return t.lineHeight=Number(e),t}},{type:"select",label:"panel.details.nodes.text.textAnchor",value:function(e){return(null!=e?e:R).textAnchor},options:{start:"start",middle:"middle",end:"end"},onChange:function(e,n){var t=null!=n?n:R;return t.textAnchor=e,t}},{type:"select",label:"panel.details.nodes.text.dominantBaseline",value:function(e){return(null!=e?e:R).dominantBaseline},options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:function(e,n){var t=null!=n?n:R;return t.dominantBaseline=e,t}},{type:"select",label:"panel.details.nodes.text.language",value:function(e){return(null!=e?e:R).language},options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:function(e,n){var t=null!=n?n:R;return t.language=e.toString(),t}},{type:"select",label:"panel.details.nodes.text.rotate",value:function(e){var n;return null!==(n=null==e?void 0:e.rotate)&&void 0!==n?n:R.rotate},options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:function(e,n){var t=null!=n?n:R;return t.rotate=Number(e),t}},{type:"switch",label:"panel.details.nodes.text.italic",isChecked:function(e){var n;return"italic"===(null!==(n=null==e?void 0:e.italic)&&void 0!==n?n:R.italic)},onChange:function(e,n){var t=null!=n?n:R;return t.italic=e?"italic":"normal",t}},{type:"switch",label:"panel.details.nodes.text.bold",isChecked:function(e){var n;return"bold"===(null!==(n=null==e?void 0:e.bold)&&void 0!==n?n:R.bold)},onChange:function(e,n){var t=null!=n?n:R;return t.bold=e?"bold":"normal",t}},{type:"custom",component:s.jsx(c,{type:u.Text,defaultAttrs:R})}],I={component:function(e){var n=e.id,t=e.x,r=e.y,l=e.attrs,o=e.handlePointerDown,a=e.handlePointerMove,c=e.handlePointerUp,u=null!=l?l:R,m=u.content,f=void 0===m?R.content:m,x=u.fontSize,p=void 0===x?R.fontSize:x,g=u.lineHeight,y=void 0===g?R.lineHeight:g,v=u.textAnchor,b=void 0===v?R.textAnchor:v,j=u.dominantBaseline,w=void 0===j?R.dominantBaseline:j,S=u.language,N=void 0===S?R.language:S,B=u.color,P=void 0===B?R.color:B,C=u.rotate,z=void 0===C?R.rotate:C,A=u.italic,_=void 0===A?R.italic:A,k=u.bold,M=void 0===k?R.bold:k,L=d.useRef(null),O=i(d.useState({x:0,y:0,width:32,height:16}),2),D=O[0],U=O[1];d.useEffect((function(){return U(L.current.getBBox())}),[f,b,w,U,L]);var E=d.useCallback((function(e){return o(n,e)}),[n,o]),T=d.useCallback((function(e){return a(n,e)}),[n,a]),H=d.useCallback((function(e){return c(n,e)}),[n,c]);return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(r,")rotate(").concat(z,")"),children:[s.jsx(h,{ref:L,text:f.split("\n"),lineHeight:y,grow:"down",className:"rmp-name__".concat(N),fontSize:p,textAnchor:b,dominantBaseline:w,fill:P[2],fontStyle:_,fontWeight:M}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:D.x-1.5,y:D.y-1.5,width:D.width+3,height:D.height+3,onPointerDown:E,onPointerMove:T,onPointerUp:H,style:{cursor:"move"}})]})}),[n,t,r,f,p,y,b,w,N,P,z,_,M,D,E,T,H])},icon:s.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:s.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),defaultAttrs:R,fields:H,metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},F={num:1,color:[o.Berlin,"bu1","#62AD2D",a.white]},Z=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:F).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:F;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.BerlinUBahnLineBadge,defaultAttrs:F})}],G={component:function(e){var n=e.id,t=e.x,i=e.y,l=e.attrs,o=e.handlePointerDown,a=e.handlePointerMove,c=e.handlePointerUp,u=null!=l?l:F,h=u.num,m=void 0===h?F.num:h,f=u.color,x=void 0===f?F.color:f,p=d.useCallback((function(e){return o(n,e)}),[n,o]),g=d.useCallback((function(e){return a(n,e)}),[n,a]),y=d.useCallback((function(e){return c(n,e)}),[n,c]),v=x[3];return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(i,")"),children:[s.jsx("rect",{fill:x[2],x:"0",width:"25",height:"15"}),s.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:v,fontSize:"14",letterSpacing:"1",children:["U",m]}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"25",height:"15",onPointerDown:p,onPointerMove:g,onPointerUp:y,style:{cursor:"move"}})]})}),[n,t,i,m].concat(r(x),[p,g,y]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),s.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),defaultAttrs:F,fields:Z,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},$={num:1,color:[o.Berlin,"bs1","#DD6CA6",a.white]},V=[{type:"input",label:"panel.details.nodes.common.num",value:function(e){return(null!=e?e:$).num},validator:function(e){return!Number.isNaN(e)},onChange:function(e,n){var t=null!=n?n:$;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",component:s.jsx(c,{type:u.BerlinSBahnLineBadge,defaultAttrs:$})}],W={component:function(e){var n=e.id,t=e.x,l=e.y,o=e.attrs,a=e.handlePointerDown,c=e.handlePointerMove,u=e.handlePointerUp,h=null!=o?o:$,m=h.num,f=void 0===m?$.num:m,x=h.color,p=void 0===x?$.color:x,g=i(f>=10?[6,19.75]:[10,20],2),y=g[0],v=g[1],b=d.useCallback((function(e){return a(n,e)}),[n,a]),j=d.useCallback((function(e){return c(n,e)}),[n,c]),w=d.useCallback((function(e){return u(n,e)}),[n,u]),S=p[3];return d.useMemo((function(){return s.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(l,")"),children:[s.jsx("rect",{fill:p[2],x:"0",width:"30",height:"15",rx:"8"}),s.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:y,y:"12.5",fill:S,fontSize:"14",letterSpacing:"0",children:"S"}),s.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:v,y:"12.5",fill:S,fontSize:"14",letterSpacing:"-0.2",children:f}),s.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"30",height:"15",onPointerDown:b,onPointerMove:j,onPointerUp:w,style:{cursor:"move"}})]})}),[n,t,l,f].concat(r(p),[b,j,w]))},icon:s.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[s.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),s.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),defaultAttrs:$,fields:V,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}};e("m",(t(l={},u.Virtual,f),t(l,u.ShmetroNumLineBadge,g),t(l,u.ShmetroTextLineBadge,b),t(l,u.GzmtrLineBadge,z),t(l,u.BjsubwayNumLineBadge,M),t(l,u.BjsubwayTextLineBadge,D),t(l,u.SuzhouRTNumLineBadge,T),t(l,u.BerlinSBahnLineBadge,W),t(l,u.BerlinUBahnLineBadge,G),t(l,u.Facilities,m),t(l,u.Text,I),l))}}}))}();
