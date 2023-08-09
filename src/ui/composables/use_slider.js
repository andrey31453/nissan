import { ref } from 'vue'

const active_slide = ref(null)
const left = ref(null)

let drag = {
  write: false,
  left: 0,
  start_left: 0,
  screen_x: 0,
  start_screen_x: 0,
}

const set_left = () => {
  left.value = `${drag.left}px`
}
set_left()

const set_drag_left = (screenX) => {
  drag.left = drag.start_left + screenX - drag.start_screen_x
}

const get_screen_x = (e) => {
  return e.screenX || e.touches[0].screenX
}

const set_init_drag = (current_left, current_screen_x) => {
  drag = {
    write: true,
    left: current_left,
    start_left: current_left,
    screen_x: current_screen_x,
    start_screen_x: current_screen_x,
  }
}

const on_mouse_down = (e) => {
  if (drag.write) return void 0

  const current_left = drag.left
  const current_screen_x = get_screen_x(e)
  set_init_drag(current_left, current_screen_x)
}

const on_mouse_move = (e) => {
  if (!drag.write) return void 0

  const screenX = get_screen_x(e)
  set_drag_left(screenX)
  set_left()
}

const on_mouse_up = () => {
  drag.write = false
}

export default () => {
  return {
    active_slide,
    left,

    on_mouse_down,
    on_mouse_move,
    on_mouse_up,
  }
}
