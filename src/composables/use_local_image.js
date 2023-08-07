import { keys, locale_domain } from '@consts'

export default async (target, locale_folder) => {
  target.forEach((elem) => {
    elem[keys.src] = `assets/${locale_folder}/${elem[keys.src]}`
    elem[keys.domain] = locale_domain
  })
}
