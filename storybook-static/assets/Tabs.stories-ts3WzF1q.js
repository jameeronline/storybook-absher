import{c as L}from"./index-CS7R4WcE.js";const Y=({content:n,size:S="default",icon:c=!0,fullwidth:W=!1,pills:D=!1})=>{const P=L({slots:{base:"max-w-full",tabWarpper:"flex items-center border-b border-slate-200",titleWrapper:"w-auto",titleDefault:"inline-flex items-center justify-center gap-2 px-6 -mb-px font-medium tracking-wide transition duration-300 border-b-2 rounded-t focus-visible:outline-none whitespace-nowrap hover:border-primary-800 hover:text-primary-800 hover:bg-primary-50 focus:border-primary-900 focus:text-primary-600 focus:bg-primary-50 focus:stroke-primary-800 disabled:cursor-not-allowed disabled:text-slate-500 border-transparen text-slate-700 stroke-slate-700 hover:stroke-primary-800",activeTitle:"inline-flex items-center justify-center gap-2 px-6 -mb-px font-medium tracking-wide transition duration-300 border-b-2 rounded-t focus-visible:outline-none whitespace-nowrap hover:border-primary-900 hover:text-primary-900 hover:bg-primary-50 focus:border-primary-950 focus:text-primary-950 focus:bg-primary-50 focus:stroke-primary-700 disabled:cursor-not-allowed disabled:border-slate-500",iconWrapper:"w-6 h-6 hidden sm:block",body:"px-6 py-4"},variants:{size:{sm:{titleDefault:"h-10 text-sm",activeTitle:"h-10 text-sm"},default:{titleDefault:"h-12 text-base",activeTitle:"h-12 text-md"},lg:{titleDefault:"h-16 text-lg",activeTitle:"h-16 text-base"}},fullwidth:{true:{titleDefault:"w-full",titleWrapper:"w-full",activeTitle:"w-full"}},pills:{true:{titleDefault:"border-none",activeTitle:"gap-2 px-6 text-white rounded focus-visible:outline-none bg-primary-800 hover:text-white hover:bg-primary-600 focus:bg-primary-700 disabled:cursor-not-allowed disabled:bg-primary-300",tabWarpper:"gap-2 border-none"},false:{titleDefault:"rounded-t"}}}}),{base:j,tabWarpper:M,titleWrapper:V,titleDefault:C,activeTitle:E,iconWrapper:G,body:I}=P({size:S,fullwidth:W,pills:D,icon:c}),d=document.createElement("div"),a=`tab-${Math.random().toString(36).substr(2,9)}`;return d.innerHTML=`
        <section class="${j()}" aria-multiselectable="false">
          <ul class="${M()}" role="tablist">
            ${n.map((t,e)=>`
              <li role="presentation" class="${V()}">
                <button 
                  data-tab-target="${a}-${e}" 
                  data-tab-group = "${a}" 
                  class="${e===0?E():C()}" 
                  role="tab" 
                  aria-setsize="${n.length}" 
                  aria-posinset="${e+1}" 
                  tabindex="${e===0?"0":"-1"}" 
                  aria-controls="tab-panel-${e}" 
                  aria-selected="${e===0?"true":"false"}"
                >
                  ${c?`<span class="relative"><i class="bi ${t.icon} ${G()}"></i></span>`:""}
                  <span class="order-2">${t.title}</span>
                </button>
              </li>
            `).join("")}
          </ul>
          <div>
            ${n.map((t,e)=>`
              <div class="${I()} ${e===0?"":"hidden"}" id="${a}-${e}" data-tab-content="${a}-${e}" data-tab-group="${a}" aria-hidden="${e===0?"false":"true"}" role="tabpanel" tabindex="-1">
                <p>${t.body}</p>
              </div>
            `).join("")}
          </div>
        </section>
      `,d},F={title:"Components/Tabs",tags:["autodocs"],render:Y,argTypes:{size:{control:{type:"select"},options:["sm","default","lg"],defaultValue:"default",description:"The size of the tabs."},icon:{control:{type:"boolean"},defaultValue:!0,description:"Show or hide icons in the tabs."},fullwidth:{control:{type:"boolean"},defaultValue:!1,description:"If true, tabs will stretch to full width."},pills:{control:{type:"boolean"},defaultValue:!1,description:"If true, tabs will be styled as pills."},content:{control:{type:"object"},defaultValue:[],description:"The content for each tab, including icon, title, and body."}},args:{size:"default",icon:!0,fullwidth:!1,pills:!1,content:[{icon:"bi-person-fill",title:"User Profile",body:`
            The User Profile section allows you to manage all your personal information and account settings. 
            You can update your contact details such as email and phone number, change your password, and upload a profile picture. 
            Personalization options are also available to tailor your user experience, such as selecting your preferred theme, notification settings, and privacy controls. 
            This section ensures that you have full control over your account and its associated data.
          `},{icon:"bi-calendar-event-fill",title:"Event Schedule",body:`
            The Event Schedule section provides a comprehensive overview of your upcoming events, meetings, and important dates. 
            You can view your calendar in a daily, weekly, or monthly format, making it easy to track and plan your schedule. 
            This section allows you to set reminders for key events, sync with external calendars (like Google Calendar), and create recurring events. 
            Managing invitations and RSVPs is also simple, ensuring that you're always prepared and organized for what's ahead.
          `},{icon:"bi-camera-fill",title:"Media Gallery",body:`
            The Media Gallery is your centralized hub for managing all multimedia assets, including images, videos, and documents. 
            You can upload new media directly from your device, organize files into folders, and add tags for easier searchability. 
            Preview images and videos directly within the gallery and make use of editing tools to crop or adjust images. 
            Whether you're creating presentations, managing a personal portfolio, or organizing team resources, the Media Gallery provides an efficient way to keep all your assets in one place.
          `}]}},r={args:{}},s={args:{size:"sm",icon:!0,fullwidth:!1,pills:!1}},i={args:{size:"lg",icon:!0,fullwidth:!1,pills:!1}},o={args:{size:"default",icon:!0,fullwidth:!0,pills:!1}},l={args:{size:"default",icon:!0,fullwidth:!1,pills:!0}};var u,p,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,m,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "sm",
    icon: true,
    fullwidth: false,
    pills: false
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "lg",
    icon: true,
    fullwidth: false,
    pills: false
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,T,$;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "default",
    icon: true,
    fullwidth: true,
    pills: false
  }
}`,...($=(T=o.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var x,z,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "default",
    icon: true,
    fullwidth: false,
    pills: true
  }
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const U=["DefaultTabs","SmallTabs","LargeTabs","FullWidthTabs","PillTabs"];export{r as DefaultTabs,o as FullWidthTabs,i as LargeTabs,l as PillTabs,s as SmallTabs,U as __namedExportsOrder,F as default};
