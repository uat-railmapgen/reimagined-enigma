import{j as C}from"./chakra-xNcrfRXW.js";import{a3 as Ct,ap as Et,aq as Ht,N as Tt,k as tt,l as R,ar as Kt,as as Wt,at as wt,S as Rt,au as Pt,c as It,d as st,av as Q,aw as J,ax as lt,T as rt,ay as kt,az as Nt,aA as F,q as dt,t as ct,n as at,m as Ot,o as zt,r as ut,E as ht,v as St,y as bt,U as V,aB as Xt,p as Ft,aC as Yt,a0 as Ut,a1 as Vt,A as xt,z as Mt,a9 as nt,am as Qt,an as Zt}from"./index-T5lxQXkJ.js";import{s as ft,u as qt,f as Gt,F as Jt,l as te,S as ee,b as ne,c as se}from"./master-manager-DWJdXOvp.js";import{f as $t,b as _}from"./react-D-_si4LB.js";import{u as H,e as oe,i as ie}from"./clipboard-B8PSvdIQ.js";import{m as yt}from"./misc-nodes-BGg_wjuV.js";const re={[Ct.Shmetro]:[{"zh-Hans":"安徽南路",en:"South Anhui Road"},{"zh-Hans":"广西西路",en:"West Guangxi Road"},{"zh-Hans":"西藏东路",en:"East Xizang Road"},{"zh-Hans":"湖北北路",en:"North Hubei Road"},{"zh-Hans":"吉林中路",en:"Central Jilin Road"},{"zh-Hans":"乌镇大道",en:"Wuzhen Avenue"},{"zh-Hans":"龙溪公路",en:"Longxi Highway"},{"zh-Hans":"抚顺公园",en:"Fushun Park"},{"zh-Hans":"七星新城",en:"Qixing New Town"},{"zh-Hans":"千灯机场",en:"Qiandeng Airport"},{"zh-Hans":"震泽",en:"Zhengze"},{"zh-Hans":"沧浪高科园区",en:"Canglang High-Tech Park"},{"zh-Hans":"黎里",en:"Lili"},{"zh-Hans":"娄塘新村",en:"Loutang Xincun"},{"zh-Hans":"建设新村",en:"Jianshe Xincun"}],[Ct.Bjsubway]:[{"zh-Hans":"青松路",en:"Qingsonglu"},{"zh-Hans":"星海广场",en:"Xinghai Guangchang"},{"zh-Hans":"科技新城",en:"Keji Xincheng"},{"zh-Hans":"东湖桥",en:"Donghuqiao"},{"zh-Hans":"金融中心南",en:"Jinrongzhongxinnan"},{"zh-Hans":"玉泉东路",en:"Yuquan Donglu"},{"zh-Hans":"西山北街",en:"Xishan Beijie"},{"zh-Hans":"天光西门",en:"Tianguangximen"},{"zh-Hans":"翠竹园",en:"Cuizhuyuan"},{"zh-Hans":"明月港",en:"Mingyuegang"},{"zh-Hans":"春华街",en:"Chunhuajie"},{"zh-Hans":"锦绣大道",en:"Jinxiu Dadao"}]},ae=t=>{const e=re[t];return e.at(Math.floor(Math.random()*e.length))},Dt=$t("runtime/getStationNames",async({cityName:t},{getState:e,dispatch:l,rejectWithValue:c})=>{const{token:o}=e().account;if(!o){l(Et({cityName:t,names:[]}));return}const d=await fetch("".concat(Ht,"/").concat(t),{headers:{accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(o)}});if(!d.ok)return Tt.warn("Failed to fetch random station names",d.statusText),c(d.statusText);const i=await d.json();l(Et({cityName:t,names:i}))}),_t=$t("runtime/getOneStationName",async(t,{getState:e,dispatch:l})=>{var u;const{stationNames:c}=e().runtime,o=c[t];if(((u=o==null?void 0:o.length)!=null?u:0)==0)return Tt.debug("No random station names in cache, using fallback"),l(Dt({cityName:t})),Object.values(ae(t));const d=structuredClone(o),i=d.shift();return l(Et({cityName:t,names:d})),d.length<3&&l(Dt({cityName:t})),Object.values(i)}),Bt=(t,e,l,c,o,d,i)=>{if(!("offsetFrom"in d)||!("offsetTo"in d)||Number.isNaN(d.offsetFrom)||Number.isNaN(d.offsetTo))return;if(d.offsetFrom===d.offsetTo)return jt(t,e,l,c,o)?i<0?{x1:e,y1:l,x2:c,y2:o,offset:d.offsetFrom}:e===c?{x1:e+5*i,y1:l,x2:c+5*i,y2:o,offset:d.offsetFrom}:l===o?{x1:e,y1:l+5*i,x2:c,y2:o+5*i,offset:d.offsetFrom}:{x1:e+5*Math.SQRT1_2*i,y1:l+5*Math.SQRT1_2*i,x2:c+5*Math.SQRT1_2*i,y2:o+5*Math.SQRT1_2*i,offset:d.offsetFrom}:void 0;const[u,s]=[d.offsetFrom,d.offsetTo];for(let g=0;g<Math.PI;g+=Math.PI/8)for(let a=g,h=0;h<2;h++,a+=Math.PI){const[A,b,v,z]=[Math.sin(g)*u,Math.cos(g)*u,Math.sin(a)*s,Math.cos(a)*s];if(jt(t,e+A,l+b,c+v,o+z))return{x1:e+A,y1:l+b,x2:c+v,y2:o+z,offset:0}}},jt=(t,e,l,c,o)=>!!((e===c||l===o)&&[tt.Diagonal,tt.Perpendicular].includes(t)||Math.abs((o-l)/(c-e))===1&&[tt.Diagonal,tt.RotatePerpendicular].includes(t)),ce=(t,e)=>{const l=[],c=[];return Object.values(e).forEach(o=>{var T;if(o.length===1){c.push(...o.map(f=>f.edge));return}const d=t.getEdgeAttribute(o.at(0),"type");if(!o.every(f=>t.getEdgeAttribute(f,"type")===d)){c.push(...o.map(f=>f.edge));return}const i=t.getEdgeAttribute(o.at(0),"style");if(!o.every(f=>t.getEdgeAttribute(f,"style")===i)){c.push(...o.map(f=>f.edge));return}const u={},s=new Set,g=new Set,a=Object.fromEntries(o.map(f=>{var m,k;const[E,r]=t.extremities(f);return u[E]=((m=u[E])!=null?m:0)+1,u[r]=((k=u[r])!=null?k:0)+1,s.add(E),g.add(r),[E,[f.edge,r]]})),h=Array.from(s).filter(f=>u[f]===1),A=Array.from(g).filter(f=>u[f]===1);if(h.length!==1||A.length!==1){c.push(...o.map(f=>f.edge));return}const b=h[0],v=A[0];if(b===v){c.push(...o.map(f=>f.edge));return}const z=[a[b][0]];let L=a[b][1];for(let f=1;f<o.length;f=f+1){const E=(T=a[L])==null?void 0:T.at(1);if(!E){c.push(...o.map(r=>r.edge));return}z.push(a[L][0]),L=E}if(L!==v||z.length!==o.length){c.push(...o.map(f=>f.edge));return}l.push(z)}),{allReconciledLines:l,danglingLines:c}},le=(t,e)=>{if(!e.every(o=>t.hasEdge(o)))return;const l=e.map(o=>{var b,v,z;const[d,i]=t.extremities(o),u=t.getNodeAttributes(d),s=t.getNodeAttributes(i),{type:g,parallelIndex:a}=t.getEdgeAttributes(o),h=(b=t.getEdgeAttribute(o,g))!=null?b:R[g].defaultAttrs,A=Bt(g,u.x,u.y,s.x,s.y,h,a);if(A){const{x1:L,y1:T,x2:f,y2:E,offset:r}=A;return R[tt.Simple].generatePath(L,f,T,E,{offset:r})}return(z=(v=R[g])==null?void 0:v.generatePath(u.x,s.x,u.y,s.y,h))!=null?z:"M ".concat(u.x," ").concat(u.y," L ").concat(s.x," ").concat(s.y)});let c="".concat(l[0]," ");for(let o=1;o<e.length;o=o+1)c+=l[o].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return c},de=t=>[...t.nodeEntries()].map(e=>e.node.startsWith("stn")?{id:e.node,type:"station",station:e.attributes}:{id:e.node,type:"misc-node",miscNode:e.attributes}),ue=t=>{const e={},l=[],c={},o=[];for(const s of t.edgeEntries()){const[g,a,h,A]=[s.sourceAttributes.x,s.sourceAttributes.y,s.targetAttributes.x,s.targetAttributes.y],b=Bt(s.attributes.type,g,a,h,A,s.attributes[s.attributes.type],s.attributes.parallelIndex);if(!b){if(s.attributes.parallelIndex>=0){l.push(s);continue}}if(s.attributes.reconcileId!==""){const v=s.attributes.reconcileId;v in c?c[v].push(s):c[v]=[s];continue}if(b){const v=s.edge,z=s.attributes,{x1:L,y1:T,x2:f,y2:E,offset:r}=b;e[v]={id:v,attr:z,path:R[tt.Simple].generatePath(L,f,T,E,{offset:r})};continue}o.push(s)}const d=new Set;for(;l.length;){const s=l.pop();if(d.has(s.edge))continue;const{normal:g,parallel:a}=Kt(t,s);if(!a.length)continue;a.forEach(A=>d.add(A.edge)),o.push(...g);const h=Wt(a);for(const A of a){const b=A.edge;e[b]={id:A.edge,attr:A.attributes,path:h[b]}}}const{allReconciledLines:i,danglingLines:u}=ce(t,c);for(const s of i){const g=le(t,s);if(!g)continue;const a=s[0];e[a]={id:a,attr:t.getEdgeAttributes(a),path:g}}for(const s of u){const g=t.getEdgeAttributes(s),[a,h]=t.extremities(s),A=t.getNodeAttributes(a),b=t.getNodeAttributes(h);e[s]={id:s,attr:g,path:R[tt.Simple].generatePath(A.x,b.x,A.y,b.y,R[tt.Simple].defaultAttrs)}}for(const s of o){const g=s.edge,a=s.attributes.type,h=s.attributes,[A,b,v,z]=[s.sourceAttributes.x,s.sourceAttributes.y,s.targetAttributes.x,s.targetAttributes.y];if(!(a in R)){e[g]={id:g,attr:h,path:"M ".concat(A," ").concat(b," L ").concat(v," ").concat(z)};continue}e[g]={id:g,attr:h,path:R[a].generatePath(A,v,b,z,h[a])}}return Object.values(e).map(s=>({id:s.id,type:"line",line:s}))},Lt=t=>{const{id:e,x:l,y:c,handlePointerDown:o,handlePointerMove:d,handlePointerUp:i}=t,u=_.useCallback(a=>o(e,a),[e,o]),s=_.useCallback(a=>d(e,a),[e,d]),g=_.useCallback(a=>i(e,a),[e,i]);return C.jsx("g",{id:e,transform:"translate(".concat(l-6.4," ").concat(c-6.4,")scale(0.025)"),onPointerDown:u,onPointerMove:s,onPointerUp:g,style:{cursor:"move"},children:C.jsx("path",{id:"stn_core_".concat(e),fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},he=t=>{const{id:e,path:l,handlePointerDown:c}=t,o=_.useCallback(d=>c(e,d),[e,c]);return C.jsx("path",{id:e,d:l,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onPointerDown:o})},fe=_.memo(t=>{var s,g,a,h,A,b,v,z,L,T,f,E;const{elements:e,handlePointerDown:l,handlePointerMove:c,handlePointerUp:o,handleEdgePointerDown:d}=t,i=Object.fromEntries(Array.from({length:21},(r,m)=>[m-10,{pre:[],main:[],post:[]}]));for(const r of e)if(r.type==="line"){const m=r.line.attr.type,k=r.line.attr.style,P=r.line.attr[k],S=(s=wt[k])==null?void 0:s.preComponent;S&&i[r.line.attr.zIndex].pre.push(C.jsx(S,{id:r.id,type:m,path:r.line.path,styleAttrs:P,newLine:!1,handlePointerDown:d},"".concat(r.id,".pre")));const y=(a=(g=wt[k])==null?void 0:g.component)!=null?a:he;i[r.line.attr.zIndex].main.push(C.jsx(y,{id:r.id,type:m,path:r.line.path,styleAttrs:P,newLine:!1,handlePointerDown:d},r.id));const j=(h=wt[k])==null?void 0:h.postComponent;j&&i[r.line.attr.zIndex].post.push(C.jsx(j,{id:r.id,type:m,path:r.line.path,styleAttrs:P,newLine:!1,handlePointerDown:d},"".concat(r.id,".post")))}else if(r.type==="station"){const m=r.station,k=m.type,P=(A=ft[k])==null?void 0:A.preComponent;P&&i[r.station.zIndex].pre.push(C.jsx(P,{id:r.id,x:m.x,y:m.y,attrs:m,handlePointerDown:l,handlePointerMove:c,handlePointerUp:o},"".concat(r.id,".pre")));const S=(v=(b=ft[k])==null?void 0:b.component)!=null?v:Lt;i[r.station.zIndex].main.push(C.jsx(S,{id:r.id,x:m.x,y:m.y,attrs:m,handlePointerDown:l,handlePointerMove:c,handlePointerUp:o},r.id));const y=(z=ft[k])==null?void 0:z.postComponent;y&&i[r.station.zIndex].post.push(C.jsx(y,{id:r.id,x:m.x,y:m.y,attrs:m,handlePointerDown:l,handlePointerMove:c,handlePointerUp:o},"".concat(r.id,".post")))}else if(r.type==="misc-node"){const m=r.miscNode,k=m.type,P=(L=yt[k])==null?void 0:L.preComponent;P&&i[r.miscNode.zIndex].pre.push(C.jsx(P,{id:r.id,x:m.x,y:m.y,attrs:m[k],handlePointerDown:l,handlePointerMove:c,handlePointerUp:o},"".concat(r.id,".pre")));const S=(f=(T=yt[k])==null?void 0:T.component)!=null?f:Lt;i[r.miscNode.zIndex].main.push(C.jsx(S,{id:r.id,x:m.x,y:m.y,attrs:m[k],handlePointerDown:l,handlePointerMove:c,handlePointerUp:o},r.id));const y=(E=yt[k])==null?void 0:E.postComponent;y&&i[r.miscNode.zIndex].post.push(C.jsx(y,{id:r.id,x:m.x,y:m.y,attrs:m[k],handlePointerDown:l,handlePointerMove:c,handlePointerUp:o},"".concat(r.id,".post")))}return Array.from({length:21},(r,m)=>(m-10).toString()).map(r=>[...i[r].pre,...i[r].main,...i[r].post]).flat()},(t,e)=>t.elements===e.elements),ye=[...Object.values(Rt),Pt.Virtual,Pt.Master,Pt.LondonArrow],pe=()=>{const t=It(),e=_.useRef(window.graph),l=()=>{t(dt()),t(ct()),t(St(e.current.export()))},{telemetry:{project:c},preference:{autoParallel:o}}=st(S=>S.app),{svgViewBoxZoom:d,svgViewBoxMin:i}=st(S=>S.param),{selected:u,refresh:{nodes:s,edges:g},mode:a,active:h,keepLastPath:A,theme:b}=st(S=>S.runtime),[v,z]=_.useState({x:0,y:0}),[L,T]=_.useState({x:0,y:0}),f=H((S,y)=>{y.stopPropagation(),a==="select"&&t(Q("free"));const j=y.currentTarget,{x:B,y:I}=J(y);j.setPointerCapture(y.pointerId),z({x:B,y:I}),t(lt(S)),y.shiftKey?u.has(S)?t(kt(S)):t(Nt(S)):u.has(S)||t(rt(new Set([S])))}),E=H((S,y)=>{const{x:j,y:B}=J(y);a==="free"&&h===S?(u.forEach(I=>{e.current.hasNode(I)&&e.current.updateNodeAttributes(I,O=>({...O,x:F(O.x-(v.x-j)*d/100,y.altKey?1:5),y:F(O.y-(v.y-B)*d/100,y.altKey?1:5)}))}),t(dt()),t(ct())):a.startsWith("line")&&T({x:(v.x-j)*d/100,y:(v.y-B)*d/100})}),r=H((S,y)=>{if(a.startsWith("line")){A||t(Q("free"));const j=e.current.hasNode(h)&&ye.includes(e.current.getNodeAttribute(h,"type"));["stn_core_","virtual_circle_"].forEach(I=>{var ot,it;const K=(it=(ot=document.elementsFromPoint(y.clientX,y.clientY)[0].attributes)==null?void 0:ot.getNamedItem("id"))==null?void 0:it.value,Y=K==null?void 0:K.startsWith(I);if(j&&Y){const W=a.slice(5),et="line_".concat(at(10)),[X,$]=[h,K.slice(I.length)],U=o?Ot(e.current,W,X,$,"from"):-1;e.current.addDirectedEdgeWithKey(et,X,$,{visible:!0,zIndex:0,type:W,[W]:structuredClone(R[W].defaultAttrs),style:zt.SingleColor,[zt.SingleColor]:{color:b},reconcileId:"",parallelIndex:U}),c&&ut.event(ht.ADD_LINE,{type:W})}}),t(ct()),t(St(e.current.export()))}else if(a==="free"&&h){const{x:j,y:B}=J(y);v.x-j===0&&v.y-B===0||t(St(e.current.export()))}t(lt(void 0))}),m=H((S,y)=>{if(y.stopPropagation(),y.shiftKey||t(bt()),y.shiftKey&&u.has(S)?t(kt(S)):t(Nt(S)),a.startsWith("station")||a.startsWith("misc-node-virtual")||a.startsWith("misc-node-master")){const j=y.clientX-document.getElementById("canvas").getBoundingClientRect().left,B=y.clientY-document.getElementById("canvas").getBoundingClientRect().top,I=a.startsWith("station"),O=at(10),K=I?"stn_".concat(O):"misc_node_".concat(O),Y=I?a.slice(8):a.slice(10),{x:ot,y:it}=V(j,B,d,i),W=I?structuredClone(ft[Y].defaultAttrs):structuredClone(yt[Y].defaultAttrs);"color"in W&&(W.color=b),e.current.addNode(K,{visible:!0,zIndex:0,x:F(ot,5),y:F(it,5),type:Y,[Y]:W});const et=e.current.getEdgeAttributes(S),{zIndex:X,type:$,style:U}=et,pt=et[$],gt=et[U],[Z,vt]=e.current.extremities(S),n=o?0:-1;e.current.addDirectedEdgeWithKey("line_".concat(at(10)),Z,K,{visible:!0,zIndex:X,type:$,[$]:structuredClone(pt),style:U,[U]:structuredClone(gt),reconcileId:"",parallelIndex:n}),e.current.addDirectedEdgeWithKey("line_".concat(at(10)),K,vt,{visible:!0,zIndex:X,type:$,[$]:structuredClone(pt),style:U,[U]:structuredClone(gt),reconcileId:"",parallelIndex:n}),e.current.dropEdge(S),l(),c&&(ut.event(ht.ADD_STATION,{type:Y}),ut.event(ht.ADD_LINE,{type:$})),t(Q("free")),t(rt(new Set([K])))}}),k=_.useMemo(()=>[...ue(e.current),...de(e.current)],[g,s]),P=Xt.component;return C.jsxs(C.Fragment,{children:[C.jsx(fe,{elements:k,handlePointerDown:f,handlePointerMove:E,handlePointerUp:r,handleEdgePointerDown:m}),a.startsWith("line")&&h&&h!=="background"&&C.jsx(P,{id:"line_create_in_progress___no_use",type:a.slice(5),path:R[a.slice(5)].generatePath(e.current.getNodeAttribute(h,"x"),e.current.getNodeAttribute(h,"x")-L.x,e.current.getNodeAttribute(h,"y"),e.current.getNodeAttribute(h,"y")-L.y,R[a.slice(5)].defaultAttrs),styleAttrs:{color:b},newLine:!0,handlePointerDown:()=>{}})]})},Ae=()=>{const t=It(),e=_.useRef(window.graph),l=()=>{t(dt()),t(ct()),t(St(e.current.export()))},{activeSubscriptions:c}=st(n=>n.account),{telemetry:{project:o},preference:{randomStationsNames:d}}=st(n=>n.app),{svgViewBoxZoom:i,svgViewBoxMin:u}=st(n=>n.param),{mode:s,lastTool:g,active:a,selected:h,keepLastPath:A,theme:b,refresh:{nodes:v},masterNodesCount:z,parallelLinesCount:L}=st(n=>n.runtime),T=qt(),{height:f,width:E}=Ft(T),r=!c.RMP_CLOUD&&z+1>Yt,m=!c.RMP_CLOUD&&L+1>Ut,k=!c.RMP_CLOUD||d==="none";_.useEffect(()=>{const n=Gt(e.current);Object.entries(n).filter(([p,x])=>x&&p in Jt).forEach(([p])=>te(p))},[v]);const[P,S]=_.useState({x:0,y:0}),[y,j]=_.useState({x:0,y:0}),[B,I]=_.useState({x:0,y:0}),[O,K]=_.useState({x:0,y:0}),Y=H(async n=>{const{x:p,y:x}=J(n);if(s.startsWith("station")){t(Q("free"));const D=at(10),N="stn_".concat(D),w=s.slice(8),M=structuredClone(ft[w].defaultAttrs);if("color"in M&&(M.color=b),!k){const mt=await t(_t(Ct.Shmetro));if(_t.fulfilled.match(mt)){const G=mt.payload;M.names.length>G.length?G.push(...Array(M.names.length-G.length).fill(G.at(-1))):M.names.length<G.length&&G.splice(M.names.length,G.length-M.names.length),M.names=G}}const{x:q,y:At}=V(p,x,i,u);e.current.addNode(N,{visible:!0,zIndex:0,x:F(q,5),y:F(At,5),type:w,[w]:M}),l(),o&&ut.event(ht.ADD_STATION,{type:w}),t(rt(new Set([N])))}else if(s.startsWith("misc-node")){t(Q("free"));const D=at(10),N="misc_node_".concat(D),w=s.slice(10),{x:M,y:q}=V(p,x,i,u);e.current.addNode(N,{visible:!0,zIndex:0,x:F(M,5),y:F(q,5),type:w,[w]:structuredClone(yt[w].defaultAttrs)}),l(),o&&ut.event(ht.ADD_STATION,{type:w}),t(rt(new Set([N])))}else s==="free"||s.startsWith("line")?(s.startsWith("line")&&(t(Q("free")),A&&t(Vt(!1))),I({x:p,y:x}),K(u),n.shiftKey||(t(lt("background")),t(bt()))):s==="select"&&(S(V(p,x,i,u)),j(V(p,x,i,u)))}),ot=H(n=>{if(s==="select"){if(P.x!=0&&P.y!=0){const{x:p,y:x}=J(n);j(V(p,x,i,u))}}else if(a==="background"){const{x:p,y:x}=J(n);t(xt({x:O.x+(B.x-p)*i/100,y:O.y+(B.y-x)*i/100}))}}),it=H(n=>{if(s==="select"){const{x:p,y:x}=J(n),{x:D,y:N}=V(p,x,i,u),w=ne(e.current,P.x,P.y,D,N),M=se(e.current,new Set(w));t(rt(new Set([...n.shiftKey?h:[],...w,...M]))),t(Q("free")),S({x:0,y:0}),j({x:0,y:0})}a==="background"&&!n.shiftKey&&t(lt(void 0))}),W=H(n=>{let p=i;n.deltaY>0&&i+10<400?p=i+10:n.deltaY<0&&i-10>0&&(p=i-10),t(Mt(p));const{x,y:D}=J(n),N=n.currentTarget.getBoundingClientRect(),[w,M]=[x/N.width,D/N.height];t(xt({x:u.x+x*i/100-E*p/100*w,y:u.y+D*i/100-f*p/100*M}))}),et=H(async n=>{if(nt?n.key==="Backspace":n.key==="Delete")h.size>0&&(h.forEach(p=>{e.current.hasNode(p)?e.current.dropNode(p):e.current.hasEdge(p)&&e.current.dropEdge(p)}),t(bt()),l());else if(n.key.startsWith("Arrow")){const x=n.key.endsWith("Left")?-1:n.key.endsWith("Right")?1:0,D=n.key.endsWith("Up")?-1:n.key.endsWith("Down")?1:0;t(xt(V(100*x,100*D,i,u)))}else if(n.key==="i"||n.key==="j"||n.key==="k"||n.key==="l"){const x=(n.key==="j"?-1:n.key==="l"?1:0)*10,D=(n.key==="i"?-1:n.key==="k"?1:0)*10;h.size>0&&h.forEach(N=>{e.current.hasNode(N)&&(e.current.updateNodeAttribute(N,"x",w=>(w!=null?w:0)+x),e.current.updateNodeAttribute(N,"y",w=>(w!=null?w:0)+D),l())})}else if(n.key==="f"&&g)t(Q(g));else if(n.key==="z"&&(nt?n.metaKey&&!n.shiftKey:n.ctrlKey))nt&&n.preventDefault(),t(Qt()),t(dt()),t(ct());else if(n.key==="s")t(Q("select"));else if((n.key==="c"||n.key==="x")&&(nt?n.metaKey&&!n.shiftKey:n.ctrlKey)){const p=oe(e.current,h);navigator.clipboard.writeText(p),n.key==="x"&&(t(bt()),h.forEach(x=>{e.current.hasNode(x)?e.current.dropNode(x):e.current.hasEdge(x)&&e.current.dropEdge(x)}),l())}else if(n.key==="v"&&(nt?n.metaKey&&!n.shiftKey:n.ctrlKey)){const p=await navigator.clipboard.readText(),{x,y:D}=V(E/2,f/2,i,u),{nodes:N,edges:w}=ie(p,e.current,r,m,F(x,5),F(D,5));l();const M=structuredClone(N);w.forEach(q=>M.add(q)),t(rt(M))}else(nt&&n.key==="z"&&n.metaKey&&n.shiftKey||!nt&&n.key==="y"&&n.ctrlKey)&&(t(Zt()),t(dt()),t(ct()))}),[X,$]=_.useState(0),U=H(n=>{if(n.touches.length===2){t(lt(void 0));const[p,x]=[n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY];$(p*p+x*x)}}),pt=H(n=>{if(X!==0&&n.touches.length===2){const[p,x]=[n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY],D=p*p+x*x;let N=i;D-X<0&&i+10<=390?N=i+10:D-X>0&&i-10>=10&&(N=i-10),t(Mt(N)),$(D);const w=n.currentTarget.getBoundingClientRect(),[M,q]=[(n.touches[0].clientX+n.touches[1].clientX)/2-w.left,(n.touches[0].clientY+n.touches[1].clientY)/2-w.top],[At,mt]=[M/w.width,q/w.height];t(xt({x:u.x+M*i/100-E*N/100*At,y:u.y+q*i/100-f*N/100*mt}))}}),gt=H(n=>{X!==0&&$(0)}),[Z,vt]=_.useState({sx:0,sy:0,ex:0,ey:0});return _.useEffect(()=>{vt({sx:P.x<=y.x?P.x:y.x,ex:P.x>y.x?P.x:y.x,sy:P.y<=y.y?P.y:y.y,ey:P.y>y.y?P.y:y.y})},[y.x,y.y]),C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none",touchAction:"none"},height:f,width:E,viewBox:"".concat(u.x," ").concat(u.y," ").concat(E*i/100," ").concat(f*i/100),onPointerDown:Y,onPointerMove:ot,onPointerUp:it,onTouchStart:U,onTouchMove:pt,onTouchEnd:gt,onWheel:W,tabIndex:0,onKeyDown:et,children:[C.jsx(ee,{children:C.jsx(pe,{})}),s==="select"&&P.x!=0&&P.y!=0&&C.jsx("rect",{x:Z.sx,y:Z.sy,width:Z.ex-Z.sx,height:Z.ey-Z.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"}),C.jsx("defs",{children:C.jsxs("pattern",{id:"opaque",width:"5",height:"5",patternUnits:"userSpaceOnUse",children:[C.jsx("rect",{x:"0",y:"0",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"}),C.jsx("rect",{x:"2.5",y:"2.5",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"})]})})]})};export{Ae as default};
