"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/next/intro","docId":"intro"},{"type":"category","label":"Getting started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/docs/next/int/Overview","docId":"int/Overview"},{"type":"link","label":"Key concepts","href":"/docs/next/int/key-concepts","docId":"int/key-concepts"},{"type":"category","label":"Quickstart Guides","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Run a cluster with others","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Creator & Leader Journey","href":"/docs/next/int/quickstart/group/quickstart-group-leader-creator","docId":"int/quickstart/group/quickstart-group-leader-creator"},{"type":"link","label":"Operator Journey","href":"/docs/next/int/quickstart/group/quickstart-group-operator","docId":"int/quickstart/group/quickstart-group-operator"}],"href":"/docs/next/int/quickstart/group/"},{"type":"link","label":"Run a cluster alone","href":"/docs/next/int/quickstart/quickstart-alone","docId":"int/quickstart/quickstart-alone"},{"type":"link","label":"Run a cluster with MEV-Boost","href":"/docs/next/int/quickstart/quickstart-builder-api","docId":"int/quickstart/quickstart-builder-api"},{"type":"link","label":"Run a cluster using the CLI","href":"/docs/next/int/quickstart/quickstart-cli","docId":"int/quickstart/quickstart-cli"}],"href":"/docs/next/int/quickstart/"},{"type":"category","label":"FAQ","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Frequently asked questions","href":"/docs/next/int/faq/general","docId":"int/faq/general"},{"type":"link","label":"Errors & Resolutions","href":"/docs/next/int/faq/errors","docId":"int/faq/errors"}]}]},{"type":"category","label":"Charon","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/docs/next/charon/intro","docId":"charon/intro"},{"type":"link","label":"Distributed Key Generation","href":"/docs/next/charon/dkg","docId":"charon/dkg"},{"type":"link","label":"Cluster Configuration","href":"/docs/next/charon/cluster-configuration","docId":"charon/cluster-configuration"},{"type":"link","label":"Peer discovery","href":"/docs/next/charon/peer-discovery","docId":"charon/peer-discovery"},{"type":"link","label":"P2P interface","href":"/docs/next/charon/p2p-interface","docId":"charon/p2p-interface"},{"type":"link","label":"CLI reference","href":"/docs/next/charon/charon_cli_reference","docId":"charon/charon_cli_reference"}]},{"type":"category","label":"DV Launchpad","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/next/dvl/intro","docId":"dvl/intro"}]},{"type":"category","label":"Smart contracts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Obol Manager Contracts","href":"/docs/next/sc/introducing-obol-managers","docId":"sc/introducing-obol-managers"}]},{"type":"link","label":"Testnets","href":"/docs/next/testnet","docId":"testnet"},{"type":"category","label":"Contribution guidelines","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Filing a bug report","href":"/docs/next/cg/bug-report","docId":"cg/bug-report"},{"type":"link","label":"Documentation standards","href":"/docs/next/cg/docs","docId":"cg/docs"}]},{"type":"category","label":"Further reading","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Ethereum resources","href":"/docs/next/fr/eth","docId":"fr/eth"},{"type":"link","label":"Golang resources","href":"/docs/next/fr/golang","docId":"fr/golang"}]}]},"docs":{"cg/bug-report":{"id":"cg/bug-report","title":"Filing a bug report","description":"Bug reports are critical to the rapid development of Obol. In order to make the process quick and efficient for all parties, it is best to follow some common reporting etiquette when filing to avoid double issues or miscommunications.","sidebar":"tutorialSidebar"},"cg/docs":{"id":"cg/docs","title":"Documentation standards","description":"This section outlines the formatting standards presented within this documentation. In order to maintain continuity and quality, all pull requests must best conform to the specifics below.","sidebar":"tutorialSidebar"},"charon/charon_cli_reference":{"id":"charon/charon_cli_reference","title":"CLI reference","description":"A go-based middleware client for taking part in Distributed Validator clusters.","sidebar":"tutorialSidebar"},"charon/cluster-configuration":{"id":"charon/cluster-configuration","title":"Cluster Configuration","description":"Documenting a Distributed Validator Cluster in a standardised file format","sidebar":"tutorialSidebar"},"charon/dkg":{"id":"charon/dkg","title":"Distributed Key Generation","description":"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony.","sidebar":"tutorialSidebar"},"charon/intro":{"id":"charon/intro","title":"Introduction","description":"Charon - The Distributed Validator Client","sidebar":"tutorialSidebar"},"charon/p2p-interface":{"id":"charon/p2p-interface","title":"P2P interface","description":"Connectivity between Charon instances","sidebar":"tutorialSidebar"},"charon/peer-discovery":{"id":"charon/peer-discovery","title":"Peer discovery","description":"How do distributed validator clients communicate with one another securely?","sidebar":"tutorialSidebar"},"dvl/intro":{"id":"dvl/intro","title":"Introduction","description":"A dapp to securely create Distributed Validators alone or with a group.","sidebar":"tutorialSidebar"},"fr/eth":{"id":"fr/eth","title":"Ethereum resources","description":"This page serves material necessary to catch up with the current state of Ethereum proof-of-stake development and provides readers with the base knowledge required to assist with the growth of Obol. Whether you are an expert on all things Ethereum or are new to the blockchain world entirely, there are appropriate resources here that will help you get up to speed.","sidebar":"tutorialSidebar"},"fr/golang":{"id":"fr/golang","title":"Golang resources","description":"* The Go Programming Language  \\\\(Only recommended book\\\\)","sidebar":"tutorialSidebar"},"int/faq/errors":{"id":"int/faq/errors","title":"Errors & Resolutions","description":"Errors & Resolutions","sidebar":"tutorialSidebar"},"int/faq/general":{"id":"int/faq/general","title":"Frequently asked questions","description":"Frequently asked questions","sidebar":"tutorialSidebar"},"int/key-concepts":{"id":"int/key-concepts","title":"Key concepts","description":"Some of the key terms in the field of Distributed Validator Technology","sidebar":"tutorialSidebar"},"int/Overview":{"id":"int/Overview","title":"Overview","description":"An overview of the Obol network","sidebar":"tutorialSidebar"},"int/quickstart/group/index":{"id":"int/quickstart/group/index","title":"Run a cluster with others","description":"Charon is in an early alpha state and is not ready to be run on mainnet","sidebar":"tutorialSidebar"},"int/quickstart/group/quickstart-group-leader-creator":{"id":"int/quickstart/group/quickstart-group-leader-creator","title":"Creator & Leader Journey","description":"A leader/creator creates a cluster configuration to be shared with operators","sidebar":"tutorialSidebar"},"int/quickstart/group/quickstart-group-operator":{"id":"int/quickstart/group/quickstart-group-operator","title":"Operator Journey","description":"A node operator joins a DV cluster","sidebar":"tutorialSidebar"},"int/quickstart/index":{"id":"int/quickstart/index","title":"Quickstart Guides","description":"Charon is in an early alpha state and is not ready to be run on mainnet","sidebar":"tutorialSidebar"},"int/quickstart/quickstart-alone":{"id":"int/quickstart/quickstart-alone","title":"Run a cluster alone","description":"Run all nodes in a distributed validator cluster","sidebar":"tutorialSidebar"},"int/quickstart/quickstart-builder-api":{"id":"int/quickstart/quickstart-builder-api","title":"Run a cluster with MEV-Boost","description":"Run a distributed validator cluster with the builder API (MEV-Boost)","sidebar":"tutorialSidebar"},"int/quickstart/quickstart-cli":{"id":"int/quickstart/quickstart-cli","title":"Run a cluster using the CLI","description":"Run one node in a multi-operator distributed validator cluster using the CLI","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Welcome to the Multi-Operator Validator Network","sidebar":"tutorialSidebar"},"sc/introducing-obol-managers":{"id":"sc/introducing-obol-managers","title":"Obol Manager Contracts","description":"How does the Obol Network look on-chain?","sidebar":"tutorialSidebar"},"testnet":{"id":"testnet","title":"Testnets","description":"Obol testnets roadmap","sidebar":"tutorialSidebar"}}}')}}]);