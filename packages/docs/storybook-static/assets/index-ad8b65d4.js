import{q as u,$ as b,a as p,b as h,j as o,U as y,c as v,d as z,C as S,n as C}from"./index-e50a7969.js";var d=Object.defineProperty,j=Object.defineProperties,k=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,s=(e,r,a)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,n=(e,r)=>{for(var a in r||(r={}))g.call(r,a)&&s(e,a,r[a]);if(l)for(var a of l(r))$.call(r,a)&&s(e,a,r[a]);return e},c=(e,r)=>j(e,k(r)),w=(e,r)=>{var a={};for(var i in e)g.call(e,i)&&r.indexOf(i)<0&&(a[i]=e[i]);if(e!=null&&l)for(var i of l(e))r.indexOf(i)<0&&$.call(e,i)&&(a[i]=e[i]);return a},F=(e,r)=>{for(var a in r)d(e,a,{get:r[a],enumerable:!0})},f={};F(f,{colors:()=>O,fontSizes:()=>A,fontWeights:()=>E,fonts:()=>T,lineHeights:()=>H,radii:()=>N,space:()=>R});var O={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},R={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},N={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},T={default:"Roboto, sans-serif",heading:"Montserrat, sans-serif",code:"monospace"},A={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},E={regular:"400",medium:"500",bold:"700"},H={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:t,css:ie,globalCss:ne,keyframes:m,getCssText:le,theme:se,createTheme:de,config:ge}=u({themeMap:c(n({},C),{height:"space",width:"space"}),theme:n({},f)}),I=t("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});I.displayName="Box";var x=t("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"3xl":{fontSize:"$3xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});x.displayName="Text";var W=t("p",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"5$xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}}});W.displayName="Heading";var P=t(b,{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",overflow:"hidden",userSelect:"none",width:"$12",height:"$12",borderRadius:"$full",backgroundColor:"$gray800",border:"2px solid $gray600",color:"$gray100",fontFamily:"$default",fontSize:"$sm",lineHeight:"$shorter",fontWeight:"$medium",textTransform:"uppercase","&:empty":{"&::before":{content:'""',display:"block",width:"100%",height:"100%",backgroundColor:"$gray600",borderRadius:"$full"}}}),B=t(p,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),M=t(h,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{color:"$gray400",width:"$5",height:"$6"}});function Y(e){return o.jsxs(P,{children:[o.jsx(B,n({},e)),o.jsx(M,{delayMs:600,children:o.jsx(y,{})})]})}Y.displayName="Avatar";var V=t("button",{appearance:"none",fontFamily:"$default",fontSize:"$sm",lineHeight:"$shorter",textAlign:"center",fontWeight:"$medium",borderRadius:"$md",border:"none",boxSizing:"border-box",minWidth:120,cursor:"pointer",transition:"all 0.2s ease-in-out",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2","&:not(:disabled):hover":{color:"$gray100",backgroundColor:"$ignite700"},"&:disabled":{opacity:.5,cursor:"not-allowed"},svg:{width:"$4",height:"$4"},variants:{variant:{primary:{backgroundColor:"$ignite500",color:"$white","&:not(:disabled):hover":{backgroundColor:"$ignite700"}},secondary:{backgroundColor:"$gray500",color:"$gray100","&:not(:disabled):hover":{backgroundColor:"$gray700"}},outline:{border:"2px solid $ignite500",backgroundColor:"transparent",color:"$ignite500"},ghost:{backgroundColor:"transparent",border:"none","&:not(:disabled):hover":{backgroundColor:"$ignite700"}}},size:{sm:{padding:"0 $2",height:32,fontSize:"$sm"},md:{padding:"0 $4",height:46}}},defaultVariants:{variant:"primary",size:"md"}});V.displayName="Button";var q=t("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$md",boxSizing:"border-box",border:"2px solid $gray800",display:"flex",alignItems:"baseline",transition:"all 0.2s ease-in-out",cursor:"text","&:has(input:focus)":{borderColor:"$ignite500"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),D=t("span",{color:"$gray400",fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular"}),U=t("input",{backgroundColor:"transparent",border:"none",color:"$white",fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular",outline:"none",width:"100%","&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}});function G(e){var r=e,{prefix:a}=r,i=w(r,["prefix"]);return o.jsxs(q,{children:[!!a&&o.jsx(D,{children:a}),o.jsx(U,n({},i))]})}G.displayName="TextInput";var K=t("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$md",boxSizing:"border-box",border:"2px solid $gray800",transition:"all 0.2s ease-in-out",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:"none",borderColor:"$ignite500"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});K.displayName="TextArea";var L=m({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),X=m({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Z=t(v,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,border:"2px solid $gray700",cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",'&[data-state="checked"]':{backgroundColor:"$ignite500"},"&:focus":{borderColor:"$ignite300"}}),J=t(z,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${L} 0.2s ease-in`},'&[data-state="unchecked"]':{animation:`${X} 0.2s ease-out`}});function Q(e){return o.jsx(Z,c(n({},e),{children:o.jsx(J,{asChild:!0,children:o.jsx(S,{weight:"bold"})})}))}Q.displayName="CheckBox";var _=t("div",{width:"100%"}),ee=t(x,{color:"$gray200",defaultVariants:{size:"xs"}}),re=t("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),ae=t("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{background:"$gray100"}}}});function te({currentStep:e=1,size:r}){return o.jsxs(_,{children:[o.jsxs(ee,{children:["Passo ",e," de ",r]}),o.jsx(re,{css:{"--steps-size":r},children:Array.from({length:r},(a,i)=>1+i).map(a=>o.jsx(ae,{active:e>=a},a))})]})}te.displayName="MultiStep";export{W as G,Y as K,G as Z,te as i,Q as n,I as q,K as t,x};
//# sourceMappingURL=index-ad8b65d4.js.map