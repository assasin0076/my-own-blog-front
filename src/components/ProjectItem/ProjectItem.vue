<script lang="ts" setup>
import type TProjectItem from "@/types/TProjectItem";
import type { PropType } from "vue";
import TippyWelder from "@/components/TippyWelder/TippyWelder.vue";

defineProps({
  item: {
    type: Object as PropType<TProjectItem>,
  },
  withPreview: {
    type: Boolean,
    default: false,
  },
});
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
      <tippy-welder v-if="withPreview">
        <template #activator>
          <a class="hover:text-gray-700 transition-colors" :href="item.viewLink">view</a>
        </template>
        <template #tooltip>
          <iframe
            :src="item.viewLink"
            class="h-[350px] w-[350px] bg-white overflow-scroll border border-gray-100 no-scrollbar"
          ></iframe>
        </template>
      </tippy-welder>
      <a
        v-else
        class="hover:text-gray-700 transition-colors"
        :href="item.viewLink"
      >view</a>
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
    <div>{{ item.desc }}</div>
  </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
