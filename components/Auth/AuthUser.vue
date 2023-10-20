<script setup>
import { useForm } from '../../composables/useForm.js';
import { useUser } from '../../composables/useUser.js';

const { isFormOpen } = useForm()

const { user } = useUser()

</script>

<template lang='pug'>
button.p-4.z-2000(@click="isFormOpen=!isFormOpen")
  .i-la-user.p-4
teleport(to="body")
  TheForm.fixed.bottom-0 We are building a community of web-based musicians. Type in your e-mail to instantly get full access to the collection and occasionally receive community updates.

    template(#button) JOIN THE COMMUNITY
    template(#notice) Your access status will be saved per device and you won't need to enter your e-mail again.
</template>