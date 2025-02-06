<script setup lang="ts">
import MemesSlider from "@/components/MemesSlider/MemesSlider.vue";
import { ref } from "vue";
import { nanoid } from "nanoid";

const navs = ref([
  {
    label: "Patryk",
    id: nanoid(),
  },
  {
    label: "SpongeBob",
    id: nanoid(),
  },
]);

const selectedNav = ref(null);

const selectNav = (nav) => {
  selectedNav.value = nav;
};
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="flex justify-center items-center mb-16">
      <div v-for="(nav, i) in navs" :key="nav.id" class="mr-2 last:mr-0 flex">
        <div
          @click="selectNav(nav)"
          class="hover:text-gray-700 hover:scale-105 duration-300 transition flex cursor-pointer"
        >
          {{ nav.label }}
        </div>
        <span v-if="i < navs.length - 1" class="ml-2">|</span>
      </div>
    </div>
    <div class="flex self-center w-content items-center mb-20">
      =хочу сасат=
    </div>

    <memes-slider v-if="selectedNav && selectedNav.label === 'Patryk'" />
  </div>
</template>
