import{c as X}from"./index-CS7R4WcE.js";const Z=({as:D="text",size:P="default",isLabel:W=!0,label:V="Your Name",placeholder:k=!1,placeholderText:N=null,helperText:U=!0,helperLabel:C="Text field with helper text",isLeadIcon:o=!0,leadingIcon:H=null,isTrailIcon:i=!1,trailingIcon:M=null})=>{const Y=X({slots:{base:"relative",form_group:"relative mt-2 mb-4",input:"relative w-full px-4 transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-danger-500 invalid:text-danger-500 focus:border-primary-800 focus:outline-none invalid:focus:border-danger-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",leadingIcon_slot:"absolute w-6 h-6 cursor-pointer top-3 left-4 text-slate-400",trailingIcon_slot:"absolute w-6 h-6 cursor-pointer top-3 right-2 text-slate-400",label_slot:"cursor-text peer-focus:cursor-default px-4 text-slate-600 transition-all peer-required:after:text-danger-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-danger-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-500 peer-invalid:peer-focus:text-danger-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent",helptext_slot:"flex justify-between w-full px-4 mt-2 text-xs transition text-slate-400 peer-invalid:text-danger-500"},variants:{size:{small:{label_slot:"text-sm",input:"h-12",leadingIcon_slot:"text-xl w-6 h-6",trailingIcon_slot:"text-xl w-6 h-6"},default:{label_slot:"text-md",input:"h-14",leadingIcon_slot:"text-2xl w-6 h-6 left-4",trailingIcon_slot:"text-2xl w-6 h-6 right-4"},large:{label_slot:"text-base",input:"h-16",leadingIcon_slot:"text-2xl w-8 h-8 top-4",trailingIcon_slot:"text-2xl w-8 h-8 top-4"}}},compoundVariants:[{isLeadIcon:!0,class:{input:"ps-12"}}]}),{base:q,form_group:A,label_slot:B,input:j,leadingIcon_slot:F,trailingIcon_slot:O,helptext_slot:G}=Y({size:P,isLeadIcon:o,isTrailIcon:i}),J=o?`<span class="${F()}"><i class="bi bi-${H}"></i></span>`:"",K=i?`<span class="${O()}"><i class="bi bi-${M}"></i></span>`:"",Q=W?`
    <label for="input-field" class="${B()}">${V}</label>`:"",R=U?`
    <small class="${G()}"><span>${C}</span></small>`:"";return`
    <div class=${q()} data-name="form-group">
      ${Q}
      <div class="${A()}">
        <input id="input-field" type="${D}" placeholder="${k?N:""}" class="${j()}" />
        ${J}
        ${K}
        ${R}
      </div>
    </div>
  `},te={title:"Form Elements / Input",tags:["autodocs"],render:Z,argTypes:{as:{control:{type:"select"},options:["text","password","number","date","email"],description:"The type of input field",defaultValue:"text"},size:{control:{type:"select"},options:["small","default","large"],description:"The size of the input",defaultValue:"default"},isLabel:{control:{type:"boolean"},description:"Toggle the visibility of the label",defaultValue:!1},label:{control:{type:"text"},description:"The text for the label",defaultValue:"Your Name",if:{arg:"isLabel",truthy:!0}},placeholder:{control:{type:"boolean"},description:"Toggle the visibility of the placeholder",defaultValue:!0},placeholderText:{control:{type:"text"},description:"The text for the placeholder",defaultValue:"Enter your name",if:{arg:"placeholder",truthy:!0}},helperText:{control:{type:"boolean"},description:"Toggle the visibility of the helper text",defaultValue:!1},helperLabel:{control:{type:"text"},description:"The text for the helper label",defaultValue:"Text field with helper text",if:{arg:"helperText",truthy:!0}},isLeadIcon:{control:{type:"boolean"},description:"Toggle the visibility of the leading icon",defaultValue:!1},leadingIcon:{control:{type:"select"},options:["person","envelope","lock","telephone","calendar","credit-card"],description:"Select the leading icon for the input field",if:{arg:"isLeadIcon",truthy:!0}},isTrailIcon:{control:{type:"boolean"},description:"Toggle the visibility of the trailing icon",defaultValue:!1},trailingIcon:{control:{type:"select"},options:["person","envelope","lock","telephone","calendar","credit-card"],description:"Select the trailing icon for the input field",if:{arg:"isTrailIcon",truthy:!0}}},args:{as:"text",size:"default",isLabel:!1,label:"Your Name",placeholder:!0,placeholderText:"Enter your name",helperText:!1,helperLabel:"Text field with helper text",isLeadIcon:!1,leadingIcon:"person",isTrailIcon:!1,trailingIcon:"calendar"}},e={name:"Text Input",args:{as:"text"}},t={name:"Input with Leading User Icon",args:{as:"text",isLabel:!0,label:"Username",isLeadIcon:!0,leadingIcon:"person"}},a={name:"Password Input with Leading and Trailing Icons",args:{as:"password",size:"default",isLabel:!0,label:"Password",isLeadIcon:!0,leadingIcon:"key",isTrailIcon:!0,trailingIcon:"eye-slash"}},r={name:"Email Input with Helper Text",args:{as:"email",size:"default",isLabel:!0,label:"Email",placeholder:!0,placeholderText:"Enter your email",helperText:!0,helperLabel:"Please provide a valid email address"}},l={name:"Date Input with Calendar Icon",args:{as:"date",size:"default",isLabel:!0,label:"Date of Birth",isLeadIcon:!0,leadingIcon:"calendar",isTrailIcon:!1}},n={name:"Phone Number Input with Leading and Trailing Icons",args:{as:"number",size:"default",isLabel:!0,label:"Phone Number",isLeadIcon:!0,leadingIcon:"telephone"}},s={name:"Default Text Input With Search",args:{as:"text",size:"default",isLabel:!1,placeholder:!0,placeholderText:"Search Ex: Enter your keywords",isTrailIcon:!0,trailingIcon:"search"}};var c,u,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Text Input",
  args: {
    as: "text"
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,h,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Input with Leading User Icon",
  args: {
    as: "text",
    isLabel: true,
    label: "Username",
    isLeadIcon: true,
    leadingIcon: "person"
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,I,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Password Input with Leading and Trailing Icons",
  args: {
    as: "password",
    size: "default",
    isLabel: true,
    label: "Password",
    isLeadIcon: true,
    leadingIcon: "key",
    isTrailIcon: true,
    trailingIcon: "eye-slash"
  }
}`,...(m=(I=a.parameters)==null?void 0:I.docs)==null?void 0:m.source}}};var x,b,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Email Input with Helper Text",
  args: {
    as: "email",
    size: "default",
    isLabel: true,
    label: "Email",
    placeholder: true,
    placeholderText: "Enter your email",
    helperText: true,
    helperLabel: "Please provide a valid email address"
  }
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var y,w,L;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Date Input with Calendar Icon",
  args: {
    as: "date",
    size: "default",
    isLabel: true,
    label: "Date of Birth",
    isLeadIcon: true,
    leadingIcon: "calendar",
    isTrailIcon: false
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var v,_,$;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Phone Number Input with Leading and Trailing Icons",
  args: {
    as: "number",
    size: "default",
    isLabel: true,
    label: "Phone Number",
    isLeadIcon: true,
    leadingIcon: "telephone"
  }
}`,...($=(_=n.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var E,z,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Default Text Input With Search",
  args: {
    as: "text",
    size: "default",
    isLabel: false,
    placeholder: true,
    placeholderText: "Search Ex: Enter your keywords",
    isTrailIcon: true,
    trailingIcon: "search"
  }
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const ae=["DefaultTextInput","DefaultInputWithUserIcon","InputWithPasswordAndIcons","EmailInputWithHelperText","DateInputWithCalendarIcon","PhoneNumberInputWithIcons","DefaultTextInputWithSearch"];export{l as DateInputWithCalendarIcon,t as DefaultInputWithUserIcon,e as DefaultTextInput,s as DefaultTextInputWithSearch,r as EmailInputWithHelperText,a as InputWithPasswordAndIcons,n as PhoneNumberInputWithIcons,ae as __namedExportsOrder,te as default};
