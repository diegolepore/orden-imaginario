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
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap' }
    ],
    script: [
      // { 
      //   hid:"Cookiebot",
      //   src:"https://consent.cookiebot.com/uc.js",
      //   'data-cbid':"d93979b6-041e-418c-b0a2-22288722e242",
      //   'data-blockingmode':"auto",
      //   type:"text/javascript"
      // },
      // {
      //   hid:"CookieDeclaration",
      //   src:"https://consent.cookiebot.com/d93979b6-041e-418c-b0a2-22288722e242/cd.js",
      //   type:"text/javascript",
      //   defer: true
      // }
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

  // gtm: {
  //   id: 'GTM-5NVQW24'
  // },

  // googleAnalytics: {
  //   id: 'G-7BCZJMXWZ5'
  // }
}
