<script setup>
import { ui_wrapper } from '@ui'
import { vUseBreakpoint } from '@directives'
</script>

<template>
  <div
    v-use-breakpoint
    class="app_wrapper"
  >
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
