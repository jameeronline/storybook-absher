import{c as I}from"./Button-CbVJIYoO.js";import"./index-CS7R4WcE.js";const D={title:"Components / Button Group",tags:["autodocs"],render:({numberOfButtons:L,buttonTypes:h,iconsOnly:x,spacing:G,buttonLabels:P})=>{const S={none:"space-x-0",small:"space-x-2",medium:"space-x-4",large:"space-x-6",xlarge:"space-x-8"},w=Array.from({length:L}).map((V,s)=>I({label:P[s]||`Button ${s+1}`,type:h[s]||"primary",iconOnly:x,iconName:"bi-star",iconPosition:"left",size:"medium",rounded:!1,outline:!1,fullwidth:!1}));return`
      <div class="inline-flex ${S[G]}">
        ${w.join("")}
      </div>
    `},argTypes:{numberOfButtons:{control:{type:"number"},defaultValue:3,description:"The number of buttons in the group."},buttonTypes:{control:{type:"object"},defaultValue:["primary","secondary","tertiary"],description:"An array defining the types for each button."},iconsOnly:{control:{type:"boolean"},defaultValue:!1,description:"If true, all buttons will display only icons."},spacing:{control:{type:"select"},options:["none","small","medium","large","xlarge"],defaultValue:"medium",description:"The spacing between buttons."},buttonLabels:{control:{type:"object"},defaultValue:["Button 1","Button 2","Button 3"],description:"An array defining the labels for each button."}},args:{numberOfButtons:3,buttonTypes:["primary","secondary","tertiary"],iconsOnly:!1,spacing:"medium",buttonLabels:["Button 1","Button 2","Button 3"]}},r={args:{numberOfButtons:3,buttonTypes:["primary","primary","primary"],spacing:"medium",buttonLabels:["Primary 1","Primary 2","Primary 3"]}},e={args:{numberOfButtons:3,buttonTypes:["primary","secondary","tertiary"],spacing:"large",buttonLabels:["Primary","Secondary","Tertiary"]}},n={args:{numberOfButtons:3,buttonTypes:["primary","success","danger"],iconsOnly:!0,spacing:"small",buttonLabels:["","",""]}},t={args:{numberOfButtons:4,buttonTypes:["info","warning","success","danger"],spacing:"xlarge",buttonLabels:["Info","Warning","Success","Danger"]}},a={args:{numberOfButtons:2,buttonTypes:["light","dark"],spacing:"none",buttonLabels:["Light","Dark"]}};var o,u,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    numberOfButtons: 3,
    buttonTypes: ["primary", "primary", "primary"],
    spacing: "medium",
    buttonLabels: ["Primary 1", "Primary 2", "Primary 3"]
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    numberOfButtons: 3,
    buttonTypes: ["primary", "secondary", "tertiary"],
    spacing: "large",
    buttonLabels: ["Primary", "Secondary", "Tertiary"]
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,y,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    numberOfButtons: 3,
    buttonTypes: ["primary", "success", "danger"],
    iconsOnly: true,
    spacing: "small",
    buttonLabels: ["", "", ""] // Labels are empty as this is icon-only
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var d,g,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    numberOfButtons: 4,
    buttonTypes: ["info", "warning", "success", "danger"],
    spacing: "xlarge",
    buttonLabels: ["Info", "Warning", "Success", "Danger"]
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var B,O,T;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    numberOfButtons: 2,
    buttonTypes: ["light", "dark"],
    spacing: "none",
    buttonLabels: ["Light", "Dark"]
  }
}`,...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const _=["PrimaryGroup","MixedGroup","IconOnlyGroup","SpacedGroup","CompactGroup"];export{a as CompactGroup,n as IconOnlyGroup,e as MixedGroup,r as PrimaryGroup,t as SpacedGroup,_ as __namedExportsOrder,D as default};
