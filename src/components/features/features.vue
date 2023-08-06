<script setup>
import { api } from '@consts'
import { use_fetch } from '@composables'
import { use_car_store } from '@store'

import { ui_wrapper, ui_h, ui_slider, ui_error, ui_row } from '@ui'
import feature from '../feature/feature'

//
// features api
//

const car_store = use_car_store()

const [error, features, title, assets_domain] = await use_fetch(
  api.features,
  {
    key: 'features',
    filter: (v) => v.model_name === car_store.current_model,
  },
  'block_heading',
  'assets_domain'
)
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
