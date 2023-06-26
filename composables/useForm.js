import { ref, computed, watch } from 'vue'
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.defucc.me');


export const isFormOpen = ref(true)
export const isAccessGranted = ref(false)

export const email = ref('')
export const isValidEmail = computed(() => /^[^@]+@\w+(\.\w+)+\w$/.test(email.value))

watch(isAccessGranted, async a => {
  const data = {
    "email": email.value,
    "verified": false
  }
  const record = await pb.collection('web_synths').create(data);
})