import api from "@/services/api";
import { stuffTransformer } from "@/transformers/stuffTransformer";

export async function getStuff() {
  const { data } = await api.get(`/stuff`);
  return stuffTransformer(data.story.content.items);
}
