<script setup lang="ts">
import WorkPlaces from "@/components/WorkPlaces/WorkPlaces.vue";
</script>

<template>
  <div class="w-full flex items-center flex-col">
    <div class="max-w-[800px] md:p-4">
      <section class="mb-10 sm:mt-5">
        <p>Я Виктор, разработчик фронтенда.</p>
        <p>В работе я использую в основном фреймворк Vue.js.</p>
      </section>
      <work-places />
    </div>
  </div>
</template>
