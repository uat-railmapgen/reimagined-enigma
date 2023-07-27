import{j as w}from"./chakra-e455e76b.js";import{b as m,r as ut}from"./react-beb26faf.js";import{u as I}from"./useEvent-32c835f5.js";import{ac as st,l as M,e as pt,z as K,ad as q,j as H,ae as G,s as ht,f as nt,ab as R,S as vt,J as bt,n as rt,c as J,r as ot,F as it,h as ct,L as lt,P as wt,q as Q,p as Et,a1 as St,a3 as kt}from"./index-4c0d52ab.js";import{s as xt}from"./stations-31b37c85.js";import{m as mt}from"./misc-nodes-23089a4b.js";import{a as T,r as B,f as Nt,F as Y,i as V}from"./helpers-7f4515f5.js";const tt=e=>{const{id:t,type:s,attrs:u,styleType:n,styleAttrs:f=st[n].defaultAttrs,newLine:p,handleClick:l}=e,{x1:y,y1:h,x2:v,y2:A}=e,[k,E]=m.useState("M 0,0 L 0,0");m.useEffect(()=>{E(M[s].generatePath(y,v,h,A,u))},[s,JSON.stringify(u),y,v,h,A]);const _=st[n].component;return m.useMemo(()=>w.jsx(_,{id:t,type:s,path:k,styleAttrs:f,newLine:p,handleClick:l}),[t,s,k,n,JSON.stringify(f),p,l])},Lt=e=>{const t=e.filterDirectedEdges((u,n,f,p,l,y,h)=>u.startsWith("line")&&n.reconcileId!==""),s={};for(const u of t){const n=e.getEdgeAttribute(u,"reconcileId");n in s?s[n].push(u):s[n]=[u]}return s},yt=e=>{const t=Lt(e),s=[],u=[];return Object.values(t).forEach(n=>{var W;if(n.length===1){u.push(...n);return}const f=e.getEdgeAttribute(n.at(0),"type");if(!n.every(x=>e.getEdgeAttribute(x,"type")===f)){u.push(...n);return}const p=e.getEdgeAttribute(n.at(0),"style");if(!n.every(x=>e.getEdgeAttribute(x,"style")===p)){u.push(...n);return}const l={},y=new Set,h=new Set,v=Object.fromEntries(n.map(x=>{var z,j;const[S,P]=e.extremities(x);return l[S]=((z=l[S])!=null?z:0)+1,l[P]=((j=l[P])!=null?j:0)+1,y.add(S),h.add(P),[S,[x,P]]})),A=Array.from(y).filter(x=>l[x]===1),k=Array.from(h).filter(x=>l[x]===1);if(A.length!==1||k.length!==1){u.push(...n);return}const E=A[0],_=k[0];if(E===_){u.push(...n);return}const N=[v[E][0]];let L=v[E][1];for(let x=1;x<n.length;x=x+1){const S=(W=v[L])==null?void 0:W.at(1);if(!S){u.push(...n);return}N.push(v[L][0]),L=S}if(L!==_||N.length!==n.length){u.push(...n);return}s.push(N)}),{allReconciledLines:s,danglingLines:u}},It=(e,t)=>{if(!t.every(n=>e.hasEdge(n)))return;const s=t.map(n=>{var A;const[f,p]=e.extremities(n),l=e.getNodeAttributes(f),y=e.getNodeAttributes(p),h=e.getEdgeAttribute(n,"type"),v=(A=e.getEdgeAttribute(n,h))!=null?A:M[h].defaultAttrs;return M[h].generatePath(l.x,y.x,l.y,y.y,v)});let u=`${s[0]} `;for(let n=1;n<t.length;n=n+1)u+=s[n].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return u},ft=e=>e.filterNodes((t,s)=>t.startsWith("stn")).map(t=>[t,e.getNodeAttributes(t)]).filter(([t,s])=>s.visible).sort((t,s)=>t[1].zIndex-s[1].zIndex).map(([t,s])=>({node:t,visible:s.visible,zIndex:s.zIndex,x:s.x,y:s.y,type:s.type,[s.type]:s[s.type]})),et=e=>e.filterDirectedEdges((t,s,u,n,f,p,l)=>t.startsWith("line")&&s.visible&&s.reconcileId==="").sort((t,s)=>e.getEdgeAttribute(t,"zIndex")-e.getEdgeAttribute(s,"zIndex")).map(t=>{const s=e.getEdgeAttribute(t,"type"),u=e.getEdgeAttribute(t,s),n=e.getEdgeAttribute(t,"style"),f=e.getEdgeAttribute(t,n),[p,l]=e.extremities(t),y=e.getNodeAttributes(p),h=e.getNodeAttributes(l);return{edge:t,x1:y.x,y1:y.y,x2:h.x,y2:h.y,type:s,attr:u,style:n,styleAttr:f}}),gt=e=>e.filterNodes((t,s)=>t.startsWith("misc_node")).map(t=>[t,e.getNodeAttributes(t)]).filter(([t,s])=>s.visible).sort((t,s)=>t[1].zIndex-s[1].zIndex).map(([t,s])=>({node:t,visible:s.visible,zIndex:s.zIndex,x:s.x,y:s.y,type:s.type,[s.type]:s[s.type]})),_t=()=>{const e=pt(),t=m.useRef(window.graph),{telemetry:{project:s}}=K(r=>r.app),{svgViewBoxZoom:u}=K(r=>r.param),{selected:n,refresh:{nodes:f,edges:p},mode:l,active:y,keepLastPath:h,theme:v}=K(r=>r.runtime),[A,k]=m.useState({x:0,y:0}),[E,_]=m.useState({x:0,y:0}),N=I((r,i)=>{i.stopPropagation();const c=i.currentTarget,{x:d,y:g}=T(i);c.setPointerCapture(i.pointerId),k({x:d,y:g}),e(q(r)),!i.shiftKey&&n.length<=1&&e(H()),e(G(r))}),L=I((r,i)=>{i.stopPropagation();const{x:c,y:d}=T(i);l==="free"&&y===r?(n.forEach(g=>{t.current.updateNodeAttributes(g,b=>({...b,x:B(b.x-(A.x-c)*u/100,i.altKey?1:5),y:B(b.y-(A.y-d)*u/100,i.altKey?1:5)}))}),e(ht()),e(nt())):l.startsWith("line")&&_({x:(A.x-c)*u/100,y:(A.y-d)*u/100})}),W=I((r,i)=>{if(i.stopPropagation(),l.startsWith("line")){h||e(R("free"));const c=[...Object.values(vt),bt.Virtual],d=t.current.hasNode(y)&&c.includes(t.current.getNodeAttribute(y,"type"));["stn_core_","virtual_circle_"].forEach(b=>{var at,dt;const D=(dt=(at=document.elementsFromPoint(i.clientX,i.clientY)[0].attributes)==null?void 0:at.getNamedItem("id"))==null?void 0:dt.value,X=D==null?void 0:D.startsWith(b);if(d&&X){const Z=l.slice(5),At=`line_${rt(10)}`;t.current.addDirectedEdgeWithKey(At,y,D.slice(b.length),{visible:!0,zIndex:0,type:Z,[Z]:structuredClone(M[Z].defaultAttrs),style:J.SingleColor,[J.SingleColor]:{color:v},reconcileId:""}),s&&ot.event(it.ADD_LINE,{type:Z})}}),e(nt()),e(ct(t.current.export()))}else if(l==="free")if(y){const{x:c,y:d}=T(i);A.x-c===0&&A.y-d===0?e(G(r)):e(ct(t.current.export()))}else e(G(r));e(q(void 0))}),x=I((r,i)=>{e(H()),e(G(r))}),[S,P]=m.useState(ft(t.current)),[z,j]=m.useState(gt(t.current)),[O,C]=m.useState(et(t.current)),[F,$]=m.useState([]),[o,a]=m.useState([]);return m.useEffect(()=>{P(ft(t.current)),j(gt(t.current))},[f]),m.useEffect(()=>{C(et(t.current));const{allReconciledLines:r,danglingLines:i}=yt(t.current);$(r),a(i)},[]),m.useEffect(()=>{C(et(t.current));const{allReconciledLines:r,danglingLines:i}=yt(t.current);$(r),a(i)},[p]),w.jsxs(w.Fragment,{children:[o.map(r=>{const[i,c]=t.current.extremities(r),d=t.current.getNodeAttributes(i),g=t.current.getNodeAttributes(c);return w.jsx(tt,{id:r,x1:d.x,y1:d.y,x2:g.x,y2:g.y,newLine:!1,type:lt.Simple,attrs:M[lt.Simple].defaultAttrs,styleType:J.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:x},r)}),F.map(r=>{const i=It(t.current,r);if(!i)return w.jsx(w.Fragment,{});const c=r.at(0),d=t.current.getEdgeAttribute(c,"type"),g=t.current.getEdgeAttribute(c,"style"),b=t.current.getEdgeAttribute(c,g),U=st[g].component;return w.jsx(U,{id:c,type:d,path:i,styleAttrs:b,newLine:!1,handleClick:x},c)}),O.map(({edge:r,x1:i,y1:c,x2:d,y2:g,type:b,attr:U,style:D,styleAttr:X})=>w.jsx(tt,{id:r,x1:i,y1:c,x2:d,y2:g,newLine:!1,type:b,attrs:U,styleType:D,styleAttrs:X,handleClick:x},r)),z.map(r=>{const{node:i,x:c,y:d,type:g}=r,b=mt[g].component;return w.jsx(b,{id:i,x:c,y:d,attrs:r[g],handlePointerDown:N,handlePointerMove:L,handlePointerUp:W},i)}),S.map(r=>{const{node:i,x:c,y:d,type:g}=r,b=xt[g].component;return w.jsx(b,{id:i,x:c,y:d,attrs:{[g]:r[g]},handlePointerDown:N,handlePointerMove:L,handlePointerUp:W},i)}),l.startsWith("line")&&y&&w.jsx(tt,{id:"create_in_progress___no_use",x1:t.current.getNodeAttribute(y,"x"),y1:t.current.getNodeAttribute(y,"y"),x2:t.current.getNodeAttribute(y,"x")-E.x,y2:t.current.getNodeAttribute(y,"y")-E.y,newLine:!0,type:l.slice(5),attrs:M[l.slice(5)].defaultAttrs,styleType:J.SingleColor,styleAttrs:{color:v}})]})},Pt=()=>{const[e,t]=ut.useState({width:void 0,height:void 0});return ut.useEffect(()=>{function s(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[]),e},Kt=()=>{var F,$;const e=pt(),t=m.useRef(window.graph),s=()=>{e(ht()),e(nt()),e(ct(t.current.export()))},{telemetry:{project:u}}=K(o=>o.app),{svgViewBoxZoom:n,svgViewBoxMin:f}=K(o=>o.param),{mode:p,lastTool:l,active:y,selected:h,keepLastPath:v,theme:A,refresh:{nodes:k}}=K(o=>o.runtime);m.useEffect(()=>{const o=Nt(t.current);Object.entries(o).filter(([a,r])=>r&&a in Y).map(([a,r])=>a).filter(a=>Y[a]&&document.getElementById(Y[a].cssName)===null).map(a=>Y[a].cssName).filter((a,r,i)=>r===i.findIndex(c=>c===a)).forEach(a=>{const r=document.createElement("link");r.rel="stylesheet",r.id=a,r.href=`/rmp/styles/${a}.css`,document.head.append(r)})},[k]);const[E,_]=m.useState({x:0,y:0}),[N,L]=m.useState({x:0,y:0}),W=I(o=>{const{x:a,y:r}=T(o);if(p.startsWith("station")){e(R("free"));const i=rt(10),c=p.slice(8),d=structuredClone(xt[c].defaultAttrs);"color"in d&&(d.color=A),t.current.addNode(`stn_${i}`,{visible:!0,zIndex:0,x:B(a*n/100+f.x,10),y:B(r*n/100+f.y,10),type:c,[c]:d}),s(),u&&ot.event(it.ADD_STATION,{type:c})}else if(p.startsWith("misc-node")){e(R("free"));const i=rt(10),c=p.slice(10);t.current.addNode(`misc_node_${i}`,{visible:!0,zIndex:0,x:B(a*n/100+f.x,10),y:B(r*n/100+f.y,10),type:c,[c]:structuredClone(mt[c].defaultAttrs)}),s(),u&&ot.event(it.ADD_STATION,{type:c})}else(p==="free"||p.startsWith("line"))&&(p.startsWith("line")&&(e(R("free")),v&&e(wt(!1))),_({x:a,y:r}),L(f),o.shiftKey||(e(q("background")),e(H())))}),x=I(o=>{if(y==="background"){const{x:a,y:r}=T(o);e(Q({x:N.x+(E.x-a)*n/100,y:N.y+(E.y-r)*n/100}))}}),S=I(o=>{y==="background"&&!o.shiftKey&&e(q(void 0))}),P=I(o=>{let a=n;o.deltaY>0&&n+10<400?a=n+10:o.deltaY<0&&n-10>0&&(a=n-10),e(Et(a));const{x:r,y:i}=T(o),c=o.currentTarget.getBoundingClientRect(),[d,g]=[r/c.width,i/c.height];e(Q({x:f.x+r*n/100-C*a/100*d,y:f.y+i*n/100-O*a/100*g}))}),z=I(o=>{if(V?o.key==="Backspace":o.key==="Delete")h.length>0&&h.filter(a=>t.current.hasNode(a)||t.current.hasEdge(a)).forEach(a=>{e(H()),t.current.hasNode(a)?t.current.dropNode(a):t.current.dropEdge(a),s()});else if(o.key.startsWith("Arrow")){const r=o.key.endsWith("Left")?-1:o.key.endsWith("Right")?1:0,i=o.key.endsWith("Up")?-1:o.key.endsWith("Down")?1:0;e(Q({x:f.x+100*n/100*r,y:f.y+100*n/100*i}))}else if(o.key==="i"||o.key==="j"||o.key==="k"||o.key==="l"){const r=(o.key==="j"?-1:o.key==="l"?1:0)*10,i=(o.key==="i"?-1:o.key==="k"?1:0)*10;h.length>0&&h.filter(c=>t.current.hasNode(c)).forEach(c=>{t.current.updateNodeAttribute(c,"x",d=>(d!=null?d:0)+r),t.current.updateNodeAttribute(c,"y",d=>(d!=null?d:0)+i),s()})}else o.key==="f"&&l?e(R(l)):o.key==="z"&&(V?o.metaKey&&!o.shiftKey:o.ctrlKey)?(V&&o.preventDefault(),e(St())):(V&&o.key==="z"&&o.metaKey&&o.shiftKey||!V&&o.key==="y"&&o.ctrlKey)&&e(kt())}),j=Pt(),O=((F=j.height)!=null?F:1280)-40,C=(($=j.width)!=null?$:720)-40;return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40},height:O,width:C,viewBox:`${f.x} ${f.y} ${C*n/100} ${O*n/100}`,onPointerDown:W,onPointerMove:x,onPointerUp:S,onWheel:P,tabIndex:0,onKeyDown:z,children:w.jsx(_t,{})})};export{Kt as default};
