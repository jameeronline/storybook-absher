import{c as $}from"./index-CS7R4WcE.js";const _=({label:k="Default Range",size:w="default",type:E="default"})=>{const A=$({slots:{labelEl:"block mb-2 text-slate-600 dark:text-white",input:"w-full bg-typo-200 rounded-lg appearance-none cursor-pointer dark:bg-typo-700"},variants:{size:{small:{input:"h-1",labelEl:"text-sm"},default:{input:"h-2",labelEl:"text-md"},large:{input:"h-4",labelEl:"text-base"}}}});let e="";switch(E){case"minMax":e='min="0" max="100"';break;case"steps":e='min="0" max="100" step="10"';break;case"advanced":e='min="0" max="100" step="5"';break;default:e="";break}const{labelEl:D,input:L}=A({size:w});return`
      <label class="${D()}">${k}</label>
      <input 
        type="range" 
        value="50"
        ${e} 
        class="${L()}"
      >
    `},F={title:"Form Elements/RangeSelect",tags:["autodocs"],render:_,argTypes:{label:{control:"text"},size:{control:{type:"select"},options:["small","default","large"]},type:{control:{type:"select"},options:["default","minMax","steps","advanced"]}},args:{label:"Default Range",size:"default",type:"default"}},a={},s={args:{label:"Small Range",size:"small",type:"default"}},t={args:{label:"Large Range",size:"large",type:"default"}},r={args:{label:"Range with Min and Max",size:"default",type:"minMax"}},n={args:{label:"Range with Steps",size:"default",type:"steps"}},l={args:{label:"Advanced Range",size:"default",type:"advanced"}};var o,c,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,g,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Small Range",
    size: "small",
    type: "default"
  }
}`,...(i=(g=s.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var u,m,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Large Range",
    size: "large",
    type: "default"
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var R,f,x;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Range with Min and Max",
    size: "default",
    type: "minMax"
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,S,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Range with Steps",
    size: "default",
    type: "steps"
  }
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var M,v,h;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Advanced Range",
    size: "default",
    type: "advanced"
  }
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const N=["DefaultRange","SmallRange","LargeRange","MinMaxRange","SteppedRange","AdvancedRange"];export{l as AdvancedRange,a as DefaultRange,t as LargeRange,r as MinMaxRange,s as SmallRange,n as SteppedRange,N as __namedExportsOrder,F as default};
