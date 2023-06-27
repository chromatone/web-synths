import PocketBase from "pocketbase"


export default {
  async load() {
    const pb = new PocketBase("https://api.defucc.me")

    const records = await pb.collection("texts").getFullList();

    const texts = {}
    records.forEach(r => {
      texts[r.title] = r.content
    })

    return texts
  }
}