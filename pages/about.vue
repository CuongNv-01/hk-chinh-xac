<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title" style="color: #000; font-weight: 900;">{{ t('about.pageTitle') }}</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/logo/banner.png);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">{{ t('common.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about">{{ t('common.aboutUs') }}</NuxtLink></li>
          <li class="active">{{ t('about.pageTitle') }}</li>
        </ul>
      </div>
    </section>

    <!-- About -->
    <section class="section section-lg bg-default">
      <div class="container">
        <div class="tabs-custom row row-50 justify-content-center flex-lg-row-reverse text-center text-md-left" id="tabs-4">
          <div class="col-lg-4 col-xl-3">
            <h5 class="text-spacing-200">{{ t('about.experienceTitle') }}</h5>
            <ul class="nav list-category list-category-down-md-inline-block">
              <li class="list-category-item wow fadeInRight" role="presentation" data-wow-delay="0s">
                <a class="active" href="#tabs-4-2" data-toggle="tab">{{ t('about.orientation') }}</a>
              </li>
              <li class="list-category-item wow fadeInRight" role="presentation" data-wow-delay=".1s">
                <a href="#tabs-4-3" data-toggle="tab">{{ t('about.goals') }}</a>
              </li>
              <li class="list-category-item wow fadeInRight" role="presentation" data-wow-delay=".2s">
                <a href="#tabs-4-1" data-toggle="tab">{{ t('about.pageTitle') }}</a>
              </li>
            </ul>
            <NuxtLink class="button button-lg button-primary button-winona" to="/contact">{{ t('common.contactUs') }}</NuxtLink>
          </div>
          <div class="col-lg-8 col-xl-9">
            <!-- Tab panes-->
            <div class="tab-content tab-content-1">
              <div class="tab-pane fade show active" id="tabs-4-2">
                <h4>{{ t('about.orientationTitle') }}</h4>
                <p>{{ t('about.orientationContent') }}</p>
                <img src="/images/internal/b19.jpeg" alt="" width="835" height="418"/>
              </div>
              <div class="tab-pane fade" id="tabs-4-3">
                <h4>{{ t('about.goalsTitle') }}</h4>
                <p>{{ t('about.goalsContent1') }}</p>
                <p>{{ t('about.goalsContent2') }}</p>
                <img src="/images/internal/nhua-1.jpeg" alt="" width="835" height="418"/>
              </div>
              <div class="tab-pane fade" id="tabs-4-1">
                <h4>{{ t('about.companyIntroTitle') }}</h4>
                <p>{{ t('about.companyIntroContent') }}</p>
                <img src="/images/internal/nhua-1.jpeg" alt="" width="835" height="418"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Icon Classic-->
    <section class="section section-lg bg-gray-100">
      <div class="container">
        <div class="row row-md row-50">
          <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay="0s">
            <article class="box-icon-classic">
              <div class="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                <div class="unit-left">
                  <div class="box-icon-classic-icon linearicons-hammer-wrench"></div>
                </div>
                <div class="unit-body">
                  <h5 class="box-icon-classic-title"><NuxtLink to="/service">{{ t('features.modernTech.title') }}</NuxtLink></h5>
                  <p class="box-icon-classic-text">{{ t('about.modernTechDescription') }}</p>
                </div>
              </div>
            </article>
          </div>
          <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay=".1s">
            <article class="box-icon-classic">
              <div class="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                <div class="unit-left">
                  <div class="box-icon-classic-icon linearicons-apartment"></div>
                </div>
                <div class="unit-body">
                  <h5 class="box-icon-classic-title"><NuxtLink to="/service">{{ t('features.precisionEquipment.title') }}</NuxtLink></h5>
                  <p class="box-icon-classic-text">{{ t('about.precisionEquipmentDescription') }}</p>
                </div>
              </div>
            </article>
          </div>
          <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay=".2s">
            <article class="box-icon-classic">
              <div class="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                <div class="unit-left">
                  <div class="box-icon-classic-icon linearicons-pencil-ruler"></div>
                </div>
                <div class="unit-body">
                  <h5 class="box-icon-classic-title"><NuxtLink to="/service">{{ t('about.internationalStandardsTitle') }}</NuxtLink></h5>
                  <p class="box-icon-classic-text">{{ t('about.internationalStandardsDescription') }}</p>
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
const { t } = useI18n()

useHead({
  title: () => `${t('about.pageTitle')} - ${t('company.name')}`,
  meta: [
    { name: 'description', content: () => t('about.seoDescription') },
    { property: 'og:title', content: () => `${t('about.pageTitle')} - ${t('company.name')}` },
    { property: 'og:description', content: () => t('about.ogDescription') },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>