System.register(["./index-legacy-CDdP8UDc.js","./chakra-legacy-4xEIbH2r.js","./react-legacy-1Gy7PpXx.js","./master-manager-legacy-Zv3F60PY.js"],(function(e,n){"use strict";var t,l,a,o,i,r,s,d,c,m,h,u,x,p,f,g,y,j,b,w,v,N,C,P,S,B,_,z,k,L;return{setters:[e=>{t=e.aO,l=e.C,a=e.a,o=e.aP,i=e.ay,r=e.j,s=e.d,d=e.e,c=e.W,m=e.X,h=e.Q,u=e.R,x=e.I,p=e.am,f=e.aQ},e=>{g=e.j,y=e.w,j=e.a$,b=e.af,w=e.O},e=>{v=e.b,N=e.u},e=>{C=e.L,P=e.g,S=e.t,B=e.h,_=e.j,z=e.k,k=e.M,L=e.n}],execute:function(){const n={component:e=>{const{id:n,x:t,y:l,handlePointerDown:a,handlePointerMove:o,handlePointerUp:i}=e,r=v.useCallback((e=>a(n,e)),[n,a]),s=v.useCallback((e=>o(n,e)),[n,o]),d=v.useCallback((e=>i(n,e)),[n,i]);return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})rotate(45)`,onPointerDown:r,onPointerMove:s,onPointerUp:d,style:{cursor:"move"},className:"removeMe",children:[g.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),g.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),g.jsx("circle",{id:`virtual_circle_${n}`,r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[g.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),g.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),g.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},attrsComponent:()=>g.jsx(t,{fields:[]}),metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},A={num:1,color:[l.Shanghai,"sh1","#E4002B",a.white]},M=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:A).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:A;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.ShmetroNumLineBadge,defaultTheme:A.color})}],$={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=A.num,color:d=A.color}=null!=a?a:A,[c,m]=s>=10?[22.67,10.75]:[21,10],h=v.useCallback((e=>o(n,e)),[n,o]),u=v.useCallback((e=>i(n,e)),[n,i]),x=v.useCallback((e=>r(n,e)),[n,r]);return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[g.jsx("rect",{fill:d[2],width:c,height:"22.67"}),g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:m,y:"19",fill:d[3],fontSize:"21.33",letterSpacing:"-1.75",children:s}),g.jsx("text",{className:"rmp-name__zh",x:c+2,y:"12",fontSize:"14.67",children:"号线"}),g.jsxs("text",{className:"rmp-name__en",x:c+4,y:"21.5",fontSize:"8",children:["Line ",s]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),g.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),g.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),g.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:A,attrsComponent:()=>g.jsx(t,{fields:M}),metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},T={names:["浦江线","Pujiang Line"],color:[l.Shanghai,"pjl","#B5B5B6",a.white]},U={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{names:s=T.names,color:d=T.color}=null!=a?a:T,c=v.useRef(null),[m,h]=v.useState({width:12});v.useEffect((()=>h(c.current.getBBox())),[...s,h,c]);const u=v.useCallback((e=>o(n,e)),[n,o]),x=v.useCallback((e=>i(n,e)),[n,i]),p=v.useCallback((e=>r(n,e)),[n,r]);return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[g.jsx("rect",{fill:d[2],x:"0",width:m.width+7,height:"21"}),g.jsxs("g",{ref:c,children:[g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(m.width+7)/2,y:"3",fontSize:"10",fill:d[3],letterSpacing:"-0.25",children:s[0]}),g.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(m.width+7)/2,y:"14",fontSize:"5",fill:d[3],letterSpacing:"-0.25",children:s[1]})]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),g.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),g.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:T,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),s=[{type:"input",label:a("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:e=>{t.names[0]=e,l(n,t)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:e=>{t.names[1]=e,l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:g.jsx(o,{type:i.ShmetroTextLineBadge,defaultTheme:T.color})}];return g.jsx(r,{fields:s})},metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},D={names:["1号线","Line 1"],color:[l.Guangzhou,"gz1","#F3D03E",a.black],tram:!1,span:!0},W={component:e=>{var n,t;const{id:l,x:a,y:o,attrs:i,handlePointerDown:r,handlePointerMove:s,handlePointerUp:d}=e,{names:c=D.names,color:m=D.color,tram:h=D.tram,span:u=D.span}=null!=i?i:D,x=v.useCallback((e=>r(l,e)),[l,r]),p=v.useCallback((e=>s(l,e)),[l,s]),f=v.useCallback((e=>d(l,e)),[l,d]);return g.jsx("g",{id:l,transform:`translate(${a}, ${o})scale(${h?.5:1})`,onPointerDown:x,onPointerMove:p,onPointerUp:f,style:{cursor:"move"},children:g.jsx(C,{zhName:null!==(n=c.at(0))&&void 0!==n?n:"",enName:null!==(t=c.at(1))&&void 0!==t?t:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:m[3],backgroundColour:m[2],spanDigits:u})})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),g.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),g.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),g.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),defaultAttrs:D,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),s=[{type:"input",label:a("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:e=>{t.names[0]=e,l(n,t)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:e=>{t.names[1]=e,l(n,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:e=>{t.tram=e,l(n,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.gzmtrLineBadge.span"),oneLine:!0,isChecked:t.span,onChange:e=>{t.span=e,l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:g.jsx(o,{type:i.GzmtrLineBadge,defaultTheme:D.color})}];return g.jsx(r,{fields:s})},metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},E=11.84375,R={num:1,color:[l.Beijing,"bj1","#c23a30",a.white]},I=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:R).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:R;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.BjsubwayNumLineBadge,defaultTheme:R.color})}],F={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:i,handlePointerMove:r,handlePointerUp:s}=e,{num:d=R.num,color:c=R.color}=null!=o?o:R,m=v.useCallback((e=>i(n,e)),[n,i]),h=v.useCallback((e=>r(n,e)),[n,r]),u=v.useCallback((e=>s(n,e)),[n,s]),x=c[3]===a.black?"#003670":a.white;return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:m,onPointerMove:h,onPointerUp:u,style:{cursor:"move"},children:[g.jsx("rect",{fill:c[2],x:"0",width:32.84375,height:"16",rx:"2"}),g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:7.921875,y:"13.5",fill:x,fontSize:"15",letterSpacing:"-1.5",children:d}),g.jsx("text",{className:"rmp-name__zh",x:E+(d>9?5.5:3),y:"8.5",fontSize:"7",fill:x,children:"号线"}),g.jsxs("text",{className:"rmp-name__en",x:E+(d>9?6:4.5),y:"13.5",fontSize:"4",fill:x,children:["Line ",d]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),g.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),g.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),g.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:R,attrsComponent:()=>g.jsx(t,{fields:I}),metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},q={names:["八通线","Batong Line"],color:[l.Beijing,"bj1","#c23a30",a.white]},O=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:q).names[0],onChange:(e,n)=>{const t=null!=n?n:q;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:q).names[1],onChange:(e,n)=>{const t=null!=n?n:q;return t.names[1]=e.toString(),t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.BjsubwayTextLineBadge,defaultTheme:q.color})}],Q={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:i,handlePointerMove:r,handlePointerUp:s}=e,{names:d=q.names,color:c=q.color}=null!=o?o:q,m=v.useRef(null),[h,u]=v.useState({width:12});v.useEffect((()=>u(m.current.getBBox())),[...d,u,m]);const x=v.useCallback((e=>i(n,e)),[n,i]),p=v.useCallback((e=>r(n,e)),[n,r]),f=v.useCallback((e=>s(n,e)),[n,s]),y=Math.max(28.84375,h.width),j=c[3]===a.black?"#003670":a.white;return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:f,style:{cursor:"move"},children:[g.jsx("rect",{fill:c[2],x:"0",width:y+4,height:"16",rx:"2"}),g.jsxs("g",{ref:m,children:[g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(y+4)/2,y:"8",fontSize:"7",fill:j,children:d[0]}),g.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(y+4)/2,y:"13.5",fontSize:"4",fill:j,children:d[1]})]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),g.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),g.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:q,attrsComponent:()=>g.jsx(t,{fields:O}),metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},V={num:1,branch:!1,color:[l.Suzhou,"sz1","#78BA25",a.white]},G=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:V).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:V;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:e=>{var n;return null!==(n=null==e?void 0:e.branch)&&void 0!==n?n:V.branch},onChange:(e,n)=>{const t=null!=n?n:V;return t.branch=e,t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.SuzhouRTNumLineBadge,defaultTheme:V.color})}],Z={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=V.num,branch:d=V.branch,color:c=V.color}=null!=a?a:V,m=v.useCallback((e=>o(n,e)),[n,o]),h=v.useCallback((e=>i(n,e)),[n,i]),u=v.useCallback((e=>r(n,e)),[n,r]);return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:m,onPointerMove:h,onPointerUp:u,style:{cursor:"move"},children:[g.jsx("rect",{fill:c[2],width:"20",height:"20",rx:"2",ry:"2"}),g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:c[3],fontSize:"15",letterSpacing:"-1",children:s}),d&&g.jsxs(g.Fragment,{children:[g.jsx("text",{className:"rmp-name__zh",x:22.5,y:"10",fontSize:"10",children:"支线"}),g.jsx("text",{className:"rmp-name__en",x:22.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),g.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:V,attrsComponent:()=>g.jsx(t,{fields:G}),metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},H={num:1,color:[l.Berlin,"bu1","#62AD2D",a.white]},J=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:H).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:H;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.BerlinUBahnLineBadge,defaultTheme:H.color})}],Y={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=H.num,color:d=H.color}=null!=a?a:H,c=v.useCallback((e=>o(n,e)),[n,o]),m=v.useCallback((e=>i(n,e)),[n,i]),h=v.useCallback((e=>r(n,e)),[n,r]),u=d[3];return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:c,onPointerMove:m,onPointerUp:h,style:{cursor:"move"},children:[g.jsx("rect",{fill:d[2],x:"0",width:"25",height:"15"}),g.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:u,fontSize:"14",letterSpacing:"1",children:["U",s]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),g.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),defaultAttrs:H,attrsComponent:()=>g.jsx(t,{fields:J}),metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},K={num:1,color:[l.Berlin,"bs1","#DD6CA6",a.white]},X=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:K).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:K;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.BerlinSBahnLineBadge,defaultTheme:K.color})}],ee={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=K.num,color:d=K.color}=null!=a?a:K,[c,m]=s>=10?[6,19.75]:[10,20],h=v.useCallback((e=>o(n,e)),[n,o]),u=v.useCallback((e=>i(n,e)),[n,i]),x=v.useCallback((e=>r(n,e)),[n,r]),p=d[3];return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[g.jsx("rect",{fill:d[2],x:"0",width:"30",height:"15",rx:"8"}),g.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:c,y:"12.5",fill:p,fontSize:"14",letterSpacing:"0",children:"S"}),g.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:m,y:"12.5",fill:p,fontSize:"14",letterSpacing:"-0.2",children:s})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),g.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),defaultAttrs:K,attrsComponent:()=>g.jsx(t,{fields:X}),metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},ne={num:1,color:[l.Chongqing,"cq1","#e4002b",a.white]},te=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:ne).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:ne;return Number.isNaN(Number(e))?t.num=e:t.num=Number(e),t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.ChongqingRTNumLineBadge,defaultTheme:ne.color})}],le={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=ne.num,color:d=ne.color}=null!=a?a:ne,c=v.useCallback((e=>o(n,e)),[n,o]),m=v.useCallback((e=>i(n,e)),[n,i]),h=v.useCallback((e=>r(n,e)),[n,r]),u=d[3],x=Number.isInteger(s)?16:15,[p,f]=Number.isInteger(s)?Number(s)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:c,onPointerMove:m,onPointerUp:h,style:{cursor:"move"},children:[g.jsx("rect",{fill:d[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),g.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:f,y:"10",fill:u,fontSize:x,letterSpacing:p,dominantBaseline:"central",children:s})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),g.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),defaultAttrs:ne,attrsComponent:()=>g.jsx(t,{fields:te}),metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},ae={names:["空港线","Konggang Line"],color:[l.Chongqing,"cq3","#003da5",a.white]},oe=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:ae).names[0],onChange:(e,n)=>{const t=null!=n?n:ae;return t.names[0]=e.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:ae).names[1],onChange:(e,n)=>{const t=null!=n?n:ae;return t.names[1]=e.toString(),t}},{type:"custom",label:"color",component:g.jsx(o,{type:i.ChongqingRTTextLineBadge,defaultTheme:ae.color})}],ie={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{names:s=ae.names,color:d=ae.color}=null!=a?a:ae,c=v.useRef(null),m=v.useCallback((e=>o(n,e)),[n,o]),h=v.useCallback((e=>i(n,e)),[n,i]),u=v.useCallback((e=>r(n,e)),[n,r]),x=d[3];return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:m,onPointerMove:h,onPointerUp:u,style:{cursor:"move"},children:[g.jsx("rect",{fill:d[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:x,fontSize:"6",letterSpacing:"0",children:s[0]}),g.jsx(P,{ref:c,text:s[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:x,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),g.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),g.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),defaultAttrs:ae,attrsComponent:()=>g.jsx(t,{fields:oe}),metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},re=11.84375,se={num:1,color:[l.Shenzhen,"sz1","#00b140",a.white],isBranch:!1},de={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:i,handlePointerMove:r,handlePointerUp:s}=e,{num:d=se.num,color:c=se.color,isBranch:m=se.isBranch}=null!=o?o:se,h=v.useCallback((e=>i(n,e)),[n,i]),u=v.useCallback((e=>r(n,e)),[n,r]),x=v.useCallback((e=>s(n,e)),[n,s]),p=c[3]===a.black?"#003670":a.white,f=m?10:re+(d>9?6.5:3),y=m?-1:0,j=m?11:re+(d>9?7:3.5),b=m?6:9.921875;return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[g.jsx("rect",{fill:c[2],x:"0",width:32.84375,height:"16",rx:"2"}),g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:b,y:"13.5",fill:p,fontSize:"15",letterSpacing:"-1",children:d}),g.jsxs("text",{className:"rmp-name__zh",x:f,y:"9.5",fontSize:"6",fill:p,letterSpacing:y,children:["号线",m?"支线":""]}),g.jsxs("text",{className:"rmp-name__en",x:j,y:"13.5",fontSize:"3",fill:p,children:[m?"Branch":""," Line ",d]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),g.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),g.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),g.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),defaultAttrs:se,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),s=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:g.jsx(o,{type:i.ShenzhenMetroNumLineBadge,defaultTheme:se.color}),minW:"full"},{type:"switch",label:a("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:e=>{t.isBranch=e,l(n,t)},minW:"full"}];return g.jsx(r,{fields:s})},metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},ce={num:1,color:[l.Singapore,"ewl","#009739",a.white]},me={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=ce.num,color:d=ce.color}=null!=a?a:ce,c=v.useCallback((e=>o(n,e)),[n,o]),m=v.useCallback((e=>i(n,e)),[n,i]),h=v.useCallback((e=>r(n,e)),[n,r]),u=d[3],x=d[2];return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:c,onPointerMove:m,onPointerUp:h,style:{cursor:"move"},children:[g.jsx("circle",{r:"8",fill:x}),g.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:u,fontSize:"12",dominantBaseline:"central",letterSpacing:"-0.2",children:s})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),g.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:ce,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),s=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:g.jsx(o,{type:i.MRTDestinationNumbers,defaultTheme:ce.color}),minW:"full"}];return g.jsx(r,{fields:s})},metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},he={lineCode:"EWL",name:"East-West Line",lines:"1, 2, 3, airport",isTram:!1,color:[l.Singapore,"ewl","#009739",a.white]},ue={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{lineCode:s=he.lineCode,color:d=he.color,lines:c=he.lines,name:m=he.name,isTram:h=he.isTram}=null!=a?a:he,u=v.useCallback((e=>o(n,e)),[n,o]),x=v.useCallback((e=>i(n,e)),[n,i]),p=v.useCallback((e=>r(n,e)),[n,r]),f=12.935,y=d[3],j=d[2];return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[g.jsx("rect",{transform:"scale(1.8)",x:-11.425,y:-6.4675,rx:"3",ry:"6",width:22.85,height:f,fill:j,stroke:"white",strokeWidth:"1"}),g.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",fill:y,fontSize:"15",dominantBaseline:"central",letterSpacing:"-0.2",children:s}),g.jsx("text",{className:"rmp-name__mrt",textAnchor:"left",x:"28",y:h?3.5:-3,fill:"black",fontSize:"10",letterSpacing:"-0.2",children:m}),!h&&c.split(",").map(((e,n)=>g.jsx("g",{transform:`translate(${34+14*n}, 4.5)`,children:"airport"!==e.trim()?g.jsxs(g.Fragment,{children:[g.jsx("circle",{r:"6",fill:j}),g.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",fill:y,fontSize:"9",dominantBaseline:"central",letterSpacing:"-0.2",children:e})]}):g.jsxs("g",{transform:"translate(-6, -6) scale(4.5)",children:[g.jsx("path",{d:"M2.467 0H.226A.226.226 0 0 0 0 .226v2.241a.225.225 0 0 0 .226.225h2.241a.225.225 0 0 0 .225-.225V.226A.226.226 0 0 0 2.467 0",style:{fill:"#2d2a26"}}),g.jsx("path",{d:"M1.5.746v.3l.73.642a.08.08 0 0 1 .022.05v.12c0 .017-.012.025-.027.018L1.5 1.529l-.06.541.2.113a.03.03 0 0 1 .013.023V2.3a.01.01 0 0 1-.014.011l-.293-.091-.286.087a.01.01 0 0 1-.014-.007v-.09a.03.03 0 0 1 .013-.023l.2-.113-.059-.545-.724.348a.018.018 0 0 1-.028-.018v-.12a.07.07 0 0 1 .023-.05l.73-.642v-.3c0-.482.3-.482.3 0",style:{fill:"#fff",fillRule:"evenodd"}})]})},n)))]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),g.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:he,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),s=[{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.name,onChange:e=>{t.name=e,l(n,t)},minW:"full"},{type:"input",label:a("panel.details.stations.common.lineCode"),value:t.lineCode,onChange:e=>{t.lineCode=e,l(n,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.mrtLineBadge.isTram"),isChecked:t.isTram,onChange:e=>{t.isTram=e,l(n,t)},minW:"full",oneLine:!0},...t.isTram?[]:[{type:"input",label:a("panel.details.nodes.common.num"),value:t.lines,onChange:e=>{t.lines=e,l(n,t)},minW:"full"}],{type:"custom",label:a("color"),component:g.jsx(o,{type:i.MRTLineBadge,defaultTheme:he.color}),minW:"full"}];return g.jsx(r,{fields:s})},metadata:{displayName:"panel.details.nodes.mrtLineBadge.displayName",tags:[]}},xe=5*Math.SQRT1_2,pe=.25,fe=(xe*Math.SQRT2-pe)/2*Math.SQRT2,ge={names:["山手線","Yamanote Line"],color:[l.Tokyo,"jy","#9ACD32",a.black],num:9,crosshatchPatternFill:!1},ye={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{names:s=ge.names,num:d=ge.num,color:c=ge.color,crosshatchPatternFill:m=ge.crosshatchPatternFill}=null!=a?a:ge,h=v.useRef(null),[u,x]=v.useState({height:10,width:12});v.useEffect((()=>x(h.current.getBBox())),[...s,x,h]);const p=v.useCallback((e=>o(n,e)),[n,o]),f=v.useCallback((e=>i(n,e)),[n,i]),y=v.useCallback((e=>r(n,e)),[n,r]);return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:p,onPointerMove:f,onPointerUp:y,style:{cursor:"move"},children:[g.jsxs("defs",{children:[g.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[g.jsx("polygon",{points:`0,0 0,${fe} ${fe},0`}),g.jsx("polygon",{points:`${xe},${xe} ${xe-fe},${xe} ${xe},${xe-fe}`})]}),g.jsxs("pattern",{id:`jr_east_${n}_fill_pattern_${c[2]}`,width:xe,height:xe,patternUnits:"userSpaceOnUse",children:[g.jsx("rect",{width:xe,height:xe,fill:c[2]}),g.jsx("line",{x1:"0",y1:"0",x2:xe,y2:xe,stroke:"white",strokeWidth:pe,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),g.jsx("line",{x1:xe,y1:"0",x2:"0",y2:xe,stroke:"white",strokeWidth:pe,strokeOpacity:"33%"})]})]}),g.jsx("rect",{fill:m?`url(#jr_east_${n}_fill_pattern_${c[2]})`:c[2],x:"0",y:"-1",width:u.width+4+10,height:u.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),g.jsx("circle",{r:4,cx:7,cy:6,stroke:"black",strokeWidth:"0.25",fill:c[3]}),g.jsx("text",{x:7,y:6.75,textAnchor:"middle",dominantBaseline:"middle",fill:"#000"===c[3]?"white":c[2],fontSize:d>9?7:8,className:"rmp-name__jreast_en",children:d}),g.jsx(P,{ref:h,text:s[0].split("\\"),x:12,y:"-1",fill:c[3],fontSize:10,lineHeight:10,grow:"down",className:"rmp-name__jreast_ja"}),g.jsx(P,{text:s[1].split("\\"),textAnchor:"middle",dominantBaseline:"hanging",x:(u.width+4+10)/2,y:u.height+1,fontSize:5,lineHeight:5,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),g.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),g.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),g.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),g.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),defaultAttrs:ge,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),s=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"textarea",label:a("panel.details.nodes.common.nameJa"),value:t.names[0].replaceAll("\\","\n"),onChange:e=>{t.names[0]=e.replaceAll("\n","\\"),l(n,t)},minW:"full"},{type:"textarea",label:a("panel.details.nodes.common.nameEn"),value:t.names[1].replaceAll("\\","\n"),onChange:e=>{t.names[1]=e.replaceAll("\n","\\"),l(n,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:t.crosshatchPatternFill,onChange:e=>{t.crosshatchPatternFill=e,l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:g.jsx(o,{type:i.JREastLineBadge,defaultTheme:ge.color})}];return g.jsx(r,{fields:s})},metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},je={num:1,numEn:"1",showText:!0,color:[l.Qingdao,"qd1","#f7b000",a.white]},be={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=je.num,numEn:d=je.numEn,color:c=je.color,showText:m=je.showText}=null!=a?a:je,h=v.useCallback((e=>o(n,e)),[n,o]),u=v.useCallback((e=>i(n,e)),[n,i]),x=v.useCallback((e=>r(n,e)),[n,r]),p=c[3],[f,y,j,b]=Number(s)>=10?[-2.4,0,10.25,20]:[0,4,10,22];return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[g.jsx("rect",{fill:c[2],x:"0",width:"20",height:"20",rx:"2",ry:"2"}),g.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:y,y:j,fill:p,fontSize:b,fontWeight:"bold",letterSpacing:f,dominantBaseline:"central",children:s}),m&&g.jsxs(g.Fragment,{children:[g.jsx("text",{className:"rmp-name__zh",x:"22",y:"10.5",fontSize:"13",children:"号线"}),g.jsxs("text",{className:"rmp-name__en",x:"22.5",y:"19.5",fontSize:"8",children:["Line ",d]})]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"6",rx:"1",ry:"1",width:"10",height:"10"}),g.jsx("text",{x:"4",y:"15",fill:"white",fontSize:"12",children:"1"}),g.jsx("text",{x:"12",y:"11.5",fill:"black",fontSize:"6",children:"号线"}),g.jsx("text",{x:"12",y:"15.5",fill:"black",fontSize:"4",children:"Line1"})]}),defaultAttrs:je,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),s=[{type:"input",label:a("panel.details.nodes.common.num"),value:t.num.toString(),onChange:e=>{t.num=Number(e),t.numEn=e,l(n,t)}},{type:"input",label:a("panel.details.nodes.qingdaoMetroNumLineBadge.numEn"),value:t.numEn.toString(),onChange:e=>{t.numEn=e,l(n,t)}},{type:"switch",label:a("panel.details.nodes.qingdaoMetroNumLineBadge.showText"),isChecked:t.showText,oneLine:!0,onChange:e=>{t.showText=e,l(n,t)}},{type:"custom",label:a("color"),component:g.jsx(o,{type:i.QingdaoMetroNumLineBadge,defaultTheme:je.color})}];return g.jsx(r,{fields:s,minW:"full"})},metadata:{displayName:"panel.details.nodes.qingdaoMetroNumLineBadge.displayName",tags:[]}},we={names:["广清城际","Guangzhou-Qingyuan Intercity"],color:[l.Guangzhou,"ir","#2559a8",a.white]},ve={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{names:s=we.names,color:d=we.color}=null!=a?a:we,c=v.useRef(null),[m,h]=v.useState({width:12});v.useEffect((()=>h(c.current.getBBox())),[...s,h,c]);const u=v.useCallback((e=>o(n,e)),[n,o]),x=v.useCallback((e=>i(n,e)),[n,i]),p=v.useCallback((e=>r(n,e)),[n,r]);return g.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[g.jsx("rect",{rx:"2",ry:"2",fill:d[2],x:"0",width:m.width+7,height:"21"}),g.jsxs("g",{ref:c,children:[g.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(m.width+7)/2,y:"3",fontSize:"8.63",fill:d[3],children:s[0]}),g.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(m.width+7)/2,y:"14",fontSize:"3.54",fill:d[3],children:s[1]})]})]})},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),g.jsx("text",{x:"4.5",y:"11",fontSize:"4",fill:"white",children:"广清城际"}),g.jsx("text",{x:"3",y:"16",fontSize:"2",fill:"white",children:"Guangzhou-Qingyuan Intercity"})]}),defaultAttrs:we,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=N(),o=[{type:"input",label:a("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:e=>{t.names[0]=e,l(n,t)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:e=>{t.names[1]=e,l(n,t)},minW:"full"}];return g.jsx(r,{fields:o})},metadata:{displayName:"panel.details.nodes.guangdongIntercityRailwayLineBadge.displayName",tags:[]}},Ne={contents:{},...B},Ce={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,s=_();a.content=s(a.contents);const d=S.component;return g.jsx(d,{id:n,x:t,y:l,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r,attrs:a})},icon:S.icon,defaultAttrs:Ne,attrsComponent:S.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}},Pe={randomId:void 0,label:void 0,transform:f,nodeType:"MiscNode",svgs:[],components:[]},Se={component:e=>{var n;const{id:t,x:l,y:a,attrs:o,handlePointerDown:i,handlePointerMove:r,handlePointerUp:s}=e,d=v.useCallback((e=>i(t,e)),[t,i]),c=v.useCallback((e=>r(t,e)),[t,r]),m=v.useCallback((e=>s(t,e)),[t,s]),h=(e,...n)=>new Function(...n,`return ${e}`),u="MiscNode"===o.nodeType?{onPointerDown:d,onPointerMove:c,onPointerUp:m,style:{cursor:"move"}}:{},x=e=>e.map((e=>{var n,l;const a="Station"===o.nodeType&&o.core&&o.core===e.id?{id:`stn_core_${t}`,onPointerDown:d,onPointerMove:c,onPointerUp:m,style:{cursor:"move"}}:{},i=((e,n,t)=>{const l={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r))try{var a;l[r]=h(e[r].slice(1),...o.components.map((e=>e.label)),"color")(...n.map(((e,n)=>"number"!==t[n]||Number.isNaN(Number(e))?e:Number(e))),o.color?null!==(a=o.color.value)&&void 0!==a?a:o.color.defaultValue:"")}catch(i){l[r]=""}return l})(e.attrs,o.components.map((e=>e.value)),o.components.map((e=>e.type)));return g.jsx("g",{transform:`translate(${null!==(n=i.x)&&void 0!==n?n:0}, ${null!==(l=i.y)&&void 0!==l?l:0})`,children:v.createElement(e.type,{...i,x:0,y:0,...a},e.children?x(e.children):"_rmp_children_text"in i?"style"===e.type?(r=i._rmp_children_text,r.replace(/(^|,)\s*([^{},]+)/g,`$1 #${t} $2`)):i._rmp_children_text:null)},e.id);var r})),p=null!==(n=o.transform)&&void 0!==n?n:f,y=v.useMemo((()=>x(o.svgs)),[o]);return v.createElement("g",{id:t,transform:`translate(${l}, ${a})`,...u},o.randomId?g.jsx("g",{transform:`translate(${p.translateX}, ${p.translateY}) scale(${p.scale}) rotate(${p.rotate})`,children:y}):g.jsxs("g",{children:[g.jsx("circle",{r:"5.5"}),g.jsx("g",{transform:"translate(-4.7, -5) scale(0.8)",children:g.jsx("polygon",{points:"6,1 7.5,4.25 11,4.65 8.5,7.1 9.2,10.75 6,9 2.8,10.75 3.5,7.1 1,4.65 4.5,4.25",fill:"white"})})]}))},icon:g.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[g.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),g.jsx("g",{transform:"translate(7.25, 7) scale(0.8)",children:g.jsx("polygon",{points:"6,1 7.5,4.25 11,4.65 8.5,7.1 9.2,10.75 6,9 2.8,10.75 3.5,7.1 1,4.65 4.5,4.25",fill:"currentColor"})})]}),defaultAttrs:Pe,attrsComponent:e=>{var n,t,l,o,i;const{id:f,attrs:C,handleAttrsUpdate:P}=e,S=s(),{paletteAppClip:{output:B}}=d((e=>e.runtime)),{t:_}=N(),[L,A]=v.useState(!1),[M,$]=v.useState(!1),T=C.components.map(((e,n)=>{const{label:t,type:l,defaultValue:a,value:o}=e;return"number"===l||"text"===l?{label:_(t),type:"input",value:null!=o?o:a,onChange:e=>{C.components[n].value=e,P(f,{...C,components:C.components})}}:"switch"===l?{label:_(t),type:"switch",isChecked:void 0!==o?!!o:a,onChange:e=>{C.components[n].value=e,P(f,{...C,components:C.components})}}:"textarea"===l?{label:_(t),type:"textarea",value:null!=o?o:a,onChange:e=>{C.components[n].value=e,P(f,{...C,components:C.components})}}:{type:"input",label:"undefined",value:"none"}})),[U,D]=v.useState(!1);v.useEffect((()=>{C.color&&U&&B&&(C.color.value=B,P(f,{...C,color:C.color}),D(!1))}),[null==B?void 0:B.toString()]);const W=[{type:"custom",label:_("color"),component:g.jsx(c,{theme:null===(n=C.color)||void 0===n?void 0:n.value,onClick:()=>{var e;D(!0),S(m(null===(e=C.color)||void 0===e?void 0:e.value))}})}];return g.jsxs(g.Fragment,{children:[g.jsxs(y,{direction:"row",mr:"auto",width:"100%",children:[g.jsx(h,{width:"100%",overflow:"hidden",label:_("panel.details.nodes.master.type"),children:g.jsxs(y,{width:"100%",overflow:"hidden",children:[g.jsx(u,{name:null!==(t=C.label)&&void 0!==t?t:_("panel.details.nodes.master.undefined"),fg:null!==(l=C.labelColorFg)&&void 0!==l?l:a.white,bg:null!==(o=C.labelColorBg)&&void 0!==o?o:"#000000",sx:{display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"},mr:1}),g.jsx(u,{name:null!==(i=C.randomId)&&void 0!==i?i:"UNDEFINED",fg:a.white,bg:C.randomId?"#19B3EA":"#000000",sx:{display:"inline-block"},mr:1})]})}),g.jsx(j,{}),g.jsx(b,{icon:g.jsx(x,{}),onClick:()=>A(!0),"aria-label":"upload"})]}),g.jsx(w,{width:"100%",leftIcon:g.jsx(p,{}),onClick:()=>$(!0),children:_("header.settings.procedures.masterManager.title")}),C.randomId&&g.jsx(r,{fields:T,minW:"full"}),C.randomId&&void 0!==C.color&&g.jsx(r,{fields:W,minW:"full"}),g.jsx(z,{isOpen:L,onClose:()=>A(!1),onSubmit:e=>{e.components.forEach(((n,t)=>{var l;e.components[t].value=null!==(l=(e=>{var n;const t=C.components.find((n=>n.id===e));return t?null!==(n=t.value)&&void 0!==n?n:t.defaultValue:void 0})(n.id))&&void 0!==l?l:n.defaultValue})),void 0!==e.color&&(e.color.value=C.color?C.color.value:e.color.defaultValue),P(f,e)}}),g.jsx(k,{isOpen:M,onClose:()=>$(!1)})]})},metadata:{displayName:"panel.details.nodes.master.displayName",tags:[]}};e("m",{[i.Virtual]:n,[i.ShmetroNumLineBadge]:$,[i.ShmetroTextLineBadge]:U,[i.GzmtrLineBadge]:W,[i.BjsubwayNumLineBadge]:F,[i.BjsubwayTextLineBadge]:Q,[i.SuzhouRTNumLineBadge]:Z,[i.BerlinSBahnLineBadge]:ee,[i.BerlinUBahnLineBadge]:Y,[i.ChongqingRTNumLineBadge]:le,[i.ChongqingRTTextLineBadge]:ie,[i.ShenzhenMetroNumLineBadge]:de,[i.MRTDestinationNumbers]:me,[i.MRTLineBadge]:ue,[i.JREastLineBadge]:ye,[i.QingdaoMetroNumLineBadge]:be,[i.GuangdongIntercityRailwayLineBadge]:ve,[i.Facilities]:L,[i.Text]:S,[i.I18nText]:Ce,[i.Master]:Se})}}}));
