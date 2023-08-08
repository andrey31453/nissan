import { keys, locale_domain, assets_folder } from '@consts'

export default async (target, locale_folder) => {
  target.forEach((elem) => {
    elem[keys.src] = `${assets_folder}/${locale_folder}/${elem[keys.src]}`
    elem[keys.domain] = locale_domain
  })
}
