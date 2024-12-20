import { useThrottleFn } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'



export async function sendClick(id) {
  try {
    const counting = await fetch(
      'https://dbs.chromatone.center/flows/trigger/96844b2f-abd0-41ed-bfe1-c5bcf788a98d',
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

export function useClicks(id, num = 0) {

  const clicksCount = ref(num)

  const throttledClick = useThrottleFn(sendClick, 10000)

  async function clickSynth() {
    clicksCount.value = await throttledClick(id)
  }


  return {
    clicksCount,
    clickSynth
  }
}