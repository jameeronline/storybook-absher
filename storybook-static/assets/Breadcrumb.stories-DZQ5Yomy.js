const V=({links:a,withLeadingIcon:j,isElevated:$,isOnlyLeadingIcon:C})=>{const W=`flex items-stretch gap-2 px-4 list-none rounded h-14 bg-white ${$?"shadow-md shadow-slate-200":""}`,M=`
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>`,S=e=>`
      <a href="${e.url}" class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="hidden md:block">${e.name}</span>
      </a>`,i=e=>`
      <a href="${e.url}" class="max-w-[20ch] truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">
        ${e.name}
      </a>`,D=()=>`
      <a href="#" class="w-5 h-5 text-slate-700 hover:text-emerald-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </a>`,P=a.map((e,r)=>{if(r===a.length-1)return`
          <li class="flex items-center">
            <span class="text-slate-400 font-semibold truncate">${e.name}</span>
          </li>`;let T=r===0?C?D():j?S(e):i(e):i(e);return`
        <li class="flex items-center ${r!==a.length-1?"gap-2":""}">
          ${T}
          ${r!==a.length-1?M:""}
        </li>`}).join("");return`
      <nav aria-label="Breadcrumb">
        <ol class="${W}">
          ${P}
        </ol>
      </nav>
    `},_={title:"Navigation / Breadcrumb",tags:["autodocs"],render:V,argTypes:{links:{control:{type:"object"},defaultValue:[{name:"Home",url:"#"},{name:"Projects",url:"#"},{name:"UI Components",url:"#"},{name:"Project",url:"#"}],description:"Array of breadcrumb link objects. Each link object should have a name and a URL."},withLeadingIcon:{control:{type:"boolean"},defaultValue:!0,description:"Toggle to include a leading icon next to each breadcrumb link."},isElevated:{control:{type:"boolean"},defaultValue:!0,description:"Toggle to apply shadow and elevation styling to the breadcrumb."},isOnlyLeadingIcon:{control:{type:"boolean"},defaultValue:!1,description:"Toggle to display only the leading icon without text for each breadcrumb link."}},args:{links:[{name:"Home",url:"#"},{name:"Projects",url:"#"},{name:"UI Components",url:"#"},{name:"Project",url:"#"}],withLeadingIcon:!1,isElevated:!1,isOnlyLeadingIcon:!1}},t={args:{isElevated:!1}},n={args:{isElevated:!1,withLeadingIcon:!0}},s={args:{isOnlyLeadingIcon:!0}},o={args:{isElevated:!0}},l={args:{isElevated:!0,withLeadingIcon:!0}},c={args:{isElevated:!0,isOnlyLeadingIcon:!0}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isElevated: false
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isElevated: false,
    withLeadingIcon: true
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var v,w,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isOnlyLeadingIcon: true
  }
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var b,I,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isElevated: true
  }
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var y,L,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isElevated: true,
    withLeadingIcon: true
  }
}`,...(E=(L=l.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var k,B,O;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isElevated: true,
    isOnlyLeadingIcon: true
  }
}`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const H=["DefaultBreadcrumb","LeadingIcon","OnlyLeadingIcon","DefaultBreadcrumbWithElevated","LeadingIconWithElevated","OnlyLeadingIconWithElevated"];export{t as DefaultBreadcrumb,o as DefaultBreadcrumbWithElevated,n as LeadingIcon,l as LeadingIconWithElevated,s as OnlyLeadingIcon,c as OnlyLeadingIconWithElevated,H as __namedExportsOrder,_ as default};
