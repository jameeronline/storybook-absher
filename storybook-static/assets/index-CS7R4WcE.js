var ce=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,P=e=>!e||typeof e!="object"||Object.keys(e).length===0,Se=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function be(e,t){e.forEach(function(r){Array.isArray(r)?be(r,t):t.push(r)})}function ge(e){let t=[];return be(e,t),t}var me=(...e)=>ge(e).filter(Boolean),he=(e,t)=>{let r={},n=Object.keys(e),a=Object.keys(t);for(let o of n)if(a.includes(o)){let i=e[o],s=t[o];typeof i=="object"&&typeof s=="object"?r[o]=he(i,s):Array.isArray(i)||Array.isArray(s)?r[o]=me(s,i):r[o]=s+" "+i}else r[o]=e[o];for(let o of a)n.includes(o)||(r[o]=t[o]);return r},de=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();const ie="-",Me=e=>{const t=Ge(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:i=>{const s=i.split(ie);return s[0]===""&&s.length!==1&&s.shift(),ye(s,t)||je(i)},getConflictingClassGroupIds:(i,s)=>{const u=r[i]||[];return s&&n[i]?[...u,...n[i]]:u}}},ye=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),a=n?ye(e.slice(1),n):void 0;if(a)return a;if(t.validators.length===0)return;const o=e.join(ie);return(i=t.validators.find(({validator:s})=>s(o)))==null?void 0:i.classGroupId},ue=/^\[(.+)\]$/,je=e=>{if(ue.test(e)){const t=ue.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Ge=e=>{const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return Re(Object.entries(e.classGroups),r).forEach(([o,i])=>{oe(i,n,o,t)}),n},oe=(e,t,r,n)=>{e.forEach(a=>{if(typeof a=="string"){const o=a===""?t:pe(t,a);o.classGroupId=r;return}if(typeof a=="function"){if(Pe(a)){oe(a(n),t,r,n);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(([o,i])=>{oe(i,pe(t,o),r,n)})})},pe=(e,t)=>{let r=e;return t.split(ie).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},Pe=e=>e.isThemeGetter,Re=(e,t)=>t?e.map(([r,n])=>{const a=n.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([i,s])=>[t+i,s])):o);return[r,a]}):e,Ve=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const a=(o,i)=>{r.set(o,i),t++,t>e&&(t=0,n=r,r=new Map)};return{get(o){let i=r.get(o);if(i!==void 0)return i;if((i=n.get(o))!==void 0)return a(o,i),i},set(o,i){r.has(o)?r.set(o,i):a(o,i)}}},ve="!",Ne=e=>{const{separator:t,experimentalParseClassName:r}=e,n=t.length===1,a=t[0],o=t.length,i=s=>{const u=[];let C=0,m=0,S;for(let b=0;b<s.length;b++){let A=s[b];if(C===0){if(A===a&&(n||s.slice(b,b+o)===t)){u.push(s.slice(m,b)),m=b+o;continue}if(A==="/"){S=b;continue}}A==="["?C++:A==="]"&&C--}const M=u.length===0?s:s.substring(m),R=M.startsWith(ve),j=R?M.substring(1):M,k=S&&S>m?S-m:void 0;return{modifiers:u,hasImportantModifier:R,baseClassName:j,maybePostfixModifierPosition:k}};return r?s=>r({className:s,parseClassName:i}):i},$e=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t},Ie=e=>({cache:Ve(e.cacheSize),parseClassName:Ne(e),...Me(e)}),Te=/\s+/,Ee=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a}=t,o=[],i=e.trim().split(Te);let s="";for(let u=i.length-1;u>=0;u-=1){const C=i[u],{modifiers:m,hasImportantModifier:S,baseClassName:M,maybePostfixModifierPosition:R}=r(C);let j=!!R,k=n(j?M.substring(0,R):M);if(!k){if(!j){s=C+(s.length>0?" "+s:s);continue}if(k=n(M),!k){s=C+(s.length>0?" "+s:s);continue}j=!1}const b=$e(m).join(":"),A=S?b+ve:b,h=A+k;if(o.includes(h))continue;o.push(h);const O=a(k,j);for(let V=0;V<O.length;++V){const L=O[V];o.push(A+L)}s=C+(s.length>0?" "+s:s)}return s};function Oe(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=xe(t))&&(n&&(n+=" "),n+=r);return n}const xe=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=xe(e[n]))&&(r&&(r+=" "),r+=t);return r};function ne(e,...t){let r,n,a,o=i;function i(u){const C=t.reduce((m,S)=>S(m),e());return r=Ie(C),n=r.cache.get,a=r.cache.set,o=s,s(u)}function s(u){const C=n(u);if(C)return C;const m=Ee(u,r);return a(u,m),m}return function(){return o(Oe.apply(null,arguments))}}const w=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},we=/^\[(?:([a-z-]+):)?(.+)\]$/i,Le=/^\d+\/\d+$/,We=new Set(["px","full","screen"]),_e=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Be=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ue=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Fe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Je=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,N=e=>_(e)||We.has(e)||Le.test(e),T=e=>B(e,"length",De),_=e=>!!e&&!Number.isNaN(Number(e)),re=e=>B(e,"number",_),K=e=>!!e&&Number.isInteger(Number(e)),qe=e=>e.endsWith("%")&&_(e.slice(0,-1)),c=e=>we.test(e),E=e=>_e.test(e),Ke=new Set(["length","size","percentage"]),Ze=e=>B(e,Ke,ke),He=e=>B(e,"position",ke),Xe=new Set(["image","url"]),Qe=e=>B(e,Xe,rr),Ye=e=>B(e,"",er),Z=()=>!0,B=(e,t,r)=>{const n=we.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1},De=e=>Be.test(e)&&!Ue.test(e),ke=()=>!1,er=e=>Fe.test(e),rr=e=>Je.test(e),se=()=>{const e=w("colors"),t=w("spacing"),r=w("blur"),n=w("brightness"),a=w("borderColor"),o=w("borderRadius"),i=w("borderSpacing"),s=w("borderWidth"),u=w("contrast"),C=w("grayscale"),m=w("hueRotate"),S=w("invert"),M=w("gap"),R=w("gradientColorStops"),j=w("gradientColorStopPositions"),k=w("inset"),b=w("margin"),A=w("opacity"),h=w("padding"),O=w("saturate"),V=w("scale"),L=w("sepia"),Y=w("skew"),U=w("space"),F=w("translate"),W=()=>["auto","contain","none"],J=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto",c,t],l=()=>[c,t],p=()=>["",N,T],d=()=>["auto",_,c],g=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],f=()=>["solid","dashed","dotted","double","none"],y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],v=()=>["start","end","center","between","around","evenly","stretch"],x=()=>["","0",c],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[_,c];return{cacheSize:500,separator:":",theme:{colors:[Z],spacing:[N,T],blur:["none","",E,c],brightness:G(),borderColor:[e],borderRadius:["none","","full",E,c],borderSpacing:l(),borderWidth:p(),contrast:G(),grayscale:x(),hueRotate:G(),invert:x(),gap:l(),gradientColorStops:[e],gradientColorStopPositions:[qe,T],inset:q(),margin:q(),opacity:G(),padding:l(),saturate:G(),scale:G(),sepia:x(),skew:G(),space:l(),translate:l()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...g(),c]}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",K,c]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:x()}],shrink:[{shrink:x()}],order:[{order:["first","last","none",K,c]}],"grid-cols":[{"grid-cols":[Z]}],"col-start-end":[{col:["auto",{span:["full",K,c]},c]}],"col-start":[{"col-start":d()}],"col-end":[{"col-end":d()}],"grid-rows":[{"grid-rows":[Z]}],"row-start-end":[{row:["auto",{span:[K,c]},c]}],"row-start":[{"row-start":d()}],"row-end":[{"row-end":d()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[M]}],"gap-x":[{"gap-x":[M]}],"gap-y":[{"gap-y":[M]}],"justify-content":[{justify:["normal",...v()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...v(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...v(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[U]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[U]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,t]}],"min-w":[{"min-w":[c,t,"min","max","fit"]}],"max-w":[{"max-w":[c,t,"none","full","min","max","fit","prose",{screen:[E]},E]}],h:[{h:[c,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,t,"auto","min","max","fit"]}],"font-size":[{text:["base",E,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",re]}],"font-family":[{font:[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",_,re]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",N,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...f(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",N,T]}],"underline-offset":[{"underline-offset":["auto",N,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:l()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...g(),He]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ze]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[j]}],"gradient-via-pos":[{via:[j]}],"gradient-to-pos":[{to:[j]}],"gradient-from":[{from:[R]}],"gradient-via":[{via:[R]}],"gradient-to":[{to:[R]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...f(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:f()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...f()]}],"outline-offset":[{"outline-offset":[N,c]}],"outline-w":[{outline:[N,T]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:p()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[N,T]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",E,Ye]}],"shadow-color":[{shadow:[Z]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":[...y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":y()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",E,c]}],grayscale:[{grayscale:[C]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[S]}],saturate:[{saturate:[O]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[C]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[S]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:G()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:G()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[V]}],"scale-x":[{"scale-x":[V]}],"scale-y":[{"scale-y":[V]}],rotate:[{rotate:[K,c]}],"translate-x":[{"translate-x":[F]}],"translate-y":[{"translate-y":[F]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":l()}],"scroll-mx":[{"scroll-mx":l()}],"scroll-my":[{"scroll-my":l()}],"scroll-ms":[{"scroll-ms":l()}],"scroll-me":[{"scroll-me":l()}],"scroll-mt":[{"scroll-mt":l()}],"scroll-mr":[{"scroll-mr":l()}],"scroll-mb":[{"scroll-mb":l()}],"scroll-ml":[{"scroll-ml":l()}],"scroll-p":[{"scroll-p":l()}],"scroll-px":[{"scroll-px":l()}],"scroll-py":[{"scroll-py":l()}],"scroll-ps":[{"scroll-ps":l()}],"scroll-pe":[{"scroll-pe":l()}],"scroll-pt":[{"scroll-pt":l()}],"scroll-pr":[{"scroll-pr":l()}],"scroll-pb":[{"scroll-pb":l()}],"scroll-pl":[{"scroll-pl":l()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[N,T,re]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},tr=(e,{cacheSize:t,prefix:r,separator:n,experimentalParseClassName:a,extend:o={},override:i={}})=>{X(e,"cacheSize",t),X(e,"prefix",r),X(e,"separator",n),X(e,"experimentalParseClassName",a);for(const s in i)or(e[s],i[s]);for(const s in o)nr(e[s],o[s]);return e},X=(e,t,r)=>{r!==void 0&&(e[t]=r)},or=(e,t)=>{if(t)for(const r in t)X(e,r,t[r])},nr=(e,t)=>{if(t)for(const r in t){const n=t[r];n!==void 0&&(e[r]=(e[r]||[]).concat(n))}},sr=(e,...t)=>typeof e=="function"?ne(se,e,...t):ne(()=>tr(se(),e),...t),lr=ne(se);var ir={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Ce=e=>e||void 0,Q=(...e)=>Ce(ge(e).filter(Boolean).join(" ")),te=null,$={},le=!1,H=(...e)=>t=>t.twMerge?((!te||le)&&(le=!1,te=P($)?lr:sr({...$,extend:{theme:$.theme,classGroups:$.classGroups,conflictingClassGroupModifiers:$.conflictingClassGroupModifiers,conflictingClassGroups:$.conflictingClassGroups,...$.extend}})),Ce(te(Q(e)))):Q(e),fe=(e,t)=>{for(let r in t)e.hasOwnProperty(r)?e[r]=Q(e[r],t[r]):e[r]=t[r];return e},ar=(e,t)=>{let{extend:r=null,slots:n={},variants:a={},compoundVariants:o=[],compoundSlots:i=[],defaultVariants:s={}}=e,u={...ir,...t},C=r!=null&&r.base?Q(r.base,e==null?void 0:e.base):e==null?void 0:e.base,m=r!=null&&r.variants&&!P(r.variants)?he(a,r.variants):a,S=r!=null&&r.defaultVariants&&!P(r.defaultVariants)?{...r.defaultVariants,...s}:s;!P(u.twMergeConfig)&&!Se(u.twMergeConfig,$)&&(le=!0,$=u.twMergeConfig);let M=P(r==null?void 0:r.slots),R=P(n)?{}:{base:Q(e==null?void 0:e.base,M&&(r==null?void 0:r.base)),...n},j=M?R:fe({...r==null?void 0:r.slots},P(R)?{base:e==null?void 0:e.base}:R),k=P(r==null?void 0:r.compoundVariants)?o:me(r==null?void 0:r.compoundVariants,o),b=h=>{if(P(m)&&P(n)&&M)return H(C,h==null?void 0:h.class,h==null?void 0:h.className)(u);if(k&&!Array.isArray(k))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof k}`);if(i&&!Array.isArray(i))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);let O=(l,p,d=[],g)=>{let f=d;if(typeof p=="string")f=f.concat(de(p).split(" ").map(y=>`${l}:${y}`));else if(Array.isArray(p))f=f.concat(p.reduce((y,v)=>y.concat(`${l}:${v}`),[]));else if(typeof p=="object"&&typeof g=="string"){for(let y in p)if(p.hasOwnProperty(y)&&y===g){let v=p[y];if(v&&typeof v=="string"){let x=de(v);f[g]?f[g]=f[g].concat(x.split(" ").map(z=>`${l}:${z}`)):f[g]=x.split(" ").map(z=>`${l}:${z}`)}else Array.isArray(v)&&v.length>0&&(f[g]=v.reduce((x,z)=>x.concat(`${l}:${z}`),[]))}}return f},V=(l,p=m,d=null,g=null)=>{var f;let y=p[l];if(!y||P(y))return null;let v=(f=g==null?void 0:g[l])!=null?f:h==null?void 0:h[l];if(v===null)return null;let x=ce(v),z=Array.isArray(u.responsiveVariants)&&u.responsiveVariants.length>0||u.responsiveVariants===!0,G=S==null?void 0:S[l],I=[];if(typeof x=="object"&&z)for(let[ee,ae]of Object.entries(x)){let ze=y[ae];if(ee==="initial"){G=ae;continue}Array.isArray(u.responsiveVariants)&&!u.responsiveVariants.includes(ee)||(I=O(ee,ze,I,d))}let Ae=x!=null&&typeof x!="object"?x:ce(G),D=y[Ae||"false"];return typeof I=="object"&&typeof d=="string"&&I[d]?fe(I,D):I.length>0?(I.push(D),I):D},L=()=>m?Object.keys(m).map(l=>V(l,m)):null,Y=(l,p)=>{if(!m||typeof m!="object")return null;let d=new Array;for(let g in m){let f=V(g,m,l,p),y=l==="base"&&typeof f=="string"?f:f&&f[l];y&&(d[d.length]=y)}return d},U={};for(let l in h)h[l]!==void 0&&(U[l]=h[l]);let F=(l,p)=>{var d;let g=typeof(h==null?void 0:h[l])=="object"?{[l]:(d=h[l])==null?void 0:d.initial}:{};return{...S,...U,...g,...p}},W=(l=[],p)=>{let d=[];for(let{class:g,className:f,...y}of l){let v=!0;for(let[x,z]of Object.entries(y)){let G=F(x,p);if(Array.isArray(z)){if(!z.includes(G[x])){v=!1;break}}else if(G[x]!==z){v=!1;break}}v&&(g&&d.push(g),f&&d.push(f))}return d},J=l=>{let p=W(k,l);if(!Array.isArray(p))return p;let d={};for(let g of p)if(typeof g=="string"&&(d.base=H(d.base,g)(u)),typeof g=="object")for(let[f,y]of Object.entries(g))d[f]=H(d[f],y)(u);return d},q=l=>{if(i.length<1)return null;let p={};for(let{slots:d=[],class:g,className:f,...y}of i){if(!P(y)){let v=!0;for(let x of Object.keys(y)){let z=F(x,l)[x];if(z===void 0||(Array.isArray(y[x])?!y[x].includes(z):y[x]!==z)){v=!1;break}}if(!v)continue}for(let v of d)p[v]=p[v]||[],p[v].push([g,f])}return p};if(!P(n)||!M){let l={};if(typeof j=="object"&&!P(j))for(let p of Object.keys(j))l[p]=d=>{var g,f;return H(j[p],Y(p,d),((g=J(d))!=null?g:[])[p],((f=q(d))!=null?f:[])[p],d==null?void 0:d.class,d==null?void 0:d.className)(u)};return l}return H(C,L(),W(k),h==null?void 0:h.class,h==null?void 0:h.className)(u)},A=()=>{if(!(!m||typeof m!="object"))return Object.keys(m)};return b.variantKeys=A(),b.extend=r,b.base=C,b.slots=j,b.variants=m,b.defaultVariants=S,b.compoundSlots=i,b.compoundVariants=k,b};export{ar as c};
