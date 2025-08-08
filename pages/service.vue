<template>
  <div>
    <!-- Breadcrumbs -->
    <section class="bg-gray-7">
      <div class="breadcrumbs-custom box-transform-wrap context-dark">
        <div class="container">
          <h3 class="breadcrumbs-custom-title">Sản xuất khuôn mẫu</h3>
          <div class="breadcrumbs-custom-decor"></div>
        </div>
        <div class="box-transform" style="background-image: url(/images/bg-typography.jpg);"></div>
      </div>
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><a href="#">Pages</a></li>
          <li class="active">Sản xuất khuôn mẫu</li>
        </ul>
      </div>
    </section>

    <!-- Services -->
    <section class="section section-sm section-first bg-default text-left">
      <div class="container">
        <div class="row row-60">
          <div class="col-md-7 col-xl-8">
            <div class="single-service">
              <h4>Công ty HK Chính Xác</h4>
              <p>Công Ty HK là đơn vị hàng đầu trong lĩnh vực sản xuất khuôn mẫu và gia công cơ khí theo tiêu chuẩn. Chúng tôi chuyên sản xuất các loại mặt hàng gia dụng, sản phẩm cơ khí, các linh kiện, phụ tùng cho các ngành nghề ô tô, xe máy...</p>
              <div class="row row-50 flex-xl-row-reverse">
                <div class="col-xl-5">
                  <article class="team-classic">
                    <a class="team-classic-figure" href="#">
                      <img src="/images/internal/b19.jpeg" alt="" width="270" height="182"/>
                    </a>
                    <div class="team-classic-title">Liên hệ với chúng tôi để được tư vấn miễn phí!</div>
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
                  <h5 class="aside-services-title">Dịch vụ của chúng tôi</h5>
                  <ul class="list-category">
                    <li class="list-category-item">
                      <NuxtLink :class="{ active: true }" to="/services">Tất cả dịch vụ</NuxtLink>
                    </li>
                    <li class="list-category-item">
                      <a href="#">Sản xuất khuôn mẫu</a>
                    </li>
                    <li class="list-category-item">
                      <a href="#">Gia công CNC</a>
                    </li>
                    <li class="list-category-item">
                      <a href="#">Sản xuất sản phẩm nhựa</a>
                    </li>
                    <li class="list-category-item">
                      <a href="#">Thiết kế khuôn mẫu</a>
                    </li>
                    <li class="list-category-item">
                      <a href="#">Bảo trì và sửa chữa</a>
                    </li>
                    <li class="list-category-item">
                      <a href="#">Tư vấn kỹ thuật</a>
                    </li>
                  </ul>
                </div>
                <div class="aside-item col-sm-6 col-md-12">
                  <h5 class="aside-services-title">Liên hệ chúng tôi</h5>
                  <!-- Box contacts-->
                  <div class="box-contacts">
                    <div class="box-contacts-item">
                      <div class="box-contacts-title">Tư vấn miễn phí</div>
                      <div class="unit unit-spacing-xs flex-column flex-md-row">
                        <div class="unit-left"><span class="icon icon-24 mdi mdi-phone"></span></div>
                        <div class="unit-body">
                          <a class="phone" href="tel:0982102088">0982102088 | 0329809522</a>
                        </div>
                      </div>
                    </div>
                    <div class="box-contacts-item">
                      <div class="box-contacts-title">Văn phòng</div>
                      <div class="unit unit-spacing-xs flex-column flex-md-row">
                        <div class="unit-left"><span class="icon icon-28 mdi mdi-map-marker"></span></div>
                        <div class="unit-body">
                          <a class="address" href="#">21, Huu Cuoc, O Dien, Ha Noi City</a>
                        </div>
                      </div>
                    </div>
                    <div class="box-contacts-item">
                      <div class="box-contacts-title">E-mail</div>
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
                  <h5 class="aside-services-title">Tài liệu công ty</h5>
                  <NuxtLink class="button button-lg button-icon button-icon-left button-primary button-winona" to="/contact">
                    <span class="icon mdi mdi-download"></span>
                    <span>Tải xuống</span>
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
            <h4>Bạn có câu hỏi? Liên hệ chúng tôi</h4>
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
                    <label class="form-label" for="contact-your-name-4">Họ và tên*</label>
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
                    <label class="form-label" for="contact-email-4">Email*</label>
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
                    <label class="form-label" for="contact-company-name-4">Tên công ty*</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-wrap">
                    <input v-model="contactForm.phone" 
                           class="form-input" 
                           id="contact-phone-4" 
                           type="text" 
                           name="phone">
                    <label class="form-label" for="contact-phone-4">Số điện thoại*</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-wrap">
                    <label class="form-label" for="contact-message-4">Nội dung</label>
                    <textarea v-model="contactForm.message" 
                              class="form-input textarea-lg" 
                              id="contact-message-4" 
                              name="message" 
                              required></textarea>
                  </div>
                </div>
              </div>
              <button class="button button-primary button-winona" type="submit">
                {{ isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu' }}
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

// SEO metadata
definePageMeta({
  title: 'Sản xuất khuôn mẫu - HK Chính Xác',
  description: 'Dịch vụ sản xuất khuôn mẫu chuyên nghiệp của HK Chính Xác với công nghệ hiện đại, đội ngũ chuyên gia giàu kinh nghiệm và cam kết chất lượng cao nhất.'
})

useHead({
  title: 'Sản xuất khuôn mẫu - HK Chính Xác',
  meta: [
    { name: 'description', content: 'Dịch vụ sản xuất khuôn mẫu chuyên nghiệp của HK Chính Xác với công nghệ hiện đại, đội ngũ chuyên gia giàu kinh nghiệm và cam kết chất lượng cao nhất.' },
    { property: 'og:title', content: 'Sản xuất khuôn mẫu - HK Chính Xác' },
    { property: 'og:description', content: 'Chuyên sản xuất khuôn mẫu nhựa, khuôn đúc với độ chính xác cao và hỗ trợ tư vấn kỹ thuật chuyên nghiệp' },
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
const accordionItems = [
  {
    id: 1,
    title: 'Cam kết chất lượng cao',
    content: 'Tất cả sản phẩm của chúng tôi đều được kiểm tra chất lượng nghiêm ngặt trước khi giao cho khách hàng. Chúng tôi cam kết độ chính xác đạt tiêu chuẩn, đảm bảo sự hài lòng của khách hàng.'
  },
  {
    id: 2,
    title: 'Đội ngũ chuyên nghiệp',
    content: 'Đội ngũ kỹ sư và kỹ thuật viên của chúng tôi đều có trình độ cao và kinh nghiệm dày dặn trong lĩnh vực gia công chế tạo khuôn mẫu, đồ gia dụng, jigs.'
  },
  {
    id: 3,
    title: 'Hỗ trợ 24/7',
    content: 'Chúng tôi luôn sẵn sàng hỗ trợ khách hàng 24/7, kể cả trong quá trình sản xuất và sau khi bàn giao sản phẩm.'
  },
  {
    id: 4,
    title: 'Thiết bị hiện đại',
    content: 'Chúng tôi sở hữu hệ thống máy CNC hiện đại nhất, đảm bảo độ chính xác cao nhất cho mọi sản phẩm.'
  }
]

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
    
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.')
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Có lỗi xảy ra. Vui lòng thử lại sau.')
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