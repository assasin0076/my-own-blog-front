<script setup>
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import { computed, ref } from "vue";

const isHoveredLeft = ref(false);
const onHoverLeft = () => {
  isHoveredLeft.value = true;
};
const onUnHoverLeft = () => {
  isHoveredLeft.value = false;
};
const widthOnHoverLeft = computed(() => {
  return isHoveredLeft.value ? "w-[calc(50%+6px)]" : "w-0";
});

const isHoveredRight = ref(false);
const onHoverRight = () => {
  isHoveredRight.value = true;
};
const onUnHoverRight = () => {
  isHoveredRight.value = false;
};
const widthOnHoverRight = computed(() => {
  return isHoveredRight.value ? "w-[calc(50%+6px)]" : "w-0";
});
</script>

<template>
  <div class="relative overflow-hidden">
    <a
      class="flex items-center hover:text-gray-700 transition-colors"
      href="https://telegram.me/KawSamurai"
    >
      <telegram-icon class="h-7 w-7" />
      @KawSamurai
    </a>
    <div
      class="w-1/2 h-full bg-transparent absolute left-0 bottom-0"
      @mouseenter="onHoverLeft"
      @mouseleave="onUnHoverLeft"
    ></div>
    <div
      class="h-full absolute -left-1 bottom-0 bg-white border-r transition-all skew-x-[-20deg] overflow-hidden flex items-center justify-center"
      :class="`${widthOnHoverLeft} ${
        isHoveredLeft ? 'border-gray-900' : 'border-gray-transparent'
      }`"
      @mouseenter="onHoverLeft"
      @mouseleave="onUnHoverLeft"
    >
      aaa
    </div>
    <div
      class="w-1/2 h-full bg-transparent absolute right-0 bottom-0"
      @mouseenter="onHoverRight"
      @mouseleave="onUnHoverRight"
    ></div>
    <div
      class="h-full absolute -right-1 bottom-0 bg-white border-l transition-all skew-x-[-20deg] flex items-center justify-center overflow-hidden"
      :class="`${widthOnHoverRight} ${
        isHoveredRight ? 'border-gray-900' : 'border-gray-transparent'
      }`"
      @mouseenter="onHoverRight"
      @mouseleave="onUnHoverRight"
    >
      <div></div>
    </div>
  </div>
</template>
