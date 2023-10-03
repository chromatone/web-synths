import { useItems } from '../composables/useItems.js';
import { downloadCovers } from './downloadCovers.js';

export default {
  async load() {

    const records = await useItems('synths', {
      sort: ['sort', 'id'], limit: -1, filter: { status: { '_eq': 'published' } }
    });

    downloadCovers(records, {
      folder: 'cover'
    })

    return records
  }
}
