<script setup>
import { ui_wrapper } from '@ui'
</script>

<template>
  <div class="image">
    <ui_wrapper
      container
      fluid
      end
    >
      <ui_wrapper
        horizontal
        end
      >
        <span class="image__wrapper">image__wrapper</span>
      </ui_wrapper>
    </ui_wrapper>
  </div>
</template>

<style lang="scss" scoped>
.image {
  &__wrapper {
  }
}
</style>
