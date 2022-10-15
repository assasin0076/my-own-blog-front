<script setup lang="ts">
import { nanoid } from "nanoid";

const navs = [
  {
    to: "/",
    label: "Главная",
    id: nanoid(),
  },
  {
    to: "#",
    label: "Не главная",
    id: nanoid(),
  },
];
</script>

<template>
  <header class="w-full flex items-center justify-center p-8">
    <router-link
      v-for="nav in navs"
      :key="nav.id"
      :to="nav.to"
      class="mr-2 last:mr-0"
      >{{ nav.label }}</router-link
    >
  </header>
</template>
