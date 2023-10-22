import { useItems } from '../composables/useItems.js';

export default {
  async paths() {

    const synths = await useItems('synths', {
      sort: ['sort', 'id'], limit: -1, filter: { status: { '_eq': 'published' } }
    })

    return (synths || [])?.map(p => {
      let content = p.content
      delete p.content
      return { params: p, content }
    })
  }
}