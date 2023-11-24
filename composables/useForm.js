import { ref, computed, watch, onMounted } from 'vue'
import { useStorage } from '@vueuse/core';
import { useUrlSearchParams } from '@vueuse/core'

const searchParams = useUrlSearchParams('history')

const emailRegex = /^([a-zA-Z0-9._%+-]{1,64})@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,10}$/;

const maxLength = 100;

const isAccessGranted = ref(false)
const isFormOpen = ref(false)
const checkAvailability = ref(false)
const storedEmail = useStorage('storedEmail', '')
const storedName = useStorage('storedName', '')
const isSent = ref(false)
const email = ref(storedEmail)
const name = ref(storedName)
const namePlaceholder = computed(() => capitalizeFirstLetter(email.value.match(emailRegex)?.[1]))
const password = ref('')
const passwordPlaceholder = ref('')
const isValidEmail = computed(() => validateEmail(email.value))
const started = ref(false)
const invited = ref(false)

function validateEmail(mail) {
  return emailRegex.test(mail)
}



function capitalizeFirstLetter(string = '') {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
      if (searchParams.token) {
        acceptInvite()
      }
    })
    started.value = true
  }

  return {
    searchParams,
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
    resetEmail,
    namePlaceholder,
    password,
    passwordPlaceholder,
    generatePassword,
    maxLength,
    claimInvite,
    invited
  }
}


export async function acceptInvite() {
  console.log(searchParams.token, storedEmail.value)
}

export async function claimInvite() {

  if (!storedEmail.value) return

  if (!invited.value) {

    const data = {
      email: storedEmail.value,
    }

    try {

      const invite = await fetch(
        'https://dbs.chromatone.center/flows/trigger/164bb1bb-3745-423f-8239-703198dfbac5',
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

      console.log(await invite?.json())
    } catch (e) {
      console.error(e, e?.errors?.[0]?.message, e?.response?.status)
    }

    invited.value = true
  }
}

export async function grantAccess() {
  if (!email.value && !validateEmail(email.value)) return
  isAccessGranted.value = true
  if (!isSent.value) {
    isSent.value = true


    const data = {
      email: email.value,
      name: (name.value || namePlaceholder.value || '').slice(0, maxLength),
    }

    try {

      // await cleanClient.request(inviteUser(email.value, '8c5fd718-323c-4616-ae90-dd28c522cdbd'))

      // const response = await userCreate({ ...data, password: password.value || passwordPlaceholder.value })

      // console.log(response, user.value)

      storedEmail.value = email.value
      storedName.value = name.value || namePlaceholder.value

      const response = await fetch(
        'https://dbs.chromatone.center/flows/trigger/51cc7591-219e-4b56-ad6d-c39a34f7cf2f',
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
      console.log(await response?.json())



    } catch (e) {
      console.error(e, e?.errors?.[0]?.message, e?.response?.status)
    }
  }

}


//array:https://synth.playtronica.com,http://localhost:4173,https://tsoop.com,https://chromatone.center

function generatePassword() {
  return [...window.crypto.getRandomValues(new Uint8Array(16))].map(b => '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.,!?$%&*#@'.charAt(b % 72)).join('').slice(0, 10)
}
