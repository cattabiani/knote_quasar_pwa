if(!self.define){let e,s={};const f=(f,c)=>(f=new URL(f+".js",c).href,s[f]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=s,document.head.appendChild(e)}else e=f,importScripts(f),s()})).then((()=>{let e=s[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(c,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const d=e=>f(e,r),n={module:{uri:r},exports:a,require:d};s[r]=Promise.all(c.map((e=>n[e]||d(e)))).then((e=>(i(...e),a)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"knote-quasar-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ErrorNotFound.e4c6df54.js",revision:"8a1c9f1b55c2aec74c0ffce05597d082"},{url:"assets/favicon.773dd587.ico",revision:"2df4e7d746577692c976b75414196c05"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.514d46c2.css",revision:"2d7656d8470bdfbadacf4f5464c9e48a"},{url:"assets/index.e60df096.js",revision:"cc52001001c103269a355d1310f92c37"},{url:"assets/IndexPage.3aaf9974.js",revision:"ee0d07710359e1adf521f8ff97c84794"},{url:"assets/IndexPage.a74cb598.css",revision:"13a18a333af4b9f85dfde3144dfc2831"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.09e831b2.js",revision:"249622c66ec13ed90e311d1674110036"},{url:"assets/plugin-vue_export-helper.8e20f808.js",revision:"d45d5777c9d96cca1edfffabe7595d88"},{url:"favicon.ico",revision:"2df4e7d746577692c976b75414196c05"},{url:"icons/icon-192x192.png",revision:"a951fc6eb8461169e2c7f46b18f1b602"},{url:"icons/icon-512x512.png",revision:"f8dddc513293218ad889e82430f11d3f"},{url:"index.html",revision:"9f7372cff5d44bc74a51a3a124eb6f9d"},{url:"manifest.json",revision:"824994df6450ad0abef38421405975a0"},{url:"screenshots/screenshot-1.jpeg",revision:"16a5b1787e65815f2c576f24b2ab6286"},{url:"screenshots/screenshot-2.jpeg",revision:"3a3246b0449c3bf8068933438c56313c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
