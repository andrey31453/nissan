<script setup>
const props = defineProps({
  h1: {
    type: Boolean,
    default: false,
  },

  h2: {
    type: Boolean,
    default: false,
  },

  h3: {
    type: Boolean,
    default: true,
  },

  highlight: {
    type: Boolean,
    default: false,
  },
})
const get_active_h = ({ h1, h2, h3 }) => {
  if (h1) return 'h1'
  if (h2) return 'h2'
  if (h3) return 'h3'

  return 'div'
}

const active_h = get_active_h(props)
</script>

<template>
  <component :is="active_h">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

h1 {
  @include utils.font('h1');
}

h2 {
  @include utils.font('h2');
}

h3 {
  @include utils.font('h3');
}
</style>
