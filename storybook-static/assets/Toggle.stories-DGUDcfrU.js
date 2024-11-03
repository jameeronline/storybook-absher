const w=({type:f="primary",size:s="base",content:e=[{title:"Toggle",description:"",iconName:""}],isIcon:b=!1,helpText:m=!1})=>{const u=s==="large"?"w-12 h-6 after:w-6 after:h-6":"w-8 h-4 after:w-4 after:h-4",y=s==="large"?"pl-14":"pl-10",x={primary:"checked:bg-primary-200 checked:after:bg-primary-600 hover:bg-slate-400 checked:hover:bg-primary-400",secondary:"checked:bg-secondary-200 checked:after:bg-secondary-600 hover:bg-slate-400 checked:hover:bg-secondary-400",danger:"checked:bg-danger-200 checked:after:bg-danger-600 hover:bg-slate-400 checked:hover:bg-danger-400",info:"checked:bg-info-200 checked:after:bg-info-600 hover:bg-slate-400 checked:hover:bg-info-400",warning:"checked:bg-warning-200 checked:after:bg-warning-600 hover:bg-slate-400 checked:hover:bg-warning-400",success:"checked:bg-success-200 checked:after:bg-success-600 hover:bg-slate-400 checked:hover:bg-success-400"}[f],T=b?`<i class="bi bi-${e[0].iconName} text-xl text-slate-500"></i>`:"",k=m?`<small class="w-full py-2 text-xs transition ${y} text-slate-400 peer-invalid:text-danger-500">
        <span>${e[0].description||"Toggle can also have helper text"}</span>
      </small>`:"";return`
    <div class="relative flex flex-wrap items-center">
      <input
        class="relative ${u} transition-colors appearance-none cursor-pointer ${x} peer rounded-xl bg-slate-300 after:absolute after:top-0 after:left-0 after:rounded-full after:bg-slate-500 after:transition-all ${s==="large"?"checked:after:left-6":"checked:after:left-4"} disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
        type="checkbox"
        id="toggle-${e[0].title}"
      />
      ${T}
      <label class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" for="toggle-${e[0].title}">
        ${e[0].title}
      </label>
      ${k}
    </div>
  `},v={title:"Form Elements / Toggle",tags:["autodocs"],render:w,parameters:{docs:{description:{component:"The Toggle component can display different types of switches with optional icons and help text."}}},argTypes:{type:{control:{type:"select"},options:["primary","secondary","danger","info","warning","success"],description:"Specifies the type/color of the toggle switch",defaultValue:"primary"},size:{control:{type:"select"},options:["base","large"],description:"Specifies the size of the toggle switch",defaultValue:"base"},content:{control:"object",description:"Content for the toggle switch, including title, description, and iconName"},isIcon:{control:"boolean",description:"Specifies whether an icon should be displayed next to the toggle switch",defaultValue:!1},helpText:{control:"boolean",description:"Specifies whether help text should be displayed below the toggle switch",defaultValue:!1}},args:{type:"primary",size:"base",content:[{title:"Primary",description:"This is a primary toggle",iconName:""}],isIcon:!1,helpText:!1}},t={args:{type:"primary",size:"base",content:[{title:"Primary",description:"Helper text for primary toggle",iconName:""}],isIcon:!1,helpText:!1}},r={args:{type:"secondary",size:"large",content:[{title:"Secondary",description:"",iconName:"check-circle"}],isIcon:!0,helpText:!1}},a={args:{type:"danger",size:"base",content:[{title:"Danger",description:"Use with caution",iconName:""}],isIcon:!1,helpText:!0}};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: "primary",
    size: "base",
    content: [{
      title: "Primary",
      description: "Helper text for primary toggle",
      iconName: ""
    }],
    isIcon: false,
    helpText: false
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    size: "large",
    content: [{
      title: "Secondary",
      description: "",
      iconName: "check-circle"
    }],
    isIcon: true,
    helpText: false
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,d,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "danger",
    size: "base",
    content: [{
      title: "Danger",
      description: "Use with caution",
      iconName: ""
    }],
    isIcon: false,
    helpText: true
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const I=["PrimaryToggleWithHelpText","LargeSecondaryToggleWithIcon","DangerToggleWithoutIcon"];export{a as DangerToggleWithoutIcon,r as LargeSecondaryToggleWithIcon,t as PrimaryToggleWithHelpText,I as __namedExportsOrder,v as default};
