<script setup lang="ts">
import { ref, defineExpose } from 'vue'

const container = ref<HTMLElement | null>(null)
defineExpose({
  container,
})
</script>

<template>
  <section ref="container" class="layout">
    <div class="layout__pane _sticky"><slot name="first" /></div>
    <div class="layout__pane _scrollable"><slot name="second" /></div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/mixins' as *;

.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1280px;

  @include apply-to-mobile {
    padding: 0 1rem;
  }

  @include apply-to-desktop {
    height: 100vh;
    overflow: auto;
    overscroll-behavior: contain;

    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  &__pane {
    min-width: 0;
    overflow: visible;
    box-sizing: border-box;
    @include hide-scrollbar;

    @include apply-to-desktop {
      overflow-y: auto;
    }
  }

  &__pane._sticky {
    position: static;
    top: 0;
    height: auto;
    overflow: hidden;

    @include apply-to-desktop {
      position: sticky;
      height: 100vh;
    }
  }
}
</style>
