System.register(["./chakra-legacy-DsJcG_7N.js","./index-legacy-CghxRCtW.js","./react-legacy-S3BmMPiz.js","./clipboard-legacy-BJlaJtqs.js","./master-manager-legacy-DjhK-pWB.js","./misc-nodes-legacy-AcWodWD3.js"],(function(e,t){"use strict";var n,r,o,s,i,a,l,d,c,u,y,h,p,f,x,g,m,v,b,P,w,A,k,D,E,I,N,j,S,C,M,_,$,z,K,W,T,L,R,U,O,B,F,Y,X,V,Q,q,Z;return{setters:[e=>{n=e.j},e=>{r=e.l,o=e.o,s=e.ap,i=e.aq,a=e.ar,l=e.e,d=e.a,c=e.as,u=e.at,y=e.au,h=e.U,p=e.av,f=e.aw,x=e.ax,g=e.t,m=e.v,v=e.S,b=e.ay,P=e.n,w=e.m,A=e.p,k=e.r,D=e.E,E=e.w,I=e.y,N=e.V,j=e.az,S=e.D,C=e.aA,M=e.a1,_=e.a2,$=e.A,z=e.z,K=e.a9,W=e.am,T=e.an},e=>{L=e.b},e=>{R=e.u,U=e.e,O=e.i},e=>{B=e.s,F=e.u,Y=e.f,X=e.F,V=e.l,Q=e.b,q=e.c},e=>{Z=e.m}],execute:function(){const t=(e,t,n,r,o,s,i)=>{if(!("offsetFrom"in s)||!("offsetTo"in s))return;if(Number.isNaN(s.offsetFrom)||Number.isNaN(s.offsetTo))return;if(s.offsetFrom===s.offsetTo)return G(e,t,n,r,o)?i<0?{x1:t,y1:n,x2:r,y2:o,offset:s.offsetFrom}:t===r?{x1:t+5*i,y1:n,x2:r+5*i,y2:o,offset:s.offsetFrom}:n===o?{x1:t,y1:n+5*i,x2:r,y2:o+5*i,offset:s.offsetFrom}:{x1:t+5*Math.SQRT1_2*i,y1:n+5*Math.SQRT1_2*i,x2:r+5*Math.SQRT1_2*i,y2:o+5*Math.SQRT1_2*i,offset:s.offsetFrom}:void 0;const[a,l]=[s.offsetFrom,s.offsetTo];for(let d=0;d<Math.PI;d+=Math.PI/8)for(let s=d,i=0;i<2;i++,s+=Math.PI){const[i,c,u,y]=[Math.sin(d)*a,Math.cos(d)*a,Math.sin(s)*l,Math.cos(s)*l];if(G(e,t+i,n+c,r+u,o+y))return{x1:t+i,y1:n+c,x2:r+u,y2:o+y,offset:0}}},G=(e,t,n,o,s)=>!(t!==o&&n!==s||![r.Diagonal,r.Perpendicular].includes(e))||!(1!==Math.abs((s-n)/(o-t))||![r.Diagonal,r.RotatePerpendicular].includes(e)),H=(e,n)=>{if(!n.every((t=>e.hasEdge(t))))return;const s=n.map((n=>{var s,i,a;const[l,d]=e.extremities(n),c=e.getNodeAttributes(l),u=e.getNodeAttributes(d),{type:y,parallelIndex:h}=e.getEdgeAttributes(n),p=null!==(s=e.getEdgeAttribute(n,y))&&void 0!==s?s:o[y].defaultAttrs,f=t(y,c.x,c.y,u.x,u.y,p,h);if(f){const{x1:e,y1:t,x2:n,y2:s,offset:i}=f;return o[r.Simple].generatePath(e,n,t,s,{offset:i})}return null!==(i=null===(a=o[y])||void 0===a?void 0:a.generatePath(c.x,u.x,c.y,u.y,p))&&void 0!==i?i:`M ${c.x} ${c.y} L ${u.x} ${u.y}`}));let i=`${s[0]} `;for(let t=1;t<n.length;t+=1)i+=s[t].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return i},J=e=>[...e.nodeEntries()].map((e=>e.node.startsWith("stn")?{id:e.node,type:"station",station:e.attributes}:{id:e.node,type:"misc-node",miscNode:e.attributes})),ee=e=>{const n={},a=[],l={},d=[];for(const s of e.edgeEntries()){const[e,i,c,u]=[s.sourceAttributes.x,s.sourceAttributes.y,s.targetAttributes.x,s.targetAttributes.y],y=t(s.attributes.type,e,i,c,u,s.attributes[s.attributes.type],s.attributes.parallelIndex);if(y);else if(s.attributes.parallelIndex>=0){a.push(s);continue}if(""===s.attributes.reconcileId)if(y){const e=s.edge,t=s.attributes,{x1:i,y1:a,x2:l,y2:d,offset:c}=y;n[e]={id:e,attr:t,path:o[r.Simple].generatePath(i,l,a,d,{offset:c})}}else d.push(s);else{const e=s.attributes.reconcileId;e in l?l[e].push(s):l[e]=[s]}}const c=new Set;for(;a.length;){const t=a.pop();if(c.has(t.edge))continue;const{normal:r,parallel:o}=s(e,t);if(!o.length)continue;o.forEach((e=>c.add(e.edge))),d.push(...r);const l=i(o);for(const e of o){const t=e.edge;n[t]={id:e.edge,attr:e.attributes,path:l[t]}}}const{allReconciledLines:u,danglingLines:y}=((e,t)=>{const n=[],r=[];return Object.values(t).forEach((t=>{if(1===t.length)return void r.push(...t.map((e=>e.edge)));const o=e.getEdgeAttribute(t.at(0),"type");if(!t.every((t=>e.getEdgeAttribute(t,"type")===o)))return void r.push(...t.map((e=>e.edge)));const s=e.getEdgeAttribute(t.at(0),"style");if(!t.every((t=>e.getEdgeAttribute(t,"style")===s)))return void r.push(...t.map((e=>e.edge)));const i={},a=new Set,l=new Set,d=Object.fromEntries(t.map((t=>{var n,r;const[o,s]=e.extremities(t);return i[o]=(null!==(n=i[o])&&void 0!==n?n:0)+1,i[s]=(null!==(r=i[s])&&void 0!==r?r:0)+1,a.add(o),l.add(s),[o,[t.edge,s]]}))),c=Array.from(a).filter((e=>1===i[e])),u=Array.from(l).filter((e=>1===i[e]));if(1!==c.length||1!==u.length)return void r.push(...t.map((e=>e.edge)));const y=c[0],h=u[0];if(y===h)return void r.push(...t.map((e=>e.edge)));const p=[d[y][0]];let f=d[y][1];for(let e=1;e<t.length;e+=1){var x;const e=null===(x=d[f])||void 0===x?void 0:x.at(1);if(!e)return void r.push(...t.map((e=>e.edge)));p.push(d[f][0]),f=e}f===h&&p.length===t.length?n.push(p):r.push(...t.map((e=>e.edge)))})),{allReconciledLines:n,danglingLines:r}})(e,l);for(const t of u){const r=H(e,t);if(!r)continue;const o=t[0];n[o]={id:o,attr:e.getEdgeAttributes(o),path:r}}for(const t of y){const s=e.getEdgeAttributes(t),[i,a]=e.extremities(t),l=e.getNodeAttributes(i),d=e.getNodeAttributes(a);n[t]={id:t,attr:s,path:o[r.Simple].generatePath(l.x,d.x,l.y,d.y,o[r.Simple].defaultAttrs)}}for(const t of d){const e=t.edge,r=t.attributes.type,s=t.attributes,[i,a,l,d]=[t.sourceAttributes.x,t.sourceAttributes.y,t.targetAttributes.x,t.targetAttributes.y];n[e]=r in o?{id:e,attr:s,path:o[r].generatePath(i,l,a,d,s[r])}:{id:e,attr:s,path:`M ${i} ${a} L ${l} ${d}`}}return Object.values(n).map((e=>({id:e.id,type:"line",line:e})))},te=e=>{const{id:t,x:r,y:o,handlePointerDown:s,handlePointerMove:i,handlePointerUp:a}=e,l=L.useCallback((e=>s(t,e)),[t,s]),d=L.useCallback((e=>i(t,e)),[t,i]),c=L.useCallback((e=>a(t,e)),[t,a]);return n.jsx("g",{id:t,transform:`translate(${r-6.4} ${o-6.4})scale(0.025)`,onPointerDown:l,onPointerMove:d,onPointerUp:c,style:{cursor:"move"},children:n.jsx("path",{id:`stn_core_${t}`,fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},ne=e=>{const{id:t,path:r,handlePointerDown:o}=e,s=L.useCallback((e=>o(t,e)),[t,o]);return n.jsx("path",{id:t,d:r,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onPointerDown:s})},re=L.memo((e=>{const{elements:t,handlePointerDown:r,handlePointerMove:o,handlePointerUp:s,handleEdgePointerDown:i}=e,l=Object.fromEntries(Array.from({length:21},((e,t)=>[t-10,{pre:[],main:[],post:[]}])));for(const P of t)if("line"===P.type){var d,c,u,y;const e=P.line.attr.type,t=P.line.attr.style,r=P.line.attr[t],o=null===(d=a[t])||void 0===d?void 0:d.preComponent;o&&l[P.line.attr.zIndex].pre.push(n.jsx(o,{id:P.id,type:e,path:P.line.path,styleAttrs:r,newLine:!1,handlePointerDown:i},`${P.id}.pre`));const s=null!==(c=null===(u=a[t])||void 0===u?void 0:u.component)&&void 0!==c?c:ne;l[P.line.attr.zIndex].main.push(n.jsx(s,{id:P.id,type:e,path:P.line.path,styleAttrs:r,newLine:!1,handlePointerDown:i},P.id));const h=null===(y=a[t])||void 0===y?void 0:y.postComponent;h&&l[P.line.attr.zIndex].post.push(n.jsx(h,{id:P.id,type:e,path:P.line.path,styleAttrs:r,newLine:!1,handlePointerDown:i},`${P.id}.post`))}else if("station"===P.type){var h,p,f,x;const e=P.station,t=e.type,i=null===(h=B[t])||void 0===h?void 0:h.preComponent;i&&l[P.station.zIndex].pre.push(n.jsx(i,{id:P.id,x:e.x,y:e.y,attrs:e,handlePointerDown:r,handlePointerMove:o,handlePointerUp:s},`${P.id}.pre`));const a=null!==(p=null===(f=B[t])||void 0===f?void 0:f.component)&&void 0!==p?p:te;l[P.station.zIndex].main.push(n.jsx(a,{id:P.id,x:e.x,y:e.y,attrs:e,handlePointerDown:r,handlePointerMove:o,handlePointerUp:s},P.id));const d=null===(x=B[t])||void 0===x?void 0:x.postComponent;d&&l[P.station.zIndex].post.push(n.jsx(d,{id:P.id,x:e.x,y:e.y,attrs:e,handlePointerDown:r,handlePointerMove:o,handlePointerUp:s},`${P.id}.post`))}else if("misc-node"===P.type){var g,m,v,b;const e=P.miscNode,t=e.type,i=null===(g=Z[t])||void 0===g?void 0:g.preComponent;i&&l[P.miscNode.zIndex].pre.push(n.jsx(i,{id:P.id,x:e.x,y:e.y,attrs:e[t],handlePointerDown:r,handlePointerMove:o,handlePointerUp:s},`${P.id}.pre`));const a=null!==(m=null===(v=Z[t])||void 0===v?void 0:v.component)&&void 0!==m?m:te;l[P.miscNode.zIndex].main.push(n.jsx(a,{id:P.id,x:e.x,y:e.y,attrs:e[t],handlePointerDown:r,handlePointerMove:o,handlePointerUp:s},P.id));const d=null===(b=Z[t])||void 0===b?void 0:b.postComponent;d&&l[P.miscNode.zIndex].post.push(n.jsx(d,{id:P.id,x:e.x,y:e.y,attrs:e[t],handlePointerDown:r,handlePointerMove:o,handlePointerUp:s},`${P.id}.post`))}return Array.from({length:21},((e,t)=>(t-10).toString())).map((e=>[...l[e].pre,...l[e].main,...l[e].post])).flat()}),((e,t)=>e.elements===t.elements)),oe=()=>{const e=l(),t=L.useRef(window.graph),{telemetry:{project:r},preference:{autoParallel:s}}=d((e=>e.app)),{svgViewBoxZoom:i,svgViewBoxMin:a}=d((e=>e.param)),{selected:S,refresh:{nodes:C,edges:M},mode:_,active:$,keepLastPath:z,theme:K}=d((e=>e.runtime)),[W,T]=L.useState({x:0,y:0}),[U,O]=L.useState({x:0,y:0}),F=R(((t,n)=>{n.stopPropagation(),"select"===_&&e(c("free"));const r=n.currentTarget,{x:o,y:s}=u(n);r.setPointerCapture(n.pointerId),T({x:o,y:s}),e(y(t)),n.shiftKey?S.has(t)?e(p(t)):e(f(t)):S.has(t)||e(h(new Set([t])))})),Y=R(((n,r)=>{const{x:o,y:s}=u(r);"free"===_&&$===n?(S.forEach((e=>{t.current.hasNode(e)&&t.current.updateNodeAttributes(e,(e=>({...e,x:x(e.x-(W.x-o)*i/100,r.altKey?1:5),y:x(e.y-(W.y-s)*i/100,r.altKey?1:5)})))})),e(g()),e(m())):_.startsWith("line")&&O({x:(W.x-o)*i/100,y:(W.y-s)*i/100})})),X=R(((n,i)=>{if(_.startsWith("line")){z||e(c("free"));const n=[...Object.values(v),b.Virtual,b.Master],a=t.current.hasNode($)&&n.includes(t.current.getNodeAttribute($,"type"));["stn_core_","virtual_circle_"].forEach((e=>{var n;const l=null===(n=document.elementsFromPoint(i.clientX,i.clientY)[0].attributes)||void 0===n||null===(n=n.getNamedItem("id"))||void 0===n?void 0:n.value,d=null==l?void 0:l.startsWith(e);if(a&&d){const n=_.slice(5),i=`line_${P(10)}`,[a,d]=[$,l.slice(e.length)],c=s?w(t.current,n,a,d,"from"):-1;t.current.addDirectedEdgeWithKey(i,a,d,{visible:!0,zIndex:0,type:n,[n]:structuredClone(o[n].defaultAttrs),style:A.SingleColor,[A.SingleColor]:{color:K},reconcileId:"",parallelIndex:c}),r&&k.event(D.ADD_LINE,{type:n})}})),e(m()),e(E(t.current.export()))}else if("free"===_&&$){const{x:n,y:r}=u(i);W.x-n==0&&W.y-r==0||e(E(t.current.export()))}e(y(void 0))})),V=R(((n,o)=>{if(o.stopPropagation(),o.shiftKey||e(I()),o.shiftKey&&S.has(n)?e(p(n)):e(f(n)),_.startsWith("station")||_.startsWith("misc-node-virtual")||_.startsWith("misc-node-master")){const l=o.clientX-document.getElementById("canvas").getBoundingClientRect().left,d=o.clientY-document.getElementById("canvas").getBoundingClientRect().top,u=_.startsWith("station"),y=P(10),p=u?`stn_${y}`:`misc_node_${y}`,f=u?_.slice(8):_.slice(10),{x:v,y:b}=N(l,d,i,a),w=u?structuredClone(B[f].defaultAttrs):structuredClone(Z[f].defaultAttrs);"color"in w&&(w.color=K),t.current.addNode(p,{visible:!0,zIndex:0,x:x(v,5),y:x(b,5),type:f,[f]:w});const A=t.current.getEdgeAttributes(n),{zIndex:I,type:j,style:S}=A,C=A[j],M=A[S],[$,z]=t.current.extremities(n),W=s?0:-1;t.current.addDirectedEdgeWithKey(`line_${P(10)}`,$,p,{visible:!0,zIndex:I,type:j,[j]:structuredClone(C),style:S,[S]:structuredClone(M),reconcileId:"",parallelIndex:W}),t.current.addDirectedEdgeWithKey(`line_${P(10)}`,p,z,{visible:!0,zIndex:I,type:j,[j]:structuredClone(C),style:S,[S]:structuredClone(M),reconcileId:"",parallelIndex:W}),t.current.dropEdge(n),e(g()),e(m()),e(E(t.current.export())),r&&(k.event(D.ADD_STATION,{type:f}),k.event(D.ADD_LINE,{type:j})),e(c("free")),e(h(new Set([p])))}})),Q=L.useMemo((()=>[...ee(t.current),...J(t.current)]),[M,C]),q=j.component;return n.jsxs(n.Fragment,{children:[n.jsx(re,{elements:Q,handlePointerDown:F,handlePointerMove:Y,handlePointerUp:X,handleEdgePointerDown:V}),_.startsWith("line")&&$&&"background"!==$&&n.jsx(q,{id:"line_create_in_progress___no_use",type:_.slice(5),path:o[_.slice(5)].generatePath(t.current.getNodeAttribute($,"x"),t.current.getNodeAttribute($,"x")-U.x,t.current.getNodeAttribute($,"y"),t.current.getNodeAttribute($,"y")-U.y,o[_.slice(5)].defaultAttrs),styleAttrs:{color:K},newLine:!0,handlePointerDown:()=>{}})]})};e("default",(()=>{const e=l(),t=L.useRef(window.graph),r=()=>{e(g()),e(m()),e(E(t.current.export()))},{activeSubscriptions:o}=d((e=>e.account)),{telemetry:{project:s}}=d((e=>e.app)),{svgViewBoxZoom:i,svgViewBoxMin:a}=d((e=>e.param)),{mode:p,lastTool:f,active:v,selected:b,keepLastPath:w,theme:A,refresh:{nodes:j},masterNodesCount:G,parallelLinesCount:H}=d((e=>e.runtime)),J=F(),{height:ee,width:te}=S(J),ne=!o.RMP_CLOUD&&G+1>C,re=!o.RMP_CLOUD&&H+1>M;L.useEffect((()=>{const e=Y(t.current);Object.entries(e).filter((([e,t])=>t&&e in X)).forEach((([e])=>V(e)))}),[j]);const[se,ie]=L.useState({x:0,y:0}),[ae,le]=L.useState({x:0,y:0}),[de,ce]=L.useState({x:0,y:0}),[ue,ye]=L.useState({x:0,y:0}),he=R((n=>{const{x:o,y:l}=u(n);if(p.startsWith("station")){e(c("free"));const n=`stn_${P(10)}`,d=p.slice(8),u=structuredClone(B[d].defaultAttrs);"color"in u&&(u.color=A);const{x:y,y:f}=N(o,l,i,a);t.current.addNode(n,{visible:!0,zIndex:0,x:x(y,5),y:x(f,5),type:d,[d]:u}),r(),s&&k.event(D.ADD_STATION,{type:d}),e(h(new Set([n])))}else if(p.startsWith("misc-node")){e(c("free"));const n=`misc_node_${P(10)}`,d=p.slice(10),{x:u,y:y}=N(o,l,i,a);t.current.addNode(n,{visible:!0,zIndex:0,x:x(u,5),y:x(y,5),type:d,[d]:structuredClone(Z[d].defaultAttrs)}),r(),s&&k.event(D.ADD_STATION,{type:d}),e(h(new Set([n])))}else"free"===p||p.startsWith("line")?(p.startsWith("line")&&(e(c("free")),w&&e(_(!1))),ce({x:o,y:l}),ye(a),n.shiftKey||(e(y("background")),e(I()))):"select"===p&&(ie(N(o,l,i,a)),le(N(o,l,i,a)))})),pe=R((t=>{if("select"===p){if(0!=se.x&&0!=se.y){const{x:e,y:n}=u(t);le(N(e,n,i,a))}}else if("background"===v){const{x:n,y:r}=u(t);e($({x:ue.x+(de.x-n)*i/100,y:ue.y+(de.y-r)*i/100}))}})),fe=R((n=>{if("select"===p){const{x:r,y:o}=u(n),{x:s,y:l}=N(r,o,i,a),d=Q(t.current,se.x,se.y,s,l),y=q(t.current,new Set(d));e(h(new Set([...n.shiftKey?b:[],...d,...y]))),e(c("free")),ie({x:0,y:0}),le({x:0,y:0})}"background"!==v||n.shiftKey||e(y(void 0))})),xe=R((t=>{let n=i;t.deltaY>0&&i+10<400?n=i+10:t.deltaY<0&&i-10>0&&(n=i-10),e(z(n));const{x:r,y:o}=u(t),s=t.currentTarget.getBoundingClientRect(),[l,d]=[r/s.width,o/s.height];e($({x:a.x+r*i/100-te*n/100*l,y:a.y+o*i/100-ee*n/100*d}))})),ge=R((async n=>{if(K?"Backspace"===n.key:"Delete"===n.key)b.size>0&&(b.forEach((e=>{t.current.hasNode(e)?t.current.dropNode(e):t.current.hasEdge(e)&&t.current.dropEdge(e)})),e(I()),r());else if(n.key.startsWith("Arrow")){const t=100,r=n.key.endsWith("Left")?-1:n.key.endsWith("Right")?1:0,o=n.key.endsWith("Up")?-1:n.key.endsWith("Down")?1:0;e($(N(t*r,t*o,i,a)))}else if("i"===n.key||"j"===n.key||"k"===n.key||"l"===n.key){const e=10,o=("j"===n.key?-1:"l"===n.key?1:0)*e,s=("i"===n.key?-1:"k"===n.key?1:0)*e;b.size>0&&b.forEach((e=>{t.current.hasNode(e)&&(t.current.updateNodeAttribute(e,"x",(e=>(null!=e?e:0)+o)),t.current.updateNodeAttribute(e,"y",(e=>(null!=e?e:0)+s)),r())}))}else if("f"===n.key&&f)e(c(f));else if("z"===n.key&&(K?n.metaKey&&!n.shiftKey:n.ctrlKey))K&&n.preventDefault(),e(W()),e(g()),e(m());else if("s"===n.key)e(c("select"));else if("c"!==n.key&&"x"!==n.key||!(K?n.metaKey&&!n.shiftKey:n.ctrlKey))if("v"===n.key&&(K?n.metaKey&&!n.shiftKey:n.ctrlKey)){const n=await navigator.clipboard.readText(),{x:o,y:s}=N(te/2,ee/2,i,a),{nodes:l,edges:d}=O(n,t.current,ne,re,x(o,5),x(s,5));r();const c=structuredClone(l);d.forEach((e=>c.add(e))),e(h(c))}else(K&&"z"===n.key&&n.metaKey&&n.shiftKey||!K&&"y"===n.key&&n.ctrlKey)&&(e(T()),e(g()),e(m()));else{const o=U(t.current,b);navigator.clipboard.writeText(o),"x"===n.key&&(e(I()),b.forEach((e=>{t.current.hasNode(e)?t.current.dropNode(e):t.current.hasEdge(e)&&t.current.dropEdge(e)})),r())}})),[me,ve]=L.useState(0),be=R((t=>{if(2===t.touches.length){e(y(void 0));const[n,r]=[t.touches[0].clientX-t.touches[1].clientX,t.touches[0].clientY-t.touches[1].clientY];ve(n*n+r*r)}})),Pe=R((t=>{if(0!==me&&2===t.touches.length){const[n,r]=[t.touches[0].clientX-t.touches[1].clientX,t.touches[0].clientY-t.touches[1].clientY],o=n*n+r*r;let s=i;o-me<0&&i+10<=390?s=i+10:o-me>0&&i-10>=10&&(s=i-10),e(z(s)),ve(o);const l=t.currentTarget.getBoundingClientRect(),[d,c]=[(t.touches[0].clientX+t.touches[1].clientX)/2-l.left,(t.touches[0].clientY+t.touches[1].clientY)/2-l.top],[u,y]=[d/l.width,c/l.height];e($({x:a.x+d*i/100-te*s/100*u,y:a.y+c*i/100-ee*s/100*y}))}})),we=R((e=>{0!==me&&ve(0)})),[Ae,ke]=L.useState({sx:0,sy:0,ex:0,ey:0});return L.useEffect((()=>{ke({sx:se.x<=ae.x?se.x:ae.x,ex:se.x>ae.x?se.x:ae.x,sy:se.y<=ae.y?se.y:ae.y,ey:se.y>ae.y?se.y:ae.y})}),[ae.x,ae.y]),n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none",touchAction:"none"},height:ee,width:te,viewBox:`${a.x} ${a.y} ${te*i/100} ${ee*i/100}`,onPointerDown:he,onPointerMove:pe,onPointerUp:fe,onTouchStart:be,onTouchMove:Pe,onTouchEnd:we,onWheel:xe,tabIndex:0,onKeyDown:ge,children:[n.jsx(oe,{}),"select"===p&&0!=se.x&&0!=se.y&&n.jsx("rect",{x:Ae.sx,y:Ae.sy,width:Ae.ex-Ae.sx,height:Ae.ey-Ae.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"}),n.jsx("defs",{children:n.jsxs("pattern",{id:"opaque",width:"5",height:"5",patternUnits:"userSpaceOnUse",children:[n.jsx("rect",{x:"0",y:"0",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"}),n.jsx("rect",{x:"2.5",y:"2.5",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"})]})})]})}))}}}));
