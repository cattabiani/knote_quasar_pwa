if(!self.define){let e,s={};const f=(f,c)=>(f=new URL(f+".js",c).href,s[f]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=s,document.head.appendChild(e)}else e=f,importScripts(f),s()})).then((()=>{let e=s[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const n=e=>f(e,a),o={module:{uri:a},exports:r,require:n};s[a]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(i(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"knote-quasar-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/dom.0174b0df.js",revision:"1e2feb9d72994aa62ba86316fcf2759c"},{url:"assets/ErrorNotFound.046b6e9e.js",revision:"b347f2aed3c682f745d46699f272ea66"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.811d8965.css",revision:"f594f6873a8648b2bb843e6889352631"},{url:"assets/index.e7f0cb57.js",revision:"870b671e4c4686db0b8b5c70342ef06e"},{url:"assets/IndexPage.17a8ccc5.css",revision:"b3c34a84a6a02f3e38b10794fa9a9cd0"},{url:"assets/IndexPage.b6a895b2.js",revision:"197db16a4389506c86438e97bd1287b5"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.6b19c5c7.js",revision:"8b1762ccbe6d37877b9c5fa9d5b51e23"},{url:"assets/plugin-vue_export-helper.9a3e04c1.js",revision:"e4f6b8f7651c300dca12d41efd3cbca0"},{url:"assets/QBtn.caaf75ff.js",revision:"0de732e0ba37a7b076901f30264caf61"},{url:"favicon.ico",revision:"2df4e7d746577692c976b75414196c05"},{url:"icons/icon-192x192.png",revision:"a951fc6eb8461169e2c7f46b18f1b602"},{url:"icons/icon-512x512.png",revision:"f8dddc513293218ad889e82430f11d3f"},{url:"index.html",revision:"8593bfca66c314a3abf5633ce60fffe0"},{url:"manifest.json",revision:"731bdbf9d8ce39f9c1cdcaa238e2ff21"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
