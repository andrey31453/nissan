<script setup>
import { ref, onMounted, useSlots } from 'vue'

import { use_breakpoint_props } from '@composables'
import { vars } from '@consts'
import { vBreakpoint, vResize } from '@directives'
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

const slot = useSlots().default()
console.log('useSlots(): ', useSlots())

const elems_quantity = slot[0].children.length

const slider = ref(null)
const wrapper = ref(null)

const app_store = use_app_store()

const get_elem_width = () => {
  const count = breakpoints[`_${app_store.breakpoint}`]

  return `calc(${slider.value.offsetWidth / count}px - ${count - 1} * ${
    vars.distance
  })`
}
const get_slider_height = () => {
  const slider_height = [...wrapper.value.children].reduce(
    (acc, slider_elem_node) => Math.max(acc, slider_elem_node.offsetHeight),
    0
  )

  return `${slider_height}px`
}

const elem_width = ref(null)
const slider_height = ref(null)

const on_breakpoint = (b) => {
  console.log('b: ', b)
}

const on_resize = (w) => {
  elem_width.value = get_elem_width()
  slider_height.value = get_slider_height()
}
</script>

<template>
  <div
    ref="slider"
    class="ui_slider"
    v-breakpoint:init="on_breakpoint"
    v-resize:init="on_resize"
  >
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
  overflow: hidden;

  width: 100%;
  height: v-bind(slider_height);

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
