<script setup>
import { ref } from 'vue'

import { vBreakpoint } from '@directives'
import { use_breakpoint_props } from '@composables'
import { image_breakpoint_sizes } from '../assets'

const image_breakpoint_sizes1 = 1

const image_size = ref(null)

const on_breakpoint = (b) => {}

import { ui_wrapper, ui_background } from '@ui'
</script>

<template>
  <ui_wrapper
    class="image"
    container
    fluid
    end
    v-breakpoint:init="on_breakpoint"
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
        :size="image_size"
      />
      <!-- /shadow -->

      <!-- car -->
      <ui_background
        class="image__background_wrapper"
        background="car"
        position="right 92%"
        :size="image_size"
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
