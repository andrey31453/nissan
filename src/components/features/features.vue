<script setup>
import { api } from '@consts'
import { use_fetch } from '@composables'
import { use_car_store } from '@store'

import { ui_wrapper, ui_h, ui_slider, ui_error, ui_row } from '@ui'
import feature from '../feature/feature'

//
// features api
//

console.log(
  'use_fetch(api.features',
  await use_fetch(api.features, { key: 'd' })
)

const car_store = use_car_store()
const [error, features, title] = await use_fetch(api.features, { key: 'd' })
console.log('features: ', features)
console.log('title: ', title)
console.log('error: ', error.value)

// const error = null
// const features = []
// const title = ''
console.log('features: ', features)
</script>

<template>
  <ui_wrapper gap="6">
    <ui_h h2> {{ title }} </ui_h>

    <ui_error :error="error">
      <ui_row
        col="1"
        md="2"
        lg="3"
      >
        <template
          v-for="(feature, idx) in features"
          :key="idx"
        >
          <feature :feature="feature" />
        </template>
      </ui_row>
    </ui_error>
  </ui_wrapper>
</template>
