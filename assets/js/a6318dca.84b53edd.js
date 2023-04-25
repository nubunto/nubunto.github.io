"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[497],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(v,i(i({ref:t},d),{},{components:r})):a.createElement(v,i({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(1163),n=(r(9496),r(9613));const o={},i="JD",l={unversionedId:"private/will-bank/JD",id:"private/will-bank/JD",title:"JD",description:"Emiss\xe3o de boleto passa pela Lydians e pela JD.",source:"@site/docs/private/will-bank/JD.md",sourceDirName:"private/will-bank",slug:"/private/will-bank/JD",permalink:"/private/will-bank/JD",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Will Bank",permalink:"/private/will-bank/"},next:{title:"Banco Rendimento",permalink:"/private/will-bank/banco-rendimento"}},s={},c=[{value:"Fluxo da Lydians",id:"fluxo-da-lydians",level:2},{value:"Servidores",id:"servidores",level:2},{value:"Contatos t\xe9cnicos",id:"contatos-t\xe9cnicos",level:2},{value:"JD",id:"jd-1",level:2},{value:"Time de networking, sobre AWS -&gt; RTM",id:"time-de-networking-sobre-aws---rtm",level:2},{value:"Time de tesouraria",id:"time-de-tesouraria",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jd"},"JD"),(0,n.kt)("p",null,"Emiss\xe3o de boleto passa pela Lydians e pela JD."),(0,n.kt)("p",null,"Nota: time de tesouraria da CFI podem ser interessantes de se falar com sobre procedimentos banc\xe1rios (adicionar e tirar dinheiro da conta gerencial)"),(0,n.kt)("p",null,"Servi\xe7os s\xe3o hospedados por uma cloud terceirizada, na RTM. A RTM possui conectividade com a rede RSFN (rede do sistema financeiro nacional)."),(0,n.kt)("h2",{id:"fluxo-da-lydians"},"Fluxo da Lydians"),(0,n.kt)("p",null,"Ent\xe3o o fluxo \xe9:"),(0,n.kt)("p",null,"Lydians -> JD -> RSFN (SPB, Bacen, etc)"),(0,n.kt)("h2",{id:"servidores"},"Servidores"),(0,n.kt)("p",null,"Existem 2 servidores: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Um SQL Server, a famosa base integradora"),(0,n.kt)("li",{parentName:"ul"},"Um que roda a aplica\xe7\xe3o de integra\xe7\xe3o da JD, que disp\xf5e as APIs de comunica\xe7\xe3o dos servi\xe7os deles.")),(0,n.kt)("p",null,"Existe uma cabine, que \xe9 meio que um backoffice da JD, onde conseguimos ver os boletos e etc. Acesso \xe0 cabine est\xe1 com o Raoni."),(0,n.kt)("p",null,"Nota: j\xe1 houve problemas de comunica\xe7\xe3o entre JD e CIP. Boleto demorava a ficar registrado na CIP."),(0,n.kt)("p",null,"Atualiza\xe7\xf5es da JD (regulat\xf3rias, por exemplo) s\xe3o notificados para os contatos t\xe9cnicos."),(0,n.kt)("p",null,"Esses servidores existem na RTM. Precisamos poder falar da AWS para a RTM... Discutir com o time de networking como isso funcionaria."),(0,n.kt)("h2",{id:"contatos-t\xe9cnicos"},"Contatos t\xe9cnicos"),(0,n.kt)("h2",{id:"jd-1"},"JD"),(0,n.kt)("p",null,"Thiago Alves e M\xe1rcia."),(0,n.kt)("p",null,"Raoni tamb\xe9m."),(0,n.kt)("h2",{id:"time-de-networking-sobre-aws---rtm"},"Time de networking, sobre AWS -> RTM"),(0,n.kt)("p",null,"Olavo Taube"),(0,n.kt)("h2",{id:"time-de-tesouraria"},"Time de tesouraria"),(0,n.kt)("p",null,"Fernanda Pereira\nJuliana Loiola"))}p.isMDXComponent=!0}}]);