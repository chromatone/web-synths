import { ref, computed, watch, Ref } from 'vue'
import { Directus } from '@directus/sdk';

const directus = new Directus('http://dir.defucc.me');

export const isFormOpen = ref(true)
export const isAccessGranted = ref(false)

export const email = ref('')
export const isValidEmail = computed(() => /^[^@]+@\w+(\.\w+)+\w$/.test(email.value))

watch(isAccessGranted, async a => {
  const data = {
    "email": email.value,
    "password": 'synths',
    "role": '6cc028fb-7e54-4b4e-927a-de1a2aba8a3c'
  }
  const user = await directus.items('users').createOne(data)
})