"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[34214],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var i=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(o),p=a,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||n;return o?i.createElement(m,r(r({ref:t},h),{},{components:o})):i.createElement(m,r({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<n;d++)r[d]=o[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}p.displayName="MDXCreateElement"},66979:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=o(87462),a=(o(67294),o(3905));const n={sidebar_position:4,description:"Threat model for a Distributed Validator"},r="Charon threat model",s={unversionedId:"int/faq/threat_model",id:"int/faq/threat_model",title:"Charon threat model",description:"Threat model for a Distributed Validator",source:"@site/docs/int/faq/threat_model.md",sourceDirName:"int/faq",slug:"/int/faq/threat_model",permalink:"/docs/next/int/faq/threat_model",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/faq/threat_model.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Threat model for a Distributed Validator"},sidebar:"tutorialSidebar",previous:{title:"Centralization risks and mitigation",permalink:"/docs/next/int/faq/risks"},next:{title:"Introduction",permalink:"/docs/next/charon/intro"}},l={},d=[{value:"Actors",id:"actors",level:2},{value:"General observations",id:"general-observations",level:2},{value:"Identity private key",id:"identity-private-key",level:2},{value:"Ethereum validator private key access",id:"ethereum-validator-private-key-access",level:2},{value:"Rogue node operator",id:"rogue-node-operator",level:2},{value:"Outside attackers interfering with a cluster",id:"outside-attackers-interfering-with-a-cluster",level:2},{value:"Malicious beacon nodes",id:"malicious-beacon-nodes",level:2},{value:"Malicious charon relays",id:"malicious-charon-relays",level:2},{value:"Compromised runtime files",id:"compromised-runtime-files",level:2},{value:"Conclusions",id:"conclusions",level:2}],h={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"charon-threat-model"},"Charon threat model"),(0,a.kt)("p",null,"This page outlines a threat model for Charon, in the context of it being a Distributed Validator middleware for Ethereum validator clients."),(0,a.kt)("h2",{id:"actors"},"Actors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node owner (NO)"),(0,a.kt)("li",{parentName:"ul"},"Cluster node operators (CNO)"),(0,a.kt)("li",{parentName:"ul"},"Rogue node operator (RNO)"),(0,a.kt)("li",{parentName:"ul"},"Outside attacker (OA)")),(0,a.kt)("h2",{id:"general-observations"},"General observations"),(0,a.kt)("p",null,"This page describes some considerations the Obol core team made about the security of a distributed validator in the context of its deployment and interaction with outside actors."),(0,a.kt)("p",null,"The goal of this threat model is to provide transparency, but it is by no means a comprehensive audit or complete security reference. It\u2019s a sharing of the experiences and thoughts we gained during the last few years building distributed validator technologies."),(0,a.kt)("p",null,"While to the Beacon Chain, a distributed validator is seen in much the same way as a regular validator, and thus retains some of the same security considerations, Charon\u2019s threat model is different from a validator client\u2019s threat model because of its general design."),(0,a.kt)("p",null,"While a validator client owns and operates on a set of validator private keys, the design of Charon allows its node operators to rarely (if ever) see the complete validator private keys, relying instead on modern cryptography to generate partial private key shares."),(0,a.kt)("p",null,"An Ethereum distributed validator employs advanced signature primitives such that no operator ever handles the full validator private key in any standard lifecycle step: the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLS_digital_signature"},"BLS digital signature scheme")," employed by the Ethereum network allows distributed validators to individually sign a blob of data and then aggregate the resulting signatures in a transparent manner, never requiring any of the participating parties to know the full private key to do so."),(0,a.kt)("p",null,"If the subset of the available Charon nodes is lower than a given threshold, the cluster is not able to continue with its duties."),(0,a.kt)("p",null,"Given the collaborative nature of a Distributed Validator cluster, every operator must prioritize the liveliness and well-being of the cluster. Charon, at the moment of writing this page cannot reward and penalize operators within a cluster independently."),(0,a.kt)("p",null,"This implies that Charon\u2019s threat model can\u2019t quite be equated to that of a single validator client, since they work on a different - albeit similar - set of security concepts."),(0,a.kt)("h2",{id:"identity-private-key"},"Identity private key"),(0,a.kt)("p",null,"A distributed validator cluster is made up of a number of nodes, often run by a number of independent operators. For each DV cluster there\u2019s a set of Ethereum validator private keys on which they want to validate on behalf of."),(0,a.kt)("p",null,"Alongside those, each node (henceforth \u2018operator\u2019) holds an SECP256K1 identity private key, referred to as an ENR, that identifies their node to the other cluster operators\u2019 nodes."),(0,a.kt)("p",null,"Exfiltration of said private key could lead to possible impersonation from an outside attacker, possibly leading to intra-cluster peering issues, eclipse attack risks, and degraded validator performance."),(0,a.kt)("p",null,"Charon client communication is handled via BFT consensus, which is able to tolerate a given number of misbehaving nodes up to a certain threshold: once this threshold is reached, the cluster is not able to continue with its lifecycle and loses liveness guarantees (the validator goes offline). If more than two-thirds of nodes in a cluster are malicious, a cluster also loses safety guarantees (enough bad actors could collude to come to consensus on something slashable)."),(0,a.kt)("p",null,"Identity private key theft and the subsequent execution of a rogue cluster node is equivalent in the context of BFT consensus to a misbehaving node, hence the cluster can survive and continue with its duties up to what\u2019s specified by the cluster\u2019s BFT protocol\u2019s parameters."),(0,a.kt)("p",null,"The likelihood of this happening is low: an OA with enough knowledge of the topology of the operator\u2019s network must steal ",(0,a.kt)("inlineCode",{parentName:"p"},"fault tolerance of the cluster + 1")," identity private keys and run Charon nodes to subvert the distributed validator BFT consensus to push the validator offline."),(0,a.kt)("h2",{id:"ethereum-validator-private-key-access"},"Ethereum validator private key access"),(0,a.kt)("p",null,"A distributed validator cluster executes Ethereum validator duties by acting as a middleman between the beacon chain and a validator client."),(0,a.kt)("p",null,"To do so, the cluster must have knowledge of the Ethereum validator\u2019s private key."),(0,a.kt)("p",null,"The design and implementation of Charon minimizes the chances of this by splitting the Ethereum validator private keys into parts, which are then assigned to each node operator.\nA ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Distributed_key_generation"},"distributed key generation")," (DKG) process is used in order to evenly and safely create the private key shares without any central party having access to the full private key."),(0,a.kt)("p",null,"The cryptography primitives employed in Charon can allow a threshold of the node operator\u2019s private key shares to be reconstructed into the whole validator private key if needed."),(0,a.kt)("p",null,"While the facilities to do this are present in the form of CLI commands, as stated before Charon never reconstructs the key in normal operations since BLS digital signature system allows for signature aggregation."),(0,a.kt)("p",null,"A distributed validator cluster can be started in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An existing Ethereum validator private key is split by the private key holder, and distributed in a trusted manner among the operators."),(0,a.kt)("li",{parentName:"ol"},"The operators participate in a distributed key generation (DKG) process, to create private key shares that collectively can be used to sign validation duties as an Ethereum distributed validator. The full private key for the cluster never exists in one place during or after the DKG.")),(0,a.kt)("p",null,"In case 1, one of the node operators K has direct access to the Ethereum validator key and is tasked with the generation of other operator\u2019s identity keys and key shards."),(0,a.kt)("p",null,"It is clear that in this case the entirety of the sensitive material set is as secure as K\u2019s environment; if K is compromised or malicious, the distributed validator could be slashed."),(0,a.kt)("p",null,"Case 2 is different, because there\u2019s no pre-existing Ethereum validator key in a single operator's hands: it will be generated using the FROST DKG algorithm."),(0,a.kt)("p",null,"Assuming a successful DKG process, each operator will only ever handle its own key shares instead of the full Ethereum validator private key."),(0,a.kt)("p",null,"A set of rogue operators composed of enough members to reconstruct the original Ethereum private keys might pose the risk of slashing for a distributed validator by colluding to produce slashable messages together."),(0,a.kt)("p",null,"We deem this scenario\u2019s likelihood as low, as it would mean that node operators decided to willfully slash the stake that they should be being rewarded for staking."),(0,a.kt)("p",null,"Still, in the context of an outside attack, purposefully slashing a validator would mean stealing multiple operator key shares, which in turn means violating many cluster operator\u2019s security almost at the same time. This scenario may occur if there is a 0-day vulnerability in a piece of software they all run or in case of node misconfiguration."),(0,a.kt)("h2",{id:"rogue-node-operator"},"Rogue node operator"),(0,a.kt)("p",null,"Nodes are connected by means of either relay nodes, or directly to one another."),(0,a.kt)("p",null,"Each node operator is at risk of being impeded by other nodes or by the relay operator in the execution of their duties."),(0,a.kt)("p",null,"Nodes need to expose a set of TCP ports to be able to work, and the mere fact of doing that opens up the opportunity for rogue parties to execute DDoS attacks."),(0,a.kt)("p",null,"Another attack surface for the cluster exists in rogue nodes purposefully filling the various inter-state databases with meaningless data, or more generally submitting bogus information to the other parties to slow down the processing or, in the case of a sybil attack, bring the cluster to a halt."),(0,a.kt)("p",null,"The likelihood of this scenario is medium, because there\u2019s no active threat hunting part: there\u2019s no need for the rogue node operator to penetrate and compromise other nodes to disturb the cluster\u2019s lifecycle."),(0,a.kt)("h2",{id:"outside-attackers-interfering-with-a-cluster"},"Outside attackers interfering with a cluster"),(0,a.kt)("p",null,"There are two levels of sophistication in an OA:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"No knowledge of the topology of the cluster: The attacker doesn\u2019t know where each cluster node is located and so can\u2019t force fault tolerance +1 nodes offline if it can\u2019t find them."),(0,a.kt)("li",{parentName:"ol"},"Knowledge of the topology of the network (or part of it) is possessed: the OA can operate DDoS attacks or try breaking into node\u2019s servers - at that point, the \u201crogue node operator\u201d scenario applies.")),(0,a.kt)("p",null,"The likelihood of this scenario is low: an OA needs extensive capabilities and sufficient incentive to be able to carry out an attack of this size."),(0,a.kt)("p",null,"An outside attacker could also find and use vulnerabilities in the underlying cryptosystems and cryptography libraries used by Charon and other Ethereum clients. Forging signatures that fool Charon\u2019s cryptographic library or other dependencies may be feasible, but forging signatures or otherwise finding a vulnerability in either the SECP256K1+ECDSA or BLS12-381+BLS cryptosystems we deem to be a low likelihood risk."),(0,a.kt)("h2",{id:"malicious-beacon-nodes"},"Malicious beacon nodes"),(0,a.kt)("p",null,"A malicious beacon node (BN) could prevent the distributed validator from operating its validation duties, and could plausibly increase the likelihood of slashing by serving charon illegitimate information."),(0,a.kt)("p",null,"If the amount of nodes configured with the malicious BN are equal to the byzantine threshold for the Charon BFT consensus protocol, the validation process can potentially halt since the BFT parameter threshold is reached - most of the nodes are byzantine - the system will reach consensus on a set of data that isn\u2019t valid."),(0,a.kt)("p",null,"We deem the likelihood of this scenario to be medium depending on the trust model associated with the BNs deployment (cloud, self-hosted, SaaS product): node operators should always host or at least trust their own beacon nodes."),(0,a.kt)("h2",{id:"malicious-charon-relays"},"Malicious charon relays"),(0,a.kt)("p",null,"A Charon relay is used as a communication bridge between nodes that aren\u2019t directly exposed on the Internet. It also acts as the peer discovery mechanism for a cluster."),(0,a.kt)("p",null,"Once a peer\u2019s IP address has been discovered via the relay, a direct connection can be attempted. Nodes can either communicate by exchanging data through a relay, or by using the relay as a means to establish a direct TCP connection to one another."),(0,a.kt)("p",null,"A malicious relay owned by a OA could lead to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network topology discovery, facilitating the \u201coutside attackers interactions with a cluster\u201d scenario"),(0,a.kt)("li",{parentName:"ul"},"Impeding node communication, potentially impacting the BFT consensus protocol liveness (not security) and distributed validator duties"),(0,a.kt)("li",{parentName:"ul"},"DKG process disruption leading to frustration and potential abandonment by node operators: could lead to the usage of a standard Ethereum validator setup, which implies weaker security overall")),(0,a.kt)("p",null,"We note that BFT consensus liveness disruption can only happen if the number of nodes using the malicious relay for communication is equal to the byzantine nodes amount defined in the consensus parameters."),(0,a.kt)("p",null,"This risk can be mitigated by configuring nodes with multiple relay URLs from only ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/advanced/self-relay"},"trusted entities"),"."),(0,a.kt)("p",null,"The likelihood of this scenario is medium: Charon nodes are configured with a default set of relay nodes, so if an OA were to compromise those, it would lead to many cluster topologies getting discovered and potentially attacked and disrupted."),(0,a.kt)("h2",{id:"compromised-runtime-files"},"Compromised runtime files"),(0,a.kt)("p",null,"Charon operates with two runtime files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A lock file used to address operator\u2019s nodes, define the Ethereum validator public keys and the public key shares associated with it"),(0,a.kt)("li",{parentName:"ul"},"A cluster definition file used to define the operator\u2019s addresses and identities during the DKG process")),(0,a.kt)("p",null,"The lock file is signed and validated by all the nodes participating in the cluster: assuming good security practices on the node operator side, and no bugs in Charon or its dependencies\u2019 implementations, this scenario is unlikely."),(0,a.kt)("p",null,"If one or more node operators are using less than ideal security practices an OA could rewire the Charon CLI flags to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-verify")," flags, which disables lock file signature and hash verification (usually intended only for development purposes)."),(0,a.kt)("p",null,"By doing that, the OA can edit the lock file as it sees fit, leading to the \u201crogue node operator\u201d scenario. An OA or RNO might also manage to social engineer their way into convincing other operators into running their malicious lock file with verification disabled."),(0,a.kt)("p",null,"The likelihood of this scenario is low: an OA would need to compromise every node operator through social engineering to both use a different set of files, and to run its cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-verify"),"."),(0,a.kt)("h2",{id:"conclusions"},"Conclusions"),(0,a.kt)("p",null,"Distributed Validator Technology (DVT) helps maintain a high-assurance environment for Ethereum validators by leveraging modern cryptography to ensure no single point of failure is easily found in the system."),(0,a.kt)("p",null,"As with any computing system, security considerations are to be expected in order to keep the environment safe."),(0,a.kt)("p",null,"From the point of view of an Ethereum validator entity, running their services with a DV client can help greatly with availability, minimizing slashing risks, and maximizing participation in the network."),(0,a.kt)("p",null,"On the other hand, one must take into consideration the risks involved with dishonest cluster operators, as well as rogue third-party beacon nodes or relay providers."),(0,a.kt)("p",null,"In the end, we believe the benefits of DVT greatly outweigh the potential threats described in this overview."))}u.isMDXComponent=!0}}]);