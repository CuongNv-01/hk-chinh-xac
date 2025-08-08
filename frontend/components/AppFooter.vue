<template>
  <!-- Page Footer-->
  <footer class="section footer-classic context-dark footer-classic-2">
    <div class="footer-classic-content">
      <div class="container">
        <div class="row row-50 row-lg-0 no-gutters">
          <div class="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0s">
            <div class="footer-classic-header">
              <h6 class="footer-classic-title">Liên kết nhanh</h6>
            </div>
            <div class="footer-classic-body">
              <ul class="footer-classic-list d-inline-block d-sm-block">
                <li><NuxtLink to="/about">Về chúng tôi</NuxtLink></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Đội ngũ</a></li>
                <li><NuxtLink to="/contact">Liên hệ</NuxtLink></li>
              </ul>
              <ul class="list-inline footer-social-list">
                <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                <li><a class="icon mdi mdi-twitter" href="#"></a></li>
                <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                <li><a class="icon mdi mdi-google-plus" href="#"></a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay=".1s">
            <div class="footer-classic-header">
              <div class="box-width-230">
                <h6 class="footer-classic-title">Thông tin liên hệ</h6>
              </div>
            </div>
            <div class="footer-classic-body">
              <div class="box-width-230">
                <div class="footer-classic-contacts">
                  <div class="footer-classic-contacts-item">
                    <div class="unit unit-spacing-sm align-items-center">
                      <div class="unit-left"><span class="icon icon-24 mdi mdi-phone"></span></div>
                      <div class="unit-body"><a class="phone" href="tel:0982102088">0982102088 | 0329809522</a></div>
                    </div>
                  </div>
                  <div class="footer-classic-contacts-item">
                    <div class="unit unit-spacing-sm align-items-center">
                      <div class="unit-left"><span class="icon mdi mdi-email"></span></div>
                      <div class="unit-body"><a class="mail" href="mailto:cokhichinhxachk@gmail.com">cokhichinhxachk@gmail.com</a></div>
                    </div>
                  </div>
                </div>
                <NuxtLink class="button button-sm button-primary button-winona" to="/contact">Yêu cầu báo giá sản phẩm</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-classic-panel">
      <div class="container">
        <!-- Rights-->
        <p class="rights">
          <span>&copy;&nbsp;</span>
          <span class="copyright-year">{{ currentYear }}</span>
          <span>&nbsp;</span>
          <span>HK Chính Xác</span>
          <span>.&nbsp;</span>
          <NuxtLink to="/privacy-policy">Chính sách bảo mật</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>