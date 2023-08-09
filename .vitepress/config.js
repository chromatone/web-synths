import { defineConfig } from "vitepress";

import Unocss from "unocss/vite";
import {
  transformerDirectives,
  presetIcons,
  presetUno,
  extractorSplit,
} from "unocss";
import extractorPug from "@unocss/extractor-pug";

import createHead from 'vitepress-pages/head'

const metaData = {
  title: "Web synths",
  description: "Web audio synthesizers collection to play with a MIDI-controller straight from the browser.",
  site: "synth.chromatone.center",
  url: "https://synth.chromatone.center/", //the end slash here is mandatory
  repo: "https://github.com/chromatone/web-synths",
  locale: "en",
  icon: "logo.svg",
  logo: "logo.svg",
  image: "cover.jpg", // used for og:image, should be 1.91x1 ratio
  color: '#cccccc',
  author: "davay42", //your twitter handle
  tags: "synths, webaudio, synthesizer, MIDI, midi-controller, play music, online synth, online DAW, browser audio, web music",
  // add it if you use [umami](https://umami.is/) for stats
  umamiId: "dc58489b-fcbe-4efc-9b84-1c449913976c",
  umamiScript: "https://stats.chromatone.center/script.js"
};

export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  titleTemplate: 'Online synthesizers collection',
  lang: "en-US",
  cleanUrls: true,
  transformHead: createHead(metaData),
  themeConfig: {
    logo: "logo.svg",
    lastUpdated: true,
    footer: {
      copyright: "<p>With ❤️ by <a title='Visual Music Language' href='https://chromatone.center' target='_blank' rel='noopener'>Chromatone</a> and <a href='https://playtronica.com' title='Musical gadgets' target='_blank' rel='noopener'>Playtronica</a></p>"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/chromatone/web-synths" },
    ],
    nav: [
      { text: 'Playtronica', link: 'https://playtronica.com' },
      { text: 'Chromatone', link: 'https://chromatone.center' },
    ],
  },
  head: [
    ["link", { rel: "icon", href: `/${metaData.icon}` }],
    ["meta", { name: "referrer", content: "always" }],
    ["meta", { content: "955357184504374", property: "fb:app_id" }],
    ["meta", { content: "website", property: "og:type" }],
    ["meta", { content: "yes", name: "apple-mobile-web-app-capable" }],
    ["meta", { content: "yes", name: "mobile-web-app-capable" }],
    ["meta", { content: "Synths online", name: "apple-mobile-web-app-title" }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-647GHFC42Z' }],
    ['script', { type: "text/javascript" }, `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-647GHFC42Z');
    `],
    ['script', { type: "text/javascript" }, 'window.$sleek=[];window.SLEEK_PRODUCT_ID=988732704;(function(){d=document;s=d.createElement("script");s.src="https://client.sleekplan.com/sdk/e.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();']

  ],
  vite: {
    plugins: [
      Unocss({
        transformers: [transformerDirectives()],
        presets: [
          presetIcons({
            scale: 1.2,
            extraProperties: {
              "vertical-align": "middle",
            },
          }),
          presetUno(),
        ],
        extractors: [extractorSplit, extractorPug()],
      }),
    ],
  },
});
