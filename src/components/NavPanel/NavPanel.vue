<script setup lang="ts">
import { nanoid } from "nanoid";
import SlicedHovering from "@/components/SlicedHovering/SlicedHovering.vue";

const navs = [
  {
    to: "/",
    label: "Главная",
    id: nanoid(),
  },
  {
    to: "/stuff",
    label: "Приколы",
    id: nanoid(),
  },
];
</script>

<template>
  <header class="w-full p-8">
    <div class="flex w-full justify-center items-center relative">
      <div class="flex">
        <router-link
          v-for="nav in navs"
          :key="nav.id"
          :to="nav.to"
          class="mr-2 last:mr-0 hover:text-gray-700 transition-colors"
        >
          {{ nav.label }}
        </router-link>
      </div>
      <div class="flex absolute right-0"><sliced-hovering /></div>
    </div>
  </header>
</template>
