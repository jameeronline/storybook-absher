const D=({content:i=[],withDescription:t=!1,isLeadingItem:y=!0,isLeadingItemType:v="avatar",isTrailingItem:T=!0,isTrailingItemType:I="badge"})=>{const L=e=>{if(!y)return"";switch(v){case"icon":return`<i class="${e.icon} text-2xl text-primary-800"></i>`;case"avatar":return`
            <a href="#" class="relative flex items-center justify-center w-10 h-10 text-white rounded-full">
              <img src="${e.avatar}" alt="${e.title}" title="${e.title}" class="w-full h-full rounded-full" />
              <span class="absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-${e.status==="online"?"emerald":"pink"}-500 p-1 text-sm text-white">
                <span class="sr-only">${e.status}</span>
              </span>
            </a>`;case"image":return`<img src="${e.image}" alt="${e.title}" class="w-10 h-10 rounded-full" />`;case"checkbox":return'<input type="checkbox" class="form-checkbox h-4 w-4 text-primary-800">';default:return""}},w=e=>{if(!T)return"";switch(I){case"badge":return`<span class="inline-flex items-center justify-center h-5 w-5 bg-pink-600 text-xs text-white rounded-full">${e.trailText}</span>`;case"text":return`<span class="text-xs text-slate-500">${e.trailText}</span>`;case"icon":return'<i class="bi bi-three-dots-vertical text-lg text-slate-400"></i>';case"checkbox":return'<input type="checkbox" class="form-checkbox h-4 w-4 text-primary-800">';default:return""}};return`<ul class="divide-y divide-slate-100">${i.map(e=>`
          <li class="flex items-center gap-4 px-4 py-3">
            <div class="self-start shrink-0">
              ${L(e)}
            </div>
            <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
              <h4 class="w-full text-base truncate text-slate-700">${e.title}</h4>
              ${t?`<p class="w-full text-sm text-slate-500">${e.description}</p>`:""}
            </div>
            <div class="text-xs text-slate-400">
              ${w(e)}
            </div>
          </li>
        `).join("")}</ul>`},$={title:"Components/List",tags:["autodocs"],render:i=>D(i),decorators:[i=>{const t=document.createElement("div");return t.classList.add("max-w-sm"),t.classList.add("mx-auto"),t.classList.add("shadow-md"),t.classList.add("border"),t.innerHTML=i(),t}],argTypes:{content:{control:"object",description:"Array of objects defining the list items.",defaultValue:[]},withDescription:{control:"boolean",description:"Toggle to show or hide the leading item.",defaultValue:!1},isLeadingItem:{control:"boolean",description:"Toggle to show or hide the leading item.",defaultValue:!0},isLeadingItemType:{control:{type:"select"},options:["icon","avatar","image","checkbox"],description:"Select the type of leading item.",defaultValue:"avatar",if:{arg:"isLeadingItem",truthy:!0}},isTrailingItem:{control:"boolean",description:"Toggle to show or hide the trailing item.",defaultValue:!0},isTrailingItemType:{control:{type:"select"},options:["badge","text","icon","checkbox"],description:"Select the type of trailing item.",defaultValue:"badge",if:{arg:"isTrailingItem",truthy:!0}}}},a={args:{content:[{icon:"bi bi-palette",title:"System Architect",description:"Leads the overall structure and architecture of the design system.",avatar:"https://i.pravatar.cc/40?img=3",image:"",trailText:97,status:"online"},{icon:"bi bi-brush",title:"Design System Manager",description:"Oversees component libraries and ensures design consistency across teams.",avatar:"https://i.pravatar.cc/40?img=4",image:"",trailText:92,status:"offline"},{icon:"bi bi-pen",title:"UI Component Designer",description:"Creates reusable UI components for the design system.",avatar:"https://i.pravatar.cc/40?img=5",image:"",trailText:85,status:"online"},{icon:"bi bi-braces",title:"Accessibility Specialist",description:"Ensures all components meet accessibility standards.",avatar:"https://i.pravatar.cc/40?img=6",image:"",trailText:93,status:"offline"},{icon:"bi bi-vector-pen",title:"Design Token Engineer",description:"Manages design tokens for color, spacing, and typography in the system.",avatar:"https://i.pravatar.cc/40?img=7",image:"",trailText:89,status:"online"},{icon:"bi bi-layers",title:"Pattern Librarian",description:"Organizes design patterns and documents usage guidelines.",avatar:"https://i.pravatar.cc/40?img=8",image:"",trailText:94,status:"offline"},{icon:"bi bi-layout-text-sidebar",title:"Content Strategist",description:"Develops clear and consistent content guidelines for the design system.",avatar:"https://i.pravatar.cc/40?img=9",image:"",trailText:87,status:"online"},{icon:"bi bi-fonts",title:"Typography Specialist",description:"Manages and standardizes typography choices within the design system.",avatar:"https://i.pravatar.cc/40?img=10",image:"",trailText:90,status:"offline"}],withDescription:!1,isLeadingItem:!0,isLeadingItemType:"avatar",isTrailingItem:!0,isTrailingItemType:"badge"}},s={args:{...a.args,isLeadingItemType:"icon"}},n={args:{...a.args,isTrailingItemType:"text"}},r={args:{...a.args,isLeadingItem:!1,isTrailingItem:!1}};var c,o,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: [{
      icon: "bi bi-palette",
      title: "System Architect",
      description: "Leads the overall structure and architecture of the design system.",
      avatar: "https://i.pravatar.cc/40?img=3",
      image: "",
      trailText: 97,
      status: "online"
    }, {
      icon: "bi bi-brush",
      title: "Design System Manager",
      description: "Oversees component libraries and ensures design consistency across teams.",
      avatar: "https://i.pravatar.cc/40?img=4",
      image: "",
      trailText: 92,
      status: "offline"
    }, {
      icon: "bi bi-pen",
      title: "UI Component Designer",
      description: "Creates reusable UI components for the design system.",
      avatar: "https://i.pravatar.cc/40?img=5",
      image: "",
      trailText: 85,
      status: "online"
    }, {
      icon: "bi bi-braces",
      title: "Accessibility Specialist",
      description: "Ensures all components meet accessibility standards.",
      avatar: "https://i.pravatar.cc/40?img=6",
      image: "",
      trailText: 93,
      status: "offline"
    }, {
      icon: "bi bi-vector-pen",
      title: "Design Token Engineer",
      description: "Manages design tokens for color, spacing, and typography in the system.",
      avatar: "https://i.pravatar.cc/40?img=7",
      image: "",
      trailText: 89,
      status: "online"
    }, {
      icon: "bi bi-layers",
      title: "Pattern Librarian",
      description: "Organizes design patterns and documents usage guidelines.",
      avatar: "https://i.pravatar.cc/40?img=8",
      image: "",
      trailText: 94,
      status: "offline"
    }, {
      icon: "bi bi-layout-text-sidebar",
      title: "Content Strategist",
      description: "Develops clear and consistent content guidelines for the design system.",
      avatar: "https://i.pravatar.cc/40?img=9",
      image: "",
      trailText: 87,
      status: "online"
    }, {
      icon: "bi bi-fonts",
      title: "Typography Specialist",
      description: "Manages and standardizes typography choices within the design system.",
      avatar: "https://i.pravatar.cc/40?img=10",
      image: "",
      trailText: 90,
      status: "offline"
    }],
    withDescription: false,
    isLeadingItem: true,
    isLeadingItemType: "avatar",
    isTrailingItem: true,
    isTrailingItemType: "badge"
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var g,d,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLeadingItemType: "icon"
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTrailingItemType: "text"
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,b,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLeadingItem: false,
    isTrailingItem: false
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const k=["Default","LeadingWithIcon","TrailingWithText","NoLeadingOrTrailingItems"];export{a as Default,s as LeadingWithIcon,r as NoLeadingOrTrailingItems,n as TrailingWithText,k as __namedExportsOrder,$ as default};
