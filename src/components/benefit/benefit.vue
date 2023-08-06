<script setup>
import { ui_wrapper, ui_h } from '@ui'
import { vMark } from '@directives'

const props = defineProps({
  benefit: {
    type: Object,
    required: true,
    validate: (b) => b.icon && b.title && b.text,
  },
})
</script>

<template>
  <ui_wrapper
    gap="3"
    center
  >
    <span>
      {{ benefit.icon }}
    </span>

    <ui_h>
      {{ benefit.title }}
    </ui_h>

    <div v-mark>
      {{ benefit.text }}
    </div>
  </ui_wrapper>
</template>
