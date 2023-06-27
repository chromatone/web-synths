import { ref, computed, watch, Ref } from 'vue'
import { Directus } from '@directus/sdk';

//@ts-ignore
const apiToken = import.meta.env.VITE_API_KEY

const directus = new Directus('https://dir.defucc.me');

export const isAccessGranted = ref(false)

export const email = ref('')
export const isValidEmail = computed(() => /^[^@]+@\w+(\.\w+)+\w$/.test(email.value))

watch(isAccessGranted, async a => {
  const data = {
    "email": email.value,
  }
  const user = await directus.items('players').createOne(data)
})