const be={title:"StyleGuide / Typography2",tags:["autodocs"],render:({label:ye,type:a,fontWeight:ge,color:He,as:e,customColor:me})=>{const ue={"Display 1":"text-9xl","Display 2":"text-8xl","Display 3":"text-7xl","Display 4":"text-6xl","Display 5":"text-5xl","Heading 1":"text-4xl","Heading 2":"text-3xl","Heading 3":"text-2xl","Heading 4":"text-xl","Heading 5":"text-lg","Heading 6":"text-base","Body Text - Large":"text-lg","Body Text - Regular":"text-base","Body Text - Medium":"text-md","Body Text - Small":"text-sm","Body Text - Extra Small":"text-xs"};a.startsWith("Display")?e="h1":a.startsWith("Heading")?e=`h${a.split(" ")[1]}`:e="p";const xe=`text-[${me}]`;return`<${e} class="${ue[a]} ${ge} ${xe}">${ye}</${e}>`},argTypes:{type:{control:{type:"select"},options:["Display 1","Display 2","Display 3","Display 4","Display 5","Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Heading 6","Body Text - Large","Body Text - Medium","Body Text - Regular","Body Text - Small","Body Text - Extra Small"],description:"Select the size/type of the typography (Display, Heading, or Body Text).",table:{defaultValue:{summary:"Display 1"}}},fontWeight:{control:{type:"select"},options:["font-light","font-normal","font-semibold","font-medium","font-bold","font-black"],description:"Choose the font weight of the text.",table:{defaultValue:{summary:"font-normal"}}},label:{control:"text",description:"The text content that will be displayed.",table:{defaultValue:{summary:"Heading"}}},color:{control:{type:"select"},options:["primary","secondary","danger","warning","info","success"],description:"Select the color variant for the text.",table:{defaultValue:{summary:"text-primary"}}},customColor:{control:"color",table:{defaultValue:{summary:"#003b20"}}},as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p"],description:"HTML tag used for the text element.",table:{defaultValue:{summary:"h1"}}}},args:{type:"Display 1",fontWeight:"font-normal",label:"Heading",color:"text-primary",as:"h1"}},r={args:{type:"Display 1",label:"Display 1"}},t={args:{type:"Display 2",label:"Display 2"}},s={args:{type:"Display 3",label:"Display 3"}},o={args:{type:"Display 4",label:"Display 4"}},l={args:{type:"Display 5",label:"Display 5"}},n={args:{type:"Heading 1",label:"Heading 1"}},p={args:{type:"Heading 2",label:"Heading 2"}},d={args:{type:"Heading 3",label:"Heading 3"}},i={args:{type:"Heading 4",label:"Heading 4"}},c={args:{type:"Heading 5",label:"Heading 5"}},y={args:{type:"Heading 6",label:"Heading 6"}},g={args:{type:"Body Text - Medium",label:"Body Text - Medium",as:"p"}},m={args:{type:"Body Text - Large",label:"Body Text - Large",as:"p"}},u={args:{type:"Body Text - Regular",label:"Body Text - Regular",as:"p"}},x={args:{type:"Body Text - Small",label:"Body Text - Small",as:"p"}},H={args:{type:"Body Text - Extra Small",label:"Body Text - Extra Small",as:"p"}};var b,T,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "Display 1",
    label: "Display 1"
  }
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var B,S,h;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "Display 2",
    label: "Display 2"
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var f,E,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: "Display 3",
    label: "Display 3"
  }
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,R,$;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: "Display 4",
    label: "Display 4"
  }
}`,...($=(R=o.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var V,W,w;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: "Display 5",
    label: "Display 5"
  }
}`,...(w=(W=l.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var C,_,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "Heading 1",
    label: "Heading 1"
  }
}`,...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var v,z,G;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "Heading 2",
    label: "Heading 2"
  }
}`,...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var O,j,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "Heading 3",
    label: "Heading 3"
  }
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var A,F,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "Heading 4",
    label: "Heading 4"
  }
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var J,K,N;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: "Heading 5",
    label: "Heading 5"
  }
}`,...(N=(K=c.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var P,Q,U;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: "Heading 6",
    label: "Heading 6"
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: "Body Text - Medium",
    label: "Body Text - Medium",
    as: "p"
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: "Body Text - Large",
    label: "Body Text - Large",
    as: "p"
  }
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,oe;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: "Body Text - Regular",
    label: "Body Text - Regular",
    as: "p"
  }
}`,...(oe=(se=u.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ne,pe;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    type: "Body Text - Small",
    label: "Body Text - Small",
    as: "p"
  }
}`,...(pe=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:pe.source}}};var de,ie,ce;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    type: "Body Text - Extra Small",
    label: "Body Text - Extra Small",
    as: "p"
  }
}`,...(ce=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Te=["Display1","Display2","Display3","Display4","Display5","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","BodyTextMedium","BodyTextLarge","BodyTextRegular","BodyTextSmall","BodyTextExtraSmall"];export{H as BodyTextExtraSmall,m as BodyTextLarge,g as BodyTextMedium,u as BodyTextRegular,x as BodyTextSmall,r as Display1,t as Display2,s as Display3,o as Display4,l as Display5,n as Heading1,p as Heading2,d as Heading3,i as Heading4,c as Heading5,y as Heading6,Te as __namedExportsOrder,be as default};
