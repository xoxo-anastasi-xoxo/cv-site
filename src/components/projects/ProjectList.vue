<script setup lang="ts">
import MenuItemMobile from '@/components/MenuItemMobile.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import type { Project } from '@/components/projects/ProjectCard.vue'

let props = defineProps<{ title: string; items: Project[] }>()
</script>

<template>
  <div :id="props.title" class="project-list">
    <MenuItemMobile :title="props.title" />
    <ProjectCard v-for="project in props.items" :key="project.subtitle" v-bind="project" />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;
.project-list {
  @include apply-to-mobile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @include apply-to-desktop {
    &:hover > * {
      opacity: 0.6;
    }

    &:hover > :first-child {
      opacity: 1;
    }

    &:hover > *:hover {
      opacity: 1;
    }
  }
}
</style>
