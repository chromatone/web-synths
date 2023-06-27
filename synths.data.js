import PocketBase from "pocketbase"
import download from 'image-downloader'

import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from 'node:fs'


const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  async load() {
    const pb = new PocketBase("https://api.defucc.me")

    const records = await pb.collection("synths").getFullList({
      sort: "sort",
    });

    for (let r of records) {
      let dest = path.resolve(dirname, './public/media/')
      let filePath = path.resolve(dest, r.img)
      if (fs.existsSync(filePath)) continue
      let url = `https://api.defucc.me/api/files/${r.collectionId}/${r.id}/${r.img}`
      console.log('downloading file:', r.img)
      await download.image({ url, dest })
    }
    return records
  }
}