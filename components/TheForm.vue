<script setup>
import { email, isAccessGranted, isValidEmail } from '../composables/useForm.ts'
import { useScrollLock, useStorage } from '@vueuse/core'
import { watch, ref, onMounted } from 'vue'
import { data as texts } from '../texts.data.js'

import { useFocus } from '@vueuse/core'

const target = ref()
const { focused } = useFocus(target, { initialValue: true })

const isFormOpen = useStorage('locked', true)

// const isLocked = useScrollLock(
//   //@ts-ignore
//   !import.meta.env.SSR && document?.body
// )

// isLocked.value = isFormOpen.value

watch(isAccessGranted, a => {
  isFormOpen.value = false
  // isLocked.value = false
})

onMounted(() => {
  focused.value = true
})

</script>

<template lang='pug'>
transition(name="slide")
  .fixed.z-200.bottom-0.right-0.left-0.bg-light-800.bg-opacity-80.backdrop-blur.flex.flex-col.items-center.gap-4.justify-center.dark-bg-dark-200.dark-bg-opacity-80.p-8(v-show="isFormOpen")
    .flex.flex-col.gap-4
      label.text-center.max-w-45ch(for="email") We are building web musicians community. Leave your e-mail to instantly access full collection and occasionally receive community updates from us. 
      .flex.gap-4.flex-wrap.md-flex-nowrap
        input.flex-1.p-2.md-p-4.rounded-xl.bg-light-200.shadow-md.dark-bg-dark-400.flex-1(
          ref="target"
          style="flex: 10 1 200px"
          v-model="email" 
          id="email"
          name="email"
          type="email"
          @keydown.enter="isAccessGranted=true"
          placeholder="you@site.com")

        button.text-sm.md-text-md.p-2.font-bold.md-p-4.rounded-xl.shadow-xl.hover-shadow-2xl.transition.-hover-translate-y-2px.active-translate-y-0.active-shadow-md.bg-green-400.dark-bg-green-700(
          @click="isAccessGranted=true"
          :disabled="!isValidEmail"
          :class="{'grayscale-50':!isValidEmail}"
          style="flex: 1 1 400px"
        ) GET FULL ACCESS
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 500ms ease-in-out;
}

.slide-enter-to {
  transform: translateY(0);
}

.slide-enter-from {
  transform: translateY(100%);
}

.slide-leave-to {
  transform: translateY(100%);
}

.slide-leave-from {
  transform: translateY(0%);
}
</style>