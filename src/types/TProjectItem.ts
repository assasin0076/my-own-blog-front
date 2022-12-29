export type TRawProjectItem = {
  id: string;
  label: string;
  ref: string;
  desc: string;
  tags: string;
  viewLink: string;
  repoLink: string;
};

export type TProjectItem = Omit<TRawProjectItem, "tags"> & { tags: string[] };
