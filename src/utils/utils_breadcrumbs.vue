<script setup>
const props = defineProps({
  cols: {
    type: String,
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
  },
})
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
    v-bind(cols),
    v-bind(sm),
    v-bind(md),
    v-bind(lg),
    v-bind(xl),
    v-bind(xxl)
  );
}
</style>
