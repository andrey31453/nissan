import { keys, separator } from '@consts'

const get_breadcrumb = ({ acc, props, breadcrumb, breadcrumbs_idx }) => {
  if (!breadcrumbs_idx) return props[breadcrumb]

  if (props[breadcrumb]) return props[breadcrumb]

  const pre_breadcrumb = keys.breadcrumbs[breadcrumbs_idx - 1]
  return acc[pre_breadcrumb]
}

export default (props) => {
  return keys.breadcrumbs.reduce((acc, breadcrumb, breadcrumbs_idx) => {
    acc[breadcrumb] = get_breadcrumb({
      acc,
      props,
      breadcrumb,
      breadcrumbs_idx,
    })

    return acc
  }, {})
}

// const get_breadcrumb = ({ acc, props, breadcrumb, breadcrumbs_idx }) => {
//   if (!breadcrumbs_idx) return props[breadcrumb]

//   if (props[breadcrumb]) return props[breadcrumb]

//   return acc.slice(-1)
// }

// export default (props) => {
//   console.log('props: ', props)
//   return keys.breadcrumbs.reduce((acc, breadcrumb, breadcrumbs_idx) => {
//     const current_breadcrumb = get_breadcrumb({
//       acc,
//       props,
//       breadcrumb,
//       breadcrumbs_idx,
//     })

//     return `${acc}${separator}${current_breadcrumb}`
//   }, '')
// }
