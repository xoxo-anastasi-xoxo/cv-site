import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
  scrollBehavior(to) {
    if (!to.hash) return { left: 0, top: 0 }

    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const target = document.querySelector(to.hash) as HTMLElement | null
        if (!target) return resolve({ left: 0, top: 0 })

        const container = document.querySelector('.layout') as HTMLElement | null
        if (container) {
          const targetTop = target.getBoundingClientRect().top + container.scrollTop

          console.log(targetTop)
          // desktop scroll
          container.scrollTo({
            top: targetTop,
            behavior: 'smooth',
          })
        }
        // mobile scroll
        return resolve({
          el: to.hash,
          behavior: 'smooth',
        })
      })
    })
  },
})

export default router
