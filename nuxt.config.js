export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SEQUOIA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Archo - Onepage Multi-Purpose Vuejs Template' },
      { hid: 'keywords', name: 'keywords', content: 'Vue Nuxtjs template archo onepage themeforest' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],
    script: [
      { src: "/js/wow.min.js" },
      { src: "/js/isotope.pkgd.min.js" },
      { src: "/js/pace.min.js" },
      { src: "/js/splitting.min.js" },
      { src: "/js/simpleParallax.min.js" },
      { src: "/js/main.js", mode: "client" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vueAwesomeSwiper.js",
    "~/plugins/vueSlickCarousel.js",
    "~/plugins/vueVimeoPlayer.js",
    { src: "~/plugins/vueTwentyTwenty.js", mode: "client" },
    { src: "~/plugins/vueGoogleMaps.js", mode: "client" },
    { src: "~/plugins/vueEllipseProgress.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  router: {
    prefetchLinks: false
  },
  // middleware: ["auth"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyADFHq2e7t4AslCTeAcKSHW7J4EkpklHcg",
          authDomain: "sequoia-1214c.firebaseapp.com",
          projectId: "sequoia-1214c",
          storageBucket: "sequoia-1214c.appspot.com",
          messagingSenderId: "1079430348294",
          appId: "1:1079430348294:web:4af5e60a6e78bff1310d87",
          measurementId: "G-EE6RQPRB4C"
        },
        services: {
          auth: {
            initialize: {
              // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChanged',
            },
          },
          firestore: true,
          storage: true,
        }
      }
    ],
    ['@nuxtjs/axios'],
    ["vue-scrollto/nuxt", { duration: 1000 }],
    ['bootstrap-vue/nuxt', {
      icons: true
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: true,
    splitChunks: {
      layouts: true
    }
  }
}