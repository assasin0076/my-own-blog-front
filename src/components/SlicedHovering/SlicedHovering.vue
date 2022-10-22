<script setup lang="ts">
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
    <slot name="main-content"></slot>
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
      <div class="skew-x-[20deg]">
        <slot name="left-slice"></slot>
      </div>
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
      <div class="skew-x-[20deg]">
        <slot name="right-slice"></slot>
      </div>
    </div>
  </div>
</template>
