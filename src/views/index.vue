<script setup>
import { banner, benefits, features } from '@components'
import { ui_async } from '@ui'
import { use_car_store } from '@store'

const car_store = use_car_store()
</script>

<template>
  <banner :model="car_store.current_model" />
  <benefits :model="car_store.current_model" />

  <ui_async>
    <features :model="car_store.current_model" />
  </ui_async>
</template>
