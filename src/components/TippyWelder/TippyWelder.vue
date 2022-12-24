<script setup lang="ts">
import tippy from "tippy.js";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  useSlots,
} from "vue";

type TPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "auto"
  | "auto-start"
  | "auto-end";
const props = defineProps({
  placement: {
    type: String as PropType<TPlacement>,
    default: "bottom-start",
  },
  content: {
    type: String,
    default: "content",
  },
});
const slots = useSlots();

const content = ref();
const activator = ref();

let instance = ref<Record<any, any>>();

const popoverContent = computed(() => {
  if (slots.tooltip !== undefined) {
    return content.value;
  } else return props.content;
});

onMounted(() => {
  instance.value = tippy(activator.value, {
    placement: props.placement,
    content: popoverContent.value,
    allowHTML: !!slots.tooltip,
    interactive: true,
    ignoreAttributes: true,
    theme: "popper-welder",
  });
});
onBeforeUnmount(() => {
  if (!instance.value) return;
  instance.value.destroy();
});
</script>

<template>
  <div class="popper-welder">
    <div ref="activator" class="popper-activator">
      <slot name="activator" />
    </div>
    <div ref="content" class="popper-content">
      <slot name="tooltip" />
    </div>
  </div>
</template>

<style lang="scss">
.tippy-box[data-theme~="popper-welder"] {
  .tippy-content {
    @apply py-1 pr-[7px] pl-1.5 rounded-sm flex flex-col text-left text-sm leading-4 text-white bg-gray-100;
  }
}
</style>
