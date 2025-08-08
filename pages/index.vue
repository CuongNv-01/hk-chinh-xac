<template>
  <div>
    <!-- Hero Banner-->
    <section class="section context-dark"
             style="background-image: url('/logo/banner.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    min-height: 600px;
                    display: flex;
                    align-items: center;">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 col-lg-6 offset-lg-1 offset-xxl-0 text-left" style="color: #2980B9; padding-left: 40px;">
            <h3 class="oh hero-title wow fadeInUp">
              <span class="d-inline-block" style="font-weight: 900; color: #2980B9">{{ t('homepage.heroTitle') }}</span>
            </h3>
            <h5 class="hero-subtitle wow fadeInLeft" data-wow-delay="0.3s" style="color: #000">
              {{ t('homepage.heroSubtitle') }}
            </h5>
            <a class="button button-lg button-primary button-winona button-shadow-2 wow fadeInUp"
               href="#"
               data-wow-delay="0.5s">{{ t('common.learnMore') }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Company-->
    <section class="section section-md bg-gray-100 text-md-left section-relative">
      <div class="container">
        <div class="row row-40 row-lg-50 row-xl-60" style="justify-content: center;">
          <div class="col-sm-6 col-lg-4" v-for="feature in features" :key="feature.id">
            <article class="box-icon-classic">
              <div class="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                <div class="unit-left">
                  <div :class="['box-icon-classic-icon', feature.icon]"></div>
                </div>
                <div class="unit-body">
                  <h5 class="box-icon-classic-title">{{ feature.title }}</h5>
                  <p class="box-icon-classic-text">{{ feature.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Equipment Section -->
    <section class="section section-lg section-equipment">
      <div class="container">
        <h3 class="oh-desktop"><span class="d-inline-block wow slideInDown">{{ t('homepage.equipmentTitle') }}</span></h3>
        <div class="row row-50 align-items-center">
          <div class="col-lg-12">
            <div class="featured-equipment-media wow fadeInLeft">
              <div class="video-wrapper">
                <video class="featured-video" poster="/images/internal/b14.jpeg" controls preload="metadata">
                  <source src="/images/internal/b16-video.mp4" type="video/mp4">
                  {{ t('homepage.videoNotSupported') }}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What we offer-->
    <section class="section section-lg bg-default hidden">
      <div class="container">
        <h3 class="oh-desktop"><span class="d-inline-block wow slideInDown">{{ t('homepage.productsServicesTitle') }}</span></h3>
        <div class="services-carousel-wrapper">
          <div class="swiper services-carousel">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(service, index) in services" :key="service.id">
                <article class="services-creative">
                  <a class="services-creative-figure">
                    <img :src="service.image" :alt="service.title + ' - HK Chính Xác'" width="370" height="274" loading="lazy"/>
                  </a>
                  <div class="services-creative-caption">
                    <h5 class="services-creative-title">{{ service.title }}</h5>
                    <p class="services-creative-text">{{ service.description }}</p>
                    <span class="services-creative-counter box-ordered-item">{{ String(index + 1).padStart(2, '0') }}</span>
                  </div>
                </article>
              </div>
            </div>
            <!-- Navigation buttons -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <!-- Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Gallery with Filters-->
    <section class="section section-lg bg-default isotope-wrap">
      <div class="container">
        <h3 class="oh-desktop"><span class="d-inline-block wow slideInUp">{{ t('homepage.productsTitle') }}</span></h3>
        <div class="isotope-filters isotope-filters-horizontal" style="margin-top: 40px;">
          <button class="isotope-filters-toggle button button-sm button-icon button-icon-right button-gray-3"
                  data-custom-toggle=".isotope-filters-list"
                  data-custom-toggle-disable-on-blur="true">
            <span class="icon mdi mdi-chevron-down"></span>{{ t('common.filter') }}
          </button>
          <ul class="isotope-filters-list">
            <li><a class="active" href="#" data-isotope-filter="*" data-isotope-group="gallery">{{ t('common.all') }}</a></li>
            <li><a href="#" data-isotope-filter="nhua" data-isotope-group="gallery">{{ t('gallery.categories.plasticProducts') }}</a></li>
            <li><a href="#" data-isotope-filter="nhom" data-isotope-group="gallery">{{ t('gallery.categories.aluminumProducts') }}</a></li>
            <li><a href="#" data-isotope-filter="may" data-isotope-group="gallery">{{ t('gallery.categories.machinery') }}</a></li>
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
          <!-- Sản phẩm Nhựa -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="nhua" v-for="i in 5" :key="`nhua-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/nhua-${i}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/nhua-${i}.jpeg`" :alt="t('gallery.altTexts.plasticProduct', { number: i })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Sản phẩm Nhôm -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="nhom" v-for="i in 6" :key="`nhom-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/nhom-${i}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/nhom-${i}.jpeg`" :alt="t('gallery.altTexts.aluminumProduct', { number: i })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Máy móc -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="may" v-for="item in ['may-1', 'may-ep-nhua', 'may-thoi', 'may-thoi-2']" :key="item">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/${item}.jpeg`" data-lightgallery="item">
                <img :src="`/images/internal/${item}.jpeg`" :alt="t('gallery.altTexts.machinery', { item })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
          <!-- Khác -->
          <div class="col-sm-6 col-lg-4 col-xxl-3 isotope-item" data-filter="khac" v-for="i in [7, 9, 10, 11, 12, 13, 14, 18, 19]" :key="`other-${i}`">
            <article class="thumbnail thumbnail-modern">
              <a class="thumbnail-modern-figure" :href="`/images/internal/b${i}.${i === 18 ? 'png' : 'jpeg'}`" data-lightgallery="item">
                <img :src="`/images/internal/b${i}.${i === 18 ? 'png' : 'jpeg'}`" :alt="t('gallery.altTexts.product', { number: i })" width="474" height="355" loading="lazy"/>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Counter -->
    <section class="section parallax-container" data-parallax-img="/images/internal/b10.jpeg">
      <div class="parallax-content section-inset-9 context-dark">
        <div class="container">
          <div class="row row-30 justify-content-center justify-content-xl-between align-items-lg-end">
            <div class="col-sm-6 col-md-3" v-for="stat in statistics" :key="stat.id">
              <div class="counter-classic">
                <h3 class="counter-classic-number">
                  <span class="counter">{{ stat.value }}</span>
                  <span class="symbol" v-if="stat.symbol">{{ stat.symbol }}</span>
                </h3>
                <h6 class="counter-classic-title">{{ stat.title }}</h6>
                <div class="counter-classic-decor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest news-->
    <section class="section section-xl bg-default text-md-left">
      <div class="container">
        <div class="tabs-custom tabs-post" id="tabs-9">
          <div class="row align-items-md-end align-items-xl-start">
            <div class="col-md-6 tab-content-3 wow fadeInUp">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tabs-9-1">
                  <div class="post-amy-figure">
                    <img src="/images/internal/b10.jpeg" :alt="t('news.altText.iso')" width="570" height="505" loading="lazy"/>
                    <a href="#"><span class="icon linearicons-link2"></span></a>
                  </div>
                </div>
                <div class="tab-pane fade" id="tabs-9-2">
                  <div class="post-amy-figure">
                    <img src="/images/internal/b11.jpeg" :alt="t('news.altText.futaba')" width="570" height="505" loading="lazy"/>
                    <a href="#"><span class="icon linearicons-link2"></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 index-1">
              <h3 class="tabs-post-title oh-desktop"><span class="d-inline-block wow slideInDown">{{ t('homepage.latestNewsTitle') }}</span></h3>
              <ul class="nav nav-tabs">
                <li class="nav-item wow fadeInRight" role="presentation" v-for="(news, index) in latestNews" :key="news.id">
                  <a class="nav-link" :class="{ active: index === 0 }" :href="`#tabs-9-${index + 1}`" data-toggle="tab"></a>
                  <div class="post-amy">
                    <h5 class="post-amy-title"><a href="#">{{ news.title }}</a></h5>
                    <ul class="post-amy-info list-inline">
                      <li class="post-amy-time">
                        <span class="icon mdi mdi-clock"></span>
                        <time :datetime="news.dateTime">{{ news.date }}</time>
                      </li>
                      <li class="post-amy-autor">
                        <span class="icon mdi mdi-account-outline"></span>
                        <a href="#">{{ news.author }}</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
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
// Use services carousel composable for stable services carousel
const { initServicesCarousel } = useServicesCarousel()

// Get i18n composable
const { t, locale } = useI18n()

// Comprehensive SEO metadata
const seoData = computed(() => ({
  title: t('seo.title'),
  description: t('seo.description'),
  keywords: t('seo.keywords'),
  image: '/logo/banner.png',
  url: 'https://cokhihk.com'
}))

useHead(() => ({
  title: seoData.value.title,
  meta: [
    // Basic SEO
    { name: 'description', content: seoData.value.description },
    { name: 'keywords', content: seoData.value.keywords },
    { name: 'author', content: t('company.name') },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: seoData.value.title },
    { property: 'og:description', content: seoData.value.description },
    { property: 'og:image', content: seoData.value.image },
    { property: 'og:url', content: seoData.value.url },
    { property: 'og:site_name', content: t('company.name') },
    { property: 'og:locale', content: locale.value === 'vi' ? 'vi_VN' : locale.value === 'en' ? 'en_US' : 'ja_JP' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoData.value.title },
    { name: 'twitter:description', content: seoData.value.description },
    { name: 'twitter:image', content: seoData.value.image },

    // Additional SEO
    { name: 'canonical', content: seoData.value.url },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },

    // Local Business SEO
    { name: 'geo.region', content: 'VN' },
    { name: 'geo.placename', content: 'Vietnam' },
    { name: 'geo.position', content: '10.762622;106.660172' },
    { name: 'ICBM', content: '10.762622, 106.660172' }
  ],
  link: [
    { rel: 'canonical', href: seoData.value.url }
  ]
}))

// Structured Data for Local Business
useSchemaOrg(() => [
  defineOrganization({
    name: t('company.name'),
    url: 'https://cokhihk.com',
    logo: '/logo/Logo_HK.svg',
    description: t('company.description'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Ho Chi Minh City',
      addressRegion: 'Ho Chi Minh',
      postalCode: '',
      addressCountry: 'VN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-xxx-xxx-xxx',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: locale.value === 'vi' ? 'Vietnamese' : locale.value === 'en' ? 'English' : 'Japanese'
    },
    sameAs: []
  }),
  defineLocalBusiness({
    name: t('company.name'),
    description: t('company.description'),
    url: 'https://cokhihk.com',
    telephone: '+84-xxx-xxx-xxx',
    address: {
      streetAddress: '',
      addressLocality: 'Ho Chi Minh City',
      addressRegion: 'Ho Chi Minh',
      postalCode: '',
      addressCountry: 'VN'
    },
    geo: {
      latitude: 10.762622,
      longitude: 106.660172
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    priceRange: '$$'
  }),
  defineWebSite({
    name: t('company.name'),
    url: 'https://cokhihk.com',
    description: seoData.value.description,
    publisher: {
      '@type': 'Organization',
      name: t('company.name')
    }
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: seoData.value.title,
    url: seoData.value.url,
    description: seoData.value.description,
    primaryImageOfPage: seoData.value.image,
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString()
  })
])

// Removed Swiper config - using static banner instead

const features = computed(() => [
  {
    id: 1,
    icon: 'linearicons-hammer-wrench',
    title: t('features.modernTech.title'),
    description: t('features.modernTech.description')
  },
  {
    id: 2,
    icon: 'linearicons-apartment',
    title: t('features.precisionEquipment.title'),
    description: t('features.precisionEquipment.description')
  },
  {
    id: 3,
    icon: 'linearicons-coin-dollar',
    title: t('features.competitivePrice.title'),
    description: t('features.competitivePrice.description')
  },
  {
    id: 4,
    icon: 'linearicons-users2',
    title: t('features.professionalTeam.title'),
    description: t('features.professionalTeam.description')
  },
  {
    id: 5,
    icon: 'linearicons-headset',
    title: t('features.dedicatedSupport.title'),
    description: t('features.dedicatedSupport.description')
  }
])

const services = computed(() => [
  {
    id: 1,
    image: '/images/internal/nhua-1.jpeg',
    title: t('services.plasticMolds.title'),
    description: t('services.plasticMolds.description')
  },
  {
    id: 2,
    image: '/images/internal/b11.jpeg',
    title: t('services.cncMachining.title'),
    description: t('services.cncMachining.description')
  },
  {
    id: 3,
    image: '/images/internal/nhua-4.jpeg',
    title: t('services.plasticProducts.title'),
    description: t('services.plasticProducts.description')
  },
  {
    id: 4,
    image: '/images/internal/b10.jpeg',
    title: t('services.technicalConsulting.title'),
    description: t('services.technicalConsulting.description')
  },
  {
    id: 5,
    image: '/images/internal/b5.jpeg',
    title: t('services.qualityControl.title'),
    description: t('services.qualityControl.description')
  },
  {
    id: 6,
    image: '/images/internal/b6.jpeg',
    title: t('services.warrantySupport.title'),
    description: t('services.warrantySupport.description')
  }
])

const statistics = computed(() => [
  { id: 1, value: 50, symbol: '+', title: t('statistics.customers') },
  { id: 2, value: 100, symbol: '%', title: t('statistics.qualityGuarantee') },
  { id: 3, value: 3, symbol: '', title: t('statistics.internationalStandards') }
])

const latestNews = computed(() => [
  {
    id: 1,
    title: t('news.isoTitle'),
    dateTime: '2025-01-15',
    date: '15/01/2025',
    author: t('news.author')
  },
  {
    id: 2,
    title: t('news.newProductTitle'),
    dateTime: '2025-01-15',
    date: '15/01/2025',
    author: t('news.author')
  }
])

// Plugin handles initialization now
onMounted(() => {
  // Trigger resize to fix any layout issues
  if (typeof window !== 'undefined') {
    setTimeout(async () => {
      window.dispatchEvent(new Event('resize'))
      // Initialize gallery after other plugins
      await initGallery()
      // Initialize services carousel
      initServicesCarousel()
    }, 1000)
  }
})

</script>

<style scoped>
.hero-banner {
  position: relative;
  overflow: hidden;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(120deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.25) 100%);
  z-index: 1;
}

.hero-banner .container {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 0 rgba(255,255,255,0.6);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5);
}

