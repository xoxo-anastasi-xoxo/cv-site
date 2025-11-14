<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <h2 class="not-found__subtitle">This page could not be found.</h2>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.not-found {
  width: 100vw;
  height: 100vh;

  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  color: $secondary;

  @include apply-to-mobile {
    flex-direction: column;
    gap: 0;
  }

  &__title {
    font-size: 2rem;
    font-weight: 400;
    line-height: 4rem;

    margin: 0;
  }
  &__subtitle {
    font-size: 1rem;
    font-weight: 400;
    line-height: 4rem;

    margin: 0;
  }
}
</style>
