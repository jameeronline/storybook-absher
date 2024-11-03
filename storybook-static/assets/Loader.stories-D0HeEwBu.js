import{c as W}from"./index-CS7R4WcE.js";import{b as O}from"./config-4mfIS08Y.js";const T=({size:D="medium",type:I="circle",variant:V="primary"})=>`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title-04a desc-04a" aria-live="polite" aria-busy="true"
        class="${W({base:"",variants:{size:{small:"w-6 h-6",medium:"w-8 h-8",large:"w-10 h-10",xlarge:"w-12 h-12"},type:{primary:"stroke-primary-800",secondary:"stroke-secondary-500",danger:"stroke-danger-500",success:"stroke-success-500",info:"stroke-info-500",warning:"stroke-warning-500"}}})({size:D,type:V})} animate-spin">
        <title id="title-04a">Loading</title>
        <desc id="desc-04a">Loading spinner</desc>
        ${I==="circle"?`<circle cx="12" cy="12" r="10" class="stroke-slate-200" stroke-width="4" />
               <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" stroke-width="4" />`:`<rect x="2" y="2" width="20" height="20" rx="5" class="stroke-slate-200" stroke-width="4" />
               <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" stroke-width="4" />`}
      </svg>
    `,j={title:"Components/Loader",render:T,argTypes:{size:{control:{type:"select"},options:["small","medium","large","xlarge"],description:"Size of the spinner",defaultValue:"medium"},type:{control:{type:"radio"},options:["circle","square"],description:"Shape of the spinner",defaultValue:"circle"},variant:{control:{type:"select"},options:O,description:"Color variant of the spinner",defaultValue:"primary"}},args:{size:"medium",type:"circle",variant:"primary"}},e={args:{size:"small",type:"circle",variant:"primary"},title:"Small Circle Spinner - Primary"},r={args:{size:"medium",type:"circle",variant:"success"},title:"Medium Circle Spinner - Success"},a={args:{size:"large",type:"circle",variant:"danger"},title:"Large Circle Spinner - Danger"},s={args:{size:"xlarge",type:"circle",variant:"info"},title:"XL Circle Spinner - Info"},n={args:{size:"small",type:"square",variant:"secondary"},title:"Small Square Spinner - Secondary"},i={args:{size:"medium",type:"square",variant:"warning"},title:"Medium Square Spinner - Warning"},t={args:{size:"large",type:"square",variant:"success"},title:"Large Square Spinner - Success"},c={args:{size:"xlarge",type:"square",variant:"primary"},title:"XL Square Spinner - Primary"};var o,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: "small",
    type: "circle",
    variant: "primary"
  },
  title: "Small Circle Spinner - Primary"
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "medium",
    type: "circle",
    variant: "success"
  },
  title: "Medium Circle Spinner - Success"
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var S,g,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "large",
    type: "circle",
    variant: "danger"
  },
  title: "Large Circle Spinner - Danger"
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "xlarge",
    type: "circle",
    variant: "info"
  },
  title: "XL Circle Spinner - Info"
}`,...(q=(v=s.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var L,z,f;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "small",
    type: "square",
    variant: "secondary"
  },
  title: "Small Square Spinner - Secondary"
}`,...(f=(z=n.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var h,w,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "medium",
    type: "square",
    variant: "warning"
  },
  title: "Medium Square Spinner - Warning"
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,M,b;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: "large",
    type: "square",
    variant: "success"
  },
  title: "Large Square Spinner - Success"
}`,...(b=(M=t.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var P,X,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: "xlarge",
    type: "square",
    variant: "primary"
  },
  title: "XL Square Spinner - Primary"
}`,...(_=(X=c.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};const N=["CircleSpinnerSmallPrimary","CircleSpinnerMediumSuccess","CircleSpinnerLargeDanger","CircleSpinnerXLInfo","SquareSpinnerSmallSecondary","SquareSpinnerMediumWarning","SquareSpinnerLargeSuccess","SquareSpinnerXLPrimary"],F=Object.freeze(Object.defineProperty({__proto__:null,CircleSpinnerLargeDanger:a,CircleSpinnerMediumSuccess:r,CircleSpinnerSmallPrimary:e,CircleSpinnerXLInfo:s,SquareSpinnerLargeSuccess:t,SquareSpinnerMediumWarning:i,SquareSpinnerSmallSecondary:n,SquareSpinnerXLPrimary:c,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{F as L};
