"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[264],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(1163),o=(r(9496),r(9613));const a={},i="Next Generation Bash Scripts",l={unversionedId:"projects/ngbs",id:"projects/ngbs",title:"Next Generation Bash Scripts",description:"Or, \"nubunto's greatest bash scripts\". I'm bad at names.",source:"@site/docs/projects/ngbs.md",sourceDirName:"projects",slug:"/projects/ngbs",permalink:"/projects/ngbs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Personal Projects",permalink:"/projects/"},next:{title:"Interesting Internet Software",permalink:"/software/"}},s={},p=[{value:"Tools",id:"tools",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"next-generation-bash-scripts"},"Next Generation Bash Scripts"),(0,o.kt)("p",null,"Or, \"nubunto's greatest bash scripts\". I'm bad at names."),(0,o.kt)("p",null,"It's a little project I started, that aims to provide comprehensive and productive command line tooling, that users can hand-build into their workflow."),(0,o.kt)("p",null,"Built in TypeScript, with ",(0,o.kt)("a",{parentName:"p",href:"/deno"},"Deno")," and Dax."),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("p",null,"All files inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/")," folder in the root of the project get compiled using ",(0,o.kt)("inlineCode",{parentName:"p"},"deno compile"),". They are then placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/bin"),"."),(0,o.kt)("p",null,"There's a sensibly provided ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," function, which is basically a direct re-export of Dax's ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," utility that allows you to call into the command line seamlessly."),(0,o.kt)("p",null,"I was even able to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/charmbracelet/gum"},"gum")," with it."))}m.isMDXComponent=!0}}]);