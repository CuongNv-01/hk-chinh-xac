export const useSEO = () => {
  const route = useRoute()
  const { t, locale } = useI18n()

  // Organization structured data
  const organizationSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t('company.name'),
    alternateName: t('company.fullName'),
    url: 'https://cokhihk.com',
    logo: 'https://cokhihk.com/logo/Logo_HK.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-982-102-088',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: locale.value === 'vi' ? 'Vietnamese' : locale.value === 'en' ? 'English' : 'Japanese'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21, Huu Cuoc, O Dien',
      addressLocality: 'Ha Noi',
      addressCountry: 'VN'
    },
    sameAs: [
      'https://www.facebook.com/hkchinhxac',
      'https://twitter.com/hkchinhxac'
    ]
  }))

  // Local Business structured data
  const localBusinessSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: t('company.name'),
    description: t('company.description'),
    image: 'https://cokhihk.com/logo/banner.png',
    '@id': 'https://cokhihk.com',
    url: 'https://cokhihk.com',
    telephone: '+84-982-102-088',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21, Huu Cuoc, O Dien',
      addressLocality: 'Ha Noi',
      addressCountry: 'VN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.0285,
      longitude: 105.8542
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00'
    }
  }))

  // Service structured data
  const getServiceSchema = (service: {
    name: string
    description: string
    image?: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: t('company.name')
    },
    description: service.description,
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam'
    },
    image: service.image
  })

  // Product structured data
  const getProductSchema = (product: {
    name: string
    description: string
    image: string
    category?: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: t('company.name')
    },
    manufacturer: {
      '@type': 'Organization',
      name: t('company.name')
    },
    category: product.category
  })

  // BreadcrumbList structured data
  const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  })

  // Generate page-specific meta tags
  const getPageMeta = (page: string) => {
    const baseMeta = {
      title: t('company.name'),
      description: t('company.description'),
      ogImage: '/logo/banner.png'
    }

    // Get locale-aware meta data by using translation keys
    const getLocalizedMeta = (titleKey: string, descriptionKey: string, image = '/logo/banner.png') => ({
      title: t(titleKey),
      description: t(descriptionKey),
      ogImage: image
    })

    const pageMeta: Record<string, typeof baseMeta> = {
      '/': getLocalizedMeta('seo.title', 'seo.description', '/logo/banner.png'),
      '/about': getLocalizedMeta('seo.title', 'seo.description', '/images/internal/b10.jpeg'),
      '/services': getLocalizedMeta('seo.title', 'seo.description', '/images/internal/b11.jpeg'),
      '/gallery': getLocalizedMeta('seo.title', 'seo.description', '/images/internal/nhua-1.jpeg'),
      '/contact': getLocalizedMeta('seo.title', 'seo.description', '/logo/banner.png'),
      '/privacy-policy': getLocalizedMeta('seo.title', 'seo.description', '/logo/banner.png')
    }

    return pageMeta[page] || baseMeta
  }

  return {
    organizationSchema,
    localBusinessSchema,
    getServiceSchema,
    getProductSchema,
    getBreadcrumbSchema,
    getPageMeta
  }
}