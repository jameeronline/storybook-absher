import{c as S}from"./Button-CbVJIYoO.js";import{t as k}from"./config-4mfIS08Y.js";import"./index-CS7R4WcE.js";const v=({description:m="With 20 new components!",isTrail:b=!1,leadingButton:x=!0,leadingButtonText:y="Version 3.40",buttonStyle:T="primary",anchorText:w="Check what's new",link:C="#",rounded:V=!1})=>{const B=S({rounded:V,type:T,label:y});return`
      <div class="inline-flex items-center gap-4 rounded border border-slate-200 bg-white/50 p-0.5 ${b?"flex-row-reverse pl-4":"pr-4"} shadow-sm shadow-slate-700/10">
        ${x?`${B}`:""}
        <div class="flex items-center gap-1 text-slate-500">
          <span class="hidden md:block">${m}</span>
          <a href="${C}" class="inline-flex items-center justify-center gap-2 tracking-wide transition duration-300 justify-self-center text-emerald-500 hover:text-emerald-600 focus:text-emerald-700 focus-visible:outline-none">
            <span>${w}</span>
            <span class="relative only:-mx-6">
                <i class="bi bi-arrow-right text-2xl"></i>
            </span>
          </a>
        </div>
      </div>
    `},R={title:"Feedback / Notification Chip",tags:["autodocs"],render:v,argTypes:{description:{control:"text",description:"Text shown next to the button",defaultValue:"With 20 new components!"},isTrail:{control:"boolean",description:"Toggles the placeholder of the leading button",defaultValue:!0},leadingButton:{control:"boolean",description:"Toggles the visibility of the leading button",defaultValue:!0},leadingButtonText:{control:"text",description:"Text displayed on the leading button",defaultValue:"Version 3.40"},buttonStyle:{control:{type:"select"},options:k,description:"Style of the leading button",defaultValue:"primary"},anchorText:{control:"text",description:"Text for the anchor link",defaultValue:"Check what's new"},rounded:{control:"boolean",description:"Toggles the visibility of the leading button",defaultValue:!0},link:{control:"text",description:"URL for the anchor link",defaultValue:"#"}},args:{description:"With 20 new components!",leadingButton:!0,leadingButtonText:"Version 3.40",buttonStyle:"primary",rounded:!1,anchorText:"Check what's new",link:"#",isTrail:!1}},e={args:{}},t={args:{buttonStyle:"info"}},o={args:{buttonStyle:"danger"}},r={args:{isTrail:!0}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    buttonStyle: "info"
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    buttonStyle: "danger"
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,f,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isTrail: true
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const W=["DefaultChip","RoundedButtonChip","FullButtonChip","TrailButtonChip"];export{e as DefaultChip,o as FullButtonChip,t as RoundedButtonChip,r as TrailButtonChip,W as __namedExportsOrder,R as default};
