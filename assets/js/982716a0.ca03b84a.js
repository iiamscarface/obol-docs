"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[1636],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},50124:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={sidebar_position:1,description:"A node operator joins a DV cluster"},i="Operator Journey",l={unversionedId:"int/quickstart/group/quickstart-group-operator",id:"version-v0.15.0/int/quickstart/group/quickstart-group-operator",title:"Operator Journey",description:"A node operator joins a DV cluster",source:"@site/versioned_docs/version-v0.15.0/int/quickstart/group/quickstart-group-operator.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-operator",permalink:"/docs/int/quickstart/group/quickstart-group-operator",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.15.0/int/quickstart/group/quickstart-group-operator.md",tags:[],version:"v0.15.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A node operator joins a DV cluster"},sidebar:"tutorialSidebar",previous:{title:"Creator & Leader Journey",permalink:"/docs/int/quickstart/group/quickstart-group-leader-creator"},next:{title:"Run a cluster alone",permalink:"/docs/int/quickstart/quickstart-alone"}},s={},p=[{value:"Overview Video",id:"overview-video",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Share an Ethereum address with your Leader or Creator",id:"step-1-share-an-ethereum-address-with-your-leader-or-creator",level:2},{value:"Step 2. Create and back up a private key for charon",id:"step-2-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 3. Join and sign the cluster configuration",id:"step-3-join-and-sign-the-cluster-configuration",level:2},{value:"Step 4. Run the DKG",id:"step-4-run-the-dkg",level:2},{value:"Overview",id:"overview",level:3},{value:"Step 5. Start your Distributed Validator Node",id:"step-5-start-your-distributed-validator-node",level:2},{value:"Step 6. Activate the deposit data",id:"step-6-activate-the-deposit-data",level:2},{value:"Step 7 - Optional. Add the Monitoring Credentials",id:"step-7---optional-add-the-monitoring-credentials",level:2},{value:"Step 8. Validator Voluntary Exit",id:"step-8-validator-voluntary-exit",level:2},{value:"Updating DV stack",id:"updating-dv-stack",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Other Actions",id:"other-actions",level:2},{value:"Docker power users",id:"docker-power-users",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operator-journey"},"Operator Journey"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its ",(0,a.kt)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,a.kt)("p",null,"The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster after receiving an cluster invite link from a leader or creator."),(0,a.kt)("h2",{id:"overview-video"},"Overview Video"),(0,a.kt)("p",{align:"center"},(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6pXASqjAQbs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure you have ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,a.kt)("li",{parentName:"ul"},"Ensure you have ",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,a.kt)("li",{parentName:"ul"},"Make sure ",(0,a.kt)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,a.kt)("h2",{id:"step-1-share-an-ethereum-address-with-your-leader-or-creator"},"Step 1. Share an Ethereum address with your Leader or Creator"),(0,a.kt)("p",null,"Before starting the cluster creation, make sure you have shared an Ethereum address with your cluster ",(0,a.kt)("strong",{parentName:"p"},"Leader")," or ",(0,a.kt)("strong",{parentName:"p"},"Creator"),". If you haven't chosen someone as a Leader or Creator yet, please go back to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/int/quickstart/group/"},"Quickstart intro")," and define one person to go through the ",(0,a.kt)("a",{parentName:"p",href:"./quickstart-group-leader-creator"},"Leader & Creator Journey")," before moving forward. "),(0,a.kt)("h2",{id:"step-2-create-and-back-up-a-private-key-for-charon"},"Step 2. Create and back up a private key for charon"),(0,a.kt)("p",null,"In order to prepare for a distributed key generation ceremony, you need to create an ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/int/faq/errors#enrs-keys"},"ENR")," for your charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.15.0 create enr\n')),(0,a.kt)("p",null,"You should expect to see a console output like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,a.kt)("p",null,"If instead of being shown your ",(0,a.kt)("inlineCode",{parentName:"p"},"enr")," you see an error saying ",(0,a.kt)("inlineCode",{parentName:"p"},"permission denied")," then you may need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/int/faq/errors#docker-permission-denied-error"},"update docker permissions")," to allow the command to run successfully."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,a.kt)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,a.kt)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."))),(0,a.kt)("h2",{id:"step-3-join-and-sign-the-cluster-configuration"},"Step 3. Join and sign the cluster configuration"),(0,a.kt)("p",null,"After receiving the invite link created by the ",(0,a.kt)("strong",{parentName:"p"},"Leader")," or ",(0,a.kt)("strong",{parentName:"p"},"Creator"),", you will be able to join and sign the cluster configuration created."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the DV launchpad link provided by the leader or creator.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect your wallet using the Ethereum address provided to the leader in ",(0,a.kt)("a",{parentName:"p",href:"#step-1-share-an-ethereum-address-with-your-leader-or-creator"},"step 1"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Connect Wallet",src:o(97013).Z,width:"1784",height:"607"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review the operators addresses submitted and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Started")," to continue."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Get Started",src:o(40358).Z,width:"1884",height:"1760"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review and accept the advisories.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review the configuration created by the leader or creator and add your ",(0,a.kt)("inlineCode",{parentName:"p"},"ENR")," generated in ",(0,a.kt)("a",{parentName:"p",href:"#step-2-create-and-back-up-a-private-key-for-charon"},"step 2"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Review Config",src:o(73814).Z,width:"1898",height:"2768"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign the following with your wallet "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The config hash. This is a hashed representation of all of the details for this cluster. "),(0,a.kt)("li",{parentName:"ul"},"Your own ",(0,a.kt)("inlineCode",{parentName:"li"},"ENR"),". This signature authorises the key represented by this ENR to act on your behalf in the cluster."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait for all the other operators in your cluster to do the same."))),(0,a.kt)("h2",{id:"step-4-run-the-dkg"},"Step 4. Run the DKG"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/charon/dkg"},"DKG")," to complete, all operators need to be running the command simultaneously. It helps to coordinate an agreed upon time amongst operators at which to run the command.")),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",{align:"center"},(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cEMhxHuNJrI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Continue"),". If you closed the tab, just go back to the invite link shared by the leader and connect your wallet."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Config Signing Success",src:o(52834).Z,width:"2864",height:"2164"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You have two options to perform the DKG."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Option 1")," and default is to copy and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Option 2")," (Manual DKG) is to download the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-definition")," file manually and move it to the hidden ",(0,a.kt)("inlineCode",{parentName:"p"},".charon")," folder. Then, every cluster member participates in the DKG ceremony by running the command displayed."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Run the DKG",src:o(75602).Z,width:"1897",height:"1388"}))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Assuming the DKG is successful, a number of artefacts will be created in the ",(0,a.kt)("inlineCode",{parentName:"p"},".charon")," folder. These include:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"deposit-data.json")," file. This contains the information needed to activate the validator on the Ethereum network."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"validator_keys/")," folder. This folder contains the private key shares and passwords for the created distributed validators.")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of ",(0,a.kt)("inlineCode",{parentName:"p"},".charon/validator_keys"),". ",(0,a.kt)("strong",{parentName:"p"},"If you lose your keys you won't be able to start the DV cluster successfully."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-lock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit-data")," files are identical for each operator and can be copied if lost.")),(0,a.kt)("h2",{id:"step-5-start-your-distributed-validator-node"},"Step 5. Start your Distributed Validator Node"),(0,a.kt)("p",null,"With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,a.kt)("inlineCode",{parentName:"p"},"geth"),") and a consensus layer client (",(0,a.kt)("inlineCode",{parentName:"p"},"lighthouse"),")."),(0,a.kt)("p",null,"Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,a.kt)("inlineCode",{parentName:"p"},":3610")," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Caution"),": If you manually update ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose")," to mount ",(0,a.kt)("inlineCode",{parentName:"p"},"lighthouse")," from your locally synced ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.lighthouse"),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,a.kt)("inlineCode",{parentName:"p"},"lighthouse")," checkpoint-syncs so the syncing doesn't take much time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": If you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"geth")," node already synced, you can simply copy over the directory. For ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"cp -r ~/.ethereum/goerli data/geth"),". This makes everything faster since you start from a synced geth node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n")),(0,a.kt)("p",null,"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"That your charon client can connect to the configured beacon client."),(0,a.kt)("li",{parentName:"ul"},"That your charon client can connect to all peers.")),(0,a.kt)("p",null,"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."),(0,a.kt)("p",null,"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."),(0,a.kt)("p",null,"If at any point you need to turn off your node, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Shut down the currently running distributed validator node\ndocker compose down\n")),(0,a.kt)("h2",{id:"step-6-activate-the-deposit-data"},"Step 6. Activate the deposit data"),(0,a.kt)("p",null,"Congrats \ud83c\udf89 if your cluster have gotten to this step of the quickstart and have successfully created a distributed validator together. "),(0,a.kt)("p",null,"If you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, ",(0,a.kt)("strong",{parentName:"p"},"ONE operator")," may process to activate this deposit data with the existing ",(0,a.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/"},"staking launchpad"),"."),(0,a.kt)("p",null,"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."),(0,a.kt)("h2",{id:"step-7---optional-add-the-monitoring-credentials"},"Step 7 - Optional. Add the Monitoring Credentials"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This step is ",(0,a.kt)("strong",{parentName:"p"},"optional")," but will help the Obol Team monitor the health of your cluster. It can only be perfomed if the Obol Team has given you a credential to use.")),(0,a.kt)("p",null,"You may have been provided with ",(0,a.kt)("strong",{parentName:"p"},"Monitoring Credentials")," used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The provided credentials needs to be added in ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"$PROM_REMOTE_WRITE_TOKEN")," and will look like:\n",(0,a.kt)("inlineCode",{parentName:"p"},"obol20!tnt8U!C..."),"."),(0,a.kt)("p",null,"The final ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," file would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20!tnt8U!C...\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: 'teku'\n    static_configs:\n      - targets: ['teku:8008']\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n")),(0,a.kt)("h2",{id:"step-8-validator-voluntary-exit"},"Step 8. Validator Voluntary Exit"),(0,a.kt)("p",null,"Exiting your validator(s) can be useful in situations where you want to stop staking and withdraw your staked ETH."),(0,a.kt)("p",null,"\ud83d\udc49 Follow the exit guide ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/quickstart-exit"},"here")),(0,a.kt)("h2",{id:"updating-dv-stack"},"Updating DV stack"),(0,a.kt)("p",null,"It is highly recommended to upgrade your DV stack from time to time. This ensures that your node is secure, performant, up-to-date and you don't miss important hard forks.\nTo do this, follow these steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Change to the node directory\ncd charon-distributed-validator-node\n\n# Pull latest changes to the repo\ngit pull\n\n# Create (or recreate) your DV stack!\ndocker compose up -d --build\n")),(0,a.kt)("p",null,"You may get a ",(0,a.kt)("inlineCode",{parentName:"p"},"git conflict")," error like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"...\nerror: Your local changes to the following files would be overwritten by merge:\nprometheus/prometheus.yml\n...\nPlease commit your changes or stash them before you merge.\nAborting\n")),(0,a.kt)("p",null,"This is probably because you have made some changes to some of the files. To get rid of this error, undo all the custom changes that you may have made and then try again."),(0,a.kt)("p",null,"Most commonly, it happens when you have specified a prometheus token (",(0,a.kt)("inlineCode",{parentName:"p"},"$PROM_REMOTE_WRITE_TOKEN"),") in ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," file.\nTo fix this, simply copy your token and undo any changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," file and try pulling again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull\n")),(0,a.kt)("p",null,"And then, simply replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PROM_REMOTE_WRITE_TOKEN")," variable with the token copied earlier."),(0,a.kt)("p",null,"Now, restart your DVT stack!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose restart -d\n")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"Discord"),". Also, feel free to add issues to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork"},"GitHub repos"),"."),(0,a.kt)("h2",{id:"other-actions"},"Other Actions"),(0,a.kt)("p",null,"The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to improve the resilience and performance of your distributed validator cluster."),(0,a.kt)("h3",{id:"docker-power-users"},"Docker power users"),(0,a.kt)("p",null,'This section of the readme is intended for the "docker power users", i.e., for the ones who are familiar with working with ',(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," and want to have more flexibility and power to change the default configuration."),(0,a.kt)("p",null,'We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in ',(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/extends/#multiple-compose-files"},"this")," for more details."),(0,a.kt)("p",null,"There are some additional compose files in this repository, ",(0,a.kt)("inlineCode",{parentName:"p"},"compose-debug.yml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mevboost-compose.yml"),", along-with the default ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file that you can use for this purpose."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"compose-debug.yml")," contains some additional containers that developers can use for debugging, like ",(0,a.kt)("inlineCode",{parentName:"li"},"jaeger"),". To achieve this, you can run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose -f docker-compose.yml -f compose-debug.yml up\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample")," is intended to override the default configuration provided in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". This is useful when, for example, you wish to add port mappings or want to disable a container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To use it, just copy the sample file to ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cp docker-compose.override.yml.sample docker-compose.override.yml\n\n# Tweak docker-compose.override.yml and then run docker compose up\ndocker compose up\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run ",(0,a.kt)("a",{parentName:"li",href:"https://boost.flashbots.net/"},"mev-boost"),", run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose -f docker-compose.yml -f mevboost-compose.yml up\n")))}c.isMDXComponent=!0},97013:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Guide05-f21317bae6200ae532bee73349d77207.png"},40358:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Guide06-aef4c137e7c3ea5a383244d3ad563394.png"},73814:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Guide07-2eacaec1895903d6c864a257ad91ba6c.png"},52834:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Guide08-46621accb14c6c81d266bc55adb43621.png"},75602:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Guide10-66d7c37171ee24ff1b6f7118308c6a29.png"}}]);