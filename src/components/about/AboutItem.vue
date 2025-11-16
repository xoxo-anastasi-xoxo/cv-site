<script setup lang="ts">
export type AboutItemType = {
  type: string
  text?: string
  link?: string
  image?: string
}
let props = defineProps<AboutItemType>()

const LINK_TYPE = 'link' as const
</script>

<template>
  <component
    :is="props.type === LINK_TYPE ? 'a' : 'p'"
    :class="`about-item about-item-${props.type}`"
    :href="props.link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ props.text ?? '' }}
    <img v-if="props.image" class="about-item about-item-image" :src="props.image" />
  </component>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.about-item {
  color: $secondary;
  font-size: 1.05rem;
  line-height: 1.75rem;
  font-weight: 300;
  overflow: visible;

  &-text {
    display: inline;
  }

  &-break {
    margin-top: 1rem;
  }

  &-link {
    color: $primary;
    display: inline;
    white-space: nowrap;
  }

  &-image {
    display: inline;
    width: 1rem;
    height: 1rem;

    @include apply-to-not-mobile {
      transition: transform 0.25s ease;
      transform-origin: center center;
      position: relative;
      z-index: 20;

      &:hover {
        transform: scale(5);
      }
    }
  }
}
</style>
