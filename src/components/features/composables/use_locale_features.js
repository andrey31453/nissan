import { computed } from 'vue'
import { locale_features } from '../consts'

export default (features) => {
  const has_locale_features = computed(() => locale_features.value.length)

  const add_locale_feature = () => {
    const current_feature = locale_features.value.shift()
    features.value.splice(1, 0, current_feature)
  }

  return {
    has_locale_features,
    add_locale_feature,
  }
}
