<script setup>
import { ref, reactive } from 'vue';

const emit = defineEmits(['submitted'])

const data = reactive({
  url: '',
  text: ''
})

const URLRegex = /[(http(s) ?): \/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

function validateURL(url) {
  return URLRegex.test(url)
}

const reply = ref()

async function sendSuggest() {
  try {
    const res = await fetch(
      'https://dbs.chromatone.center/flows/trigger/dc8ca96f-76e6-4cac-b26c-10751746eb89',
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
    reply.value = await res?.json()
    data.url = ''
    data.text = ''
    setTimeout(() => {
      emit('submitted')
    }, 2000)
  } catch (e) {
    console.error(e, e?.errors?.[0]?.message, e?.response?.status)
  }
}
</script>

<template lang='pug'>
.flex.flex-col.text-center.gap-4.bg-light-700.dark-bg-dark-200.dark-bg-opacity-20.p-4.rounded-lg.shadow-lg.mb-8
  template(v-if="!reply")
    .text-xl.font-bold.my-2 Suggest a new web-synth to the collection
    input.py-2.px-4.rounded.bg-light-200.dark-bg-dark-200(type="text" placeholder="https://new.synth.url/" v-model="data.url")
    textarea.py-2.px-4.rounded.bg-light-200.dark-bg-dark-200(oninput="this.style.height = ''; this.style.height = this.scrollHeight +'px'" placeholder="Describe the web-app and how do you use it musically" v-model="data.text")
    button.text-xl.py-2.px-4.rounded.bg-dark-100.text-light-200.dark-bg-light-700.dark-text-dark-500.shadow-lg.disabled-opacity-20(:disabled="!validateURL(data.url)" @click="sendSuggest()") {{ validateURL(data.url) ? 'Submit' : 'Please provide a valid URL' }}
  template(v-else) Thanks for your suggestion!
</template>