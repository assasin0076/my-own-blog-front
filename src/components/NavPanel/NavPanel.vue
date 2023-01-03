<script setup lang="ts">
import { nanoid } from "nanoid";
import SlicedHovering from "@/components/SlicedHovering/SlicedHovering.vue";
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import { useAlerts } from "@/composables/AlertComposable";

const navs = [
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
];

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
</script>

<template>
  <header class="w-full p-4 mb-10 sticky top-0 left-0 bg-white">
    <div class="flex h-12 w-full justify-center items-center relative">
      <img
        class="absolute left-0 ml-12 w-12 h-12"
        src="/public/logo.png"
        alt="#"
      />
      <div class="flex">
        <router-link
          v-for="(nav, i) in navs"
          :key="nav.id"
          :to="nav.to"
          class="mr-2 last:mr-0 hover:text-gray-700 transition-colors flex"
        >
          {{ nav.label }}
          <div v-if="i < navs.length - 1" class="ml-2">|</div>
        </router-link>
      </div>
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
    </div>
  </header>
</template>
