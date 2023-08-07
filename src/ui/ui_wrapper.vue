<script setup>
const props = defineProps({
  center: {
    type: Boolean,
    default: false,
  },

  container: {
    type: Boolean,
    default: false,
  },

  horizontal: {
    type: Boolean,
    default: false,
  },

  padding: {
    type: [Boolean, String],
    default: false,
  },

  gap: {
    type: String,
    default: '1',
  },
})
</script>

<template>
  <div
    :class="[
      'ui_wrapper',
      {
        '--horizontal': horizontal,
        '--container': container,
        '--padding': padding,
      },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_wrapper {
  // direction
  &:not(.--horizontal) {
    @include utils.f(v-bind(gap), 'col');
  }
  &.--horizontal {
    @include utils.f(v-bind(gap));
  }

  // container
  &.--container {
    // @include utils.padding(v-bind(padding));
  }

  // padding
  &.--padding {
    @include utils.padding(v-bind(padding));
  }
}
</style>