/* Equipment section styling */
.section-equipment {
  background: radial-gradient(1000px 300px at 50% 0, rgba(15, 23, 42, 0.06), transparent);
}

.section-equipment h3 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 800;
  color: #111827;
  margin-bottom: 24px;
}

.featured-equipment-media {
  display: flex;
  justify-content: center;
}

 .video-wrapper {
   width: 100%;
   max-width: 1200px;
   aspect-ratio: 16 / 9;
   margin: 0 auto;
   background: #ffffff;
   border-radius: 12px;
   overflow: hidden;
   box-shadow: 0 24px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
   border: 1px solid rgba(0,0,0,0.06);
 }

 .featured-video {
   width: 100%;
   height: 100%;
   display: block;
   object-fit: cover;
   object-position: center;
   border-radius: 0;
 }

/* Services Carousel Styling */
.services-carousel-wrapper {
  position: relative;
  margin-top: 50px;
}

.services-carousel {
  overflow: visible;
  padding: 0 50px;
}

.services-carousel .swiper-button-next,
.services-carousel .swiper-button-prev {
  color: #2980B9;
  background: #ffffff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  margin-top: -22px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}

.services-carousel .swiper-button-next:after,
.services-carousel .swiper-button-prev:after {
  font-size: 16px;
  font-weight: bold;
}

.services-carousel .swiper-button-next:hover,
.services-carousel .swiper-button-prev:hover {
  background: #2980B9;
  color: #ffffff;
  transform: scale(1.1);
}

.services-carousel .swiper-pagination {
  position: static;
  margin-top: 30px;
}

.services-carousel .swiper-pagination-bullet {
  background: #2980B9;
  opacity: 0.3;
  width: 12px;
  height: 12px;
  margin: 0 4px;
  transition: all 0.3s ease;
}

.services-carousel .swiper-pagination-bullet-active {
  opacity: 1;
  transform: scale(1.2);
}

.services-creative {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.services-creative:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.services-creative-figure {
  display: block;
  overflow: hidden;
}

.services-creative-figure img {
  width: 100%;
  height: 274px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.services-creative:hover .services-creative-figure img {
  transform: scale(1.05);
}

.services-creative-caption {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.services-creative-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.services-creative-text {
  color: #666;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
}

.services-creative-counter {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #2980B9;
  color: #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-banner {
    min-height: 400px;
  }

  .services-carousel {
    padding: 0 20px;
  }

  .services-carousel .swiper-button-next,
  .services-carousel .swiper-button-prev {
    display: none;
  }
}

/* Floating Action Buttons */
.fab-group {
	position: fixed;
	right: 16px;
	bottom: 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	z-index: 1000;
}

.fab {
	width: 52px;
	height: 52px;
	border-radius: 9999px;
	border: none;
	outline: none;
	background: #2980B9;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08);
	cursor: pointer;
	transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.fab:hover {
	transform: translateY(-2px);
	box-shadow: 0 14px 28px rgba(0,0,0,0.18), 0 6px 12px rgba(0,0,0,0.12);
}

.fab .mdi {
	font-size: 24px;
	line-height: 1;
}

.fab-zalo {
	background: #ffffff;
}

.fab-zalo img {
	width: 28px;
	height: 28px;
	display: block;
}

.fab-top {
	background: #111827;
}

@media (max-width: 768px) {
	.fab-group {
		right: 12px;
		bottom: 12px;
		gap: 10px;
	}
	.fab {
		width: 48px;
		height: 48px;
	}
}
</style>