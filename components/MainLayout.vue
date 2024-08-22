<script setup>
import { useData } from 'vitepress';
import { useForm } from '../composables/useForm.js';

const { isFormOpen, searchParams } = useForm()

const { theme, site, isDark } = useData()

</script>

<template lang="pug">
.flex.flex-col.noise.items-center.relative.min-h-100svh
  RegisterSW
  .w-full.backdrop-blur-xl.fixed.bottom-0.bg-light-200.bg-opacity-60.dark-bg-dark-300.dark-bg-opacity-60.z-200
    .flex.flex.items-center.w-full.max-w-160.mx-auto.gap-2.p-1
      a.p-2.flex.items-center.gap-4(href="/")
        img.w-8(:src="theme.logo" alt="Web-synths collection logo")
        .text-lg.font-600 {{ site.title }}
      .flex-1
      button.text-xl(
        @click="isDark = !isDark"
        aria-label="Dark mode toggle"
        )
        .i-la-sun(v-if="!isDark")
        .i-tabler-moon-2(v-else)

      button.p-2.z-2000.cursor-pointer.text-2xl(
        aria-label="Player profile"
        @click="isFormOpen = !isFormOpen")
        .i-ph-user-circle-duotone
    AboutFooter.z-100
  .flex.flex-wrap.w-full.mx-auto.flex-auto.justify-center.pb-20
    content#content.w-full
  transition(name="panel")
    FormMain.fixed.z-1000(v-if="isFormOpen") We are building a community of web-based musicians. Type in your e-mail to instantly gain full access to the collection and receive occasional community updates from us. Stay tuned! 

      template(#button) JOIN THE COMMUNITY
      template(#notice) Your access status will be saved per device and you won't need to enter your e-mail again.

</template>

<style lang="postcss">
html {
  overscroll-behavior-y: none;
  font-family: 'Circe', ui-sans-sefir, sans-serif;
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

#content {
  @apply leading-loose;

  & p,
  & ul {
    @apply p-8 bg-light-200 bg-op-80 backdrop-blur dark-bg-dark-700 dark-bg-op-80 m-2;
  }

  & p,
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & li,
  & ul {
    @apply max-w-180 mx-auto py-2;
  }
}
</style>