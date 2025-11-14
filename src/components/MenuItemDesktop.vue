<script setup lang="ts">
let props = defineProps<{
  isActive: boolean
  title: string
}>()
</script>

<template>
  <a :class="`menu-item-desktop ${props.isActive ? '_active' : ''}`" :href="`##${props.title}`">
    <div class="menu-item-desktop__indicator" />
    <div class="menu-item-desktop__title">{{ props.title }}</div>
  </a>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.menu-item-desktop {
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  gap: 1rem;

  color: $secondary;

  &__indicator {
    height: 1px;
    width: 2em;
    background-color: $secondary;
    transition-property: width, background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  &__title {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &:hover,
  &._active {
    color: $primary;
  }

  &:hover &__indicator,
  &._active &__indicator {
    width: 4em;
    background-color: $primary;
  }
}
</style>
