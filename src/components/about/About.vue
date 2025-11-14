<script setup lang="ts">
import AboutItem from '@/components/about/AboutItem.vue'
import MenuItemMobile from '@/components/MenuItemMobile.vue'
import type { AboutItemType } from '@/components/about/AboutItem.vue'

let props = defineProps<{ title: string; items: AboutItemType[] }>()
</script>

<template>
  <div class="about">
    <MenuItemMobile :title="props.title" />
    <AboutItem v-for="(item, index) in props.items" :key="index" v-bind="item" />
  </div>
</template>
