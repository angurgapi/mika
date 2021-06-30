export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mika',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon/logo.png'  },
      
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  // '~/assets/styles/main.scss'
  ],
  styleResources: {
    scss: [
      '@/assets/styles/*.scss'
    ]
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/fontawesome',      
  ],
  fontawesome:{
    icons:{
      solid:true,
      brands:true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-agile',
    'nuxt-fontawesome',   
    ['storyblok-nuxt',
      {
        accessToken: 'B4kO4ieXQeUYVL07usmobQtt',
        cacheProvider: 'memory'
      }
    ],
    '@nuxtjs/sitemap',

  ],
  sitemap: {
    hostname: 'https://mika-nails.ru',
    gzip: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
