import { onMounted, ref } from 'vue'

import { vars } from '@consts'

const left = ref(null)
const left_cash = ref(0)
const is_drag = ref(false)

const left_limits = ref(null)

let drag = {
  start_left: 0,
  screen_x: 0,
  start_screen_x: 0,
}

const set_left = () => {
  left.value = `${left_cash.value}px`
}
set_left()

const set_drag_left = (screenX) => {
  const new_left = drag.start_left + screenX - drag.start_screen_x

  if (left_limits.value.start > new_left && new_left > left_limits.value.end) {
    left_cash.value = drag.start_left + screenX - drag.start_screen_x
  }
}

const get_screen_x = (e) => {
  return e.screenX || e.touches[0].screenX
}

const set_init_drag = (current_left, current_screen_x) => {
  is_drag.value = true

  drag = {
    left: current_left,
    start_left: current_left,
    screen_x: current_screen_x,
    start_screen_x: current_screen_x,
  }
}

const on_drag_start = (e) => {
  if (is_drag.value) return void 0

  const current_left = left_cash.value
  const current_screen_x = get_screen_x(e)

  set_init_drag(current_left, current_screen_x)
}

const on_drag = (e) => {
  if (!is_drag.value) return void 0

  const screenX = get_screen_x(e)
  set_drag_left(screenX)
  set_left()
}

const on_drag_end = () => {
  is_drag.value = false
}

export default ({ elem_count, visible_count, elem_width_value }) => {
  const set_left_limits = () => {
    const elem_cont_width =
      elem_width_value.value + +vars.distance.replace(/\D/g, ' ')

    left_limits.value = {
      start: elem_cont_width * (visible_count.value - 1),
      end: -elem_cont_width * (elem_count.value - 1),
    }
  }
  onMounted(set_left_limits)

  return {
    left,
    left_cash,
    is_drag,

    on_drag_start,
    on_drag,
    on_drag_end,
  }
}
