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
</script>

<template>
  <div>
    <slot />
  </div>
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
