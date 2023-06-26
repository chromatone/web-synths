<script setup>
import { isFormOpen, email, isAccessGranted } from '../composables/useForm'
import { useScrollLock } from '@vueuse/core'
import { watch } from 'vue'

const isLocked = useScrollLock(document.body)
isLocked.value = true

watch(isAccessGranted, a => {
  isFormOpen.value = false
  isLocked.value = false
})

</script>

<template lang='pug'>
transition(name="slide")
  .fixed.bottom-0.right-0.left-0.h-80.bg-light-200.bg-opacity-80.backdrop-blur.flex.flex-col.items-center.gap-4.justify-center.dark-bg-dark-200.dark-bg-opacity-80(v-show="isFormOpen")
    .text-center.max-w-45ch Let us know about your interest in online synths. Leave your e-mail and get full access to the collection for FREE. 
    .flex.gap-2
      input.p-4.rounded-xl.bg-light-200.shadow-md.dark-bg-dark-400(
        v-model="email" 
        id="email"
        name="email"
        placeholder="Your e-mail address")
      label(for="email")
        button.p-4.rounded-xl.shadow-xl.hover-shadow-2xl.transition.-hover-translate-y-2px.active-translate-y-0.active-shadow-md.bg-green-400.dark-bg-green-700(
          @click="isAccessGranted=true"
          :disabled="!email"
          :class="{'grayscale':!email}"
        ) GET FREE ACCESS
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