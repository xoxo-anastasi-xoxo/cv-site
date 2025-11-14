<script setup lang="ts">
import { onMounted, ref } from 'vue'

import About from '@/components/about/About.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Layout from '@/components/Layout.vue'
import ProjectList from '@/components/projects/ProjectList.vue'

import data from '@/data/hero.json'

const SECTION_IDS = ['about', 'experience', 'education'] as const
const BUFFER = 100

const container = ref<InstanceType<typeof Layout> | null>(null)
const activeId = ref<string>(SECTION_IDS[0])

function onScroll() {
  const root = container.value?.container
  if (!root) return

  const scrollTop = root.scrollTop
  let bestId: typeof activeId.value = activeId.value

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.offsetTop - BUFFER <= scrollTop) {
      bestId = id
    }
  }

  activeId.value = bestId
}

onMounted(() => {
  onScroll()
})
</script>

<template>
  <Layout ref="container" @scroll="onScroll">
    <template #first>
      <Header
        :title="data.title"
        :subtitle="data.subtitle"
        :description="data.description"
        :menu-items="SECTION_IDS"
        :active-menu-item="activeId"
      />
    </template>

    <template #second>
      <About :title="SECTION_IDS[0]" :items="data.about" />
      <ProjectList :title="SECTION_IDS[1]" :items="data.experience" />
      <ProjectList :title="SECTION_IDS[2]" :items="data.education" />
      <Footer />
    </template>
  </Layout>
</template>

<style scoped lang="scss"></style>
