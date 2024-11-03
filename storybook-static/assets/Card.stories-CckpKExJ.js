const E=({title:t,subtitle:a,description:d,withImage:T,imageUrl:U,withAvatar:J,withActionButton:P,horizontal:z,type:u})=>{const D={basic:"bg-white text-slate-500",eCommerce:"bg-white text-slate-500",socialStory:"bg-white text-slate-500",userProfile:"bg-white text-slate-500",form:"bg-white text-slate-500",imageOverlay:"bg-gray-700 text-white"},F=z?"flex-row":"flex-col",p=J?`<a href="#" class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
            <img src="https://i.pravatar.cc/48" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
          </a>`:"",I=P?`<div class="flex justify-end gap-2 p-2 pt-0">
            <button class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700">
              <span>Read more</span>
            </button>
          </div>`:"",c=T?`<figure>
          <img src="${U}" alt="card image" class="aspect-video w-full" />
        </figure>`:"";let e="";switch(u){case"eCommerce":e=`
          ${c}
          <div class="p-6">
            <header class="mb-4">
              <h3 class="text-xl font-medium">${t}</h3>
              <p class="text-slate-400">${a}</p>
            </header>
            <p>${d}</p>
          </div>
          <div class="flex justify-end p-6 pt-0">
            <button class="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700">
              <span>Order now!</span>
            </button>
          </div>`;break;case"socialStory":e=`
          <div class="p-6">
            <header class="flex gap-4">
              ${p}
              <div>
                <h3 class="text-xl font-medium">${t}</h3>
                <p class="text-sm text-slate-400">${a}</p>
              </div>
            </header>
          </div>
          ${c}
          <div class="p-6">
            <p>${d}</p>
          </div>
          ${I}`;break;case"userProfile":e=`
          <figure class="p-6 pb-0">
            ${p}
          </figure>
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium">${t}</h3>
            <p class="text-slate-400">${a}</p>
          </div>
          <div class="flex justify-end gap-2 p-6 pt-0">
            <button class="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium transition duration-300 rounded bg-emerald-50 text-emerald-500 hover:bg-emerald-100">
              Send message
            </button>
            <button class="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium text-white transition duration-300 rounded bg-emerald-500 hover:bg-emerald-600">
              Add friend
            </button>
          </div>`;break;case"basic":default:e=`
          ${c}
          <div class="p-6">
            <header>
              <h3 class="text-xl font-medium">${t}</h3>
              <p class="text-sm text-slate-400">${a}</p>
            </header>
          </div>`;break}return`
      <div class="overflow-hidden rounded shadow-md ${D[u]} ${F}">
        ${e}
      </div>`},L={title:"Components / Card",tags:["autodocs"],render:E,parameters:{layout:"centered",docs:{description:{component:"The card component is flexible and supports various configurations including title, subtitle, description, image, avatar, action buttons, and different layout options."}}},argTypes:{type:{control:{type:"select"},options:["basic","eCommerce","socialStory","userProfile","form","imageOverlay"],defaultValue:"basic",description:"The type of card which affects the overall style."},title:{control:"text",defaultValue:"In the Urban Jungle",description:"The main title of the card."},subtitle:{control:"text",defaultValue:"By Mary Jay, June 3, 2023",description:"The subtitle or meta information below the title."},description:{control:"text",defaultValue:"A simple, yet beautiful way of life that explains the sunny outlook.",description:"The content or body of the card."},withImage:{control:"boolean",defaultValue:!0,description:"Show or hide the image in the card."},imageUrl:{control:"text",defaultValue:"https://picsum.photos/id/1081/800/600",description:"The URL of the image displayed on the card.",if:{arg:"withImage",truthy:!0}},withAvatar:{control:"boolean",defaultValue:!0,description:"Show or hide the avatar in the card."},withActionButton:{control:"boolean",defaultValue:!0,description:"Show or hide the action button at the bottom of the card."},horizontal:{control:"boolean",defaultValue:!1,description:"Set to true for a horizontal card layout."}},args:{type:"basic",title:"Simple: Card Title",subtitle:"By Mary Jay, June 3, 2023",description:"There’s nothing better than hiking along the rocky footpaths, accompanied only by the noise of cicadas. As the boat docks in the harbor, gaze upon white and blue houses, craggy cliffs, sweeping olive groves, and the dazzling blues of the Aegean sea.",withImage:!1,imageUrl:"https://picsum.photos/id/1081/800/600",withAvatar:!1,withActionButton:!1,horizontal:!1}},r={args:{}},s={args:{type:"eCommerce",title:"Exclusive Offer",subtitle:"$8.99",description:"Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries + Granola + Honey."}},o={args:{type:"socialStory",title:"Life in the City",description:"A vibrant social life awaits you in the urban jungle."}},i={args:{type:"userProfile",title:"Jane Doe",subtitle:"Full Stack Developer",description:"Lover of code, cats, and coffee."}},n={args:{type:"form",title:"Sign Up",description:"Join our community by filling out the form.",withActionButton:!1}},l={args:{type:"imageOverlay",title:"Discover Nature",description:"An immersive experience in the wilderness.",imageUrl:"https://picsum.photos/id/1082/800/600",withAvatar:!1}};var m,h,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "eCommerce",
    title: "Exclusive Offer",
    subtitle: "$8.99",
    description: "Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries + Granola + Honey."
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,v,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "socialStory",
    title: "Life in the City",
    description: "A vibrant social life awaits you in the urban jungle."
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,S,$;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "userProfile",
    title: "Jane Doe",
    subtitle: "Full Stack Developer",
    description: "Lover of code, cats, and coffee."
  }
}`,...($=(S=i.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var A,k,B;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "form",
    title: "Sign Up",
    description: "Join our community by filling out the form.",
    withActionButton: false
  }
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var j,V,O;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "imageOverlay",
    title: "Discover Nature",
    description: "An immersive experience in the wilderness.",
    imageUrl: "https://picsum.photos/id/1082/800/600",
    withAvatar: false
  }
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const G=["BasicCard","ECommerceCard","SocialStoryCard","UserProfileCard","FormCard","ImageOverlayCard"];export{r as BasicCard,s as ECommerceCard,n as FormCard,l as ImageOverlayCard,o as SocialStoryCard,i as UserProfileCard,G as __namedExportsOrder,L as default};
