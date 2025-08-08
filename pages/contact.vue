<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title">Liên hệ</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/images/bg-typography.jpg);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><a href="#">Pages</a></li>
          <li class="active">Contacts</li>
        </ul>
      </div>
    </section>

    <!-- Contacts -->
    <section class="section section-lg bg-default text-md-left">
      <div class="container">
        <div class="row row-60 justify-content-center">
          <div class="col-lg-8">
            <h4 class="text-spacing-25 text-transform-none">Liên hệ với chúng tôi</h4>
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
                    <label class="form-label" for="contact-your-name-5">Họ và tên*</label>
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
                    <label class="form-label" for="contact-email-5">Email*</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <select v-model="form.service" class="form-input" required>
                      <option value="">Chọn dịch vụ</option>
                      <option value="khuon-mau">Khuôn mẫu nhựa</option>
                      <option value="gia-cong-cnc">Gia công CNC</option>
                      <option value="san-pham-nhua">Sản phẩm nhựa</option>
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
                    <label class="form-label" for="contact-phone-5">Số điện thoại*</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-wrap">
                    <label class="form-label" for="contact-message-5">Nội dung</label>
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
                {{ isSubmitting ? 'Đang gửi...' : 'Gửi liên hệ' }}
              </button>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="aside-contacts">
              <div class="row row-30">
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">Mạng xã hội</p>
                  <ul class="list-inline contacts-social-list list-inline-sm">
                    <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                    <li><a class="icon mdi mdi-twitter" href="#"></a></li>
                    <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                    <li><a class="icon mdi mdi-google-plus" href="#"></a></li>
                  </ul>
                </div>
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">Điện thoại</p>
                  <div class="unit unit-spacing-xs justify-content-center justify-content-md-start">
                    <div class="unit-left"><span class="icon mdi mdi-phone"></span></div>
                    <div class="unit-body">
                      <a class="phone" href="tel:0982102088">0982102088</a><br>
                      <a class="phone" href="tel:0329809522">0329809522</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">Email</p>
                  <div class="unit unit-spacing-xs justify-content-center justify-content-md-start">
                    <div class="unit-left"><span class="icon mdi mdi-email-outline"></span></div>
                    <div class="unit-body">
                      <a class="mail" href="mailto:cokhichinhxachk@gmail.com">cokhichinhxachk@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-12 aside-contacts-item">
                  <p class="aside-contacts-title">Địa chỉ</p>
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

// SEO metadata
definePageMeta({
  title: 'Liên hệ - HK Chính Xác',
  description: 'Liên hệ với HK Chính Xác để được tư vấn về dịch vụ sản xuất khuôn mẫu, gia công CNC và sản phẩm nhựa chính xác. Hotline: 0982102088 | 0329809522'
})

useHead({
  title: 'Liên hệ - HK Chính Xác',
  meta: [
    { name: 'description', content: 'Liên hệ với HK Chính Xác để được tư vấn về dịch vụ sản xuất khuôn mẫu, gia công CNC và sản phẩm nhựa chính xác. Hotline: 0982102088 | 0329809522' },
    { property: 'og:title', content: 'Liên hệ - HK Chính Xác' },
    { property: 'og:description', content: 'Liên hệ ngay để được tư vấn miễn phí về các dịch vụ gia công cơ khí chính xác' },
    { property: 'og:image', content: '/logo/banner.png' },
    { property: 'og:type', content: 'website' }
  ]
})

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
    
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.')
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Có lỗi xảy ra. Vui lòng thử lại sau.')
  } finally {
    isSubmitting.value = false
  }
}
</script>