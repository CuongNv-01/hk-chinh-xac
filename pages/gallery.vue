<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title" style="color: #000; font-weight: 900;">Sản phẩm của chúng tôi</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/logo/banner.png);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><a href="#">Projects</a></li>
          <li class="active">Sản phẩm</li>
        </ul>
      </div>
    </section>

    <!-- Product Gallery with Filters -->
    <section class="section section-lg bg-default isotope-wrap">
      <div class="container">
        <div class="isotope-filters isotope-filters-horizontal" style="margin-top: 40px;">
          <button class="isotope-filters-toggle button button-sm button-icon button-icon-right button-gray-3"
                  data-custom-toggle=".isotope-filters-list"
                  data-custom-toggle-disable-on-blur="true">
            <span class="icon mdi mdi-chevron-down"></span>Filter
          </button>
          <ul class="isotope-filters-list">
            <li><a class="active" href="#" data-isotope-filter="*" data-isotope-group="gallery">Tất Cả</a></li>
            <li><a href="#" data-isotope-filter="nhua" data-isotope-group="gallery">Sản Phẩm Nhựa</a></li>
            <li><a href="#" data-isotope-filter="nhom" data-isotope-group="gallery">Sản Phẩm Nhôm</a></li>
            <li><a href="#" data-isotope-filter="may" data-isotope-group="gallery">Thiết Bị & Máy Móc</a></li>
            <li><a href="#" data-isotope-filter="khac" data-isotope-group="gallery">Khác</a></li>
          </ul>
        </div>
      </div>
      <div class="container-fluid container-inset-0">
        <div class="row row-30 row-desktop-8 gutters-8 isotope"
             data-isotope-layout="masonry"
             data-column-class=".col-1"
             data-lightgallery="group">
          <div class="col-1 isotope-item isotope-sizer"></div>
          <!-- Sản phẩm Nhựa -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="nhua" v-for="i in 5" :key="`nhua-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/nhua-${i}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/nhua-${i}.jpeg`" alt="" width="474" height="355"/>
              </a>
            </article>
          </div>
          <!-- Sản phẩm Nhôm -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="nhom" v-for="i in 6" :key="`nhom-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/nhom-${i}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/nhom-${i}.jpeg`" alt="" width="474" height="355"/>
              </a>
            </article>
          </div>
          <!-- Máy móc -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="may" v-for="item in ['may-1', 'may-ep-nhua', 'may-thoi', 'may-thoi-2']" :key="item">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/${item}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/${item}.jpeg`" alt="" width="474" height="355"/>
              </a>
            </article>
          </div>
          <!-- Khác -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="khac" v-for="i in [7, 9, 10, 11, 12, 13, 14, 18, 19]" :key="`other-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/b${i}.${i === 18 ? 'png' : 'jpeg'}`" data-lightgallery="item">
                <img :src="`/images/internal/b${i}.${i === 18 ? 'png' : 'jpeg'}`" alt="" width="474" height="355"/>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Use gallery composable for stable gallery functionality
const { initGallery } = useGallery()

// SEO metadata
definePageMeta({
  title: 'Sản phẩm - HK Chính Xác',
  description: 'Thư viện hình ảnh sản phẩm của HK Chính Xác - khuôn mẫu nhựa, sản phẩm gia công CNC chính xác và các sản phẩm nhựa công nghiệp chất lượng cao.'
})

useHead({
  title: 'Sản phẩm - HK Chính Xác',
  meta: [
    { name: 'description', content: 'Thư viện hình ảnh sản phẩm của HK Chính Xác - khuôn mẫu nhựa, sản phẩm gia công CNC chính xác và các sản phẩm nhựa công nghiệp chất lượng cao.' },
    { property: 'og:title', content: 'Sản phẩm - HK Chính Xác' },
    { property: 'og:description', content: 'Xem thư viện sản phẩm đa dạng của HK Chính Xác với chất lượng cao và độ chính xác hoàn hảo' },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})

// Initialize gallery functionality
onMounted(() => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
      // Initialize gallery after other plugins
      initGallery()
    }, 1000)
  }
})
</script>

