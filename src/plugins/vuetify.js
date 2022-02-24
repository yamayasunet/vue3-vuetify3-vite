// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/main.scss'

// Vuetify
import { createVuetify } from 'vuetify'

// Vuetify locale
import ja from 'vuetify/lib/locale/ja';

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg'
  },
  lang: {
    locales: { ja },
    current: 'ja',
  },
})
