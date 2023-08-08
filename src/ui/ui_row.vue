<script setup>
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
</script>

<template>
  <div class="ui_row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_row {
  @include utils.row(
    v-bind(gap),
    v-bind(css_cols),
    v-bind(css_sm),
    v-bind(css_md),
    v-bind(css_lg),
    v-bind(css_xl),
    v-bind(css_xxl)
  );
}
</style>
