import { firestore } from "../../firebase";

export async function getPodcasts() {
  const podcastsRef = firestore.collection("podcasts");
  const items = await podcastsRef.get();
  return items.docs.map((item) => item.data());
}
