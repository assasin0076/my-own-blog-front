<script setup lang="ts">
import { computed, ref } from "vue";

const startProgrammingDate = new Date("2021-04-01");
const todayDate = new Date();
const monthsDifference =
  todayDate.getMonth() -
  startProgrammingDate.getMonth() +
  12 * (todayDate.getFullYear() - startProgrammingDate.getFullYear());
const years = Math.trunc(monthsDifference / 12);
const months = monthsDifference % 12;

const yearsLabel = (yearsCount: number) => {
  if (yearsCount === 0) return `${yearsCount} лет`;
  if (yearsCount === 1) return `${yearsCount} год`;
  if (yearsCount > 1 && yearsCount < 5) return `${yearsCount} года`;
  if (yearsCount > 5 && yearsCount < 21) return `${yearsCount} лет`;

  const stringYearsCount = String(yearsCount);
  const lastNumber = Number(stringYearsCount[stringYearsCount.length - 1]);
  if (lastNumber === 1) return `${yearsCount} год`;
  if (lastNumber > 1 && lastNumber < 5) return `${yearsCount} года`;
  return `${yearsCount} лет`;
};

const monthsLabel = (monthsCount: number) => {
  if (monthsCount === 0) return `${monthsCount} месяцев`;
  if (monthsCount === 1) return `${monthsCount} месяц`;
  if (monthsCount > 1 && monthsCount < 5) return `${monthsCount} месяца`;
  if (monthsCount > 5 && monthsCount < 21) return `${monthsCount} месяцев`;

  const stringMonthsCount = String(monthsCount);
  const lastNumber = Number(stringMonthsCount[stringMonthsCount.length - 1]);
  if (lastNumber === 1) return `${monthsCount} месяц`;
  if (lastNumber > 1 && lastNumber < 5) return `${monthsCount} месяца`;
  return `${monthsCount} месяцев`;
};

const workPlaces = ref([
  {
    id: 1,
    isSelected: true,
    name: "nLogic",
    position: "Frontend-разработчик",
    description:
      "Проектная работа.\n" +
      "Разрабатывал компоненты и страницы на vue в паре со старшим разработчиком. Завершили1 проект ( интернет магазин ) , так же учавствовал в разработке социальной сети.\n" +
      "Поработал с vue-router, nuxt, webpack.",
    startAt: "2021-07",
    endAt: "2022-10",
  },
  {
    id: 2,
    isSelected: false,
    name: "Стартап",
    position: "Frontend-разработчик",
    description:
      "Продуктовая компания.\n" +
      "Разрабатывал 1 продукт и еще 2 поддерживал. Работал в команде со старшим разработчиком.\n" +
      "Проекты, в которых был задействован я представляли собой универсальные системы автоматизации работы с документами, подходящие множеству известных компаний\n" +
      "Поработал с canvas, vue2/vuex, vue3/pinia, писал unit tests на vue-test-utils и vitest, немного писал e2e тесты.",

    startAt: "2021-04",
    endAt: "2021-07",
  },
]);
const selectedPlace = computed(
  () => workPlaces.value.filter((place) => place.isSelected)[0]
);
const selectPlace = (id: number) => {
  workPlaces.value = workPlaces.value.map((place) => {
    if (place.id === id) return { ...place, isSelected: true };
    return { ...place, isSelected: false };
  });
};
const displayDate = (rawDate: string) => {
  const months = {
    "01": "Январь",
    "02": "Февраль",
    "03": "Март",
    "04": "Апрель",
    "05": "Май",
    "06": "Июнь",
    "07": "Июль",
    "08": "Август",
    "09": "Сентябрь",
    "10": "Октябрь",
    "11": "Ноябрь",
    "12": "Декабрь",
  };
  const [year, monthNumber] = rawDate.split("-") as [
    string,
    keyof typeof months
  ];
  return `${months[monthNumber]} ${year}`;
};
</script>

<template>
  <div class="md:mb-10">
    <span class="font-bold">Мой опыт работы:</span>
    {{ yearsLabel(years) }} и
    {{ monthsLabel(months) }}
  </div>
  <div class="my-4 flex min-h-[400px] md:flex-col">
    <div class="md:flex">
      <div
        v-for="place in workPlaces"
        :key="place.id"
        class="my-2 py-1 pr-4 pl-2 w-[240px] md:w-auto md:min-w-150px flex justify-between items-center md:py-4 md:border-0"
        :class="
          place.id === selectedPlace.id
            ? 'border-b border-gray-400'
            : 'border-b border-white hover:border-gray-400'
        "
        @mouseenter="selectPlace(place.id)"
      >
        <div
          class="flex"
          :class="place.id === selectedPlace.id ? '' : 'mr-[15px]'"
        >
          {{ place.name }}
        </div>
        <div class="flex-col text-right md:hidden">
          {{ displayDate(place.startAt) }} —<br />
          {{ displayDate(place.endAt) }}
        </div>
        <div v-if="place.id === selectedPlace.id" class="ml-2 hidden md:block">
          •
        </div>
      </div>
    </div>
    <div
      class="flex p-3 border border-gray-400 rounded-md w-full whitespace-pre-wrap flex-col"
    >
      <div class="hidden md:block ml-auto mb-4 text-right">
        {{ displayDate(selectedPlace.startAt) }} — <br />
        {{ displayDate(selectedPlace.endAt) }}
      </div>
      {{ selectedPlace.description }}
    </div>
  </div>
</template>
