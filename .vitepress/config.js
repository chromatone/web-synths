import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  base: 'synths',
  title: 'Online synths',
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