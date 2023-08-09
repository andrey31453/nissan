<script setup>
import { onMounted, ref, useSlots } from 'vue'
import { use_breakpoint_props } from './composables'
import { vars } from '@consts'
import { vBreakpoint, vResize } from '@directives'

const props = defineProps({
  xs: {
    type: String,
    default: vars.xs,
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

const { _xs, _sm, _md, _lg, _xl, _xxl } = use_breakpoint_props(props)

const slot = useSlots().default()

const elems_quantity = slot[0].children.length

const slider = ref(null)

const get_elem_width = (count) => {
  return `calc(${slider.value.offsetWidth / count}px - ${count - 1} * ${
    vars.distance
  })`
}

const elem_width = ref(null)
onMounted(() => {
  elem_width.value = get_elem_width(3)
})

const on_breakpoint = (b) => {
  console.log(b)
}

const on_resize = (w) => {
  console.log(w)
}
</script>

<template>
  <div
    ref="slider"
    class="ui_slider"
    v-breakpoint="on_breakpoint"
    v-resize="on_resize"
  >
    <div class="ui_slider__wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_slider {
  height: 360px;
  width: 100%;
  position: relative;
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
