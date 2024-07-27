import{a6 as q,j as e,g as f,O as r,aM as F,aN as v,aO as I,B as T,aP as g,aQ as M,a4 as W,aK as _,b1 as C,a7 as N,aE as G}from"./chakra-D_OByU5d.js";import{u as R,b}from"./react-BuIY-1St.js";import{I as K}from"./index-BYkketBX.js";import{e as V,a as P,ap as Q,aq as U,ar as X,ac as u,T as J,G as Y,k as E,l as $,ag as o,S as Z,as as ee,d as se,a7 as ae,at as te}from"./index-yHix0TR-.js";import{m as x}from"./misc-nodes-DMvgc6Fc.js";import{s as O}from"./stations-Cj1f8Yjt.js";const c={justifyContent:"flex-start",p:0,w:"100%",h:10},w={p:2.5,h:10},A={p:0,display:"flex",flexDirection:"column"},oe=e.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:e.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeDasharray:"2",fill:"none"})}),B=.3,xe=()=>{const{t:n}=R(),a=V(),{mode:l,theme:h,paletteAppClip:{output:i}}=P(s=>s.runtime),{preference:{unlockSimplePathAttempts:p,toolsPanel:{expand:d}}}=P(s=>s.app),m=q("white","var(--chakra-colors-gray-800)"),[L,S]=b.useState(!1);b.useEffect(()=>{L&&i&&(a(Q(i)),S(!1))},[i==null?void 0:i.toString()]);const[t,k]=b.useState(d),y=()=>{d?k(!1):setTimeout(()=>k(!0),(B+.02)*1e3),a(te(!d))},z=s=>a(u("station-".concat(s))),H=s=>a(u("line-".concat(s))),j=s=>a(u("misc-node-".concat(s)));return e.jsxs(f,{flexShrink:"0",direction:"column",width:d?450:10,maxWidth:"100%",height:"100%",bg:m,zIndex:"5",transition:"width ".concat(B,"s ease-in-out"),children:[e.jsx(r,{"aria-label":"Menu",leftIcon:t?e.jsx(U,{size:40,transform:"rotate(90)"}):e.jsx(X,{size:40,transform:"rotate(90)"}),onClick:y,sx:c,children:t?n("panel.tools.showLess"):void 0}),e.jsx(f,{className:"tools",overflow:"auto",children:e.jsxs(F,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[e.jsx(r,{"aria-label":"select",leftIcon:oe,onClick:()=>a(u(l==="select"?"free":"select")),variant:l==="select"?"solid":"outline",sx:c,children:t?n("panel.tools.select"):void 0}),e.jsxs(v,{children:[e.jsxs(I,{sx:w,children:[t&&e.jsx(T,{as:"span",flex:"1",textAlign:"left",children:n("panel.tools.section.lineDrawing")}),e.jsx(g,{})]}),e.jsxs(M,{sx:A,children:[e.jsxs(f,{children:[e.jsx(J,{theme:h,onClick:()=>{S(!0),a(Y(h))}}),e.jsx(W,{fontWeight:"600",pl:"1",alignSelf:"center",children:t?n("color"):void 0})]}),Object.values(E).filter(s=>!(s===E.Simple&&p>=0)).map(s=>e.jsx(r,{"aria-label":s,leftIcon:$[s].icon,onClick:()=>H(s),variant:l==="line-".concat(s)?"solid":"outline",sx:c,children:t?n($[s].metadata.displayName):void 0},s)),e.jsx(r,{"aria-label":o.Virtual,leftIcon:x[o.Virtual].icon,onClick:()=>j(o.Virtual),variant:l==="misc-node-".concat(o.Virtual)?"solid":"outline",sx:c,children:t?n(x[o.Virtual].metadata.displayName):void 0}),e.jsx(r,{"aria-label":o.Master,leftIcon:x[o.Master].icon,onClick:()=>j(o.Master),variant:l==="misc-node-".concat(o.Master)?"solid":"outline",sx:c,children:t?n(x[o.Master].metadata.displayName):void 0})]})]}),e.jsxs(v,{children:[e.jsxs(I,{sx:w,children:[t&&e.jsx(T,{as:"span",flex:"1",textAlign:"left",children:n("panel.tools.section.stations")}),e.jsx(g,{})]}),e.jsxs(M,{sx:A,children:[Object.values(Z).map(s=>e.jsx(r,{"aria-label":s,leftIcon:O[s].icon,onClick:()=>z(s),variant:l==="station-".concat(s)?"solid":"outline",sx:c,children:t?n(O[s].metadata.displayName):void 0},s)),e.jsx(D,{type:"station",expand:t})]})]}),e.jsxs(v,{children:[e.jsxs(I,{sx:w,children:[t&&e.jsx(T,{as:"span",flex:"1",textAlign:"left",children:n("panel.tools.section.miscellaneousNodes")}),e.jsx(g,{})]}),e.jsxs(M,{sx:A,children:[Object.values(o).filter(s=>s!==o.Virtual&&s!==o.I18nText&&s!==o.Master).map(s=>e.jsx(r,{"aria-label":s,leftIcon:x[s].icon,onClick:()=>j(s),variant:l==="misc-node-".concat(s)?"solid":"outline",sx:c,children:t?n(x[s].metadata.displayName):void 0},s)),e.jsx(D,{type:"misc-node",expand:t})]})]})]})})]})},D=n=>{const{type:a,expand:l}=n,{t:h}=R(),i=V(),p=a==="misc-node"?"nodes":a==="station"?"stations":"line-styles",d=a==="line"?"xs":void 0,m=a==="line"?"30px":"40px";return e.jsxs(_,{fontSize:d,children:[a!=="line"&&e.jsx(C.Provider,{value:{style:{padding:5},size:m},children:e.jsx(ee,{})}),l&&e.jsxs(e.Fragment,{children:[e.jsx(N,{color:"teal.500",href:"https://github.com/railmapgen/rmp/blob/main/docs/".concat(p,".md"),isExternal:!0,children:h("panel.tools.learnHowToAdd.".concat(a))}),e.jsx(G,{as:se,color:"teal.500",mr:"auto"}),e.jsx(N,{color:"teal.500",onClick:()=>i(ae(!0)),isExternal:!0,children:h("panel.tools.learnHowToAdd.donate")}),a!=="line"&&e.jsx(C.Provider,{value:{style:{padding:5},color:"red",size:m},children:e.jsx(K,{})})]})]})};export{D as LearnHowToAdd,xe as default};
