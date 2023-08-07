<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'fill',
  },
})
</script>

<template>
  <button :class="['ui_button', `--${variant}`]">
    <span>
      <slot />
    </span>

    <template v-if="variant === 'fill'">
      <span> icon </span>
    </template>
  </button>
</template>

<style lang="scss" scoped>
@use '@styles/classes';

.ui_button {
  @include classes.button();
}
</style>
