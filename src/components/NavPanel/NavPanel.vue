<script setup lang="ts">
import { nanoid } from "nanoid";
import SlicedHovering from "@/components/SlicedHovering/SlicedHovering.vue";
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import { useAlerts } from "@/composables/AlertComposable";
import { ref } from "vue";

const navs = ref([
  {
    to: "/",
    label: "Главная",
    id: nanoid(),
  },
  {
    to: "/stuff",
    label: "Проекты",
    id: nanoid(),
  },
  {
    to: "memes",
    label: "Мемчики",
    id: nanoid(),
  },
]);

const alertsComposable = useAlerts();

function copyLink() {
  navigator.clipboard
    .writeText("KawSamurai")
    .then(() => {
      alertsComposable.pushAlert({
        type: "notification",
        text: "Ссылка успешно скопирована!",
      });
    })
    .catch(() => {
      alertsComposable.pushAlert({
        type: "error",
        text: "Не удалось скопировать...",
      });
    });
}

const isMobileMenuActive = ref(false);
</script>

<template>
  <header class="sm:hidden w-full p-4 mb-10 sticky top-0 left-0 bg-white">
    <nav class="flex h-12 w-full justify-center items-center relative">
      <router-link to="/" class="absolute left-0 ml-12 w-12 h-12">
        <img class="w-12 h-12" src="/public/logo.png" alt="#" />
      </router-link>
      <ul class="flex">
        <li v-for="(nav, i) in navs" :key="nav.id" class="mr-2 last:mr-0 flex">
          <router-link
            :to="nav.to"
            class="hover:text-gray-700 hover:scale-105 duration-300 transition flex"
          >
            {{ nav.label }}
          </router-link>
          <span v-if="i < navs.length - 1" class="ml-2">|</span>
        </li>
      </ul>
      <div class="flex absolute right-0">
        <sliced-hovering>
          <template v-slot:main-content>
            <div
              class="flex items-center hover:text-gray-700 transition-colors"
            >
              <telegram-icon class="h-7 w-7" />
              @KawSamurai
            </div>
          </template>
          <template v-slot:left-slice>
            <a href="https://t.me/KawSamurai">open</a>
          </template>
          <template v-slot:right-slice>
            <button @click="copyLink">copy</button>
          </template>
        </sliced-hovering>
      </div>
    </nav>
  </header>
  <span
    @click="isMobileMenuActive = true"
    class="hidden sm:flex fixed bottom-12 right-12 border border-gray-700 leading-none flex items-center justify-center rounded-full bg-white w-10 h-10"
  >
    O
  </span>
  <div
    v-if="isMobileMenuActive"
    class="fixed w-full h-full z-10 p-4 pb-10 bg-white"
  >
    <button
      @click="isMobileMenuActive = false"
      class="absolute top-0 right-0 h-14 w-14 text-2xl"
    >
      ⓧ
    </button>
    <nav class="mx-auto flex flex-col items-center h-full">
      <router-link to="/" class="mb-5" @click="isMobileMenuActive = false">
        <img class="w-12 h-12" src="/public/logo.png" alt="#" />
      </router-link>
      <ul class="py-5 border-y border-gray-700 mb-10 min-w-[200px] mb-auto">
        <li
          v-for="nav in navs"
          :key="nav.id"
          class="mb-2 last:mb-0 hover:text-gray-700 transition-colors text-center"
          @click="isMobileMenuActive = false"
        >
          <router-link :to="nav.to">
            {{ nav.label }}
          </router-link>
        </li>
      </ul>
      <a href="https://t.me/KawSamurai">@KawSamurai</a>
    </nav>
  </div>
</template>
