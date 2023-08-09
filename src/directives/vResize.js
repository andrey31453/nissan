import { ref } from 'vue'

import { on_init } from '@directives:helpers'

const resize_cb = ref(null)

// helpers

const get_resize_cb = (binding) => () =>
  binding.value(document.documentElement.clientWidth)

// general

export default {
  mounted: (_, binding) => {
    resize_cb.value = get_resize_cb(binding)

    window.addEventListener('resize', resize_cb.value)
    on_init(binding.arg, resize_cb.value)
  },

  beforeUnmount: () => {
    window.removeEventListener('resize', resize_cb.value)
  },
}
