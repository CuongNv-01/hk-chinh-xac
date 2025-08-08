<template>
  <Head>
    <!-- <script type="application/ld+json" v-html="structuredData"></script> -->
  </Head>
</template>

<script setup>
const structuredData = computed(() => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hkchinhxac.com/#organization",
        "name": "HK Chính Xác",
        "alternateName": "Công Nghệ Cơ Khí Chính Xác HK",
        "url": "https://hkchinhxac.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://hkchinhxac.com/#logo",
          "url": "https://hkchinhxac.com/logo/Logo_HK.svg",
          "contentUrl": "https://hkchinhxac.com/logo/Logo_HK.svg",
          "width": 200,
          "height": 200,
          "caption": "HK Chính Xác Logo"
        },
        "image": {
          "@id": "https://hkchinhxac.com/#logo"
        },
        "description": "Công ty Cơ Khí Chính Xác HK chuyên sản xuất khuôn nhựa, nhôm, dập, đồ giá, jig kiểm với độ chính xác cao. Gia công CNC và sản xuất sản phẩm nhựa công nghiệp.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ho Chi Minh City",
          "addressRegion": "Ho Chi Minh",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.762622,
          "longitude": 106.660172
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+84-xxx-xxx-xxx",
            "contactType": "customer service",
            "areaServed": "VN",
            "availableLanguage": ["Vietnamese", "English"]
          }
        ],
        "foundingDate": "2010",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 10,
          "maxValue": 50
        },
        "knowsAbout": [
          "Plastic Injection Molding",
          "CNC Machining",
          "Aluminum Molding",
          "Precision Manufacturing",
          "Industrial Manufacturing"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Khuôn mẫu nhựa",
              "description": "Thiết kế và chế tạo khuôn ép nhựa cho ô tô, điện tử, gia dụng"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gia công CNC",
              "description": "Gia công chính xác cao với máy CNC hiện đại"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sản phẩm nhựa công nghiệp",
              "description": "Sản xuất linh kiện nhựa công nghiệp, y tế, gia dụng chất lượng cao"
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://hkchinhxac.com/#website",
        "url": "https://hkchinhxac.com",
        "name": "HK Chính Xác",
        "description": "Công ty Cơ Khí Chính Xác HK chuyên sản xuất khuôn nhựa, nhôm, dập, đồ giá, jig kiểm với độ chính xác cao.",
        "publisher": {
          "@id": "https://hkchinhxac.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://hkchinhxac.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "vi-VN"
      },
      {
        "@type": "WebPage",
        "@id": "https://hkchinhxac.com/#webpage",
        "url": "https://hkchinhxac.com",
        "name": "HK Chính Xác - Công Nghệ Cơ Khí Chính Xác | Khuôn Nhựa & Gia Công CNC",
        "isPartOf": {
          "@id": "https://hkchinhxac.com/#website"
        },
        "about": {
          "@id": "https://hkchinhxac.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://hkchinhxac.com/logo/banner.png",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-08-08",
        "description": "Công ty Cơ Khí Chính Xác HK chuyên sản xuất khuôn nhựa, nhôm, dập, đồ giá, jig kiểm với độ chính xác cao. Gia công CNC HITACHI, OKUMA, EDM Charmilles.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Trang chủ",
              "item": "https://hkchinhxac.com"
            }
          ]
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "h3"]
        },
        "inLanguage": "vi-VN"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://hkchinhxac.com/#localbusiness",
        "name": "HK Chính Xác",
        "image": [
          "https://hkchinhxac.com/logo/Logo_HK.svg",
          "https://hkchinhxac.com/logo/banner.png"
        ],
        "telephone": "+84-xxx-xxx-xxx",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ho Chi Minh City",
          "addressRegion": "Ho Chi Minh",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.762622,
          "longitude": 106.660172
        },
        "url": "https://hkchinhxac.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "$$",
        "acceptsReservations": "True",
        "currenciesAccepted": "VND",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "servesCuisine": [],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  }

  return JSON.stringify(data, null, 0)
})
</script>