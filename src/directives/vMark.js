import { vars } from '@consts'

export default {
  mounted: (el) => {
    el.style.fontFamily = vars.font_family_mark
    el.style.fontSize = vars.font_size_mark
    el.style.fontWeight = vars.font_weight_mark
    el.style.lineHeight = vars.line_height_mark
    el.style.textTransform = vars.transform_mark
  },
}
