import { ref } from 'vue'

const active_elem = ref(0)

const get_is_visible = (visible_count) => (elem_index) => {
  if (active_elem.value > elem_index) return false
  if (active_elem.value + visible_count.value <= elem_index) return false

  return true
}

export default ({ visible_count, elem_count }) => {
  const is_visible = get_is_visible(visible_count)

  return {
    active_elem,
    is_visible,
  }
}
