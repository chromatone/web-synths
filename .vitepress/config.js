import { defineConfig } from "vitepress";
import { withPwa } from '@vite-pwa/vitepress'
import Components from 'unplugin-vue-components/vite'

import Unocss from "unocss/vite";
import {
  transformerDirectives,
  presetIcons,
  presetUno,
  extractorSplit,
} from "unocss";
import extractorPug from "@unocss/extractor-pug";

const meta = {
  title: "Web Synths Collection",
  template: 'Online web audio instruments playground',
  description: "Web audio synthesizers collection to play music directly in your browser with any MIDI-controller.",
  site: "synth.playtronica.com",
  url: process.env.NODE_ENV === "production" ? "https://synth.playtronica.com/" : "localhost:5173/", //the end slash here is mandatory
  repo: "https://github.com/chromatone/web-synths",
  locale: "en",
  icon: "logo.svg",
  logo: "logo.svg",
  image: "cover.jpg", // used for og:image, should be 1.91x1 ratio
  color: '#cccccc',
  twitter: "davay42",
  author: "davay42", //your twitter handle
  tags: "synths, webaudio, synthesizer, MIDI, midi-controller, play music, online synth, online DAW, browser audio, web music, online piano, web audio synthesizer, Playtronica, MIDI controller, browser music, interactive piano, digital synthesizers, music creation online, web-based instruments, web audio api",
  // add it if you use [umami](https://umami.is/) for stats
  umamiId: "dc58489b-fcbe-4efc-9b84-1c449913976c",
  umamiScript: "https://stats.chromatone.center/script.js"
};

export default withPwa(defineConfig({
  title: meta.title,
  description: meta.description,
  titleTemplate: meta.template,
  lang: "en-US",
  cleanUrls: true,
  outDir: 'dist',
  sitemap: {
    hostname: 'https://synth.playtronica.com'
  },
  themeConfig: {
    logo: "/logo.svg",
    lastUpdated: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/chromatone/web-synths" },
    ],
    nav: [
      { text: 'Playtronica', link: 'https://playtronica.com' },
      { text: 'Chromatone', link: 'https://chromatone.center' },
    ],
  },
  head: [
    ["link", { rel: "icon", href: `/${meta.icon}` }],
    ["meta", { name: "referrer", content: "always" }],
    ["meta", { content: "955357184504374", property: "fb:app_id" }],
    ["meta", { content: "website", property: "og:type" }],
    ["meta", { content: "yes", name: "apple-mobile-web-app-capable" }],
    ["meta", { content: "yes", name: "mobile-web-app-capable" }],
    ["meta", { content: "Synths online", name: "apple-mobile-web-app-title" }],
  ],
  vite: {
    plugins: [
      Components({
        dirs: ['components'],
        extensions: ['vue', 'ts', 'js'],
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        globalNamespaces: ['global'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        exclude: [/node_modules/, /\.git/],
      }),
      Unocss({
        transformers: [transformerDirectives()],
        presets: [
          presetIcons({
            cdn: 'https://esm.sh/',
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
  transformHead({ pageData }) {
    const url = pageData.relativePath.split('index.md')[0]
    let image = meta.image
    if (pageData.frontmatter.dynamic) {
      image = `${meta.url}cover/${pageData.params?.slug}.webp`
    }
    return [
      process.env.NODE_ENV === "production" ? ["script", { async: true, defer: true, "data-website-id": meta.umamiId, src: meta.umamiScript }] : null,

      process.env.NODE_ENV === "production" ? ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-647GHFC42Z' }] : null,

      process.env.NODE_ENV === "production" ? ['script', { type: "text/javascript" }, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-647GHFC42Z');`] : null,

      meta.icon ? ["link", { rel: "icon", type: "image/svg+xml", href: meta.url + meta.icon }] : null,
      meta?.author ? ["meta", { name: "author", content: meta?.author }] : null,
      meta?.tags ? ["meta", { name: "keywords", content: meta?.tags }] : null,
      meta.color ? ["meta", { name: "theme-color", content: meta.color }] : null,

      ['meta', { property: 'og:title', content: pageData.params?.title + ' | Web Synths Collection by Playtronica & Chromatone' }],
      ['meta', { property: 'og:description', content: pageData.params?.description }],
      ['meta', { property: 'og:url', content: meta.url + url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { name: 'twitter:title', content: pageData.params?.title + ' | Web Synths Collection by Playtronica & Chromatone' }],
      ['meta', { name: 'twitter:description', content: pageData.params?.description }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: `@${meta.author}` }],
      ['meta', { name: 'twitter:creator', content: `@${meta.author}` }],
      ['meta', { name: 'twitter:image', content: image }],
    ]
  },
  pwa: {
    base: '/',
    scope: '/',
    outDir: './dist/',
    registerType: 'autoUpdate',
    // injectRegister: 'inline',
    includeAssets: ['logo.svg'],
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,webp,ico,txt,woff2}'],
    },
    manifest: {
      name: 'Web Synths Collection',
      short_name: 'Web Synths',
      theme_color: '#f6f6f6',
      display: "standalone",
      icons: [
        {
          src: 'icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
}));
