<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title">{{ t('contactPage.pageTitle') }}</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/images/bg-typography.jpg);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink :to="localePath('/')">{{ t('contactPage.breadcrumbs.home') }}</NuxtLink></li>
          <li><a href="#">{{ t('contactPage.breadcrumbs.pages') }}</a></li>
          <li class="active">{{ t('contactPage.breadcrumbs.contacts') }}</li>
        </ul>
      </div>
    </section>

    <!-- Contacts -->
    <section class="section section-lg bg-default text-md-left">
      <div class="container">
        <div class="row row-60 justify-content-center">
          <div class="col-lg-8">
            <h4 class="text-spacing-25 text-transform-none">{{ t('contactPage.title') }}</h4>
            <form class="rd-form rd-mailform" @submit.prevent="submitForm">
              <div class="row row-20 gutters-20">
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input
                      v-model="form.name"
                      class="form-input"
                      id="contact-your-name-5"
                      type="text"
                      name="name"
                      required
                    >
                    <label class="form-label" for="contact-your-name-5">{{ t('contactPage.form.name') }}*</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input
                      v-model="form.email"
                      class="form-input"
                      id="contact-email-5"
                      type="email"
                      name="email"
                      required
                    >
                    <label class="form-label" for="contact-email-5">{{ t('contactPage.form.email') }}*</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <select v-model="form.service" class="form-input" required>
                      <option value="">{{ t('contactPage.form.selectService') }}</option>
                      <option value="plasticMolds">{{ t('contactPage.form.serviceOptions.plasticMolds') }}</option>
                      <option value="cncMachining">{{ t('contactPage.form.serviceOptions.cncMachining') }}</option>
                      <option value="plasticProducts">{{ t('contactPage.form.serviceOptions.plasticProducts') }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input
                      v-model="form.phone"
                      class="form-input"
                      id="contact-phone-5"
                      type="text"
                      name="phone"
                    >
                    <label class="form-label" for="contact-phone-5">{{ t('contactPage.form.phone') }}*</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-wrap">
                    <label class="form-label" for="contact-message-5">{{ t('contactPage.form.message') }}</label>
                    <textarea
                      v-model="form.message"
                      class="form-input textarea-lg"
                      id="contact-message-5"
                      name="message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <button class="button button-secondary button-winona" type="submit">
                {{ isSubmitting ? t('contactPage.form.sending') : t('contactPage.form.send') }}
              </button>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="aside-contacts">
              <div class="row row-30">
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">{{ t('contactPage.info.social') }}</p>
                  <ul class="list-inline contacts-social-list list-inline-sm">
                    <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                    <li><a class="icon mdi mdi-twitter" href="#"></a></li>
                    <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                    <li><a class="icon mdi mdi-google-plus" href="#"></a></li>
                  </ul>
                </div>
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">{{ t('contactPage.info.phone') }}</p>
                  <div class="unit unit-spacing-xs justify-content-center justify-content-md-start">
                    <div class="unit-left"><span class="icon mdi mdi-phone"></span></div>
                    <div class="unit-body">
                      <a class="phone" href="tel:0982102088">0982102088</a><br>
                      <a class="phone" href="tel:0329809522">0329809522</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">{{ t('contactPage.info.email') }}</p>
                  <div class="unit unit-spacing-xs justify-content-center justify-content-md-start">
                    <div class="unit-left"><span class="icon mdi mdi-email-outline"></span></div>
                    <div class="unit-body">
                      <a class="mail" href="mailto:cokhichinhxachk@gmail.com">cokhichinhxachk@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">{{ t('contactPage.info.address') }}</p>
                  <div class="unit-body">
                    <a class="address" href="#"><br class="d-md-none">21, Huu Cuoc, O Dien, Ha Noi City</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Use i18n
const { t } = useI18n()
const localePath = useLocalePath()

// SEO metadata
useHead(() => ({
  title: t('contactPage.seo.title'),
  meta: [
    { name: 'description', content: t('contactPage.seo.description') },
    { property: 'og:title', content: t('contactPage.seo.ogTitle') },
    { property: 'og:description', content: t('contactPage.seo.ogDescription') },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
}))

// Form data
const form = ref({
  name: '',
  email: '',
  service: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

// Form submission handler
const submitForm = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true

  try {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset form after successful submission
    form.value = {
      name: '',
      email: '',
      service: '',
      phone: '',
      message: ''
    }

    alert(t('contactPage.form.successMessage'))

  } catch (error) {
    console.error('Form submission error:', error)
    alert(t('contactPage.form.errorMessage'))
  } finally {
    isSubmitting.value = false
  }
}
</script>