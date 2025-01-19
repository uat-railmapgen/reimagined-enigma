import{j as e,B as W,aw as O,ax as ie,aK as F,O as N,aM as re,U as le,D as oe,_ as K,$ as Z,a0 as Q,a1 as Y,a3 as ee,a5 as te,a4 as U}from"./chakra-xNcrfRXW.js";import{c as P,d as A,aD as ce,T as de,ay as ue,aE as pe,t as E,v as w,l as I,at as z,k as he,o as ge,P as B,aF as H,q as v,$ as me,a0 as fe,i as V,m as ne,y as D,az as G,aC as xe,aG as ye,aH as be,aI as je,aJ as Se,au as we,n as X}from"./index-T5lxQXkJ.js";import{u as L,b as p}from"./react-D-_si4LB.js";import{u as q,e as Ae}from"./clipboard-B8PSvdIQ.js";import{s as $}from"./master-manager-DWJdXOvp.js";import{C as Ce,c as Ne,a as Ee,b as Te}from"./change-type-modal-BNqycX6r.js";import{LearnHowToAdd as ve}from"./tools-B1UtMu5j.js";import{m as Pe}from"./misc-nodes-BGg_wjuV.js";function Le(){const{t}=L(),r=P(),{selected:o}=A(s=>s.runtime),h=p.useRef(window.graph),c=s=>{if(h.current.hasNode(s)){const l=h.current.getNodeAttributes(s),g=l.type;return s.startsWith("stn")?l[g].names.join("/"):g}else if(h.current.hasEdge(s)){const[l,g]=h.current.extremities(s),d=h.current.getSourceAttributes(s),m=h.current.getTargetAttributes(s),x=d.type,u=m.type;return(l.startsWith("stn")?d[x].names[0]:x)+" - "+(g.startsWith("stn")?m[u].names[0]:u)}},[i,n]=p.useState([]);p.useEffect(()=>{n(["station","misc-node","line"])},[o]);const[a,y]=p.useState(!1);return e.jsxs(W,{children:[e.jsxs(O,{as:"h5",size:"sm",children:[t("panel.details.multipleSelection.selected")," ",o.size]}),e.jsxs(ie,{m:"var(--chakra-space-1)",children:[e.jsxs(F,{w:"100%",children:[e.jsx(O,{as:"h5",size:"xs",w:"100%",children:t("panel.details.multipleSelection.show")}),e.jsx(ce,{selections:[{label:t("panel.details.multipleSelection.station"),value:"station"},{label:t("panel.details.multipleSelection.miscNode"),value:"misc-node"},{label:t("panel.details.multipleSelection.edge"),value:"line"}],defaultValue:i,multiSelect:!0,onChange:s=>n(s)})]}),i.length!==0&&e.jsxs(e.Fragment,{children:[e.jsxs(N,{width:"100%",size:"sm",onClick:()=>y(!0),children:[t("panel.details.multipleSelection.change"),e.jsx(re,{label:t("header.settings.pro"),children:e.jsx(le,{ml:"1",color:"gray.50",background:"radial-gradient(circle, #3f5efb, #fc466b)",children:"PRO"})})]}),e.jsx(oe,{})]}),[...o].filter(s=>i.includes("station")||!s.startsWith("stn")).filter(s=>i.includes("misc-node")||!s.startsWith("misc")).filter(s=>i.includes("line")||!s.startsWith("line")).map(s=>{var l;return e.jsxs(F,{width:"100%",children:[e.jsx(N,{width:"100%",size:"sm",variant:"solid",onClick:()=>r(de(new Set([s]))),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"ruby",children:(l=c(s))==null?void 0:l.replaceAll("\n","⏎")}),e.jsx(N,{size:"sm",onClick:()=>r(ue(s)),children:e.jsx(pe,{})})]},s)})]}),e.jsx(Ce,{isOpen:a,onClose:()=>y(!1),isSelect:!0,filter:i})]})}function Re(){const{t}=L(),r=P(),o=p.useCallback(()=>{r(E()),r(w(a.current.export()))},[r,E,w]),{preference:{autoParallel:h}}=A(j=>j.app),{selected:c,theme:i}=A(j=>j.runtime),[n]=c,a=p.useRef(window.graph),[y,s]=p.useState(!1),l=p.useRef(null),g=Object.fromEntries(Object.entries(I).map(([j,_])=>[j,t(_.metadata.displayName).toString()])),[d,m]=p.useState(a.current.getEdgeAttribute(n,"type")),[x,u]=p.useState(void 0),f=Object.fromEntries(Object.entries(z).map(([j,_])=>[j,t(_.metadata.displayName).toString()])),[b,S]=p.useState(a.current.getEdgeAttribute(n,"style")),[C,T]=p.useState(void 0);p.useEffect(()=>{m(a.current.getEdgeAttribute(n,"type")),S(a.current.getEdgeAttribute(n,"style"))},[n]);const R=Object.values(he).filter(j=>!z[b].metadata.supportLinePathType.includes(j)),k=Object.values(ge).filter(j=>!z[j].metadata.supportLinePathType.includes(d)),se=()=>{x&&(Ne(a.current,n,x,h),m(a.current.getEdgeAttribute(n,"type")),o())},ae=()=>{C&&(Ee(a.current,n,C,i),S(a.current.getEdgeAttribute(n,"style")),o())},M=j=>{j&&(x?(se(),u(void 0)):C&&(ae(),T(void 0))),s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{label:t("panel.details.info.linePathType"),minW:"276",children:e.jsx(H,{options:g,disabledOptions:R,defaultValue:d,value:d,onChange:({target:{value:j}})=>{u(j),s(!0)}})}),e.jsx(B,{label:t("panel.details.info.lineStyleType"),minW:"276",children:e.jsx(H,{options:f,disabledOptions:k,defaultValue:b,value:b,onChange:({target:{value:j}})=>{T(j),s(!0)}})}),e.jsx(ve,{type:"line",expand:!0}),e.jsx(K,{isOpen:y,leastDestructiveRef:l,onClose:()=>M(!1),children:e.jsx(Z,{children:e.jsxs(Q,{children:[e.jsx(Y,{children:t("warning")}),e.jsx(ee,{children:t("panel.details.changeLineTypeContent")}),e.jsxs(te,{children:[e.jsx(N,{ref:l,onClick:()=>M(!1),children:t("cancel")}),e.jsx(N,{ml:"2",colorScheme:"red",onClick:()=>M(!0),children:t("panel.details.changeType")})]})]})})})]})}function ke(){const{t}=L(),r=P(),o=p.useCallback(()=>{r(v()),r(w(i.current.export()))},[r,v,w]),{selected:h}=A(u=>u.runtime),[c]=h,i=p.useRef(window.graph),[n,a]=p.useState(!1),y=p.useRef(null),[s,l]=p.useState(void 0),g=i.current.getNodeAttribute(c,"type"),d=Object.fromEntries(Object.entries($).map(([u,f])=>[u,t(f.metadata.displayName).toString()])),m=()=>{s&&(Te(i.current,c,s),o())},x=u=>{u&&m(),l(void 0),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{label:t("panel.details.info.stationType"),minW:"276",children:e.jsx(H,{options:d,disabledOptions:[g],value:g,onChange:({target:{value:u}})=>{l(u),a(!0)}})}),e.jsx(K,{isOpen:n,leastDestructiveRef:y,onClose:()=>x(!1),children:e.jsx(Z,{children:e.jsxs(Q,{children:[e.jsx(Y,{children:t("warning")}),e.jsx(ee,{children:t("panel.details.changeStationTypeContent")}),e.jsxs(te,{children:[e.jsx(N,{ref:y,onClick:()=>x(!1),children:t("cancel")}),e.jsx(N,{ml:"2",colorScheme:"red",onClick:()=>x(!0),children:t("panel.details.changeType")})]})]})})})]})}function ze(){const{t}=L(),r=P(),o=p.useCallback(()=>{r(v()),r(E()),r(w(a.current.export()))},[r,v,E,w]),{activeSubscriptions:h}=A(d=>d.account),{selected:c,parallelLinesCount:i}=A(d=>d.runtime),[n]=c,a=p.useRef(window.graph),y=d=>{const m=Math.min(Math.max(d,-10),10);a.current.hasNode(n)&&a.current.setNodeAttribute(n,"zIndex",m),a.current.hasEdge(n)&&a.current.setEdgeAttribute(n,"zIndex",m),o()},s=(d,m)=>{let x=-1;if(d){const u=a.current.getEdgeAttributes(n),[f,b]=a.current.extremities(n);x=ne(a.current,u.type,f,b,m)}l(x)},l=d=>{a.current.setEdgeAttribute(n,"parallelIndex",d),r(E()),r(w(a.current.export()))},g=[];if(c.size!==0)if(c.size===1){if(g.push({type:"input",label:t("panel.details.info.id"),value:n,minW:276}),g.push({type:"select",label:t("panel.details.info.zIndex"),value:n?a.current.hasNode(n)?a.current.getNodeAttribute(n,"zIndex"):a.current.hasEdge(n)?a.current.getEdgeAttribute(n,"zIndex"):0:0,options:Object.fromEntries(Array.from({length:21},(d,m)=>[m-10,(m-10).toString()])),onChange:d=>y(Number(d))}),a.current.hasEdge(n)){const d=a.current.getEdgeAttributes(n),m=d.parallelIndex,x=h.RMP_CLOUD?me:fe,u=i>x&&m<0,f=i>x&&m>=0;g.push({type:"switch",label:t("panel.details.info.parallel"),isDisabled:u,isChecked:m>=0,onChange:b=>s(b,d[d.type].startFrom),oneLine:!0,minW:276}),m>=0&&g.push({type:"input",label:t("panel.details.info.parallelIndex"),variant:"number",isDisabled:f,value:d.parallelIndex.toString(),onChange:b=>l(Number(b)),minW:276})}}else c.size>1&&g.push({type:"input",label:t("panel.details.info.type"),value:t("panel.details.multipleSelection.title"),minW:276});return e.jsxs(W,{p:1,children:[e.jsx(O,{as:"h5",size:"sm",children:t("panel.details.info.title")}),e.jsx(V,{fields:g,minW:130}),c.size===1&&n.startsWith("stn")&&a.current.hasNode(n)&&a.current.getNodeAttribute(n,"type")in $&&e.jsx(ke,{}),c.size===1&&n.startsWith("line")&&a.current.hasEdge(n)&&a.current.getEdgeAttribute(n,"type")in I&&a.current.getEdgeAttribute(n,"style")in z&&e.jsx(Re,{}),c.size>1&&e.jsx(Le,{})]})}function Oe(){const{t}=L(),r=P(),{selected:o}=A(f=>f.runtime),[h]=o,c=p.useRef(window.graph),[i,n]=p.useState("undefined"),[a,y]=p.useState("undefined"),[s,l]=p.useState("undefined"),[g,d]=p.useState("undefined");p.useEffect(()=>{var f,b,S,C;if(h!=null&&h.startsWith("line")){const[T,R]=c.current.extremities(h);if(n(T),y(R),T.startsWith("stn")){const k=c.current.getNodeAttribute(T,"type");l((b=(f=c.current.getNodeAttribute(T,k))==null?void 0:f.names.at(0))!=null?b:"undefined")}if(R.startsWith("stn")){const k=c.current.getNodeAttribute(R,"type");d((C=(S=c.current.getNodeAttribute(R,k))==null?void 0:S.names.at(0))!=null?C:"undefined")}}},[o]);const m=q(()=>{r(D()),r(G(i))}),x=q(()=>{r(D()),r(G(a))}),u=[{type:"custom",label:t("panel.details.lineExtremities.source"),component:e.jsx(N,{ml:"auto",size:"sm",variant:"link",onClick:m,children:i}),oneLine:!0,minW:"full"},{type:"input",label:t("panel.details.lineExtremities.sourceName"),value:s,minW:"full"},{type:"custom",label:t("panel.details.lineExtremities.target"),component:e.jsx(N,{ml:"auto",size:"sm",variant:"link",onClick:x,children:a}),oneLine:!0,minW:"full"},{type:"input",label:t("panel.details.lineExtremities.targetName"),value:g,minW:"full"}];return e.jsxs(W,{p:1,children:[e.jsx(O,{as:"h5",size:"sm",children:t("panel.details.lineExtremities.title")}),e.jsx(V,{fields:u,minW:130})]})}function We(){const{t}=L(),r=P(),o=p.useCallback(()=>{r(v()),r(E()),r(w(n.current.export()))},[r,v,E,w]),{selected:h,refresh:{nodes:c}}=A(l=>l.runtime),[i]=h,n=p.useRef(window.graph),[a,y]=p.useState({x:0,y:0});p.useEffect(()=>{if(i!=null&&i.startsWith("stn")||i!=null&&i.startsWith("misc_node_")){const l=n.current.getNodeAttribute(i,"x"),g=n.current.getNodeAttribute(i,"y");y({x:l,y:g})}},[c,h]);const s=[{type:"input",label:t("panel.details.nodePosition.pos.x"),value:a.x.toString(),validator:l=>!Number.isNaN(l),onChange:l=>{n.current.mergeNodeAttributes(i,{x:Number(l)}),o()}},{type:"input",label:t("panel.details.nodePosition.pos.y"),value:a.y.toString(),validator:l=>!Number.isNaN(l),onChange:l=>{n.current.mergeNodeAttributes(i,{y:Number(l)}),o()}}];return e.jsxs(W,{p:1,children:[e.jsx(O,{as:"h5",size:"sm",children:t("panel.details.nodePosition.title")}),e.jsx(V,{fields:s,minW:130})]})}const J={...$,...Pe},Ie=()=>{var y;const t=P(),{selected:r}=A(s=>s.runtime),{t:o}=L(),[h]=r,c=window.graph.getNodeAttribute(h,"type"),i=c in J&&J[c].attrsComponent,n=(y=window.graph.getNodeAttribute(h,c))!=null?y:{},a=(s,l)=>{const g=window.graph.getNodeAttribute(s,"type");window.graph.mergeNodeAttributes(s,{[g]:l}),t(v()),t(w(window.graph.export()))};return i?e.jsx(i,{id:h,attrs:n,handleAttrsUpdate:a}):e.jsx(U,{fontSize:"xs",m:"var(--chakra-space-1)",children:o("panel.details.unknown.error",{category:o("panel.details.unknown.node")})})},De=()=>{var f,b;const t=P(),{preference:{autoParallel:r}}=A(S=>S.app),{selected:o}=A(S=>S.runtime),{t:h}=L(),[c]=o,{type:i,style:n,parallelIndex:a,reconcileId:y}=window.graph.getEdgeAttributes(c),s=(f=window.graph.getEdgeAttribute(c,i))!=null?f:{},l=i in I&&I[i].attrsComponent,g=(b=window.graph.getEdgeAttribute(c,n))!=null?b:{},d=n in z&&z[n].attrsComponent,m=(S,C)=>{let T=-1;if(r){const[R,k]=window.graph.extremities(S);T=ne(window.graph,i,R,k,C)}window.graph.setEdgeAttribute(S,"parallelIndex",T)},x=(S,C)=>{window.graph.mergeEdgeAttributes(S,{[i]:C}),t(E()),t(w(window.graph.export()))},u=(S,C)=>{window.graph.mergeEdgeAttributes(S,{[n]:C}),t(E()),t(w(window.graph.export()))};return e.jsxs(e.Fragment,{children:[l?e.jsx(l,{id:c,attrs:s,recalculateParallelIndex:m,handleAttrsUpdate:x,parallelIndex:a}):e.jsx(U,{fontSize:"xs",m:"var(--chakra-space-1)",children:h("panel.details.unknown.error",{category:h("panel.details.unknown.linePath")})}),d?e.jsx(d,{id:c,attrs:g,handleAttrsUpdate:u,reconcileId:y}):e.jsx(U,{fontSize:"xs",m:"var(--chakra-space-1)",children:h("panel.details.unknown.error",{category:h("panel.details.unknown.lineStyle")})})]})},Ge=()=>{const{t}=L(),r=P(),o=p.useRef(window.graph),h=p.useCallback(()=>{r(v()),r(E()),r(w(o.current.export()))},[r,v,E,w]),{activeSubscriptions:c}=A(u=>u.account),{selected:i,mode:n,active:a,masterNodesCount:y}=A(u=>u.runtime),[s]=i,l=!c.RMP_CLOUD&&y+1>xe,g=()=>r(D()),d=u=>{const f=structuredClone(o.current.getNodeAttributes(u));f.x+=50,f.y+=50;const b=u.startsWith("stn")?"stn_".concat(X(10)):"misc_node_".concat(X(10));o.current.addNode(b,f),r(v()),r(w(o.current.export()))},m=u=>{const f=Ae(o.current,u);navigator.clipboard.writeText(f)},x=u=>{r(D()),u.forEach(f=>{o.current.hasNode(f)?o.current.dropNode(f):o.current.hasEdge(f)&&o.current.dropEdge(f)}),h()};return e.jsxs(ye,{isOpen:i.size>0&&!n.startsWith("line")&&!a,width:300,header:"Dummy header",alwaysOverlay:!0,children:[e.jsx(be,{onClose:g,children:t("panel.details.header")}),e.jsxs(je,{children:[e.jsx(ze,{}),i.size===1&&o.current.hasNode(s)&&e.jsx(We,{}),i.size===1&&o.current.hasEdge(s)&&e.jsx(Oe,{}),i.size===1&&e.jsxs(W,{p:1,children:[e.jsx(O,{as:"h5",size:"sm",children:t("panel.details.specificAttrsTitle")}),window.graph.hasNode(s)&&e.jsx(Ie,{}),window.graph.hasEdge(s)&&e.jsx(De,{})]})]}),e.jsx(Se,{children:e.jsxs(F,{children:[i.size===1&&o.current.hasNode(s)&&e.jsx(N,{size:"sm",variant:"outline",onClick:()=>d(s),isDisabled:o.current.getNodeAttributes(s).type===we.Master&&l,children:t("panel.details.footer.duplicate")}),e.jsx(N,{size:"sm",variant:"outline",onClick:()=>m(i),children:t("panel.details.footer.copy")}),e.jsx(N,{size:"sm",variant:"outline",onClick:()=>x(i),children:t("panel.details.footer.remove")})]})})]})};export{Ge as default};
