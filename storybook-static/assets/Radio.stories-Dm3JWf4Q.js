import{f as V}from"./code-format-ksmwURBv.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x=({radios:h=["Option 1"],name:t="radio-group",isVertical:y=!1})=>{const b=y?"flex-col gap-2":"flex-row gap-6 flex-wrap",w=h.map((s,o)=>{const i=`${t}-radio-${o}`;return`
        <div class="relative flex items-center mt-2">
          <input 
            class="w-6 h-6 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-primary-500 checked:bg-primary-500 checked:hover:border-primary-600 checked:hover:bg-primary-600 focus:outline-none checked:focus:border-primary-700 checked:focus:bg-primary-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50" 
            type="radio" 
            value="${s.toLowerCase()}" 
            id="${i}" 
            name="${t}" 
          />
          <label 
            class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" 
            for="${i}">
            ${s}
          </label>

          <svg 
            class="absolute left-0 w-6 h-6 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            aria-labelledby="title-${o}" 
            role="graphics-symbol"
          >
            <title id="title-${o}">Circle Shape</title>
            <desc>Circle shape to indicate whether the radio input is checked or not.</desc>
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>`}).join(""),v=`<fieldset class="flex ${b}">${w}</fieldset>`;return V(v)},R={title:"Form Elements / Radio",tags:["autodocs"],render:x,argTypes:{radios:{control:{type:"array"},description:"Array of radio labels. Each item in the array represents the text for a radio button.",defaultValue:["Option 1","Option 2","Option 3"]},name:{control:{type:"text"},description:"Name attribute for the radio buttons group.",defaultValue:"radio-group"},isVertical:{control:{type:"boolean"},description:"Arranges radio buttons vertically when true, or horizontally when false.",defaultValue:!1}},args:{name:"radio-group"}},e={args:{radios:["Huey","Dewey","Louie"],name:"horizondal",isVertical:!1}},r={args:{radios:["Huey","Dewey","Louie"],name:"vertical",isVertical:!0}},a={args:{radios:["Huey"],name:"single",isVertical:!1}};var l,n,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    radios: ["Huey", "Dewey", "Louie"],
    name: "horizondal",
    isVertical: false
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    radios: ["Huey", "Dewey", "Louie"],
    name: "vertical",
    isVertical: true
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    radios: ["Huey"],
    name: "single",
    isVertical: false
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const L=["HorizontalRadioGroup","VerticalRadioGroup","SingleRadio"];export{e as HorizontalRadioGroup,a as SingleRadio,r as VerticalRadioGroup,L as __namedExportsOrder,R as default};
