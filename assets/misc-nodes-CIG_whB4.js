import{aO as D,C as T,b as v,aP as A,ay as j,j as $,aQ as re,e as ue,a as xe,W as pe,X as ge,Q as fe,F as ye,ak as be}from"./index-D64eksvl.js";import{j as n,aL as je,g as Be,a$ as we,af as Ne,O as Ce}from"./chakra-CY2lu-Ge.js";import{b as s,u as I}from"./react-s9wvNQ8e.js";import{L as Le,g as se,h as ve,t as ae,j as Se,k as Pe,M as Te,n as ze}from"./master-manager-D2wyH5_m.js";const Ae=o=>{const{id:e,x:t,y:i,handlePointerDown:a,handlePointerMove:r,handlePointerUp:l}=o,m=s.useCallback(c=>a(e,c),[e,a]),d=s.useCallback(c=>r(e,c),[e,r]),h=s.useCallback(c=>l(e,c),[e,l]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")rotate(45)"),onPointerDown:m,onPointerMove:d,onPointerUp:h,style:{cursor:"move"},className:"removeMe",children:[n.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),n.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),n.jsx("circle",{id:"virtual_circle_".concat(e),r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},ke={},Me=()=>n.jsx(D,{fields:[]}),_e=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[n.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),n.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),n.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),$e={component:Ae,icon:_e,defaultAttrs:ke,attrsComponent:Me,metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},Re=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=O.num,color:h=O.color}=a!=null?a:O,[c,f]=d>=10?[22.67,10.75]:[21,10],g=s.useCallback(x=>r(e,x),[e,r]),y=s.useCallback(x=>l(e,x),[e,l]),u=s.useCallback(x=>m(e,x),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:g,onPointerMove:y,onPointerUp:u,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],width:c,height:"22.67"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:f,y:"19",fill:h[3],fontSize:"21.33",letterSpacing:"-1.75",children:d}),n.jsx("text",{className:"rmp-name__zh",x:c+2,y:"12",fontSize:"14.67",children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:c+4,y:"21.5",fontSize:"8",children:["Line ",d]})]})},O={num:1,color:[T.Shanghai,"sh1","#E4002B",v.white]},Ue=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:O).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:O;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.ShmetroNumLineBadge,defaultTheme:O.color})}],De=()=>n.jsx(D,{fields:Ue}),Ie=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),n.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),n.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),n.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),Ee={component:Re,icon:Ie,defaultAttrs:O,attrsComponent:De,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},We=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{names:d=J.names,color:h=J.color}=a!=null?a:J,c=s.useRef(null),[f,g]=s.useState({width:12});s.useEffect(()=>g(c.current.getBBox()),[...d,g,c]);const y=s.useCallback(p=>r(e,p),[e,r]),u=s.useCallback(p=>l(e,p),[e,l]),x=s.useCallback(p=>m(e,p),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:y,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:f.width+7,height:"21"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(f.width+7)/2,y:"4",fontSize:"10",fill:h[3],letterSpacing:"-0.25",children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(f.width+7)/2,y:"13",fontSize:"5",fill:h[3],letterSpacing:"-0.25",children:d[1]})]})]})},J={names:["浦江线","Pujiang Line"],color:[T.Shanghai,"pjl","#B5B5B6",v.white]},Fe=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"textarea",label:a("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:l=>{t.names[0]=l,i(e,t)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:l=>{t.names[1]=l,i(e,t)},minW:"full"},{type:"custom",label:a("color"),component:n.jsx(A,{type:j.ShmetroTextLineBadge,defaultTheme:J.color})}];return n.jsx($,{fields:r})},qe=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),n.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),n.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),Oe={component:We,icon:qe,defaultAttrs:J,attrsComponent:Fe,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},Qe=o=>{var x,p;const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{names:d=W.names,color:h=W.color,tram:c=W.tram,span:f=W.span}=a!=null?a:W,g=s.useCallback(w=>r(e,w),[e,r]),y=s.useCallback(w=>l(e,w),[e,l]),u=s.useCallback(w=>m(e,w),[e,m]);return n.jsx("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")scale(").concat(c?.5:1,")"),onPointerDown:g,onPointerMove:y,onPointerUp:u,style:{cursor:"move"},children:n.jsx(Le,{zhName:(x=d.at(0))!=null?x:"",enName:(p=d.at(1))!=null?p:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:h[3],backgroundColour:h[2],spanDigits:f})})},W={names:["1号线","Line 1"],color:[T.Guangzhou,"gz1","#F3D03E",v.black],tram:!1,span:!0},Ge=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"input",label:a("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:l=>{t.names[0]=l,i(e,t)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:l=>{t.names[1]=l,i(e,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:l=>{t.tram=l,i(e,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.gzmtrLineBadge.span"),oneLine:!0,isChecked:t.span,onChange:l=>{t.span=l,i(e,t)},minW:"full"},{type:"custom",label:a("color"),component:n.jsx(A,{type:j.GzmtrLineBadge,defaultTheme:W.color})}];return n.jsx($,{fields:r})},Ve=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),n.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),n.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),n.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),Xe={component:Qe,icon:Ve,defaultAttrs:W,attrsComponent:Ge,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},Y=11.84375,He=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=Q.num,color:h=Q.color}=a!=null?a:Q,c=s.useCallback(u=>r(e,u),[e,r]),f=s.useCallback(u=>l(e,u),[e,l]),g=s.useCallback(u=>m(e,u),[e,m]),y=h[3]===v.black?"#003670":v.white;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:c,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:Y+21,height:"16",rx:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:Y/2+2,y:"13.5",fill:y,fontSize:"15",letterSpacing:"-1.5",children:d}),n.jsx("text",{className:"rmp-name__zh",x:Y+(d>9?5.5:3),y:"8.5",fontSize:"7",fill:y,children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:Y+(d>9?6:4.5),y:"13.5",fontSize:"4",fill:y,children:["Line ",d]})]})},Q={num:1,color:[T.Beijing,"bj1","#c23a30",v.white]},Je=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:Q).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:Q;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.BjsubwayNumLineBadge,defaultTheme:Q.color})}],Ze=()=>n.jsx(D,{fields:Je}),Ye=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),n.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),n.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),Ke={component:He,icon:Ye,defaultAttrs:Q,attrsComponent:Ze,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},en=28.84375,nn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{names:d=R.names,color:h=R.color}=a!=null?a:R,c=s.useRef(null),[f,g]=s.useState({width:12});s.useEffect(()=>g(c.current.getBBox()),[...d,g,c]);const y=s.useCallback(C=>r(e,C),[e,r]),u=s.useCallback(C=>l(e,C),[e,l]),x=s.useCallback(C=>m(e,C),[e,m]),p=Math.max(en,f.width),w=h[3]===v.black?"#003670":v.white;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:y,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:p+4,height:"16",rx:"2"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(p+4)/2,y:"8",fontSize:"7",fill:w,children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(p+4)/2,y:"13.5",fontSize:"4",fill:w,children:d[1]})]})]})},R={names:["八通线","Batong Line"],color:[T.Beijing,"bj1","#c23a30",v.white]},tn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:R).names[0],onChange:(o,e)=>{const t=e!=null?e:R;return t.names[0]=o.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:R).names[1],onChange:(o,e)=>{const t=e!=null?e:R;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.BjsubwayTextLineBadge,defaultTheme:R.color})}],on=()=>n.jsx(D,{fields:tn}),an=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),n.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),n.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),ln={component:nn,icon:an,defaultAttrs:R,attrsComponent:on,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},sn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=_.num,branch:h=_.branch,color:c=_.color}=a!=null?a:_,f=s.useCallback(u=>r(e,u),[e,r]),g=s.useCallback(u=>l(e,u),[e,l]),y=s.useCallback(u=>m(e,u),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:f,onPointerMove:g,onPointerUp:y,style:{cursor:"move"},children:[n.jsx("rect",{fill:c[2],width:"20",height:"20",rx:"2",ry:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:c[3],fontSize:"15",letterSpacing:"-1",children:d}),h&&n.jsxs(n.Fragment,{children:[n.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),n.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},_={num:1,branch:!1,color:[T.Suzhou,"sz1","#78BA25",v.white]},rn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:_).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:_;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:o=>{var e;return(e=o==null?void 0:o.branch)!=null?e:_.branch},onChange:(o,e)=>{const t=e!=null?e:_;return t.branch=o,t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.SuzhouRTNumLineBadge,defaultTheme:_.color})}],cn=()=>n.jsx(D,{fields:rn}),dn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),n.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),mn={component:sn,icon:dn,defaultAttrs:_,attrsComponent:cn,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},hn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=G.num,color:h=G.color}=a!=null?a:G,c=s.useCallback(u=>r(e,u),[e,r]),f=s.useCallback(u=>l(e,u),[e,l]),g=s.useCallback(u=>m(e,u),[e,m]),y=h[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:c,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"25",height:"15"}),n.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:y,fontSize:"14",letterSpacing:"1",children:["U",d]})]})},G={num:1,color:[T.Berlin,"bu1","#62AD2D",v.white]},un=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:G).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:G;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.BerlinUBahnLineBadge,defaultTheme:G.color})}],xn=()=>n.jsx(D,{fields:un}),pn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),gn={component:hn,icon:pn,defaultAttrs:G,attrsComponent:xn,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},fn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=V.num,color:h=V.color}=a!=null?a:V,[c,f]=d>=10?[6,19.75]:[10,20],g=s.useCallback(p=>r(e,p),[e,r]),y=s.useCallback(p=>l(e,p),[e,l]),u=s.useCallback(p=>m(e,p),[e,m]),x=h[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:g,onPointerMove:y,onPointerUp:u,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"30",height:"15",rx:"8"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:c,y:"12.5",fill:x,fontSize:"14",letterSpacing:"0",children:"S"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:f,y:"12.5",fill:x,fontSize:"14",letterSpacing:"-0.2",children:d})]})},V={num:1,color:[T.Berlin,"bs1","#DD6CA6",v.white]},yn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:V).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:V;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.BerlinSBahnLineBadge,defaultTheme:V.color})}],bn=()=>n.jsx(D,{fields:yn}),jn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),n.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),Bn={component:fn,icon:jn,defaultAttrs:V,attrsComponent:bn,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},wn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=X.num,color:h=X.color}=a!=null?a:X,c=s.useCallback(w=>r(e,w),[e,r]),f=s.useCallback(w=>l(e,w),[e,l]),g=s.useCallback(w=>m(e,w),[e,m]),y=h[3],u=Number.isInteger(d)?16:15,[x,p]=Number.isInteger(d)?Number(d)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:c,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:p,y:"10",fill:y,fontSize:u,letterSpacing:x,dominantBaseline:"central",children:d})]})},X={num:1,color:[T.Chongqing,"cq1","#e4002b",v.white]},Nn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:X).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:X;return Number.isNaN(Number(o))?t.num=o:t.num=Number(o),t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.ChongqingRTNumLineBadge,defaultTheme:X.color})}],Cn=()=>n.jsx(D,{fields:Nn}),Ln=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),vn={component:wn,icon:Ln,defaultAttrs:X,attrsComponent:Cn,metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},Sn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{names:d=U.names,color:h=U.color}=a!=null?a:U,c=s.useRef(null),f=s.useCallback(x=>r(e,x),[e,r]),g=s.useCallback(x=>l(e,x),[e,l]),y=s.useCallback(x=>m(e,x),[e,m]),u=h[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:f,onPointerMove:g,onPointerUp:y,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:u,fontSize:"6",letterSpacing:"0",children:d[0]}),n.jsx(se,{ref:c,text:d[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:u,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},U={names:["空港线","Konggang Line"],color:[T.Chongqing,"cq3","#003da5",v.white]},Pn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:U).names[0],onChange:(o,e)=>{const t=e!=null?e:U;return t.names[0]=o.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:U).names[1],onChange:(o,e)=>{const t=e!=null?e:U;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:n.jsx(A,{type:j.ChongqingRTTextLineBadge,defaultTheme:U.color})}],Tn=()=>n.jsx(D,{fields:Pn}),zn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),n.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),An={component:Sn,icon:zn,defaultAttrs:U,attrsComponent:Tn,metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},K=11.84375,kn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=H.num,color:h=H.color,isBranch:c=H.isBranch}=a!=null?a:H,f=s.useCallback(B=>r(e,B),[e,r]),g=s.useCallback(B=>l(e,B),[e,l]),y=s.useCallback(B=>m(e,B),[e,m]),u=h[3]===v.black?"#003670":v.white,x=c?10:K+(d>9?6.5:3),p=c?-1:0,w=c?11:K+(d>9?7:3.5),C=c?6:K/2+4;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:f,onPointerMove:g,onPointerUp:y,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:K+21,height:"16",rx:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:C,y:"13.5",fill:u,fontSize:"15",letterSpacing:"-1",children:d}),n.jsxs("text",{className:"rmp-name__zh",x,y:"9.5",fontSize:"6",fill:u,letterSpacing:p,children:["号线",c?"支线":""]}),n.jsxs("text",{className:"rmp-name__en",x:w,y:"13.5",fontSize:"3",fill:u,children:[c?"Branch":""," Line ",d]})]})},H={num:1,color:[T.Shenzhen,"sz1","#00b140",v.white],isBranch:!1},Mn=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:l=>!Number.isNaN(l),onChange:l=>{t.num=Number(l),i(e,t)},minW:"full"},{type:"custom",label:a("color"),component:n.jsx(A,{type:j.ShenzhenMetroNumLineBadge,defaultTheme:H.color}),minW:"full"},{type:"switch",label:a("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:l=>{t.isBranch=l,i(e,t)},minW:"full"}];return n.jsx($,{fields:r})},_n=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),n.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),n.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),$n={component:kn,icon:_n,defaultAttrs:H,attrsComponent:Mn,metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},Rn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=Z.num,color:h=Z.color}=a!=null?a:Z,c=s.useCallback(x=>r(e,x),[e,r]),f=s.useCallback(x=>l(e,x),[e,l]),g=s.useCallback(x=>m(e,x),[e,m]),y=h[3],u=h[2];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:c,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("circle",{r:"8",fill:u}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:y,fontSize:"12",dominantBaseline:"central",letterSpacing:"-0.2",children:d})]})},Z={num:1,color:[T.Singapore,"ewl","#009739",v.white]},Un=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:l=>!Number.isNaN(l),onChange:l=>{t.num=Number(l),i(e,t)},minW:"full"},{type:"custom",label:a("color"),component:n.jsx(A,{type:j.MRTDestinationNumbers,defaultTheme:Z.color}),minW:"full"}];return n.jsx($,{fields:r})},Dn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),In={component:Rn,icon:Dn,defaultAttrs:Z,attrsComponent:Un,metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},En=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{lineCode:d=E.lineCode,color:h=E.color,lines:c=E.lines,name:f=E.name,isTram:g=E.isTram}=a!=null?a:E,y=s.useCallback(b=>r(e,b),[e,r]),u=s.useCallback(b=>l(e,b),[e,l]),x=s.useCallback(b=>m(e,b),[e,m]),p=22.85,w=12.935,C=h[3],B=h[2];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:y,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{transform:"scale(1.8)",x:-p/2,y:-w/2,rx:"3",ry:"6",width:p,height:w,fill:B,stroke:"white",strokeWidth:"1"}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",fill:C,fontSize:"15",dominantBaseline:"central",letterSpacing:"-0.2",children:d}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"left",x:"28",y:g?3.5:-3,fill:"black",fontSize:"10",letterSpacing:"-0.2",children:f}),!g&&c.split(",").map((b,N)=>n.jsx("g",{transform:"translate(".concat(34+14*N,", ").concat(4.5,")"),children:b.trim()!=="airport"?n.jsxs(n.Fragment,{children:[n.jsx("circle",{r:"6",fill:B}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",fill:C,fontSize:"9",dominantBaseline:"central",letterSpacing:"-0.2",children:b})]}):n.jsxs("g",{transform:"translate(-6, -6) scale(4.5)",children:[n.jsx("path",{d:"M2.467 0H.226A.226.226 0 0 0 0 .226v2.241a.225.225 0 0 0 .226.225h2.241a.225.225 0 0 0 .225-.225V.226A.226.226 0 0 0 2.467 0",style:{fill:"#2d2a26"}}),n.jsx("path",{d:"M1.5.746v.3l.73.642a.08.08 0 0 1 .022.05v.12c0 .017-.012.025-.027.018L1.5 1.529l-.06.541.2.113a.03.03 0 0 1 .013.023V2.3a.01.01 0 0 1-.014.011l-.293-.091-.286.087a.01.01 0 0 1-.014-.007v-.09a.03.03 0 0 1 .013-.023l.2-.113-.059-.545-.724.348a.018.018 0 0 1-.028-.018v-.12a.07.07 0 0 1 .023-.05l.73-.642v-.3c0-.482.3-.482.3 0",style:{fill:"#fff",fillRule:"evenodd"}})]})},N))]})},E={lineCode:"EWL",name:"East-West Line",lines:"1, 2, 3, airport",isTram:!1,color:[T.Singapore,"ewl","#009739",v.white]},Wn=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.name,onChange:l=>{t.name=l,i(e,t)},minW:"full"},{type:"input",label:a("panel.details.stations.common.lineCode"),value:t.lineCode,onChange:l=>{t.lineCode=l,i(e,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.mrtLineBadge.isTram"),isChecked:t.isTram,onChange:l=>{t.isTram=l,i(e,t)},minW:"full",oneLine:!0},...t.isTram?[]:[{type:"input",label:a("panel.details.nodes.common.num"),value:t.lines,onChange:l=>{t.lines=l,i(e,t)},minW:"full"}],{type:"custom",label:a("color"),component:n.jsx(A,{type:j.MRTLineBadge,defaultTheme:E.color}),minW:"full"}];return n.jsx($,{fields:r})},Fn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),qn={component:En,icon:Fn,defaultAttrs:E,attrsComponent:Wn,metadata:{displayName:"panel.details.nodes.mrtLineBadge.displayName",tags:[]}},ee=4,le=7,ne=10,me=5,On=5,z=On*Math.SQRT1_2,ie=.25,te=(z*Math.SQRT2-ie)/2*Math.SQRT2,Qn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{names:d=F.names,num:h=F.num,color:c=F.color,crosshatchPatternFill:f=F.crosshatchPatternFill}=a!=null?a:F,g=s.useRef(null),[y,u]=s.useState({height:10,width:12});s.useEffect(()=>u(g.current.getBBox()),[...d,u,g]);const x=s.useCallback(C=>r(e,C),[e,r]),p=s.useCallback(C=>l(e,C),[e,l]),w=s.useCallback(C=>m(e,C),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:x,onPointerMove:p,onPointerUp:w,style:{cursor:"move"},children:[n.jsxs("defs",{children:[n.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[n.jsx("polygon",{points:"0,0 0,".concat(te," ").concat(te,",0")}),n.jsx("polygon",{points:"".concat(z,",").concat(z," ").concat(z-te,",").concat(z," ").concat(z,",").concat(z-te)})]}),n.jsxs("pattern",{id:"jr_east_".concat(e,"_fill_pattern_").concat(c[2]),width:z,height:z,patternUnits:"userSpaceOnUse",children:[n.jsx("rect",{width:z,height:z,fill:c[2]}),n.jsx("line",{x1:"0",y1:"0",x2:z,y2:z,stroke:"white",strokeWidth:ie,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),n.jsx("line",{x1:z,y1:"0",x2:"0",y2:z,stroke:"white",strokeWidth:ie,strokeOpacity:"33%"})]})]}),n.jsx("rect",{fill:f?"url(#jr_east_".concat(e,"_fill_pattern_").concat(c[2],")"):c[2],x:"0",y:"-1",width:y.width+ee+10,height:y.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),n.jsx("circle",{r:ee,cx:le,cy:ne/2+1,stroke:"black",strokeWidth:"0.25",fill:c[3]}),n.jsx("text",{x:le,y:ne/2+1.75,textAnchor:"middle",dominantBaseline:"middle",fill:c[3]==="#000"?"white":c[2],fontSize:h>9?7:8,className:"rmp-name__jreast_en",children:h}),n.jsx(se,{ref:g,text:d[0].split("\\"),x:le+ee+1,y:"-1",fill:c[3],fontSize:ne,lineHeight:ne,grow:"down",className:"rmp-name__jreast_ja"}),n.jsx(se,{text:d[1].split("\\"),textAnchor:"middle",dominantBaseline:"hanging",x:(y.width+ee+10)/2,y:y.height+1,fontSize:me,lineHeight:me,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},F={names:["山手線","Yamanote Line"],color:[T.Tokyo,"jy","#9ACD32",v.black],num:9,crosshatchPatternFill:!1},Gn=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:l=>!Number.isNaN(l),onChange:l=>{t.num=Number(l),i(e,t)},minW:"full"},{type:"textarea",label:a("panel.details.nodes.common.nameJa"),value:t.names[0].replaceAll("\\","\n"),onChange:l=>{t.names[0]=l.replaceAll("\n","\\"),i(e,t)},minW:"full"},{type:"textarea",label:a("panel.details.nodes.common.nameEn"),value:t.names[1].replaceAll("\\","\n"),onChange:l=>{t.names[1]=l.replaceAll("\n","\\"),i(e,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:t.crosshatchPatternFill,onChange:l=>{t.crosshatchPatternFill=l,i(e,t)},minW:"full"},{type:"custom",label:a("color"),component:n.jsx(A,{type:j.JREastLineBadge,defaultTheme:F.color})}];return n.jsx($,{fields:r})},Vn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),n.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),n.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),n.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),n.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),Xn={component:Qn,icon:Vn,defaultAttrs:F,attrsComponent:Gn,metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},Hn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{num:d=q.num,numEn:h=q.numEn,color:c=q.color,showText:f=q.showText}=a!=null?a:q,g=s.useCallback(b=>r(e,b),[e,r]),y=s.useCallback(b=>l(e,b),[e,l]),u=s.useCallback(b=>m(e,b),[e,m]),x=c[3],[p,w,C,B]=Number(d)>=10?[-2.4,0,10.25,20]:[0,4,10,22];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:g,onPointerMove:y,onPointerUp:u,style:{cursor:"move"},children:[n.jsx("rect",{fill:c[2],x:"0",width:"20",height:"20",rx:"2",ry:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:w,y:C,fill:x,fontSize:B,fontWeight:"bold",letterSpacing:p,dominantBaseline:"central",children:d}),f&&n.jsxs(n.Fragment,{children:[n.jsx("text",{className:"rmp-name__zh",x:"22",y:"10.5",fontSize:"13",children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:"22.5",y:"19.5",fontSize:"8",children:["Line ",h]})]})]})},q={num:1,numEn:"1",showText:!0,color:[T.Qingdao,"qd1","#f7b000",v.white]},Jn=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"input",label:a("panel.details.nodes.common.num"),value:t.num.toString(),onChange:l=>{t.num=Number(l),t.numEn=l,i(e,t)}},{type:"input",label:a("panel.details.nodes.qingdaoMetroNumLineBadge.numEn"),value:t.numEn.toString(),onChange:l=>{t.numEn=l,i(e,t)}},{type:"switch",label:a("panel.details.nodes.qingdaoMetroNumLineBadge.showText"),isChecked:t.showText,oneLine:!0,onChange:l=>{t.showText=l,i(e,t)}},{type:"custom",label:a("color"),component:n.jsx(A,{type:j.QingdaoMetroNumLineBadge,defaultTheme:q.color})}];return n.jsx($,{fields:r,minW:"full"})},Zn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",rx:"1",ry:"1",width:"10",height:"10"}),n.jsx("text",{x:"4",y:"15",fill:"white",fontSize:"12",children:"1"}),n.jsx("text",{x:"12",y:"11.5",fill:"black",fontSize:"6",children:"号线"}),n.jsx("text",{x:"12",y:"15.5",fill:"black",fontSize:"4",children:"Line1"})]}),Yn={component:Hn,icon:Zn,defaultAttrs:q,attrsComponent:Jn,metadata:{displayName:"panel.details.nodes.qingdaoMetroNumLineBadge.displayName",tags:[]}},Kn=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,{names:d=oe.names,color:h=oe.color}=a!=null?a:oe,c=s.useRef(null),[f,g]=s.useState({width:12});s.useEffect(()=>g(c.current.getBBox()),[...d,g,c]);const y=s.useCallback(p=>r(e,p),[e,r]),u=s.useCallback(p=>l(e,p),[e,l]),x=s.useCallback(p=>m(e,p),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:y,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{rx:"2",ry:"2",fill:h[2],x:"0",width:f.width+7,height:"21"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(f.width+7)/2,y:"3",fontSize:"10",fill:h[3],children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(f.width+7)/2,y:"14",fontSize:"5",fill:h[3],children:d[1]})]})]})},oe={names:["广清城际","Guangzhou-Qingyuan Intercity"],color:[T.Guangzhou,"ir","#425392",v.white]},et=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:a}=I(),r=[{type:"textarea",label:a("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:l=>{t.names[0]=l,i(e,t)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:l=>{t.names[1]=l,i(e,t)},minW:"full"}];return n.jsx($,{fields:r})},nt=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),n.jsx("text",{x:"4.5",y:"11",fontSize:"4",fill:"white",children:"广清城际"}),n.jsx("text",{x:"3",y:"16",fontSize:"2",fill:"white",children:"Guangzhou-Qingyuan Intercity"})]}),tt={component:Kn,icon:nt,defaultAttrs:oe,attrsComponent:et,metadata:{displayName:"panel.details.nodes.guangdongIntercityRailwayLineBadge.displayName",tags:[]}},ot=o=>{const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,d=Se();a.content=d(a.contents);const h=ae.component;return n.jsx(h,{id:e,x:t,y:i,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m,attrs:a})},at={contents:{},...ve},lt={component:ot,icon:ae.icon,defaultAttrs:at,attrsComponent:ae.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}},st=o=>{var C;const{id:e,x:t,y:i,attrs:a,handlePointerDown:r,handlePointerMove:l,handlePointerUp:m}=o,d=s.useCallback(B=>r(e,B),[e,r]),h=s.useCallback(B=>l(e,B),[e,l]),c=s.useCallback(B=>m(e,B),[e,m]),f=(B,...b)=>new Function(...b,"return ".concat(B)),g=(B,b,N)=>{var S;const P={};for(const k in B)if(Object.prototype.hasOwnProperty.call(B,k))try{P[k]=f(B[k].slice(1),...a.components.map(L=>L.label),"color")(...b.map((L,M)=>N[M]==="number"&&!Number.isNaN(Number(L))?Number(L):L),a.color?(S=a.color.value)!=null?S:a.color.defaultValue:"")}catch(L){P[k]=""}return P},y=a.nodeType==="MiscNode"?{onPointerDown:d,onPointerMove:h,onPointerUp:c,style:{cursor:"move"}}:{},u=B=>B.replace(/(^|,)\s*([^{},]+)/g,"$1 #".concat(e," $2")),x=B=>B.map(b=>{var S,k;const N=a.nodeType==="Station"&&a.core&&a.core===b.id?{id:"stn_core_".concat(e),onPointerDown:d,onPointerMove:h,onPointerUp:c,style:{cursor:"move"}}:{},P=g(b.attrs,a.components.map(L=>L.value),a.components.map(L=>L.type));return n.jsx("g",{transform:"translate(".concat((S=P.x)!=null?S:0,", ").concat((k=P.y)!=null?k:0,")"),children:s.createElement(b.type,{...P,x:0,y:0,...N},b.children?x(b.children):"_rmp_children_text"in P?b.type==="style"?u(P._rmp_children_text):P._rmp_children_text:null)},b.id)}),p=(C=a.transform)!=null?C:re,w=s.useMemo(()=>x(a.svgs),[a]);return s.createElement("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),...y},a.randomId?n.jsx("g",{transform:"translate(".concat(p.translateX,", ").concat(p.translateY,") scale(").concat(p.scale,") rotate(").concat(p.rotate,")"),children:w}):n.jsxs("g",{children:[n.jsx("circle",{r:"5.5"}),n.jsx("g",{transform:"translate(-4.7, -5) scale(0.8)",children:n.jsx("polygon",{points:"6,1 7.5,4.25 11,4.65 8.5,7.1 9.2,10.75 6,9 2.8,10.75 3.5,7.1 1,4.65 4.5,4.25",fill:"white"})})]}))},it={randomId:void 0,label:void 0,transform:re,nodeType:"MiscNode",svgs:[],components:[]},rt=o=>{var C,B;const{id:e,attrs:t,handleAttrsUpdate:i}=o,a=ue(),r=je(),{paletteAppClip:{output:l}}=xe(b=>b.runtime),{t:m}=I(),[d,h]=s.useState(!1),[c,f]=s.useState(!1),g=b=>{var P;const N=t.components.find(S=>S.id===b);return N?(P=N.value)!=null?P:N.defaultValue:void 0},y=b=>{var k,L,M;const N=JSON.parse(b),P=N.id?N.id:N.randomId,S={randomId:P,label:(k=N.label)!=null?k:P,nodeType:(L=N.nodeType)!=null?L:N.type,transform:(M=N.transform)!=null?M:re,svgs:N.svgs,components:N.components,color:N.color,core:N.core,version:N.version};if(!S.version||S.version<2){r({title:"Outdated configuration!",status:"error",duration:9e3,isClosable:!0});return}S.components.forEach((ce,he)=>{var de;S.components[he].value=(de=g(ce.id))!=null?de:ce.defaultValue}),S.color!==void 0&&(S.color.value=t.color?t.color.value:S.color.defaultValue),i(e,S)},u=t.components.map((b,N)=>{const{label:P,type:S,defaultValue:k,value:L}=b;return S==="number"||S==="text"?{label:m(P),type:"input",value:L!=null?L:k,onChange:M=>{t.components[N].value=M,i(e,{...t,components:t.components})}}:S==="switch"?{label:m(P),type:"switch",isChecked:L!==void 0?!!L:k,onChange:M=>{t.components[N].value=M,i(e,{...t,components:t.components})}}:S==="textarea"?{label:m(P),type:"textarea",value:L!=null?L:k,onChange:M=>{t.components[N].value=M,i(e,{...t,components:t.components})}}:{type:"input",label:"undefined",value:"none"}}),[x,p]=s.useState(!1);s.useEffect(()=>{t.color&&x&&l&&(t.color.value=l,i(e,{...t,color:t.color}),p(!1))},[l==null?void 0:l.toString()]);const w=[{type:"custom",label:m("color"),component:n.jsx(pe,{theme:(C=t.color)==null?void 0:C.value,onClick:()=>{var b;p(!0),a(ge((b=t.color)==null?void 0:b.value))}})}];return n.jsxs(n.Fragment,{children:[n.jsxs(Be,{direction:"row",mr:"auto",width:"100%",children:[n.jsx(fe,{label:m("panel.details.nodes.master.type"),children:(B=t.label)!=null?B:m("panel.details.nodes.master.undefined")}),n.jsx(we,{}),n.jsx(Ne,{icon:n.jsx(ye,{}),onClick:()=>h(!0),"aria-label":"upload"})]}),n.jsx(Ce,{width:"100%",leftIcon:n.jsx(be,{}),onClick:()=>f(!0),children:m("header.settings.procedures.masterManager.title")}),t.randomId&&n.jsx($,{fields:u,minW:"full"}),t.randomId&&t.color!==void 0&&n.jsx($,{fields:w,minW:"full"}),n.jsx(Pe,{isOpen:d,onClose:()=>h(!1),onSubmit:y}),n.jsx(Te,{isOpen:c,onClose:()=>f(!1)})]})},ct=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),n.jsx("g",{transform:"translate(7.25, 7) scale(0.8)",children:n.jsx("polygon",{points:"6,1 7.5,4.25 11,4.65 8.5,7.1 9.2,10.75 6,9 2.8,10.75 3.5,7.1 1,4.65 4.5,4.25",fill:"currentColor"})})]}),dt={component:st,icon:ct,defaultAttrs:it,attrsComponent:rt,metadata:{displayName:"panel.details.nodes.master.displayName",tags:[]}},pt={[j.Virtual]:$e,[j.ShmetroNumLineBadge]:Ee,[j.ShmetroTextLineBadge]:Oe,[j.GzmtrLineBadge]:Xe,[j.BjsubwayNumLineBadge]:Ke,[j.BjsubwayTextLineBadge]:ln,[j.SuzhouRTNumLineBadge]:mn,[j.BerlinSBahnLineBadge]:Bn,[j.BerlinUBahnLineBadge]:gn,[j.ChongqingRTNumLineBadge]:vn,[j.ChongqingRTTextLineBadge]:An,[j.ShenzhenMetroNumLineBadge]:$n,[j.MRTDestinationNumbers]:In,[j.MRTLineBadge]:qn,[j.JREastLineBadge]:Xn,[j.QingdaoMetroNumLineBadge]:Yn,[j.GuangdongIntercityRailwayLineBadge]:tt,[j.Facilities]:ze,[j.Text]:ae,[j.I18nText]:lt,[j.Master]:dt};export{pt as m};
