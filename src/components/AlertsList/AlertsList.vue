<script setup lang="ts">
import { useAlerts } from "@/composables/AlertComposable";
import { onMounted, ref } from "vue";
import AlertComponent from "@/components/AlertComponent/AlertComponent.vue";
import Cookies from "js-cookie";
import { getDiffInMinutes } from "@/helpers/dateHelpers";
import getRandomArrayElement from "@/helpers/getRandomArrayElement";

const alerts = useAlerts();

const firstVisitMessages = [
  "Ого! Новенький!",
  "Не видел здесь тебя раньше.",
  "Рад видеть новые лица.",
];
const notFarAgoMessages = [
  "Не бойся нажимать на кнопки.",
  "Зацени какой крутой логотип.",
  "Какой хороший день!",
];
const farAgoMessages = [
  "Давно тебя не видел.",
  "Чувствуй себя как дома.",
  "Снова ты. Располагайся!",
];

const alertsList = ref(alerts.alerts);

const alertFirstTimeVisit = () => {
  alerts.pushAlert({
    type: "greeting",
    text: getRandomArrayElement(firstVisitMessages),
  });
};
const alertNotFarAgoVisit = () => {
  alerts.pushAlert({
    type: "greeting",
    text: getRandomArrayElement(notFarAgoMessages),
  });
};

const alertFarAgoVisit = () => {
  alerts.pushAlert({
    type: "greeting",
    text: getRandomArrayElement(farAgoMessages),
  });
};

const sendGreetingAlert = () => {
  const lastVisit = Cookies.get("lastVisit");
  const currentDate = new Date();
  if (!lastVisit) return alertFirstTimeVisit();
  const minutesFromLastVisit = getDiffInMinutes(
    currentDate,
    new Date(lastVisit)
  );
  const hoursFromLastVisit = minutesFromLastVisit / 60;
  const daysFromLastVisit = hoursFromLastVisit / 24;
  if (minutesFromLastVisit < 10) return;
  if (daysFromLastVisit < 3) return alertNotFarAgoVisit();
  alertFarAgoVisit();
};

onMounted(() => {
  sendGreetingAlert();
  Cookies.set("lastVisit", new Date(), { expires: 365 });
});
</script>

<template>
  <teleport to="#app">
    <transition-group
      tag="div"
      name="alert"
      class="fixed right-0 bottom-0 p-8 alerts-list"
      mode="out-in"
    >
      <alert-component
        class="mb-2 last:mb-0"
        v-for="alert in alertsList"
        :key="alert.id"
        :alert="alert"
      />
    </transition-group>
  </teleport>
</template>

<style lang="scss">
.alerts-list {
  .alert-enter-active,
  .alert-leave-active {
    transition: all 500ms ease;
  }

  .alert-enter-from,
  .alert-leave-to {
    opacity: 0;
  }
  .list-leave-active {
    position: absolute;
  }
}
</style>
