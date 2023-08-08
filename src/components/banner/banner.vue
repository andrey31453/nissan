<script setup>
import { b_overlay, b_substrate, b_content, b_image } from './components'
</script>

<template>
  <div class="banner">
    <b_overlay class="banner__overlay" />
    <b_content class="banner__content" />
    <b_substrate class="banner__substrate" />
    <b_image class="banner__image" />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.banner {
  @include utils.z(0);

  &__overlay {
    @include utils.z(1);
    height: 464px;
  }

  &__content {
    @include utils.absolute(3, '0');

    top: 220px;
  }

  &__substrate {
  }

  &__image {
    @include utils.absolute(2, '0');
  }
}
</style>
