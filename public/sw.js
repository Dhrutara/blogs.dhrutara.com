if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/83b2862deb2761c97bb660297c7b1fc93717087f.28d01c1610aff59ed442.js",revision:"e8351c489192ed96ff0e66be276b4c59"},{url:"/_next/static/chunks/commons.a6de87ba6ceb318972e8.js",revision:"0c85b59f9481da359735458fd2ea2e4c"},{url:"/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",revision:"7eafc2b810ea3395615465510119d273"},{url:"/_next/static/chunks/main-9133213769124e540d0c.js",revision:"07b6e77eadf349dbf4cc83dc8193ef55"},{url:"/_next/static/chunks/pages/_app-69104736cc113eaed2e0.js",revision:"ce59e2ba8a0dda71f0625955088cb57c"},{url:"/_next/static/chunks/pages/_error-4c0e59626af2fe2052a1.js",revision:"b9c0aa197f07b4f95568dea721282185"},{url:"/_next/static/chunks/pages/about-04e02e9aaa59df7db532.js",revision:"11f21269c6de468feff9f0fd54a6dcb2"},{url:"/_next/static/chunks/pages/blogs/react-app-to-asp-net-react-app-5575a3f171c08f92997f.js",revision:"4d2540f84fb02d9c87b37c4307745ff9"},{url:"/_next/static/chunks/pages/index-451d67e6f5c18e3a9a56.js",revision:"0a9a83a38798f2b7a820df3211fcf655"},{url:"/_next/static/chunks/polyfills-a98cee78eb8282e29fb6.js",revision:"b6d968e5af60e0e204db3d6890e0baca"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/0264a45fb822bc2d7cd1.css",revision:"011bee641d5207c7070ae6bcad5bea25"},{url:"/_next/static/css/9dd84ff07f85517b61c5.css",revision:"ebd3afb7dd6f2e617031fe32962c70e4"},{url:"/_next/static/xvAeJbBtUAuIupPDuMXvM/_buildManifest.js",revision:"72860254a4e1b3eb068d86b67a978d94"},{url:"/_next/static/xvAeJbBtUAuIupPDuMXvM/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"2fd078f4d5dc150f019b3ebb921ed836"},{url:"/icons/android-icon-192x192.png",revision:"82a2aec6187f3c1ceb32108e2e779a79"},{url:"/icons/android-icon-512x512.png",revision:"6edc250409ee06e04938158aac319c07"},{url:"/icons/apple-icon-114x114.png",revision:"92b650a0d0b1d329be4e2ecc1c3d9642"},{url:"/icons/apple-icon-120x120.png",revision:"71e87753b0a2d6638e058347d0c3a4c9"},{url:"/icons/apple-icon-144x144.png",revision:"14cb72f4a22d1c1866c5eb3005d48ae1"},{url:"/icons/apple-icon-152x152.png",revision:"f4071a981380831dd873b43ff3b4f6ab"},{url:"/icons/apple-icon-180x180.png",revision:"2f2e5ac4aeab933fe8d1e195344bdb59"},{url:"/icons/apple-icon-57x57.png",revision:"d71ef460d9275031a5000f1dc6a4bf80"},{url:"/icons/apple-icon-60x60.png",revision:"74ba106c922995fec60f736aee7c7126"},{url:"/icons/apple-icon-72x72.png",revision:"45319cdc765af3924cf6a7f72c021ce9"},{url:"/icons/apple-icon-76x76.png",revision:"eac75093ae0c3977e2c8ac6aabee4f8c"},{url:"/icons/favicon-16x16.png",revision:"1a352f8c32bdc932e99e5fa04d3812ab"},{url:"/icons/favicon-32x32.png",revision:"fe0d08c9ffc9ff233de6c7eb546920c1"},{url:"/icons/favicon-96x96.png",revision:"1423a4cd16005244d5439b8e17ef832b"},{url:"/icons/maskable-icon-602x602.png",revision:"ada17eb65afa70cf9bc11495a3686a8e"},{url:"/images/profile_400_400.jpg",revision:"b747a9d4898d256c90be37a0876def91"},{url:"/images/profile_792_820.jpg",revision:"6b32bda85670d19b41216c5b2e023a15"},{url:"/logo.svg",revision:"e06e89c9e80734c4bab106d6a8ed90a8"},{url:"/manifest.json",revision:"563082038d901eed2292afbff8088b01"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
