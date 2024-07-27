System.register(["./index-legacy-DkdFt2uq.js","./chakra-legacy-D81yMKcS.js","./react-legacy-CLSeZSow.js","./stations-legacy-NXMzxqKP.js"],(function(e,n){"use strict";var t,l,o,a,r,i,s,d,c,m,u,h,x,p,f,g,y,j,b,v,w,N,C,S,P,B,_,z,k,L,M,A,T,U,$,D,E,I,O;return{setters:[e=>{t=e.au,l=e.C,o=e.b,a=e.av,r=e.ag,i=e.i,s=e.Z,d=e.R,c=e.a,m=e.e,u=e.z,h=e.c,x=e.aw,p=e.p,f=e.t,g=e.a8,y=e.T,j=e.G},e=>{b=e.j,v=e.at,w=e.$,N=e.au,C=e.a1,S=e.a2,P=e.a3,B=e.a5,_=e.O,z=e.aL,k=e.g},e=>{L=e.b,M=e.u},e=>{A=e.L,T=e.M,U=e.o,$=e.t,D=e.q,E=e.v,I=e.d,O=e.w}],execute:function(){const n={component:e=>{const{id:n,x:t,y:l,handlePointerDown:o,handlePointerMove:a,handlePointerUp:r}=e,i=L.useCallback((e=>o(n,e)),[n,o]),s=L.useCallback((e=>a(n,e)),[n,a]),d=L.useCallback((e=>r(n,e)),[n,r]);return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})rotate(45)`,onPointerDown:i,onPointerMove:s,onPointerUp:d,style:{cursor:"move"},children:[b.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),b.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),b.jsx("circle",{id:`virtual_circle_${n}`,r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[b.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),b.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),b.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},attrsComponent:()=>b.jsx(t,{fields:[]}),metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},R={num:1,color:[l.Shanghai,"sh1","#E4002B",o.white]},W=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:R).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:R;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.ShmetroNumLineBadge,defaultTheme:R.color})}],F={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{num:s=R.num,color:d=R.color}=null!=o?o:R,[c,m]=s>=10?[22.67,10.75]:[21,10],u=L.useCallback((e=>a(n,e)),[n,a]),h=L.useCallback((e=>r(n,e)),[n,r]),x=L.useCallback((e=>i(n,e)),[n,i]);return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:h,onPointerUp:x,style:{cursor:"move"},children:[b.jsx("rect",{fill:d[2],width:c,height:"22.67"}),b.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:m,y:"19",fill:d[3],fontSize:"21.33",letterSpacing:"-1.75",children:s}),b.jsx("text",{className:"rmp-name__zh",x:c+2,y:"12",fontSize:"14.67",children:"号线"}),b.jsxs("text",{className:"rmp-name__en",x:c+4,y:"21.5",fontSize:"8",children:["Line ",s]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),b.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),b.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),b.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:R,attrsComponent:()=>b.jsx(t,{fields:W}),metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},q={names:["浦江线","Pujiang Line"],color:[l.Shanghai,"pjl","#B5B5B6",o.white]},V={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{names:s=q.names,color:d=q.color}=null!=o?o:q,c=L.useRef(null),[m,u]=L.useState({width:12});L.useEffect((()=>u(c.current.getBBox())),[...s,u,c]);const h=L.useCallback((e=>a(n,e)),[n,a]),x=L.useCallback((e=>r(n,e)),[n,r]),p=L.useCallback((e=>i(n,e)),[n,i]);return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[b.jsx("rect",{fill:d[2],x:"0",width:m.width+7,height:"21"}),b.jsxs("g",{ref:c,children:[b.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(m.width+7)/2,y:"4",fontSize:"10",fill:d[3],letterSpacing:"-0.25",children:s[0]}),b.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(m.width+7)/2,y:"13",fontSize:"5",fill:d[3],letterSpacing:"-0.25",children:s[1]})]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),b.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),b.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:q,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:o}=M(),s=[{type:"textarea",label:o("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:e=>{t.names[0]=e,l(n,t)},minW:"full"},{type:"input",label:o("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:e=>{t.names[1]=e,l(n,t)},minW:"full"},{type:"custom",label:o("color"),component:b.jsx(a,{type:r.ShmetroTextLineBadge,defaultTheme:q.color})}];return b.jsx(i,{fields:s})},metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},J={names:["1号线","Line 1"],color:[l.Guangzhou,"gz1","#F3D03E",o.black],tram:!1,span:!0},Q={component:e=>{var n,t;const{id:l,x:o,y:a,attrs:r,handlePointerDown:i,handlePointerMove:s,handlePointerUp:d}=e,{names:c=J.names,color:m=J.color,tram:u=J.tram,span:h=J.span}=null!=r?r:J,x=L.useCallback((e=>i(l,e)),[l,i]),p=L.useCallback((e=>s(l,e)),[l,s]),f=L.useCallback((e=>d(l,e)),[l,d]);return b.jsx("g",{id:l,transform:`translate(${o}, ${a})scale(${u?.5:1})`,onPointerDown:x,onPointerMove:p,onPointerUp:f,style:{cursor:"move"},children:b.jsx(A,{zhName:null!==(n=c.at(0))&&void 0!==n?n:"",enName:null!==(t=c.at(1))&&void 0!==t?t:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:m[3],backgroundColour:m[2],spanDigits:h})})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),b.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),b.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),b.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),defaultAttrs:J,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:o}=M(),s=[{type:"input",label:o("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:e=>{t.names[0]=e,l(n,t)},minW:"full"},{type:"input",label:o("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:e=>{t.names[1]=e,l(n,t)},minW:"full"},{type:"switch",label:o("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:e=>{t.tram=e,l(n,t)},minW:"full"},{type:"switch",label:o("panel.details.nodes.gzmtrLineBadge.span"),oneLine:!0,isChecked:t.span,onChange:e=>{t.span=e,l(n,t)},minW:"full"},{type:"custom",label:o("color"),component:b.jsx(a,{type:r.GzmtrLineBadge,defaultTheme:J.color})}];return b.jsx(i,{fields:s})},metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},H=11.84375,Z={num:1,color:[l.Beijing,"bj1","#c23a30",o.white]},G=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:Z).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:Z;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.BjsubwayNumLineBadge,defaultTheme:Z.color})}],K={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:r,handlePointerMove:i,handlePointerUp:s}=e,{num:d=Z.num,color:c=Z.color}=null!=a?a:Z,m=L.useCallback((e=>r(n,e)),[n,r]),u=L.useCallback((e=>i(n,e)),[n,i]),h=L.useCallback((e=>s(n,e)),[n,s]),x=c[3]===o.black?"#003670":o.white;return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:m,onPointerMove:u,onPointerUp:h,style:{cursor:"move"},children:[b.jsx("rect",{fill:c[2],x:"0",width:32.84375,height:"16",rx:"2"}),b.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:7.921875,y:"13.5",fill:x,fontSize:"15",letterSpacing:"-1.5",children:d}),b.jsx("text",{className:"rmp-name__zh",x:H+(d>9?5.5:3),y:"8.5",fontSize:"7",fill:x,children:"号线"}),b.jsxs("text",{className:"rmp-name__en",x:H+(d>9?6:4.5),y:"13.5",fontSize:"4",fill:x,children:["Line ",d]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),b.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),b.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),b.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:Z,attrsComponent:()=>b.jsx(t,{fields:G}),metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},Y={names:["八通线","Batong Line"],color:[l.Beijing,"bj1","#c23a30",o.white]},X=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:Y).names[0],onChange:(e,n)=>{const t=null!=n?n:Y;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:Y).names[1],onChange:(e,n)=>{const t=null!=n?n:Y;return t.names[1]=e.toString(),t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.BjsubwayTextLineBadge,defaultTheme:Y.color})}],ee={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:r,handlePointerMove:i,handlePointerUp:s}=e,{names:d=Y.names,color:c=Y.color}=null!=a?a:Y,m=L.useRef(null),[u,h]=L.useState({width:12});L.useEffect((()=>h(m.current.getBBox())),[...d,h,m]);const x=L.useCallback((e=>r(n,e)),[n,r]),p=L.useCallback((e=>i(n,e)),[n,i]),f=L.useCallback((e=>s(n,e)),[n,s]),g=Math.max(28.84375,u.width),y=c[3]===o.black?"#003670":o.white;return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:f,style:{cursor:"move"},children:[b.jsx("rect",{fill:c[2],x:"0",width:g+4,height:"16",rx:"2"}),b.jsxs("g",{ref:m,children:[b.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(g+4)/2,y:"8",fontSize:"7",fill:y,children:d[0]}),b.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(g+4)/2,y:"13.5",fontSize:"4",fill:y,children:d[1]})]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),b.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),b.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:Y,attrsComponent:()=>b.jsx(t,{fields:X}),metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},ne={num:1,branch:!1,color:[l.Suzhou,"sz1","#78BA25",o.white]},te=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:ne).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:ne;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:e=>{var n;return null!==(n=null==e?void 0:e.branch)&&void 0!==n?n:ne.branch},onChange:(e,n)=>{const t=null!=n?n:ne;return t.branch=e,t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.SuzhouRTNumLineBadge,defaultTheme:ne.color})}],le={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{num:s=ne.num,branch:d=ne.branch,color:c=ne.color}=null!=o?o:ne,m=L.useCallback((e=>a(n,e)),[n,a]),u=L.useCallback((e=>r(n,e)),[n,r]),h=L.useCallback((e=>i(n,e)),[n,i]);return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:m,onPointerMove:u,onPointerUp:h,style:{cursor:"move"},children:[b.jsx("rect",{fill:c[2],width:"20",height:"20",rx:"2",ry:"2"}),b.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:c[3],fontSize:"15",letterSpacing:"-1",children:s}),d&&b.jsxs(b.Fragment,{children:[b.jsx("text",{className:"rmp-name__zh",x:22.5,y:"10",fontSize:"10",children:"支线"}),b.jsx("text",{className:"rmp-name__en",x:22.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),b.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:ne,attrsComponent:()=>b.jsx(t,{fields:te}),metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},oe={num:1,color:[l.Berlin,"bu1","#62AD2D",o.white]},ae=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:oe).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:oe;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.BerlinUBahnLineBadge,defaultTheme:oe.color})}],re={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{num:s=oe.num,color:d=oe.color}=null!=o?o:oe,c=L.useCallback((e=>a(n,e)),[n,a]),m=L.useCallback((e=>r(n,e)),[n,r]),u=L.useCallback((e=>i(n,e)),[n,i]),h=d[3];return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:c,onPointerMove:m,onPointerUp:u,style:{cursor:"move"},children:[b.jsx("rect",{fill:d[2],x:"0",width:"25",height:"15"}),b.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:h,fontSize:"14",letterSpacing:"1",children:["U",s]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),b.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),defaultAttrs:oe,attrsComponent:()=>b.jsx(t,{fields:ae}),metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},ie={num:1,color:[l.Berlin,"bs1","#DD6CA6",o.white]},se=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:ie).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:ie;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.BerlinSBahnLineBadge,defaultTheme:ie.color})}],de={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{num:s=ie.num,color:d=ie.color}=null!=o?o:ie,[c,m]=s>=10?[6,19.75]:[10,20],u=L.useCallback((e=>a(n,e)),[n,a]),h=L.useCallback((e=>r(n,e)),[n,r]),x=L.useCallback((e=>i(n,e)),[n,i]),p=d[3];return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:h,onPointerUp:x,style:{cursor:"move"},children:[b.jsx("rect",{fill:d[2],x:"0",width:"30",height:"15",rx:"8"}),b.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:c,y:"12.5",fill:p,fontSize:"14",letterSpacing:"0",children:"S"}),b.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:m,y:"12.5",fill:p,fontSize:"14",letterSpacing:"-0.2",children:s})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),b.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),defaultAttrs:ie,attrsComponent:()=>b.jsx(t,{fields:se}),metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},ce={num:1,color:[l.Chongqing,"cq1","#e4002b",o.white]},me=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:ce).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:ce;return Number.isNaN(Number(e))?t.num=e:t.num=Number(e),t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.ChongqingRTNumLineBadge,defaultTheme:ce.color})}],ue={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{num:s=ce.num,color:d=ce.color}=null!=o?o:ce,c=L.useCallback((e=>a(n,e)),[n,a]),m=L.useCallback((e=>r(n,e)),[n,r]),u=L.useCallback((e=>i(n,e)),[n,i]),h=d[3],x=Number.isInteger(s)?16:15,[p,f]=Number.isInteger(s)?Number(s)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:c,onPointerMove:m,onPointerUp:u,style:{cursor:"move"},children:[b.jsx("rect",{fill:d[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),b.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:f,y:"10",fill:h,fontSize:x,letterSpacing:p,dominantBaseline:"central",children:s})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),b.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),defaultAttrs:ce,attrsComponent:()=>b.jsx(t,{fields:me}),metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},he={names:["空港线","Konggang Line"],color:[l.Chongqing,"cq3","#003da5",o.white]},xe=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:he).names[0],onChange:(e,n)=>{const t=null!=n?n:he;return t.names[0]=e.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:he).names[1],onChange:(e,n)=>{const t=null!=n?n:he;return t.names[1]=e.toString(),t}},{type:"custom",label:"color",component:b.jsx(a,{type:r.ChongqingRTTextLineBadge,defaultTheme:he.color})}],pe={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{names:s=he.names,color:d=he.color}=null!=o?o:he,c=L.useRef(null),m=L.useCallback((e=>a(n,e)),[n,a]),u=L.useCallback((e=>r(n,e)),[n,r]),h=L.useCallback((e=>i(n,e)),[n,i]),x=d[3];return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:m,onPointerMove:u,onPointerUp:h,style:{cursor:"move"},children:[b.jsx("rect",{fill:d[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),b.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:x,fontSize:"6",letterSpacing:"0",children:s[0]}),b.jsx(T,{ref:c,text:s[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:x,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),b.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),b.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),defaultAttrs:he,attrsComponent:()=>b.jsx(t,{fields:xe}),metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},fe=11.84375,ge={num:1,color:[l.Shenzhen,"sz1","#00b140",o.white],isBranch:!1},ye={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:r,handlePointerMove:i,handlePointerUp:s}=e,{num:d=ge.num,color:c=ge.color,isBranch:m=ge.isBranch}=null!=a?a:ge,u=L.useCallback((e=>r(n,e)),[n,r]),h=L.useCallback((e=>i(n,e)),[n,i]),x=L.useCallback((e=>s(n,e)),[n,s]),p=c[3]===o.black?"#003670":o.white,f=m?10:fe+(d>9?6.5:3),g=m?-1:0,y=m?11:fe+(d>9?7:3.5),j=m?6:9.921875;return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:h,onPointerUp:x,style:{cursor:"move"},children:[b.jsx("rect",{fill:c[2],x:"0",width:32.84375,height:"16",rx:"2"}),b.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:j,y:"13.5",fill:p,fontSize:"15",letterSpacing:"-1",children:d}),b.jsxs("text",{className:"rmp-name__zh",x:f,y:"9.5",fontSize:"6",fill:p,letterSpacing:g,children:["号线",m?"支线":""]}),b.jsxs("text",{className:"rmp-name__en",x:y,y:"13.5",fontSize:"3",fill:p,children:[m?"Branch":""," Line ",d]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),b.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),b.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),b.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),defaultAttrs:ge,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:o}=M(),s=[{type:"input",label:o("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"custom",label:o("color"),component:b.jsx(a,{type:r.ShenzhenMetroNumLineBadge,defaultTheme:ge.color}),minW:"full"},{type:"switch",label:o("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:e=>{t.isBranch=e,l(n,t)},minW:"full"}];return b.jsx(i,{fields:s})},metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},je={num:1,color:[l.Singapore,"ewl","#009739",o.white]},be={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{num:s=je.num,color:d=je.color}=null!=o?o:je,c=L.useCallback((e=>a(n,e)),[n,a]),m=L.useCallback((e=>r(n,e)),[n,r]),u=L.useCallback((e=>i(n,e)),[n,i]),h=d[3],x=d[2];return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:c,onPointerMove:m,onPointerUp:u,style:{cursor:"move"},children:[b.jsx("circle",{r:"8",fill:x}),b.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:h,fontSize:"12",dominantBaseline:"central",letterSpacing:"-0.2",children:s})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),b.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:je,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:o}=M(),s=[{type:"input",label:o("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"custom",label:o("color"),component:b.jsx(a,{type:r.MRTDestinationNumbers,defaultTheme:je.color}),minW:"full"}];return b.jsx(i,{fields:s})},metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},ve=5*Math.SQRT1_2,we=.25,Ne=(ve*Math.SQRT2-we)/2*Math.SQRT2,Ce={names:["山手線","Yamanote Line"],color:[l.Tokyo,"jy","#9ACD32",o.black],num:9,crosshatchPatternFill:!1},Se={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{names:s=Ce.names,num:d=Ce.num,color:c=Ce.color,crosshatchPatternFill:m=Ce.crosshatchPatternFill}=null!=o?o:Ce,u=L.useRef(null),[h,x]=L.useState({height:10,width:12});L.useEffect((()=>x(u.current.getBBox())),[...s,x,u]);const p=L.useCallback((e=>a(n,e)),[n,a]),f=L.useCallback((e=>r(n,e)),[n,r]),g=L.useCallback((e=>i(n,e)),[n,i]);return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:p,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[b.jsxs("defs",{children:[b.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[b.jsx("polygon",{points:`0,0 0,${Ne} ${Ne},0`}),b.jsx("polygon",{points:`${ve},${ve} ${ve-Ne},${ve} ${ve},${ve-Ne}`})]}),b.jsxs("pattern",{id:`jr_east_${n}_fill_pattern_${c[2]}`,width:ve,height:ve,patternUnits:"userSpaceOnUse",children:[b.jsx("rect",{width:ve,height:ve,fill:c[2]}),b.jsx("line",{x1:"0",y1:"0",x2:ve,y2:ve,stroke:"white",strokeWidth:we,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),b.jsx("line",{x1:ve,y1:"0",x2:"0",y2:ve,stroke:"white",strokeWidth:we,strokeOpacity:"33%"})]})]}),b.jsx("rect",{fill:m?`url(#jr_east_${n}_fill_pattern_${c[2]})`:c[2],x:"0",y:"-1",width:h.width+4+10,height:h.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),b.jsx("circle",{r:4,cx:7,cy:6,stroke:"black",strokeWidth:"0.25",fill:c[3]}),b.jsx("text",{x:7,y:6.75,textAnchor:"middle",dominantBaseline:"middle",fill:"#000"===c[3]?"white":c[2],fontSize:d>9?7:8,className:"rmp-name__jreast_en",children:d}),b.jsx(T,{ref:u,text:s[0].split("\\"),x:12,y:"-1",fill:c[3],fontSize:10,lineHeight:10,grow:"down",className:"rmp-name__jreast_ja"}),b.jsx(T,{text:s[1].split("\\"),textAnchor:"middle",dominantBaseline:"hanging",x:(h.width+4+10)/2,y:h.height+1,fontSize:5,lineHeight:5,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),b.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),b.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),b.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),b.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),defaultAttrs:Ce,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:o}=M(),s=[{type:"input",label:o("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"textarea",label:o("panel.details.nodes.common.nameJa"),value:t.names[0].replaceAll("\\","\n"),onChange:e=>{t.names[0]=e.replaceAll("\n","\\"),l(n,t)},minW:"full"},{type:"textarea",label:o("panel.details.nodes.common.nameEn"),value:t.names[1].replaceAll("\\","\n"),onChange:e=>{t.names[1]=e.replaceAll("\n","\\"),l(n,t)},minW:"full"},{type:"switch",label:o("panel.details.nodes.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:t.crosshatchPatternFill,onChange:e=>{t.crosshatchPatternFill=e,l(n,t)},minW:"full"},{type:"custom",label:o("color"),component:b.jsx(a,{type:r.JREastLineBadge,defaultTheme:Ce.color})}];return b.jsx(i,{fields:s})},metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},Pe={num:1,numEn:"1",showText:!0,color:[l.Qingdao,"qd1","#f7b000",o.white]},Be={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,{num:s=Pe.num,numEn:d=Pe.numEn,color:c=Pe.color,showText:m=Pe.showText}=null!=o?o:Pe,u=L.useCallback((e=>a(n,e)),[n,a]),h=L.useCallback((e=>r(n,e)),[n,r]),x=L.useCallback((e=>i(n,e)),[n,i]),p=c[3],[f,g,y,j]=Number(s)>=10?[-2.4,0,10.25,20]:[0,4,10,22];return b.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:h,onPointerUp:x,style:{cursor:"move"},children:[b.jsx("rect",{fill:c[2],x:"0",width:"20",height:"20",rx:"2",ry:"2"}),b.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:g,y:y,fill:p,fontSize:j,fontWeight:"bold",letterSpacing:f,dominantBaseline:"central",children:s}),m&&b.jsxs(b.Fragment,{children:[b.jsx("text",{className:"rmp-name__zh",x:"22",y:"10.5",fontSize:"13",children:"号线"}),b.jsxs("text",{className:"rmp-name__en",x:"22.5",y:"19.5",fontSize:"8",children:["Line ",d]})]})]})},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("rect",{fill:"currentColor",x:"2",y:"6",rx:"1",ry:"1",width:"10",height:"10"}),b.jsx("text",{x:"4",y:"15",fill:"white",fontSize:"12",children:"1"}),b.jsx("text",{x:"12",y:"11.5",fill:"black",fontSize:"6",children:"号线"}),b.jsx("text",{x:"12",y:"15.5",fill:"black",fontSize:"4",children:"Line1"})]}),defaultAttrs:Pe,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:o}=M(),s=[{type:"input",label:o("panel.details.nodes.common.num"),value:t.num.toString(),onChange:e=>{t.num=Number(e),t.numEn=e,l(n,t)}},{type:"input",label:o("panel.details.nodes.qingdaoMetroNumLineBadge.numEn"),value:t.numEn.toString(),onChange:e=>{t.numEn=e,l(n,t)}},{type:"switch",label:o("panel.details.nodes.qingdaoMetroNumLineBadge.showText"),isChecked:t.showText,oneLine:!0,onChange:e=>{t.showText=e,l(n,t)}},{type:"custom",label:o("color"),component:b.jsx(a,{type:r.QingdaoMetroNumLineBadge,defaultTheme:Pe.color})}];return b.jsx(i,{fields:s,minW:"full"})},metadata:{displayName:"panel.details.nodes.qingdaoMetroNumLineBadge.displayName",tags:[]}},_e={contents:{},...U},ze={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,s=D();o.content=s(o.contents);const d=$.component;return b.jsx(d,{id:n,x:t,y:l,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i,attrs:o})},icon:$.icon,defaultAttrs:_e,attrsComponent:$.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}},ke={id:"new",value:"Upload a new param",param:null},Le={id:"null",value:"",param:null},Me=e=>{const{isOpen:n,onClose:t,onSubmit:l}=e,{t:a}=M(),r=L.useRef(window.graph),[c,m]=L.useState([]),[u,h]=L.useState(Le);L.useEffect((()=>{if(n){p(""),g(""),h(Le);const e=E(r.current).filter((e=>"undefined"!==e.randomId)).map((e=>({id:e.randomId,value:e.randomId,param:e})));m([ke].concat(e))}}),[n]);const[x,p]=L.useState(""),[f,g]=L.useState(""),y=[{type:"custom",label:"Import from",component:b.jsx(s,{data:c,displayHandler:e=>b.jsx(d,{name:e.value,fg:o.white,bg:null===e.param?"#000000":"#ff8651",title:e.value,sx:{display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"}}),filter:(e,n)=>n.id.toLowerCase().includes(e.toLowerCase())||Object.values(n.id).some((n=>n.toLowerCase().includes(e.toLowerCase()))),value:u.value,onChange:e=>h(e)})},{type:"textarea",label:a("Paste JSON from RMP Designer"),value:x.toString(),onChange:e=>p(e),minW:"full",hidden:null!==u.param||!1}];return L.useEffect((()=>g("")),[n]),b.jsxs(v,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[b.jsx(w,{}),b.jsxs(N,{children:[b.jsx(C,{children:a("Upload master parameter")}),b.jsx(S,{}),b.jsxs(P,{minH:200,children:[b.jsx(i,{fields:y}),b.jsx("span",{style:{color:"red"},hidden:null!==u.param,children:f})]}),b.jsxs(B,{children:[b.jsx(_,{colorScheme:"blue",variant:"outline",mr:"1",onClick:t,children:a("cancel")}),b.jsx(_,{colorScheme:"blue",variant:"outline",mr:"1",onClick:()=>{try{l(null===u.param?x:JSON.stringify(u.param))}catch(e){return void g("Something went wrong.")}t()},children:a("apply")})]})]})]})},Ae=e=>{const{isOpen:n,onClose:t}=e,{t:l}=M(),{refresh:{nodes:a}}=c((e=>e.runtime)),s=L.useRef(window.graph),g=m(),y=z(),[j,A]=L.useState([]);L.useEffect((()=>{n&&A(E(s.current))}),[n,a]);const[T,U]=L.useState(void 0),$=j.map((e=>{var n,t;return[{label:"id",type:"custom",component:b.jsx(d,{name:e.randomId,fg:o.white,bg:"undefined"===e.randomId?"#000000":"#19B3EA"})},{label:"label",type:"input",value:null!==(n=e.label)&&void 0!==n?n:e.randomId,onChange:n=>{return t=e,l=n,s.current.filterNodes((e=>s.current.getNodeAttribute(e,"type")===r.Master&&s.current.getNodeAttributes(e)[r.Master].randomId===t.randomId)).forEach((e=>{s.current.mergeNodeAttributes(e,{[r.Master]:{...t,label:l}})})),g(p()),void g(f(s.current.export()));var t,l},hidden:"undefined"===e.randomId},{label:"label",type:"output",value:null!==(t=e.label)&&void 0!==t?t:e.randomId,hidden:"undefined"!==e.randomId},{label:"type",type:"custom",component:b.jsx(d,{name:e.nodeType,fg:o.white,bg:"MiscNode"===e.nodeType?"#FF8651":"#51BC00"})},{label:"",type:"custom",component:b.jsxs(k,{direction:"row",children:[b.jsx(_,{onClick:()=>U(e.randomId),children:b.jsx(u,{})}),b.jsx(_,{onClick:()=>(e=>{const n={id:e.randomId,type:e.nodeType,svgs:e.svgs,components:e.components,color:e.color,core:e.core,version:e.version};n.components.forEach(((e,t)=>{n.components[t].value=e.defaultValue})),I(`RMP_Master_Node_${(new Date).valueOf()}.json`,"application/json",JSON.stringify(n))})(e),isDisabled:"undefined"===e.randomId,children:b.jsx(h,{})}),b.jsx(_,{onClick:()=>{return n=e.randomId,s.current.filterNodes((e=>s.current.getNodeAttribute(e,"type")===r.Master&&s.current.getNodeAttributes(e)[r.Master].randomId===n)).forEach((e=>{s.current.dropNode(e)})),g(p()),void g(f(s.current.export()));var n},children:b.jsx(x,{})})]})}]}));return b.jsxs(v,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[b.jsx(w,{}),b.jsxs(N,{children:[b.jsx(C,{children:l("Master Node Manager")}),b.jsx(S,{}),b.jsxs(P,{children:[$.map(((e,n)=>b.jsx(i,{fields:e},n))),b.jsx(Me,{isOpen:!!T,onClose:()=>U(void 0),onSubmit:e=>{const n=JSON.parse(e),t=n.id?n.id:n.randomId,l={randomId:t,label:n.label?n.label:t,nodeType:n.nodeType?n.nodeType:n.type,svgs:n.svgs,components:n.components,color:n.color,core:n.core,version:n.version};l.version?(s.current.filterNodes((e=>s.current.getNodeAttribute(e,"type")===r.Master&&s.current.getNodeAttributes(e)[r.Master].randomId===T)).forEach((e=>{const n=structuredClone(l),t=s.current.getNodeAttributes(e),o=structuredClone(t[r.Master]);n.components.forEach(((e,t)=>{var l,a;n.components[t].value=null!==(a=e.id,l=void o.components.forEach((e=>{var n;if(e.id===a)return null!==(n=e.value)&&void 0!==n?n:e.defaultValue})))&&void 0!==l?l:e.defaultValue})),void 0!==n.color&&(n.color.value=o.color?n.color.value:n.color.defaultValue),s.current.mergeNodeAttributes(e,{[r.Master]:n})})),g(p()),g(f(s.current.export()))):y({title:"Outdated configuration!",status:"error",duration:9e3,isClosable:!0})}})]}),b.jsx(B,{children:b.jsx(_,{colorScheme:"blue",variant:"outline",mr:"1",onClick:t,children:l("close")})})]})]})},Te={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:a,handlePointerMove:r,handlePointerUp:i}=e,s=L.useCallback((e=>a(n,e)),[n,a]),d=L.useCallback((e=>r(n,e)),[n,r]),c=L.useCallback((e=>i(n,e)),[n,i]),m=(e,...n)=>new Function(...n,`return ${e}`),u="MiscNode"===o.nodeType?{onPointerDown:s,onPointerMove:d,onPointerUp:c,style:{cursor:"move"}}:{},h=e=>e.map((e=>{var t,l;const a="Station"===o.nodeType&&o.core&&o.core===e.id?{id:`stn_core_${n}`,onPointerDown:s,onPointerMove:d,onPointerUp:c,style:{cursor:"move"}}:{},r=((e,n,t)=>{const l={};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i))try{var a;l[i]=m(e[i].slice(1),...o.components.map((e=>e.label)),"color")(...n.map(((e,n)=>"number"!==t[n]||Number.isNaN(Number(e))?e:Number(e))),o.color?null!==(a=o.color.value)&&void 0!==a?a:o.color.defaultValue:"")}catch(r){l[i]=""}return l})(e.attrs,o.components.map((e=>e.value)),o.components.map((e=>e.type)));return b.jsx("g",{transform:`translate(${null!==(t=r.x)&&void 0!==t?t:0}, ${null!==(l=r.y)&&void 0!==l?l:0})`,children:L.createElement(e.type,{...r,x:0,y:0,...a},e.children?h(e.children):"_rmp_children_text"in r?r._rmp_children_text:null)},e.id)}));return L.createElement("g",{id:n,transform:`translate(${t}, ${l})`,...u},"undefined"!==o.randomId?h(o.svgs):b.jsxs(b.Fragment,{children:[b.jsx("circle",{r:5}),b.jsx("text",{x:-3.75,y:3,fill:"white",fontSize:"8",fontWeight:"bold",children:"M"})]}))},icon:b.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[b.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),b.jsx("text",{x:"8.5",y:"15",fill:"currentColor",fontSize:"8",children:"M"})]}),defaultAttrs:{randomId:"undefined",label:"Undefined",nodeType:"MiscNode",svgs:[],components:[]},attrsComponent:e=>{var n,t;const{id:l,attrs:o,handleAttrsUpdate:a}=e,r=m(),s=z(),{paletteAppClip:{output:d}}=c((e=>e.runtime)),{t:h}=M(),[x,p]=L.useState(!1),[f,v]=L.useState(!1),w=[{type:"output",label:"Master Type",value:null!==(n=o.label)&&void 0!==n?n:o.randomId},{type:"custom",label:"",component:b.jsxs(b.Fragment,{children:[b.jsx(_,{onClick:()=>p(!0),children:b.jsx(u,{})}),b.jsx(_,{onClick:()=>v(!0),children:b.jsx(g,{})})]}),oneLine:!0}],N=o.components.map(((e,n)=>{const{label:t,type:r,defaultValue:i,value:s}=e;return"number"===r||"text"===r?{label:t,type:"input",value:null!=s?s:i,onChange:e=>{o.components[n].value=e,a(l,{...o,components:o.components})}}:"switch"===r?{label:t,type:"switch",isChecked:"true"===(null!=s?s:i),onChange:e=>{o.components[n].value=e,a(l,{...o,components:o.components})}}:"textarea"===r?{label:t,type:"textarea",value:null!=s?s:i,onChange:e=>{o.components[n].value=e,a(l,{...o,components:o.components})}}:{type:"input",label:"undefined",value:"none"}})),[C,S]=L.useState(!1);L.useEffect((()=>{o.color&&C&&d&&(o.color.value=d,a(l,{...o,color:o.color}),S(!1))}),[null==d?void 0:d.toString()]);const P=[{type:"custom",label:h("color"),component:b.jsx(y,{theme:null===(t=o.color)||void 0===t?void 0:t.value,onClick:()=>{var e;S(!0),r(j(null===(e=o.color)||void 0===e?void 0:e.value))}})}];return b.jsxs(b.Fragment,{children:[b.jsx(i,{fields:w}),"undefined"!==o.randomId&&b.jsx(i,{fields:N,minW:"full"}),"undefined"!==o.randomId&&void 0!==o.color&&b.jsx(i,{fields:P,minW:"full"}),b.jsx(Me,{isOpen:x,onClose:()=>p(!1),onSubmit:e=>{const n=JSON.parse(e),t=n.id?n.id:n.randomId,r={randomId:t,label:n.label?n.label:t,nodeType:n.nodeType?n.nodeType:n.type,svgs:n.svgs,components:n.components,color:n.color,core:n.core,version:n.version};r.version?(r.components.forEach(((e,n)=>{var t,l;r.components[n].value=null!==(l=e.id,t=void o.components.forEach((e=>{var n;if(e.id===l)return null!==(n=e.value)&&void 0!==n?n:e.defaultValue})))&&void 0!==t?t:e.defaultValue})),void 0!==r.color&&(r.color.value=o.color?o.color.value:r.color.defaultValue),a(l,r)):s({title:"Outdated configuration!",status:"error",duration:9e3,isClosable:!0})}}),b.jsx(Ae,{isOpen:f,onClose:()=>v(!1)})]})},metadata:{displayName:"panel.details.nodes.master.displayName",tags:[]}};e("m",{[r.Virtual]:n,[r.ShmetroNumLineBadge]:F,[r.ShmetroTextLineBadge]:V,[r.GzmtrLineBadge]:Q,[r.BjsubwayNumLineBadge]:K,[r.BjsubwayTextLineBadge]:ee,[r.SuzhouRTNumLineBadge]:le,[r.BerlinSBahnLineBadge]:de,[r.BerlinUBahnLineBadge]:re,[r.ChongqingRTNumLineBadge]:ue,[r.ChongqingRTTextLineBadge]:pe,[r.ShenzhenMetroNumLineBadge]:ye,[r.MRTDestinationNumbers]:be,[r.JREastLineBadge]:Se,[r.QingdaoMetroNumLineBadge]:Be,[r.Facilities]:O,[r.Text]:$,[r.I18nText]:ze,[r.Master]:Te})}}}));
