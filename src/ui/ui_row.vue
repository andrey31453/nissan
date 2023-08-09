<script setup>
import { use_breakpoint_props } from './composables'
import { vars } from '@consts'

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
    v-bind(_xs),
    v-bind(_sm),
    v-bind(_md),
    v-bind(_lg),
    v-bind(_xl),
    v-bind(_xxl)
  );
}
</style>
