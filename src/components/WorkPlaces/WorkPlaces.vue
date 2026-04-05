<script setup lang="ts">
import { computed, type Ref, ref } from "vue";
import { useJobsStore } from "@/store/jobsStore";
import { storeToRefs } from "pinia";
import type { TJob } from "@/types/TJob";

const startProgrammingDate = new Date("2020-08-01");
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

const jobsStore = useJobsStore();
const { jobs: workPlaces, selectedId } = storeToRefs(jobsStore);

const selectPlace = (id: number) => {
  selectedId.value = id;
};
const selectedPlace = computed(
  () => workPlaces.value.filter((place) => place.id === selectedId.value)[0]
);

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
  <div class="my-4 flex md:flex-col">
    <div class="md:flex">
      <div
        v-for="place in workPlaces"
        :key="place.id"
        class="my-2 py-1 pr-4 pl-2 w-[240px] md:w-auto md:min-w-150px flex justify-between items-center md:py-4 md:border-0"
        :class="
          place.id === selectedId
            ? 'border-b border-gray-400'
            : 'border-b border-white hover:border-gray-400'
        "
        @mouseenter="selectPlace(place.id)"
      >
        <div class="flex" :class="place.id === selectedId ? '' : 'mr-[15px]'">
          {{ place.companyName }}
        </div>
        <div class="flex-col text-right md:hidden">
          {{ displayDate(place.startAt) }} —<br />
          {{ displayDate(place.endAt) }}
        </div>
        <div v-if="place.id === selectedId" class="ml-2 hidden md:block">•</div>
      </div>
    </div>
    <div
      class="flex p-3 border border-gray-400 rounded-md w-full whitespace-pre-wrap flex-col leading-5 h-[400px] overflow-y-auto"
    >
      <template v-if="selectedId">
        <p class="hidden md:block sm:text-start mb-4 text-right">
          {{ displayDate(selectedPlace.startAt) }} — <br />{{
            displayDate(selectedPlace.endAt)
          }}
        </p>
        <p>{{ selectedPlace.description }}</p>
      </template>
    </div>
  </div>
</template>
