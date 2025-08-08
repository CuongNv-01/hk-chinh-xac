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
                    <div class="unit-body"><a class="address" href="#">{{ t('company.address') }}</a></div>
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
                <NuxtLink class="brand" :to="localePath('/')">
                  <img class="brand-logo-dark" src="/logo/Logo_HK.svg" :alt="t('company.name')" width="219" height="39"/>
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
                        <div class="unit-body"><a class="address" href="#">{{ t('company.address') }}</a></div>
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
                  <li class="rd-nav-item" :class="{ active: isCurrentRoute('/') }">
                    <NuxtLink class="rd-nav-link" :to="localePath('/')">{{ t('common.home') }}</NuxtLink>
                  </li>
                  <li class="rd-nav-item" :class="{ active: isCurrentRoute('/about') }">
                    <NuxtLink class="rd-nav-link" :to="localePath('/about')">{{ t('common.aboutUs') }}</NuxtLink>
                  </li>
                  <li class="rd-nav-item" :class="{ active: isCurrentRoute('/services') }">
                    <NuxtLink class="rd-nav-link" :to="localePath('/services')">{{ t('common.services') }}</NuxtLink>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <NuxtLink class="rd-dropdown-link" :to="localePath('/service?type=mold')">{{ t('services.plasticMolds.title') }}</NuxtLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <NuxtLink class="rd-dropdown-link" :to="localePath('/service?type=cnc')">{{ t('services.cncMachining.title') }}</NuxtLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <NuxtLink class="rd-dropdown-link" :to="localePath('/service?type=plastic')">{{ t('services.plasticProducts.title') }}</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item" :class="{ active: isCurrentRoute('/gallery') }">
                    <NuxtLink class="rd-nav-link" :to="localePath('/gallery')">{{ t('common.gallery') }}</NuxtLink>
                  </li>
                  <li class="rd-nav-item" :class="{ active: isCurrentRoute('/contact') }">
                    <NuxtLink class="rd-nav-link" :to="localePath('/contact')">{{ t('common.contact') }}</NuxtLink>
                  </li>
                </ul>
                <!-- Language Switcher -->
                <div class="rd-navbar-language ml-3">
                  <LanguageSwitcher />
                </div>
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

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

// Check if current route matches the given path
const isCurrentRoute = (path: string) => {
  const currentPath = route.path
  // Remove language prefix for comparison
  const cleanPath = currentPath.replace(/^\/[a-z]{2}/, '')
  return cleanPath === path || (path === '/' && cleanPath === '')
}

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