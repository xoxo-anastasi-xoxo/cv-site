<script setup lang="ts">
let props = defineProps<{
  title: string
}>()
</script>

<template>
  <a class="menu-item-mobile" :href="`##${props.title}`">{{ props.title }}</a>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins' as *;

.menu-item-mobile {
  display: block;
  padding: 2rem 0 1rem 0;
  cursor: pointer;

  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;

  position: sticky;
  top: 0;
  background: $bg;
  z-index: 10;

  @include apply-to-desktop {
    visibility: hidden;
    height: $desktop_section_padding;
    box-sizing: border-box;
  }
}
</style>
