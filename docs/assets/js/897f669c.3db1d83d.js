"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[676],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,l={unversionedId:"Rendering",id:"Rendering",title:"Rendering",description:"Rendering with MooMoo.js API",source:"@site/docs/Rendering.md",sourceDirName:".",slug:"/Rendering",permalink:"/MooMoo.js/Rendering",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/MooMoo.js/Managers/Commands"}},s={},c=[{value:"Rendering with MooMoo.js API",id:"rendering-with-moomoojs-api",level:2},{value:"Getting required information",id:"getting-required-information",level:2},{value:"Canvas",id:"canvas",level:3},{value:"Offsets",id:"offsets",level:3},{value:"Render tick",id:"render-tick",level:3},{value:"Using our built in functions",id:"using-our-built-in-functions",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rendering-with-moomoojs-api"},"Rendering with MooMoo.js API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"THIS IS NOT DONE YET, I STRONGLY RECOMMEND YOU DON'T USE IT YET, SINCE A LOT OF THINGS CAN CHANGE.")),(0,o.kt)("p",null,"Before we start rendering, I need to warn you that this is a very advanced topic."),(0,o.kt)("p",null,"The methods used to implement rendering are not very well made, basically I was reimplementing the game's way of rendering, and its not perfect."),(0,o.kt)("h2",{id:"getting-required-information"},"Getting required information"),(0,o.kt)("p",null,"If you plan on not using our built in functions, but rather want to make your own, you will need some information."),(0,o.kt)("h3",{id:"canvas"},"Canvas"),(0,o.kt)("p",null,"First, you will need the canvas and its CanvasRenderingContext2D."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let canvas = null;\nlet ctx = null;\n\nfunction renderingInit (data) {\n    canvas = data.canvas;\n    ctx = data.ctx;\n}\nMooMoo.addEventListener("renderingInit", renderingInit)\n')),(0,o.kt)("p",null,"This code will set the canvas and ctx variables to the canvas and its context."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"renderingInit")," event is ONLY called on the first time you join the game. So dont be curious if it doesnt work once you load into the page."),(0,o.kt)("h3",{id:"offsets"},"Offsets"),(0,o.kt)("p",null,"Obviously, it works the same way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let offsetX = 0;\nlet offsetY = 0;\n\nfunction updateOffsets(x, y) {\n    offsetX = x;\n    offsetY = y;\n}\n\nMooMoo.addEventListener("updateOffsets", updateOffsets);\n')),(0,o.kt)("h3",{id:"render-tick"},"Render tick"),(0,o.kt)("p",null,"To actually draw stuff, you will need to use the renderTick event."),(0,o.kt)("p",null,"The renderTick event is called every frame, after the game ran clearRect and before it draws the game."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function renderTick(offsetX, offsetY) {\n    ctx.beginPath();\n    ctx.arc(player.x - offsetX, player.y - offsetY, 10, 0, 2 * Math.PI);\n    ctx.lineWidth = 5;\n    ctx.stroke();\n}\n\nMooMoo.addEventListener("renderTick", renderTick);\n')),(0,o.kt)("p",null,"This code will draw a circle around the player."),(0,o.kt)("h2",{id:"using-our-built-in-functions"},"Using our built in functions"),(0,o.kt)("p",null,"TODO."))}d.isMDXComponent=!0}}]);