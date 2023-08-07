<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'fill',
  },
})
</script>

<template>
  <button class="ui_button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use '@styles/classes';

.ui_button {
  @include classes.button(v-bind(variant));
}
</style>
