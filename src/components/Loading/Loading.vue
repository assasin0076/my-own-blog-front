<template>
  <div class="loader-wrapper">
    <span class="loader-text">
      <span>Загрузка</span>
      <span class="dots">{{ dots }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const dots = ref('.');
const frames = ['.', '..', '...'];
let frame = 0;
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(() => {
    frame = (frame + 1) % frames.length;
    dots.value = frames[frame];
  }, 500);
});

onUnmounted(() => clearInterval(interval));
</script>

<style scoped>
.loader-wrapper {
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.loader-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.375rem;
  padding: 1px;
  background: conic-gradient(
    from var(--angle, 0deg),
    transparent 1%,
    theme('colors.gray.800') 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: spin 1.5s linear infinite;
}

.loader-text {
  font-size: 1rem;
}

.dots {
  display: inline-block;
  width: 1.5ch;
  text-align: left;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
</style>
