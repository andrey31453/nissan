<script setup>
import { ui_wrapper, ui_h, ui_slider } from '@ui'
import benefit from '../benefit/benefit'

import { benefits } from './assets'
import { validates } from '@helpers'

const props = defineProps({
  model: {
    type: String,
    required: true,
  },
})

validates.model(props.model)
</script>

<template>
  <ui_wrapper
    gap="6"
    container
  >
    <!-- title -->
    <ui_h
      h1
      highlight
    >
      Мы ценим Ваше время и комфорт!
    </ui_h>
    <ui_h h1> Запишитесь на сервис Nissan онлайн </ui_h>
    <!-- /title -->

    <!-- benefit list -->
    <ui_slider
      col="1"
      md="2"
      lg="3"
      xl="4"
      gap="4"
    >
      <template
        v-for="(benefit, idx) in benefits"
        :key="idx"
      >
        <benefit :benefit="benefit" />
      </template>
    </ui_slider>
    <!-- benefit list -->
  </ui_wrapper>
</template>
