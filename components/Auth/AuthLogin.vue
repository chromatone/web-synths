<script setup>
import { useUser } from '../../composables/useUser.js';

const { userRead, user, userDB, email, password, authData, access_token, submitLogin, refreshToken, logoutUser } = useUser()

</script>

<template lang='pug'>
form.flex.flex-col.gap-4(@submit.prevent="submitLogin" v-if="!access_token")
  .text-4xl Login to your account
  label.text-xl(for="email") E-mail*:
  input.text-lg.rounded-lg.p-4.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-inner.dark-bg-dark-200(id="email" type="text" v-model="email")
  label.text-xl(for="email") Password:
  input.rounded-lg.p-4.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-inner.dark-bg-dark-200(type="password" v-model="password")
  button.text-xl.font-bold.rounded-lg.p-4.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-lg.dark-bg-dark-200(type="submit" @click="submitLogin") Sign In

.flex.flex-col.gap-2(v-else)
  p.font-mono.text-xs .{{ access_token.split('.')[2] }}
  pre.text-sm {{ authData }}
  .flex 
    button.text-xl.font-bold.rounded-lg.p-4.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-lg.dark-bg-dark-200(type="submit" @click="refreshToken()") Refresh
    button.text-xl.font-bold.rounded-lg.p-4.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-lg.dark-bg-dark-200(type="submit" @click="logoutUser()") Log out
  button.text-xl.font-bold.rounded-lg.p-4.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-lg.dark-bg-dark-200(type="submit" @click="userRead()") Read user
  AuthProfile 
</template>