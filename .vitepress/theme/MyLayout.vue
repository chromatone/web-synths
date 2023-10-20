<script setup>
import AuthUser from '../../components/AuthUser.vue'

import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template lang="pug">
Layout
  template(#nav-bar-content-after)
    .flex
      AuthUser
  template(#layout-bottom)
    .flex.items-center.text-center.min-h-30
      .p-2.max-w-45ch.mx-auto With ❤️ by 
        a(href="https://playtronica.com", title="Musical gadgets", target="_blank", rel="noopener") Playtronica
        |  and 
        a(title="Visual Music Language", href="https://chromatone.center", target="_blank", rel="noopener") Chromatone
    MidiPanel.sticky.bottom-0
</template>

