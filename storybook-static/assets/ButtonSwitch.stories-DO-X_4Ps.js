import{c as _}from"./index-CS7R4WcE.js";const A=({elementId:r="toggle-component",labels:e=["Code mode","Visual mode"],size:i="medium",leadingIcon:d=!1,trailIcon:u=!1,rounded:V=!0})=>{const z=_({slots:{base:"relative inline-flex items-center group bg-slate-100",input:"order-2 hidden peer",labelBase:"inline-flex items-center justify-center order-1 gap-2 text-sm font-medium tracking-wide cursor-pointer transition-colors",activeLabel:"text-white bg-primary-800 hover:bg-primary-900 focus:bg-primary-950 peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent",label:"bg-transparent text-slate-500 hover:text-slate-600 peer-checked:bg-primary-800 peer-checked:text-white hover:peer-checked:bg-primary-900 peer-checked:hover:text-white focus:peer-checked:bg-primary-700",icon:""},variants:{size:{small:{labelBase:"h-8 px-4 text-xs",icon:"text-sm"},medium:{labelBase:"h-10 px-5 text-sm",icon:"text-md"},large:{labelBase:"h-12 px-6 text-base",icon:"text-lg"},xlarge:{labelBase:"h-16 px-8 text-lg",icon:"text-2xl"}}},compoundSlots:[{slots:["labelBase","base"],rounded:!0,class:"rounded-full"},{slots:["labelBase","base"],rounded:!1,class:"rounded-md"}]}),{base:E,input:R,labelBase:g,activeLabel:D,label:M,icon:a}=z({size:i,rounded:V});return`
      <div class="${E()}">
        <input class="${R()}" type="checkbox" id="id-${r}" />
        
        <!-- First label -->
        <label class="${g()} ${D()}" for="id-${r}">
          ${d?`<i class="bi ${e[0].icon} ${a()}"></i>`:""}
          ${e[0].label}
          ${u?`<i class="bi ${e[0].icon} ${a()}"></i>`:""}
        </label>

        <!-- Second label -->
        <label class="${g()} ${M()}" for="id-${r}">
          ${d?`<i class="bi ${e[1].icon} ${a()}"></i>`:""}
          ${e[1].label}
          ${u?`<i class="bi ${e[1].icon} ${a()}"></i>`:""}
        </label>
      </div>
    `},P={title:"Form Elements/Button Switch",tags:["autodocs"],render:r=>{const e=`toggle-${Date.now()}-${Math.random().toString(36).substring(2,9)}`;return A({...r,elementId:e})},argTypes:{labels:{control:"array",description:"Labels for the two toggle states.",defaultValue:[{label:"Code mode",icon:"bi-code-slash"},{label:"Visual mode",icon:"bi-eye"}]},size:{control:{type:"select"},options:["small","medium","large","xlarge"],defaultValue:"large",description:"The size of the button (affects height, padding, and font)."},leadingIcon:{control:"boolean",description:"Adds an icon at the start of the label.",defaultValue:!1},trailIcon:{control:"boolean",description:"Adds an icon at the end of the label.",defaultValue:!1},rounded:{control:"boolean",description:"Controls whether the buttons have rounded corners.",defaultValue:!0}},args:{labels:[{label:"Code mode",icon:"bi-code-slash"},{label:"Visual mode",icon:"bi-eye"}],size:"medium",leadingIcon:!1,trailIcon:!1,rounded:!0}},t={args:{}},o={args:{trailIcon:!0,size:"large"}},s={args:{rounded:!0,trailIcon:!0}},n={args:{rounded:!1,leadingIcon:!0}},l={args:{rounded:!0,leadingIcon:!0}},c={args:{labels:[{label:"Editor",icon:"bi-code-slash"},{label:"Preview",icon:"bi-eye"}]}};var p,b,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    trailIcon: true,
    size: "large"
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var $,v,y;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    rounded: true,
    trailIcon: true
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,w,I;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    rounded: false,
    leadingIcon: true
  }
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var S,C,B;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    rounded: true,
    leadingIcon: true
  }
}`,...(B=(C=l.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var L,T,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    labels: [{
      label: "Editor",
      icon: "bi-code-slash"
    }, {
      label: "Preview",
      icon: "bi-eye"
    }]
  }
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const j=["DefaultToggle","ToggleWithIconLarge","ToggleWithRoundedCorners","LeadingWithIcon","LeadingWithRoundedCorners","ToggleWithCustomLabels"];export{t as DefaultToggle,n as LeadingWithIcon,l as LeadingWithRoundedCorners,c as ToggleWithCustomLabels,o as ToggleWithIconLarge,s as ToggleWithRoundedCorners,j as __namedExportsOrder,P as default};
