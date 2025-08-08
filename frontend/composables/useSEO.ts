export const useSEO = () => {
  const route = useRoute()
  
  // Organization structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HK Chính Xác',
    alternateName: 'Công Nghệ Cơ Khí Chính Xác HK',
    url: 'https://hkchinhxac.com',
    logo: 'https://hkchinhxac.com/logo/Logo_HK.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-982-102-088',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: 'Vietnamese'
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
  }

  // Local Business structured data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HK Chính Xác',
    description: 'Chuyên sản xuất khuôn nhựa, nhôm, dập, đồ giá, jig kiểm với độ chính xác cao',
    image: 'https://hkchinhxac.com/logo/banner.png',
    '@id': 'https://hkchinhxac.com',
    url: 'https://hkchinhxac.com',
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
  }

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
      name: 'HK Chính Xác'
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
      name: 'HK Chính Xác'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'HK Chính Xác'
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
      title: 'HK Chính Xác',
      description: 'Chuyên sản xuất khuôn nhựa, nhôm, dập, đồ giá, jig kiểm với độ chính xác cao',
      ogImage: '/logo/banner.png'
    }

    const pageMeta: Record<string, typeof baseMeta> = {
      '/': {
        title: 'HK Chính Xác - Công Nghệ Cơ Khí Chính Xác',
        description: 'HK Chính Xác chuyên sản xuất khuôn nhựa, nhôm, dập, đồ giá, jig kiểm với độ chính xác cao. Gia công CNC và sản xuất sản phẩm nhựa công nghiệp.',
        ogImage: '/logo/banner.png'
      },
      '/about': {
        title: 'Về Chúng Tôi - HK Chính Xác',
        description: 'Tìm hiểu về HK Chính Xác - nhà cung cấp giải pháp khuôn mẫu và gia công cơ khí chính xác hàng đầu tại Việt Nam.',
        ogImage: '/images/internal/b10.jpeg'
      },
      '/services': {
        title: 'Dịch Vụ - HK Chính Xác',
        description: 'Khám phá các dịch vụ của HK Chính Xác: Sản xuất khuôn mẫu, Gia công CNC, Sản xuất sản phẩm nhựa, Tư vấn kỹ thuật.',
        ogImage: '/images/internal/b11.jpeg'
      },
      '/gallery': {
        title: 'Sản Phẩm - HK Chính Xác',
        description: 'Xem danh mục sản phẩm gia công chính xác của HK Chính Xác: Sản phẩm nhựa, nhôm, thiết bị máy móc.',
        ogImage: '/images/internal/nhua-1.jpeg'
      },
      '/contact': {
        title: 'Liên Hệ - HK Chính Xác',
        description: 'Liên hệ với HK Chính Xác để được tư vấn và báo giá sản phẩm khuôn mẫu, gia công CNC chính xác.',
        ogImage: '/logo/banner.png'
      },
      '/privacy-policy': {
        title: 'Chính Sách Bảo Mật - HK Chính Xác',
        description: 'Chính sách bảo mật và điều khoản sử dụng của HK Chính Xác.',
        ogImage: '/logo/banner.png'
      }
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