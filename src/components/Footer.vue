<template>
  <div class="footer">
    Big kudos to
    <a
      class="footer__link"
      href="https://brittanychiang.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Brittany Chiang ❤
    </a>
    — her portfolio inspired me to recreate it in my own way and stack.
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.footer {
  padding: 1rem;
  margin-top: 2rem;

  font-size: 0.875rem;
  line-height: 1.25rem;
  color: $secondary;

  &__link {
    color: $primary;
  }
}
</style>
