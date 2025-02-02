<script setup lang="ts">
import { ref } from "vue";

const isSucking = ref(false);
const isNotSucking = ref(false);

const toggleImage = () => {
  isSucking.value = !isSucking.value;
  isNotSucking.value = false; // Сброс состояния для кнопки "НЕ СОСАТЬ"
};

const toggleNotSuckingImage = () => {
  isNotSucking.value = !isNotSucking.value;
  isSucking.value = false; // Сброс состояния для кнопки "СОСАТЬ"
};
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="flex self-center w-content items-center mb-20">
      =хочу сасат=
    </div>
    <div class="flex justify-center items-center">
      <div class="flex gap-96">
        <button
          class="flex justify-center items-center space-x-1 bg-red-500 text-blue-900 px-2 py-2 rounded"
          @click="toggleImage"
        >
          <span class="text-9xl">СОСАТЬ</span>
          <span class="text-9xl"> > </span>
        </button>
        <div>
          <img
            class="w-[800px] h-[800px]"
            :src="
              isSucking
                ? '/src/assets/img/slider_img2.jpg'
                : isNotSucking
                ? '/src/assets/img/slider_img3.jpg'
                : '/src/assets/img/slider_img1.gif'
            "
            alt="#"
          />
        </div>
        <button
          class="flex justify-center items-center space-x-1 bg-red-500 text-blue-900 px-2 py-2 rounded"
          @click="toggleNotSuckingImage"
        >
          <span class="text-9xl"> &lt; </span>
          <span class="text-9xl">НЕ СОСАТЬ</span>
        </button>
      </div>
    </div>
  </div>
</template>
