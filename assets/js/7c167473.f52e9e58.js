"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[61923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,b=u["".concat(l,".").concat(f)]||u[f]||k[f]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},i="Trace transactions",c={unversionedId:"public-networks/how-to/troubleshoot/trace-transactions",id:"version-23.7.1/public-networks/how-to/troubleshoot/trace-transactions",title:"Trace transactions",description:"How to trace transactions",source:"@site/versioned_docs/version-23.7.1/public-networks/how-to/troubleshoot/trace-transactions.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/trace-transactions",permalink:"/public-networks/how-to/troubleshoot/trace-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/how-to/troubleshoot/trace-transactions.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1693953710,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:2,frontMatter:{title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use EVM tool",permalink:"/public-networks/how-to/troubleshoot/evm-tool"},next:{title:"Troubleshoot performance",permalink:"/public-networks/how-to/troubleshoot/performance"}},l={},s=[{value:"Ad-hoc tracing APIs",id:"ad-hoc-tracing-apis",level:2},{value:"Transaction-trace filtering APIs",id:"transaction-trace-filtering-apis",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trace-transactions"},"Trace transactions"),(0,a.kt)("p",null,"To get detailed information about transaction processing, use the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#trace-methods"},(0,a.kt)("inlineCode",{parentName:"a"},"TRACE")," API"),". Enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"TRACE")," API using the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#rpc-http-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#rpc-ws-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," command line options."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TRACE")," API has two sets of trace calls, ",(0,a.kt)("a",{parentName:"p",href:"#ad-hoc-tracing-apis"},"ad-hoc tracing APIs")," and ",(0,a.kt)("a",{parentName:"p",href:"#transaction-trace-filtering-apis"},"transaction-trace filtering APIs"),"."),(0,a.kt)("h2",{id:"ad-hoc-tracing-apis"},"Ad-hoc tracing APIs"),(0,a.kt)("p",null,"These APIs allow you to use the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/trace-types"},(0,a.kt)("inlineCode",{parentName:"a"},"trace"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"vmTrace"),", or ",(0,a.kt)("inlineCode",{parentName:"a"},"stateDiff"))," diagnostic options when tracing calls or transactions."),(0,a.kt)("p",null,"To use the ad-hoc tracing APIs, the requested block or transaction must be within the number of ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#pruning-blocks-retained"},"blocks retained")," with ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#pruning-enabled"},"pruning enabled")," (by default, 1024)."),(0,a.kt)("p",null,"The ad-hoc tracing APIs are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_call"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_call"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_callmany"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_callMany"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_rawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_rawTransaction"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_replayblocktransactions"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_replayBlockTransactions")))),(0,a.kt)("h2",{id:"transaction-trace-filtering-apis"},"Transaction-trace filtering APIs"),(0,a.kt)("p",null,"These APIs allow you to filter and search by specific information such as the block, address, or transaction. These APIs only use the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/trace-types#trace"},(0,a.kt)("inlineCode",{parentName:"a"},"trace")," type"),"."),(0,a.kt)("p",null,"To use the transaction-trace filtering APIs, your node must be an archive node (that is, synchronized without pruning or fast sync) or the requested block or transaction must be within the number of ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#pruning-blocks-retained"},"blocks retained")," with ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#pruning-enabled"},"pruning enabled")," (by default, 1024)."),(0,a.kt)("p",null,"The transaction-trace filtering APIs are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_block"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_block"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_filter"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_filter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_get"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_get"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/public-networks/reference/api/#trace_transaction"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_transaction")))))}u.isMDXComponent=!0}}]);