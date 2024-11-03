import{c as k}from"./index-CS7R4WcE.js";import{b as C}from"./config-4mfIS08Y.js";const _=({as:f="image",type:h="primary",size:y="large",outline:v="false",rounded:x="false",badge:w=!1,badgePosition:A,grouped:P})=>{const V=k({slots:{base:"relative inline-flex items-center justify-center text-white",content:"",icon:"bi bi-alarm",text:"font-bold",image:"max-w-full rounded",badgeIndicator:"absolute right-0 inline-block w-2 h-2 bg-red-600 rounded-full"},variants:{type:{primary:{base:"bg-primary-500"},secondary:{base:"bg-secondary-500"},tertiary:{base:"bg-tertiary-500"},danger:{base:"bg-danger-500"},success:{base:"bg-success-500"},info:{base:"bg-info-500"},warning:{base:"bg-warning-500"}},size:{small:{base:"w-6 h-6",content:"text-xs"},medium:{base:"w-8 h-8",content:"text-sm"},large:{base:"w-10 h-10",content:"text-lg"},xlarge:{base:"w-12 h-12",content:"text-2xl"}},rounded:{true:{base:"rounded-full"},false:{base:"rounded"}},outline:{true:{base:"border-2 border-white"}},badgePosition:{top:{badgeIndicator:"-top-1 -right-1"},bottom:{badgeIndicator:"-bottom-1 -right-1"}},group:{true:{base:"stacked-avatars"}}},compoundVariants:[{rounded:!0,class:{image:"rounded-full"}}]}),{base:I,image:T,icon:$,text:z,badgeIndicator:S}=V({type:h,size:y,rounded:x,outline:v,grouped:P,badgePosition:A}),W={image:`<img src="https://i.pravatar.cc/48?img=1" alt="user name" title="user name" width="48" height="48" class="${T()}" />`,icon:`<i class="${$()}"></i>`,text:`<span class="${z()}">JD</span>`};return`
      <div class="${I()}">
        ${W[f]}
        ${w?`<span class="${S()}"></span>`:""}
      </div>
    `},D={title:"Components / Avatar",tags:["autodocs"],render:_,argTypes:{as:{control:{type:"select"},options:["image","icon","text"],defaultValue:"image",description:"The type of content displayed in the avatar (image, icon, or text)."},type:{control:{type:"select"},options:C,defaultValue:"primary",description:"The type of content displayed in the avatar (image, icon, or text)."},size:{control:{type:"select"},options:["small","medium","large","xlarge"],defaultValue:"medium",description:"The size of the avatar (small, medium, large or xlarge)."},rounded:{control:{type:"boolean"},defaultValue:!1,description:"Whether the avatar should have rounded."},outline:{control:{type:"boolean"},defaultValue:!1,description:"Whether the avatar should have an outline."},badge:{control:{type:"boolean"},defaultValue:!1,description:"Whether to display a badge on the avatar."},badgePosition:{control:{type:"select"},if:{arg:"badge"},options:["top","bottom"],defaultValue:"top",description:"Position of the badge (top or bottom right corner)."},grouped:{control:{type:"boolean"},defaultValue:!1,description:"Whether the avatar is part of a stacked group of avatars."}},args:{as:"image",type:"primary",size:"large",outline:!1,rounded:!1,grouped:!1,badge:!1,badgePosition:"top"}},e={args:{as:"image",outline:!1,grouped:!1,badge:!1,badgePosition:"top"}},a={args:{as:"icon",outline:!0,grouped:!1,badge:!0,badgePosition:"bottom"}},t={args:{as:"text",outline:!0,grouped:!0,badge:!0,badgePosition:"top"}},o={args:{as:"image",outline:!1,badge:!1,grouped:!0}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    as: "image",
    outline: false,
    grouped: false,
    badge: false,
    badgePosition: "top"
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: "icon",
    outline: true,
    grouped: false,
    badge: true,
    badgePosition: "bottom"
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,c,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    as: "text",
    outline: true,
    grouped: true,
    badge: true,
    badgePosition: "top"
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,b,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: "image",
    outline: false,
    badge: false,
    grouped: true
  }
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const E=["ImageAvatar","IconAvatar","TextAvatar","GroupedAvatars"];export{o as GroupedAvatars,a as IconAvatar,e as ImageAvatar,t as TextAvatar,E as __namedExportsOrder,D as default};
