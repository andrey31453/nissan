<script setup>
import { use_color, use_background } from './composables'

const props = defineProps({
  color: {
    type: [Boolean, String],
    default: false,
  },

  background: {
    type: [Boolean, String],
    default: false,
  },

  center: {
    type: Boolean,
    default: false,
  },
})

const color_style = use_color(props.color)
const background_style = use_background(props.background)
</script>

<template>
  <div
    :class="[
      'ui_background',
      {
        '--center': center,
      },
    ]"
    :style="color_style || background_style"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_background {
  height: 100%;
}
</style>
