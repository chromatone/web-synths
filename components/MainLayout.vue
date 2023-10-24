<script setup>
import { useData } from 'vitepress';
import { useForm } from '../composables/useForm.js';

const { isFormOpen, searchParams } = useForm()

const { theme, site, isDark } = useData()

</script>

<template lang="pug">
.flex.flex-col.noise.items-center.relative.min-h-100svh
  .w-full.backdrop-blur-xl.sticky.top-0.z-100.bg-light-200.bg-opacity-60.dark-bg-dark-300.dark-bg-opacity-60
    .flex.flex.items-center.w-full.max-w-200.mx-auto.gap-4.px-4
      a.p-2.flex.items-center.gap-4(href="/")
        img.w-12(:src="theme.logo")
        .text-xl.font-600 {{ site.title }}
      .flex-1
      button.text-xl(@click="isDark=!isDark")
        .i-la-sun(v-if="!isDark")
        .i-tabler-moon-2(v-else)

      button.p-4.z-2000.cursor-pointer(
        @click="isFormOpen=!isFormOpen")
        .i-ph-user-circle-duotone.p-5

  .flex.flex-wrap.items-center.w-full.max-w-200.mx-auto
    content.w-full
  .flex-auto
  .flex.items-center.text-center.min-h-30
    .p-2.max-w-45ch.mx-auto With ❤️ by 
      a(href="https://playtronica.com", title="Musical gadgets", target="_blank", rel="noopener") Playtronica
      |  and 
      a(title="Visual Music Language", href="https://chromatone.center", target="_blank", rel="noopener") Chromatone
  MidiPanel.sticky.bottom-2
  TheForm We are building a community of web-based musicians. Type in your e-mail to instantly get full access to the collection and occasionally receive community updates.

    template(#button) JOIN THE COMMUNITY
    template(#notice) Your access status will be saved per device and you won't need to enter your e-mail again.
</template>

<style lang="postcss">
html {
  overscroll-behavior-y: none;
  font-family: 'Circe', ui-sans-serif;
  scroll-snap-type: proximity;
}

html.dark {
  @apply bg-dark-100 text-light-700;
}

a:hover {
  @apply underline;
}

.noise {
  position: relative;
}

.noise::before {
  content: '';
  position: fixed;
  z-index: -1;
  display: block;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.noise::before {
  background-image: linear-gradient(#9991, #2224);
}

.dark .noise::before {
  background-image: linear-gradient(#3339, #eee4);
}
</style>