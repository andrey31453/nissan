<script setup>
const props = defineProps({
  center: {
    type: Boolean,
    default: false,
  },

  gap: {
    type: String,
    default: '1',
  },
})
</script>

<template>
  <div class="ui_wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui_wrapper {
}
</style>
