<script setup>
import { keys } from '@consts'

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },

  domain: {
    type: [Boolean, String],
    default: false,
  },
})

// image props
const src = props.domain
  ? `${props.domain}${props.image[keys.src]}`
  : props.image[keys.src]
const alt = props.image[keys.alt]
</script>

<template>
  <img
    :src="src"
    :alt="alt"
  />
</template>
