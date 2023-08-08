<script setup>
import { ui_wrapper, ui_background } from '@ui'
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
        fluid
        end
      >
        <ui_background
          background="car"
          position="right bottom"
          :size="`${(100 * 680) / 1200}%`"
        />
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
