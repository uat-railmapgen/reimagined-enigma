import{au as D,C as M,b as S,av as A,ag as y,i as _,Z as Le,R as ce,a as xe,e as pe,z as ge,c as Pe,aw as Te,p as ae,t as ie,a8 as ze,T as Me,G as Ae}from"./index-yHix0TR-.js";import{j as e,at as fe,$ as ye,au as be,a1 as je,a2 as Ne,a3 as we,a5 as Be,O as F,aL as Ce,g as ke}from"./chakra-D_OByU5d.js";import{b as r,u as U}from"./react-BuIY-1St.js";import{L as _e,M as de,o as Ie,t as le,q as Re,v as ve,d as $e,w as De}from"./stations-Cj1f8Yjt.js";const Ue=o=>{const{id:n,x:t,y:c,handlePointerDown:s,handlePointerMove:a,handlePointerUp:l}=o,p=r.useCallback(m=>s(n,m),[n,s]),u=r.useCallback(m=>a(n,m),[n,a]),h=r.useCallback(m=>l(n,m),[n,l]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")rotate(45)"),onPointerDown:p,onPointerMove:u,onPointerUp:h,style:{cursor:"move"},children:[e.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),e.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),e.jsx("circle",{id:"virtual_circle_".concat(n),r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},Ee={},Fe=()=>e.jsx(D,{fields:[]}),Oe=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[e.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),e.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),e.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),We={component:Ue,icon:Oe,defaultAttrs:Ee,attrsComponent:Fe,metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},qe=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=V.num,color:h=V.color}=s!=null?s:V,[m,b]=u>=10?[22.67,10.75]:[21,10],j=r.useCallback(x=>a(n,x),[n,a]),N=r.useCallback(x=>l(n,x),[n,l]),g=r.useCallback(x=>p(n,x),[n,p]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:j,onPointerMove:N,onPointerUp:g,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],width:m,height:"22.67"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:b,y:"19",fill:h[3],fontSize:"21.33",letterSpacing:"-1.75",children:u}),e.jsx("text",{className:"rmp-name__zh",x:m+2,y:"12",fontSize:"14.67",children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:m+4,y:"21.5",fontSize:"8",children:["Line ",u]})]})},V={num:1,color:[M.Shanghai,"sh1","#E4002B",S.white]},Ve=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:V).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:V;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.ShmetroNumLineBadge,defaultTheme:V.color})}],He=()=>e.jsx(D,{fields:Ve}),Je=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),e.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),e.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),e.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),Xe={component:qe,icon:Je,defaultAttrs:V,attrsComponent:He,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},Qe=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{names:u=Y.names,color:h=Y.color}=s!=null?s:Y,m=r.useRef(null),[b,j]=r.useState({width:12});r.useEffect(()=>j(m.current.getBBox()),[...u,j,m]);const N=r.useCallback(f=>a(n,f),[n,a]),g=r.useCallback(f=>l(n,f),[n,l]),x=r.useCallback(f=>p(n,f),[n,p]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:N,onPointerMove:g,onPointerUp:x,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:b.width+7,height:"21"}),e.jsxs("g",{ref:m,children:[e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(b.width+7)/2,y:"4",fontSize:"10",fill:h[3],letterSpacing:"-0.25",children:u[0]}),e.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(b.width+7)/2,y:"13",fontSize:"5",fill:h[3],letterSpacing:"-0.25",children:u[1]})]})]})},Y={names:["浦江线","Pujiang Line"],color:[M.Shanghai,"pjl","#B5B5B6",S.white]},Ge=o=>{const{id:n,attrs:t,handleAttrsUpdate:c}=o,{t:s}=U(),a=[{type:"textarea",label:s("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:l=>{t.names[0]=l,c(n,t)},minW:"full"},{type:"input",label:s("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:l=>{t.names[1]=l,c(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(A,{type:y.ShmetroTextLineBadge,defaultTheme:Y.color})}];return e.jsx(_,{fields:a})},Ze=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),e.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),e.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),Ye={component:Qe,icon:Ze,defaultAttrs:Y,attrsComponent:Ge,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},Ke=o=>{var x,f;const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{names:u=O.names,color:h=O.color,tram:m=O.tram,span:b=O.span}=s!=null?s:O,j=r.useCallback(i=>a(n,i),[n,a]),N=r.useCallback(i=>l(n,i),[n,l]),g=r.useCallback(i=>p(n,i),[n,p]);return e.jsx("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")scale(").concat(m?.5:1,")"),onPointerDown:j,onPointerMove:N,onPointerUp:g,style:{cursor:"move"},children:e.jsx(_e,{zhName:(x=u.at(0))!=null?x:"",enName:(f=u.at(1))!=null?f:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:h[3],backgroundColour:h[2],spanDigits:b})})},O={names:["1号线","Line 1"],color:[M.Guangzhou,"gz1","#F3D03E",S.black],tram:!1,span:!0},en=o=>{const{id:n,attrs:t,handleAttrsUpdate:c}=o,{t:s}=U(),a=[{type:"input",label:s("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:l=>{t.names[0]=l,c(n,t)},minW:"full"},{type:"input",label:s("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:l=>{t.names[1]=l,c(n,t)},minW:"full"},{type:"switch",label:s("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:l=>{t.tram=l,c(n,t)},minW:"full"},{type:"switch",label:s("panel.details.nodes.gzmtrLineBadge.span"),oneLine:!0,isChecked:t.span,onChange:l=>{t.span=l,c(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(A,{type:y.GzmtrLineBadge,defaultTheme:O.color})}];return e.jsx(_,{fields:a})},nn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),e.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),e.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),e.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),tn={component:Ke,icon:nn,defaultAttrs:O,attrsComponent:en,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},ee=11.84375,on=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=H.num,color:h=H.color}=s!=null?s:H,m=r.useCallback(g=>a(n,g),[n,a]),b=r.useCallback(g=>l(n,g),[n,l]),j=r.useCallback(g=>p(n,g),[n,p]),N=h[3]===S.black?"#003670":S.white;return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:m,onPointerMove:b,onPointerUp:j,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:ee+21,height:"16",rx:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:ee/2+2,y:"13.5",fill:N,fontSize:"15",letterSpacing:"-1.5",children:u}),e.jsx("text",{className:"rmp-name__zh",x:ee+(u>9?5.5:3),y:"8.5",fontSize:"7",fill:N,children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:ee+(u>9?6:4.5),y:"13.5",fontSize:"4",fill:N,children:["Line ",u]})]})},H={num:1,color:[M.Beijing,"bj1","#c23a30",S.white]},sn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:H).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:H;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.BjsubwayNumLineBadge,defaultTheme:H.color})}],ln=()=>e.jsx(D,{fields:sn}),an=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),e.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),e.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),rn={component:on,icon:an,defaultAttrs:H,attrsComponent:ln,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},cn=28.84375,dn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{names:u=R.names,color:h=R.color}=s!=null?s:R,m=r.useRef(null),[b,j]=r.useState({width:12});r.useEffect(()=>j(m.current.getBBox()),[...u,j,m]);const N=r.useCallback(d=>a(n,d),[n,a]),g=r.useCallback(d=>l(n,d),[n,l]),x=r.useCallback(d=>p(n,d),[n,p]),f=Math.max(cn,b.width),i=h[3]===S.black?"#003670":S.white;return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:N,onPointerMove:g,onPointerUp:x,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:f+4,height:"16",rx:"2"}),e.jsxs("g",{ref:m,children:[e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(f+4)/2,y:"8",fontSize:"7",fill:i,children:u[0]}),e.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(f+4)/2,y:"13.5",fontSize:"4",fill:i,children:u[1]})]})]})},R={names:["八通线","Batong Line"],color:[M.Beijing,"bj1","#c23a30",S.white]},mn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:R).names[0],onChange:(o,n)=>{const t=n!=null?n:R;return t.names[0]=o.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:R).names[1],onChange:(o,n)=>{const t=n!=null?n:R;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.BjsubwayTextLineBadge,defaultTheme:R.color})}],un=()=>e.jsx(D,{fields:mn}),hn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),e.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),e.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),xn={component:dn,icon:hn,defaultAttrs:R,attrsComponent:un,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},pn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=I.num,branch:h=I.branch,color:m=I.color}=s!=null?s:I,b=r.useCallback(g=>a(n,g),[n,a]),j=r.useCallback(g=>l(n,g),[n,l]),N=r.useCallback(g=>p(n,g),[n,p]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:b,onPointerMove:j,onPointerUp:N,style:{cursor:"move"},children:[e.jsx("rect",{fill:m[2],width:"20",height:"20",rx:"2",ry:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:m[3],fontSize:"15",letterSpacing:"-1",children:u}),h&&e.jsxs(e.Fragment,{children:[e.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),e.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},I={num:1,branch:!1,color:[M.Suzhou,"sz1","#78BA25",S.white]},gn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:I).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:I;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:o=>{var n;return(n=o==null?void 0:o.branch)!=null?n:I.branch},onChange:(o,n)=>{const t=n!=null?n:I;return t.branch=o,t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.SuzhouRTNumLineBadge,defaultTheme:I.color})}],fn=()=>e.jsx(D,{fields:gn}),yn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),e.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),bn={component:pn,icon:yn,defaultAttrs:I,attrsComponent:fn,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},jn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=J.num,color:h=J.color}=s!=null?s:J,m=r.useCallback(g=>a(n,g),[n,a]),b=r.useCallback(g=>l(n,g),[n,l]),j=r.useCallback(g=>p(n,g),[n,p]),N=h[3];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:m,onPointerMove:b,onPointerUp:j,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"25",height:"15"}),e.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:N,fontSize:"14",letterSpacing:"1",children:["U",u]})]})},J={num:1,color:[M.Berlin,"bu1","#62AD2D",S.white]},Nn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:J).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:J;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.BerlinUBahnLineBadge,defaultTheme:J.color})}],wn=()=>e.jsx(D,{fields:Nn}),Bn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),e.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),Cn={component:jn,icon:Bn,defaultAttrs:J,attrsComponent:wn,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},vn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=X.num,color:h=X.color}=s!=null?s:X,[m,b]=u>=10?[6,19.75]:[10,20],j=r.useCallback(f=>a(n,f),[n,a]),N=r.useCallback(f=>l(n,f),[n,l]),g=r.useCallback(f=>p(n,f),[n,p]),x=h[3];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:j,onPointerMove:N,onPointerUp:g,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"30",height:"15",rx:"8"}),e.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:m,y:"12.5",fill:x,fontSize:"14",letterSpacing:"0",children:"S"}),e.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:b,y:"12.5",fill:x,fontSize:"14",letterSpacing:"-0.2",children:u})]})},X={num:1,color:[M.Berlin,"bs1","#DD6CA6",S.white]},Sn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:X).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:X;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.BerlinSBahnLineBadge,defaultTheme:X.color})}],Ln=()=>e.jsx(D,{fields:Sn}),Pn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),e.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),Tn={component:vn,icon:Pn,defaultAttrs:X,attrsComponent:Ln,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},zn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=Q.num,color:h=Q.color}=s!=null?s:Q,m=r.useCallback(i=>a(n,i),[n,a]),b=r.useCallback(i=>l(n,i),[n,l]),j=r.useCallback(i=>p(n,i),[n,p]),N=h[3],g=Number.isInteger(u)?16:15,[x,f]=Number.isInteger(u)?Number(u)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:m,onPointerMove:b,onPointerUp:j,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:f,y:"10",fill:N,fontSize:g,letterSpacing:x,dominantBaseline:"central",children:u})]})},Q={num:1,color:[M.Chongqing,"cq1","#e4002b",S.white]},Mn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:Q).num,validator:o=>!Number.isNaN(o),onChange:(o,n)=>{const t=n!=null?n:Q;return Number.isNaN(Number(o))?t.num=o:t.num=Number(o),t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.ChongqingRTNumLineBadge,defaultTheme:Q.color})}],An=()=>e.jsx(D,{fields:Mn}),kn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),e.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),_n={component:zn,icon:kn,defaultAttrs:Q,attrsComponent:An,metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},In=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{names:u=$.names,color:h=$.color}=s!=null?s:$,m=r.useRef(null),b=r.useCallback(x=>a(n,x),[n,a]),j=r.useCallback(x=>l(n,x),[n,l]),N=r.useCallback(x=>p(n,x),[n,p]),g=h[3];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:b,onPointerMove:j,onPointerUp:N,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:g,fontSize:"6",letterSpacing:"0",children:u[0]}),e.jsx(de,{ref:m,text:u[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:g,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},$={names:["空港线","Konggang Line"],color:[M.Chongqing,"cq3","#003da5",S.white]},Rn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:$).names[0],onChange:(o,n)=>{const t=n!=null?n:$;return t.names[0]=o.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:$).names[1],onChange:(o,n)=>{const t=n!=null?n:$;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:e.jsx(A,{type:y.ChongqingRTTextLineBadge,defaultTheme:$.color})}],$n=()=>e.jsx(D,{fields:Rn}),Dn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),e.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),e.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),Un={component:In,icon:Dn,defaultAttrs:$,attrsComponent:$n,metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},ne=11.84375,En=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=G.num,color:h=G.color,isBranch:m=G.isBranch}=s!=null?s:G,b=r.useCallback(w=>a(n,w),[n,a]),j=r.useCallback(w=>l(n,w),[n,l]),N=r.useCallback(w=>p(n,w),[n,p]),g=h[3]===S.black?"#003670":S.white,x=m?10:ne+(u>9?6.5:3),f=m?-1:0,i=m?11:ne+(u>9?7:3.5),d=m?6:ne/2+4;return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:b,onPointerMove:j,onPointerUp:N,style:{cursor:"move"},children:[e.jsx("rect",{fill:h[2],x:"0",width:ne+21,height:"16",rx:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:d,y:"13.5",fill:g,fontSize:"15",letterSpacing:"-1",children:u}),e.jsxs("text",{className:"rmp-name__zh",x,y:"9.5",fontSize:"6",fill:g,letterSpacing:f,children:["号线",m?"支线":""]}),e.jsxs("text",{className:"rmp-name__en",x:i,y:"13.5",fontSize:"3",fill:g,children:[m?"Branch":""," Line ",u]})]})},G={num:1,color:[M.Shenzhen,"sz1","#00b140",S.white],isBranch:!1},Fn=o=>{const{id:n,attrs:t,handleAttrsUpdate:c}=o,{t:s}=U(),a=[{type:"input",label:s("panel.details.nodes.common.num"),value:String(t.num),validator:l=>!Number.isNaN(l),onChange:l=>{t.num=Number(l),c(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(A,{type:y.ShenzhenMetroNumLineBadge,defaultTheme:G.color}),minW:"full"},{type:"switch",label:s("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:l=>{t.isBranch=l,c(n,t)},minW:"full"}];return e.jsx(_,{fields:a})},On=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),e.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),e.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),Wn={component:En,icon:On,defaultAttrs:G,attrsComponent:Fn,metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},qn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=K.num,color:h=K.color}=s!=null?s:K,m=r.useCallback(x=>a(n,x),[n,a]),b=r.useCallback(x=>l(n,x),[n,l]),j=r.useCallback(x=>p(n,x),[n,p]),N=h[3],g=h[2];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:m,onPointerMove:b,onPointerUp:j,style:{cursor:"move"},children:[e.jsx("circle",{r:"8",fill:g}),e.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:N,fontSize:"12",dominantBaseline:"central",letterSpacing:"-0.2",children:u})]})},K={num:1,color:[M.Singapore,"ewl","#009739",S.white]},Vn=o=>{const{id:n,attrs:t,handleAttrsUpdate:c}=o,{t:s}=U(),a=[{type:"input",label:s("panel.details.nodes.common.num"),value:String(t.num),validator:l=>!Number.isNaN(l),onChange:l=>{t.num=Number(l),c(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(A,{type:y.MRTDestinationNumbers,defaultTheme:K.color}),minW:"full"}];return e.jsx(_,{fields:a})},Hn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),e.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),Jn={component:qn,icon:Hn,defaultAttrs:K,attrsComponent:Vn,metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},te=4,re=7,oe=10,ue=5,Xn=5,T=Xn*Math.SQRT1_2,me=.25,se=(T*Math.SQRT2-me)/2*Math.SQRT2,Qn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{names:u=W.names,num:h=W.num,color:m=W.color,crosshatchPatternFill:b=W.crosshatchPatternFill}=s!=null?s:W,j=r.useRef(null),[N,g]=r.useState({height:10,width:12});r.useEffect(()=>g(j.current.getBBox()),[...u,g,j]);const x=r.useCallback(d=>a(n,d),[n,a]),f=r.useCallback(d=>l(n,d),[n,l]),i=r.useCallback(d=>p(n,d),[n,p]);return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:x,onPointerMove:f,onPointerUp:i,style:{cursor:"move"},children:[e.jsxs("defs",{children:[e.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[e.jsx("polygon",{points:"0,0 0,".concat(se," ").concat(se,",0")}),e.jsx("polygon",{points:"".concat(T,",").concat(T," ").concat(T-se,",").concat(T," ").concat(T,",").concat(T-se)})]}),e.jsxs("pattern",{id:"jr_east_".concat(n,"_fill_pattern_").concat(m[2]),width:T,height:T,patternUnits:"userSpaceOnUse",children:[e.jsx("rect",{width:T,height:T,fill:m[2]}),e.jsx("line",{x1:"0",y1:"0",x2:T,y2:T,stroke:"white",strokeWidth:me,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),e.jsx("line",{x1:T,y1:"0",x2:"0",y2:T,stroke:"white",strokeWidth:me,strokeOpacity:"33%"})]})]}),e.jsx("rect",{fill:b?"url(#jr_east_".concat(n,"_fill_pattern_").concat(m[2],")"):m[2],x:"0",y:"-1",width:N.width+te+10,height:N.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),e.jsx("circle",{r:te,cx:re,cy:oe/2+1,stroke:"black",strokeWidth:"0.25",fill:m[3]}),e.jsx("text",{x:re,y:oe/2+1.75,textAnchor:"middle",dominantBaseline:"middle",fill:m[3]==="#000"?"white":m[2],fontSize:h>9?7:8,className:"rmp-name__jreast_en",children:h}),e.jsx(de,{ref:j,text:u[0].split("\\"),x:re+te+1,y:"-1",fill:m[3],fontSize:oe,lineHeight:oe,grow:"down",className:"rmp-name__jreast_ja"}),e.jsx(de,{text:u[1].split("\\"),textAnchor:"middle",dominantBaseline:"hanging",x:(N.width+te+10)/2,y:N.height+1,fontSize:ue,lineHeight:ue,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},W={names:["山手線","Yamanote Line"],color:[M.Tokyo,"jy","#9ACD32",S.black],num:9,crosshatchPatternFill:!1},Gn=o=>{const{id:n,attrs:t,handleAttrsUpdate:c}=o,{t:s}=U(),a=[{type:"input",label:s("panel.details.nodes.common.num"),value:String(t.num),validator:l=>!Number.isNaN(l),onChange:l=>{t.num=Number(l),c(n,t)},minW:"full"},{type:"textarea",label:s("panel.details.nodes.common.nameJa"),value:t.names[0].replaceAll("\\","\n"),onChange:l=>{t.names[0]=l.replaceAll("\n","\\"),c(n,t)},minW:"full"},{type:"textarea",label:s("panel.details.nodes.common.nameEn"),value:t.names[1].replaceAll("\\","\n"),onChange:l=>{t.names[1]=l.replaceAll("\n","\\"),c(n,t)},minW:"full"},{type:"switch",label:s("panel.details.nodes.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:t.crosshatchPatternFill,onChange:l=>{t.crosshatchPatternFill=l,c(n,t)},minW:"full"},{type:"custom",label:s("color"),component:e.jsx(A,{type:y.JREastLineBadge,defaultTheme:W.color})}];return e.jsx(_,{fields:a})},Zn=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),e.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),e.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),e.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),e.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),Yn={component:Qn,icon:Zn,defaultAttrs:W,attrsComponent:Gn,metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},Kn=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,{num:u=q.num,numEn:h=q.numEn,color:m=q.color,showText:b=q.showText}=s!=null?s:q,j=r.useCallback(v=>a(n,v),[n,a]),N=r.useCallback(v=>l(n,v),[n,l]),g=r.useCallback(v=>p(n,v),[n,p]),x=m[3],[f,i,d,w]=Number(u)>=10?[-2.4,0,10.25,20]:[0,4,10,22];return e.jsxs("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),onPointerDown:j,onPointerMove:N,onPointerUp:g,style:{cursor:"move"},children:[e.jsx("rect",{fill:m[2],x:"0",width:"20",height:"20",rx:"2",ry:"2"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:i,y:d,fill:x,fontSize:w,fontWeight:"bold",letterSpacing:f,dominantBaseline:"central",children:u}),b&&e.jsxs(e.Fragment,{children:[e.jsx("text",{className:"rmp-name__zh",x:"22",y:"10.5",fontSize:"13",children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:"22.5",y:"19.5",fontSize:"8",children:["Line ",h]})]})]})},q={num:1,numEn:"1",showText:!0,color:[M.Qingdao,"qd1","#f7b000",S.white]},et=o=>{const{id:n,attrs:t,handleAttrsUpdate:c}=o,{t:s}=U(),a=[{type:"input",label:s("panel.details.nodes.common.num"),value:t.num.toString(),onChange:l=>{t.num=Number(l),t.numEn=l,c(n,t)}},{type:"input",label:s("panel.details.nodes.qingdaoMetroNumLineBadge.numEn"),value:t.numEn.toString(),onChange:l=>{t.numEn=l,c(n,t)}},{type:"switch",label:s("panel.details.nodes.qingdaoMetroNumLineBadge.showText"),isChecked:t.showText,oneLine:!0,onChange:l=>{t.showText=l,c(n,t)}},{type:"custom",label:s("color"),component:e.jsx(A,{type:y.QingdaoMetroNumLineBadge,defaultTheme:q.color})}];return e.jsx(_,{fields:a,minW:"full"})},nt=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",rx:"1",ry:"1",width:"10",height:"10"}),e.jsx("text",{x:"4",y:"15",fill:"white",fontSize:"12",children:"1"}),e.jsx("text",{x:"12",y:"11.5",fill:"black",fontSize:"6",children:"号线"}),e.jsx("text",{x:"12",y:"15.5",fill:"black",fontSize:"4",children:"Line1"})]}),tt={component:Kn,icon:nt,defaultAttrs:q,attrsComponent:et,metadata:{displayName:"panel.details.nodes.qingdaoMetroNumLineBadge.displayName",tags:[]}},ot=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,u=Re();s.content=u(s.contents);const h=le.component;return e.jsx(h,{id:n,x:t,y:c,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p,attrs:s})},st={contents:{},...Ie},lt={component:ot,icon:le.icon,defaultAttrs:st,attrsComponent:le.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}},at={id:"new",value:"Upload a new param",param:null},he={id:"null",value:"",param:null},Se=o=>{const{isOpen:n,onClose:t,onSubmit:c}=o,{t:s}=U(),a=r.useRef(window.graph),l=!0,[p,u]=r.useState([]),[h,m]=r.useState(he);r.useEffect(()=>{if(n){j(""),g(""),m(he);const i=ve(a.current).filter(d=>d.randomId!=="undefined").map(d=>({id:d.randomId,value:d.randomId,param:d}));u([at].concat(i))}},[n]);const[b,j]=r.useState(""),[N,g]=r.useState(""),x=[{type:"custom",label:"Import from",component:e.jsx(Le,{data:p,displayHandler:i=>e.jsx(ce,{name:i.value,fg:S.white,bg:i.param===null?"#000000":"#ff8651",title:i.value,sx:{display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"}}),filter:(i,d)=>d.id.toLowerCase().includes(i.toLowerCase())||Object.values(d.id).some(w=>w.toLowerCase().includes(i.toLowerCase())),value:h.value,onChange:i=>m(i)})},{type:"textarea",label:s("Paste JSON from RMP Designer"),value:b.toString(),onChange:i=>j(i),minW:"full",hidden:h.param!==null||!l}],f=()=>{try{c(h.param===null?b:JSON.stringify(h.param))}catch(i){g("Something went wrong.");return}t()};return r.useEffect(()=>g(""),[n]),e.jsxs(fe,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[e.jsx(ye,{}),e.jsxs(be,{children:[e.jsx(je,{children:s("Upload master parameter")}),e.jsx(Ne,{}),e.jsxs(we,{minH:200,children:[e.jsx(_,{fields:x}),e.jsx("span",{style:{color:"red"},hidden:h.param!==null,children:N})]}),e.jsxs(Be,{children:[e.jsx(F,{colorScheme:"blue",variant:"outline",mr:"1",onClick:t,children:s("cancel")}),e.jsx(F,{colorScheme:"blue",variant:"outline",mr:"1",onClick:f,children:s("apply")})]})]})]})},it=o=>{const{isOpen:n,onClose:t}=o,{t:c}=U(),{refresh:{nodes:s}}=xe(i=>i.runtime),a=r.useRef(window.graph),l=pe(),p=Ce(),[u,h]=r.useState([]);r.useEffect(()=>{n&&h(ve(a.current))},[n,s]);const[m,b]=r.useState(void 0),j=i=>{const d=JSON.parse(i),w=d.id?d.id:d.randomId,v={randomId:w,label:d.label?d.label:w,nodeType:d.nodeType?d.nodeType:d.type,svgs:d.svgs,components:d.components,color:d.color,core:d.core,version:d.version};if(!v.version){p({title:"Outdated configuration!",status:"error",duration:9e3,isClosable:!0});return}a.current.filterNodes(C=>a.current.getNodeAttribute(C,"type")===y.Master&&a.current.getNodeAttributes(C)[y.Master].randomId===m).forEach(C=>{const B=structuredClone(v),k=a.current.getNodeAttributes(C),P=structuredClone(k[y.Master]),E=L=>{P.components.forEach(z=>{var Z;if(z.id===L)return(Z=z.value)!=null?Z:z.defaultValue})};B.components.forEach((L,z)=>{var Z;B.components[z].value=(Z=E(L.id))!=null?Z:L.defaultValue}),B.color!==void 0&&(B.color.value=P.color?B.color.value:B.color.defaultValue),a.current.mergeNodeAttributes(C,{[y.Master]:B})}),l(ae()),l(ie(a.current.export()))},N=i=>{const d={id:i.randomId,type:i.nodeType,svgs:i.svgs,components:i.components,color:i.color,core:i.core,version:i.version};d.components.forEach((w,v)=>{d.components[v].value=w.defaultValue}),$e("RMP_Master_Node_".concat(new Date().valueOf(),".json"),"application/json",JSON.stringify(d))},g=i=>{a.current.filterNodes(d=>a.current.getNodeAttribute(d,"type")===y.Master&&a.current.getNodeAttributes(d)[y.Master].randomId===i).forEach(d=>{a.current.dropNode(d)}),l(ae()),l(ie(a.current.export()))},x=(i,d)=>{a.current.filterNodes(w=>a.current.getNodeAttribute(w,"type")===y.Master&&a.current.getNodeAttributes(w)[y.Master].randomId===i.randomId).forEach(w=>{a.current.mergeNodeAttributes(w,{[y.Master]:{...i,label:d}})}),l(ae()),l(ie(a.current.export()))},f=u.map(i=>{var d,w;return[{label:"id",type:"custom",component:e.jsx(ce,{name:i.randomId,fg:S.white,bg:i.randomId==="undefined"?"#000000":"#19B3EA"})},{label:"label",type:"input",value:(d=i.label)!=null?d:i.randomId,onChange:v=>x(i,v),hidden:i.randomId==="undefined"},{label:"label",type:"output",value:(w=i.label)!=null?w:i.randomId,hidden:i.randomId!=="undefined"},{label:"type",type:"custom",component:e.jsx(ce,{name:i.nodeType,fg:S.white,bg:i.nodeType==="MiscNode"?"#FF8651":"#51BC00"})},{label:"",type:"custom",component:e.jsxs(ke,{direction:"row",children:[e.jsx(F,{onClick:()=>b(i.randomId),children:e.jsx(ge,{})}),e.jsx(F,{onClick:()=>N(i),isDisabled:i.randomId==="undefined",children:e.jsx(Pe,{})}),e.jsx(F,{onClick:()=>g(i.randomId),children:e.jsx(Te,{})})]})}]});return e.jsxs(fe,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[e.jsx(ye,{}),e.jsxs(be,{children:[e.jsx(je,{children:c("Master Node Manager")}),e.jsx(Ne,{}),e.jsxs(we,{children:[f.map((i,d)=>e.jsx(_,{fields:i},d)),e.jsx(Se,{isOpen:!!m,onClose:()=>b(void 0),onSubmit:j})]}),e.jsx(Be,{children:e.jsx(F,{colorScheme:"blue",variant:"outline",mr:"1",onClick:t,children:c("close")})})]})]})},rt=o=>{const{id:n,x:t,y:c,attrs:s,handlePointerDown:a,handlePointerMove:l,handlePointerUp:p}=o,u=r.useCallback(x=>a(n,x),[n,a]),h=r.useCallback(x=>l(n,x),[n,l]),m=r.useCallback(x=>p(n,x),[n,p]),b=(x,...f)=>new Function(...f,"return ".concat(x)),j=(x,f,i)=>{var w;const d={};for(const v in x)if(Object.prototype.hasOwnProperty.call(x,v))try{d[v]=b(x[v].slice(1),...s.components.map(C=>C.label),"color")(...f.map((C,B)=>i[B]==="number"&&!Number.isNaN(Number(C))?Number(C):C),s.color?(w=s.color.value)!=null?w:s.color.defaultValue:"")}catch(C){d[v]=""}return d},N=s.nodeType==="MiscNode"?{onPointerDown:u,onPointerMove:h,onPointerUp:m,style:{cursor:"move"}}:{},g=x=>x.map(f=>{var w,v;const i=s.nodeType==="Station"&&s.core&&s.core===f.id?{id:"stn_core_".concat(n),onPointerDown:u,onPointerMove:h,onPointerUp:m,style:{cursor:"move"}}:{},d=j(f.attrs,s.components.map(C=>C.value),s.components.map(C=>C.type));return e.jsx("g",{transform:"translate(".concat((w=d.x)!=null?w:0,", ").concat((v=d.y)!=null?v:0,")"),children:r.createElement(f.type,{...d,x:0,y:0,...i},f.children?g(f.children):"_rmp_children_text"in d?d._rmp_children_text:null)},f.id)});return r.createElement("g",{id:n,transform:"translate(".concat(t,", ").concat(c,")"),...N},s.randomId!=="undefined"?g(s.svgs):e.jsxs(e.Fragment,{children:[e.jsx("circle",{r:5}),e.jsx("text",{x:-3.75,y:3,fill:"white",fontSize:"8",fontWeight:"bold",children:"M"})]}))},ct={randomId:"undefined",label:"Undefined",nodeType:"MiscNode",svgs:[],components:[]},dt=o=>{var w,v;const{id:n,attrs:t,handleAttrsUpdate:c}=o,s=pe(),a=Ce(),{paletteAppClip:{output:l}}=xe(C=>C.runtime),{t:p}=U(),[u,h]=r.useState(!1),[m,b]=r.useState(!1),j=C=>{t.components.forEach(B=>{var k;if(B.id===C)return(k=B.value)!=null?k:B.defaultValue})},N=C=>{const B=JSON.parse(C),k=B.id?B.id:B.randomId,P={randomId:k,label:B.label?B.label:k,nodeType:B.nodeType?B.nodeType:B.type,svgs:B.svgs,components:B.components,color:B.color,core:B.core,version:B.version};if(!P.version){a({title:"Outdated configuration!",status:"error",duration:9e3,isClosable:!0});return}P.components.forEach((E,L)=>{var z;P.components[L].value=(z=j(E.id))!=null?z:E.defaultValue}),P.color!==void 0&&(P.color.value=t.color?t.color.value:P.color.defaultValue),c(n,P)},g=[{type:"output",label:"Master Type",value:(w=t.label)!=null?w:t.randomId},{type:"custom",label:"",component:e.jsxs(e.Fragment,{children:[e.jsx(F,{onClick:()=>h(!0),children:e.jsx(ge,{})}),e.jsx(F,{onClick:()=>b(!0),children:e.jsx(ze,{})})]}),oneLine:!0}],x=t.components.map((C,B)=>{const{label:k,type:P,defaultValue:E,value:L}=C;return P==="number"||P==="text"?{label:k,type:"input",value:L!=null?L:E,onChange:z=>{t.components[B].value=z,c(n,{...t,components:t.components})}}:P==="switch"?{label:k,type:"switch",isChecked:(L!=null?L:E)==="true",onChange:z=>{t.components[B].value=z,c(n,{...t,components:t.components})}}:P==="textarea"?{label:k,type:"textarea",value:L!=null?L:E,onChange:z=>{t.components[B].value=z,c(n,{...t,components:t.components})}}:{type:"input",label:"undefined",value:"none"}}),[f,i]=r.useState(!1);r.useEffect(()=>{t.color&&f&&l&&(t.color.value=l,c(n,{...t,color:t.color}),i(!1))},[l==null?void 0:l.toString()]);const d=[{type:"custom",label:p("color"),component:e.jsx(Me,{theme:(v=t.color)==null?void 0:v.value,onClick:()=>{var C;i(!0),s(Ae((C=t.color)==null?void 0:C.value))}})}];return e.jsxs(e.Fragment,{children:[e.jsx(_,{fields:g}),t.randomId!=="undefined"&&e.jsx(_,{fields:x,minW:"full"}),t.randomId!=="undefined"&&t.color!==void 0&&e.jsx(_,{fields:d,minW:"full"}),e.jsx(Se,{isOpen:u,onClose:()=>h(!1),onSubmit:N}),e.jsx(it,{isOpen:m,onClose:()=>b(!1)})]})},mt=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),e.jsx("text",{x:"8.5",y:"15",fill:"currentColor",fontSize:"8",children:"M"})]}),ut={component:rt,icon:mt,defaultAttrs:ct,attrsComponent:dt,metadata:{displayName:"panel.details.nodes.master.displayName",tags:[]}},ft={[y.Virtual]:We,[y.ShmetroNumLineBadge]:Xe,[y.ShmetroTextLineBadge]:Ye,[y.GzmtrLineBadge]:tn,[y.BjsubwayNumLineBadge]:rn,[y.BjsubwayTextLineBadge]:xn,[y.SuzhouRTNumLineBadge]:bn,[y.BerlinSBahnLineBadge]:Tn,[y.BerlinUBahnLineBadge]:Cn,[y.ChongqingRTNumLineBadge]:_n,[y.ChongqingRTTextLineBadge]:Un,[y.ShenzhenMetroNumLineBadge]:Wn,[y.MRTDestinationNumbers]:Jn,[y.JREastLineBadge]:Yn,[y.QingdaoMetroNumLineBadge]:tt,[y.Facilities]:De,[y.Text]:le,[y.I18nText]:lt,[y.Master]:ut};export{ft as m};
