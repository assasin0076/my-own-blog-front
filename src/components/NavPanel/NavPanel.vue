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
