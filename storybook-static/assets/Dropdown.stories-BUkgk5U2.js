import{c as D}from"./index-CS7R4WcE.js";import{b as $}from"./config-4mfIS08Y.js";function S({label:o="Choose One",menuItems:t=[],varient:e="primary",withIcon:r=!0,withDescription:c=!0}){const v=D({slots:{base:"relative inline-flex",buttonEl:"inline-flex items-center justify-center h-12 gap-2 px-5 text-md font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:shadow-none",menuEl:"absolute z-20 flex flex-col py-2 mt-1 list-none bg-white rounded shadow-md w-72 top-full shadow-slate-500/10",menuItemEl:"flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 focus:outline-none focus-visible:outline-none"},variants:{varient:{primary:{buttonEl:"text-white bg-primary-800 hover:bg-primary-900 focus:bg-primary-950 disabled:border-primary-300 disabled:bg-primary-300",menuItemEl:"hover:bg-primary-50 hover:text-primary-800 focus:bg-primary-50 focus:text-primary-900"},secondary:{buttonEl:"text-white bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 disabled:border-secondary-300 disabled:bg-secondary-300",menuItemEl:"hover:bg-secondary-50 hover:text-secondary-500 focus:bg-secondary-50 focus:text-secondary-600"},tertiary:{buttonEl:"text-white bg-tertiary-500 hover:bg-tertiary-600 focus:bg-tertiary-700 disabled:border-tertiary-300 disabled:bg-tertiary-300",menuItemEl:"hover:bg-tertiary-50 hover:text-tertiary-500 focus:bg-tertiary-50 focus:text-tertiary-700"},danger:{buttonEl:"text-white bg-danger-500 hover:bg-danger-600 focus:bg-danger-700 disabled:border-danger-300 disabled:bg-danger-300",menuItemEl:"hover:bg-danger-50 hover:text-danger-500 focus:bg-danger-50 focus:text-danger-700"},success:{buttonEl:"text-white bg-success-500 hover:bg-success-600 focus:bg-success-700 disabled:border-success-300 disabled:bg-success-300",menuItemEl:"hover:bg-success-50 hover:text-success-500 focus:bg-success-50 focus:text-success-700"},info:{buttonEl:"text-white bg-info-500 hover:bg-info-600 focus:bg-info-700 disabled:border-info-300 disabled:bg-info-300",menuItemEl:"hover:bg-info-50 hover:text-info-500 focus:bg-info-50 focus:text-info-700"},warning:{buttonEl:"text-white bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 disabled:border-warning-300 disabled:bg-warning-300",menuItemEl:"hover:bg-warning-50 hover:text-warning-500 focus:bg-warning-50 focus:text-warning-700"}}}}),d=`dropdown-${Math.random().toString(36).substr(2,9)}`,{base:y,buttonEl:x,menuEl:E,menuItemEl:I}=v({varient:e,withIcon:r,withDescription:c});return`<div class="${y()}">
  <button data-dropdown-toggle="${d}" class="${x()}">
  <span>${o}</span>
    <span class="relative only:-mx-5">
      <i class="bi bi-chevron-down text-xl"></i>
    </span>
  </button>
  <ul data-dropdown-menu="${d}" class="${E()}">
    ${t.map(i=>`
        <li><a class="${I()}" href="javascript: void(0)">
          ${r?`<i class="bi ${i.icon}"></i>`:""}
          <span class="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
            <span class="leading-5 truncate">${i.title}</span>
            ${c?`<span class="text-sm whitespace-normal opacity-70">${i.description}</span>`:""}
          </span>
        </a></li>
      `).join("")}
      </ul>
  </div>
  `}function j(){document.addEventListener("click",o=>{const t=o.target.closest("[data-dropdown-toggle]");if(t){const e=t.getAttribute("data-dropdown-toggle"),r=document.querySelector(`[data-dropdown-menu="${e}"]`);r&&r.classList.remove("hidden")}else document.querySelectorAll("[data-dropdown-menu]").forEach(e=>{e.classList.contains("hidden")||e.classList.add("hidden")})})}const L={title:"Components/Dropdown",tags:["autodocs"],parameters:{backgrounds:{values:[{name:"light",value:"#AAA"},{name:"dark",value:"#333"}]}},render:o=>{const t=document.createElement("div"),e=S(o);return t.innerHTML=e,j(),t},argTypes:{label:{control:"text",description:"label for the button",defaultValue:"You successfully read this important alert message. Green often indicates something successful or positive."},menuItems:{control:"object",description:"An array of content objects, each containing title, description, and icon information."},varient:{control:{type:"select"},options:$,description:"Choose the varient of the dropdown button",defaultValue:"primary"},withIcon:{control:"boolean",description:"Show icons next to menu items",defaultValue:!0},withDescription:{control:"boolean",description:"Show descriptions below menu item titles",defaultValue:!0}},args:{label:"Choose One",varient:"primary",withIcon:!1,withDescription:!1,menuItems:[{title:"Dashboard",description:"Quick overview of all basic metrics and settings",icon:"bi-pie-chart"},{title:"Metrics and analytics",description:"Detailed analytic data reviews management",icon:"bi-graph-up-arrow"},{title:"User settings",description:"User settings allow you to configure your email preferences",icon:"bi-gear"}]}},n={args:{}},s={args:{varient:"secondary",withIcon:!1,withDescription:!0}},a={args:{varient:"outline",withIcon:!1,withDescription:!1}};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,g,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    varient: "secondary",
    withIcon: false,
    withDescription: true
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,w,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    varient: "outline",
    withIcon: false,
    withDescription: false
  }
}`,...(h=(w=a.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const V=["DefaultDropdown","NoIconsDropdown","SimpleDropdown"];export{n as DefaultDropdown,s as NoIconsDropdown,a as SimpleDropdown,V as __namedExportsOrder,L as default};
