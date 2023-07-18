import '@unocss/reset/tailwind.css'
import 'uno.css'
//@ts-expect-error
import MyLayout from './MyLayout.vue'

import DefaultTheme from 'vitepress/theme'

import { plugin as Slicksort } from 'vue-slicksort'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.use(Slicksort);
  }
}