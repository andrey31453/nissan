<script setup>
import { ui_wrapper, ui_button, ui_background } from '@ui'
</script>

<template>
  <div class="background">
    <ui_background color="alter">
      <ui_background background="mounts">
        <ui_background background="model_name">
          <ui_wrapper
            container
            end
          >
            <ui_button> Тест-драйв </ui_button>
          </ui_wrapper>
        </ui_background>
      </ui_background>
    </ui_background>
  </div>
</template>

<style lang="scss" scoped>
.background {
  height: 542px;
}
</style>
