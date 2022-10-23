<script setup lang="ts">
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
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-[800px]">
      <div>
        Я Виктор, разработчик фронтенда.
        <br />
        Мой совокупный опыт в разработке фронтенда составляет:
        {{ yearsLabel(years) }} и
        {{ monthsLabel(months) }}
        <br />
        В работе я использую в основном фреймворк Vue.js.
      </div>
    </div>
  </div>
</template>
