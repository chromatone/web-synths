import '@unocss/reset/tailwind.css'
import 'uno.css'
import './index.css'

import MyLayout from './MyLayout.vue'

import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  Layout: MyLayout
}