"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[44889],{3905:(e,n,i)=>{i.d(n,{Zo:()=>l,kt:()=>d});var r=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var a=r.createContext({}),c=function(e){var n=r.useContext(a),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},l=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,s=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(i),m=t,d=u["".concat(a,".").concat(m)]||u[m]||g[m]||s;return i?r.createElement(d,o(o({ref:n},l),{},{components:i})):r.createElement(d,o({ref:n},l))}));function d(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=i.length,o=new Array(s);o[0]=m;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p[u]="string"==typeof e?e:t,o[1]=p;for(var c=2;c<s;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},42286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=i(87462),t=(i(67294),i(3905));const s={title:"Permissioning plugin",description:"Plugin based permissioning",sidebar_position:2,tags:["private networks"]},o="Permissioning plugin",p={unversionedId:"private-networks/concepts/permissioning/plugin",id:"version-23.4.1/private-networks/concepts/permissioning/plugin",title:"Permissioning plugin",description:"Plugin based permissioning",source:"@site/versioned_docs/version-23.4.1/private-networks/concepts/permissioning/plugin.md",sourceDirName:"private-networks/concepts/permissioning",slug:"/private-networks/concepts/permissioning/plugin",permalink:"/stable/private-networks/concepts/permissioning/plugin",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/concepts/permissioning/plugin.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1690511962,formattedLastUpdatedAt:"Jul 28, 2023",sidebarPosition:2,frontMatter:{title:"Permissioning plugin",description:"Plugin based permissioning",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Onchain permissioning",permalink:"/stable/private-networks/concepts/permissioning/onchain"},next:{title:"Public key infrastructure",permalink:"/stable/private-networks/concepts/pki"}},a={},c=[{value:"Connection permissioning",id:"connection-permissioning",level:2},{value:"Message permissioning",id:"message-permissioning",level:2},{value:"Register your plugin",id:"register-your-plugin",level:2}],l={toc:c},u="wrapper";function g(e){let{components:n,...i}=e;return(0,t.kt)(u,(0,r.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"permissioning-plugin"},"Permissioning plugin"),(0,t.kt)("p",null,"You can define complex ",(0,t.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/permissioning/"},"permissioning")," solutions by building a plugin that extends Hyperledger Besu functionality."),(0,t.kt)("p",null,"The plugin API provides a ",(0,t.kt)("inlineCode",{parentName:"p"},"PermissioningService")," interface that currently supports connection permissioning and message permissioning."),(0,t.kt)("h2",{id:"connection-permissioning"},"Connection permissioning"),(0,t.kt)("p",null,"Use connection permissioning when deciding whether to restrict node access to known participants only."),(0,t.kt)("h2",{id:"message-permissioning"},"Message permissioning"),(0,t.kt)("p",null,"Use message permissioning to propagate different types of devP2P messages to particular nodes. For example, this can be used to prevent pending transactions from being forwarded to other nodes."),(0,t.kt)("h2",{id:"register-your-plugin"},"Register your plugin"),(0,t.kt)("p",null,"To enable permissioning in your plugin, implement the ",(0,t.kt)("inlineCode",{parentName:"p"},"PermissioningService")," interface and register your providers."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"@AutoService(BesuPlugin.class)\npublic class TestPermissioningPlugin implements BesuPlugin {\n    PermissioningService service;\n\n    @Override\n    public void register(final BesuContext context) {\n        service = context.getService(PermissioningService.class).get();\n    }\n\n    @Override\n    public void start() {\n        service.registerNodePermissioningProvider((sourceEnode, destinationEnode) -> {\n            // perform logic for node permissioning\n            return true;\n        });\n\n        service.registerNodeMessagePermissioningProvider((destinationEnode, code) -> {\n            // perform logic for message permissioning\n            return true;\n        });\n    }\n\n    @Override\n    public void stop() {}\n}\n")))}g.isMDXComponent=!0}}]);