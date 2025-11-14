<script setup lang="ts">
import MenuItemDesktop from '@/components/MenuItemDesktop.vue'

let props = defineProps<{
  title: string
  subtitle: string
  description: string
  menuItems: readonly string[]
  activeMenuItem: string
}>()
</script>

<template>
  <div class="header">
    <a class="header__title" href="/">{{ props.title }}</a>
    <h2 class="header__subtitle">{{ props.subtitle }}</h2>
    <p class="header__description">{{ props.description }}</p>
    <div class="header__menu">
      <MenuItemDesktop
        v-for="item in props.menuItems"
        :key="item"
        :title="item"
        :is-active="props.activeMenuItem === item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.header {
  color: $primary;
  margin-top: $desktop_section_padding;

  &__title {
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
  }

  &__subtitle {
    margin-top: 0.5rem;

    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: -0.025em;
    font-weight: 200;
  }

  &__description {
    margin-top: 1rem;

    color: $secondary;
    line-height: 1.5;
  }

  &__menu {
    margin-top: 4rem;
    display: none;

    @include apply-to-desktop() {
      display: block;
    }
  }
}
</style>
