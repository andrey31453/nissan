<script setup>
import { ui_wrapper, ui_h } from '@ui'
import { vMark } from '@directives'

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <ui_wrapper
    gap="3"
    center
  >
    {{ feature }}
  </ui_wrapper>
</template>
