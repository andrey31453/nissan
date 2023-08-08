<template>
  <div class="app_wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.app_wrapper {
  @include utils.font();

  min-height: 100vh;
}
</style>
