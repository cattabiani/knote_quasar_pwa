if(!self.define){let e,s={};const c=(c,f)=>(c=new URL(c+".js",f).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const d=e=>c(e,r),o={module:{uri:r},exports:n,require:d};s[r]=Promise.all(f.map((e=>o[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"knote-quasar-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/dom.b7a95ccc.js",revision:"653fbc952493a0cc9b02a2221ecc128c"},{url:"assets/ErrorNotFound.018b8cd2.js",revision:"66e34ba7cb5508a9f4cb3f4b50b0c24f"},{url:"assets/favicon.773dd587.ico",revision:"2df4e7d746577692c976b75414196c05"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.49a495a9.js",revision:"284e0231dc6f9c0192649f94847712d4"},{url:"assets/index.811d8965.css",revision:"f594f6873a8648b2bb843e6889352631"},{url:"assets/IndexPage.364cc4cf.css",revision:"d969d6ec55d6925d22765f648e92f98e"},{url:"assets/IndexPage.aa011f57.js",revision:"d1b6afe75569d39b17f95ec3830ea19c"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.fc6fb04b.js",revision:"f83368b01c9b6d06f7e625173fb0d9c3"},{url:"assets/plugin-vue_export-helper.8cfe0b59.js",revision:"5282cff3803b1a74cee36f72004e0e13"},{url:"assets/QBtn.1cd3e4f9.js",revision:"56e1259fd53caa44ddfe765355008493"},{url:"favicon.ico",revision:"2df4e7d746577692c976b75414196c05"},{url:"icons/icon-192x192.png",revision:"a951fc6eb8461169e2c7f46b18f1b602"},{url:"icons/icon-512x512.png",revision:"f8dddc513293218ad889e82430f11d3f"},{url:"index.html",revision:"33d079eef531bf5010d7e03cda75c7f6"},{url:"manifest.json",revision:"c07d7a96c5c88914be61770f5bcd81dd"},{url:"screenshots/screenshot-1.jpeg",revision:"16a5b1787e65815f2c576f24b2ab6286"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
