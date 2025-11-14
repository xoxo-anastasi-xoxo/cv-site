<script setup lang="ts">
const props = defineProps<{ label: string }>()
</script>

<template>
  <span class="badge">{{ props.label }}</span>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.badge {
  background: #2dd4bf1a;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;

  color: $accent;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25rem;
}
</style>
