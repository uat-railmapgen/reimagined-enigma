import{au as U,C as A,b as S,av as k,ag as g,i as I,Z as Me,R as he,a as ye,e as be,z as je,c as Ae,aw as ke,p as de,t as me,a8 as _e,T as Ie,G as $e}from"./index-COuyUzdX.js";import{j as e,at as Ne,$ as we,au as Be,a1 as Ce,a2 as ve,a3 as Se,a5 as Le,O,aL as Pe,g as Re}from"./chakra-D_OByU5d.js";import{b as r,u as E}from"./react-BuIY-1St.js";import{L as De,M as xe,o as Ue,t as re,q as Ee,v as Te,d as Fe,w as Oe}from"./stations-D2eZAWwX.js";const We=o=>{const{id:n,x:t,y:d,handlePointerDown:s,handlePointerMove:i,handlePointerUp:a}=o,x=r.useCallback(m=>s(n,m),[n,s]),u=r.useCallback(m=>i(n,m),[n,i]),h=r.useCallback(m=>a(n,m),[n,a]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")rotate(45)"),onPointerDown:x,onPointerMove:u,onPointerUp:h,style:{cursor:"move"},children:[e.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),e.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),e.jsx("circle",{id:"virtual_circle_".concat(n),r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},qe={},Ve=()=>e.jsx(U,{fields:[]}),He=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[e.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),e.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),e.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),Je={component:We,icon:He,defaultAttrs:qe,attrsComponent:Ve,metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},Xe=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=H.num,color:h=H.color}=s!=null?s:H,[m,y]=u>=10?[22.67,10.75]:[21,10],b=r.useCallback(f=>i(n,f),[n,i]),j=r.useCallback(f=>a(n,f),[n,a]),p=r.useCallback(f=>x(n,f),[n,x]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:b,onPointerMove:j,onPointerUp:p,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],width:m,height:"22.67"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:y,y:"19",fill:h[3],fontSize:"21.33",letterSpacing:"-1.75",children:u}),e.jsx("text",{className:"rmp-name__zh",x:m+2,y:"12",fontSize:"14.67",children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:m+4,y:"21.5",fontSize:"8",children:["Line ",u]})]})},H={num:1,color:[A.Shanghai,"sh1","#E4002B",S.white]},Qe=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:H).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:H;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.ShmetroNumLineBadge,defaultTheme:H.color})}],Ge=()=>e.jsx(U,{fields:Qe}),Ze=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),e.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),e.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),e.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),Ye={component:Xe,icon:Ze,defaultAttrs:H,attrsComponent:Ge,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},Ke=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{names:u=ee.names,color:h=ee.color}=s!=null?s:ee,m=r.useRef(null),[y,b]=r.useState({width:12});r.useEffect(()=>b(m.current.getBBox()),[...u,b,m]);const j=r.useCallback(N=>i(n,N),[n,i]),p=r.useCallback(N=>a(n,N),[n,a]),f=r.useCallback(N=>x(n,N),[n,x]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:j,onPointerMove:p,onPointerUp:f,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:y.width+7,height:"21"}),e.jsxs("g",{ref:m,children:[e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(y.width+7)/2,y:"4",fontSize:"10",fill:h[3],letterSpacing:"-0.25",children:u[0]}),e.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(y.width+7)/2,y:"13",fontSize:"5",fill:h[3],letterSpacing:"-0.25",children:u[1]})]})]})},ee={names:["浦江线","Pujiang Line"],color:[A.Shanghai,"pjl","#B5B5B6",S.white]},en=o=>{const{id:n,attrs:t,handleAttrsUpdate:d}=o,{t:s}=E(),i=[{type:"textarea",label:s("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:a=>{t.names[0]=a,d(n,t)},minW:"full"},{type:"input",label:s("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,d(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(k,{type:g.ShmetroTextLineBadge,defaultTheme:ee.color})}];return e.jsx(I,{fields:i})},nn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),e.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),e.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),tn={component:Ke,icon:nn,defaultAttrs:ee,attrsComponent:en,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},on=o=>{var f,N;const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{names:u=W.names,color:h=W.color,tram:m=W.tram,span:y=W.span}=s!=null?s:W,b=r.useCallback(l=>i(n,l),[n,i]),j=r.useCallback(l=>a(n,l),[n,a]),p=r.useCallback(l=>x(n,l),[n,x]);return e.jsx("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")scale(").concat(m?.5:1,")"),onPointerDown:b,onPointerMove:j,onPointerUp:p,style:{cursor:"move"},children:e.jsx(De,{zhName:(f=u.at(0))!=null?f:"",enName:(N=u.at(1))!=null?N:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:h[3],backgroundColour:h[2],spanDigits:y})})},W={names:["1号线","Line 1"],color:[A.Guangzhou,"gz1","#F3D03E",S.black],tram:!1,span:!0},sn=o=>{const{id:n,attrs:t,handleAttrsUpdate:d}=o,{t:s}=E(),i=[{type:"input",label:s("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:a=>{t.names[0]=a,d(n,t)},minW:"full"},{type:"input",label:s("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,d(n,t)},minW:"full"},{type:"switch",label:s("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:a=>{t.tram=a,d(n,t)},minW:"full"},{type:"switch",label:s("panel.details.nodes.gzmtrLineBadge.span"),oneLine:!0,isChecked:t.span,onChange:a=>{t.span=a,d(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(k,{type:g.GzmtrLineBadge,defaultTheme:W.color})}];return e.jsx(I,{fields:i})},an=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),e.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),e.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),e.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),ln={component:on,icon:an,defaultAttrs:W,attrsComponent:sn,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},oe=11.84375,rn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=J.num,color:h=J.color}=s!=null?s:J,m=r.useCallback(p=>i(n,p),[n,i]),y=r.useCallback(p=>a(n,p),[n,a]),b=r.useCallback(p=>x(n,p),[n,x]),j=h[3]===S.black?"#003670":S.white;return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:m,onPointerMove:y,onPointerUp:b,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:oe+21,height:"16",rx:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:oe/2+2,y:"13.5",fill:j,fontSize:"15",letterSpacing:"-1.5",children:u}),e.jsx("text",{className:"rmp-name__zh",x:oe+(u>9?5.5:3),y:"8.5",fontSize:"7",fill:j,children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:oe+(u>9?6:4.5),y:"13.5",fontSize:"4",fill:j,children:["Line ",u]})]})},J={num:1,color:[A.Beijing,"bj1","#c23a30",S.white]},cn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:J).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:J;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.BjsubwayNumLineBadge,defaultTheme:J.color})}],dn=()=>e.jsx(U,{fields:cn}),mn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),e.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),e.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),un={component:rn,icon:mn,defaultAttrs:J,attrsComponent:dn,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},hn=28.84375,xn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{names:u=R.names,color:h=R.color}=s!=null?s:R,m=r.useRef(null),[y,b]=r.useState({width:12});r.useEffect(()=>b(m.current.getBBox()),[...u,b,m]);const j=r.useCallback(c=>i(n,c),[n,i]),p=r.useCallback(c=>a(n,c),[n,a]),f=r.useCallback(c=>x(n,c),[n,x]),N=Math.max(hn,y.width),l=h[3]===S.black?"#003670":S.white;return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:j,onPointerMove:p,onPointerUp:f,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:N+4,height:"16",rx:"2"}),e.jsxs("g",{ref:m,children:[e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(N+4)/2,y:"8",fontSize:"7",fill:l,children:u[0]}),e.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(N+4)/2,y:"13.5",fontSize:"4",fill:l,children:u[1]})]})]})},R={names:["八通线","Batong Line"],color:[A.Beijing,"bj1","#c23a30",S.white]},pn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:R).names[0],onChange:(o,n)=>{const t=n!=null?n:R;return t.names[0]=o.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:R).names[1],onChange:(o,n)=>{const t=n!=null?n:R;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.BjsubwayTextLineBadge,defaultTheme:R.color})}],fn=()=>e.jsx(U,{fields:pn}),gn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),e.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),e.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),yn={component:xn,icon:gn,defaultAttrs:R,attrsComponent:fn,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},bn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=$.num,branch:h=$.branch,color:m=$.color}=s!=null?s:$,y=r.useCallback(p=>i(n,p),[n,i]),b=r.useCallback(p=>a(n,p),[n,a]),j=r.useCallback(p=>x(n,p),[n,x]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:y,onPointerMove:b,onPointerUp:j,style:{cursor:"move"},children:[e.jsx("rect",{fill:m[2],width:"20",height:"20",rx:"2",ry:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:m[3],fontSize:"15",letterSpacing:"-1",children:u}),h&&e.jsxs(e.Fragment,{children:[e.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),e.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},$={num:1,branch:!1,color:[A.Suzhou,"sz1","#78BA25",S.white]},jn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:$).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:$;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:o=>{var n;return(n=o==null?void 0:o.branch)!=null?n:$.branch},onChange:(o,n)=>{const t=n!=null?n:$;return t.branch=o,t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.SuzhouRTNumLineBadge,defaultTheme:$.color})}],Nn=()=>e.jsx(U,{fields:jn}),wn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),e.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),Bn={component:bn,icon:wn,defaultAttrs:$,attrsComponent:Nn,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},Cn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=X.num,color:h=X.color}=s!=null?s:X,m=r.useCallback(p=>i(n,p),[n,i]),y=r.useCallback(p=>a(n,p),[n,a]),b=r.useCallback(p=>x(n,p),[n,x]),j=h[3];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:m,onPointerMove:y,onPointerUp:b,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"25",height:"15"}),e.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:j,fontSize:"14",letterSpacing:"1",children:["U",u]})]})},X={num:1,color:[A.Berlin,"bu1","#62AD2D",S.white]},vn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:X).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:X;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.BerlinUBahnLineBadge,defaultTheme:X.color})}],Sn=()=>e.jsx(U,{fields:vn}),Ln=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),e.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),Pn={component:Cn,icon:Ln,defaultAttrs:X,attrsComponent:Sn,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},Tn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=Q.num,color:h=Q.color}=s!=null?s:Q,[m,y]=u>=10?[6,19.75]:[10,20],b=r.useCallback(N=>i(n,N),[n,i]),j=r.useCallback(N=>a(n,N),[n,a]),p=r.useCallback(N=>x(n,N),[n,x]),f=h[3];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:b,onPointerMove:j,onPointerUp:p,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"30",height:"15",rx:"8"}),e.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:m,y:"12.5",fill:f,fontSize:"14",letterSpacing:"0",children:"S"}),e.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:y,y:"12.5",fill:f,fontSize:"14",letterSpacing:"-0.2",children:u})]})},Q={num:1,color:[A.Berlin,"bs1","#DD6CA6",S.white]},zn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:Q).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:Q;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.BerlinSBahnLineBadge,defaultTheme:Q.color})}],Mn=()=>e.jsx(U,{fields:zn}),An=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),e.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),kn={component:Tn,icon:An,defaultAttrs:Q,attrsComponent:Mn,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},_n=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=G.num,color:h=G.color}=s!=null?s:G,m=r.useCallback(l=>i(n,l),[n,i]),y=r.useCallback(l=>a(n,l),[n,a]),b=r.useCallback(l=>x(n,l),[n,x]),j=h[3],p=Number.isInteger(u)?16:15,[f,N]=Number.isInteger(u)?Number(u)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:m,onPointerMove:y,onPointerUp:b,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:N,y:"10",fill:j,fontSize:p,letterSpacing:f,dominantBaseline:"central",children:u})]})},G={num:1,color:[A.Chongqing,"cq1","#e4002b",S.white]},In=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:G).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:G;return Number.isNaN(Number(o))?t.num=o:t.num=Number(o),t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.ChongqingRTNumLineBadge,defaultTheme:G.color})}],$n=()=>e.jsx(U,{fields:In}),Rn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),e.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),Dn={component:_n,icon:Rn,defaultAttrs:G,attrsComponent:$n,metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},Un=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{names:u=D.names,color:h=D.color}=s!=null?s:D,m=r.useRef(null),y=r.useCallback(f=>i(n,f),[n,i]),b=r.useCallback(f=>a(n,f),[n,a]),j=r.useCallback(f=>x(n,f),[n,x]),p=h[3];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:y,onPointerMove:b,onPointerUp:j,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:p,fontSize:"6",letterSpacing:"0",children:u[0]}),e.jsx(xe,{ref:m,text:u[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:p,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},D={names:["空港线","Konggang Line"],color:[A.Chongqing,"cq3","#003da5",S.white]},En=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:D).names[0],onChange:(o,n)=>{const t=n!=null?n:D;return t.names[0]=o.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:D).names[1],onChange:(o,n)=>{const t=n!=null?n:D;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:e.jsx(k,{type:g.ChongqingRTTextLineBadge,defaultTheme:D.color})}],Fn=()=>e.jsx(U,{fields:En}),On=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),e.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),e.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),Wn={component:Un,icon:On,defaultAttrs:D,attrsComponent:Fn,metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},se=11.84375,qn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=Y.num,color:h=Y.color,isBranch:m=Y.isBranch}=s!=null?s:Y,y=r.useCallback(w=>i(n,w),[n,i]),b=r.useCallback(w=>a(n,w),[n,a]),j=r.useCallback(w=>x(n,w),[n,x]),p=h[3]===S.black?"#003670":S.white,f=m?10:se+(u>9?6.5:3),N=m?-1:0,l=m?11:se+(u>9?7:3.5),c=m?6:se/2+4;return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:y,onPointerMove:b,onPointerUp:j,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:se+21,height:"16",rx:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:c,y:"13.5",fill:p,fontSize:"15",letterSpacing:"-1",children:u}),e.jsxs("text",{className:"rmp-name__zh",x:f,y:"9.5",fontSize:"6",fill:p,letterSpacing:N,children:["号线",m?"支线":""]}),e.jsxs("text",{className:"rmp-name__en",x:l,y:"13.5",fontSize:"3",fill:p,children:[m?"Branch":""," Line ",u]})]})},Y={num:1,color:[A.Shenzhen,"sz1","#00b140",S.white],isBranch:!1},Vn=o=>{const{id:n,attrs:t,handleAttrsUpdate:d}=o,{t:s}=E(),i=[{type:"input",label:s("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),d(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(k,{type:g.ShenzhenMetroNumLineBadge,defaultTheme:Y.color}),minW:"full"},{type:"switch",label:s("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:a=>{t.isBranch=a,d(n,t)},minW:"full"}];return e.jsx(I,{fields:i})},Hn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),e.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),e.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),Jn={component:qn,icon:Hn,defaultAttrs:Y,attrsComponent:Vn,metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},Xn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=ne.num,color:h=ne.color}=s!=null?s:ne,m=r.useCallback(f=>i(n,f),[n,i]),y=r.useCallback(f=>a(n,f),[n,a]),b=r.useCallback(f=>x(n,f),[n,x]),j=h[3],p=h[2];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:m,onPointerMove:y,onPointerUp:b,style:{cursor:"move"},children:[e.jsx("circle",{r:"8",fill:p}),e.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:j,fontSize:"12",dominantBaseline:"central",letterSpacing:"-0.2",children:u})]})},ne={num:1,color:[A.Singapore,"ewl","#009739",S.white]},Qn=o=>{const{id:n,attrs:t,handleAttrsUpdate:d}=o,{t:s}=E(),i=[{type:"input",label:s("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),d(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(k,{type:g.MRTDestinationNumbers,defaultTheme:ne.color}),minW:"full"}];return e.jsx(I,{fields:i})},Gn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),e.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),Zn={component:Xn,icon:Gn,defaultAttrs:ne,attrsComponent:Qn,metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},ae=4,ue=7,le=10,fe=5,Yn=5,T=Yn*Math.SQRT1_2,pe=.25,ie=(T*Math.SQRT2-pe)/2*Math.SQRT2,Kn=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{names:u=q.names,num:h=q.num,color:m=q.color,crosshatchPatternFill:y=q.crosshatchPatternFill}=s!=null?s:q,b=r.useRef(null),[j,p]=r.useState({height:10,width:12});r.useEffect(()=>p(b.current.getBBox()),[...u,p,b]);const f=r.useCallback(c=>i(n,c),[n,i]),N=r.useCallback(c=>a(n,c),[n,a]),l=r.useCallback(c=>x(n,c),[n,x]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:f,onPointerMove:N,onPointerUp:l,style:{cursor:"move"},children:[e.jsxs("defs",{children:[e.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[e.jsx("polygon",{points:"0,0 0,".concat(ie," ").concat(ie,",0")}),e.jsx("polygon",{points:"".concat(T,",").concat(T," ").concat(T-ie,",").concat(T," ").concat(T,",").concat(T-ie)})]}),e.jsxs("pattern",{id:"jr_east_".concat(n,"_fill_pattern_").concat(m[2]),width:T,height:T,patternUnits:"userSpaceOnUse",children:[e.jsx("rect",{width:T,height:T,fill:m[2]}),e.jsx("line",{x1:"0",y1:"0",x2:T,y2:T,stroke:"white",strokeWidth:pe,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),e.jsx("line",{x1:T,y1:"0",x2:"0",y2:T,stroke:"white",strokeWidth:pe,strokeOpacity:"33%"})]})]}),e.jsx("rect",{fill:y?"url(#jr_east_".concat(n,"_fill_pattern_").concat(m[2],")"):m[2],x:"0",y:"-1",width:j.width+ae+10,height:j.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),e.jsx("circle",{r:ae,cx:ue,cy:le/2+1,stroke:"black",strokeWidth:"0.25",fill:m[3]}),e.jsx("text",{x:ue,y:le/2+1.75,textAnchor:"middle",dominantBaseline:"middle",fill:m[3]==="#000"?"white":m[2],fontSize:h>9?7:8,className:"rmp-name__jreast_en",children:h}),e.jsx(xe,{ref:b,text:u[0].split("\\"),x:ue+ae+1,y:"-1",fill:m[3],fontSize:le,lineHeight:le,grow:"down",className:"rmp-name__jreast_ja"}),e.jsx(xe,{text:u[1].split("\\"),textAnchor:"middle",dominantBaseline:"hanging",x:(j.width+ae+10)/2,y:j.height+1,fontSize:fe,lineHeight:fe,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},q={names:["山手線","Yamanote Line"],color:[A.Tokyo,"jy","#9ACD32",S.black],num:9,crosshatchPatternFill:!1},et=o=>{const{id:n,attrs:t,handleAttrsUpdate:d}=o,{t:s}=E(),i=[{type:"input",label:s("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),d(n,t)},minW:"full"},{type:"textarea",label:s("panel.details.nodes.common.nameJa"),value:t.names[0].replaceAll("\\","\n"),onChange:a=>{t.names[0]=a.replaceAll("\n","\\"),d(n,t)},minW:"full"},{type:"textarea",label:s("panel.details.nodes.common.nameEn"),value:t.names[1].replaceAll("\\","\n"),onChange:a=>{t.names[1]=a.replaceAll("\n","\\"),d(n,t)},minW:"full"},{type:"switch",label:s("panel.details.nodes.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:t.crosshatchPatternFill,onChange:a=>{t.crosshatchPatternFill=a,d(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(k,{type:g.JREastLineBadge,defaultTheme:q.color})}];return e.jsx(I,{fields:i})},nt=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),e.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),e.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),e.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),e.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),tt={component:Kn,icon:nt,defaultAttrs:q,attrsComponent:et,metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},ot=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,{num:u=V.num,numEn:h=V.numEn,color:m=V.color,showText:y=V.showText}=s!=null?s:V,b=r.useCallback(C=>i(n,C),[n,i]),j=r.useCallback(C=>a(n,C),[n,a]),p=r.useCallback(C=>x(n,C),[n,x]),f=m[3],[N,l,c,w]=Number(u)>=10?[-2.4,0,10.25,20]:[0,4,10,22];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),onPointerDown:b,onPointerMove:j,onPointerUp:p,style:{cursor:"move"},children:[e.jsx("rect",{fill:m[2],x:"0",width:"20",height:"20",rx:"2",ry:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:l,y:c,fill:f,fontSize:w,fontWeight:"bold",letterSpacing:N,dominantBaseline:"central",children:u}),y&&e.jsxs(e.Fragment,{children:[e.jsx("text",{className:"rmp-name__zh",x:"22",y:"10.5",fontSize:"13",children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:"22.5",y:"19.5",fontSize:"8",children:["Line ",h]})]})]})},V={num:1,numEn:"1",showText:!0,color:[A.Qingdao,"qd1","#f7b000",S.white]},st=o=>{const{id:n,attrs:t,handleAttrsUpdate:d}=o,{t:s}=E(),i=[{type:"input",label:s("panel.details.nodes.common.num"),value:t.num.toString(),onChange:a=>{t.num=Number(a),t.numEn=a,d(n,t)}},{type:"input",label:s("panel.details.nodes.qingdaoMetroNumLineBadge.numEn"),value:t.numEn.toString(),onChange:a=>{t.numEn=a,d(n,t)}},{type:"switch",label:s("panel.details.nodes.qingdaoMetroNumLineBadge.showText"),isChecked:t.showText,oneLine:!0,onChange:a=>{t.showText=a,d(n,t)}},{type:"custom",label:s("color"),component:e.jsx(k,{type:g.QingdaoMetroNumLineBadge,defaultTheme:V.color})}];return e.jsx(I,{fields:i,minW:"full"})},at=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",rx:"1",ry:"1",width:"10",height:"10"}),e.jsx("text",{x:"4",y:"15",fill:"white",fontSize:"12",children:"1"}),e.jsx("text",{x:"12",y:"11.5",fill:"black",fontSize:"6",children:"号线"}),e.jsx("text",{x:"12",y:"15.5",fill:"black",fontSize:"4",children:"Line1"})]}),lt={component:ot,icon:at,defaultAttrs:V,attrsComponent:st,metadata:{displayName:"panel.details.nodes.qingdaoMetroNumLineBadge.displayName",tags:[]}},it=o=>{const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,u=Ee();s.content=u(s.contents);const h=re.component;return e.jsx(h,{id:n,x:t,y:d,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x,attrs:s})},rt={contents:{},...Ue},ct={component:it,icon:re.icon,defaultAttrs:rt,attrsComponent:re.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}},ce={translateX:0,translateY:0,scale:1,rotate:0},dt={id:"new",value:"Upload a new param",param:null},ge={id:"null",value:"",param:null},ze=o=>{const{isOpen:n,onClose:t,onSubmit:d}=o,{t:s}=E(),i=r.useRef(window.graph),a=!0,[x,u]=r.useState([]),[h,m]=r.useState(ge);r.useEffect(()=>{if(n){b(""),p(""),m(ge);const l=Te(i.current).filter(c=>c.randomId!=="undefined").map(c=>{var w;return{id:c.randomId,value:(w=c.label)!=null?w:c.randomId,param:c}});u([dt].concat(l))}},[n]);const[y,b]=r.useState(""),[j,p]=r.useState(""),f=[{type:"custom",label:"Import from",component:e.jsx(Me,{data:x,displayHandler:l=>e.jsx(he,{name:l.value,fg:S.white,bg:l.param===null?"#000000":"#ff8651",title:l.value,sx:{display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"}}),filter:(l,c)=>c.id.toLowerCase().includes(l.toLowerCase())||Object.values(c.id).some(w=>w.toLowerCase().includes(l.toLowerCase())),value:h.value,onChange:l=>m(l)})},{type:"textarea",label:s("Paste JSON from RMP Designer"),value:y.toString(),onChange:l=>b(l),minW:"full",hidden:h.param!==null||!a}],N=()=>{try{d(h.param===null?y:JSON.stringify(h.param))}catch(l){p("Something went wrong.");return}t()};return r.useEffect(()=>p(""),[n]),e.jsxs(Ne,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[e.jsx(we,{}),e.jsxs(Be,{children:[e.jsx(Ce,{children:s("Upload master parameter")}),e.jsx(ve,{}),e.jsxs(Se,{minH:200,children:[e.jsx(I,{fields:f}),e.jsx("span",{style:{color:"red"},hidden:h.param!==null,children:j})]}),e.jsxs(Le,{children:[e.jsx(O,{colorScheme:"blue",variant:"outline",mr:"1",onClick:t,children:s("cancel")}),e.jsx(O,{colorScheme:"blue",variant:"outline",mr:"1",onClick:N,children:s("apply")})]})]})]})},mt=o=>{const{isOpen:n,onClose:t}=o,{t:d}=E(),{refresh:{nodes:s}}=ye(l=>l.runtime),i=r.useRef(window.graph),a=be(),x=Pe(),[u,h]=r.useState([]);r.useEffect(()=>{n&&h(Te(i.current))},[n,s]);const[m,y]=r.useState(void 0),b=l=>{var P,B,v;const c=JSON.parse(l),w=c.id?c.id:c.randomId,C={randomId:w,label:(P=c.label)!=null?P:w,nodeType:(B=c.nodeType)!=null?B:c.type,transform:(v=c.transform)!=null?v:ce,svgs:c.svgs,components:c.components,color:c.color,core:c.core,version:c.version};if(!C.version||C.version<2){x({title:"Outdated configuration!",status:"error",duration:9e3,isClosable:!0});return}i.current.filterNodes(L=>i.current.getNodeAttribute(L,"type")===g.Master&&i.current.getNodeAttributes(L)[g.Master].randomId===m).forEach(L=>{const z=structuredClone(C),M=i.current.getNodeAttributes(L),_=structuredClone(M[g.Master]),te=Z=>{_.components.forEach(F=>{var K;if(F.id===Z)return(K=F.value)!=null?K:F.defaultValue})};z.components.forEach((Z,F)=>{var K;z.components[F].value=(K=te(Z.id))!=null?K:Z.defaultValue}),z.color!==void 0&&(z.color.value=_.color?z.color.value:z.color.defaultValue),i.current.mergeNodeAttributes(L,{[g.Master]:z})}),a(de()),a(me(i.current.export()))},j=l=>{const c={id:l.randomId,type:l.nodeType,svgs:l.svgs,components:l.components,color:l.color,core:l.core,version:l.version};c.components.forEach((w,C)=>{c.components[C].value=w.defaultValue}),Fe("RMP_Master_Node_".concat(new Date().valueOf(),".json"),"application/json",JSON.stringify(c))},p=l=>{i.current.filterNodes(c=>i.current.getNodeAttribute(c,"type")===g.Master&&i.current.getNodeAttributes(c)[g.Master].randomId===l).forEach(c=>{i.current.dropNode(c)}),a(de()),a(me(i.current.export()))},f=(l,c)=>{i.current.filterNodes(w=>i.current.getNodeAttribute(w,"type")===g.Master&&i.current.getNodeAttributes(w)[g.Master].randomId===l.randomId).forEach(w=>{i.current.mergeNodeAttributes(w,{[g.Master]:{...l,label:c}})}),a(de()),a(me(i.current.export()))},N=u.map(l=>{var c,w;return[{label:"id",type:"custom",component:e.jsx(he,{name:l.randomId,fg:S.white,bg:l.randomId==="undefined"?"#000000":"#19B3EA"})},{label:"label",type:"input",value:(c=l.label)!=null?c:l.randomId,onChange:C=>f(l,C),hidden:l.randomId==="undefined"},{label:"label",type:"output",value:(w=l.label)!=null?w:l.randomId,hidden:l.randomId!=="undefined"},{label:"type",type:"custom",component:e.jsx(he,{name:l.nodeType,fg:S.white,bg:l.nodeType==="MiscNode"?"#FF8651":"#51BC00"})},{label:"",type:"custom",component:e.jsxs(Re,{direction:"row",children:[e.jsx(O,{onClick:()=>y(l.randomId),children:e.jsx(je,{})}),e.jsx(O,{onClick:()=>j(l),isDisabled:l.randomId==="undefined",children:e.jsx(Ae,{})}),e.jsx(O,{onClick:()=>p(l.randomId),children:e.jsx(ke,{})})]})}]});return e.jsxs(Ne,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[e.jsx(we,{}),e.jsxs(Be,{children:[e.jsx(Ce,{children:d("Master Node Manager")}),e.jsx(ve,{}),e.jsxs(Se,{children:[N.map((l,c)=>e.jsx(I,{fields:l},c)),e.jsx(ze,{isOpen:!!m,onClose:()=>y(void 0),onSubmit:b})]}),e.jsx(Le,{children:e.jsx(O,{colorScheme:"blue",variant:"outline",mr:"1",onClick:t,children:d("close")})})]})]})},ut=o=>{var N;const{id:n,x:t,y:d,attrs:s,handlePointerDown:i,handlePointerMove:a,handlePointerUp:x}=o,u=r.useCallback(l=>i(n,l),[n,i]),h=r.useCallback(l=>a(n,l),[n,a]),m=r.useCallback(l=>x(n,l),[n,x]),y=(l,...c)=>new Function(...c,"return ".concat(l)),b=(l,c,w)=>{var P;const C={};for(const B in l)if(Object.prototype.hasOwnProperty.call(l,B))try{C[B]=y(l[B].slice(1),...s.components.map(v=>v.label),"color")(...c.map((v,L)=>w[L]==="number"&&!Number.isNaN(Number(v))?Number(v):v),s.color?(P=s.color.value)!=null?P:s.color.defaultValue:"")}catch(v){C[B]=""}return C},j=s.nodeType==="MiscNode"?{onPointerDown:u,onPointerMove:h,onPointerUp:m,style:{cursor:"move"}}:{},p=l=>l.map(c=>{var P,B;const w=s.nodeType==="Station"&&s.core&&s.core===c.id?{id:"stn_core_".concat(n),onPointerDown:u,onPointerMove:h,onPointerUp:m,style:{cursor:"move"}}:{},C=b(c.attrs,s.components.map(v=>v.value),s.components.map(v=>v.type));return e.jsx("g",{transform:"translate(".concat((P=C.x)!=null?P:0,", ").concat((B=C.y)!=null?B:0,")"),children:r.createElement(c.type,{...C,x:0,y:0,...w},c.children?p(c.children):"_rmp_children_text"in C?C._rmp_children_text:null)},c.id)}),f=(N=s.transform)!=null?N:ce;return r.createElement("g",{id:n,transform:"translate(".concat(t,", ").concat(d,")"),...j},s.randomId!=="undefined"?e.jsx("g",{transform:"translate(".concat(f.translateX,", ").concat(f.translateY,") scale(").concat(f.scale,") rotate(").concat(f.rotate,")"),children:p(s.svgs)}):e.jsxs(e.Fragment,{children:[e.jsx("circle",{r:5}),e.jsx("text",{x:-3.75,y:3,fill:"white",fontSize:"8",fontWeight:"bold",children:"M"})]}))},ht={randomId:"undefined",label:"Undefined",transform:ce,nodeType:"MiscNode",svgs:[],components:[]},xt=o=>{var w,C;const{id:n,attrs:t,handleAttrsUpdate:d}=o,s=be(),i=Pe(),{paletteAppClip:{output:a}}=ye(P=>P.runtime),{t:x}=E(),[u,h]=r.useState(!1),[m,y]=r.useState(!1),b=P=>{t.components.forEach(B=>{var v;if(B.id===P)return(v=B.value)!=null?v:B.defaultValue})},j=P=>{var z,M,_;const B=JSON.parse(P),v=B.id?B.id:B.randomId,L={randomId:v,label:(z=B.label)!=null?z:v,nodeType:(M=B.nodeType)!=null?M:B.type,transform:(_=B.transform)!=null?_:ce,svgs:B.svgs,components:B.components,color:B.color,core:B.core,version:B.version};if(!L.version||L.version<2){i({title:"Outdated configuration!",status:"error",duration:9e3,isClosable:!0});return}L.components.forEach((te,Z)=>{var F;L.components[Z].value=(F=b(te.id))!=null?F:te.defaultValue}),L.color!==void 0&&(L.color.value=t.color?t.color.value:L.color.defaultValue),d(n,L)},p=[{type:"output",label:"Master Type",value:(w=t.label)!=null?w:t.randomId},{type:"custom",label:"",component:e.jsxs(e.Fragment,{children:[e.jsx(O,{onClick:()=>h(!0),children:e.jsx(je,{})}),e.jsx(O,{onClick:()=>y(!0),children:e.jsx(_e,{})})]}),oneLine:!0}],f=t.components.map((P,B)=>{const{label:v,type:L,defaultValue:z,value:M}=P;return L==="number"||L==="text"?{label:v,type:"input",value:M!=null?M:z,onChange:_=>{t.components[B].value=_,d(n,{...t,components:t.components})}}:L==="switch"?{label:v,type:"switch",isChecked:(M!=null?M:z)==="true",onChange:_=>{t.components[B].value=_,d(n,{...t,components:t.components})}}:L==="textarea"?{label:v,type:"textarea",value:M!=null?M:z,onChange:_=>{t.components[B].value=_,d(n,{...t,components:t.components})}}:{type:"input",label:"undefined",value:"none"}}),[N,l]=r.useState(!1);r.useEffect(()=>{t.color&&N&&a&&(t.color.value=a,d(n,{...t,color:t.color}),l(!1))},[a==null?void 0:a.toString()]);const c=[{type:"custom",label:x("color"),component:e.jsx(Ie,{theme:(C=t.color)==null?void 0:C.value,onClick:()=>{var P;l(!0),s($e((P=t.color)==null?void 0:P.value))}})}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{fields:p}),t.randomId!=="undefined"&&e.jsx(I,{fields:f,minW:"full"}),t.randomId!=="undefined"&&t.color!==void 0&&e.jsx(I,{fields:c,minW:"full"}),e.jsx(ze,{isOpen:u,onClose:()=>h(!1),onSubmit:j}),e.jsx(mt,{isOpen:m,onClose:()=>y(!1)})]})},pt=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),e.jsx("text",{x:"8.5",y:"15",fill:"currentColor",fontSize:"8",children:"M"})]}),ft={component:ut,icon:pt,defaultAttrs:ht,attrsComponent:xt,metadata:{displayName:"panel.details.nodes.master.displayName",tags:[]}},Nt={[g.Virtual]:Je,[g.ShmetroNumLineBadge]:Ye,[g.ShmetroTextLineBadge]:tn,[g.GzmtrLineBadge]:ln,[g.BjsubwayNumLineBadge]:un,[g.BjsubwayTextLineBadge]:yn,[g.SuzhouRTNumLineBadge]:Bn,[g.BerlinSBahnLineBadge]:kn,[g.BerlinUBahnLineBadge]:Pn,[g.ChongqingRTNumLineBadge]:Dn,[g.ChongqingRTTextLineBadge]:Wn,[g.ShenzhenMetroNumLineBadge]:Jn,[g.MRTDestinationNumbers]:Zn,[g.JREastLineBadge]:tt,[g.QingdaoMetroNumLineBadge]:lt,[g.Facilities]:Oe,[g.Text]:re,[g.I18nText]:ct,[g.Master]:ft};export{Nt as m};
