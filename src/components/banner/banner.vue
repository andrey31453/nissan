<script setup>
import { b_substrate, b_main, b_image } from './components'
</script>

<template>
  <div class="banner">
    <b_main
      class="banner__main"
      z="3"
    />
    <b_substrate class="banner__substrate" />
    <b_image class="banner__image" />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.banner {
  position: relative;

  height: 542px;

  &__main {
    @include utils.z(1);

    height: 464px;
  }

  &__substrate {
  }

  &__image {
    @include utils.absolute(2, '0');
  }
}
</style>
