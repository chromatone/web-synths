import { ref, computed, watch, onMounted } from 'vue'
import { useStorage } from '@vueuse/core';

const isAccessGranted = ref(false)
const isFormOpen = ref(false)
const checkAvailability = ref(false)
const storedEmail = useStorage('storedEmail', '')
const storedName = useStorage('storedName', '')
const isSent = ref(false)
const email = ref('')
const name = ref('')
const isValidEmail = computed(() => validateEmail(email.value))
const started = ref(false)

function validateEmail(mail) {

  const emailRegex = /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,10}$/;

  return emailRegex.test(mail)
}

function resetEmail() {
  storedEmail.value = ''
  storedName.value = ''
  isSent.value = false
  isAccessGranted.value = false
}

export function useForm() {

  if (!started.value) {
    watch(isAccessGranted, a => {
      if (a) isFormOpen.value = false
    })

    onMounted(() => {
      if (storedEmail.value) {
        isAccessGranted.value = true
      }
    })
    started.value = true
  }

  return {
    isAccessGranted,
    isValidEmail,
    email,
    name,
    grantAccess,
    isSent,
    isFormOpen,
    checkAvailability,
    storedEmail,
    storedName,
    resetEmail
  }
}


export async function grantAccess() {
  if (!email.value && !validateEmail(email.value)) return
  isAccessGranted.value = true
  if (!isSent.value) {
    isSent.value = true
    try {
      const data = { email: email.value, name: name.value.slice(0, 30) }
      storedEmail.value = email.value
      storedName.value = name.value
      const response = await fetch(
        'https://db.chromatone.center/flows/trigger/f36a3461-c476-4ce5-88c9-eba2216083b0',
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });



      console.log(response?.json())

    } catch (e) {
      console.error(e)
    }
  }

}


//array:https://synth.playtronica.com,http://localhost:4173,https://tsoop.com,https://chromatone.center