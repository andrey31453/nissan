import { models } from '@consts'

const validate_wrapper = (cb, ...props) => {
  if (!cb()) console.error('dont correct props: ', ...props)
}

export default {
  model: (m) => validate_wrapper(() => models.includes(m), m),
}
