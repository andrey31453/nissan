<template>
  <div class="app_wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/classes';

.app_wrapper {
  @include classes.app();
}
</style>
