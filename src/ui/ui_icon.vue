<script setup>
import { icons } from './assets'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  size: {
    type: Number,
    default: 20,
  },

  variant: {
    type: String,
    default: 'default',
  },
})

const svg = icons[props.icon]
const css_size = `${props.size}px`
</script>

<template>
  <template v-if="svg">
    <div
      v-html="svg"
      class="ui_icon"
    />
  </template>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_icon {
  @include utils.size(v-bind(css_size));

  & > :deep(svg) {
    @include utils.size(v-bind(css_size), 'max');

    fill: currentColor;
  }
}
</style>
