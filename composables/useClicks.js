import { useThrottleFn } from '@vueuse/core'
import { ref, watch } from 'vue'



export async function sendClick(id) {
  try {
    console.log(id)
    const counting = await fetch(
      'https://db.synth.chromatone.center/flows/trigger/c4e39986-cc31-423b-8218-69a620f46215',
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ id }),
      });
    return await counting?.json()
  } catch (e) {
    console.error(e, e?.errors?.[0]?.message, e?.response?.status)
  }
}

export function useClicks(id) {

  const clicksCount = ref(0)

  const throttledClick = useThrottleFn(sendClick, 10000)

  async function clickSynth() {
    clicksCount.value = await throttledClick(id)
  }

  return {
    clicksCount,
    clickSynth
  }
}