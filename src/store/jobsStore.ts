import { defineStore } from "pinia";
import type { TJob } from "@/types/TJob";

export const useJobsStore = defineStore("jobs", {
  state: (): { jobs: TJob[]; selectedId: null | number } => {
    return {
      jobs: [],
      selectedId: null,
    };
  },
  actions: {
    setJobs(jobs: TJob[]) {
      this.jobs = jobs;
      this.selectedId = jobs[0].id;
    },
  },
});
