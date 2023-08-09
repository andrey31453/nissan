import { computed } from 'vue'

const get_on_breakpoint = () => (b) => {
  console.log(b)
}

const get_has_slider = (visible_count, elem_count) =>
  computed(() => visible_count.value < elem_count.value)

export default (visible_count, elem_count) => {
  const on_breakpoint = get_on_breakpoint()
  const has_slider = get_has_slider(visible_count, elem_count)

  console.log('elem_count.value: ', elem_count.value)
  console.log('visible_count.value: ', visible_count.value)

  return {
    on_breakpoint,
    has_slider,
  }
}
