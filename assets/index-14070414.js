import{R as h,r as u,a as He}from"./index-4ab02870.js";import{_ as A}from"./extends-98964cd2.js";import{j as z}from"./jsx-runtime-085e4f13.js";var y="colors",w="sizes",p="space",$e={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:y,backgroundColor:y,backgroundImage:y,borderImage:y,border:y,borderBlock:y,borderBlockEnd:y,borderBlockStart:y,borderBottom:y,borderBottomColor:y,borderColor:y,borderInline:y,borderInlineEnd:y,borderInlineStart:y,borderLeft:y,borderLeftColor:y,borderRight:y,borderRightColor:y,borderTop:y,borderTopColor:y,caretColor:y,color:y,columnRuleColor:y,fill:y,outline:y,outlineColor:y,stroke:y,textDecorationColor:y,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ue=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,U=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(i=>JSON.stringify(i,Ue))(t);return o in e?e[o]:e[o]=n(t,...r)}},N=Symbol.for("sxs.internal"),ae=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ce=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Ve}=Object.prototype,oe=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Ge=/\s+(?![^()]*\))/,D=e=>t=>e(...typeof t=="string"?String(t).split(Ge):[t]),de={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:D((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:D((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:D((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:D((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:D((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:D((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,Ye=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o)),n),[]):t,qe=(e,t)=>e in Ze&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,o,i)=>r+(o==="stretch"?`-moz-available${i};${oe(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${oe(e)}:${r}fit-content`)+i):String(t),Ze={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},M=e=>e?e+"-":"",xe=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,o,i,l,a)=>l=="$"==!!i?r:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?M(t)+(a.includes("$")?"":M(n))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),Ke=/\s*,\s*(?![^()]*\))/,Je=Object.prototype.toString,H=(e,t,n,r,o)=>{let i,l,a;const s=(d,m,f)=>{let c,g;const b=S=>{for(c in S){const v=c.charCodeAt(0)===64,E=v&&Array.isArray(S[c])?S[c]:[S[c]];for(g of E){const C=/[A-Z]/.test($=c)?$:$.replace(/-[^]/g,R=>R[1].toUpperCase()),V=typeof g=="object"&&g&&g.toString===Je&&(!r.utils[C]||!m.length);if(C in r.utils&&!V){const R=r.utils[C];if(R!==l){l=R,b(R(g)),l=null;continue}}else if(C in de){const R=de[C];if(R!==a){a=R,b(R(g)),a=null;continue}}if(v&&(x=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,I,P,W,B,j)=>{const F=re.test(I),J=.0625*(F?-1:1),[X,le]=F?[W,I]:[I,W];return"("+(P[0]==="="?"":P[0]===">"===F?"max-":"min-")+X+":"+(P[0]!=="="&&P.length===1?le.replace(re,(De,te,ne)=>Number(te)+J*(P===">"?1:-1)+ne):le)+(B?") and ("+(B[0]===">"?"min-":"max-")+X+":"+(B.length===1?j.replace(re,(De,te,ne)=>Number(te)+J*(B===">"?-1:1)+ne):j):"")+")"})),V){const R=v?f.concat(c):[...f],I=v?[...m]:Ye(m,c.split(Ke));i!==void 0&&o(ue(...i)),i=void 0,s(g,I,R)}else i===void 0&&(i=[[],m,f]),c=v||c.charCodeAt(0)!==36?c:`--${M(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=V?g:typeof g=="number"?g&&C in Xe?String(g)+"px":String(g):xe(qe(C,g??""),r.prefix,r.themeMap[C]),i[0].push(`${v?`${c} `:`${oe(c)}:`}${g}`)}}var x,$};b(d),i!==void 0&&o(ue(...i)),i=void 0};s(e,t,n)},ue=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,Xe={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},fe=e=>String.fromCharCode(e+(e>25?39:97)),L=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=fe(n%52)+r;return fe(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),Y=["themed","global","styled","onevar","resonevar","allvar","inline"],Qe=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},et=e=>{let t;const n=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},r=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const d in a)delete a[d]}const o=Object(e).styleSheets||[];for(const a of o)if(Qe(a)){for(let s=0,d=a.cssRules;d[s];++s){const m=Object(d[s]);if(m.type!==1)continue;const f=Object(d[s+1]);if(f.type!==4)continue;++s;const{cssText:c}=m;if(!c.startsWith("--sxs"))continue;const g=c.slice(14,-3).trim().split(/\s+/),b=Y[g[0]];b&&(t||(t={sheet:a,reset:r,rules:{},toString:n}),t.rules[b]={group:f,index:s,cache:new Set(g)})}if(t)break}if(!t){const a=(s,d)=>({type:d,cssRules:[],insertRule(m,f){this.cssRules.splice(f,0,a(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:l}=t;for(let a=Y.length-1;a>=0;--a){const s=Y[a];if(!l[s]){const d=Y[a+1],m=l[d]?l[d].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${a}}`,m),l[s]={group:i.cssRules[m+1],index:m,cache:new Set([a])}}tt(l[s])}};return r(),t},tt=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},G=Symbol(),nt=U(),pe=(e,t)=>nt(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[N]){r.type==null&&(r.type=o[N].type);for(const i of o[N].composers)r.composers.add(i)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(rt(o,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),ot(e,r,t)}),rt=({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${M(o.prefix)}c-${L(r)}`,l=[],a=[],s=Object.create(null),d=[];for(const c in n)s[c]=String(n[c]);if(typeof e=="object"&&e)for(const c in e){m=s,f=c,Ve.call(m,f)||(s[c]="undefined");const g=e[c];for(const b in g){const S={[c]:String(b)};String(b)==="undefined"&&d.push(c);const x=g[b],$=[S,x,!ce(x)];l.push($)}}var m,f;if(typeof t=="object"&&t)for(const c of t){let{css:g,...b}=c;g=typeof g=="object"&&g||{};for(const x in b)b[x]=String(b[x]);const S=[b,g,!ce(g)];a.push(S)}return[i,r,l,a,s,d]},ot=(e,t,n)=>{const[r,o,i,l]=it(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(f=>{function c(){for(let g=0;g<c[G].length;g++){const[b,S]=c[G][g];f.rules[b].apply(S)}return c[G]=[],null}return c[G]=[],c.rules={},Y.forEach(g=>c.rules[g]={apply:b=>c[G].push([g,b])}),c})(n):null,s=(a||n).rules,d=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=f=>{f=typeof f=="object"&&f||at;const{css:c,...g}=f,b={};for(const $ in i)if(delete g[$],$ in f){let v=f[$];typeof v=="object"&&v?b[$]={"@initial":i[$],...v}:(v=String(v),b[$]=v!=="undefined"||l.has($)?v:i[$])}else b[$]=i[$];const S=new Set([...o]);for(const[$,v,E,C]of t.composers){n.rules.styled.cache.has($)||(n.rules.styled.cache.add($),H(v,[`.${$}`],[],e,I=>{s.styled.apply(I)}));const V=ge(E,b,e.media),R=ge(C,b,e.media,!0);for(const I of V)if(I!==void 0)for(const[P,W,B]of I){const j=`${$}-${L(W)}-${P}`;S.add(j);const F=(B?n.rules.resonevar:n.rules.onevar).cache,J=B?s.resonevar:s.onevar;F.has(j)||(F.add(j),H(W,[`.${j}`],[],e,X=>{J.apply(X)}))}for(const I of R)if(I!==void 0)for(const[P,W]of I){const B=`${$}-${L(W)}-${P}`;S.add(B),n.rules.allvar.cache.has(B)||(n.rules.allvar.cache.add(B),H(W,[`.${B}`],[],e,j=>{s.allvar.apply(j)}))}}if(typeof c=="object"&&c){const $=`${r}-i${L(c)}-css`;S.add($),n.rules.inline.cache.has($)||(n.rules.inline.cache.add($),H(c,[`.${$}`],[],e,v=>{s.inline.apply(v)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&S.add($);const x=g.className=[...S].join(" ");return{type:t.type,className:x,selector:d,props:g,toString:()=>x,deferredInjector:a}};return ae(m,{className:r,selector:d,[N]:t,toString:()=>(n.rules.styled.cache.has(r)||m(),r)})},it=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),n.push(i),o.push(...a);for(const s in l){const d=l[s];(r[s]===void 0||d!=="undefined"||a.includes(d))&&(r[s]=d)}}return[t,n,r,new Set(o)]},ge=(e,t,n,r)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,d=0,m=!1;for(s in i){const f=i[s];let c=t[s];if(c!==f){if(typeof c!="object"||!c)continue e;{let g,b,S=0;for(const x in c){if(f===String(c[x])){if(x!=="@initial"){const $=x.slice(1);(b=b||[]).push($ in n?n[$]:x.replace(/^@media ?/,"")),m=!0}d+=S,g=!0}++S}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!g)continue e}}}(o[d]=o[d]||[]).push([r?"cv":`${s}-${i[s]}`,l,m])}return o},at={},st=U(),lt=(e,t)=>st(e,()=>(...n)=>{const r=()=>{for(let o of n){o=typeof o=="object"&&o||{};let i=L(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}H(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return ae(r,{toString:r})}),ct=U(),dt=(e,t)=>ct(e,()=>n=>{const r=`${M(e.prefix)}k-${L(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];H(n,[],[],e,a=>i.push(a));const l=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(l)}return r};return ae(o,{get name(){return o()},toString:o})}),ut=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+M(this.prefix)+M(this.scale)+this.token}toString(){return this.computedValue}},ft=U(),pt=(e,t)=>ft(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const o=`.${n=(n=typeof n=="string"?n:"")||`${M(e.prefix)}t-${L(r)}`}`,i={},l=[];for(const s in r){i[s]={};for(const d in r[s]){const m=`--${M(e.prefix)}${s}-${d}`,f=xe(String(r[s][d]),e.prefix,s);i[s][d]=new ut(d,f,s,e.prefix),l.push(`${m}:${f}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const s=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(s)}return n};return{...i,get className(){return a()},selector:o,toString:a}}),gt=U(),mt=U(),ht=e=>{const t=(n=>{let r=!1;const o=gt(n,i=>{r=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:a,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...$e},utils:typeof i.utils=="object"&&i.utils||{}},f=et(s),c={css:pe(m,f),globalCss:lt(m,f),keyframes:dt(m,f),createTheme:pt(m,f),reset(){f.reset(),c.theme.toString()},theme:{},sheet:f,config:m,prefix:l,getCssText:f.toString,toString:f.toString};return String(c.theme=c.createTheme(d)),c});return r||o.reset(),o})(e);return t.styled=(({config:n,sheet:r})=>mt(n,()=>{const o=pe(n,r);return(...i)=>{const l=o(...i),a=l[N].type,s=h.forwardRef((d,m)=>{const f=d&&d.as||a,{props:c,deferredInjector:g}=l(d);return delete c.as,c.ref=m,g?h.createElement(h.Fragment,null,h.createElement(f,c),h.createElement(g,null)):h.createElement(f,c)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[N]=l[N],s}}))(t),t},bt=u.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ye=function(t,n,r){var o=r.get(t);return o?o(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function me(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Se=u.forwardRef(function(e,t){var n=e.alt,r=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,d=me(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=u.useContext(bt),f=m.color,c=f===void 0?"currentColor":f,g=m.size,b=m.weight,S=b===void 0?"regular":b,x=m.mirrored,$=x===void 0?!1:x,v=me(m,["color","size","weight","mirrored"]);return h.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??g,height:o??g,fill:r??c,viewBox:"0 0 256 256",transform:l||$?"scale(-1, 1)":void 0},v,d),!!n&&h.createElement("title",null,n),a,h.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??S,r??c))});Se.displayName="IconBase";const ve=Se;var T=new Map;T.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});T.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $t=function(t,n){return ye(t,n,T)},ke=u.forwardRef(function(e,t){return h.createElement(ve,Object.assign({ref:t},e,{renderPath:$t}))});ke.displayName="Check";const xt=ke;var O=new Map;O.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});O.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var yt=function(t,n){return ye(t,n,O)},Ce=u.forwardRef(function(e,t){return h.createElement(ve,Object.assign({ref:t},e,{renderPath:yt}))});Ce.displayName="User";const St=Ce;function Ee(e,t=[]){let n=[];function r(i,l){const a=u.createContext(l),s=n.length;n=[...n,l];function d(f){const{scope:c,children:g,...b}=f,S=(c==null?void 0:c[e][s])||a,x=u.useMemo(()=>b,Object.values(b));return u.createElement(S.Provider,{value:x},g)}function m(f,c){const g=(c==null?void 0:c[e][s])||a,b=u.useContext(g);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,m]}const o=()=>{const i=n.map(l=>u.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[r,vt(o,...t)]}function vt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((a,{useScope:s,scopeName:d})=>{const f=s(i)[`__scope${d}`];return{...a,...f}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function se(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}const q=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{};function kt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function we(...e){return t=>e.forEach(n=>kt(n,t))}function Re(...e){return u.useCallback(we(...e),e)}const ze=u.forwardRef((e,t)=>{const{children:n,...r}=e,o=u.Children.toArray(n),i=o.find(Et);if(i){const l=i.props.children,a=o.map(s=>s===i?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:s);return u.createElement(ie,A({},r,{ref:t}),u.isValidElement(l)?u.cloneElement(l,void 0,a):null)}return u.createElement(ie,A({},r,{ref:t}),n)});ze.displayName="Slot";const ie=u.forwardRef((e,t)=>{const{children:n,...r}=e;return u.isValidElement(n)?u.cloneElement(n,{...wt(r,n.props),ref:t?we(t,n.ref):n.ref}):u.Children.count(n)>1?u.Children.only(null):null});ie.displayName="SlotClone";const Ct=({children:e})=>u.createElement(u.Fragment,null,e);function Et(e){return u.isValidElement(e)&&e.type===Ct}function wt(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const Rt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],K=Rt.reduce((e,t)=>{const n=u.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?ze:t;return u.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),u.createElement(a,A({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Ie="Avatar",[zt,Nn]=Ee(Ie),[It,Be]=zt(Ie),Bt=u.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=u.useState("idle");return u.createElement(It,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},u.createElement(K.span,A({},r,{ref:t})))}),Pt="AvatarImage",jt=u.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=()=>{},...i}=e,l=Be(Pt,n),a=Wt(r),s=se(d=>{o(d),l.onImageLoadingStatusChange(d)});return q(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?u.createElement(K.img,A({},i,{ref:t,src:r})):null}),At="AvatarFallback",Mt=u.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=Be(At,n),[l,a]=u.useState(r===void 0);return u.useEffect(()=>{if(r!==void 0){const s=window.setTimeout(()=>a(!0),r);return()=>window.clearTimeout(s)}},[r]),l&&i.imageLoadingStatus!=="loaded"?u.createElement(K.span,A({},o,{ref:t})):null});function Wt(e){const[t,n]=u.useState("idle");return q(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=l=>()=>{r&&n(l)};return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}const Nt=Bt,Lt=jt,_t=Mt;function he(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Tt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Ot({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=se(n),s=u.useCallback(d=>{if(i){const f=typeof d=="function"?d(e):d;f!==e&&a(f)}else o(d)},[i,e,o,a]);return[l,s]}function Ot({defaultProp:e,onChange:t}){const n=u.useState(e),[r]=n,o=u.useRef(r),i=se(t);return u.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}function Ft(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Dt(e){const[t,n]=u.useState(void 0);return q(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,d=Array.isArray(s)?s[0]:s;l=d.inlineSize,a=d.blockSize}else l=e.offsetWidth,a=e.offsetHeight;n({width:l,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function Ht(e,t){return u.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Pe=e=>{const{present:t,children:n}=e,r=Ut(t),o=typeof n=="function"?n({present:r.isPresent}):u.Children.only(n),i=Re(r.ref,o.ref);return typeof n=="function"||r.isPresent?u.cloneElement(o,{ref:i}):null};Pe.displayName="Presence";function Ut(e){const[t,n]=u.useState(),r=u.useRef({}),o=u.useRef(e),i=u.useRef("none"),l=e?"mounted":"unmounted",[a,s]=Ht(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const d=Q(r.current);i.current=a==="mounted"?d:"none"},[a]),q(()=>{const d=r.current,m=o.current;if(m!==e){const c=i.current,g=Q(d);e?s("MOUNT"):g==="none"||(d==null?void 0:d.display)==="none"?s("UNMOUNT"):s(m&&c!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),q(()=>{if(t){const d=f=>{const g=Q(r.current).includes(f.animationName);f.target===t&&g&&He.flushSync(()=>s("ANIMATION_END"))},m=f=>{f.target===t&&(i.current=Q(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:u.useCallback(d=>{d&&(r.current=getComputedStyle(d)),n(d)},[])}}function Q(e){return(e==null?void 0:e.animationName)||"none"}const je="Checkbox",[Vt,Ln]=Ee(je),[Gt,Yt]=Vt(je),qt=u.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:d,...m}=e,[f,c]=u.useState(null),g=Re(t,E=>c(E)),b=u.useRef(!1),S=f?!!f.closest("form"):!0,[x=!1,$]=Tt({prop:o,defaultProp:i,onChange:d}),v=u.useRef(x);return u.useEffect(()=>{const E=f==null?void 0:f.form;if(E){const C=()=>$(v.current);return E.addEventListener("reset",C),()=>E.removeEventListener("reset",C)}},[f,$]),u.createElement(Gt,{scope:n,state:x,disabled:a},u.createElement(K.button,A({type:"button",role:"checkbox","aria-checked":_(x)?"mixed":x,"aria-required":l,"data-state":Ae(x),"data-disabled":a?"":void 0,disabled:a,value:s},m,{ref:g,onKeyDown:he(e.onKeyDown,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:he(e.onClick,E=>{$(C=>_(C)?!0:!C),S&&(b.current=E.isPropagationStopped(),b.current||E.stopPropagation())})})),S&&u.createElement(Jt,{control:f,bubbles:!b.current,name:r,value:s,checked:x,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),Zt="CheckboxIndicator",Kt=u.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=Yt(Zt,n);return u.createElement(Pe,{present:r||_(i.state)||i.state===!0},u.createElement(K.span,A({"data-state":Ae(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Jt=e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=u.useRef(null),l=Ft(n),a=Dt(t);return u.useEffect(()=>{const s=i.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"checked").set;if(l!==n&&f){const c=new Event("click",{bubbles:r});s.indeterminate=_(n),f.call(s,_(n)?!1:n),s.dispatchEvent(c)}},[l,n,r]),u.createElement("input",A({type:"checkbox","aria-hidden":!0,defaultChecked:_(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _(e){return e==="indeterminate"}function Ae(e){return _(e)?"indeterminate":e?"checked":"unchecked"}const Xt=qt,Qt=Kt;var Me=Object.defineProperty,en=Object.defineProperties,tn=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,be=(e,t,n)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))We.call(t,n)&&be(e,n,t[n]);if(ee)for(var n of ee(t))Ne.call(t,n)&&be(e,n,t[n]);return e},Le=(e,t)=>en(e,tn(t)),nn=(e,t)=>{var n={};for(var r in e)We.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ee)for(var r of ee(e))t.indexOf(r)<0&&Ne.call(e,r)&&(n[r]=e[r]);return n},rn=(e,t)=>{for(var n in t)Me(e,n,{get:t[n],enumerable:!0})},_e={};rn(_e,{colors:()=>on,fontSizes:()=>cn,fontWeights:()=>dn,fonts:()=>ln,lineHeights:()=>un,radii:()=>sn,space:()=>an});var on={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",test:"#fff"},an={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},sn={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},ln={default:"Roboto, sans-serif",heading:"Montserrat, sans-serif",code:"monospace"},cn={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},dn={regular:"400",medium:"500",bold:"700"},un={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:k,css:_n,globalCss:Tn,keyframes:Te,getCssText:On,theme:Fn,createTheme:Dn,config:Hn}=ht({themeMap:Le(Z({},$e),{height:"space",width:"space"}),theme:Z({},_e)}),fn=k("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});fn.displayName="Box";var Oe=k("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"3xl":{fontSize:"$3xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Oe.displayName="Text";var pn=k("p",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"5$xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}}});pn.displayName="Heading";var gn=k(Nt,{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",overflow:"hidden",userSelect:"none",width:"$16",height:"$16",borderRadius:"$full",backgroundColor:"$gray800",border:"2px solid $gray600",color:"$gray100",fontFamily:"$default",fontSize:"$sm",lineHeight:"$shorter",fontWeight:"$medium",textTransform:"uppercase","&:empty":{"&::before":{content:'""',display:"block",width:"100%",height:"100%",backgroundColor:"$gray600",borderRadius:"$full"}}}),mn=k(Lt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),hn=k(_t,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{color:"$gray400",width:"$5",height:"$6"}});function bn(e){return z.jsxs(gn,{children:[z.jsx(mn,Z({},e)),z.jsx(hn,{delayMs:600,children:z.jsx(St,{})})]})}bn.displayName="Avatar";var $n=k("button",{appearance:"none",fontFamily:"$default",fontSize:"$sm",lineHeight:"$shorter",textAlign:"center",fontWeight:"$medium",borderRadius:"$md",border:"none",boxSizing:"border-box",minWidth:120,cursor:"pointer",transition:"all 0.2s ease-in-out",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2","&:not(:disabled):hover":{color:"$gray100",backgroundColor:"$ignite700"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$ignite500"},svg:{width:"$4",height:"$4"},variants:{variant:{primary:{backgroundColor:"$ignite500",color:"$white","&:not(:disabled):hover":{backgroundColor:"$ignite700"}},secondary:{backgroundColor:"$gray500",color:"$gray100","&:not(:disabled):hover":{backgroundColor:"$gray700"}},outline:{border:"2px solid $ignite500",backgroundColor:"transparent",color:"$ignite500"},ghost:{backgroundColor:"transparent",border:"none","&:not(:disabled):hover":{backgroundColor:"$ignite700"}}},size:{sm:{padding:"0 $2",height:32,fontSize:"$sm"},md:{padding:"0 $4",height:46}}},defaultVariants:{variant:"primary",size:"md"}});$n.displayName="Button";var xn=k("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$md",boxSizing:"border-box",border:"2px solid $gray800",display:"flex",alignItems:"center",transition:"all 0.2s ease-in-out",cursor:"text","&:has(input:focus)":{borderColor:"$ignite500"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},defaultVariants:{size:"md"}}),yn=k("span",{color:"$gray400",fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular"}),Sn=k("input",{backgroundColor:"transparent",border:"none",color:"$white",fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular",outline:"none",width:"100%","&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Fe=h.forwardRef((e,t)=>{var n=e,{prefix:r}=n,o=nn(n,["prefix"]);return z.jsxs(xn,{children:[!!r&&z.jsx(yn,{children:r}),z.jsx(Sn,Z({ref:t},o))]})});Fe.displayName="TextInput";var vn=k("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$md",boxSizing:"border-box",border:"2px solid $gray800",transition:"all 0.2s ease-in-out",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:"none",borderColor:"$ignite500"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});vn.displayName="TextArea";var kn=Te({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Cn=Te({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),En=k(Xt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,border:"2px solid $gray700",cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",'&[data-state="checked"]':{backgroundColor:"$ignite500"},'&:focus, &[data-state="checked"]':{borderColor:"$ignite300"}}),wn=k(Qt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${kn} 0.2s ease-in`},'&[data-state="unchecked"]':{animation:`${Cn} 0.2s ease-out`}});function Rn(e){return z.jsx(En,Le(Z({},e),{children:z.jsx(wn,{asChild:!0,children:z.jsx(xt,{weight:"bold"})})}))}Rn.displayName="CheckBox";var zn=k("div",{width:"100%"}),In=k(Oe,{color:"$gray200",defaultVariants:{size:"xs"}}),Bn=k("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Pn=k("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{background:"$gray100"}}}});function jn({currentStep:e=1,size:t}){return z.jsxs(zn,{children:[z.jsxs(In,{children:["Passo ",e," de ",t]}),z.jsx(Bn,{css:{"--steps-size":t},children:Array.from({length:t},(n,r)=>1+r).map(n=>z.jsx(Pn,{active:e>=n},n))})]})}jn.displayName="MultiStep";Fe.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{bn as A,fn as B,Rn as C,pn as H,ve as I,jn as M,Fe as T,Oe as a,vn as b,$n as c,ye as r};
//# sourceMappingURL=index-14070414.js.map