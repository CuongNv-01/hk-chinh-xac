<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title">{{ t('privacyPage.title') }}</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/images/bg-typography.jpg);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">{{ t('privacyPage.breadcrumbs.home') }}</NuxtLink></li>
          <li><a href="#">{{ t('privacyPage.breadcrumbs.pages') }}</a></li>
          <li class="active">{{ t('privacyPage.breadcrumbs.privacyPolicy') }}</li>
        </ul>
      </div>
    </section>

    <!-- Privacy Policy -->
    <section class="section section-lg bg-default text-md-left">
      <div class="container">
        <h3>{{ t('privacyPage.title') }}</h3>
        <!-- Terms list-->
        <dl class="list-terms">
          <dt class="heading-6">{{ t('privacyPage.sections.generalInfo.title') }}</dt>
          <dd>
            {{ t('privacyPage.sections.generalInfo.content') }}
          </dd>

          <dt class="heading-6">{{ t('privacyPage.sections.dataAccess.title') }}</dt>
          <dd>
            {{ t('privacyPage.sections.dataAccess.content') }}
          </dd>

          <dt class="heading-6">{{ t('privacyPage.sections.dataManagement.title') }}</dt>
          <dd>
            {{ t('privacyPage.sections.dataManagement.content') }}
          </dd>

          <dt class="heading-6">{{ t('privacyPage.sections.dataCollection.title') }}</dt>
          <dd>
            {{ t('privacyPage.sections.dataCollection.content') }}
          </dd>

          <dt class="heading-6">{{ t('privacyPage.sections.dataUsage.title') }}</dt>
          <dd>
            {{ t('privacyPage.sections.dataUsage.content') }}
          </dd>

          <dt class="heading-6">{{ t('privacyPage.sections.dataSharing.title') }}</dt>
          <dd>
            {{ t('privacyPage.sections.dataSharing.content') }}
          </dd>
        </dl>
        <a class="privacy-link" :href="`mailto:cokhichinhxachk@gmail.com`">cokhichinhxachk@gmail.com</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Import i18n composable
const { t } = useI18n()

useHead({
  title: () => t('privacyPage.seo.title'),
  meta: [
    { name: 'description', content: () => t('privacyPage.seo.description') },
    { property: 'og:title', content: () => t('privacyPage.seo.ogTitle') },
    { property: 'og:description', content: () => t('privacyPage.seo.ogDescription') },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>