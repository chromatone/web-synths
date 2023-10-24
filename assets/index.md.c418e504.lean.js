import{r as g,h as M,j as O,e as W,k as $,l as q,o as t,c as n,a,m as A,u as p,t as b,n as f,p as P,f as w,_ as x,q as z,s as B,x as T,y as D,g as y,z as v,A as S,b as k,B as F,F as Z,C,D as E,E as L,G as V}from"./chunks/framework.0bf753ad.js";import{u as I}from"./chunks/useForm.f992b6a7.js";const j={class:"text-center line-height-loose text-md py-16 px-4"},N={class:"mx-auto max-w-75ch intro md-text-lg"},Y={key:0,class:"p-2 flex flex-col mt-8"},G={class:"text-4xl font-bold"},U=a("div",{class:"text-lg"},"web synths",-1),J={key:1,class:"p-2 flex flex-col mt-8"},H={class:"text-4xl font-bold"},R=a("div",{class:"text-lg"},"web musicians",-1),Q={__name:"AboutUs",props:{synths:{type:Number,default:30}},setup(e){const l=g(),o=g([]),i=M(()=>o.value.length),s=O(i);W(()=>{fetch("https://corsproxy.io/?https://db.chromatone.center/items/players?limit=-1").then(h=>h.json()).then(({data:h})=>o.value=h)});const u=$(l),{share:d,isSupported:r}=q();function c(){d({title:"Web synths collection",text:"Look at this online synthesizer collection. No need to install anything - just your browser and any MIDI controller will do.",url:location.href})}return(h,m)=>(t(),n("div",j,[a("div",N,[A(h.$slots,"default"),a("div",{class:"flex justify-center",ref_key:"counters",ref:l},[p(u)?(t(),n("div",Y,[a("div",G,b(e.synths),1),U])):f("",!0),p(u)&&i.value>0?(t(),n("div",J,[a("div",H,b(p(s).toFixed())+"+",1),R])):f("",!0)],512),p(r)?(t(),n("button",{key:0,class:"text-white py-2 px-4 mt-6 shadow-lg rounded-lg cursor-pointer bg-green-600 -hover-translate-y-2px transition",onClick:m[0]||(m[0]=_=>c())},"Share now to save for later")):f("",!0)])]))}},K={key:0,d:"M30.336 12.547l-10.172-1.074L16 2.133l-4.164 9.34l-10.172 1.074l7.598 6.848L7.14 29.398L16 24.29l8.86 5.11l-2.122-10.004z",fill:"#ffaa00"},X={key:1,d:"M16 2.125l-.906 2.063l-3.25 7.28l-7.938.845l-2.25.25l1.688 1.5l5.906 5.343l-1.656 7.813l-.469 2.187l1.969-1.125l6.906-4l6.906 4l1.969 1.125l-.469-2.187l-1.656-7.813l5.906-5.343l1.688-1.5l-2.25-.25l-7.938-.844l-3.25-7.281zm0 4.906l2.563 5.782l.25.53l.562.063l6.281.656l-4.687 4.22l-.438.405l.125.563l1.313 6.156l-5.469-3.125l-.5-.312l-.5.312l-5.469 3.125l1.313-6.156l.125-.563l-.438-.406l-4.687-4.218l6.281-.657l.563-.062l.25-.531z",fill:"#888888"},ee={__name:"SynthFav",props:{url:{type:String,default:""}},setup(e){const o=P("fav:"+e.url,!1);function i(s){o.value=!o.value}return(s,u)=>(t(),n("svg",{onClick:u[0]||(u[0]=w(d=>i(e.url),["stop","prevent"])),xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},[p(o)?(t(),n("path",K)):(t(),n("path",X))]))}};const te=e=>(E("data-v-20250eab"),e=e(),L(),e),ae=["data-umami-event"],ne={class:"p-4 flex flex-col items-start justify-between gap-2",style:{flex:"10 0 200px"}},se={class:"font-bold flex items-center gap-2 flex-0 w-full"},le={class:"transition text-xl select-none absolute top-4 left-4 text-center z-200"},oe={class:"flex-1"},re={class:"text-xl"},ie={key:0,class:"font-normal",title:"Archived locally by us"},ce=te(()=>a("div",{class:"flex-1"},null,-1)),ue={key:1,class:"flex-1 flex items-end flex flex-wrap gap-2"},de=["href"],he={__name:"SynthCard",props:{pos:{type:Number,default:0},off:{type:Boolean,default:!1},title:{type:String,default:""},slug:{type:String,default:""},description:{type:String,default:""},cover:{type:String,default:""},url:{type:String,default:""},author:{type:String,default:""},author_link:{type:String,default:""},tags:{type:Array,default:()=>[]},archive:{type:Boolean,default:!1},archive_link:{type:String,default:""}},setup(e){const l=e,{checkAvailability:o,isFormOpen:i}=I(),s=g(null);z(o,async d=>{try{(await fetch("https://corsproxy.io/?"+l.url)).status==200?s.value=!0:s.value=!1}catch{s.value=!1}});function u(){l.off?i.value=!i.value:window.open(l.archive?l.archive_link:l.url,"_blank")}return(d,r)=>{var m;const c=ee,h=B("ClientOnly");return t(),n("button",{class:"w-full flex flex-wrap items-stretch text-left relative bg-light-500 dark-bg-dark-300 -hover-translate-y-6px transition duration-200 hover-shadow-lg rounded-lg overflow-hidden relative border-1 border-dark-100 border-opacity-20 shadow-sm dark-border-light-800 dark-border-opacity-20","data-umami-event":e.title,onClick:u},[a("div",{class:"cover min-h-50 bg-cover bg-center filter transition",style:T([{backgroundImage:`url(/cover/${e.slug}.webp)`},{flex:"1 1 280px"}])},null,4),a("div",ne,[a("div",se,[a("div",le,b(e.pos+1),1),a("div",oe,[a("span",re,b(e.title),1),e.archive?(t(),n("span",ie,"(A)")):f("",!0)]),p(o)?(t(),n("div",{key:0,class:D(["w-2 h-2 rounded-full shadow-inset",{"bg-green-500":s.value===!0,"bg-red-500":s.value===!1}])},null,2)):f("",!0),y(h,null,{default:v(()=>[y(c,{class:"scale-70 w-10 absolute right-2",url:e.url},null,8,["url"])]),_:1})]),e.author?(t(),S(F(e.author_link?"a":"div"),{key:0,class:"p-0 text-sm",href:e.author_link,target:"_blank"},{default:v(()=>[k("by "+b(e.author),1)]),_:1},8,["href"])):f("",!0),ce,((m=e.tags)==null?void 0:m.length)>0?(t(),n("div",ue,[(t(!0),n(Z,null,C(e.tags,_=>(t(),n("div",{class:"px-2 py-1 text-sm bg-light-800 dark-bg-dark-500 rounded-lg",key:_},b(_),1))),128))])):f("",!0),a("a",{class:"p-1 dark-bg-light-300 bg-dark-300 absolute bottom-2 right-2 rounded-full opacity-10 hover-opacity-80 transition",onClick:r[0]||(r[0]=w(()=>{},["stop"])),href:`/${e.slug}/`},null,8,de)])],8,ae)}}},fe=x(he,[["__scopeId","data-v-20250eab"]]),pe=JSON.parse(`[{"id":1,"status":"published","sort":1,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.730Z","title":"Dotpiano","url":"https://dotpiano.com/","cover":"fd81d5c3-4cb6-41eb-9689-d5f7aba2b8a6","tags":["polyphonic","midi","keyboard"],"content":null,"author":"Alex Chen and Yotam Mann","archive":false,"archive_link":null,"players_count":null,"slug":"dotpiano","author_link":null,"description":null},{"id":39,"status":"published","sort":2,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-09-05T12:09:51.282Z","title":"Waveform","url":"https://waveform.playtronica.com/","cover":"1ad61158-88c4-4fcd-a878-9273e8f85f96","tags":["playtronica","polyphonic","midi"],"content":null,"author":"Qvantor","archive":false,"archive_link":null,"players_count":null,"slug":"waveform","author_link":"https://github.com/qvantor/","description":null},{"id":14,"status":"published","sort":3,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.765Z","title":"Juno-106","url":"http://juno-106.js.org/","cover":"d4fad441-c1a0-4ccc-9c0d-d8bfb79f9094","tags":["fm","midi"],"content":null,"author":"Steve Goldberg ","archive":false,"archive_link":null,"players_count":null,"slug":"juno-106","author_link":"https://github.com/stevengoldberg","description":null},{"id":29,"status":"published","sort":4,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.891Z","title":"Elementary synth","url":"https://chromatone.center/practice/synth/elementary/","cover":"14f5d908-fba2-451f-8bec-a922cc5672c7","tags":["chromatone","polyphonic","keyboard"],"content":null,"author":"Chromatone","archive":false,"archive_link":null,"players_count":null,"slug":"elementary","author_link":"https://chromatone.center","description":null},{"id":30,"status":"published","sort":5,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.800Z","title":"DX7 Synth","url":"https://mmontag.github.io/dx7-synth-js/","cover":"01eacfd8-892d-41de-b928-50b686a87400","tags":null,"content":null,"author":"Matt Montag ","archive":false,"archive_link":null,"players_count":null,"slug":"dx7","author_link":"https://github.com/mmontag","description":null},{"id":3,"status":"published","sort":6,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.748Z","title":"TouchME","url":"https://touchme.chromatone.center/","cover":"6e97f4ab-c2f7-4e90-9c26-7518dbfddb3a","tags":["chromatone","playtronica"],"content":null,"author":"Chromatone","archive":false,"archive_link":null,"players_count":null,"slug":"touchme","author_link":"https://chromatone.center","description":null},{"id":32,"status":"published","sort":7,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.784Z","title":"Sampler synth","url":"https://play.playtronica.com/","cover":"749cb332-eb5e-40c6-bb36-fb87bb25a834","tags":["playtronica","sampler"],"content":null,"author":"Playtronica","archive":false,"archive_link":null,"players_count":null,"slug":"sampler","author_link":"https://shop.playtronica.com","description":null},{"id":42,"status":"published","sort":8,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-10-07T17:37:23.213Z","title":"aQWERTYon","url":"https://apps.musedlab.org/aqwertyon/theory/","cover":"06202e3e-8333-4ca1-975a-31c2e05cc55e","tags":["polyphonic","samples"],"content":"The aQWERTYon (QWERTY accordion) is designed to simplify the process for improvising, learning, and making music with your computer keyboard. Play along with your favorite YouTube videos, learn music theory through our Music Theory for Bedroom Producers course in collaboration with Soundfly, or take advantage of Web MIDI and us it to play and record into your favorite digital audio workstation, such as Soundtrap.com, GarageBand, Logic, or Ableton, or as input into music notation programs like Noteflight.\\n\\nhttps://youtu.be/hqFr4lF6u_Y","author":"Mused lab","archive":false,"archive_link":null,"players_count":null,"slug":"aqwertyon","author_link":"https://musedlab.org/","description":null},{"id":26,"status":"published","sort":9,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.816Z","title":"Learning synths","url":"https://learningsynths.ableton.com/","cover":"f5c81f00-fc0e-40ad-96ce-a1834709253a","tags":null,"content":null,"author":"Ableton","archive":false,"archive_link":null,"players_count":null,"slug":"ableton","author_link":"https://github.com/Ableton","description":null},{"id":10,"status":"published","sort":10,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.837Z","title":"Websynths","url":"http://websynths.com/","cover":"072cf912-9966-4d3f-9823-36e75fb8ada9","tags":null,"content":null,"author":"WebSynths","archive":false,"archive_link":null,"players_count":null,"slug":"websynths","author_link":"https://www.websynths.org/","description":null},{"id":37,"status":"published","sort":11,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-21T14:18:48.099Z","title":"Sympathetic Synthesizer System Mk 1","url":"https://stuartmemo.com/synth/","cover":"9186b1e4-9929-492e-94eb-32a04aa523c8","tags":["keyboard","midi","additive"],"content":null,"author":"Stuart Memo ","archive":false,"archive_link":null,"players_count":null,"slug":"sympathetic","author_link":"https://github.com/stuartmemo","description":null},{"id":43,"status":"published","sort":12,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-10-17T14:32:18.795Z","title":"Muted.io","url":"https://muted.io/","cover":"71b040c1-3d66-46c1-bd2e-7a1ad638a534","tags":["educational","midi"],"content":null,"author":"Sébastien Noël","archive":false,"archive_link":null,"players_count":null,"slug":"muted-io","author_link":"https://twitter.com/muted_io","description":null},{"id":19,"status":"published","sort":13,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.859Z","title":"Theremin","url":"https://www.femurdesign.com/theremin/","cover":"f4ca5ef9-132a-4e56-80fb-21bd0fd0b3f6","tags":null,"content":null,"author":"Femur","archive":false,"archive_link":null,"players_count":null,"slug":"theremin","author_link":"https://femurdesign.com/","description":null},{"id":41,"status":"published","sort":14,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-09-11T07:20:39.392Z","title":"Touch Pianist","url":"https://touchpianist.com/","cover":"1383974a-3cbb-4a15-b8d6-6a41739da706","tags":["entertainment","piano"],"content":"Touch Pianist is a musical toy / instrument that allows the user to perform hard-to-play classical piano music favorites (from composers like Beethoven, Mozart, Bach, Satie, Debussy to name a few) just by tapping the rhythm of the piece's particular sound events on a computer keyboard or a touch screen.\\n\\nIt also provides live visualisation of the pieces that are being performed. There is no score keeping, the user is free to perform the music in any way they wish. The premise is that it is really fun to perform a piece you know well, exactly like you feel it with so little effort.\\n\\nTouch Pianist has CoreMIDI support so you can use your favorite piano / sound plug-in in your computer as a sound source if you wish.","author":"EarSlap","archive":false,"archive_link":null,"players_count":null,"slug":"touch-pianist","author_link":null,"description":null},{"id":22,"status":"published","sort":15,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.875Z","title":"Disco-computer","url":"http://www.disco-computer.com/synthesizer/synth.html","cover":"1ac14701-0530-4ca6-b516-45d5f9523819","tags":["polyphonic","fm","keyboard"],"content":null,"author":"Patrick Sawyer","archive":true,"archive_link":"archive/synthescheisse/index.html","players_count":null,"slug":"disco-computer","author_link":null,"description":null},{"id":31,"status":"published","sort":16,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.906Z","title":"Video Sampler","url":"https://seeing-sound.netlify.app/","cover":"a4e5d9b7-1b64-4c31-aed4-467e2c6cba32","tags":null,"content":null,"author":"Playtronica","archive":false,"archive_link":null,"players_count":null,"slug":"video-sampler","author_link":"https://shop.playtronica.com","description":null},{"id":28,"status":"published","sort":18,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.958Z","title":"WebSID Commodore 64","url":"http://www.igorski.nl/experiment/websid","cover":"e39565a0-15fa-4c3a-9bc7-aa5a613dd19f","tags":["polyphonic","keyboard","midi","additive"],"content":null,"author":"Igor Zinken","archive":false,"archive_link":null,"players_count":null,"slug":"web-sid","author_link":"https://www.igorski.nl/","description":null},{"id":27,"status":"published","sort":19,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.918Z","title":"Viktor NV-1","url":"http://nicroto.github.io/viktor/","cover":"1c104eeb-dc14-4d3b-bb8e-14accb2184c3","tags":null,"content":null,"author":"Nikolay Tsenkov ","archive":false,"archive_link":null,"players_count":null,"slug":"nv-1","author_link":"https://github.com/nicroto","description":null},{"id":35,"status":"published","sort":20,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-21T14:05:27.437Z","title":"VirtualPiano.eu","url":"https://virtualpiano.eu/","cover":"e3f86bf5-68a9-4e0c-bb67-d0f31c26365b","tags":["midi","keyboard"],"content":"VirtualPiano.eu is the online synthesizer that allows you to play 128 musical instruments for free using your PC keyboard, the mouse or by connecting an external MIDI keyboard.\\n\\nYou can adjust Volume, Reverb, Loop and quality. Use the sustain and adjust the octaves, you can also select and set different channels including the one for the drums.\\n\\nCreate your own melodies, have fun playing or use VirtualPiano to learn how to play the Piano online on your own. ","author":"WebSyrup","archive":false,"archive_link":null,"players_count":null,"slug":"virtual-piano","author_link":"https://websyrup.net/","description":null},{"id":36,"status":"published","sort":21,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-21T14:14:48.036Z","title":"Online sequencer","url":"https://onlinesequencer.net/","cover":"d55b5de1-f912-432f-a4e5-8c601643ecb9","tags":["sequencer"],"content":"**Online Sequencer** is a web-based music sequencer that allows users to create music saved online, or on their computer. The piano roll is essential to the sequencer, which is on the left of the screen, with 72 notes from C2-B7 (labelled differently from a piano, C2 on the sequencer corresponds to C1 on a piano). In addition to several parameters which can be modified to change the sound of the music, additional functionality can be accessed via the console.\\n\\nUpon opening the site, users can begin composing and \\"drawing\\" notes on the grid, with the default instrument being Electric Piano. By default, a sequence's time signature is set to 4/4, and the grid spacing is set to 1/4 (16 notes per measure). The note lengths can be adjusted by dragging the dark tab on the right of each note, and precision can be afforded by changing the 'Grid' option to other note divisions. \\n\\n## History\\n\\nOnline Sequencer was created on January 2, 2013 by Jacob Morgan during a break at Georgia Tech.\\n\\nBeginning in the fall of 2013, accounts were available but were separate from the music portion of the site. They were only used in the forum and the website chat.\\n\\nIn 2015, accounts were linked to the main website and allowed songs to be saved under someone's username.\\n\\nThe World Update in 2018 added several new instruments and changed the landscape of sound design on the site. The \\"World Update Contest\\" was held for the update.\\n\\nStarting in late 2020, OS began to receive a variety of updates which vastly improved the functionality of the site. These updates introduced features like custom grid sizes, automation with markers, extra reverb options, detune, and distortion. In 2021, the \\"Space Race\\" contest was held, as to see who could work best with the changes.\\n\\nIn late 2022, newer, higher-quality instruments were added. Some of the instruments, such as Electric Piano, Grand Piano, Violin, and Cello got an updated sustained version, while the original versions still exist under the \\"classic\\" designation.\\n\\nCurrently, the 10-Year Anniversary Contest is being held.\\n\\n## Features\\n\\nWithin the editor, numerous user interface features allow for various changes which will impact the individual sequence on that page.\\n\\n### Basic features\\n\\nUI features include:\\n\\n- Tempo (10-999 BPM)\\n- Measure count or Time count (MM: SS.ssss)\\n- Time signature (2/4, 3/4, 4/4, 5/4)\\n- Grid size (This correlates to note divisions; 1/16, 1/12, 1/8, 1/6, 1/4, 1/3, 1/2)\\n- Auto Scroll (Fast, Smooth, Off; how the sequencer displays measures off-screen as a sequence plays)\\n-  Add an Audio Track (This won't be saved to the sequence but will play alongside it for ease of transcription)\\n-  Title input\\n-   Draw, select, and erase\\n-   Instrument dropdown, instrument options, and select instrument (selects all notes of the current instrument)\\n-  Select all, Cut, Copy, and Paste\\n-  Zoom options\\n-  Export options\\n-  Help\\n-  Fullscreen\\n- Tooltips\\n\\n### Advanced features\\n\\nUsers can access more advanced features for use in their sequences by clicking the advanced tab on the instrument they wish to change. This menu contains options to change volume, panning, detune (-1200 to +1200), reverb, distortion, and an equalizer. This array lets users configure specific instruments to create specific sounds, and textures, or to accompany other instruments as a layer or development of the original sound.\\n\\nOS also allows for commands to be entered in the browser console to manipulate different options in specific ways, such as setting custom to detune values (0-infinity), custom grid sizes, note divisions, and sequence ID amongst other things. These options bring OS closer to that of classic Digital Audio Workstations (DAWs) but are still limited in terms of accessibility and availability.\\n\\n### Browser and device support\\n\\nOnline Sequencer supports Chrome and other Chromium-based browsers, such as Microsoft Edge, Opera, and Brave. Firefox is also supported, but often with limited functionality. Safari and Internet Explorer are not supported, due to engine issues.\\n\\nOther mobile browsers support sequence playback, but not editing. However, iOS users have the same problem with WebKit on macOS. However, unlike in macOS, all browsers (even Chromium-based browsers) use WebKit as the engine for iOS due to Apple prohibiting other engines for security reasons; iOS does not support Online Sequencer, other than chat and forums.\\n\\nThe website's user interface is formatted for proper use on desktops, but some pages such as the chat page, playlists, and forums should be formatted well on mobile devices. ","author":"Jacob Morgan and George Burdell","archive":false,"archive_link":null,"players_count":null,"slug":"online-sequencer","author_link":"https://github.com/buildist","description":null},{"id":17,"status":"published","sort":22,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.930Z","title":"Sound Trap","url":"https://www.soundtrap.com/","cover":"328c8c51-e7d4-48bd-9c3d-6dea5184cad5","tags":["daw"],"content":null,"author":"Soundtrap","archive":false,"archive_link":null,"players_count":null,"slug":"sound-trap","author_link":"https://www.soundtrap.com/about","description":null},{"id":38,"status":"published","sort":23,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-24T07:33:05.392Z","title":"Sound Box","url":"https://sb.bitsnbites.eu/","cover":"af04c316-f2a0-4d99-834c-6518ff279094","tags":["tracker"],"content":"https://github.com/mbitsnbites/soundbox","author":"Bits'n'bites","archive":false,"archive_link":null,"players_count":null,"slug":"sound-box","author_link":"https://gitlab.com/mbitsnbites","description":null},{"id":20,"status":"published","sort":24,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.032Z","title":"Omni","url":"https://femurdesign.com/omni/","cover":"82c94f42-0449-45ea-924d-7365ba51af20","tags":["polyphonic","keyboard"],"content":null,"author":"Luke Phillips","archive":false,"archive_link":null,"players_count":null,"slug":"omni","author_link":"https://femurdesign.com/","description":null},{"id":21,"status":"published","sort":25,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.016Z","title":"Web Modular","url":"https://www.g200kg.com/docs/webmodular/","cover":"5bb158d2-cfcc-46d9-acd5-6cf3312d7678","tags":null,"content":null,"author":"g200kg","archive":false,"archive_link":null,"players_count":null,"slug":"web-modular","author_link":"https://www.g200kg.com/","description":null},{"id":25,"status":"published","sort":26,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.970Z","title":"Acid Machine 2","url":"http://errozero.co.uk/acid-machine/","cover":"380cdb0d-4a68-44a7-b24c-2b655f26ebcd","tags":null,"content":null,"author":"Errozero","archive":false,"archive_link":null,"players_count":null,"slug":"acid-machine-2","author_link":"https://www.errozero.co.uk/","description":null},{"id":24,"status":"published","sort":27,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.987Z","title":"PixelSynth","url":"https://ojack.github.io/PIXELSYNTH/","cover":"59ec0d0b-6bcf-4c50-8d76-5fe624105c0c","tags":null,"content":null,"author":"Olivia Jack","archive":false,"archive_link":null,"players_count":null,"slug":"pixel-synth","author_link":"https://ojack.xyz/","description":null},{"id":6,"status":"published","sort":28,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.181Z","title":"MIDI–driven Web Audio","url":"https://webaudiodemos.appspot.com/midi-synth/index.html","cover":"f268f0dc-b091-4799-885b-0a5eecfdcbec","tags":null,"content":null,"author":"Chris Wilson","archive":false,"archive_link":null,"players_count":null,"slug":"midi-driven-web-audio","author_link":"https://github.com/cwilso","description":null},{"id":18,"status":"published","sort":29,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:10.944Z","title":"Samplestich","url":"http://samplestitch.com.s3-website-us-east-1.amazonaws.com/","cover":"0f272d97-7882-4797-9890-97c3b75149a4","tags":["samples","keyboard"],"content":null,"author":"Matt Daniels","archive":false,"archive_link":null,"players_count":null,"slug":"sample-stich","author_link":"https://mdaniels.com","description":null},{"id":8,"status":"published","sort":30,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.088Z","title":"Meet the Heisenberg","url":"https://www.audiotool.com/product/device/heisenberg/","cover":"88c6fe9d-033c-4aac-a946-278e729e5f05","tags":null,"content":null,"author":"AudioTool","archive":false,"archive_link":null,"players_count":null,"slug":"meet-the-heisenberg","author_link":"https://www.audiotool.com","description":null},{"id":9,"status":"published","sort":31,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.141Z","title":"Cardboard Synth","url":"https://www.gsn-lib.org/apps/cardboardsynth/index.html","cover":"3406a3fa-5e4d-4efc-a5ac-c6c8ee3abf72","tags":null,"content":null,"author":" Thorsten Thormählen","archive":false,"archive_link":null,"players_count":null,"slug":"cardboard-synth","author_link":"https://www.uni-marburg.de/en/fb12/research-groups/grafikmultimedia/thormae","description":null},{"id":11,"status":"published","sort":32,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.126Z","title":"Tanguy synth","url":"http://tanguysynth.com/","cover":"16a499c4-661f-48b5-b308-dd7ea77f335d","tags":["monophonic","additive","keyboard"],"content":null,"author":"Luke Teaford","archive":false,"archive_link":null,"players_count":null,"slug":"tanguy-synth","author_link":"https://github.com/luketeaford","description":null},{"id":12,"status":"published","sort":33,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.109Z","title":"MOD synth","url":"http://mod-synth.io/","cover":"dd13c72f-d1ee-4197-b8a2-f24c162d5858","tags":null,"content":null,"author":"André Venâncio ","archive":false,"archive_link":null,"players_count":null,"slug":"mod-synth","author_link":"https://github.com/andrevenancio","description":null},{"id":13,"status":"published","sort":34,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.076Z","title":"OLIF SY1K","url":"http://perso.numericable.fr/olivier.friker/synth/O3-synth%20V1.3.html","cover":"44234157-4872-4e35-baec-a7d073a7258d","tags":null,"content":null,"author":"Olivier Friker","archive":false,"archive_link":null,"players_count":null,"slug":"olif-sy-1-k","author_link":null,"description":null},{"id":15,"status":"published","sort":35,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.059Z","title":"Note Sculptor","url":"http://www.noisesculptor.com/","cover":"3b9d921b-79da-4923-9cd2-bbc826561a93","tags":null,"content":null,"author":"Ruin Technology","archive":false,"archive_link":null,"players_count":null,"slug":"note-sculptor","author_link":null,"description":null},{"id":16,"status":"published","sort":36,"user_created":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_created":"2023-08-09T08:02:11.159Z","title":"WebAudioSynth V2","url":"http://aikelab.net/websynthv2/","cover":"7980d0af-e534-4383-a36c-0b116a06499e","tags":null,"content":null,"author":"like","archive":false,"archive_link":null,"players_count":null,"slug":"web-audio-synth-v2","author_link":"https://github.com/aike/","description":null}]`);const be={class:"flex flex-col items-stretch gap-8 md-gap-6 py-8 p-2"},me=["index"],ge={__name:"SynthList",setup(e){const{isAccessGranted:l}=I(),o=g(pe);function i(s){return!l.value&&s>5}return(s,u)=>{const d=fe;return t(),n("div",be,[(t(!0),n(Z,null,C(o.value,(r,c)=>(t(),n("div",{class:"flex w-full sticky",style:T([{top:`${90+c*6}px`,zIndex:c+10},{flex:"1 1 240px"}]),key:r.id,index:c},[(t(),S(d,V({pos:c,style:{filter:i(c)?"contrast(70%) blur(2px) opacity(80%)":""},key:r.id},r,{off:i(c)}),null,16,["pos","style","off"]))],12,me))),128))])}}},Te=JSON.parse('{"title":"Web synths","description":"Web synthesizers to play with MIDI controllers","frontmatter":{"title":"Web synths","description":"Web synthesizers to play with MIDI controllers","date":"2023-06-22T00:00:00.000Z","layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1698140342000}'),ye={name:"index.md"},_e=a("h2",{class:"text-lg font-bold"},"Welcome to our free web synth collection!",-1),ve=a("p",null,[a("a",{href:"https://playtronica.com",target:"_blank",rel:"noopener"},"Playtronica"),k(" is a digital playground that explores the possibilities of the material world through technology, creating gadgets that make the world musical. "),a("a",{href:"https://chromatone.center",target:"_blank",rel:"noopener"},"Chromatone"),k(" is a visual language for music education, research, and performance. We share our passion for web-based music instruments. Welcome to the community!")],-1);function ke(e,l,o,i,s,u){const d=ge,r=Q;return t(),n("div",null,[y(d),y(r,null,{default:v(()=>[_e,ve]),_:1})])}const Se=x(ye,[["render",ke]]);export{Te as __pageData,Se as default};
