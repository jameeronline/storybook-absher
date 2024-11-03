const N=({varient:H="basic",size:O="medium",label:r="Label",type:j="primary",max:q=100,value:s=0,rounded:A=!1})=>{let e="",G={primary:"[&::-webkit-progress-bar]:bg-primary-100 [&::-webkit-progress-value]:bg-primary-800",secondary:"[&::-webkit-progress-bar]:bg-secondary-100 [&::-webkit-progress-value]:bg-secondary-500",danger:"[&::-webkit-progress-bar]:bg-danger-100 [&::-webkit-progress-value]:bg-danger-500",info:"[&::-webkit-progress-bar]:bg-info-100 [&::-webkit-progress-value]:bg-info-500",warning:"[&::-webkit-progress-bar]:bg-warning-100 [&::-webkit-progress-value]:bg-warning-500",success:"[&::-webkit-progress-bar]:bg-success-100 [&::-webkit-progress-value]:bg-success-500"};const J={small:"h-1",medium:"h-2",large:"h-4",xlarge:"h-6"},K=A?"rounded-full":"rounded",a=`<progress aria-label="loading ${s}%" max="${q}" value="${s}" class="${J[O]} w-full overflow-hidden ${K} ${G[j]}"></progress>`;switch(H){case"basic":e=a;break;case"basicWithLabel":e=`<div class="relative w-full">
                          <label class="block mb-1 text-xs leading-none text-center text-slate-500">${r}</label>
                          ${a}
                        </div>`;break;case"labelInside":e=`<div class="relative w-full">
                          <label class="absolute top-1/2 -translate-y-1/2 left-2 w-1/2 mb-0 text-xs leading-none text-white"><span class="sr-only">${r}</span>${s}%</label>
                          ${a}
                        </div>`;break;case"trailingLabel":e=`<div class="flex items-center w-full gap-2">
                          <label class="order-2 text-xs text-slate-500"><span class="sr-only">${r}</span>${s}%</label>
                          ${a}
                        </div>`;break;case"trailingIcon":e=`<div class="flex items-center w-full gap-2">
                          <label class="order-2 text-xs">
                            <span class="sr-only">${r}</span>
                            <i class="bi bi-exclamation-triangle-fill w-4 h-4"></i>
                          </label>
                          ${a}
                        </div>`;break}return e},Q={title:"Feedback / ProgressBar",tags:["autodocs"],parameters:{docs:{description:{component:"description about the progress bar component"}}},render:N,argTypes:{varient:{control:{type:"select"},options:["basic","basicWithLabel","labelInside","trailingLabel","trailingIcon"],description:"Type of the progress bar",defaultValue:"basic"},type:{control:{type:"select"},options:["primary","secondary","danger","info","warning","success"],description:"Type of the progress bar",defaultValue:"basic"},size:{control:{type:"select"},options:["small","medium","large","xlarge"],description:"Size of the progress bar",defaultValue:"medium"},label:{control:"text",description:"Label for the progress bar",defaultValue:"Label"},max:{control:{type:"number"},description:"Maximum value of the progress bar",defaultValue:100},value:{control:{type:"number"},description:"Current value of the progress bar",defaultValue:0},rounded:{control:"boolean",description:"Current value of the progress bar",defaultValue:!1}},args:{varient:"basic",size:"medium",type:"primary",value:50,label:"Label",max:100,rounded:!1}},n={args:{varient:"basic",size:"medium",value:25}},l={args:{type:"danger",value:75}},o={args:{type:"secondary",value:25}},t={args:{type:"info",value:25}},i={args:{type:"warning",size:"large",value:25}},c={args:{varient:"basicWithLabel",size:"medium",label:"Loading..",value:40}},g={args:{varient:"labelInside",size:"large",type:"info",label:"Uploading",value:30}},p={args:{varient:"trailingLabel",size:"large",type:"danger",label:"Uploading",value:90}},d={args:{varient:"trailingIcon",size:"xlarge",type:"warning",label:"Uploading",value:45}};var b,u,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    varient: "basic",
    size: "medium",
    value: 25
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,y,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "danger",
    value: 75
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,x,h;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    value: 25
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var L,k,z;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "info",
    value: 25
  }
}`,...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var $,I,S;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "warning",
    size: "large",
    value: 25
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,W,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    varient: "basicWithLabel",
    size: "medium",
    label: "Loading..",
    value: 40
  }
}`,...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var B,U,C;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    varient: "labelInside",
    size: "large",
    type: "info",
    label: "Uploading",
    value: 30
  }
}`,...(C=(U=g.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var M,P,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    varient: "trailingLabel",
    size: "large",
    type: "danger",
    label: "Uploading",
    value: 90
  }
}`,...(_=(P=p.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var D,E,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    varient: "trailingIcon",
    size: "xlarge",
    type: "warning",
    label: "Uploading",
    value: 45
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const R=["Basic","Danger","Secondary","Info","Warning","BasicWithLabel","LabelInside","TrailingLabel","TrailingIcon"];export{n as Basic,c as BasicWithLabel,l as Danger,t as Info,g as LabelInside,o as Secondary,d as TrailingIcon,p as TrailingLabel,i as Warning,R as __namedExportsOrder,Q as default};
