<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title" style="color: #000; font-weight: 900;">Dịch vụ của chúng tôi</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/logo/banner.png);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><a href="#">Pages</a></li>
          <li class="active">Dịch vụ</li>
        </ul>
      </div>
    </section>

    <!-- Services 2 -->
    <section class="section section-lg bg-default">
      <div class="container">
        <div class="row row-40 justify-content-center">
          <div class="col-md-6 col-lg-5 col-xl-4" v-for="service in services" :key="service.id">
            <!-- Services Classic-->
            <article class="services-classic">
              <img :src="service.image" 
                   :alt="service.title" 
                   width="370" 
                   height="274" 
                   style="width: 370px; height: 274px; object-fit: cover;"/>
              <div class="services-classic-caption">
                <div class="unit align-items-lg-center">
                  <div class="unit-left">
                    <span :class="['services-classic-icon', service.icon]"></span>
                  </div>
                  <div class="unit-body">
                    <h5 class="services-classic-title">
                      <NuxtLink to="/service">{{ service.title }}</NuxtLink>
                    </h5>
                    <p class="services-classic-text">{{ service.description }}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO metadata
definePageMeta({
  title: 'Dịch vụ - HK Chính Xác',
  description: 'Các dịch vụ chuyên nghiệp của HK Chính Xác: sản xuất khuôn mẫu, gia công CNC, sản phẩm nhựa, thiết kế khuôn mẫu, bảo trì sửa chữa và tư vấn kỹ thuật.'
})

useHead({
  title: 'Dịch vụ - HK Chính Xác',
  meta: [
    { name: 'description', content: 'Các dịch vụ chuyên nghiệp của HK Chính Xác: sản xuất khuôn mẫu, gia công CNC, sản phẩm nhựa, thiết kế khuôn mẫu, bảo trì sửa chữa và tư vấn kỹ thuật.' },
    { property: 'og:title', content: 'Dịch vụ - HK Chính Xác' },
    { property: 'og:description', content: 'Tìm hiểu về các dịch vụ gia công cơ khí chính xác, sản xuất khuôn mẫu và tư vấn kỹ thuật chuyên nghiệp' },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})

// Services data
const services = [
  {
    id: 1,
    title: 'Sản xuất khuôn mẫu',
    description: 'Khuôn ép nhựa, khuôn đúc tiêu chuẩn',
    image: '/images/internal/nhua-1.jpeg',
    icon: 'mdi mdi-road-variant'
  },
  {
    id: 2,
    title: 'Gia công CNC chính xác',
    description: 'Công nghệ CNC tiên tiến, độ chính xác cao',
    image: '/images/internal/b13.jpeg',
    icon: 'mdi mdi-home-modern'
  },
  {
    id: 3,
    title: 'Sản phẩm nhựa',
    description: 'Sản phẩm nhựa chất lượng cao',
    image: '/images/internal/may-1.jpeg',
    icon: 'mdi mdi-worker'
  },
  {
    id: 4,
    title: 'Thiết kế khuôn mẫu',
    description: 'Thiết kế 3D/CAD/CAM chuyên nghiệp',
    image: '/images/internal/nhom-4.jpeg',
    icon: 'mdi mdi-home'
  },
  {
    id: 5,
    title: 'Bảo trì và sửa chữa',
    description: 'Dịch vụ bảo trì khuôn mẫu định kỳ',
    image: '/images/internal/nhom-1.jpeg',
    icon: 'mdi mdi-ungroup'
  },
  {
    id: 6,
    title: 'Tư vấn kỹ thuật',
    description: 'Tư vấn giải pháp tối ưu cho sản xuất',
    image: '/images/internal/b11.jpeg',
    icon: 'mdi mdi-math-compass'
  }
]
</script>