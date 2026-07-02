<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title" style="color: #fff; font-weight: 900;">{{ t('galleryPage.title') }}</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/logo/banner.png);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink :to="localePath('/')">{{ t('common.home') }}</NuxtLink></li>
          <li><a href="#">Projects</a></li>
          <li class="active">{{ t('common.gallery') }}</li>
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
            <span class="icon mdi mdi-chevron-down"></span>{{ t('common.filter') }}
          </button>
          <ul class="isotope-filters-list">
            <li><a class="active" href="#" data-isotope-filter="may" data-isotope-group="gallery">{{ t('gallery.categories.machinery') }}</a></li>
            <li><a href="#" data-isotope-filter="co-khi" data-isotope-group="gallery">{{ t('gallery.categories.mechanical') }}</a></li>
            <li><a href="#" data-isotope-filter="nhom" data-isotope-group="gallery">{{ t('gallery.categories.aluminumProducts') }}</a></li>
            <li><a href="#" data-isotope-filter="nhua" data-isotope-group="gallery">{{ t('gallery.categories.plasticProducts') }}</a></li>
            <li><a href="#" data-isotope-filter="khac" data-isotope-group="gallery">{{ t('gallery.categories.others') }}</a></li>
          </ul>
        </div>
      </div>
      <div class="container-fluid container-inset-0">
        <div class="row row-30 row-desktop-8 gutters-8 isotope"
             data-isotope-layout="masonry"
             data-column-class=".col-1"
             data-lightgallery="group">
          <div class="col-1 isotope-item isotope-sizer"></div>
          <!-- Máy móc -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="may" v-for="item in [0,1,4,8,10,11,12]" :key="item">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/new/may-moc/${item}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/new/may-moc/${item}.jpeg`" :alt="t('gallery.altTexts.machinery', { item })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Máy móc (new-2) -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="may" v-for="n in 8" :key="`may-new2-${n}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/new-2/${n}.png`" data-lightgallery="item">
                <img :src="`/images/internal/new-2/${n}.png`" :alt="t('gallery.altTexts.machinery', { item: n })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Cơ khí -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="co-khi" v-for="i in coKhiImages" :key="`co-khi-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/new/co-khi/${i}.jpg`" data-lightgallery="item">
                <img :src="`/images/internal/new/co-khi/${i}.jpg`" :alt="t('gallery.altTexts.mechanical', { number: i })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Sản phẩm Nhôm -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="nhom" v-for="i in [1,2,3,4,5,6,7,8,9,10,11]" :key="`nhom-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/new/san-pham-nhom/${i}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/new/san-pham-nhom/${i}.jpeg`" :alt="t('gallery.altTexts.aluminumProduct', { number: i })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Sản phẩm Nhựa -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="nhua" v-for="i in [1,2,5,6,7]" :key="`nhua-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/new/san-pham-nhua/${i}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/new/san-pham-nhua/${i}.jpeg`" :alt="t('gallery.altTexts.plasticProduct', { number: i })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Khác -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="khac" v-for="i in [2,3,5,6,7,9]" :key="`other-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/new/${i}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/new/${i}.jpeg`" :alt="t('gallery.altTexts.product', { number: i })" width="474" height="355" loading="lazy"/>
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

// Use i18n composable
const { t } = useI18n()
const localePath = useLocalePath()

// Use gallery composable for stable gallery functionality
const { initGallery } = useGallery()

// Cơ khí gallery: only images that exist in public/images/internal/new/co-khi/
const coKhiImages = [1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,30,31,32,33,34,35,36,37,38,39,40,41,42,43]

// SEO metadata with computed
useHead(() => ({
  title: `${t('galleryPage.pageTitle')} - ${t('company.name')}`,
  meta: [
    { name: 'description', content: `${t('galleryPage.subtitle')} - ${t('seo.description')}` },
    { property: 'og:title', content: `${t('galleryPage.pageTitle')} - ${t('company.name')}` },
    { property: 'og:description', content: `${t('galleryPage.subtitle')} - ${t('company.description')}` },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
}))

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

<style scoped>
/* Uniform gallery tiles — same width & height across all tabs/categories */
.isotope-wrap .thumbnail-modern {
  height: 100%;
  margin-bottom: 0;
}

.isotope-wrap .thumbnail-modern-figure {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 6px;
}

.isotope-wrap .thumbnail-modern-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.isotope-wrap .thumbnail-modern-figure:hover img {
  transform: scale(1.05);
}
</style>

