<script setup lang="ts">
import BadgeList from '@/components/projects/BadgeList.vue'
import Arrow from '@/assets/arrow.svg'

export type Project = {
  title: string
  subtitle: string
  description: string
  link?: string
  disclaimer?: string
  badges?: string[]
}
const props = defineProps<Project>()
</script>

<template>
  <component
    :is="props.link ? 'a' : 'div'"
    class="project-card"
    :href="props.link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="project-card__title">{{ props.title }}</div>
    <div>
      <div class="project-card__subtitle">
        {{ props.subtitle }}
        <Arrow class="project-card__icon" />
      </div>
      <div v-if="props.disclaimer" class="project-card__disclaimer">{{ props.disclaimer }}</div>
      <div class="project-card__description">{{ props.description }}</div>
      <BadgeList v-if="props.badges" :items="props.badges" />
    </div>
  </component>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow:
      0 10px 8px rgba(0, 0, 0, 0.04),
      0 4px 3px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
  }
  @include apply-to-mobile() {
    background: rgba(255, 255, 255, 0.05);
    box-shadow:
      0 10px 8px rgba(0, 0, 0, 0.04),
      0 4px 3px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
  }

  &:hover &__subtitle {
    color: $accent;
  }
  &:hover &__icon {
    transform: translate(0, 0);
  }

  @media (min-width: 640px) {
    flex-direction: row;
  }

  &__title {
    flex: 0 0 20%;
    padding: 0.5rem;

    color: $secondary;
    font-size: 0.75rem;
    line-height: 1rem;

    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.025em;
  }

  &__subtitle {
    padding: 0.5rem;

    color: $primary;
    font-size: 1rem;
    line-height: 1.375rem;

    font-weight: 500;
  }

  &__disclaimer {
    padding: 0 0.5rem;

    color: $primary;
    font-size: 0.95rem;
    line-height: 1.2rem;
  }

  &__icon {
    width: 1rem;
    height: 1rem;

    margin-left: 0.25rem;

    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    transform: translate(-0.25rem, 0.25rem);
  }

  &__description {
    padding: 0.5rem;

    color: $secondary;
    font-size: 0.875rem;
    line-height: 1.5rem;
    white-space: pre-line;
  }
}
</style>
