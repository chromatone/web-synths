import { useItems } from '../composables/useItems.js';
import { downloadCovers } from './downloadCovers.js';

export default {
  async load() {

    const records = await useItems('synths', {
      sort: ['sort'], limit: -1,
    });

    await downloadCovers(records, {
      folder: 'cover'
    })

    return records
  }
}
