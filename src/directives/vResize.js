import { vars } from '@consts'
import { ref } from 'vue'
import { use_app_store } from '@store'

const get_window_breakpoint = (width, breakpoints) => {
  return Object.keys(breakpoints).reduce((acc, breakpoint_key) => {
    if (width > breakpoints[breakpoint_key]) {
      acc = breakpoint_key
    }

    return acc
  }, null)
}

const not_changed_active_breakpoint = ({
  active_breakpoint,
  width,
  breakpoints,
}) => {
  const window_breakpoint = get_window_breakpoint(width, breakpoints)

  return active_breakpoint.value === window_breakpoint
}

const on_resize = ({ cb, width, breakpoints, active_breakpoint }) => {
  if (
    not_changed_active_breakpoint({ active_breakpoint, width, breakpoints })
  ) {
    return void 0
  }
}

const call_on_resize = ({ el, breakpoints, active_breakpoint, binding }) => {
  const width = document.documentElement.clientWidth

  on_resize({ el, width, breakpoints, active_breakpoint })
}

export default {
  mounted: (el) => {
    const app_store = use_app_store()
    const { breakpoints } = vars
    const active_breakpoint = ref(null)

    const call_on_resize_props = {
      app_store,
      el,
      breakpoints,
      active_breakpoint,
    }

    window.addEventListener('resize', () =>
      call_on_resize(call_on_resize_props)
    )
    call_on_resize(call_on_resize_props)
  },
}
