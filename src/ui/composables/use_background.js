import { backgrounds } from '@consts'

export default (background, current_model) => {
  if (!background) return void 0

  return {
    backgroundImage: `url(${backgrounds[background](current_model)})`,
  }
}
