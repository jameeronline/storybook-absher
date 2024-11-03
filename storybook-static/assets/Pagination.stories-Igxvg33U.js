const k=({type:o="default",varient:c="primary",onlyIcon:p=!1,rounded:G=!1})=>{let a="inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-primary-50 hover:text-primary-500 hover:stroke-primary-500 focus:bg-primary-50 focus:text-primary-600 focus:stroke-primary-600",e="items-center justify-center hidden h-10 px-4 text-sm font-medium transition duration-300 rounded focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-primary-50 hover:text-primary-500 hover:stroke-primary-500 focus:bg-primary-50 focus:text-primary-600 focus:stroke-primary-600 md:inline-flex",i="";switch(c){case"primary":i="";break;case"overline":i=" border-t border-t-primary-500 ";break;case"underline":i=" border-b border-b-primary-500 ";break;case"outline":i="border divide-x rounded divide-slate-200 border-slate-200 ";break}const d=`
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 1" class="${e}">1</a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Current Page, Page 2" aria-current="true" class="items-center justify-center hidden h-10 px-4 text-sm font-medium text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary-500 ring-offset-2 hover:bg-primary-600 hover:stroke-primary-500 focus:bg-primary-700 md:inline-flex">2</a>
    </li>
    <li>
        <a href="javascript:void(0)" class="${e}" aria-label="Goto Page 3">3</a>
    </li>
    <li>
        <span href="javascript:void(0)" class="items-center justify-center hidden h-10 px-4 text-sm font-medium rounded pointer-events-none focus-visible:outline-none text-slate-700 md:inline-flex">...</span>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 97" class="${e}">97</a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 98" class="${e}">98</a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 99" class="${e}">99</a>
    </li>`,u=`
    <li>
        <a href="javascript:void(0)" aria-label="Goto Previous Page" class="${a}"><span class="sr-only">Previous</span>
            <i class="bi bi-chevron-left"></i>
        </a>
    </li>
    ${d}
    <li>
        <a href="javascript:void(0)" aria-label="Goto Next Page" class="${a}"><span class="sr-only">Next</span>
            <i class="bi bi-chevron-right"></i>
        </a>
    </li>`,j=`
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 1" class="${a}"><span class="sr-only">First</span>
            <i class="bi bi-chevron-double-left"></i>
        </a>
    </li>
    ${u}
    <li>
        <a href="javascript:void(0)" aria-label="Goto Next Page 99" class="${a}"><span class="sr-only">Last</span>
            <i class="bi bi-chevron-double-right"></i>
        </a>
    </li>`,$=`
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 1" class="${a}">
            ${p?"":'<span class="order-2">Prev</span>'}
            <i class="bi bi-chevron-left"></i>
        </a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 3" class="${a}">
            ${p?"":"<span>Next</span>"}
            <i class="bi bi-chevron-right"></i>
        </a>
    </li>`;let r="";switch(o){case"minimal":r=$;break;case"default":r=d;break;case"with prev next":r=u;break;case"full option":r=j;break}return`
    <nav role="navigation" aria-label="Pagination Navigation">
        <ul class="${o=="minimal"?"inline-flex":"flex"} items-center justify-center text-sm list-none md:gap-1 text-slate-700 ${c==="outline"?i:""}">
            ${r}
        </ul>
    </nav>
    `},w={title:"Navigation / Pagination",tags:["autodocs"],render:k,argTypes:{type:{control:"select",options:["minimal","default","with prev next","full option","with help text"],description:"Defines the type of pagination.",defaultValue:"default"},onlyIcon:{control:"boolean",description:"Show only icons, applicable to minimal type.",defaultValue:!1,if:{arg:"type",eq:"minimal"}},varient:{control:"select",options:["primary","overline","underline","outline"],description:"Styling of the pagination component.",defaultValue:"primary"},rounded:{control:"boolean",description:"Apply rounded corners to the pagination.",defaultValue:!1}},args:{type:"default",varient:"primary",onlyIcon:!1,rounded:!1}},l=o=>k(o),t=l.bind({});t.args={type:"default",varient:"primary",onlyIcon:!1,rounded:!1};const s=l.bind({});s.args={type:"minimal",varient:"primary",onlyIcon:!0,rounded:!0};const n=l.bind({});n.args={type:"full option",varient:"outline",rounded:!1};var m,f,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return createPagination(args);
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,b,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return createPagination(args);
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,x,P;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return createPagination(args);
}`,...(P=(x=n.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const I=["DefaultPagination","MinimalIconPagination","OutlinedPagination"];export{t as DefaultPagination,s as MinimalIconPagination,n as OutlinedPagination,I as __namedExportsOrder,w as default};
