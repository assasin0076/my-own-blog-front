<script setup lang="ts">
import WorkPlaces from "@/components/WorkPlaces/WorkPlaces.vue";
</script>

<template>
  <div class="w-full flex items-center flex-col">
    <div class="max-w-[800px] md:p-4">
      <div class="mb-10">
        Я Виктор, разработчик фронтенда.
        <br />
        В работе я использую в основном фреймворк Vue.js.
      </div>
      <work-places />
    </div>
  </div>
</template>
