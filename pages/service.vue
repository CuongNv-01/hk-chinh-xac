<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title">{{ serviceContent.title }}</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/images/bg-typography.jpg);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink :to="localePath('/')">{{ t('serviceDetail.breadcrumbs.home') }}</NuxtLink></li>
          <li><a href="#">{{ t('serviceDetail.breadcrumbs.pages') }}</a></li>
          <li class="active">{{ serviceContent.breadcrumb }}</li>
        </ul>
      </div>
    </section>

    <!-- Services -->
    <section class="section section-sm section-first bg-default text-left">
      <div class="container">
        <div class="row row-60">
          <div class="col-md-7 col-xl-8">
            <div class="single-service">
              <h4>{{ serviceContent.title }}</h4>
              <p>{{ serviceContent.description }}</p>
              <div class="row row-50 flex-xl-row-reverse">
                <div class="col-xl-5">
                  <article class="team-classic">
                    <a class="team-classic-figure" href="#">
                      <img src="/images/internal/b19.jpeg" alt="" width="270" height="182"/>
                    </a>
                    <div class="team-classic-title">{{ t('serviceDetail.contactCall') }}</div>
                  </article>
                </div>
                <div class="col-xl-7">
                  <!-- Bootstrap collapse-->
                  <div class="card-group-custom card-group-corporate" id="accordion3" role="tablist" aria-multiselectable="false">
                    <article v-for="(item, index) in accordionItems"
                             :key="item.id"
                             class="card card-custom card-corporate">
                      <div class="card-header" :id="`accordion3Heading${index + 1}`" role="tab">
                        <div class="card-title">
                          <a role="button"
                             :class="{ collapsed: index !== 0 }"
                             @click.prevent="toggleAccordion(index)"
                             :aria-expanded="activeAccordion === index">
                            {{ item.title }}
                            <div class="card-arrow"></div>
                          </a>
                        </div>
                      </div>
                      <div :class="['collapse', { show: activeAccordion === index }]"
                           :id="`accordion3Collapse${index + 1}`"
                           role="tabpanel"
                           :aria-labelledby="`accordion3Heading${index + 1}`">
                        <div class="card-body">
                          <p>{{ item.content }}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-xl-4">
            <div class="aside aside-services">
              <div class="row row-60">
                <div class="aside-item col-12">
                  <h5 class="aside-services-title">{{ t('serviceDetail.sidebar.servicesTitle') }}</h5>
                  <ul class="list-category">
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: serviceType === 'moldManufacturing' }" :to="localePath('/services')">{{ t('serviceDetail.sidebar.allServices') }}</NuxtLink>
                    </li>
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: serviceType === 'plasticMolds' }" :to="localePath('/service?type=plasticMolds')">{{ t('services.plasticMolds.title') }}</NuxtLink>
                    </li>
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: serviceType === 'cncMachining' }" :to="localePath('/service?type=cncMachining')">{{ t('services.cncMachining.title') }}</NuxtLink>
                    </li>
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: serviceType === 'plasticProducts' }" :to="localePath('/service?type=plasticProducts')">{{ t('services.plasticProducts.title') }}</NuxtLink>
                    </li>
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: serviceType === 'technicalConsulting' }" :to="localePath('/service?type=technicalConsulting')">{{ t('services.technicalConsulting.title') }}</NuxtLink>
                    </li>
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: serviceType === 'qualityControl' }" :to="localePath('/service?type=qualityControl')">{{ t('services.qualityControl.title') }}</NuxtLink>
                    </li>
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: serviceType === 'warrantySupport' }" :to="localePath('/service?type=warrantySupport')">{{ t('services.warrantySupport.title') }}</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div class="aside-item col-sm-6 col-md-12">
                  <h5 class="aside-services-title">{{ t('serviceDetail.sidebar.contactTitle') }}</h5>
                  <!-- Box contacts-->
                  <div class="box-contacts">
                    <div class="box-contacts-item">
                      <div class="box-contacts-title">{{ t('serviceDetail.sidebar.freeConsulting') }}</div>
                      <div class="unit unit-spacing-xs flex-column flex-md-row">
                        <div class="unit-left"><span class="icon icon-24 mdi mdi-phone"></span></div>
                        <div class="unit-body">
                          <a class="phone" href="tel:0982102088">0982102088 | 0329809522</a>
                        </div>
                      </div>
                    </div>
                    <div class="box-contacts-item">
                      <div class="box-contacts-title">{{ t('serviceDetail.sidebar.office') }}</div>
                      <div class="unit unit-spacing-xs flex-column flex-md-row">
                        <div class="unit-left"><span class="icon icon-28 mdi mdi-map-marker"></span></div>
                        <div class="unit-body">
                          <a class="address" href="#">21, Huu Cuoc, O Dien, Ha Noi City</a>
                        </div>
                      </div>
                    </div>
                    <div class="box-contacts-item">
                      <div class="box-contacts-title">{{ t('contactPage.info.email') }}</div>
                      <div class="unit unit-spacing-xs flex-column flex-md-row">
                        <div class="unit-left"><span class="icon mdi mdi-email"></span></div>
                        <div class="unit-body">
                          <a class="mail" href="mailto:cokhichinhxachk@gmail.com">cokhichinhxachk@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="aside-item col-sm-6 col-md-12">
                  <h5 class="aside-services-title">{{ t('serviceDetail.sidebar.companyDocuments') }}</h5>
                  <NuxtLink class="button button-lg button-icon button-icon-left button-primary button-winona" :to="localePath('/contact')">
                    <span class="icon mdi mdi-download"></span>
                    <span>{{ t('serviceDetail.sidebar.download') }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact us -->
    <section class="section section-sm section-last bg-default text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-8">
            <h4>{{ t('serviceDetail.contactForm.title') }}</h4>
            <form class="rd-form rd-mailform" @submit.prevent="submitForm">
              <div class="row row-20 gutters-20">
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input v-model="contactForm.name"
                           class="form-input"
                           id="contact-your-name-4"
                           type="text"
                           name="name"
                           required>
                    <label class="form-label" for="contact-your-name-4">{{ t('serviceDetail.contactForm.name') }}*</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input v-model="contactForm.email"
                           class="form-input"
                           id="contact-email-4"
                           type="email"
                           name="email"
                           required>
                    <label class="form-label" for="contact-email-4">{{ t('serviceDetail.contactForm.email') }}*</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input v-model="contactForm.company"
                           class="form-input"
                           id="contact-company-name-4"
                           type="text"
                           name="company"
                           required>
                    <label class="form-label" for="contact-company-name-4">{{ t('serviceDetail.contactForm.company') }}*</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input v-model="contactForm.phone"
                           class="form-input"
                           id="contact-phone-4"
                           type="text"
                           name="phone">
                    <label class="form-label" for="contact-phone-4">{{ t('serviceDetail.contactForm.phone') }}*</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-wrap">
                    <label class="form-label" for="contact-message-4">{{ t('serviceDetail.contactForm.message') }}</label>
                    <textarea v-model="contactForm.message"
                              class="form-input textarea-lg"
                              id="contact-message-4"
                              name="message"
                              required></textarea>
                  </div>
                </div>
              </div>
              <button class="button button-primary button-winona" type="submit">
                {{ isSubmitting ? t('serviceDetail.contactForm.submitting') : t('serviceDetail.contactForm.submit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// i18n
const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

// Get service type from query parameter or default to 'moldManufacturing'
const serviceType = computed(() => route.query.type || 'moldManufacturing')

// Dynamic service content based on service type
const serviceContent = computed(() => {
  const type = serviceType.value as string
  switch (type) {
    case 'plasticMolds':
      return {
        title: t('services.plasticMolds.title'),
        description: t('services.plasticMolds.description'),
        breadcrumb: t('services.plasticMolds.title')
      }
    case 'cncMachining':
      return {
        title: t('services.cncMachining.title'),
        description: t('services.cncMachining.description'),
        breadcrumb: t('services.cncMachining.title')
      }
    case 'plasticProducts':
      return {
        title: t('services.plasticProducts.title'),
        description: t('services.plasticProducts.description'),
        breadcrumb: t('services.plasticProducts.title')
      }
    case 'technicalConsulting':
      return {
        title: t('services.technicalConsulting.title'),
        description: t('services.technicalConsulting.description'),
        breadcrumb: t('services.technicalConsulting.title')
      }
    case 'qualityControl':
      return {
        title: t('services.qualityControl.title'),
        description: t('services.qualityControl.description'),
        breadcrumb: t('services.qualityControl.title')
      }
    case 'warrantySupport':
      return {
        title: t('services.warrantySupport.title'),
        description: t('services.warrantySupport.description'),
        breadcrumb: t('services.warrantySupport.title')
      }
    default:
      return {
        title: t('serviceDetail.pageTitle'),
        description: t('serviceDetail.companyDescription'),
        breadcrumb: t('serviceDetail.pageTitle')
      }
  }
})

// Dynamic SEO content
const dynamicSEO = computed(() => {
  const content = serviceContent.value
  return {
    title: `${content.title} - ${t('company.name')}`,
    description: content.description,
    ogTitle: `${content.title} - ${t('company.name')}`,
    ogDescription: content.description
  }
})

useHead({
  title: () => dynamicSEO.value.title,
  meta: [
    { name: 'description', content: () => dynamicSEO.value.description },
    { property: 'og:title', content: () => dynamicSEO.value.ogTitle },
    { property: 'og:description', content: () => dynamicSEO.value.ogDescription },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})

// State
const activeAccordion = ref(0)
const isSubmitting = ref(false)

// Form data
const contactForm = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: ''
})

// Accordion data
const accordionItems = computed(() => [
  {
    id: 1,
    title: t('serviceDetail.accordion.qualityCommitment.title'),
    content: t('serviceDetail.accordion.qualityCommitment.content')
  },
  {
    id: 2,
    title: t('serviceDetail.accordion.professionalTeam.title'),
    content: t('serviceDetail.accordion.professionalTeam.content')
  },
  {
    id: 3,
    title: t('serviceDetail.accordion.support247.title'),
    content: t('serviceDetail.accordion.support247.content')
  },
  {
    id: 4,
    title: t('serviceDetail.accordion.modernEquipment.title'),
    content: t('serviceDetail.accordion.modernEquipment.content')
  }
])

// Methods
const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? -1 : index
}

const submitForm = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true

  try {
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', contactForm.value)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset form after successful submission
    contactForm.value = {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    }

    alert(t('serviceDetail.contactForm.successMessage'))

  } catch (error) {
    console.error('Form submission error:', error)
    alert(t('serviceDetail.contactForm.errorMessage'))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.collapse {
  display: none;
}

.collapse.show {
  display: block;
}

.card-title a.collapsed .card-arrow {
  transform: rotate(0deg);
}

.card-title a:not(.collapsed) .card-arrow {
  transform: rotate(180deg);
}

.card-arrow {
  transition: transform 0.3s ease;
}
</style>