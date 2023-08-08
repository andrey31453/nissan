<script setup>
import { useSlots } from 'vue'
import { use_breadcrumbs } from '@composables'
import { vars } from '@consts'

const props = defineProps({
  cols: {
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

const { css_cols, css_sm, css_md, css_lg, css_xl, css_xxl } =
  use_breadcrumbs(props)

const slot = useSlots().default()
const slider_elems = slot[0].children.length
</script>

<template>
  <div class="ui_slider">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui_slider {
}
</style>
