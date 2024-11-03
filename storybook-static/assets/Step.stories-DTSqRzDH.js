const a=()=>`<div>
  <h2 class="sr-only">Steps</h2>

  <div class="after:mt-4 after:block after:h-1 after:absolute after:top-0 after:w-full after:rounded-lg after:bg-gray-200">
    <ol class="grid grid-cols-4 text-sm font-medium text-gray-500">
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
            <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Enter Details </span>
      </li>
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
          <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Confirmation </span>
      </li>
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
          <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Payment </span>
      </li>
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
          <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Success </span>
      </li>
    </ol>
  </div>
</div>`,i={title:"Components / Step Progress Bar",tags:["autodocs"],render:a,argTypes:{},args:{}},e={args:{}};var s,r,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,i as default};
