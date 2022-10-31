<template>
  <div
    class="w-[400px] max-w-[400px] relative bg-transparent border border-black rounded p-2 flex items-center"
    @mouseenter="resetCloseTimer"
  >
    <div class="mr-2 flex items-center justify-center h-8 w-12 text-xs">
      {{ alertKaomojies[props.alert.type] }}
    </div>
    <div class="w-full">
      {{ props.alert.text }}
    </div>
    <div
      class="ml-2 self-start transition-colors hover:text-gray-500 cursor-pointer"
      @click="closeAlert"
    >
      X
    </div>
  </div>
</template>

<script lang="ts" setup>
import alertKaomojies from "../../dictionaries/alertKaomojies";
import type AlertInterface from "../../interfaces/AlertInterface";
import { onMounted, ref, defineProps } from "vue";
import { useAlerts } from "../../composables/AlertComposable";

interface Props {
  alert: AlertInterface;
}
const timer = ref<any>(null);
const props = defineProps<Props>();

const alertActions = useAlerts();

function closeAlert() {
  alertActions.removeAlert(props.alert.id);
}
function setCloseTimer() {
  timer.value = setTimeout(() => {
    closeAlert();
  }, 5000);
}

function resetCloseTimer() {
  clearTimeout(timer.value);
  setCloseTimer();
}

onMounted(() => {
  setCloseTimer();
});
</script>
