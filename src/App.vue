<script setup lang="ts">
import NavPanel from './components/NavPanel/NavPanel.vue';
import AlertsList from '@/components/AlertsList/AlertsList.vue';
import LayoutFooter from '@/components/LayoutFooter/LayoutFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <nav-panel />
    <main class="flex-1">
      <RouterView />
    </main>
    <LayoutFooter />
  </div>
  <AlertsList />
</template>

<style lang="scss"></style>
