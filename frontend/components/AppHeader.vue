<template>
  <!-- Page Header-->
  <header class="section page-header">
    <!-- RD Navbar-->
    <div class="rd-navbar-wrap">
      <nav class="rd-navbar rd-navbar-modern"
           data-layout="rd-navbar-fixed"
           data-sm-layout="rd-navbar-fixed"
           data-md-layout="rd-navbar-fixed"
           data-md-device-layout="rd-navbar-fixed"
           data-lg-layout="rd-navbar-fixed"
           data-lg-device-layout="rd-navbar-fixed"
           data-xl-layout="rd-navbar-static"
           data-xl-device-layout="rd-navbar-static"
           data-xxl-layout="rd-navbar-static"
           data-xxl-device-layout="rd-navbar-static"
           data-lg-stick-up-offset="150px"
           data-xl-stick-up-offset="150px"
           data-xxl-stick-up-offset="150px"
           data-lg-stick-up="true"
           data-xl-stick-up="true"
           data-xxl-stick-up="true">
        <div class="rd-navbar-inner-outer">
          <div class="rd-navbar-aside">
            <div class="rd-navbar-aside-inner">
              <ul class="rd-navbar-contacts-2">
                <li>
                  <div class="unit unit-spacing-xs">
                    <div class="unit-left"><span class="icon mdi mdi-phone"></span></div>
                    <div class="unit-body"><a class="phone" href="tel:0982102088">0982102088 | 0329809522</a></div>
                  </div>
                </li>
                <li>
                  <div class="unit unit-spacing-xs">
                    <div class="unit-left"><span class="icon mdi mdi-map-marker"></span></div>
                    <div class="unit-body"><a class="address" href="#">21, Huu Cuoc, O Dien, Ha Noi City</a></div>
                  </div>
                </li>
              </ul>
              <ul class="list-share-2">
                <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                <li><a class="icon mdi mdi-twitter" href="#"></a></li>
                <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                <li><a class="icon mdi mdi-google-plus" href="#"></a></li>
              </ul>
            </div>
          </div>
          <div class="rd-navbar-inner">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- RD Navbar Toggle-->
              <button class="rd-navbar-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
              <!-- RD Navbar Brand-->
              <div class="rd-navbar-brand">
                <NuxtLink class="brand" to="/">
                  <img class="brand-logo-dark" src="/logo/Logo_HK.svg" alt="HK Chính Xác" width="219" height="39"/>
                </NuxtLink>
              </div>
            </div>
            <div class="rd-navbar-right rd-navbar-nav-wrap">
              <div class="rd-navbar-aside d-xl-none">
                <div class="rd-navbar-aside-inner">
                  <ul class="rd-navbar-contacts-2">
                    <li>
                      <div class="unit unit-spacing-xs">
                        <div class="unit-left"><span class="icon mdi mdi-phone"></span></div>
                        <div class="unit-body"><a class="phone" href="tel:0982102088">0982102088 | 0329809522</a></div>
                      </div>
                    </li>
                    <li>
                      <div class="unit unit-spacing-xs">
                        <div class="unit-left"><span class="icon mdi mdi-map-marker"></span></div>
                        <div class="unit-body"><a class="address" href="#">21, Huu Cuoc, O Dien, Ha Noi City</a></div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-share-2">
                    <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                    <li><a class="icon mdi mdi-twitter" href="#"></a></li>
                    <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                    <li><a class="icon mdi mdi-google-plus" href="#"></a></li>
                  </ul>
                </div>
              </div>
              <div class="rd-navbar-main">
                <!-- RD Navbar Nav-->
                <ul class="rd-navbar-nav">
                  <li class="rd-nav-item" :class="{ active: $route.path === '/' }">
                    <NuxtLink class="rd-nav-link" to="/">Trang chủ</NuxtLink>
                  </li>
                  <li class="rd-nav-item" :class="{ active: $route.path === '/about' }">
                    <NuxtLink class="rd-nav-link" to="/about">Về chúng tôi</NuxtLink>
                  </li>
                  <li class="rd-nav-item" :class="{ active: $route.path === '/services' }">
                    <NuxtLink class="rd-nav-link" to="/services">Dịch vụ</NuxtLink>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <NuxtLink class="rd-dropdown-link" to="/service?type=mold">Sản xuất khuôn mẫu</NuxtLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <NuxtLink class="rd-dropdown-link" to="/service?type=cnc">Gia công CNC</NuxtLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <NuxtLink class="rd-dropdown-link" to="/service?type=plastic">Sản xuất sản phẩm nhựa</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item" :class="{ active: $route.path === '/gallery' }">
                    <NuxtLink class="rd-nav-link" to="/gallery">Sản phẩm</NuxtLink>
                  </li>
                  <li class="rd-nav-item" :class="{ active: $route.path === '/contact' }">
                    <NuxtLink class="rd-nav-link" to="/contact">Liên hệ</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rd-navbar-project-hamburger rd-navbar-project-hamburger-open rd-navbar-fixed-element-1"
                 data-multitoggle=".rd-navbar-inner"
                 data-multitoggle-blur=".rd-navbar-wrap"
                 data-multitoggle-isolate="data-multitoggle-isolate">
              <div class="project-hamburger">
                <span class="project-hamburger-arrow"></span>
                <span class="project-hamburger-arrow"></span>
                <span class="project-hamburger-arrow"></span>
              </div>
            </div>
            <div class="rd-navbar-project">
              <div class="rd-navbar-project-header">
                <h5 class="rd-navbar-project-title">Latest Projects</h5>
                <div class="rd-navbar-project-hamburger rd-navbar-project-hamburger-close"
                     data-multitoggle=".rd-navbar-inner"
                     data-multitoggle-blur=".rd-navbar-wrap"
                     data-multitoggle-isolate="data-multitoggle-isolate">
                  <div class="project-close"><span></span><span></span></div>
                </div>
              </div>
              <!-- <div class="rd-navbar-project-content rd-navbar-content hidden">
                <div>
                  <div class="row gutters-20" data-lightgallery="group">
                    <div class="col-6" v-for="i in 6" :key="i">
                      <article class="thumbnail thumbnail-creative">
                        <a :href="`/images/internal/b${i+3}.jpeg`" data-lightgallery="item">
                          <div class="thumbnail-creative-figure">
                            <img :src="`/images/internal/b${i+3}.jpeg`" alt="" width="195" height="164"/>
                          </div>
                          <div class="thumbnail-creative-caption">
                            <span class="icon thumbnail-creative-icon linearicons-magnifier"></span>
                          </div>
                        </a>
                      </article>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Initialize RD Navbar after scripts are loaded
  setTimeout(() => {
    if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn && (window as any).$.fn.RDNavbar) {
      const $ = (window as any).$
      // Remove the toggle-original class before initializing to prevent conflicts
      $('.rd-navbar-toggle').removeClass('toggle-original')
      $('.rd-navbar').RDNavbar()
    }
  }, 500)
})
</script>