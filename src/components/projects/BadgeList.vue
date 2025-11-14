<script setup lang="ts">
import Badge from '@/components/projects/Badge.vue'

const props = defineProps<{ items: string[] }>()
</script>

<template>
  <div class="badge-list">
    <Badge v-for="item in props.items" :key="item" :label="item" />
  </div>
</template>

<style scoped lang="scss">
.badge-list {
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
