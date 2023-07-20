"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[64335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,N=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(N,o(o({ref:t},c),{},{components:n})):a.createElement(N,o({ref:t},c))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Upgrade permissioning contracts",sidebar_position:2,description:"Upgrade the permissioning contracts for onchain permissioning",tags:["private networks"]},o="Upgrade permissioning contracts",s={unversionedId:"private-networks/tutorials/permissioning/upgrade-contracts",id:"private-networks/tutorials/permissioning/upgrade-contracts",title:"Upgrade permissioning contracts",description:"Upgrade the permissioning contracts for onchain permissioning",source:"@site/docs/private-networks/tutorials/permissioning/upgrade-contracts.md",sourceDirName:"private-networks/tutorials/permissioning",slug:"/private-networks/tutorials/permissioning/upgrade-contracts",permalink:"/development/private-networks/tutorials/permissioning/upgrade-contracts",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/permissioning/upgrade-contracts.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1689881984,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:2,frontMatter:{title:"Upgrade permissioning contracts",sidebar_position:2,description:"Upgrade the permissioning contracts for onchain permissioning",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Get started with onchain permissioning",permalink:"/development/private-networks/tutorials/permissioning/onchain"},next:{title:"Deploy a smart contract",permalink:"/development/private-networks/tutorials/contracts/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Get the latest contracts and install dependencies",id:"1-get-the-latest-contracts-and-install-dependencies",level:3},{value:"3. Update environment variables",id:"3-update-environment-variables",level:3},{value:"4. Optional: Export current allowlists",id:"4-optional-export-current-allowlists",level:3},{value:"5. Deploy the contracts",id:"5-deploy-the-contracts",level:3},{value:"6. Restart Besu nodes",id:"6-restart-besu-nodes",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-permissioning-contracts"},"Upgrade permissioning contracts"),(0,r.kt)("p",null,"The following tutorial describes the steps to upgrade the onchain permissioning contracts to the latest version."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," v10.16.0 or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," v1.15 or later"),(0,r.kt)("li",{parentName:"ul"},"Browser with ",(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask installed"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-get-the-latest-contracts-and-install-dependencies"},"1. Get the latest contracts and install dependencies"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Pull the latest changes if you already have a cloned repository using the ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," command inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," directory.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ConsenSys/permissioning-smart-contracts.git\n")))),(0,r.kt)("h3",{id:"3-update-environment-variables"},"3. Update environment variables"),(0,r.kt)("p",null,"If using a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to configure environment variables, then the file must be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," directory."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use environment variables to retain existing contracts if required. For example:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RETAIN_ADMIN_CONTRACT=true")," to retain the current admin list"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RETAIN_NODE_RULES_CONTRACT=true")," to retain the current Node rules contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RETAIN_ACCOUNT_RULES_CONTRACT=true")," to retain the current Account rules contract"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Legacy: If they exist, rename the following environment variables:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PANTHEON_NODE_PERM_ACCOUNT")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"BESU_NODE_PERM_ACCOUNT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PANTHEON_NODE_PERM_KEY")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"BESU_NODE_PERM_KEY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PANTHEON_NODE_PERM_ENDPOINT")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"BESU_NODE_PERM_ENDPOINT")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If updating from v1 to v2, you need to re-deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeIngress")," contract. In order to do this, first delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_INGRESS_CONTRACT_ADDRESS")," environment variable."),(0,r.kt)("admonition",{parentName:"li",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"This step is only required if upgrading from v1 of the node permissioning contract to v2 (because the interface changed, a new ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeIngress")," contract must be deployed).")))),(0,r.kt)("h3",{id:"4-optional-export-current-allowlists"},"4. Optional: Export current allowlists"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step enables you to export the current allowlists to assist in updating.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the current allowlists by setting the following environment variables:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"RETAIN_ADMIN_CONTRACT=true\nRETAIN_NODE_RULES_CONTRACT=true\nRETAIN_ACCOUNT_RULES_CONTRACT=true\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log the current allowlists to console:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"truffle migrate --reset\n")),(0,r.kt)("p",{parentName:"li"},"The migration scripts will log the existing allowlists to the console, but no contracts will be deployed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set initial values for updated deployment using the values logged in the previous step:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"INITIAL_ADMIN_ACCOUNTS=<list-of-admins>\nINITIAL_ALLOWLISTED_ACCOUNTS=<list-of-accounts>\nINITIAL_ALLOWLISTED_NODES=<list-of-enode-urls>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update environment variables for contracts that are to be deployed. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"RETAIN_ADMIN_CONTRACT=true\nRETAIN_NODE_RULES_CONTRACT=false\nRETAIN_ACCOUNT_RULES_CONTRACT=false\n")))),(0,r.kt)("h3",{id:"5-deploy-the-contracts"},"5. Deploy the contracts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," directory, deploy the contracts:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"truffle migrate --reset\n")),(0,r.kt)("admonition",{parentName:"li",type:"important"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If updating from v1 to v2, the new ",(0,r.kt)("inlineCode",{parentName:"li"},"NodeIngress")," contract address must be specified when restarting the Besu nodes. Copy this address from the migration output. For example:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> Deployed NodeIngress contract to address = 0x12B1f953395080A13AeED0dC4d0bb14e787A91cF\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If upgrading from v2 (using separate storage contracts) copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage")," contract addresses displayed in the output. For example:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"> Deployed NodeStorage contract to address = 0x4F3e35A3Be3C1b77Ade39969D175C743ad3484Ee\n...\n> Deployed AccountStorage contract to address = 0x2362187023D738034B516438Af187356b31E8Fb8\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the storage contract address environment variables to ensure that the storage contracts are not re-deployed. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_STORAGE_CONTRACT_ADDRESS=0xE0bF6021e023a197DBb3fABE64efA880E13D3f4b\nACCOUNT_STORAGE_CONTRACT_ADDRESS=0x7153CCD1a20Bbb2f6dc89c1024de368326EC6b4F\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the updated contracts:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"truffle migrate --reset\n")))),(0,r.kt)("h3",{id:"6-restart-besu-nodes"},"6. Restart Besu nodes"),(0,r.kt)("p",null,"Restart the Besu nodes with the updated ",(0,r.kt)("a",{parentName:"p",href:"#5-deploy-the-contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeIngress"))," contract address and ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version"},"permissioning contract interface")," version 2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-besu"},'cmd besu --data-path=data --genesis-file=../genesis.json --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled --permissions-nodes-contract-address "0x4E72770760c011647D4873f60A3CF6cDeA896CD8" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*"\n')))}m.isMDXComponent=!0}}]);