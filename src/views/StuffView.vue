<script lang="ts" setup>
import ProjectItem from "@/components/ProjectItem/ProjectItem.vue";
import { onBeforeMount, ref } from "vue";
import { getStuff } from "@/services/stuffService";
import type { TProjectItem } from "@/types/TProjectItem";

const items = ref<TProjectItem[]>();

onBeforeMount(async () => {
  items.value = await getStuff();
});
</script>

<template>
  <div class="flex justify-center py-4 px-5">
    <div class="w-[800px] flex flex-col">
      <project-item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
