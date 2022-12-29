import type { TProjectItem, TRawProjectItem } from "@/types/TProjectItem";

export function stuffTransformer(rawStuff: TRawProjectItem[]): TProjectItem[] {
  return rawStuff.map((stuffItem: TRawProjectItem): TProjectItem => {
    return {
      ...stuffItem,
      tags: stuffItem.tags.split(","),
    };
  });
}
