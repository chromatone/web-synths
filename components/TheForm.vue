<script setup>
import { useForm } from '../composables/useForm.js'

const { name, email, isValidEmail, isFormOpen, grantAccess, storedEmail, storedName, resetEmail, isAccessGranted, namePlaceholder, passwordPlaceholder, password, generatePassword, maxLength, claimInvite, invited } = useForm()

function scroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
</script>

<template lang='pug'>
.fixed.z-1000.min-h-40dvh.bottom-0.w-full.bg-light-800.bg-opacity-80.backdrop-blur.flex.flex-col.items-center.gap-4.justify-center.dark-bg-dark-200.dark-bg-opacity-80.p-8.shadow.max-w-180.bottom-0.rounded-xl(
  v-if="isFormOpen"
  )
  button.i-la-times.absolute.top-4.right-4.text-2xl.hover-opacity-90.opacity-50.transition(
    v-show="isFormOpen"
    @click="isFormOpen=false"
    )

  .flex.flex-col.gap-4.max-w-45ch.text-center(v-if="isAccessGranted")
    .text-3xl.font-bold Hello, {{ storedName }}!
    .text-xl Enjoy your web-synthesizers hub
    .text-sm.flex.gap-2.justify-center {{ storedEmail }}
      span.opacity-20.hover-opacity-50.transition.cursor-pointer(@click="resetEmail") Log out
    //- .flex.justify-center.cursor-pointer.p-2.opacity-50.hover-opacity-100.transition(
      @click="scroll()"
      )
      svg.absolute(xmlns="http://www.w3.org/2000/svg", width="100", height="100", viewBox="0 0 32 32")
        path(d="M16 4.688L3.781 16.905l1.438 1.407L16 7.53l10.781 10.782l1.438-1.407zm0 7L3.781 23.905l1.438 1.407L16 14.53l10.781 10.781l1.438-1.406z", fill="#888888")

    //- button.text-sm.md-text-md.p-4.font-bold.md-p-4.rounded-xl.shadow-xl.hover-shadow-2xl.transition.-hover-translate-y-2px.disabled-opacity-40.active-translate-y-0.active-shadow-md.bg-green-400.dark-bg-green-700(
      v-if="!invited"
      @click="claimInvite()"
      ) Claim Invite

  .flex.flex-col.gap-8.relative.pt-8.items-center(v-else)

    label.text-center.max-w-45ch(for="email")
      slot

    .flex.gap-4.flex-col.w-full
      label.flex.items-center.gap-2
        .p-2.w-24.font-bold.text-right E-mail *
        input.flex-1.p-4.md-p-4.rounded-xl.bg-light-200.shadow-md.dark-bg-dark-400.flex-1.border-2.border-solid.border-opacity-60.dark-border-opacity-40(
          :class="{'border-red-700 dark-border-red-300':email && !isValidEmail, 'border-green-700 dark-border-green-800': email && isValidEmail, 'border-light-300': !email }"
          ref="target"
          :maxlength="maxLength"
          v-model="email" 
          id="email"
          name="email"
          type="email"
          @keydown.enter="grantAccess()"
          placeholder="your@gmail.com")
      label.flex.items-center.gap-2
        .p-2.w-24.font-bold.text-right Name
        input.flex-1.p-4.md-p-4.rounded-xl.bg-light-200.shadow-md.dark-bg-dark-400(
          v-model="name" 
          id="name"
          :maxlength="maxLength"
          name="name"
          type="text"
          @keydown.enter="grantAccess()"
          :placeholder="namePlaceholder")

      //- label.flex.items-center.gap-2
        .p-2.w-24.font-bold.text-right Password 
        input.flex-1.p-4.md-p-4.rounded-xl.bg-light-200.shadow-md.dark-bg-dark-400(
          v-model="password" 
          id="password"
          name="password"
          type="password"
          @keydown.enter="grantAccess()"
          :placeholder="passwordPlaceholder")
        .p-2(@click="passwordPlaceholder=generatePassword()")
          .i-la-lock-open


    button.text-sm.md-text-md.p-4.font-bold.md-p-4.rounded-xl.shadow-xl.hover-shadow-2xl.transition.-hover-translate-y-2px.disabled-opacity-40.active-translate-y-0.active-shadow-md.bg-green-400.dark-bg-green-700(
      @click="grantAccess()"
      :disabled="!isValidEmail"
      :class="{'grayscale-50':!isValidEmail}"
      title="Your access status will be saved per device and you won't need to enter your e-mail again."
      )
      slot(name="button") GET ACCESS

  //- AuthLogin.max-h-40.overflow-y-scroll
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


