import { vars } from '@consts'
import { ref } from 'vue'

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

  cb()
}

const call_on_resize = ({ breakpoints, active_breakpoint, binding }) => {
  const width = document.documentElement.clientWidth
  const cb = binding.value

  on_resize({ cb, width, breakpoints, active_breakpoint })
}

export default {
  mounted: (_, binding) => {
    const { breakpoints } = vars
    const active_breakpoint = ref(null)

    window.addEventListener('resize', () =>
      call_on_resize({ breakpoints, active_breakpoint, binding })
    )
    call_on_resize({ breakpoints, active_breakpoint, binding })
  },
}
