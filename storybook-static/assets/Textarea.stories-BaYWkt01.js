import{f as T}from"./code-format-ksmwURBv.js";import"./_commonjsHelpers-Cpj98o6Y.js";function y({size:a="default",helpText:f=!1,disabled:s=!1,isError:b=!1,label:g="Write your message",placeholderText:m="Write your message",isTextCounter:h=!1}){return T(`
    <div class="relative has-invalid:text-danger-500">
      <label for="textarea-${a}" class="cursor-text peer-focus:cursor-default px-2 text-typo-600 text-sm transition-all peer-required:after:text-danger-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-danger-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-500 peer-invalid:peer-focus:text-danger-500 peer-disabled:cursor-not-allowed peer-disabled:text-typo-400 peer-disabled:before:bg-transparent">
        ${g}
      </label>
      <textarea id="textarea-${a}" rows="4" placeholder="${m}" ${s?"disabled":""} class="mt-1 relative w-full ${a==="large"?"p-4":"p-2"} transition-all border rounded outline-none focus-visible:outline-none ${b?"border-danger-500 text-danger-500 focus:border-danger-500":"border-typo-200 text-typo-500 focus:border-primary-500"} ${s?"disabled:bg-typo-50 disabled:text-typo-400 disabled:cursor-not-allowed":""} autofill:bg-white invalid:border-danger-500 invalid:text-danger-500"></textarea>
      ${f?`<small class="flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-danger-500"><span>Help text goes here</span>${h?'<span class="text-typo-500"> 1/10 </span>':""}</small>`:""}
    </div>
  `)}const S={title:"Form Elements/Textarea",tags:["autodocs"],render:y,argTypes:{label:{control:{type:"text"},description:"Custom label for the textarea"},placeholderText:{control:{type:"text"},description:"Custom placeholder text for the textarea"},size:{control:{type:"select"},options:["default","large"],description:"Controls the size of the textarea"},helpText:{control:{type:"boolean"},description:"Displays help text below the textarea"},disabled:{control:{type:"boolean"},description:"Disables the textarea"},isError:{control:{type:"boolean"},description:"Displays an error state for the textarea"},isTextCounter:{control:{type:"boolean"},description:"Displays an text counter value for the textarea"}},args:{size:"default",helpText:!1,disabled:!1,isError:!1,isTextCounter:!1,label:"Write your message",placeholderText:"Write your message"}},e={args:{}},t={args:{label:"Disabled Textarea",placeholderText:"Cannot type here",size:"default",helpText:!1,disabled:!0,isError:!1}},r={args:{label:"Error Textarea",placeholderText:"Enter valid input",size:"default",helpText:!1,disabled:!1,isError:!0}};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Disabled Textarea",
    placeholderText: "Cannot type here",
    size: "default",
    helpText: false,
    disabled: true,
    isError: false
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,x,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Error Textarea",
    placeholderText: "Enter valid input",
    size: "default",
    helpText: false,
    disabled: false,
    isError: true
  }
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const W=["RegularTextarea","DisabledTextarea","ErrorStateTextarea"];export{t as DisabledTextarea,r as ErrorStateTextarea,e as RegularTextarea,W as __namedExportsOrder,S as default};
