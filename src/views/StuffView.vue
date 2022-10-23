<script lang="ts" setup>
import { nanoid } from "nanoid";
import ProjectItem from "@/components/ProjectItem/ProjectItem.vue";
import type ProjectItemInterface from "@/interfaces/ProjectItemInterface";

const items: ProjectItemInterface[] = [
  {
    id: nanoid(),
    label: "SPA для напитков",
    ref: "juice-spa",
    desc: "На одной из вакансий после прохождения интервью мне предложили выполнить тестовое задание. Мне оно показалось интересным и я выполнил, и довольно быстро. Правда обратной связи нет по сей день, но тестовое осталось",
    tags: ["Vue3", "Scss"],
    viewLink: "https://vue-spa-landing-c5ens4xzo-assasin0076.vercel.app/",
    repoLink: "https://gitlab.com/assasin0076/vue-spa-landing",
  },
  {
    id: nanoid(),
    label: "Этот сайт",
    ref: "this-site",
    desc: "У этого сайта тоже есть кодовая база. Удивительно, не так ли? :)",
    tags: ["Vue3", "Tailwind", "Typescript"],
    viewLink: "https://my-own-blog-front.vercel.app/",
    repoLink: "https://github.com/assasin0076/my-own-blog-front/tree/master",
  },
];
</script>

<template>
  <div class="flex justify-center">
    <div class="w-[800px] flex flex-col">
      <project-item
        v-for="item in items"
        :key="item.id"
        :item="item"
      ></project-item>
    </div>
  </div>
</template>
