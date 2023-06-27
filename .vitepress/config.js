import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  title: 'Online synths',
  description: 'Web audio synthesizers to play with a MIDI-controller straight from the browser',
  themeConfig: {
    logo: 'logo.svg',
    lastUpdated: true,
    footer: {
      copyright: `With ❤️ by <a href="https://chromatone.center" target="_blank">Chromatone</a> and <a href="https://playtronica.com" target="_blank">Playtronica</a>`
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chromatone/web-synths' }
    ],
    nav: [

    ]
  },
  vite: {
    plugins: [
      Unocss({
        transformers: [
          transformerDirectives(),
        ],
        presets: [
          presetIcons({
            scale: 1.2,
            extraProperties: {
              'vertical-align': 'middle'
            }
          }),
          presetUno(),
        ],
        extractors: [
          extractorSplit,
          extractorPug()
        ]
      }),
    ]
  }
})