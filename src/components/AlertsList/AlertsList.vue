<script setup lang="ts">
import { useAlerts } from "@/composables/AlertComposable";
import { ref } from "vue";
import AlertComponent from "@/components/AlertComponent/AlertComponent.vue";

const alerts = useAlerts();

const alertsList = ref(alerts.alerts);

alerts.pushAlert({ type: "greeting", text: "Приветствую тебя!" });
</script>

<template>
  <teleport to="#app">
    <transition-group
      tag="div"
      name="alert"
      class="absolute right-0 bottom-0 p-8 alerts-list"
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
