if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2b0f32cef8c2a67ea2f2aa5327c83fafa51600de.91acab578050961bec08.js",revision:"da281d8fd86ae129d8fe256645b415b5"},{url:"/_next/static/chunks/7b76557e6cc6c4a61db972d7d785b5a77166c128.156efe9eccf404fa78b2.js",revision:"6000f6df61d0d86f3ddb5987cc501714"},{url:"/_next/static/chunks/commons.1ff8ac57bcf3a1371f0b.js",revision:"61eb32b7e7e7903fd1a7d901c33faa24"},{url:"/_next/static/chunks/d2b4d7187432b9cf4491a26d5508bf563050d42c.7304552169efc74c1e0d.js",revision:"e8d6fdfc6ccdde8a2354e515feee5ecd"},{url:"/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",revision:"7eafc2b810ea3395615465510119d273"},{url:"/_next/static/chunks/main-1772ad9e9d44a6440c6f.js",revision:"4efbbda23f42a7b8062aced14de9889e"},{url:"/_next/static/chunks/pages/_app-59041a8905697b381f2b.js",revision:"acd1cc1ed87b404d8398514bcdc248b2"},{url:"/_next/static/chunks/pages/_error-021bfc9e924f96509f92.js",revision:"9ca5b4e98973a5c9dc97e766864a46b8"},{url:"/_next/static/chunks/pages/about-6e121acac4318f813862.js",revision:"6d5f2544fe5602b80626232e5f566b71"},{url:"/_next/static/chunks/pages/blogs/%5Bslug%5D-46e142518a06c0948d6f.js",revision:"7b4db6bf4b051fce97cd01f9f198fb31"},{url:"/_next/static/chunks/pages/index-e411f2ef8fc3865eec17.js",revision:"144e8634d2b7568798bf2157f06aaf59"},{url:"/_next/static/chunks/pages/recommendations-742bdf535d14e47b50fd.js",revision:"ed5fd0b48335e94eba76b55405b107ab"},{url:"/_next/static/chunks/polyfills-a1a2fb3654553e240508.js",revision:"c88523e45de8722752b05d902730ca47"},{url:"/_next/static/chunks/webpack-eb080e3f091731f228fb.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/_next/static/css/0cdde17aa54099bb8e2a.css",revision:"b2821bd0b62e143413dafdf26a15352d"},{url:"/_next/static/css/8f2aa8d5a538151e0681.css",revision:"9602614b15a14fd4f9e6fb8699732200"},{url:"/_next/static/ucJ507fwaLFp5CWieEVSZ/_buildManifest.js",revision:"8ac90cca98ad1b89eaa4d34d80b78a62"},{url:"/_next/static/ucJ507fwaLFp5CWieEVSZ/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"2fd078f4d5dc150f019b3ebb921ed836"},{url:"/icons/android-icon-192x192.png",revision:"82a2aec6187f3c1ceb32108e2e779a79"},{url:"/icons/android-icon-512x512.png",revision:"6edc250409ee06e04938158aac319c07"},{url:"/icons/apple-icon-114x114.png",revision:"92b650a0d0b1d329be4e2ecc1c3d9642"},{url:"/icons/apple-icon-120x120.png",revision:"71e87753b0a2d6638e058347d0c3a4c9"},{url:"/icons/apple-icon-144x144.png",revision:"14cb72f4a22d1c1866c5eb3005d48ae1"},{url:"/icons/apple-icon-152x152.png",revision:"f4071a981380831dd873b43ff3b4f6ab"},{url:"/icons/apple-icon-180x180.png",revision:"2f2e5ac4aeab933fe8d1e195344bdb59"},{url:"/icons/apple-icon-57x57.png",revision:"d71ef460d9275031a5000f1dc6a4bf80"},{url:"/icons/apple-icon-60x60.png",revision:"74ba106c922995fec60f736aee7c7126"},{url:"/icons/apple-icon-72x72.png",revision:"45319cdc765af3924cf6a7f72c021ce9"},{url:"/icons/apple-icon-76x76.png",revision:"eac75093ae0c3977e2c8ac6aabee4f8c"},{url:"/icons/favicon-16x16.png",revision:"1a352f8c32bdc932e99e5fa04d3812ab"},{url:"/icons/favicon-32x32.png",revision:"fe0d08c9ffc9ff233de6c7eb546920c1"},{url:"/icons/favicon-96x96.png",revision:"1423a4cd16005244d5439b8e17ef832b"},{url:"/icons/maskable-icon-602x602.png",revision:"ada17eb65afa70cf9bc11495a3686a8e"},{url:"/icons/social/github.png",revision:"1b9b9f71269e504156ce9d89a00f2551"},{url:"/icons/social/github_1.png",revision:"a0f715ce20075bd3c2967d4ad521fdf2"},{url:"/icons/social/linkedIn.png",revision:"30c453b7f5fbdb09ea0cb42a5dc7a6e5"},{url:"/icons/social/linkedIn_1.png",revision:"36b9da6f37a4ea45726f0a9537e6d493"},{url:"/icons/social/stack-overflow.png",revision:"8e5c9be2c3d286c185f407d86a49d828"},{url:"/icons/social/stack-overflow_1.png",revision:"c63d2b6abe70d209dbb62b72b42e03d2"},{url:"/images/Logo_792_820.jpg",revision:"b165b0bc8fc3892a469935e8ada07d32"},{url:"/images/emabarassed_398_398.jpg",revision:"a01a3f0a978280a4dc590a38e6a0f7ba"},{url:"/images/hey_398_398.jpg",revision:"c38015a0952fda42930ff379ff6d33bf"},{url:"/images/profile_400_400.jpg",revision:"b747a9d4898d256c90be37a0876def91"},{url:"/images/profile_792_820.jpg",revision:"6b32bda85670d19b41216c5b2e023a15"},{url:"/images/read_398_398.jpg",revision:"41a0c1880a8b399942ed72198db4ed91"},{url:"/logo.svg",revision:"e06e89c9e80734c4bab106d6a8ed90a8"},{url:"/manifest.json",revision:"b37e1ced0449eed33dfd33007b1702b9"},{url:"/routes.json",revision:"908ae8b6da67913c36c955fc5fec56d1"},{url:"/sitemap.xml",revision:"801c2105098665dae39fa9de60ed58f3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
