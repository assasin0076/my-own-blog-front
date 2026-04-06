<script lang="ts" setup>
import ProjectItem from '@/components/ProjectItem/ProjectItem';
import { computed } from 'vue';
import Loading from '@/components/Loading/Loading.vue';
import { useAxios } from '@vueuse/integrations/useAxios';
import api from '@/services/api.ts';
import { stuffTransformer } from '@/transformers/stuffTransformer.ts';

const { data, isFinished } = useAxios('/stuff', api);
const items = computed(() => {
  return stuffTransformer(data.value);
});
</script>

<template>
  <div class="flex justify-center py-4 px-5">
    <div class="w-[800px] flex flex-col">
      <loading v-if="!isFinished" />
      <template v-else>
        <project-item v-for="item in items" :key="item.id" :item="item" />
      </template>
    </div>
  </div>
</template>
