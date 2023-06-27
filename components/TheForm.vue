<script setup>
import { isFormOpen, email, isAccessGranted, isValidEmail } from '../composables/useForm.ts'
import { useScrollLock } from '@vueuse/core'
import { watch } from 'vue'
import { data as texts } from '../texts.data.js'

const isLocked = useScrollLock(
  //@ts-ignore
  !import.meta.env.SSR && document?.body
)

isLocked.value = true

watch(isAccessGranted, a => {
  isFormOpen.value = false
  isLocked.value = false
})

</script>

<template lang='pug'>
transition(name="slide")
  .z-20.fixed.bottom-0.right-0.left-0.bg-light-800.bg-opacity-80.backdrop-blur.flex.flex-col.items-center.gap-4.justify-center.dark-bg-dark-200.dark-bg-opacity-80.p-4(v-show="isFormOpen")
    label.text-center.max-w-45ch.mt-4(for="email" v-html="texts['form-header']")
    .flex.gap-2
      input.flex-1.p-2.md-p-4.rounded-xl.bg-light-200.shadow-md.dark-bg-dark-400.flex-1(
        style="flex: 10 1 200px"
        v-model="email" 
        id="email"
        name="email"
        type="email"
        placeholder="you@site.com")

      button.p-2.font-bold.md-p-4.rounded-xl.shadow-xl.hover-shadow-2xl.transition.-hover-translate-y-2px.active-translate-y-0.active-shadow-md.bg-green-400.dark-bg-green-700(
        @click="isAccessGranted=true"
        :disabled="!isValidEmail"
        :class="{'grayscale':!isValidEmail}"
        style="flex: 1 1 400px"
      ) GET FREE ACCESS
    .flex-1
    .p-2(v-html="texts.footer")
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