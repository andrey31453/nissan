import { assets_folder } from '@consts'

export default (locale_folder, image_name) => {
  console.log('dfsf')
  return `${assets_folder}/${locale_folder}/${image_name}`
}
