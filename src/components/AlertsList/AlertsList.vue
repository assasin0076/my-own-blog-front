<template>
  <teleport to="#app">
    <div class="absolute right-0 bottom-0 p-8">
      <alert-component
        class="mb-2 last:mb-0"
        v-for="alert in alertsList"
        :key="alert.id"
        :alert="alert"
      />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useAlerts } from "@/composables/AlertComposable";
import { ref } from "vue";
import AlertComponent from "@/components/AlertComponent/AlertComponent.vue";

const alerts = useAlerts();

const alertsList = ref(alerts.alerts);

alerts.pushAlert({ type: "greeting", text: "Приветствую тебя!" });
</script>
