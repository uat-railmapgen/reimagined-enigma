System.register(["./index-legacy-SJXbxk3L.js"],(function(e,t){"use strict";var r,a;return{setters:[e=>{r=e.S,a=e.e}],execute:function(){const t=/url\("([\S*]+)"\)/,n=(e("i",(()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"))),e("g",(async(e,r,a,s,o)=>{var l;const c=Array.from(new Set(r.map((t=>[...e.querySelectorAll(t)])).flat().map((e=>e.innerHTML)).join("").replace(/\s/g,""))).join(""),m=await document.fonts.load(a.join(", "),c),i=null===(l=document.querySelector(`link#${s}`))||void 0===l||null===(l=l.sheet)||void 0===l?void 0:l.cssRules;if(!i)return Promise.reject(new Error(`cssRules can not be found in link#${s}`));const u=Array.from(i).flatMap((e=>e instanceof CSSImportRule?Array.from(e.styleSheet.cssRules):e)).filter((e=>e instanceof CSSFontFaceRule)),y=m.reduce(((e,t)=>{const r=(a=t,u.find((e=>{const t=e.style;return t.getPropertyValue("font-family").replace(/^"(.+)"$/,"$1")===a.family&&t.getPropertyValue("unicode-range")===a.unicodeRange})));var a;return r?e.find((e=>{const t=e.style,a=r.style;return t.getPropertyValue("font-family")===a.getPropertyValue("font-family")&&t.getPropertyValue("unicode-range")===a.getPropertyValue("unicode-range")}))?e:e.concat(r):e}),[]);return await Promise.all(y.map((async e=>{try{const a=await fetch(n(o,e)),s=await(r=await a.blob(),new Promise((e=>{const t=new FileReader;t.onloadend=()=>e(t.result),t.readAsDataURL(r)})));return e.cssText.replace(t,`url('${s}')`)}catch(a){return console.error(a),""}var r})))})),(e,r)=>{var a;return e+(null===(a=r.style.getPropertyValue("src").match(t))||void 0===a?void 0:a[1])}),s=(e("F",{[r.MTR]:{className:[".rmp-name__mtr__zh",".rmp-name__mtr__en"],cssFont:["80px GenYoMin TW","Vegur"],cssName:"fonts_mtr",baseUrl:"/styles/"},[r.MRTBasic]:{className:[".rmp-name__mrt"],cssFont:["100% IdentityFont"],cssName:"fonts_mrt",baseUrl:"/rmp/styles/"},[r.MRTInt]:{className:[".rmp-name__mrt"],cssFont:["100% IdentityFont"],cssName:"fonts_mrt",baseUrl:"/rmp/styles/"},[r.JREastBasic]:{className:[".rmp-name__jreast_ja"],cssFont:["100% Noto Sans JP Medium"],cssName:"fonts_jreast",baseUrl:"/rmp/styles/"},[r.JREastImportant]:{className:[".rmp-name__jreast_ja"],cssFont:["100% Noto Sans JP Medium"],cssName:"fonts_jreast",baseUrl:"/rmp/styles/"},[a.BerlinSBahnLineBadge]:{className:[".rmp-name__berlin"],cssFont:["100% Roboto"],cssName:"fonts_berlin",baseUrl:"/rmp/styles/"},[a.BerlinUBahnLineBadge]:{className:[".rmp-name__berlin"],cssFont:["100% Roboto"],cssName:"fonts_berlin",baseUrl:"/rmp/styles/"},[a.JREastLineBadge]:{className:[".rmp-name__jreast_ja"],cssFont:["100% Noto Sans JP Medium"],cssName:"fonts_jreast",baseUrl:"/rmp/styles/"}}),e("e",((e,t)=>e.filterEdges(((e,r,a,n,s,o,l)=>t.has(a)&&t.has(n))))),e("f",(e=>{const t=Object.fromEntries([...Object.values(r),Object.values(a)].map((e=>[e,!1])));return e.forEachNode((r=>{const a=e.getNodeAttribute(r,"type");t[a]=!0})),t})),e("d",((e,t,r,a,n)=>{const s=t<=a?t:a,o=r<=n?r:n,l=t<=a?a:t,c=r<=n?n:r;return e.filterNodes(((e,t)=>((e,t,r,a,n,s)=>e<=n&&n<=r&&t<=s&&s<=a)(s,o,l,c,t.x,t.y)))})),e("b",(e=>{const t=e.currentTarget.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}})),e("p",((e,t,r,a)=>({x:e*r/100+a.x,y:t*r/100+a.y}))),e("r",((e,t)=>Math.round(e/t)*t)),e("c",(e=>{let[t,r,a,n]=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE];return e.forEachNode(((e,o)=>{const l=document.getElementById(e);if(l){const e=s(l);t=Math.min(e.x,t),r=Math.min(e.y,r),a=Math.max(e.x+e.width,a),n=Math.max(e.y+e.height,n)}})),t-=50,r-=50,a+=100,n+=100,{xMin:t,yMin:r,xMax:a,yMax:n}})),e=>{const t=e.getBBox(),r=e.ownerSVGElement,a=e.parentNode.getScreenCTM().inverse().multiply(e.getScreenCTM()),n=[r.createSVGPoint(),r.createSVGPoint(),r.createSVGPoint(),r.createSVGPoint()];n[0].x=t.x,n[0].y=t.y,n[1].x=t.x+t.width,n[1].y=t.y,n[2].x=t.x+t.width,n[2].y=t.y+t.height,n[3].x=t.x,n[3].y=t.y+t.height;let[s,o,l,c]=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE];return n.forEach((e=>{e=e.matrixTransform(a),s=Math.min(s,e.x),l=Math.max(l,e.x),o=Math.min(o,e.y),c=Math.max(c,e.y)})),t.x=s,t.width=l-s,t.y=o,t.height=c-o,t});e("a",navigator.platform.startsWith("Mac")),e("s",(e=>{for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}))}}}));
