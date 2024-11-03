import{c as u}from"./Button-CbVJIYoO.js";import{c as Y}from"./index-CS7R4WcE.js";import{s as q}from"./config-4mfIS08Y.js";const z=({type:e,title:o,message:i,leadingIcon:c,dismissIcon:l,actionButtons:d,primaryButtonLabel:D,linkButtonLabel:W})=>{const k=Y({slots:{base:"flex flex-col w-full px-4 py-3 border rounded",contentWrapper:"flex gap-4 items-center",title_slot:"flex-1 font-semibold mb-1",message_slot:"text-md",leadingIcon_slot:"",dismissIcon_slot:"inline-flex items-center justify-center h-8 w-8 text-xs font-medium rounded-full",actionButtons_slot:"flex gap-2 mt-4"},variants:{type:{success:{base:"border-success-100 bg-success-50 text-success-500",dismissIcon_slot:"text-success-500 hover:bg-success-100"},danger:{base:"border-danger-100 bg-danger-50 text-danger-500",dismissIcon_slot:"text-danger-500 hover:bg-danger-100"},info:{base:"border-info-100 bg-info-50 text-info-500",dismissIcon_slot:"text-info-500 hover:bg-info-100"},warning:{base:"border-warning-100 bg-warning-50 text-warning-500",dismissIcon_slot:"text-warning-500 hover:bg-warning-100"}}},compoundVariants:[{leadingIcon:!0,class:{base:"py-4",actionButtons_slot:"ps-10",contentWrapper:"items-center"}},{leadingIcon:!1,class:{contentWrapper:"items-center h-10"}},{title:!0,class:{contentWrapper:"items-start"}}]}),V={success:"bi-check-circle",danger:"bi-x-circle",info:"bi-info-circle",warning:"bi-exclamation-circle"},{base:P,contentWrapper:S,title_slot:L,message_slot:C,leadingIcon_slot:M,dismissIcon_slot:T,actionButtons_slot:O}=k({type:e,title:o,message:i,leadingIcon:c,dismissIcon:l,actionButtons:d});return`
    <div class="${P()}" role="alert">
      <div class="${S()}">
        ${c?`<i class="bi ${V[e]} text-2xl"></i>`:""}
        <div class="flex-1">
          ${o?`<h3 class="${L()}">${o}</h3>`:""}
          ${i?`<p class="${C()}">${i}</p>`:""}
        </div>  
        ${l?`
          <button aria-label="Close" class="${T()}">
            <i class="bi bi-x-lg text-xl"></i>
          </button>`:""}
      </div>
      ${d?`
        <div class="${O()}">
          ${u({as:"button",label:D,type:e,size:"small"})}
          ${u({as:"a",label:W,type:e,size:"small",link:!0})}
        </div>`:""}
    </div>
  `},N={title:"Components/Alerts",tags:["autodocs"],render:z,argTypes:{type:{control:"select",options:q,description:"Type of alert",defaultValue:"success"},title:{control:"text",description:"Title of the alert",defaultValue:"Alert Title"},message:{control:"text",description:"Main content of the alert",defaultValue:"You successfully read this important alert message. Green often indicates something successful or positive."},leadingIcon:{control:"boolean",description:"Display the leading icon",defaultValue:!1},dismissIcon:{control:"boolean",description:"Display the dismiss icon",defaultValue:!1},actionButtons:{control:"boolean",description:"Display action buttons",defaultValue:!1},primaryButtonLabel:{control:"text",description:"Label for the primary action button",defaultValue:"Proceed",if:{arg:"actionButtons",truthy:!0}},linkButtonLabel:{control:"text",description:"Label for the link action button",defaultValue:"Cancel",if:{arg:"actionButtons",truthy:!0}}},args:{type:"danger",title:"",message:"An error occurred. Please try again or contact support if the problem persists.",leadingIcon:!1,dismissIcon:!1,actionButtons:!1,primaryButtonLabel:"Proceed",linkButtonLabel:"Cancel"}},s={args:{type:"danger"}},t={args:{type:"success",leadingIcon:!0,message:"Operation completed successfully. Your changes have been saved."}},n={args:{type:"info",message:"Please be aware of upcoming maintenance scheduled for this weekend.",dismissIcon:!0}},a={args:{type:"warning",leadingIcon:!0,dismissIcon:!0,message:"Please check the input and ensure all required fields are filled out correctly."}},r={args:{type:"danger",title:"Danger Alert",leadingIcon:!0,actionButtons:!0}};var g,p,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "danger"
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,b,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: "success",
    leadingIcon: true,
    message: "Operation completed successfully. Your changes have been saved."
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,y,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "info",
    message: "Please be aware of upcoming maintenance scheduled for this weekend.",
    dismissIcon: true
  }
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var A,v,_;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "warning",
    leadingIcon: true,
    dismissIcon: true,
    message: "Please check the input and ensure all required fields are filled out correctly."
  }
}`,...(_=(v=a.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var B,$,w;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "danger",
    title: "Danger Alert",
    leadingIcon: true,
    actionButtons: true
  }
}`,...(w=($=r.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const F=["DangerAlert","SuccessAlert","InfoAlert","WarningAlertWithDismissal","DangerAlertWithIconAndButtons"];export{s as DangerAlert,r as DangerAlertWithIconAndButtons,n as InfoAlert,t as SuccessAlert,a as WarningAlertWithDismissal,F as __namedExportsOrder,N as default};
