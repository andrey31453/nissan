<script setup>
import { keys } from '@consts'

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },

  domain: {
    type: String,
    required: true,
  },
})

import { ui_wrapper, ui_image } from '@ui'
</script>

<template>
  <ui_wrapper gap="3">
    <ui_image
      :image="feature"
      :domain="feature[keys.domain] || domain"
    />

    <span>
      {{ feature.description }}
    </span>
  </ui_wrapper>
</template>
