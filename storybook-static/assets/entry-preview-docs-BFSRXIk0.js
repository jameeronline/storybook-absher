import{g as i,c as l,y as u}from"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{useEffect:_,addons:D}=__STORYBOOK_MODULE_PREVIEW_API__;function E(e){var s;let r=(s=e==null?void 0:e.parameters.docs)==null?void 0:s.source,a=e==null?void 0:e.parameters.__isArgsStory;return(r==null?void 0:r.type)===i.DYNAMIC?!1:!a||(r==null?void 0:r.code)||(r==null?void 0:r.type)===i.CODE}var f=(e,r)=>{var o,p;let a=e(),s=(p=(o=r==null?void 0:r.parameters.docs)==null?void 0:o.source)!=null&&p.excludeDecorators?r.originalStoryFn(r.args,r):a,d;return E(r)||(typeof s=="string"?d=s:s instanceof Element&&(d=s.outerHTML)),_(()=>{let{id:g,unmappedArgs:y}=r;d&&D.getChannel().emit(u,{id:g,args:y,source:d})}),a},A=[f],S={docs:{story:{inline:!0},source:{type:i.DYNAMIC,language:"html",code:void 0,excludeDecorators:void 0}}},O=[l];export{O as argTypesEnhancers,A as decorators,S as parameters};
