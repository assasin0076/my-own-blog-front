<script setup lang="ts">
import WorkPlaces from '@/components/WorkPlaces/WorkPlaces.vue';
import { onBeforeMount } from 'vue';
import { useJobsStore } from '@/store/jobsStore';
import { getJobs } from '@/services/jobsService';
import type { TJob } from '@/types/TJob';

const jobsStore = useJobsStore();

onBeforeMount(async () => {
  let jobs: TJob[];
  try {
    jobs = await getJobs();
    jobsStore.setJobs(jobs);
  } catch (e) {
    return;
  }
});
</script>

<template>
  <div class="w-full flex items-center flex-col">
    <div class="max-w-[800px] md:p-4">
      <section class="mb-10 sm:mt-5">
        <p>Я Виктор, разработчик фронтенда.</p>
        <p>В работе я использую в основном фреймворк Vue.js.</p>
      </section>
      <work-places />
    </div>
  </div>
</template>
