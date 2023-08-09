<script setup>
import { ui_wrapper, ui_background } from '@ui'
</script>

<template>
  <ui_wrapper
    class="image"
    container
    fluid
    end
  >
    <ui_wrapper
      horizontal
      fluid
      end
    >
      <!-- shadow -->
      <ui_background
        class="image__background_wrapper"
        background="shadow"
        position="right 92%"
        size="60%"
      />
      <!-- /shadow -->

      <!-- car -->
      <ui_background
        class="image__background_wrapper"
        background="car"
        position="right 92%"
        size="60%"
      />
      <!-- /car -->
    </ui_wrapper>
  </ui_wrapper>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.image {
  @include utils.z(0);

  &__background_wrapper {
    @include utils.absolute(0, '0');
  }
}
</style>
