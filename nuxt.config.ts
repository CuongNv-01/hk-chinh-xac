// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: {
    strict: true,
    shim: false
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/i18n'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      htmlAttrs: {
        lang: 'vi',
        class: 'wide wow-animation'
      },
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#2980B9' },
        { name: 'theme-color', content: '#2980B9' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: 'HK Chính Xác' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'distribution', content: 'global' },
        { name: 'rating', content: 'general' },
        { name: 'geo.region', content: 'VN' },
        { name: 'geo.country', content: 'Vietnam' },
        { name: 'language', content: 'Vietnamese' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo/Logo_HK.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo/Logo_HK.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo/Logo_HK.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo/Logo_HK.svg' },
        { rel: 'canonical', href: 'https://cokhihk.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,300i,400,500,600,700,900%7CRaleway:500&display=swap' }
      ],
      script: [
        // Core scripts will be loaded via plugin to ensure jQuery is available
        { src: '/js/init.js', defer: true }
      ]
    }
  },

  css: [
    './assets/css/bootstrap.css',
    './assets/css/fonts.css',
    './assets/css/style.css'
  ],

  // i18n Configuration
  i18n: {
    locales: [
      {
        code: 'vi',
        name: 'Tiếng Việt',
        file: 'vi.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ja',
        name: '日本語',
        file: 'ja.json'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'vi',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // SEO Configuration
  site: {
    url: 'https://cokhihk.com',
    name: 'HK Chính Xác',
    description: 'Công ty Cơ Khí Chính Xác HK chuyên sản xuất khuôn nhựa, nhôm, dập, đồ giá, jig kiểm với độ chính xác cao. Gia công CNC và sản xuất sản phẩm nhựa công nghiệp tại Việt Nam.',
    defaultLocale: 'vi'
  },

  // Sitemap Configuration
  sitemap: {
    hostname: 'https://cokhihk.com',
    gzip: true,
    routes: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString()
      },
      {
        url: '/about',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      {
        url: '/services',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString()
      },
      {
        url: '/gallery',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      },
      {
        url: '/privacy-policy',
        changefreq: 'yearly',
        priority: 0.3,
        lastmod: new Date().toISOString()
      }
    ]
  },

  // Robots Configuration
  robots: {
    rules: [
      {
        UserAgent: '*',
        Allow: '/',
        Disallow: [
          '/_nuxt/',
          '/api/',
          '/.well-known/'
        ],
        Sitemap: 'https://cokhihk.com/sitemap.xml'
      },
      {
        UserAgent: 'Googlebot',
        Allow: '/'
      },
      {
        UserAgent: 'Bingbot',
        Allow: '/'
      },
      {
        UserAgent: 'facebookexternalhit',
        Allow: '/'
      },
      {
        UserAgent: 'Twitterbot',
        Allow: '/'
      },
      {
        UserAgent: ['AhrefsBot', 'MJ12bot', 'SemrushBot'],
        Disallow: '/'
      }
    ],
    sitemap: 'https://cokhihk.com/sitemap.xml'
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/contact',
        '/privacy-policy',
        '/gallery',
        '/services',
        '/service',
        // English routes
        '/en',
        '/en/about',
        '/en/contact',
        '/en/privacy-policy',
        '/en/gallery',
        '/en/services',
        '/en/service',
        // Japanese routes
        '/ja',
        '/ja/about',
        '/ja/contact',
        '/ja/privacy-policy',
        '/ja/gallery',
        '/ja/services',
        '/ja/service'
      ]
    }
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false
  }
})
