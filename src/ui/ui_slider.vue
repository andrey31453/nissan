<script setup>
import { vars } from '@consts'
import { use_on_resize, use_on_breakpoint, use_counts } from './composables'
import { use_breakpoint_props } from '@composables'
import { use_app_store } from '@store'

const props = defineProps({
  xs: {
    type: String,
    default: vars.cols,
  },

  sm: {
    type: String,
  },

  md: {
    type: String,
  },

  lg: {
    type: String,
  },

  xl: {
    type: String,
  },

  xxl: {
    type: String,
  },

  gap: {
    type: String,
    default: '1',
  },
})

const breakpoints = use_breakpoint_props(props)
const app_store = use_app_store()

const { visible_count, elem_count } = use_counts(breakpoints, app_store)

const {
  slider,
  wrapper,

  elem_width,
  slider_height,

  on_resize,
} = use_on_resize(visible_count)

const { on_breakpoint, has_slider } = use_on_breakpoint(
  visible_count,
  elem_count
)

//

import { vBreakpoint, vResize } from '@directives'
</script>

<template>
  <div
    ref="slider"
    class="ui_slider"
    v-breakpoint:init="on_breakpoint"
    v-resize:init="on_resize"
  >
    <template v-if="has_slider"> slider </template>
    <div
      class="ui_slider__wrapper"
      ref="wrapper"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_slider {
  position: relative;
  height: v-bind(slider_height);
  overflow: hidden;

  &__wrapper {
    @include utils.f(v-bind(gap), 'nw,as');

    position: absolute;

    left: 0;
    top: 0;

    & > :deep(*) {
      width: v-bind(elem_width);
    }
  }
}
</style>
