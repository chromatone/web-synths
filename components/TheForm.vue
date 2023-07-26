<script setup>
import { email, isAccessGranted, isValidEmail, isFormOpen, grantAccess } from '../composables/useForm.ts'
</script>

<template lang='pug'>
transition(name="slide")
  .fixed.z-200.min-h-50dvh.bottom-0.right-0.left-0.bg-light-800.bg-opacity-80.backdrop-blur.flex.flex-col.items-center.gap-4.justify-start.dark-bg-dark-200.dark-bg-opacity-80.p-8.shadow(v-show="isFormOpen")

    svg.absolute.top-4.right-4.text-4xl.cursor-pointer(
      @click="isFormOpen=false"
      xmlns="http://www.w3.org/2000/svg", width="1em", height="1em", viewBox="0 0 32 32")
      path(d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781L7.22 26.22L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z", fill="#888888")

    .flex.flex-col.gap-8.relative.pt-8 

      label.text-center.max-w-45ch(for="email")
        slot

      .flex.gap-4.flex-wrap.md-flex-nowrap
        input.flex-1.p-2.md-p-4.rounded-xl.bg-light-200.shadow-md.dark-bg-dark-400.flex-1(
          ref="target"
          style="flex: 10 1 200px"
          v-model="email" 
          id="email"
          name="email"
          type="email"
          @keydown.enter="grantAccess(email)"
          placeholder="your@gmail.com")

        button.text-sm.md-text-md.p-2.font-bold.md-p-4.rounded-xl.shadow-xl.hover-shadow-2xl.transition.-hover-translate-y-2px.active-translate-y-0.active-shadow-md.bg-green-400.dark-bg-green-700(
          @click="grantAccess(email)"
          :disabled="!isValidEmail"
          :class="{'grayscale-50':!isValidEmail}"
          style="flex: 1 1 400px"
        )
          slot(name="button") GET ACCESS
      .text-xs.opacity-60.text-center.max-w-45ch.mx-auto 
        slot(name="notice") Your access status will be saved per device and you won't need to enter your e-mail again.
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


