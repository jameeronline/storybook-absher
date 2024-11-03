const te=({type:Q="one-line",iconPosition:X="left",content:m=[],isSquare:Y=!1})=>{if(!m||m.length<3)throw new Error("Content must contain at least 3 items.");const Z={left:"lg:flex-row items-start",center:"flex-col items-center text-center","top-left":"flex-col items-start"},ee=Y?"flex items-center justify-center w-10 h-10 shrink-0 p-2 text-white rounded bg-primary-500":"text-primary-500 text-2xl leading-none";return`
      <div class="container px-6 mx-auto">
        <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          ${m.map(e=>`
          <div class="col-span-4">
            <div class="flex gap-4 ${Z[X]}">
              <div class="${ee}">
                <i class="bi bi-${e.iconName}"></i>
              </div>
              <div class="flex flex-col justify-center w-full min-w-0 text-base">
                ${Q==="title"?`
                        <h3 class="pb-2 mb-2 text-lg font-medium text-slate-700">${e.title}</h3>
                        <p class="text-slate-500">${e.description}</p>
                      `:`
                        <p class="text-slate-500">
                          <strong class="font-medium text-slate-700">${e.title}:</strong>
                          ${e.description}
                        </p>
                      `}
              </div>
            </div>
          </div>`).join("")}
        </div>
      </div>`},oe={title:"Components/Feature Item",tags:["autodocs"],component:te,parameters:{docs:{description:{component:"The FeatureItem component displays a feature with an icon and text, supporting various layouts and styles. The content argument is an array of objects, with each object containing title, description, and icon information."}}},argTypes:{type:{control:{type:"select"},options:["one-line","title"],defaultValue:"one-line",description:"Feature item type (One line or Title with text)"},iconPosition:{control:{type:"select"},options:["left","center","top-left"],defaultValue:"left",description:"Position of the icon relative to the content"},content:{control:"object",description:"An array of content objects, each containing title, description, and icon information."},isSquare:{control:"boolean",description:"Whether the icon should be square or not"}},args:{type:"one-line",iconPosition:"left",content:[{title:"Responsive",description:"Wind UI ensures your web application looks and functions flawlessly.",iconName:"gift"},{title:"Effortless Customization",description:"Easily customize the library's CSS to match your brand's unique aesthetics without the need for extensive coding.",iconName:"list"},{title:"Community-Driven Support",description:"Join a thriving community of developers and get access to regular updates, tutorials, and responsive support for your projects.",iconName:"people"}],isSquare:!1}},t={args:{type:"one-line",iconPosition:"left"}},n={args:{type:"title",iconPosition:"left"}},o={args:{type:"one-line",iconPosition:"left",isSquare:!0}},i={args:{type:"title",iconPosition:"left",isSquare:!0}},r={args:{type:"one-line",iconPosition:"center"}},s={args:{type:"title",iconPosition:"center"}},a={args:{type:"one-line",iconPosition:"center",isSquare:!0}},c={args:{type:"title",iconPosition:"center",isSquare:!0}},l={args:{type:"one-line",iconPosition:"top-left"}},p={args:{type:"title",iconPosition:"top-left"}},u={args:{type:"one-line",iconPosition:"top-left",isSquare:!0}},d={args:{type:"title",iconPosition:"top-left",isSquare:!0}};var f,g,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: "one-line",
    iconPosition: "left"
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,S,q;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "title",
    iconPosition: "left"
  }
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var I,x,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "one-line",
    iconPosition: "left",
    isSquare: true
  }
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var L,W,v;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "title",
    iconPosition: "left",
    isSquare: true
  }
}`,...(v=(W=i.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var C,T,b;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "one-line",
    iconPosition: "center"
  }
}`,...(b=(T=r.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var O,w,$;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "title",
    iconPosition: "center"
  }
}`,...($=(w=s.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var j,F,k;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "one-line",
    iconPosition: "center",
    isSquare: true
  }
}`,...(k=(F=a.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var E,N,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: "title",
    iconPosition: "center",
    isSquare: true
  }
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var z,M,V;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: "one-line",
    iconPosition: "top-left"
  }
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var A,D,J;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "title",
    iconPosition: "top-left"
  }
}`,...(J=(D=p.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var R,U,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "one-line",
    iconPosition: "top-left",
    isSquare: true
  }
}`,...(B=(U=u.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var G,H,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "title",
    iconPosition: "top-left",
    isSquare: true
  }
}`,...(K=(H=d.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const ie=["OneLineWithIconLeft","TitleWithIconLeft","OnelineWithSquereIconLeft","TitleWithSquereIconLeft","OnlineWithIconTopCenter","TitleWithIconTopCenter","OneLineWithSquareIconLeft","TitleLineWithSquareIconLeft","OneLineWithIconCenter","TitleLineWithIconCenter","OneLineWithSquareIconCenter","TitleLineWithSquareIconCenter"];export{l as OneLineWithIconCenter,t as OneLineWithIconLeft,u as OneLineWithSquareIconCenter,a as OneLineWithSquareIconLeft,o as OnelineWithSquereIconLeft,r as OnlineWithIconTopCenter,p as TitleLineWithIconCenter,d as TitleLineWithSquareIconCenter,c as TitleLineWithSquareIconLeft,n as TitleWithIconLeft,s as TitleWithIconTopCenter,i as TitleWithSquereIconLeft,ie as __namedExportsOrder,oe as default};
