import{am as b,al as y}from"./index-CIamCRyy.js";function ut(t){var e,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=ut(t[e]))&&(s&&(s+=" "),s+=n)}else for(n in t)t[n]&&(s&&(s+=" "),s+=n);return s}function F(){for(var t,e,n=0,s="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=ut(t))&&(s&&(s+=" "),s+=e);return s}const J=t=>typeof t=="number"&&!isNaN(t),q=t=>typeof t=="string",k=t=>typeof t=="function",nt=t=>q(t)||k(t)?t:null,it=t=>b.isValidElement(t)||q(t)||k(t)||J(t);function vt(t,e,n){n===void 0&&(n=300);const{scrollHeight:s,style:a}=t;requestAnimationFrame(()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,n)})})}function st(t){let{enter:e,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:d=300}=t;return function(o){let{children:E,position:p,preventExitTransition:_,done:u,nodeRef:C,isIn:I,playToast:N}=o;const m=s?`${e}--${p}`:e,c=s?`${n}--${p}`:n,T=b.useRef(0);return b.useLayoutEffect(()=>{const f=C.current,l=m.split(" "),r=g=>{g.target===C.current&&(N(),f.removeEventListener("animationend",r),f.removeEventListener("animationcancel",r),T.current===0&&g.type!=="animationcancel"&&f.classList.remove(...l))};f.classList.add(...l),f.addEventListener("animationend",r),f.addEventListener("animationcancel",r)},[]),b.useEffect(()=>{const f=C.current,l=()=>{f.removeEventListener("animationend",l),a?vt(f,u,d):u()};I||(_?l():(T.current=1,f.className+=` ${c}`,f.addEventListener("animationend",l)))},[I]),y.createElement(y.Fragment,null,E)}}function ct(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const $=new Map;let K=[];const lt=new Set,ht=t=>lt.forEach(e=>e(t)),pt=()=>$.size>0;function ft(t,e){var n;if(e)return!((n=$.get(e))==null||!n.isToastActive(t));let s=!1;return $.forEach(a=>{a.isToastActive(t)&&(s=!0)}),s}function mt(t,e){it(t)&&(pt()||K.push({content:t,options:e}),$.forEach(n=>{n.buildToast(t,e)}))}function dt(t,e){$.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function Et(t){const{subscribe:e,getSnapshot:n,setProps:s}=b.useRef(function(d){const o=d.containerId||1;return{subscribe(E){const p=function(u,C,I){let N=1,m=0,c=[],T=[],f=[],l=C;const r=new Map,g=new Set,A=()=>{f=Array.from(r.values()),g.forEach(i=>i())},O=i=>{T=i==null?[]:T.filter(v=>v!==i),A()},L=i=>{const{toastId:v,onOpen:w,updateId:R,children:S}=i.props,Y=R==null;i.staleId&&r.delete(i.staleId),r.set(v,i),T=[...T,i.props.toastId].filter(z=>z!==i.staleId),A(),I(ct(i,Y?"added":"updated")),Y&&k(w)&&w(b.isValidElement(S)&&S.props)};return{id:u,props:l,observe:i=>(g.add(i),()=>g.delete(i)),toggle:(i,v)=>{r.forEach(w=>{v!=null&&v!==w.props.toastId||k(w.toggle)&&w.toggle(i)})},removeToast:O,toasts:r,clearQueue:()=>{m-=c.length,c=[]},buildToast:(i,v)=>{if((M=>{let{containerId:P,toastId:x,updateId:B}=M;const V=P?P!==u:u!==1,U=r.has(x)&&B==null;return V||U})(v))return;const{toastId:w,updateId:R,data:S,staleId:Y,delay:z}=v,Q=()=>{O(w)},Z=R==null;Z&&m++;const D={...l,style:l.toastStyle,key:N++,...Object.fromEntries(Object.entries(v).filter(M=>{let[P,x]=M;return x!=null})),toastId:w,updateId:R,data:S,closeToast:Q,isIn:!1,className:nt(v.className||l.toastClassName),bodyClassName:nt(v.bodyClassName||l.bodyClassName),progressClassName:nt(v.progressClassName||l.progressClassName),autoClose:!v.isLoading&&(H=v.autoClose,j=l.autoClose,H===!1||J(H)&&H>0?H:j),deleteToast(){const M=r.get(w),{onClose:P,children:x}=M.props;k(P)&&P(b.isValidElement(x)&&x.props),I(ct(M,"removed")),r.delete(w),m--,m<0&&(m=0),c.length>0?L(c.shift()):A()}};var H,j;D.closeButton=l.closeButton,v.closeButton===!1||it(v.closeButton)?D.closeButton=v.closeButton:v.closeButton===!0&&(D.closeButton=!it(l.closeButton)||l.closeButton);let W=i;b.isValidElement(i)&&!q(i.type)?W=b.cloneElement(i,{closeToast:Q,toastProps:D,data:S}):k(i)&&(W=i({closeToast:Q,toastProps:D,data:S}));const X={content:W,props:D,staleId:Y};l.limit&&l.limit>0&&m>l.limit&&Z?c.push(X):J(z)?setTimeout(()=>{L(X)},z):L(X)},setProps(i){l=i},setToggle:(i,v)=>{r.get(i).toggle=v},isToastActive:i=>T.some(v=>v===i),getSnapshot:()=>f}}(o,d,ht);$.set(o,p);const _=p.observe(E);return K.forEach(u=>mt(u.content,u.options)),K=[],()=>{_(),$.delete(o)}},setProps(E){var p;(p=$.get(o))==null||p.setProps(E)},getSnapshot(){var E;return(E=$.get(o))==null?void 0:E.getSnapshot()}}}(t)).current;s(t);const a=b.useSyncExternalStore(e,n,n);return{getToastToRender:function(d){if(!a)return[];const o=new Map;return t.newestOnTop&&a.reverse(),a.forEach(E=>{const{position:p}=E.props;o.has(p)||o.set(p,[]),o.get(p).push(E)}),Array.from(o,E=>d(E[0],E[1]))},isToastActive:ft,count:a==null?void 0:a.length}}function Tt(t){const[e,n]=b.useState(!1),[s,a]=b.useState(!1),d=b.useRef(null),o=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:E,pauseOnHover:p,closeToast:_,onClick:u,closeOnClick:C}=t;var I,N;function m(){n(!0)}function c(){n(!1)}function T(r){const g=d.current;o.canDrag&&g&&(o.didMove=!0,e&&c(),o.delta=t.draggableDirection==="x"?r.clientX-o.start:r.clientY-o.start,o.start!==r.clientX&&(o.canCloseOnClick=!1),g.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,g.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function f(){document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",f);const r=d.current;if(o.canDrag&&o.didMove&&r){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return a(!0),t.closeToast(),void t.collapseAll();r.style.transition="transform 0.2s, opacity 0.2s",r.style.removeProperty("transform"),r.style.removeProperty("opacity")}}(N=$.get((I={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||N.setToggle(I.id,I.fn),b.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||c(),window.addEventListener("focus",m),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",c)}},[t.pauseOnFocusLoss]);const l={onPointerDown:function(r){if(t.draggable===!0||t.draggable===r.pointerType){o.didMove=!1,document.addEventListener("pointermove",T),document.addEventListener("pointerup",f);const g=d.current;o.canCloseOnClick=!0,o.canDrag=!0,g.style.transition="none",t.draggableDirection==="x"?(o.start=r.clientX,o.removalDistance=g.offsetWidth*(t.draggablePercent/100)):(o.start=r.clientY,o.removalDistance=g.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(r){const{top:g,bottom:A,left:O,right:L}=d.current.getBoundingClientRect();r.nativeEvent.type!=="touchend"&&t.pauseOnHover&&r.clientX>=O&&r.clientX<=L&&r.clientY>=g&&r.clientY<=A?c():m()}};return E&&p&&(l.onMouseEnter=c,t.stacked||(l.onMouseLeave=m)),C&&(l.onClick=r=>{u&&u(r),o.canCloseOnClick&&_()}),{playToast:m,pauseToast:c,isRunning:e,preventExitTransition:s,toastRef:d,eventHandlers:l}}function bt(t){let{delay:e,isRunning:n,closeToast:s,type:a="default",hide:d,className:o,style:E,controlledProgress:p,progress:_,rtl:u,isIn:C,theme:I}=t;const N=d||p&&_===0,m={...E,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};p&&(m.transform=`scaleX(${_})`);const c=F("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${I}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":u}),T=k(o)?o({rtl:u,type:a,defaultClassName:c}):F(c,o),f={[p&&_>=1?"onTransitionEnd":"onAnimationEnd"]:p&&_<1?null:()=>{C&&s()}};return y.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":N},y.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${I} Toastify__progress-bar--${a}`}),y.createElement("div",{role:"progressbar","aria-hidden":N?"true":"false","aria-label":"notification timer",className:T,style:m,...f}))}let It=1;const gt=()=>""+It++;function _t(t){return t&&(q(t.toastId)||J(t.toastId))?t.toastId:gt()}function G(t,e){return mt(t,e),e.toastId}function ot(t,e){return{...e,type:e&&e.type||t,toastId:_t(e)}}function tt(t){return(e,n)=>G(e,ot(t,n))}function h(t,e){return G(t,ot("default",e))}h.loading=(t,e)=>G(t,ot("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),h.promise=function(t,e,n){let s,{pending:a,error:d,success:o}=e;a&&(s=q(a)?h.loading(a,n):h.loading(a.render,{...n,...a}));const E={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},p=(u,C,I)=>{if(C==null)return void h.dismiss(s);const N={type:u,...E,...n,data:I},m=q(C)?{render:C}:C;return s?h.update(s,{...N,...m}):h(m.render,{...N,...m}),I},_=k(t)?t():t;return _.then(u=>p("success",o,u)).catch(u=>p("error",d,u)),_},h.success=tt("success"),h.info=tt("info"),h.error=tt("error"),h.warning=tt("warning"),h.warn=h.warning,h.dark=(t,e)=>G(t,ot("default",{theme:"dark",...e})),h.dismiss=function(t){(function(e){var n;if(pt()){if(e==null||q(n=e)||J(n))$.forEach(s=>{s.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const s=$.get(e.containerId);s?s.removeToast(e.id):$.forEach(a=>{a.removeToast(e.id)})}}else K=K.filter(s=>e!=null&&s.options.toastId!==e)})(t)},h.clearWaitingQueue=function(t){t===void 0&&(t={}),$.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},h.isActive=ft,h.update=function(t,e){e===void 0&&(e={});const n=((s,a)=>{var d;let{containerId:o}=a;return(d=$.get(o||1))==null?void 0:d.toasts.get(s)})(t,e);if(n){const{props:s,content:a}=n,d={delay:100,...s,...e,toastId:e.toastId||t,updateId:gt()};d.toastId!==t&&(d.staleId=t);const o=d.render||a;delete d.render,G(o,d)}},h.done=t=>{h.update(t,{progress:1})},h.onChange=function(t){return lt.add(t),()=>{lt.delete(t)}},h.play=t=>dt(!0,t),h.pause=t=>dt(!1,t);const Ct=typeof window<"u"?b.useLayoutEffect:b.useEffect,et=t=>{let{theme:e,type:n,isLoading:s,...a}=t;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...a})},rt={info:function(t){return y.createElement(et,{...t},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return y.createElement(et,{...t},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return y.createElement(et,{...t},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return y.createElement(et,{...t},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}},Lt=t=>{const{isRunning:e,preventExitTransition:n,toastRef:s,eventHandlers:a,playToast:d}=Tt(t),{closeButton:o,children:E,autoClose:p,onClick:_,type:u,hideProgressBar:C,closeToast:I,transition:N,position:m,className:c,style:T,bodyClassName:f,bodyStyle:l,progressClassName:r,progressStyle:g,updateId:A,role:O,progress:L,rtl:i,toastId:v,deleteToast:w,isIn:R,isLoading:S,closeOnClick:Y,theme:z}=t,Q=F("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":i},{"Toastify__toast--close-on-click":Y}),Z=k(c)?c({rtl:i,position:m,type:u,defaultClassName:Q}):F(Q,c),D=function(X){let{theme:M,type:P,isLoading:x,icon:B}=X,V=null;const U={theme:M,type:P};return B===!1||(k(B)?V=B({...U,isLoading:x}):b.isValidElement(B)?V=b.cloneElement(B,U):x?V=rt.spinner():(yt=>yt in rt)(P)&&(V=rt[P](U))),V}(t),H=!!L||!p,j={closeToast:I,type:u,theme:z};let W=null;return o===!1||(W=k(o)?o(j):b.isValidElement(o)?b.cloneElement(o,j):function(X){let{closeToast:M,theme:P,ariaLabel:x="close"}=X;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${P}`,type:"button",onClick:B=>{B.stopPropagation(),M(B)},"aria-label":x},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(j)),y.createElement(N,{isIn:R,done:w,position:m,preventExitTransition:n,nodeRef:s,playToast:d},y.createElement("div",{id:v,onClick:_,"data-in":R,className:Z,...a,style:T,ref:s},y.createElement("div",{...R&&{role:O},className:k(f)?f({type:u}):F("Toastify__toast-body",f),style:l},D!=null&&y.createElement("div",{className:F("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},D),y.createElement("div",null,E)),W,y.createElement(bt,{...A&&!H?{key:`pb-${A}`}:{},rtl:i,theme:z,delay:p,isRunning:e,isIn:R,closeToast:I,hide:C,type:u,style:g,className:r,controlledProgress:H,progress:L||0})))},at=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},Nt=st(at("bounce",!0));st(at("slide",!0));st(at("zoom"));st(at("flip"));const $t={position:"top-right",transition:Nt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function kt(t){let e={...$t,...t};const n=t.stacked,[s,a]=b.useState(!0),d=b.useRef(null),{getToastToRender:o,isToastActive:E,count:p}=Et(e),{className:_,style:u,rtl:C,containerId:I}=e;function N(c){const T=F("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":C});return k(_)?_({position:c,rtl:C,defaultClassName:T}):F(T,nt(_))}function m(){n&&(a(!0),h.play())}return Ct(()=>{if(n){var c;const T=d.current.querySelectorAll('[data-in="true"]'),f=12,l=(c=e.position)==null?void 0:c.includes("top");let r=0,g=0;Array.from(T).reverse().forEach((A,O)=>{const L=A;L.classList.add("Toastify__toast--stacked"),O>0&&(L.dataset.collapsed=`${s}`),L.dataset.pos||(L.dataset.pos=l?"top":"bot");const i=r*(s?.2:1)+(s?0:f*O);L.style.setProperty("--y",`${l?i:-1*i}px`),L.style.setProperty("--g",`${f}`),L.style.setProperty("--s",""+(1-(s?g:0))),r+=L.offsetHeight,g+=.025})}},[s,p,n]),y.createElement("div",{ref:d,className:"Toastify",id:I,onMouseEnter:()=>{n&&(a(!1),h.pause())},onMouseLeave:m},o((c,T)=>{const f=T.length?{...u}:{...u,pointerEvents:"none"};return y.createElement("div",{className:N(c),style:f,key:`container-${c}`},T.map(l=>{let{content:r,props:g}=l;return y.createElement(Lt,{...g,stacked:n,collapseAll:m,isIn:E(g.toastId,g.containerId),style:g.style,key:`toast-${g.key}`},r)}))}))}export{h as B,kt as Q};
