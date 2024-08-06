import{j as e,B as P,aw as R,ax as se,aK as _,O as b,aM as ae,U as ie,D as re,_ as J,$ as Q,a0 as X,a1 as Y,a3 as ee,a5 as te,a4 as F}from"./chakra-6oTi0Wmk.js";import{g as C,a as A,ar as oe,a6 as le,ao as ce,as as de,v as w,w as j,o as I,ak as k,m as ue,p as pe,a4 as U,at as H,t as N,k as V,y as M,ap as G,au as he,av as ge,aw as me,ax as fe,n as K}from"./index-CJ24xDgf.js";import{u as v,b as c}from"./react-BuIY-1St.js";import{u as Z,e as xe}from"./clipboard-B2j6TVly.js";import{s as $}from"./stations-G1QKgf7C.js";import{C as ye,c as je,a as be,b as Se}from"./change-type-modal-BP7TyuKb.js";import{LearnHowToAdd as we}from"./tools-D6Bk2jBK.js";import{m as Ne}from"./misc-nodes-Bj6kob78.js";import"./graph-BIwTIDOh.js";import"./index-B_gHJ4Lp.js";function Ce(){const{t}=v(),r=C(),{selected:o}=A(a=>a.runtime),i=c.useRef(window.graph),s=a=>{if(i.current.hasNode(a)){const l=i.current.getNodeAttributes(a),g=l.type;return a.startsWith("stn")?l[g].names.join("/"):g}else if(i.current.hasEdge(a)){const[l,g]=i.current.extremities(a),m=i.current.getSourceAttributes(a),h=i.current.getTargetAttributes(a),f=m.type,x=h.type;return(l.startsWith("stn")?m[f].names[0]:f)+" - "+(g.startsWith("stn")?h[x].names[0]:x)}},[n,d]=c.useState([]);c.useEffect(()=>{d(["station","misc-node","line"])},[o]);const[u,p]=c.useState(!1);return e.jsxs(P,{children:[e.jsxs(R,{as:"h5",size:"sm",children:[t("panel.details.multipleSelection.selected")," ",o.size]}),e.jsxs(se,{m:"var(--chakra-space-1)",children:[e.jsxs(_,{w:"100%",children:[e.jsx(R,{as:"h5",size:"xs",w:"100%",children:t("panel.details.multipleSelection.show")}),e.jsx(oe,{selections:[{label:t("panel.details.multipleSelection.station"),value:"station"},{label:t("panel.details.multipleSelection.miscNode"),value:"misc-node"},{label:t("panel.details.multipleSelection.edge"),value:"line"}],defaultValue:n,multiSelect:!0,onChange:a=>d(a)})]}),n.length!==0&&e.jsxs(e.Fragment,{children:[e.jsxs(b,{width:"100%",size:"sm",onClick:()=>p(!0),children:[t("panel.details.multipleSelection.change"),e.jsx(ae,{label:t("header.settings.pro"),children:e.jsx(ie,{ml:"1",color:"gray.50",background:"radial-gradient(circle, #3f5efb, #fc466b)",children:"PRO"})})]}),e.jsx(re,{})]}),[...o].filter(a=>n.includes("station")||!a.startsWith("stn")).filter(a=>n.includes("misc-node")||!a.startsWith("misc")).filter(a=>n.includes("line")||!a.startsWith("line")).map(a=>{var l;return e.jsxs(_,{width:"100%",children:[e.jsx(b,{width:"100%",size:"sm",variant:"solid",onClick:()=>r(le(new Set([a]))),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"ruby",children:(l=s(a))==null?void 0:l.replaceAll("\\","⏎")}),e.jsx(b,{size:"sm",onClick:()=>r(ce(a)),children:e.jsx(de,{})})]},a)})]}),e.jsx(ye,{isOpen:u,onClose:()=>p(!1),isSelect:!0,filter:n})]})}function Ae(){const{t}=v(),r=C(),o=c.useCallback(()=>{r(w()),r(j(d.current.export()))},[r,w,j]),{selected:i,theme:s}=A(y=>y.runtime),[n]=i,d=c.useRef(window.graph),[u,p]=c.useState(!1),a=c.useRef(null),l=Object.fromEntries(Object.entries(I).map(([y,B])=>[y,t(B.metadata.displayName).toString()])),[g,m]=c.useState(d.current.getEdgeAttribute(n,"type")),[h,f]=c.useState(void 0),x=Object.fromEntries(Object.entries(k).map(([y,B])=>[y,t(B.metadata.displayName).toString()])),[S,L]=c.useState(d.current.getEdgeAttribute(n,"style")),[T,O]=c.useState(void 0),E=Object.values(ue).filter(y=>!k[S].metadata.supportLinePathType.includes(y)),z=Object.values(pe).filter(y=>!k[y].metadata.supportLinePathType.includes(g)),W=()=>{h&&(je(d.current,n,h),m(d.current.getEdgeAttribute(n,"type")),o())},ne=()=>{T&&(be(d.current,n,T,s),L(d.current.getEdgeAttribute(n,"style")),o())},D=y=>{y&&(h?(W(),f(void 0)):T&&(ne(),O(void 0))),p(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{label:t("panel.details.info.linePathType"),minW:"276",children:e.jsx(H,{options:l,disabledOptions:E,defaultValue:g,value:g,onChange:({target:{value:y}})=>{f(y),p(!0)}})}),e.jsx(U,{label:t("panel.details.info.lineStyleType"),minW:"276",children:e.jsx(H,{options:x,disabledOptions:z,defaultValue:S,value:S,onChange:({target:{value:y}})=>{O(y),p(!0)}})}),e.jsx(we,{type:"line",expand:!0}),e.jsx(J,{isOpen:u,leastDestructiveRef:a,onClose:()=>D(!1),children:e.jsx(Q,{children:e.jsxs(X,{children:[e.jsx(Y,{children:t("warning")}),e.jsx(ee,{children:t("panel.details.changeLineTypeContent")}),e.jsxs(te,{children:[e.jsx(b,{ref:a,onClick:()=>D(!1),children:t("cancel")}),e.jsx(b,{ml:"2",colorScheme:"red",onClick:()=>D(!0),children:t("panel.details.changeType")})]})]})})})]})}function ve(){const{t}=v(),r=C(),o=c.useCallback(()=>{r(N()),r(j(n.current.export()))},[r,N,j]),{selected:i}=A(x=>x.runtime),[s]=i,n=c.useRef(window.graph),[d,u]=c.useState(!1),p=c.useRef(null),[a,l]=c.useState(void 0),g=n.current.getNodeAttribute(s,"type"),m=Object.fromEntries(Object.entries($).map(([x,S])=>[x,t(S.metadata.displayName).toString()])),h=()=>{a&&(Se(n.current,s,a),o())},f=x=>{x&&h(),l(void 0),u(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{label:t("panel.details.info.stationType"),minW:"276",children:e.jsx(H,{options:m,disabledOptions:[g],value:g,onChange:({target:{value:x}})=>{l(x),u(!0)}})}),e.jsx(J,{isOpen:d,leastDestructiveRef:p,onClose:()=>f(!1),children:e.jsx(Q,{children:e.jsxs(X,{children:[e.jsx(Y,{children:t("warning")}),e.jsx(ee,{children:t("panel.details.changeStationTypeContent")}),e.jsxs(te,{children:[e.jsx(b,{ref:p,onClick:()=>f(!1),children:t("cancel")}),e.jsx(b,{ml:"2",colorScheme:"red",onClick:()=>f(!0),children:t("panel.details.changeType")})]})]})})})]})}function Te(){const{t}=v(),r=C(),o=c.useCallback(()=>{r(N()),r(w()),r(j(n.current.export()))},[r,w,j]),{selected:i}=A(p=>p.runtime),[s]=i,n=c.useRef(window.graph),d=p=>{const a=Math.min(Math.max(p,-5),5);n.current.hasNode(s)&&n.current.setNodeAttribute(s,"zIndex",a),n.current.hasEdge(s)&&n.current.setEdgeAttribute(s,"zIndex",a),o()},u=[];return i.size===0||(i.size===1?(u.push({type:"input",label:t("panel.details.info.id"),value:s,minW:276}),u.push({type:"select",label:t("panel.details.info.zIndex"),value:s?n.current.hasNode(s)?n.current.getNodeAttribute(s,"zIndex"):n.current.hasEdge(s)?n.current.getEdgeAttribute(s,"zIndex"):0:0,options:Object.fromEntries(Array.from({length:11},(p,a)=>[a-5,(a-5).toString()])),onChange:p=>d(Number(p))})):i.size>1&&u.push({type:"input",label:t("panel.details.info.type"),value:t("panel.details.multipleSelection.title"),minW:276})),e.jsxs(P,{p:1,children:[e.jsx(R,{as:"h5",size:"sm",children:t("panel.details.info.title")}),e.jsx(V,{fields:u,minW:130}),i.size===1&&s.startsWith("stn")&&n.current.hasNode(s)&&n.current.getNodeAttribute(s,"type")in $&&e.jsx(ve,{}),i.size===1&&s.startsWith("line")&&n.current.hasEdge(s)&&n.current.getEdgeAttribute(s,"type")in I&&n.current.getEdgeAttribute(s,"style")in k&&e.jsx(Ae,{}),i.size>1&&e.jsx(Ce,{})]})}function Ee(){const{t}=v(),r=C(),{selected:o}=A(S=>S.runtime),[i]=o,s=c.useRef(window.graph),[n,d]=c.useState("undefined"),[u,p]=c.useState("undefined"),[a,l]=c.useState("undefined"),[g,m]=c.useState("undefined");c.useEffect(()=>{var S,L,T,O;if(i!=null&&i.startsWith("line")){const[E,z]=s.current.extremities(i);if(d(E),p(z),E.startsWith("stn")){const W=s.current.getNodeAttribute(E,"type");l((L=(S=s.current.getNodeAttribute(E,W))==null?void 0:S.names.at(0))!=null?L:"undefined")}if(z.startsWith("stn")){const W=s.current.getNodeAttribute(z,"type");m((O=(T=s.current.getNodeAttribute(z,W))==null?void 0:T.names.at(0))!=null?O:"undefined")}}},[o]);const h=Z(()=>{r(M()),r(G(n))}),f=Z(()=>{r(M()),r(G(u))}),x=[{type:"custom",label:t("panel.details.lineExtremities.source"),component:e.jsx(b,{flex:1,size:"sm",variant:"link",onClick:h,children:n}),minW:"full"},{type:"input",label:t("panel.details.lineExtremities.sourceName"),value:a,minW:"full"},{type:"custom",label:t("panel.details.lineExtremities.target"),component:e.jsx(b,{flex:1,size:"sm",variant:"link",onClick:f,children:u}),minW:"full"},{type:"input",label:t("panel.details.lineExtremities.targetName"),value:g,minW:"full"}];return e.jsxs(P,{p:1,children:[e.jsx(R,{as:"h5",size:"sm",children:t("panel.details.lineExtremities.title")}),e.jsx(V,{fields:x,minW:130})]})}function ze(){const{t}=v(),r=C(),o=c.useCallback(()=>{r(N()),r(w()),r(j(d.current.export()))},[r,N,w,j]),{selected:i,refresh:{nodes:s}}=A(l=>l.runtime),[n]=i,d=c.useRef(window.graph),[u,p]=c.useState({x:0,y:0});c.useEffect(()=>{if(n!=null&&n.startsWith("stn")||n!=null&&n.startsWith("misc_node_")){const l=d.current.getNodeAttribute(n,"x"),g=d.current.getNodeAttribute(n,"y");p({x:l,y:g})}},[s,i]);const a=[{type:"input",label:t("panel.details.nodePosition.pos.x"),value:u.x.toString(),validator:l=>!Number.isNaN(l),onChange:l=>{d.current.mergeNodeAttributes(n,{x:Number(l)}),o()}},{type:"input",label:t("panel.details.nodePosition.pos.y"),value:u.y.toString(),validator:l=>!Number.isNaN(l),onChange:l=>{d.current.mergeNodeAttributes(n,{y:Number(l)}),o()}}];return e.jsxs(P,{p:1,children:[e.jsx(R,{as:"h5",size:"sm",children:t("panel.details.nodePosition.title")}),e.jsx(V,{fields:a,minW:130})]})}const q={...$,...Ne},ke=()=>{var p;const t=C(),{selected:r}=A(a=>a.runtime),{t:o}=v(),[i]=r,s=window.graph.getNodeAttribute(i,"type"),n=s in q&&q[s].attrsComponent,d=(p=window.graph.getNodeAttribute(i,s))!=null?p:{},u=(a,l)=>{const g=window.graph.getNodeAttribute(a,"type");window.graph.mergeNodeAttributes(a,{[g]:l}),t(N()),t(j(window.graph.export()))};return n?e.jsx(n,{id:i,attrs:d,handleAttrsUpdate:u}):e.jsx(F,{fontSize:"xs",m:"var(--chakra-space-1)",children:o("panel.details.unknown.error",{category:o("panel.details.unknown.node")})})},Re=()=>{var m,h;const t=C(),{selected:r}=A(f=>f.runtime),{t:o}=v(),[i]=r,s=window.graph.getEdgeAttribute(i,"type"),n=(m=window.graph.getEdgeAttribute(i,s))!=null?m:{},d=s in I&&I[s].attrsComponent,u=window.graph.getEdgeAttribute(i,"style"),p=(h=window.graph.getEdgeAttribute(i,u))!=null?h:{},a=u in k&&k[u].attrsComponent,l=(f,x)=>{window.graph.mergeEdgeAttributes(f,{[s]:x}),t(w()),t(j(window.graph.export()))},g=(f,x)=>{window.graph.mergeEdgeAttributes(f,{[u]:x}),t(w()),t(j(window.graph.export()))};return e.jsxs(e.Fragment,{children:[d?e.jsx(d,{id:i,attrs:n,handleAttrsUpdate:l}):e.jsx(F,{fontSize:"xs",m:"var(--chakra-space-1)",children:o("panel.details.unknown.error",{category:o("panel.details.unknown.linePath")})}),a?e.jsx(a,{id:i,attrs:p,handleAttrsUpdate:g}):e.jsx(F,{fontSize:"xs",m:"var(--chakra-space-1)",children:o("panel.details.unknown.error",{category:o("panel.details.unknown.lineStyle")})})]})},Ue=()=>{const{t}=v(),r=C(),o=c.useRef(window.graph),i=c.useCallback(()=>{r(N()),r(w()),r(j(o.current.export()))},[r,N,w,j]),{selected:s,mode:n,active:d}=A(m=>m.runtime),[u]=s,p=()=>r(M()),a=m=>{const h=structuredClone(o.current.getNodeAttributes(m));h.x+=50,h.y+=50;const f=m.startsWith("stn")?"stn_".concat(K(10)):"misc_node_".concat(K(10));o.current.addNode(f,h),r(N()),r(j(o.current.export()))},l=m=>{const h=xe(o.current,m);navigator.clipboard.writeText(h)},g=m=>{r(M()),m.forEach(h=>{o.current.hasNode(h)?o.current.dropNode(h):o.current.hasEdge(h)&&o.current.dropEdge(h)}),i()};return e.jsxs(he,{isOpen:s.size>0&&!n.startsWith("line")&&!d,width:300,header:"Dummy header",alwaysOverlay:!0,children:[e.jsx(ge,{onClose:p,children:t("panel.details.header")}),e.jsxs(me,{children:[e.jsx(Te,{}),s.size===1&&o.current.hasNode(u)&&e.jsx(ze,{}),s.size===1&&o.current.hasEdge(u)&&e.jsx(Ee,{}),s.size===1&&e.jsxs(P,{p:1,children:[e.jsx(R,{as:"h5",size:"sm",children:t("panel.details.specificAttrsTitle")}),window.graph.hasNode(u)&&e.jsx(ke,{}),window.graph.hasEdge(u)&&e.jsx(Re,{})]})]}),e.jsx(fe,{children:e.jsxs(_,{children:[s.size===1&&o.current.hasNode([...s].at(0))&&e.jsx(b,{size:"sm",variant:"outline",onClick:()=>a([...s].at(0)),children:t("panel.details.footer.duplicate")}),e.jsx(b,{size:"sm",variant:"outline",onClick:()=>l(s),children:t("panel.details.footer.copy")}),e.jsx(b,{size:"sm",variant:"outline",onClick:()=>g(s),children:t("panel.details.footer.remove")})]})})]})};export{Ue as default};
