import{c as W}from"./index-CS7R4WcE.js";const $=({label:v="badge",type:L="primary",rounded:P=!1,iconOnly:c=!1})=>`
<span class="${W({base:"font-sans text-xs inline-flex items-center justify-center",variants:{type:{primary:"bg-primary-200 text-primary-800",secondary:"bg-secondary-200 text-secondary-800",tertiary:"bg-tertiary-200 text-tertiary-800",danger:"bg-danger-200 text-danger-800",success:"bg-success-200 text-success-800",info:"bg-info-200 text-info-800",warning:"bg-warning-200 text-warning-800",light:"bg-gray-100 text-gray-800",dark:"bg-gray-800 text-white"},rounded:{true:"rounded-full",false:"rounded"},iconOnly:{true:"p-0 w-8 h-8",false:"px-4 py-2"}}})({type:L,rounded:P,iconOnly:c})}">
    ${c?'<i class="bi bi-star-fill"></i>':v}
</span>
      `,q={title:"Components / Badge",tags:["autodocs"],render:$,argTypes:{label:{control:"text",defaultValue:"Badge",description:"The text label to be displayed inside the badge."},type:{control:{type:"select"},options:["primary","secondary","tertiary","danger","success","info","warning","light","dark"],defaultValue:"primary",description:"The type of badge to display, which determines its color."},rounded:{control:{type:"boolean"},defaultValue:!0,description:"Determines if the badge should be fully rounded or have standard rounded corners."},iconOnly:{control:{type:"boolean"},defaultValue:!1,description:"If true, the badge will only display an icon instead of text."}},args:{label:"Badge",type:"primary",rounded:!0,iconOnly:!1}},e={args:{type:"primary",rounded:!0,iconOnly:!1}},r={args:{type:"secondary",rounded:!0,iconOnly:!1}},n={args:{type:"danger",rounded:!1,iconOnly:!1}},a={args:{type:"success",rounded:!0,iconOnly:!0}},s={args:{type:"info",rounded:!1,iconOnly:!0}},o={args:{type:"warning",rounded:!0,iconOnly:!0}},t={args:{type:"light",rounded:!0,iconOnly:!1}},d={args:{type:"dark",rounded:!1,iconOnly:!1}};var i,l,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "primary",
    rounded: true,
    iconOnly: false
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,y,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    rounded: true,
    iconOnly: false
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var m,f,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "danger",
    rounded: false,
    iconOnly: false
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var O,x,h;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "success",
    rounded: true,
    iconOnly: true
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,w,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "info",
    rounded: false,
    iconOnly: true
  }
}`,...(R=(w=s.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var I,N,k;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "warning",
    rounded: true,
    iconOnly: true
  }
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var B,D,V;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "light",
    rounded: true,
    iconOnly: false
  }
}`,...(V=(D=t.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var C,T,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "dark",
    rounded: false,
    iconOnly: false
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const z=["Primary","SecondaryRounded","DangerNotRounded","SuccessIconOnly","InfoNotRoundedIconOnly","WarningRoundedIconOnly","Light","DarkNotRounded"];export{n as DangerNotRounded,d as DarkNotRounded,s as InfoNotRoundedIconOnly,t as Light,e as Primary,r as SecondaryRounded,a as SuccessIconOnly,o as WarningRoundedIconOnly,z as __namedExportsOrder,q as default};
