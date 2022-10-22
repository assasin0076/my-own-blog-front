<template>
  <div
    class="w-[400px] max-w-[400px] relative bg-transparent border border-black rounded p-2 flex items-center"
  >
    <div class="mr-2 flex items-center justify-center h-8 w-12 text-xs">
      {{ alertKaomojies[props.alert.type] }}
    </div>
    <div class="w-full">
      {{ props.alert.text }}
    </div>
    <div
      class="ml-2 self-start transition-colors hover:text-gray-500 cursor-pointer"
    >
      X
    </div>
  </div>
</template>

<script setup lang="ts">
import alertKaomojies from "../../dictionaries/alertKaomojies";
import type AlertInterface from "../../interfaces/AlertInterface";
import { onMounted } from "vue";
import { useAlerts } from "@/composables/AlertComposable";

interface Props {
  alert: AlertInterface;
}
const props = defineProps<Props>();

const alertActions = useAlerts();

onMounted(() => {
  setTimeout(() => {
    alertActions.removeAlert(props.alert.id);
  }, 5000);
});
</script>
