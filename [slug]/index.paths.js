import { useItems } from '../composables/useItems.js';

export default {
  async paths() {

    const synths = await useItems('synths', {
      sort: ['sort'], limit: -1
    })

    return (synths || [])?.map(p => {
      let content = p.content
      delete p.content
      return { params: p, content }
    })
  }
}