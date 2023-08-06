<script setup>
const props = defineProps({
  1: {
    type: Boolean,
    default: false,
  },

  2: {
    type: Boolean,
    default: false,
  },

  3: {
    type: Boolean,
    default: false,
  },

  highlight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="">
    <slot />
  </div>
</template>
