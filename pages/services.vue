<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title" style="color: #000; font-weight: 900;">{{ t('servicesPage.pageTitle') }}</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/logo/banner.png);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">{{ t('common.home') }}</NuxtLink></li>
          <li><a href="#">Pages</a></li>
          <li class="active">{{ t('common.services') }}</li>
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
// i18n composable
const { t } = useI18n()

useHead({
  title: computed(() => `${t('servicesPage.pageTitle')} - ${t('company.name')}`),
  meta: [
    { name: 'description', content: computed(() => t('servicesPage.subtitle')) },
    { property: 'og:title', content: computed(() => `${t('servicesPage.pageTitle')} - ${t('company.name')}`) },
    { property: 'og:description', content: computed(() => t('servicesPage.subtitle')) },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})

// Services data using translations
const services = computed(() => [
  {
    id: 1,
    title: t('services.plasticMolds.title'),
    description: t('services.plasticMolds.description'),
    image: '/images/internal/nhua-1.jpeg',
    icon: 'mdi mdi-road-variant'
  },
  {
    id: 2,
    title: t('services.cncMachining.title'),
    description: t('services.cncMachining.description'),
    image: '/images/internal/b13.jpeg',
    icon: 'mdi mdi-home-modern'
  },
  {
    id: 3,
    title: t('services.plasticProducts.title'),
    description: t('services.plasticProducts.description'),
    image: '/images/internal/may-1.jpeg',
    icon: 'mdi mdi-worker'
  },
  {
    id: 4,
    title: t('services.technicalConsulting.title'),
    description: t('services.technicalConsulting.description'),
    image: '/images/internal/nhom-4.jpeg',
    icon: 'mdi mdi-home'
  },
  {
    id: 5,
    title: t('services.warrantySupport.title'),
    description: t('services.warrantySupport.description'),
    image: '/images/internal/nhom-1.jpeg',
    icon: 'mdi mdi-ungroup'
  },
  {
    id: 6,
    title: t('services.qualityControl.title'),
    description: t('services.qualityControl.description'),
    image: '/images/internal/b11.jpeg',
    icon: 'mdi mdi-math-compass'
  }
])
</script>