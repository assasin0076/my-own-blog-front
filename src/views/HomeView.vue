<script lang="ts" setup>
import WorkPlaces from '@/components/WorkPlaces/WorkPlaces.vue';
import Loading from '@/components/Loading/Loading.vue';
import { useAxios } from '@vueuse/integrations/useAxios';
import api from '@/services/api.ts';

const { data, isFinished } = useAxios('/jobs', api);
</script>

<template>
  <div class="w-full flex items-center flex-col">
    <div class="max-w-[800px] w-full md:p-4">
      <section class="mb-10 sm:mt-5">
        <p>Я Виктор, разработчик фронтенда.</p>
        <p>В работе я использую в основном фреймворк Vue.js.</p>
      </section>
      <div v-if="!isFinished" class="h-[200px]">
        <loading />
      </div>
      <work-places v-else :work-places="data" />
    </div>
  </div>
</template>
