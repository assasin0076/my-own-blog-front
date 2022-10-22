<script setup lang="ts">
import NavPanel from "./components/NavPanel/NavPanel.vue";
import AlertsList from "@/components/AlertsList/AlertsList.vue";
</script>

<template>
  <nav-panel />
  <AlertsList />
  <RouterView />
</template>

<style lang="scss"></style>
