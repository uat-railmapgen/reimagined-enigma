import{aM as U,C as T,M as L,aN as k,aw as b,i as M,aO as ue,c as xe,d as pe,V as ge,W as fe,P as ye,R as de,D as be,ai as je}from"./index-DKzcEHnT.js";import{j as n,g as me,a$ as Be,af as we,O as Ne}from"./chakra-t2DzLzXq.js";import{b as i,u as D}from"./react-DmTIgZys.js";import{L as Ce,g as re,h as Le,t as se,j as ve,k as Se,M as Pe,n as Te}from"./master-manager-iF-p1Osh.js";const ze=o=>{const{id:e,x:t,y:r,handlePointerDown:l,handlePointerMove:s,handlePointerUp:a}=o,m=i.useCallback(c=>l(e,c),[e,l]),d=i.useCallback(c=>s(e,c),[e,s]),h=i.useCallback(c=>a(e,c),[e,a]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")rotate(45)"),onPointerDown:m,onPointerMove:d,onPointerUp:h,style:{cursor:"move"},className:"removeMe",children:[n.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),n.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),n.jsx("circle",{id:"virtual_circle_".concat(e),r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},ke={},Ae=()=>n.jsx(U,{fields:[]}),Me=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[n.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),n.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),n.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),_e={component:ze,icon:Me,defaultAttrs:ke,attrsComponent:Ae,metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},$e=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=O.num,color:h=O.color}=l!=null?l:O,[c,y]=d>=10?[22.67,10.75]:[21,10],g=i.useCallback(x=>s(e,x),[e,s]),f=i.useCallback(x=>a(e,x),[e,a]),u=i.useCallback(x=>m(e,x),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:g,onPointerMove:f,onPointerUp:u,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],width:c,height:"22.67"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:y,y:"19",fill:h[3],fontSize:"21.33",letterSpacing:"-1.75",children:d}),n.jsx("text",{className:"rmp-name__zh",x:c+2,y:"12",fontSize:"14.67",children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:c+4,y:"21.5",fontSize:"8",children:["Line ",d]})]})},O={num:1,color:[T.Shanghai,"sh1","#E4002B",L.white]},Re=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:O).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:O;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.ShmetroNumLineBadge,defaultTheme:O.color})}],Ue=()=>n.jsx(U,{fields:Re}),De=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),n.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),n.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),n.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),Ie={component:$e,icon:De,defaultAttrs:O,attrsComponent:Ue,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},Ee=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{names:d=Y.names,color:h=Y.color}=l!=null?l:Y,c=i.useRef(null),[y,g]=i.useState({width:12});i.useEffect(()=>g(c.current.getBBox()),[...d,g,c]);const f=i.useCallback(p=>s(e,p),[e,s]),u=i.useCallback(p=>a(e,p),[e,a]),x=i.useCallback(p=>m(e,p),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:f,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:y.width+7,height:"21"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(y.width+7)/2,y:"3",fontSize:"10",fill:h[3],letterSpacing:"-0.25",children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(y.width+7)/2,y:"14",fontSize:"5",fill:h[3],letterSpacing:"-0.25",children:d[1]})]})]})},Y={names:["浦江线","Pujiang Line"],color:[T.Shanghai,"pjl","#B5B5B6",L.white]},We=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:a=>{t.names[0]=a,r(e,t)},minW:"full"},{type:"input",label:l("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,r(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(k,{type:b.ShmetroTextLineBadge,defaultTheme:Y.color})}];return n.jsx(M,{fields:s})},Fe=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),n.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),n.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),qe={component:Ee,icon:Fe,defaultAttrs:Y,attrsComponent:We,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},Oe=o=>{var x,p;const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{names:d=W.names,color:h=W.color,tram:c=W.tram,span:y=W.span}=l!=null?l:W,g=i.useCallback(w=>s(e,w),[e,s]),f=i.useCallback(w=>a(e,w),[e,a]),u=i.useCallback(w=>m(e,w),[e,m]);return n.jsx("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")scale(").concat(c?.5:1,")"),onPointerDown:g,onPointerMove:f,onPointerUp:u,style:{cursor:"move"},children:n.jsx(Ce,{zhName:(x=d.at(0))!=null?x:"",enName:(p=d.at(1))!=null?p:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:h[3],backgroundColour:h[2],spanDigits:y})})},W={names:["1号线","Line 1"],color:[T.Guangzhou,"gz1","#F3D03E",L.black],tram:!1,span:!0},Ve=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:a=>{t.names[0]=a,r(e,t)},minW:"full"},{type:"input",label:l("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,r(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:a=>{t.tram=a,r(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.gzmtrLineBadge.span"),oneLine:!0,isChecked:t.span,onChange:a=>{t.span=a,r(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(k,{type:b.GzmtrLineBadge,defaultTheme:W.color})}];return n.jsx(M,{fields:s})},Ge=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),n.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),n.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),n.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),He={component:Oe,icon:Ge,defaultAttrs:W,attrsComponent:Ve,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},ee=11.84375,Qe=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=V.num,color:h=V.color}=l!=null?l:V,c=i.useCallback(u=>s(e,u),[e,s]),y=i.useCallback(u=>a(e,u),[e,a]),g=i.useCallback(u=>m(e,u),[e,m]),f=h[3]===L.black?"#003670":L.white;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:c,onPointerMove:y,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:ee+21,height:"16",rx:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:ee/2+2,y:"13.5",fill:f,fontSize:"15",letterSpacing:"-1.5",children:d}),n.jsx("text",{className:"rmp-name__zh",x:ee+(d>9?5.5:3),y:"8.5",fontSize:"7",fill:f,children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:ee+(d>9?6:4.5),y:"13.5",fontSize:"4",fill:f,children:["Line ",d]})]})},V={num:1,color:[T.Beijing,"bj1","#c23a30",L.white]},Xe=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:V).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:V;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.BjsubwayNumLineBadge,defaultTheme:V.color})}],Ze=()=>n.jsx(U,{fields:Xe}),Je=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),n.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),n.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),Ye={component:Qe,icon:Je,defaultAttrs:V,attrsComponent:Ze,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},Ke=28.84375,en=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{names:d=$.names,color:h=$.color}=l!=null?l:$,c=i.useRef(null),[y,g]=i.useState({width:12});i.useEffect(()=>g(c.current.getBBox()),[...d,g,c]);const f=i.useCallback(C=>s(e,C),[e,s]),u=i.useCallback(C=>a(e,C),[e,a]),x=i.useCallback(C=>m(e,C),[e,m]),p=Math.max(Ke,y.width),w=h[3]===L.black?"#003670":L.white;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:f,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:p+4,height:"16",rx:"2"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(p+4)/2,y:"8",fontSize:"7",fill:w,children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(p+4)/2,y:"13.5",fontSize:"4",fill:w,children:d[1]})]})]})},$={names:["八通线","Batong Line"],color:[T.Beijing,"bj1","#c23a30",L.white]},nn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:$).names[0],onChange:(o,e)=>{const t=e!=null?e:$;return t.names[0]=o.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:$).names[1],onChange:(o,e)=>{const t=e!=null?e:$;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.BjsubwayTextLineBadge,defaultTheme:$.color})}],tn=()=>n.jsx(U,{fields:nn}),on=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),n.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),n.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),ln={component:en,icon:on,defaultAttrs:$,attrsComponent:tn,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},an=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=A.num,branch:h=A.branch,color:c=A.color}=l!=null?l:A,y=i.useCallback(u=>s(e,u),[e,s]),g=i.useCallback(u=>a(e,u),[e,a]),f=i.useCallback(u=>m(e,u),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:y,onPointerMove:g,onPointerUp:f,style:{cursor:"move"},children:[n.jsx("rect",{fill:c[2],width:"20",height:"20",rx:"2",ry:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:c[3],fontSize:"15",letterSpacing:"-1",children:d}),h&&n.jsxs(n.Fragment,{children:[n.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),n.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},A={num:1,branch:!1,color:[T.Suzhou,"sz1","#78BA25",L.white]},sn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:A).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:A;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:o=>{var e;return(e=o==null?void 0:o.branch)!=null?e:A.branch},onChange:(o,e)=>{const t=e!=null?e:A;return t.branch=o,t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.SuzhouRTNumLineBadge,defaultTheme:A.color})}],rn=()=>n.jsx(U,{fields:sn}),cn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),n.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),dn={component:an,icon:cn,defaultAttrs:A,attrsComponent:rn,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},mn=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=G.num,color:h=G.color}=l!=null?l:G,c=i.useCallback(u=>s(e,u),[e,s]),y=i.useCallback(u=>a(e,u),[e,a]),g=i.useCallback(u=>m(e,u),[e,m]),f=h[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:c,onPointerMove:y,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"25",height:"15"}),n.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:f,fontSize:"14",letterSpacing:"1",children:["U",d]})]})},G={num:1,color:[T.Berlin,"bu1","#62AD2D",L.white]},hn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:G).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:G;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.BerlinUBahnLineBadge,defaultTheme:G.color})}],un=()=>n.jsx(U,{fields:hn}),xn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),pn={component:mn,icon:xn,defaultAttrs:G,attrsComponent:un,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},gn=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=H.num,color:h=H.color}=l!=null?l:H,[c,y]=d>=10?[6,19.75]:[10,20],g=i.useCallback(p=>s(e,p),[e,s]),f=i.useCallback(p=>a(e,p),[e,a]),u=i.useCallback(p=>m(e,p),[e,m]),x=h[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:g,onPointerMove:f,onPointerUp:u,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"30",height:"15",rx:"8"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:c,y:"12.5",fill:x,fontSize:"14",letterSpacing:"0",children:"S"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:y,y:"12.5",fill:x,fontSize:"14",letterSpacing:"-0.2",children:d})]})},H={num:1,color:[T.Berlin,"bs1","#DD6CA6",L.white]},fn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:H).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:H;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.BerlinSBahnLineBadge,defaultTheme:H.color})}],yn=()=>n.jsx(U,{fields:fn}),bn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),n.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),jn={component:gn,icon:bn,defaultAttrs:H,attrsComponent:yn,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},Bn=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=Q.num,color:h=Q.color}=l!=null?l:Q,c=i.useCallback(w=>s(e,w),[e,s]),y=i.useCallback(w=>a(e,w),[e,a]),g=i.useCallback(w=>m(e,w),[e,m]),f=h[3],u=Number.isInteger(d)?16:15,[x,p]=Number.isInteger(d)?Number(d)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:c,onPointerMove:y,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:p,y:"10",fill:f,fontSize:u,letterSpacing:x,dominantBaseline:"central",children:d})]})},Q={num:1,color:[T.Chongqing,"cq1","#e4002b",L.white]},wn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:Q).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:Q;return Number.isNaN(Number(o))?t.num=o:t.num=Number(o),t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.ChongqingRTNumLineBadge,defaultTheme:Q.color})}],Nn=()=>n.jsx(U,{fields:wn}),Cn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),Ln={component:Bn,icon:Cn,defaultAttrs:Q,attrsComponent:Nn,metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},vn=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{names:d=R.names,color:h=R.color}=l!=null?l:R,c=i.useRef(null),y=i.useCallback(x=>s(e,x),[e,s]),g=i.useCallback(x=>a(e,x),[e,a]),f=i.useCallback(x=>m(e,x),[e,m]),u=h[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:y,onPointerMove:g,onPointerUp:f,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:u,fontSize:"6",letterSpacing:"0",children:d[0]}),n.jsx(re,{ref:c,text:d[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:u,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},R={names:["空港线","Konggang Line"],color:[T.Chongqing,"cq3","#003da5",L.white]},Sn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:R).names[0],onChange:(o,e)=>{const t=e!=null?e:R;return t.names[0]=o.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:R).names[1],onChange:(o,e)=>{const t=e!=null?e:R;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:n.jsx(k,{type:b.ChongqingRTTextLineBadge,defaultTheme:R.color})}],Pn=()=>n.jsx(U,{fields:Sn}),Tn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),n.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),zn={component:vn,icon:Tn,defaultAttrs:R,attrsComponent:Pn,metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},ne=11.84375,kn=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=X.num,color:h=X.color,isBranch:c=X.isBranch}=l!=null?l:X,y=i.useCallback(j=>s(e,j),[e,s]),g=i.useCallback(j=>a(e,j),[e,a]),f=i.useCallback(j=>m(e,j),[e,m]),u=h[3]===L.black?"#003670":L.white,x=c?10:ne+(d>9?6.5:3),p=c?-1:0,w=c?11:ne+(d>9?7:3.5),C=c?6:ne/2+4;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:y,onPointerMove:g,onPointerUp:f,style:{cursor:"move"},children:[n.jsx("rect",{fill:h[2],x:"0",width:ne+21,height:"16",rx:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:C,y:"13.5",fill:u,fontSize:"15",letterSpacing:"-1",children:d}),n.jsxs("text",{className:"rmp-name__zh",x,y:"9.5",fontSize:"6",fill:u,letterSpacing:p,children:["号线",c?"支线":""]}),n.jsxs("text",{className:"rmp-name__en",x:w,y:"13.5",fontSize:"3",fill:u,children:[c?"Branch":""," Line ",d]})]})},X={num:1,color:[T.Shenzhen,"sz1","#00b140",L.white],isBranch:!1},An=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),r(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(k,{type:b.ShenzhenMetroNumLineBadge,defaultTheme:X.color}),minW:"full"},{type:"switch",label:l("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:a=>{t.isBranch=a,r(e,t)},minW:"full"}];return n.jsx(M,{fields:s})},Mn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),n.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),n.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),_n={component:kn,icon:Mn,defaultAttrs:X,attrsComponent:An,metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},$n=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=K.num,color:h=K.color}=l!=null?l:K,c=i.useCallback(x=>s(e,x),[e,s]),y=i.useCallback(x=>a(e,x),[e,a]),g=i.useCallback(x=>m(e,x),[e,m]),f=h[3],u=h[2];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:c,onPointerMove:y,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("circle",{r:"8",fill:u}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:f,fontSize:"12",dominantBaseline:"central",letterSpacing:"-0.2",children:d})]})},K={num:1,color:[T.Singapore,"ewl","#009739",L.white]},Rn=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),r(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(k,{type:b.MRTDestinationNumbers,defaultTheme:K.color}),minW:"full"}];return n.jsx(M,{fields:s})},Un=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),Dn={component:$n,icon:Un,defaultAttrs:K,attrsComponent:Rn,metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},In=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{lineCode:d=E.lineCode,color:h=E.color,lines:c=E.lines,name:y=E.name,isTram:g=E.isTram}=l!=null?l:E,f=i.useCallback(B=>s(e,B),[e,s]),u=i.useCallback(B=>a(e,B),[e,a]),x=i.useCallback(B=>m(e,B),[e,m]),p=22.85,w=12.935,C=h[3],j=h[2];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:f,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{transform:"scale(1.8)",x:-p/2,y:-w/2,rx:"3",ry:"6",width:p,height:w,fill:j,stroke:"white",strokeWidth:"1"}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",fill:C,fontSize:"15",dominantBaseline:"central",letterSpacing:"-0.2",children:d}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"left",x:"28",y:g?3.5:-3,fill:"black",fontSize:"10",letterSpacing:"-0.2",children:y}),!g&&c.split(",").map((B,_)=>n.jsx("g",{transform:"translate(".concat(34+14*_,", ").concat(4.5,")"),children:B.trim()!=="airport"?n.jsxs(n.Fragment,{children:[n.jsx("circle",{r:"6",fill:j}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",fill:C,fontSize:"9",dominantBaseline:"central",letterSpacing:"-0.2",children:B})]}):n.jsxs("g",{transform:"translate(-6, -6) scale(4.5)",children:[n.jsx("path",{d:"M2.467 0H.226A.226.226 0 0 0 0 .226v2.241a.225.225 0 0 0 .226.225h2.241a.225.225 0 0 0 .225-.225V.226A.226.226 0 0 0 2.467 0",style:{fill:"#2d2a26"}}),n.jsx("path",{d:"M1.5.746v.3l.73.642a.08.08 0 0 1 .022.05v.12c0 .017-.012.025-.027.018L1.5 1.529l-.06.541.2.113a.03.03 0 0 1 .013.023V2.3a.01.01 0 0 1-.014.011l-.293-.091-.286.087a.01.01 0 0 1-.014-.007v-.09a.03.03 0 0 1 .013-.023l.2-.113-.059-.545-.724.348a.018.018 0 0 1-.028-.018v-.12a.07.07 0 0 1 .023-.05l.73-.642v-.3c0-.482.3-.482.3 0",style:{fill:"#fff",fillRule:"evenodd"}})]})},_))]})},E={lineCode:"EWL",name:"East-West Line",lines:"1, 2, 3, airport",isTram:!1,color:[T.Singapore,"ewl","#009739",L.white]},En=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.nameEn"),value:t.name,onChange:a=>{t.name=a,r(e,t)},minW:"full"},{type:"input",label:l("panel.details.stations.common.lineCode"),value:t.lineCode,onChange:a=>{t.lineCode=a,r(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.mrtLineBadge.isTram"),isChecked:t.isTram,onChange:a=>{t.isTram=a,r(e,t)},minW:"full",oneLine:!0},...t.isTram?[]:[{type:"input",label:l("panel.details.nodes.common.num"),value:t.lines,onChange:a=>{t.lines=a,r(e,t)},minW:"full"}],{type:"custom",label:l("color"),component:n.jsx(k,{type:b.MRTLineBadge,defaultTheme:E.color}),minW:"full"}];return n.jsx(M,{fields:s})},Wn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),Fn={component:In,icon:Wn,defaultAttrs:E,attrsComponent:En,metadata:{displayName:"panel.details.nodes.mrtLineBadge.displayName",tags:[]}},te=4,ie=7,oe=10,he=5,qn=5,z=qn*Math.SQRT1_2,ce=.25,le=(z*Math.SQRT2-ce)/2*Math.SQRT2,On=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{names:d=F.names,num:h=F.num,color:c=F.color,crosshatchPatternFill:y=F.crosshatchPatternFill}=l!=null?l:F,g=i.useRef(null),[f,u]=i.useState({height:10,width:12});i.useEffect(()=>u(g.current.getBBox()),[...d,u,g]);const x=i.useCallback(C=>s(e,C),[e,s]),p=i.useCallback(C=>a(e,C),[e,a]),w=i.useCallback(C=>m(e,C),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:x,onPointerMove:p,onPointerUp:w,style:{cursor:"move"},children:[n.jsxs("defs",{children:[n.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[n.jsx("polygon",{points:"0,0 0,".concat(le," ").concat(le,",0")}),n.jsx("polygon",{points:"".concat(z,",").concat(z," ").concat(z-le,",").concat(z," ").concat(z,",").concat(z-le)})]}),n.jsxs("pattern",{id:"jr_east_".concat(e,"_fill_pattern_").concat(c[2]),width:z,height:z,patternUnits:"userSpaceOnUse",children:[n.jsx("rect",{width:z,height:z,fill:c[2]}),n.jsx("line",{x1:"0",y1:"0",x2:z,y2:z,stroke:"white",strokeWidth:ce,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),n.jsx("line",{x1:z,y1:"0",x2:"0",y2:z,stroke:"white",strokeWidth:ce,strokeOpacity:"33%"})]})]}),n.jsx("rect",{fill:y?"url(#jr_east_".concat(e,"_fill_pattern_").concat(c[2],")"):c[2],x:"0",y:"-1",width:f.width+te+10,height:f.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),n.jsx("circle",{r:te,cx:ie,cy:oe/2+1,stroke:"black",strokeWidth:"0.25",fill:c[3]}),n.jsx("text",{x:ie,y:oe/2+1.75,textAnchor:"middle",dominantBaseline:"middle",fill:c[3]==="#000"?"white":c[2],fontSize:h>9?7:8,className:"rmp-name__jreast_en",children:h}),n.jsx(re,{ref:g,text:d[0].split("\n"),x:ie+te+1,y:"-1",fill:c[3],fontSize:oe,lineHeight:oe,grow:"down",className:"rmp-name__jreast_ja"}),n.jsx(re,{text:d[1].split("\n"),textAnchor:"middle",dominantBaseline:"hanging",x:(f.width+te+10)/2,y:f.height+1,fontSize:he,lineHeight:he,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},F={names:["山手線","Yamanote Line"],color:[T.Tokyo,"jy","#9ACD32",L.black],num:9,crosshatchPatternFill:!1},Vn=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),r(e,t)},minW:"full"},{type:"textarea",label:l("panel.details.nodes.common.nameJa"),value:t.names[0],onChange:a=>{t.names[0]=a,r(e,t)},minW:"full"},{type:"textarea",label:l("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,r(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:t.crosshatchPatternFill,onChange:a=>{t.crosshatchPatternFill=a,r(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(k,{type:b.JREastLineBadge,defaultTheme:F.color})}];return n.jsx(M,{fields:s})},Gn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),n.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),n.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),n.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),n.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),Hn={component:On,icon:Gn,defaultAttrs:F,attrsComponent:Vn,metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},Qn=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{num:d=q.num,numEn:h=q.numEn,color:c=q.color,showText:y=q.showText}=l!=null?l:q,g=i.useCallback(B=>s(e,B),[e,s]),f=i.useCallback(B=>a(e,B),[e,a]),u=i.useCallback(B=>m(e,B),[e,m]),x=c[3],[p,w,C,j]=Number(d)>=10?[-2.4,0,10.25,20]:[0,4,10,22];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:g,onPointerMove:f,onPointerUp:u,style:{cursor:"move"},children:[n.jsx("rect",{fill:c[2],x:"0",width:"20",height:"20",rx:"2",ry:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:w,y:C,fill:x,fontSize:j,fontWeight:"bold",letterSpacing:p,dominantBaseline:"central",children:d}),y&&n.jsxs(n.Fragment,{children:[n.jsx("text",{className:"rmp-name__zh",x:"22",y:"10.5",fontSize:"13",children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:"22.5",y:"19.5",fontSize:"8",children:["Line ",h]})]})]})},q={num:1,numEn:"1",showText:!0,color:[T.Qingdao,"qd1","#f7b000",L.white]},Xn=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.num"),value:t.num.toString(),onChange:a=>{t.num=Number(a),t.numEn=a,r(e,t)}},{type:"input",label:l("panel.details.nodes.qingdaoMetroNumLineBadge.numEn"),value:t.numEn.toString(),onChange:a=>{t.numEn=a,r(e,t)}},{type:"switch",label:l("panel.details.nodes.qingdaoMetroNumLineBadge.showText"),isChecked:t.showText,oneLine:!0,onChange:a=>{t.showText=a,r(e,t)}},{type:"custom",label:l("color"),component:n.jsx(k,{type:b.QingdaoMetroNumLineBadge,defaultTheme:q.color})}];return n.jsx(M,{fields:s,minW:"full"})},Zn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",rx:"1",ry:"1",width:"10",height:"10"}),n.jsx("text",{x:"4",y:"15",fill:"white",fontSize:"12",children:"1"}),n.jsx("text",{x:"12",y:"11.5",fill:"black",fontSize:"6",children:"号线"}),n.jsx("text",{x:"12",y:"15.5",fill:"black",fontSize:"4",children:"Line1"})]}),Jn={component:Qn,icon:Zn,defaultAttrs:q,attrsComponent:Xn,metadata:{displayName:"panel.details.nodes.qingdaoMetroNumLineBadge.displayName",tags:[]}},Yn=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,{names:d=ae.names,color:h=ae.color}=l!=null?l:ae,c=i.useRef(null),[y,g]=i.useState({width:12});i.useEffect(()=>g(c.current.getBBox()),[...d,g,c]);const f=i.useCallback(p=>s(e,p),[e,s]),u=i.useCallback(p=>a(e,p),[e,a]),x=i.useCallback(p=>m(e,p),[e,m]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),onPointerDown:f,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{rx:"2",ry:"2",fill:h[2],x:"0",width:y.width+7,height:"21"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(y.width+7)/2,y:"3",fontSize:"8.63",fill:h[3],children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(y.width+7)/2,y:"14",fontSize:"3.54",fill:h[3],children:d[1]})]})]})},ae={names:["广清城际","Guangzhou-Qingyuan Intercity"],color:[T.Guangzhou,"ir","#2559a8",L.white]},Kn=o=>{const{id:e,attrs:t,handleAttrsUpdate:r}=o,{t:l}=D(),s=[{type:"input",label:l("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:a=>{t.names[0]=a,r(e,t)},minW:"full"},{type:"input",label:l("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,r(e,t)},minW:"full"}];return n.jsx(M,{fields:s})},et=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),n.jsx("text",{x:"4.5",y:"11",fontSize:"4",fill:"white",children:"广清城际"}),n.jsx("text",{x:"3",y:"16",fontSize:"2",fill:"white",children:"Guangzhou-Qingyuan Intercity"})]}),nt={component:Yn,icon:et,defaultAttrs:ae,attrsComponent:Kn,metadata:{displayName:"panel.details.nodes.guangdongIntercityRailwayLineBadge.displayName",tags:[]}},tt=o=>{const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,d=ve();l.content=d(l.contents);const h=se.component;return n.jsx(h,{id:e,x:t,y:r,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m,attrs:l})},ot={contents:{},...Le},lt={component:tt,icon:se.icon,defaultAttrs:ot,attrsComponent:se.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}},at=o=>{var C;const{id:e,x:t,y:r,attrs:l,handlePointerDown:s,handlePointerMove:a,handlePointerUp:m}=o,d=i.useCallback(j=>s(e,j),[e,s]),h=i.useCallback(j=>a(e,j),[e,a]),c=i.useCallback(j=>m(e,j),[e,m]),y=(j,...B)=>new Function(...B,"return ".concat(j)),g=(j,B,_)=>{var S;const N={};for(const P in j)if(Object.prototype.hasOwnProperty.call(j,P))try{N[P]=y(j[P].slice(1),...l.components.map(v=>v.label),"color")(...B.map((v,Z)=>_[Z]==="number"&&!Number.isNaN(Number(v))?Number(v):v),l.color?(S=l.color.value)!=null?S:l.color.defaultValue:"")}catch(v){N[P]=""}return N},f=l.nodeType==="MiscNode"?{onPointerDown:d,onPointerMove:h,onPointerUp:c,style:{cursor:"move"}}:{},u=j=>j.replace(/(^|,)\s*([^{},]+)/g,"$1 #".concat(e," $2")),x=j=>j.map(B=>{var S,P;const _=l.nodeType==="Station"&&l.core&&l.core===B.id?{id:"stn_core_".concat(e),onPointerDown:d,onPointerMove:h,onPointerUp:c,style:{cursor:"move"}}:{},N=g(B.attrs,l.components.map(v=>v.value),l.components.map(v=>v.type));return n.jsx("g",{transform:"translate(".concat((S=N.x)!=null?S:0,", ").concat((P=N.y)!=null?P:0,")"),children:i.createElement(B.type,{...N,x:0,y:0,..._},B.children?x(B.children):"_rmp_children_text"in N?B.type==="style"?u(N._rmp_children_text):N._rmp_children_text:null)},B.id)}),p=(C=l.transform)!=null?C:ue,w=i.useMemo(()=>x(l.svgs),[l]);return i.createElement("g",{id:e,transform:"translate(".concat(t,", ").concat(r,")"),...f},l.randomId?n.jsx("g",{transform:"translate(".concat(p.translateX,", ").concat(p.translateY,") scale(").concat(p.scale,") rotate(").concat(p.rotate,")"),children:w}):n.jsxs("g",{children:[n.jsx("circle",{r:"5.5"}),n.jsx("g",{transform:"translate(-4.7, -5) scale(0.8)",children:n.jsx("polygon",{points:"6,1 7.5,4.25 11,4.65 8.5,7.1 9.2,10.75 6,9 2.8,10.75 3.5,7.1 1,4.65 4.5,4.25",fill:"white"})})]}))},st={randomId:void 0,label:void 0,transform:ue,nodeType:"MiscNode",svgs:[],components:[]},it=o=>{var w,C,j,B,_;const{id:e,attrs:t,handleAttrsUpdate:r}=o,l=xe(),{paletteAppClip:{output:s}}=pe(N=>N.runtime),{t:a}=D(),[m,d]=i.useState(!1),[h,c]=i.useState(!1),y=N=>{var P;const S=t.components.find(v=>v.id===N);return S?(P=S.value)!=null?P:S.defaultValue:void 0},g=N=>{N.components.forEach((S,P)=>{var v;N.components[P].value=(v=y(S.id))!=null?v:S.defaultValue}),N.color!==void 0&&(N.color.value=t.color?t.color.value:N.color.defaultValue),r(e,N)},f=t.components.map((N,S)=>{const{label:P,type:v,defaultValue:Z,value:I}=N;return v==="number"||v==="text"?{label:a(P),type:"input",value:I!=null?I:Z,onChange:J=>{t.components[S].value=J,r(e,{...t,components:t.components})}}:v==="switch"?{label:a(P),type:"switch",isChecked:I!==void 0?!!I:Z,onChange:J=>{t.components[S].value=J,r(e,{...t,components:t.components})}}:v==="textarea"?{label:a(P),type:"textarea",value:I!=null?I:Z,onChange:J=>{t.components[S].value=J,r(e,{...t,components:t.components})}}:{type:"input",label:"undefined",value:"none"}}),[u,x]=i.useState(!1);i.useEffect(()=>{t.color&&u&&s&&(t.color.value=s,r(e,{...t,color:t.color}),x(!1))},[s==null?void 0:s.toString()]);const p=[{type:"custom",label:a("color"),component:n.jsx(ge,{theme:(w=t.color)==null?void 0:w.value,onClick:()=>{var N;x(!0),l(fe((N=t.color)==null?void 0:N.value))}})}];return n.jsxs(n.Fragment,{children:[n.jsxs(me,{direction:"row",mr:"auto",width:"100%",children:[n.jsx(ye,{width:"100%",overflow:"hidden",label:a("panel.details.nodes.master.type"),children:n.jsxs(me,{width:"100%",overflow:"hidden",children:[n.jsx(de,{name:(C=t.label)!=null?C:a("panel.details.nodes.master.undefined"),fg:(j=t.labelColorFg)!=null?j:L.white,bg:(B=t.labelColorBg)!=null?B:"#000000",sx:{display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"},mr:1}),n.jsx(de,{name:(_=t.randomId)!=null?_:"UNDEFINED",fg:L.white,bg:t.randomId?"#19B3EA":"#000000",sx:{display:"inline-block"},mr:1})]})}),n.jsx(Be,{}),n.jsx(we,{icon:n.jsx(be,{}),onClick:()=>d(!0),"aria-label":"upload"})]}),n.jsx(Ne,{width:"100%",leftIcon:n.jsx(je,{}),onClick:()=>c(!0),children:a("header.settings.procedures.masterManager.title")}),t.randomId&&n.jsx(M,{fields:f,minW:"full"}),t.randomId&&t.color!==void 0&&n.jsx(M,{fields:p,minW:"full"}),n.jsx(Se,{isOpen:m,onClose:()=>d(!1),onSubmit:g}),n.jsx(Pe,{isOpen:h,onClose:()=>c(!1)})]})},rt=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),n.jsx("g",{transform:"translate(7.25, 7) scale(0.8)",children:n.jsx("polygon",{points:"6,1 7.5,4.25 11,4.65 8.5,7.1 9.2,10.75 6,9 2.8,10.75 3.5,7.1 1,4.65 4.5,4.25",fill:"currentColor"})})]}),ct={component:at,icon:rt,defaultAttrs:st,attrsComponent:it,metadata:{displayName:"panel.details.nodes.master.displayName",tags:[]}},xt={[b.Virtual]:_e,[b.ShmetroNumLineBadge]:Ie,[b.ShmetroTextLineBadge]:qe,[b.GzmtrLineBadge]:He,[b.BjsubwayNumLineBadge]:Ye,[b.BjsubwayTextLineBadge]:ln,[b.SuzhouRTNumLineBadge]:dn,[b.BerlinSBahnLineBadge]:jn,[b.BerlinUBahnLineBadge]:pn,[b.ChongqingRTNumLineBadge]:Ln,[b.ChongqingRTTextLineBadge]:zn,[b.ShenzhenMetroNumLineBadge]:_n,[b.MRTDestinationNumbers]:Dn,[b.MRTLineBadge]:Fn,[b.JREastLineBadge]:Hn,[b.QingdaoMetroNumLineBadge]:Jn,[b.GuangdongIntercityRailwayLineBadge]:nt,[b.Facilities]:Te,[b.Text]:se,[b.I18nText]:lt,[b.Master]:ct};export{xt as m};
