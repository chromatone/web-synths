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

const baseUrl = process.env.NODE_ENV === "production" ? "https://synth.playtronica.com/" : "localhost:5173/";

export default withPwa(defineConfig({
  title: "Web Synths Collection",
  description: "Web audio synthesizers collection to play music directly in your browser with any MIDI-controller.",
  titleTemplate: "Online web audio instruments playground",
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
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "referrer", content: "always" }],
    ["meta", { content: "955357184504374", property: "fb:app_id" }],
    ["meta", { content: "website", property: "og:type" }],
    ["meta", { content: "yes", name: "apple-mobile-web-app-capable" }],
    ["meta", { content: "yes", name: "mobile-web-app-capable" }],
    ["meta", { content: "Synths online", name: "apple-mobile-web-app-title" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: baseUrl + "logo.svg" }],
    ["meta", { name: "author", content: "davay42" }],
    ["meta", { name: "keywords", content: "synths, webaudio, synthesizer, MIDI, midi-controller, play music, online synth, online DAW, browser audio, web music, online piano, web audio synthesizer, Playtronica, MIDI controller, browser music, interactive piano, digital synthesizers, music creation online, web-based instruments, web audio api" }],
    ["meta", { name: "theme-color", content: "#cccccc" }],
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
    let image = "cover.jpg"
    if (pageData.frontmatter?.dynamic) {
      image = `${baseUrl}cover/${pageData.params?.slug}.webp`
    }
    return [
      process.env.NODE_ENV === "production" ? ["script", {
        async: true,
        defer: true,
        "data-website-id": "dc58489b-fcbe-4efc-9b84-1c449913976c",
        src: "https://stats.chromatone.center/script.js"
      }] : null,

      process.env.NODE_ENV === "production" ? ['script', {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-647GHFC42Z'
      }] : null,

      process.env.NODE_ENV === "production" ? ['script', {
        type: "text/javascript"
      }, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-647GHFC42Z');`] : null,

      ['meta', { property: 'og:title', content: pageData.params?.title + ' | Web Synths Collection by Playtronica & Chromatone' }],
      ['meta', { property: 'og:description', content: pageData.params?.description || 'Web synths collection' }],
      ['meta', { property: 'og:url', content: baseUrl + url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { name: 'twitter:title', content: pageData.params?.title + ' | Web Synths Collection by Playtronica & Chromatone' }],
      ['meta', { name: 'twitter:description', content: pageData.params?.description || 'Web-synths collection' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@davay42' }],
      ['meta', { name: 'twitter:creator', content: '@davay42' }],
      ['meta', { name: 'twitter:image', content: image }],
    ].filter(Boolean)
  },

  pwa: {
    base: '/',
    scope: '/',
    outDir: './dist/',
    registerType: 'autoUpdate',
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