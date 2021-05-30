import path from "path";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Orden Imaginario',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href:'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Open+Sans:wght@300;400;600;700&display=swap' }
    ],
    script: [
      { 
        hid:"Cookiebot",
        src:"https://consent.cookiebot.com/uc.js",
        'data-cbid':"e21371d6-3e7a-425e-abe2-fb019b3bb6c1",
        'data-blockingmode':"auto",
        type:"text/javascript"
      },
      {
        hid:"CookieDeclaration",
        src:"https://consent.cookiebot.com/e21371d6-3e7a-425e-abe2-fb019b3bb6c1/cd.js",
        type:"text/javascript",
        defer: true
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/reset.scss', '@/assets/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/gtm',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
        /*
     ** Using frontmatter-markdown-loader here to parse md files
     */
    extend(config, ctx) {  
      config.module.rules.push(
      {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          include: path.resolve(__dirname, "content"),
          options: {
            markdownIt: {
              html: true,
            }
          }
      })
    } 
  },

  gtm: {
    id: 'GTM-M4MMT2G'
  },

  googleAnalytics: {
    id: 'G-1JEPG0Y2N7'
  }
}
