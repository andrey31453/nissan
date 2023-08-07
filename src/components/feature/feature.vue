<script setup>
import { ui_wrapper } from '@ui'
import { keys } from '@consts'

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },

  domain: {
    type: String,
    domain: true,
  },
})

const feature_domain = props.feature[keys.domain] || props.domain
</script>

<template>
  <ui_wrapper gap="3">
    <img
      :src="feature_domain + feature.image"
      :alt="feature.image_alt"
    />

    <span>
      {{ feature.description }}
    </span>
  </ui_wrapper>
</template>
