<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const SIZE = 1200

const shadow = ref<HTMLElement | null>(null)

let x = 0
let y = 0
let frameId: number

function onMouseMove(e: MouseEvent) {
  x = e.clientX
  y = e.clientY
}

function animate() {
  if (!shadow.value) return
  shadow.value.style.transform = `translate(${x - SIZE / 2}px, ${y - SIZE / 2}px)`
  frameId = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  frameId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(frameId)
})
</script>

<template>
  <div ref="shadow" class="cursor-shadow" :style="{ '--size': `${SIZE}px` }"></div>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.cursor-shadow {
  top: 0;
  left: 0;
  width: var(--size, 1200px);
  height: var(--size, 1200px);
  pointer-events: none;
  z-index: 9999;

  will-change: transform;

  position: fixed;
  background: radial-gradient(600px at 600px 600px, rgba(29, 78, 216, 0.15), transparent 80%);
  mix-blend-mode: screen;

  @include apply-to-mobile {
    display: none;
  }
}
</style>
