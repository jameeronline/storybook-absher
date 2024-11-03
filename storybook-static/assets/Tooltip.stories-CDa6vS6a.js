import{t as N}from"./config-4mfIS08Y.js";function Q({variant:r="primary",onlyIcon:q=!1,position:e="top",size:A="default",label:F="Hover me",tooltipText:G="I'm a tooltip"}){const J={small:"w-32 p-2 text-xs",default:"w-48 p-4 text-sm",large:"w-64 p-6 text-md"},K={primary:"bg-primary-700 text-white",secondary:"bg-secondary-600 text-white",tertiary:"bg-tertiary-600 text-white",danger:"bg-danger-500 text-white",info:"bg-info-500 text-white",warning:"bg-warning-500 text-white",success:"bg-success-500 text-white",dark:"bg-gray-600 text-white"},L={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",right:"left-full top-1/2 -translate-y-1/2 ml-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2"},o={primary:{top:"before:border-t-primary-700",right:"before:border-r-primary-700",bottom:"before:border-b-primary-700",left:"before:border-l-primary-700"},secondary:{top:"before:border-t-secondary-600",right:"before:border-r-secondary-600",bottom:"before:border-b-secondary-600",left:"before:border-l-secondary-600"},tertiary:{top:"before:border-t-tertiary-600",right:"before:border-r-tertiary-600",bottom:"before:border-b-tertiary-600",left:"before:border-l-tertiary-600"},danger:{top:"before:border-t-danger-500",right:"before:border-r-danger-500",bottom:"before:border-b-danger-500",left:"before:border-l-danger-500"},info:{top:"before:border-t-info-500",right:"before:border-r-info-500",bottom:"before:border-b-info-500",left:"before:border-l-info-500"},warning:{top:"before:border-t-warning-500",right:"before:border-r-warning-500",bottom:"before:border-b-warning-500",left:"before:border-l-warning-500"},success:{top:"before:border-t-success-500",right:"before:border-r-success-500",bottom:"before:border-b-success-500",left:"before:border-l-success-500"},dark:{top:"before:border-t-gray-600",right:"before:border-r-gray-600",bottom:"before:border-b-gray-600",left:"before:border-l-gray-600"}},M={top:`before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent ${o[r][e]}`,right:`before:top-1/2 before:right-full before:z-10 before:ml-2 before:-mt-2 before:border-y-8 before:border-r-8 before:border-y-transparent ${o[r][e]}`,bottom:`before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent ${o[r][e]}`,left:`before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent ${o[r][e]}`};return`
        <span class="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none" aria-describedby="tooltip-01">
            ${q?'<i class="bi bi-info-circle"></i>':F}
            <span role="tooltip" id="tooltip-01"
                class="invisible absolute ${L[e]} z-10 ${J[A]} rounded ${K[r]} opacity-0 transition-all
                before:invisible before:absolute before:z-10 ${M[e]}
                before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">
                ${G}
            </span>
        </span>
    `}const X={title:"Components/Tooltip",tags:["autodocs"],render:Q,argTypes:{variant:{control:{type:"select"},options:N,description:"Changes the visual style of the tooltip",defaultValue:"primary"},onlyIcon:{control:{type:"boolean"},description:"If true, the tooltip trigger will be an icon",defaultValue:!1},position:{control:{type:"select"},options:["top","right","bottom","left"],description:"The position of the tooltip relative to the trigger",defaultValue:"top"},size:{control:{type:"select"},options:["small","default","large"],description:"The size of the tooltip",defaultValue:"default"},label:{control:{type:"text"},description:"The label text of the tooltip trigger",defaultValue:"Hover me"},tooltipText:{control:{type:"text"},description:"The text content of the tooltip",defaultValue:"I'm a tooltip"}},args:{variant:"primary",onlyIcon:!1,position:"right",size:"default",label:"Hover me",tooltipText:"I'm a tooltip"}},t={args:{}},a={args:{variant:"primary"}},s={args:{variant:"secondary"}},n={args:{variant:"danger"}},i={args:{variant:"warning"}},b={args:{variant:"info"}},l={args:{variant:"success"}},c={args:{variant:"dark"}},f={args:{onlyIcon:!0}};var p,d,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,u,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,S,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "danger"
  }
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var z,T,$;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var k,V,D;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "info"
  }
}`,...(D=(V=b.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var P,H,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...(O=(H=l.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var _,C,W;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "dark"
  }
}`,...(W=(C=c.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var B,E,j;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    onlyIcon: true
  }
}`,...(j=(E=f.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const Y=["Default","Primary","Secondary","Danger","Warning","Info","Success","Dark","IconOnly"];export{n as Danger,c as Dark,t as Default,f as IconOnly,b as Info,a as Primary,s as Secondary,l as Success,i as Warning,Y as __namedExportsOrder,X as default};
