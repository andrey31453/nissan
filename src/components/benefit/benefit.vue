<script setup>
import { ui_wrapper, ui_h, ui_image } from '@ui'
import { vMark } from '@directives'

const props = defineProps({
  benefit: {
    type: Object,
    required: true,
    validate: (b) => b.image && b.title && b.text,
  },
})
</script>

<template>
  <ui_wrapper
    gap="3"
    center
  >
    <ui_image :image="benefit" />

    <ui_h>
      {{ benefit.title }}
    </ui_h>

    <div v-mark>
      {{ benefit.text }}
    </div>
  </ui_wrapper>
</template>
