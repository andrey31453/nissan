import { ref } from 'vue'
import { keys } from '@consts'

const locale_domain = '/'
const locale_images_folder = 'assets/features'

export default ref([
  {
    description:
      'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор',
    image: `${locale_images_folder}/1.png`,
    image_alt: 'нестационарный гироскопический стабилизатор',
    [`${keys.domain}`]: locale_domain,
  },
])
