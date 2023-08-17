"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[61084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,k=u["".concat(c,".").concat(f)]||u[f]||d[f]||s;return n?o.createElement(k,a(a({ref:t},l),{},{components:n})):o.createElement(k,a({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const s={description:"Ethereum proof of stake consensus"},a="Proof of stake consensus",i={unversionedId:"public-networks/concepts/proof-of-stake/index",id:"version-23.4.0/public-networks/concepts/proof-of-stake/index",title:"Proof of stake consensus",description:"Ethereum proof of stake consensus",source:"@site/versioned_docs/version-23.4.0/public-networks/concepts/proof-of-stake/index.md",sourceDirName:"public-networks/concepts/proof-of-stake",slug:"/public-networks/concepts/proof-of-stake/",permalink:"/23.4.0/public-networks/concepts/proof-of-stake/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/concepts/proof-of-stake/index.md",tags:[],version:"23.4.0",lastUpdatedAt:1692310951,formattedLastUpdatedAt:"Aug 17, 2023",frontMatter:{description:"Ethereum proof of stake consensus"},sidebar:"publicDocSidebar",previous:{title:"The Merge",permalink:"/23.4.0/public-networks/concepts/the-merge"},next:{title:"Attestations",permalink:"/23.4.0/public-networks/concepts/proof-of-stake/attestations"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proof-of-stake-consensus"},"Proof of stake consensus"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/the-merge"},"The Merge")," transitioned Ethereum Mainnet to ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"},"proof of stake (PoS)")," consensus."),(0,r.kt)("p",null,"In Ethereum's PoS, you must run a ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/the-merge#execution-and-consensus-clients"},"full node")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/staking/"},"stake 32 ETH")," to become a validator."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Withdrawing staked ETH isn't yet supported and will be included in a separate upgrade following The Merge.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You must run a beacon node and an execution client to operate a full node on Mainnet. To become a validator, you must also run a validator client (either ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/HowTo/Get-Started/Run-Teku/#start-the-clients-in-a-single-process"},"in the same process as the beacon node")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/HowTo/Get-Started/Run-Teku/#run-the-clients-separately"},"separately"),").")),(0,r.kt)("p",null,"PoS is preferred over proof of work and proof of authority as a consensus mechanism because it is more secure, requires less energy, and lowers the barrier to entry."),(0,r.kt)("p",null,"The PoS mechanism randomly chooses validators to propose or validate blocks on the ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/beacon-chain/"},"Beacon Chain")," in defined time frames."),(0,r.kt)("p",null,"Proposers are responsible for proposing new consensus blocks, and non-proposing validators are responsible for validating (attesting to) proposed blocks. Validators are rewarded for proposing and attesting to consensus blocks eventually included in the Beacon Chain, and penalized for malicious behavior. ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/proof-of-stake/attestations"},"Attestations")," make up the bulk of validator rewards (~85%). Validators also receive ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/latest/HowTo/Prepare-for-The-Merge/#configure-the-fee-recipient"},"transaction fees")," for included blocks."),(0,r.kt)("p",null,"Each consensus block contains an execution payload, which contains a list of transactions and other data required to execute and validate the payload."),(0,r.kt)("p",null,"When a node validates a consensus block, its ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/the-merge#consensus-clients"},"consensus client")," processes the block and sends the execution payload to the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/the-merge#execution-clients"},"execution client"),", which:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Assembles a block on the execution layer."),(0,r.kt)("li",{parentName:"ol"},"Verifies pre-conditions."),(0,r.kt)("li",{parentName:"ol"},"Executes transactions."),(0,r.kt)("li",{parentName:"ol"},"Verifies post-conditions."),(0,r.kt)("li",{parentName:"ol"},"Sends the validity result back to the consensus client.")),(0,r.kt)("p",null,"If the block is valid, the execution client includes it in the execution chain and stores the new state in execution state storage."),(0,r.kt)("p",null,"If a consensus block receives attestations backed by enough staked ETH, the block is included in the Beacon Chain."))}d.isMDXComponent=!0}}]);