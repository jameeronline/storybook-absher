const _=({footerLinks:B=[],brand:r={name:"Brand",description:""},theme:P="light",withSubfooter:U=!1,numberOfColumns:e=4}={})=>{const i={light:"text-slate-500 bg-slate-100 border-slate-200",dark:"text-slate-400 bg-slate-900 border-slate-700",primary:"text-white bg-emerald-500 border-emerald-600"},c=i[P]||i.light,W=`grid grid-cols-${e} gap-6 md:grid-cols-${e*2} lg:grid-cols-${e*3}`;return`
      <footer class="${c}">
        <!-- Main footer -->
        <div class="pt-16 pb-12 text-sm border-t ${c}">
          <div class="container px-6 mx-auto">
            <div class="${W}">
              <!-- Brand section -->
              <div class="col-span-${e} md:col-span-${e*2} lg:col-span-${e}">
                <a aria-label="${r.name} logo" class="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap focus:outline-none" href="javascript:void(0)">
                  <svg width="300" height="300" class="w-6 h-6 shrink-0 bg-emerald-500" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG content goes here -->
                  </svg>
                  ${r.name}
                </a>
                <p>${r.description}</p>
              </div>
  
              <!-- Footer links -->
              ${B.map(m=>`
                <nav class="col-span-2">
                  <h3 class="mb-6 text-base font-medium">${m.title}</h3>
                  <ul>
                    ${m.list.map(u=>`
                      <li class="mb-2 leading-6">
                        <a href="${u.url}" class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">${u.label}</a>
                      </li>
                    `).join("")}
                  </ul>
                </nav>
              `).join("")}
            </div>
          </div>
        </div>
  
        ${U?`<div class="py-4 text-center text-xs ${c}"> © 2024 ${r.name}. All rights reserved. </div>`:""}
      </footer>
    `},A={title:"Templates/Footer",tags:["autodocs"],render:_,argTypes:{footerLinks:{control:"object"},brand:{control:"object"},theme:{control:{type:"select",options:["light","dark","primary"]}},withSubfooter:{control:"boolean"},withBrandColumn:{control:"boolean"},numberOfColumns:{control:{type:"select",options:[3,4,5]}}},args:{footerLinks:[{title:"Product",list:[{label:"Features",url:"#"},{label:"Customers",url:"#"},{label:"Why Us?",url:"#"}]},{title:"Docs & Help",list:[{label:"Documentation",url:"#"},{label:"System Status",url:"#"},{label:"Help Center",url:"#"}]},{title:"Company",list:[{label:"About Us",url:"#"},{label:"Careers",url:"#"},{label:"Blog",url:"#"}]},{title:"Contact",list:[{label:"Contact Us",url:"#"},{label:"Support",url:"#"},{label:"Partners",url:"#"}]}],brand:{name:"BrandName",description:"The best components library for developers."},theme:"light",withSubfooter:!1,numberOfColumns:4}},t={args:{}},o={args:{theme:"dark"}},s={args:{theme:"primary"}},a={args:{withSubfooter:!0}},l={args:{numberOfColumns:5}},n={args:{numberOfColumns:3}};var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    theme: "dark" // Dark theme
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,$,F;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    theme: "primary" // Primary theme
  }
}`,...(F=($=s.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var x,y,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    withSubfooter: true // Enable subfooter
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,C,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    numberOfColumns: 5 // 5 columns layout
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,T,j;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    numberOfColumns: 3 // 3 columns layout
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const E=["DefaultFooter","DarkFooter","PrimaryFooter","FooterWithSubfooter","FiveColumnFooter","ThreeColumnFooter"];export{o as DarkFooter,t as DefaultFooter,l as FiveColumnFooter,a as FooterWithSubfooter,s as PrimaryFooter,n as ThreeColumnFooter,E as __namedExportsOrder,A as default};
