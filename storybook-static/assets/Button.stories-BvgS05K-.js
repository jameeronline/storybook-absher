import{c as me}from"./Button-CbVJIYoO.js";import"./index-CS7R4WcE.js";const he={title:"Components / Buttons",tags:["autodocs"],render:me,parameters:{docs:{description:{component:"The button component is a versatile UI element that supports multiple types, sizes, and configurations. It can be rendered as a button, link, or input and allows for customization with icons, labels, full-width styles, and more."}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#000000"}]}},argTypes:{as:{control:{type:"select"},options:["button","input","a"],defaultValue:"button",description:"Select the type of element."},href:{control:"text",defaultValue:"Button",description:"The URL if the button is rendered as a link.",if:{arg:"as",eq:"a"}},label:{control:"text",defaultValue:"Button",description:"The text label displayed inside the button."},type:{control:{type:"select"},options:["primary","secondary","tertiary","danger","success","info","warning","light","dark"],defaultValue:"primary",description:"The style type of the button, which determines its color and background."},size:{control:{type:"select"},options:["small","medium","large","xlarge"],defaultValue:"large",description:"The size of the button (affects height, padding, and font)."},link:{control:"boolean",defaultValue:!1,description:"change the look of the button like link"},rounded:{control:"boolean",defaultValue:!1,description:"Fully rounded corners (rounded-full) or standard rounded corners."},outline:{control:"boolean",defaultValue:!1,description:"If true, the button will have an outline style with a transparent background."},icon:{control:"boolean",defaultValue:!1,description:"If true, an icon will be displayed inside the button."},iconName:{control:{type:"select"},options:["bi-alarm","bi-bag","bi-bell","bi-book","bi-camera","bi-cloud","bi-gear","bi-heart","bi-house","bi-star"],defaultValue:"bi-star",description:"The name of the Bootstrap icon to be displayed inside the button.",if:{arg:"icon",truthy:!0}},iconPosition:{control:{type:"radio"},options:["left","right"],defaultValue:"left",description:"Position of the icon relative to the button label (left or right).",if:{arg:"icon",truthy:!0}},iconOnly:{control:"boolean",defaultValue:!1,description:"If true, the button will display only an icon with no text label.",if:{arg:"icon",truthy:!0}},fullwidth:{control:"boolean",defaultValue:!1,description:"If true, the button will take up the full width of its container."}},args:{as:"button",href:void 0,label:"Button",type:"primary",size:"medium",outline:!1,rounded:!1,link:!1,icon:!1,iconName:"bi-star",iconPosition:"left",iconOnly:!1,fullwidth:!1}},e={args:{type:"primary",size:"large"},parameters:{docs:{description:{story:"A large primary button for prominent actions."}}}},r={args:{type:"primary",size:"medium"}},t={args:{type:"primary",size:"small"}},a={args:{type:"secondary",size:"large"}},n={args:{type:"tertiary",size:"large"}},o={args:{type:"danger",size:"large"}},s={args:{type:"success",size:"large"}},i={args:{type:"info",size:"large"}},l={args:{type:"warning",size:"large"}},c={args:{type:"light",size:"large"}},u={args:{type:"dark",size:"large"}},d={args:{size:"large",link:!0}},p={args:{type:"primary",size:"large",fullwidth:!0}},g={args:{type:"danger",size:"large",fullwidth:!0}},m={args:{type:"success",size:"large",icon:!0,iconOnly:!0,iconName:"bi-heart"}},y={args:{type:"warning",size:"large",outline:!0}},f={args:{type:"light",size:"large",rounded:!0}};var h,b,B;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "primary",
    size: "large"
  },
  parameters: {
    docs: {
      description: {
        story: "A large primary button for prominent actions."
      }
    }
  }
}`,...(B=(b=e.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var z,L,w;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: "primary",
    size: "medium"
  }
}`,...(w=(L=r.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var S,k,V;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "primary",
    size: "small"
  }
}`,...(V=(k=t.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var P,I,O;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    size: "large"
  }
}`,...(O=(I=a.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,x,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "tertiary",
    size: "large"
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var D,F,N;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: "danger",
    size: "large"
  }
}`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var W,R,_;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "success",
    size: "large"
  }
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var A,M,U;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "info",
    size: "large"
  }
}`,...(U=(M=i.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var q,C,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: "warning",
    size: "large"
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var j,G,H;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "light",
    size: "large"
  }
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: "dark",
    size: "large"
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: "large",
    link: true
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "primary",
    size: "large",
    fullwidth: true
  }
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: "danger",
    size: "large",
    fullwidth: true
  }
}`,...(ne=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,se,ie;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: "success",
    size: "large",
    icon: true,
    iconOnly: true,
    iconName: "bi-heart"
  }
}`,...(ie=(se=m.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ce,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    type: "warning",
    size: "large",
    outline: true
  }
}`,...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,ge;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    type: "light",
    size: "large",
    rounded: true
  }
}`,...(ge=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const be=["PrimaryButtonLarge","PrimaryButtonMedium","PrimaryButtonSmall","SecondaryButtonLarge","TertiaryButtonLarge","DangerButtonLarge","SuccessButtonLarge","InfoButtonLarge","WarningButtonLarge","LightButtonLarge","DarkButtonLarge","LinkButtonLarge","FullwidthPrimaryButton","FullwidthDangerButton","IconOnlySuccessButton","OutlineWarningButton","RoundedLightButton"];export{o as DangerButtonLarge,u as DarkButtonLarge,g as FullwidthDangerButton,p as FullwidthPrimaryButton,m as IconOnlySuccessButton,i as InfoButtonLarge,c as LightButtonLarge,d as LinkButtonLarge,y as OutlineWarningButton,e as PrimaryButtonLarge,r as PrimaryButtonMedium,t as PrimaryButtonSmall,f as RoundedLightButton,a as SecondaryButtonLarge,s as SuccessButtonLarge,n as TertiaryButtonLarge,l as WarningButtonLarge,be as __namedExportsOrder,he as default};
