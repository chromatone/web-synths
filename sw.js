if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const a=e=>i(e,r),u={module:{uri:r},exports:d,require:a};s[r]=Promise.all(n.map((e=>u[e]||a(e)))).then((e=>(l(...e),d)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"db3621142cbb4fa30bb9d15dd40c8962"},{url:"ableton/index.html",revision:"c9069944fa05a7fe9a1ea4219fcaa932"},{url:"acid-machine-2/index.html",revision:"6e006b2295e6ece71f63279256681b39"},{url:"aqwertyon/index.html",revision:"958441254bf72e7a9d9097715463456a"},{url:"archive/synthescheisse/index.html",revision:"723c41e4238ba7b9cacdc5e4649a2dee"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/script.js",revision:"0f2f9610db3c70bf3ef8128066641621"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/style.css",revision:"4f047b48cc6fa6eac39a6b6026a8e350"},{url:"assets/ableton_index.md.15c9d476.js",revision:null},{url:"assets/ableton_index.md.15c9d476.lean.js",revision:null},{url:"assets/acid-machine-2_index.md.6d09cd80.js",revision:null},{url:"assets/acid-machine-2_index.md.6d09cd80.lean.js",revision:null},{url:"assets/app.357c445d.js",revision:null},{url:"assets/aqwertyon_index.md.7a73fa18.js",revision:null},{url:"assets/aqwertyon_index.md.7a73fa18.lean.js",revision:null},{url:"assets/auth_accept.md.6eb2cecd.js",revision:null},{url:"assets/auth_accept.md.6eb2cecd.lean.js",revision:null},{url:"assets/auth_index.md.b14cd055.js",revision:null},{url:"assets/auth_index.md.b14cd055.lean.js",revision:null},{url:"assets/auth_invite.md.bd42d422.js",revision:null},{url:"assets/auth_invite.md.bd42d422.lean.js",revision:null},{url:"assets/auth_logout.md.841cb19d.js",revision:null},{url:"assets/auth_logout.md.841cb19d.lean.js",revision:null},{url:"assets/auth_reset.md.7263f334.js",revision:null},{url:"assets/auth_reset.md.7263f334.lean.js",revision:null},{url:"assets/auth.md.c84787d5.js",revision:null},{url:"assets/auth.md.c84787d5.lean.js",revision:null},{url:"assets/cardboard-synth_index.md.3630ef20.js",revision:null},{url:"assets/cardboard-synth_index.md.3630ef20.lean.js",revision:null},{url:"assets/chunks/framework.0bf753ad.js",revision:null},{url:"assets/chunks/SynthPage.cd952ce7.js",revision:null},{url:"assets/chunks/useForm.f992b6a7.js",revision:null},{url:"assets/disco-computer_index.md.ea616e7c.js",revision:null},{url:"assets/disco-computer_index.md.ea616e7c.lean.js",revision:null},{url:"assets/dotpiano_index.md.a28ec50b.js",revision:null},{url:"assets/dotpiano_index.md.a28ec50b.lean.js",revision:null},{url:"assets/dx7_index.md.b1061ff0.js",revision:null},{url:"assets/dx7_index.md.b1061ff0.lean.js",revision:null},{url:"assets/elementary_index.md.f1f374b7.js",revision:null},{url:"assets/elementary_index.md.f1f374b7.lean.js",revision:null},{url:"assets/index.md.c418e504.js",revision:null},{url:"assets/index.md.c418e504.lean.js",revision:null},{url:"assets/juno-106_index.md.c96ff2e9.js",revision:null},{url:"assets/juno-106_index.md.c96ff2e9.lean.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.0d125c08.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.0d125c08.lean.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.e054787a.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.e054787a.lean.js",revision:null},{url:"assets/mod-synth_index.md.4edf8b6a.js",revision:null},{url:"assets/mod-synth_index.md.4edf8b6a.lean.js",revision:null},{url:"assets/muted-io_index.md.bf0c1af2.js",revision:null},{url:"assets/muted-io_index.md.bf0c1af2.lean.js",revision:null},{url:"assets/note-sculptor_index.md.92dd1f1e.js",revision:null},{url:"assets/note-sculptor_index.md.92dd1f1e.lean.js",revision:null},{url:"assets/nv-1_index.md.b3e1921b.js",revision:null},{url:"assets/nv-1_index.md.b3e1921b.lean.js",revision:null},{url:"assets/olif-sy-1-k_index.md.945f0b24.js",revision:null},{url:"assets/olif-sy-1-k_index.md.945f0b24.lean.js",revision:null},{url:"assets/omni_index.md.31a600af.js",revision:null},{url:"assets/omni_index.md.31a600af.lean.js",revision:null},{url:"assets/online-sequencer_index.md.473e1e23.js",revision:null},{url:"assets/online-sequencer_index.md.473e1e23.lean.js",revision:null},{url:"assets/pixel-synth_index.md.11609baa.js",revision:null},{url:"assets/pixel-synth_index.md.11609baa.lean.js",revision:null},{url:"assets/README.md.da304871.js",revision:null},{url:"assets/README.md.da304871.lean.js",revision:null},{url:"assets/sample-stich_index.md.4181309b.js",revision:null},{url:"assets/sample-stich_index.md.4181309b.lean.js",revision:null},{url:"assets/sampler_index.md.72f1f358.js",revision:null},{url:"assets/sampler_index.md.72f1f358.lean.js",revision:null},{url:"assets/sound-box_index.md.5645b75a.js",revision:null},{url:"assets/sound-box_index.md.5645b75a.lean.js",revision:null},{url:"assets/sound-trap_index.md.2b4f012a.js",revision:null},{url:"assets/sound-trap_index.md.2b4f012a.lean.js",revision:null},{url:"assets/style.da576dbb.css",revision:null},{url:"assets/sympathetic_index.md.63e49be1.js",revision:null},{url:"assets/sympathetic_index.md.63e49be1.lean.js",revision:null},{url:"assets/tanguy-synth_index.md.361f4ba3.js",revision:null},{url:"assets/tanguy-synth_index.md.361f4ba3.lean.js",revision:null},{url:"assets/theremin_index.md.1a8e9289.js",revision:null},{url:"assets/theremin_index.md.1a8e9289.lean.js",revision:null},{url:"assets/touch-pianist_index.md.c6ee8bbf.js",revision:null},{url:"assets/touch-pianist_index.md.c6ee8bbf.lean.js",revision:null},{url:"assets/touchme_index.md.7493e5dd.js",revision:null},{url:"assets/touchme_index.md.7493e5dd.lean.js",revision:null},{url:"assets/video-sampler_index.md.00365386.js",revision:null},{url:"assets/video-sampler_index.md.00365386.lean.js",revision:null},{url:"assets/virtual-piano_index.md.9e7c7b00.js",revision:null},{url:"assets/virtual-piano_index.md.9e7c7b00.lean.js",revision:null},{url:"assets/waveform_index.md.fa896006.js",revision:null},{url:"assets/waveform_index.md.fa896006.lean.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.3a444bcf.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.3a444bcf.lean.js",revision:null},{url:"assets/web-modular_index.md.cf390e71.js",revision:null},{url:"assets/web-modular_index.md.cf390e71.lean.js",revision:null},{url:"assets/web-sid_index.md.6b947a36.js",revision:null},{url:"assets/web-sid_index.md.6b947a36.lean.js",revision:null},{url:"assets/websynths_index.md.b8a01f2a.js",revision:null},{url:"assets/websynths_index.md.b8a01f2a.lean.js",revision:null},{url:"auth.html",revision:"050f725b1a25d8843bcb5977e5b5736b"},{url:"auth/accept.html",revision:"4440452aa30fcbe3a455122ebaae2e3e"},{url:"auth/index.html",revision:"8ba5846a571af3eca59ef94d1346e45a"},{url:"auth/invite.html",revision:"d4b20ef7812191a306a0ba77b3f685c0"},{url:"auth/logout.html",revision:"d82a6b0b1501fbd130dc1c74e6fee2b7"},{url:"auth/reset.html",revision:"884c2266ad4de655942cd45952dfed75"},{url:"cardboard-synth/index.html",revision:"c7f5099b1e6a24ef3b93c0dcf8e7d2f1"},{url:"circe/demo.html",revision:"0b40a4783cb88c9ffd8c7c77929526bf"},{url:"click-logo.svg",revision:"f15e71cb394926c5f8c08f64186d2d49"},{url:"cover/ableton.webp",revision:"6561f3301d66aa1c539618ad69b0970b"},{url:"cover/acid-machine-2.webp",revision:"0bdcb6a585d98e228f33fce8535165f8"},{url:"cover/aqwertyon.webp",revision:"4c83d130087f32f6b8327489335e6089"},{url:"cover/cardboard-synth.webp",revision:"842a5d7d270ecbcc5938abcd7233a877"},{url:"cover/disco-computer.webp",revision:"d8bd371e147c409948754fdb7271818e"},{url:"cover/dotpiano.webp",revision:"64a8992fed0646c1f69549c831cd29c1"},{url:"cover/dx7.webp",revision:"2a2b579b95ff6aa3963668e5e2f85cdb"},{url:"cover/elementary.webp",revision:"719ff527ab0a5b2bb36a786939a7aa7a"},{url:"cover/juno-106.webp",revision:"e1cf6e6273bf0be11c5f1d5bf84128d4"},{url:"cover/meet-the-heisenberg.webp",revision:"b6e71413c053db186ea329c26634ff20"},{url:"cover/midi-driven-web-audio.webp",revision:"5beec8a10a45b43036af77925a32da40"},{url:"cover/mod-synth.webp",revision:"411b5cef60a7b3d68e1af4b64733bbbf"},{url:"cover/muted-io.webp",revision:"270d9fcab69ffd2bf681e6f7fae5d0bb"},{url:"cover/note-sculptor.webp",revision:"bc28fc2a6de523a8b7d91a786304e91a"},{url:"cover/nv-1.webp",revision:"fbdc3df1e9a26649c3000eaffef0b363"},{url:"cover/olif-sy-1-k.webp",revision:"18cea99e25862b5f586e7919e612fe3a"},{url:"cover/omni.webp",revision:"0bc08fd308c6194698034e4c4bb6ae30"},{url:"cover/online-sequencer.webp",revision:"481fe6b3e0a802898b316bfdb2dd7e45"},{url:"cover/pixel-synth.webp",revision:"dd5c95af8d0325b27a2869d2882ab07e"},{url:"cover/sample-stich.webp",revision:"f5efcb964577c0bfd6b4037f56c8f302"},{url:"cover/sampler.webp",revision:"729fd09b498dd0518c1cbb5838afbd3c"},{url:"cover/sound-box.webp",revision:"e8ef166f3e5c80eda155939d1ea67543"},{url:"cover/sound-trap.webp",revision:"e1624dc83e48e0d6d27c5c6eb934ce49"},{url:"cover/sympathetic.webp",revision:"a7a9685862320c9410d0f605f6c6741d"},{url:"cover/tanguy-synth.webp",revision:"09af8153c0aff16ec7399651bb46a5c4"},{url:"cover/theremin.webp",revision:"9fd01e25b38bfa33cfd281045505ce7d"},{url:"cover/touch-pianist.webp",revision:"aeee9a11958d8670946d2e281851b733"},{url:"cover/touchme.webp",revision:"768b2b4f2c37244818a1763c434b0ad7"},{url:"cover/video-sampler.webp",revision:"dd7347a83ee7fea3a8050d8ba84ebb9d"},{url:"cover/virtual-piano.webp",revision:"457ea2aa9317311b89b9e7efb185f138"},{url:"cover/waveform.webp",revision:"e45bc980654e6e97904253df33a8c8f5"},{url:"cover/web-audio-synth-v2.webp",revision:"0b03a73b9e3a5bee31674e8fa38aae39"},{url:"cover/web-modular.webp",revision:"9fd34e9f10e6de32e73676fdb0c1865b"},{url:"cover/web-sid.webp",revision:"54eeeaac03e0a17e09668f07ce97a32c"},{url:"cover/websynths.webp",revision:"307db3845204ddf77af11734e86fe8ca"},{url:"disco-computer/index.html",revision:"bf89eda1ee3d91a1d9d056ca444bbcd9"},{url:"dotpiano/index.html",revision:"dab0917bf80808e56cf74254eb26edd5"},{url:"dx7/index.html",revision:"8a549489da6c8342276379b8068ef52d"},{url:"elementary/index.html",revision:"dc51cba9f95724f75d3efb0ef6f71d83"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"index.html",revision:"e5411f5f44a0e899971784ffeb27539a"},{url:"juno-106/index.html",revision:"afd45cfee20b62a00028e66b3cb934cd"},{url:"line.svg",revision:"4866b853d0c5c97e9f654fa32580076a"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"meet-the-heisenberg/index.html",revision:"64dac2787c3ed511f53f92d6aba84bc1"},{url:"midi-driven-web-audio/index.html",revision:"3057691b72f2038720b614f2d6662fe6"},{url:"mod-synth/index.html",revision:"1ab0d5e580d7bb11daca876fc9ee6575"},{url:"muted-io/index.html",revision:"a62173c767a74a2f12889829d6ed7c93"},{url:"note-sculptor/index.html",revision:"ddd58b9e9efa52414293a3813a645735"},{url:"nv-1/index.html",revision:"194448dbea3d29d8f5a8a2dd8c73e003"},{url:"olif-sy-1-k/index.html",revision:"5177752bf88c7f61480777f195a9834e"},{url:"omni/index.html",revision:"79564de2e7c0b016375dfbce6cf655ab"},{url:"online-sequencer/index.html",revision:"34edd3b30a7f4834d8c214d2c6749f04"},{url:"pixel-synth/index.html",revision:"3c64736253db3354a7ce8b59a06d99d4"},{url:"pl-logo.webp",revision:"9f0d66adf550fa40e8b2e03ff997eb34"},{url:"README.html",revision:"a0134e573abcfb7dbe84cf357426eef6"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sample-stich/index.html",revision:"05f6790fc46f70805f59f433c9077ca9"},{url:"sampler/index.html",revision:"ee758349cdd739a8854413f0b1ffa5e1"},{url:"sound-box/index.html",revision:"aca673d4babb497b0112b2e4e1379d1b"},{url:"sound-trap/index.html",revision:"0946c64cabdc4a2ff9735eb8f89d8934"},{url:"sympathetic/index.html",revision:"b7b06f90dead2d934f46aa548fcf33d5"},{url:"tanguy-synth/index.html",revision:"2df5e911848163be9155b437f7fb0118"},{url:"theremin/index.html",revision:"a217a3bf812e2c0300835f764514f5e7"},{url:"touch-pianist/index.html",revision:"d3171399f3cb0ba8676ed97ff9a49586"},{url:"touchme/index.html",revision:"937f6f44320169127a4610b14e0c62dc"},{url:"video-sampler/index.html",revision:"1a937dc3143dc317c37877676cbc4bf0"},{url:"virtual-piano/index.html",revision:"0c80023a534768055c0b57d03bb1b2f2"},{url:"waveform/index.html",revision:"dfe2363a1c76d786e5cbd1ee253b5916"},{url:"web-audio-synth-v2/index.html",revision:"d928b3baa6d24da241cf91effceac214"},{url:"web-modular/index.html",revision:"c1c8871a4cca25cc299cd9773a983bbb"},{url:"web-sid/index.html",revision:"20a29193b9502c2783dc72ead39e3d97"},{url:"websynths/index.html",revision:"2e6b044b8066dd6de1289ae9521b73f0"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"manifest.webmanifest",revision:"aee00a3fc5429948aa59c7d1c9d825cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
