const L=({withIcon:c=!1,outline:D=!1,elevated:E=!1,content:O=[],toggleIcon:V="bi-x"})=>{const j=c?"text-slate-700 group-hover:text-slate-900 flex items-center gap-3":"text-slate-700 group-hover:text-slate-900",H=D?"border border-slate-200":"",U=E?"shadow-lg":"",_={"bi-x":"bi bi-x","bi-chevron-down":"bi bi-chevron-down","bi-plus":"bi bi-plus","bi-arrow-down":"bi bi-arrow-down","bi-caret-down":"bi bi-caret-down"};return`
    <section class="w-full divide-y rounded divide-slate-200 ${H} ${U}">
      ${O.map((r,B)=>`
            <details class="p-4 group" ${B===0?"open":""}>
              <summary class="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer ${j} focus-visible:outline-none transition-colors duration-300">
                ${c?`<i class="${r.icon} text-2xl text-primary-800"></i>`:""}
                ${r.title}
                <i class="${_[V]} absolute right-0 text-xl transition duration-300 top-1 shrink-0 group-open:rotate-180"></i>
              </summary>
              <p class="mt-4 text-slate-500 transition duration-300 ">${r.description}</p>
            </details>
          `).join("")}
    </section>
  `},q={title:"Components/Accordion",tags:["autodocs"],render:L,argTypes:{withIcon:{control:{type:"boolean"},defaultValue:!1,description:"Shows an icon beside the accordion title"},outline:{control:{type:"boolean"},defaultValue:!1,description:"Adds an outline around the accordion"},elevated:{control:{type:"boolean"},defaultValue:!1,description:"Adds a shadow effect for elevation"},toggleIcon:{control:{type:"select"},options:["bi-x","bi-chevron-down","bi-plus","bi-arrow-down","bi-caret-down"],defaultValue:"bi-x",description:"Select the icon used for accordion toggle"},content:{control:{type:"object"},description:"An array of accordion items containing icon, title, and description",defaultValue:[{icon:"bi bi-info-circle",title:"How does TailwindCSS work?",description:"Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles, and then writing them to a static CSS file."},{icon:"bi bi-info-circle",title:"How do I install TailwindCSS?",description:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. Install tailwindcss via npm, and create your tailwind.config.js file."}]}},args:{content:[{icon:"bi bi-palette",title:"What is a Design System?",description:"A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications."},{icon:"bi bi-columns-gap",title:"Why Use a Design System?",description:"Design systems ensure consistency across multiple projects, improve efficiency in development, and provide a shared language between designers and developers."},{icon:"bi bi-layers",title:"Core Components of a Design System",description:"A design system consists of UI components, patterns, and guidelines for interaction, design tokens, and documentation that all teams can refer to."},{icon:"bi bi-code-slash",title:"How to Implement a Design System",description:"Implementing a design system requires setting up tools like Storybook for UI documentation, ensuring your components are accessible, and integrating with your development pipeline."},{icon:"bi bi-card-list",title:"Design Tokens Explained",description:"Design tokens are a system of variables used to store design-related values such as colors, typography, and spacing, allowing for consistency across platforms and products."}],withIcon:!1,outline:!1,elevated:!1,toggleIcon:"bi-chevron-down"}},e={args:{withIcon:!1,outline:!1,elevated:!1}},t={args:{withIcon:!0}},o={args:{outline:!0}},s={args:{elevated:!0}},n={args:{withIcon:!0,outline:!0}},a={args:{withIcon:!0,elevated:!0}},i={args:{toggleIcon:"bi-arrow-down"}};var l,d,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    withIcon: false,
    outline: false,
    elevated: false
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    withIcon: true
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,f,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    outline: true
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,y,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    elevated: true
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var I,S,x;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    withIcon: true,
    outline: true
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,T,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    withIcon: true,
    elevated: true
  }
}`,...(k=(T=a.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var $,A,W;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    toggleIcon: "bi-arrow-down"
  }
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const J=["Basic","WithIcon","Outlined","Elevated","WithIconOutlined","WithIconElevated","CustomToggleIcon"];export{e as Basic,i as CustomToggleIcon,s as Elevated,o as Outlined,t as WithIcon,a as WithIconElevated,n as WithIconOutlined,J as __namedExportsOrder,q as default};
