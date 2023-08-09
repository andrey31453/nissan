import { ref } from 'vue'

const active_elem = ref(0)

const get_on_breakpoint = () => (b) => {
  console.log(b)
}

const get_is_visible = (visible_count) => (elem_index) => {
  console.log('elem_index: ', elem_index)
  if (active_elem.value > elem_index) return false
  if (active_elem.value + visible_count.value <= elem_index) return false

  return true
}

export default ({ visible_count, elem_count }) => {
  console.log('visible_count: ', visible_count.value)
  const on_breakpoint = get_on_breakpoint()
  const is_visible = get_is_visible(visible_count)

  return {
    active_elem,
    on_breakpoint,
    is_visible,
  }
}
