import{f}from"./code-format-ksmwURBv.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g=({checkboxes:k=["Primary Checkbox"],isVertical:x=!1})=>{const m=x?"flex-col gap-2":"flex-row gap-6 flex-wrap",u=k.map((y,e)=>{const c=`checkbox-${e}`;return`
        <div class="relative flex items-start mt-2">
          <input 
            class="w-6 h-6 flex-shrink-0 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-primary-500 checked:bg-primary-500 checked:hover:border-primary-600 checked:hover:bg-primary-600 focus:outline-none checked:focus:border-primary-700 checked:focus:bg-primary-700 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 dark:border-danger-500" 
            type="checkbox" id="${c}" />
          
          <label 
            class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" 
            for="${c}">
            ${y}
          </label>

          <svg 
            class="absolute left-0 w-6 h-6 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-0 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed" 
            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="title-${e} description-${e}" role="graphics-symbol">
            <title id="title-${e}">Check mark icon</title>
            <desc id="description-${e}">
              Check mark icon to indicate whether the checkbox is checked or not.
            </desc>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z" />
          </svg>
        </div>`}).join(""),C=`<div class="flex ${m}">${u}</div>`;return f(C)},V={title:"Form Elements / Checkbox",tags:["autodocs"],render:g,argTypes:{checkboxes:{control:{type:"array"},description:"Array of checkbox labels. Each item in the array represents the text for a checkbox.",defaultValue:["Primary Checkbox","Secondary Checkbox"]},isVertical:{control:{type:"boolean"},description:"Arranges checkboxes vertically when true, or horizontally when false.",defaultValue:!1}}},r={args:{checkboxes:["Primary Checkbox","Secondary Checkbox","Tertiary Checkbox"],isVertical:!1}},o={args:{checkboxes:["Primary Checkbox","Secondary Checkbox","Tertiary Checkbox"],isVertical:!0}},a={args:{checkboxes:["Primary Checkbox"],isVertical:!1}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    checkboxes: ["Primary Checkbox", "Secondary Checkbox", "Tertiary Checkbox"],
    isVertical: false
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,n,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checkboxes: ["Primary Checkbox", "Secondary Checkbox", "Tertiary Checkbox"],
    isVertical: true
  }
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var h,b,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checkboxes: ["Primary Checkbox"],
    isVertical: false
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const $=["HorizontalCheckboxGroup","VerticalCheckboxGroup","SingleCheckbox"];export{r as HorizontalCheckboxGroup,a as SingleCheckbox,o as VerticalCheckboxGroup,$ as __namedExportsOrder,V as default};
