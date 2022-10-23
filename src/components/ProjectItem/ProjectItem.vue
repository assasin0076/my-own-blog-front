<script lang="ts" setup>
import type ProjectItemInterface from "@/interfaces/ProjectItemInterface";

interface Props {
  item: ProjectItemInterface;
}
defineProps<Props>();
</script>

<template>
  <div
    class="mb-8 last:mb-0 hover:text-gray-700 transition-colors w-full relative"
  >
    <div class="absolute right-0 top-0 flex items-center">
      <a
        class="mr-2 hover:text-gray-700 transition-colors"
        :href="item.repoLink"
      >
        code
      </a>
      <a class="hover:text-gray-700 transition-colors" :href="item.viewLink">view</a>
    </div>
    <div class="flex mb-2">
      <router-link :to="item.ref">{{ item.label }}</router-link>
    </div>
    <div class="flex mb-2 text-xs">
      <div
        v-for="tag in item.tags"
        class="mr-2 last:mr-0 p-1.5 border border-gray-900 rounded-full"
      >
        {{ tag }}
      </div>
    </div>
    <div class=""></div>
    <div>{{ item.desc }}</div>
  </div>
</template>
