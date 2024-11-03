import{b as H}from"./config-4mfIS08Y.js";function T({size:l="default",onlyIcon:t=!1,variant:D="primary",label:V="Upload a file"}){const O={small:"h-8 px-4 text-xs",default:"h-12 px-6 text-sm",large:"h-16 px-8 text-lg"},F={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 peer-disabled:bg-primary-300",secondary:"bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 peer-disabled:bg-secondary-300",danger:"bg-danger-500 hover:bg-danger-600 focus:bg-danger-700 peer-disabled:bg-danger-300",info:"bg-info-500 hover:bg-info-600 focus:bg-info-700 peer-disabled:bg-info-300",warning:"bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 peer-disabled:bg-warning-300",success:"bg-success-500 hover:bg-success-600 focus:bg-success-700 peer-disabled:bg-success-300"},i=`<i class="bi bi-upload ${{small:"text-sm",default:"text-xl",large:"text-3xl"}[l]}"></i>`;return`
      <div class="relative inline-flex items-center w-full gap-2 my-6 text-sm border rounded  border-slate-200 text-slate-500">
        <input id="file-upload" name="file-upload" type="file" class="peer order-2 [&::file-selector-button]:hidden" />
        <label for="file-upload"
          class="inline-flex items-center justify-center ${O[l]} ${F[D]} gap-3 text-white font-medium tracking-wide transition duration-300 rounded rounded-e-none cursor-pointer whitespace-nowrap focus-visible:outline-none peer-disabled:cursor-not-allowed ">
          ${t?i:`<span class="order-2">${V}</span>`}
          ${t?"":`<span class="relative">${i}</span>`}
        </label>
      </div>
    `}const j={title:"Form Elements / FileUpload",tags:["autodocs"],render:T,argTypes:{size:{control:{type:"select"},options:["small","default","large"],description:"Determines the size of the file upload button",defaultValue:"default"},onlyIcon:{control:{type:"boolean"},description:"Determines if the button only shows an icon",defaultValue:!1},rounded:{control:{type:"boolean"},description:"Determines if the button only shows an icon",defaultValue:!1},variant:{control:{type:"select"},options:H,description:"Determines the color style of the file upload button",defaultValue:"primary"},label:{control:{type:"text"},description:"The label text of the file upload button",defaultValue:"Upload a file"}},args:{size:"default",onlyIcon:!1,rounded:!1,variant:"primary",label:"Upload a file"}},e={args:{size:"default",onlyIcon:!1,variant:"primary",label:"Upload a file"}},a={args:{size:"small",onlyIcon:!1,variant:"primary",label:"Upload a file"}},r={args:{size:"large",onlyIcon:!1,variant:"primary",label:"Upload a file"}},n={args:{size:"default",onlyIcon:!0,variant:"primary"}},o={args:{size:"default",onlyIcon:!1,variant:"secondary",label:"Upload a file"}},s={args:{size:"default",onlyIcon:!0,variant:"secondary"}};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "default",
    onlyIcon: false,
    variant: "primary",
    label: "Upload a file"
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,f,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "small",
    onlyIcon: false,
    variant: "primary",
    label: "Upload a file"
  }
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,y,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "large",
    onlyIcon: false,
    variant: "primary",
    label: "Upload a file"
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,h,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "default",
    onlyIcon: true,
    variant: "primary"
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,z,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: "default",
    onlyIcon: false,
    variant: "secondary",
    label: "Upload a file"
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var U,w,$;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: "default",
    onlyIcon: true,
    variant: "secondary"
  }
}`,...($=(w=s.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};const k=["Default","Small","Large","OnlyIcon","Secondary","OnlyIconSecondary"];export{e as Default,r as Large,n as OnlyIcon,s as OnlyIconSecondary,o as Secondary,a as Small,k as __namedExportsOrder,j as default};
