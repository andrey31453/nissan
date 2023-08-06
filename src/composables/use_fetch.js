import { ref } from 'vue'

//
// helpers
//

// fetch_data
const fetch_data = async (api) => {
  return await fetch(api.url, {
    method: api.method,
  })
    .then((r) => r)
    .catch((e) => e)
}

// working_data
const working_methods = {
  json: (v) => v.json(),
}

const working_data = async (data, api) => {
  const working_method = api.type ?? 'json'

  return await working_methods[working_method](data)
}

// select_data
const not_select_data = (data) => {}

const select_data = (data, selection) => {
  if (!selection) return not_select_data(data)

  return [[1, 2], 'eeee']
}

//
// general
//

export default async (api, selection = null) => {
  console.log('selection: ', selection)
  const error = ref(null)

  let bd_data = null
  try {
    bd_data = await fetch_data(api)
    console.log('bd_data: ', bd_data)
  } catch (e) {
    error.value = e
  }

  const data = ref(null)
  const working_bd_data = working_data(bd_data, api)

  return [error, ...select_data(working_bd_data, selection)]
}
