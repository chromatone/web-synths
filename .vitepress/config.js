import { defineConfig } from "vitepress";
import { } from 'vitepress-pages'

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
  title: "Online synths",
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
  umamiId: "c8fe73e2-2016-4b16-ae24-f01852619aaf",
  umamiScript: "https://stats.defucc.me/umami.js"
};

export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  titleTemplate: 'Web based synthesizers collection',
  lang: "en-US",
  cleanUrls: true,
  transformHead: createHead(metaData),
  themeConfig: {
    logo: "logo.svg",
    lastUpdated: true,
    footer: {
      copyright: `With ❤️ by <a href="https://chromatone.center" target="_blank">Chromatone</a> and <a href="https://playtronica.com" target="_blank">Playtronica</a>`,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/chromatone/web-synths" },
    ],
    nav: [
      { text: 'Chromatone', link: 'https://chromatone.center' },
      { text: 'Playtronica', link: 'https://playtronica.com' }
    ],
  },
  head: [

    ["meta", { name: "referrer", content: "always" }],
    ["meta", { content: "955357184504374", property: "fb:app_id" }],
    ["meta", { content: "website", property: "og:type" }],
    ["meta", { content: "yes", name: "apple-mobile-web-app-capable" }],
    ["meta", { content: "yes", name: "mobile-web-app-capable" }],
    ["meta", { content: "Synths online", name: "apple-mobile-web-app-title" }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=UA-106419193-1' }],
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
