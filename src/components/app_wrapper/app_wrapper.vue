<script setup>
import { ui_wrapper } from '@ui'
</script>

<template>
  <div class="app_wrapper">
    <ui_wrapper gap="2">
      <slot />
    </ui_wrapper>
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.app_wrapper {
  @include utils.font();

  min-height: 100vh;
}
</style>
