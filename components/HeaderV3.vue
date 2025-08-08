<template>
  <header class="header-v3">
    <!-- Top Bar -->
    <div class="header-top">
      <div class="container">
        <div class="header-top-content">
          <div class="header-contact">
            <div class="contact-item">
              <i class="mdi mdi-phone"></i>
              <a href="tel:0982102088">0982102088 | 0329809522</a>
            </div>
            <div class="contact-item">
              <i class="mdi mdi-map-marker"></i>
              <span>21, Huu Cuoc, O Dien, Ha Noi City</span>
            </div>
          </div>
          <div class="header-social">
            <a href="#" class="social-link"><i class="mdi mdi-facebook"></i></a>
            <a href="#" class="social-link"><i class="mdi mdi-instagram"></i></a>
            <a href="#" class="social-link"><i class="mdi mdi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="header-main" :class="{ 'header-scrolled': isScrolled }">
      <div class="container">
        <div class="header-main-content">
          <!-- Logo -->
          <div class="header-logo">
            <NuxtLink :to="localePath('/')">
              <img src="/logo/Logo_HK.svg" :alt="t('company.name')" />
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <nav class="header-nav desktop-nav">
            <ul class="nav-list">
              <li class="nav-item">
                <NuxtLink :to="localePath('/')" class="nav-link" :class="{ active: isCurrentRoute('/') }">
                  {{ t('common.home') }}
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink :to="localePath('/about')" class="nav-link" :class="{ active: isCurrentRoute('/about') }">
                  {{ t('common.aboutUs') }}
                </NuxtLink>
              </li>
              <li class="nav-item has-dropdown">
                <NuxtLink :to="localePath('/services')" class="nav-link" :class="{ active: isCurrentRoute('/services') }">
                  {{ t('common.services') }}
                  <!-- <i class="mdi mdi-chevron-down"></i> -->
                </NuxtLink>
                <ul class="dropdown-menu">
                  <li>
                    <NuxtLink :to="localePath('/service?type=mold')" class="dropdown-link">
                      {{ t('services.plasticMolds.title') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="localePath('/service?type=cnc')" class="dropdown-link">
                      {{ t('services.cncMachining.title') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="localePath('/service?type=plastic')" class="dropdown-link">
                      {{ t('services.plasticProducts.title') }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink :to="localePath('/gallery')" class="nav-link" :class="{ active: isCurrentRoute('/gallery') }">
                  {{ t('common.gallery') }}
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink :to="localePath('/contact')" class="nav-link" :class="{ active: isCurrentRoute('/contact') }">
                  {{ t('common.contact') }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Language Switcher & Mobile Toggle -->
          <div class="header-actions">
            <LanguageSwitcher />
            <button
              class="mobile-toggle"
              @click="toggleMobileMenu"
              :class="{ active: isMobileMenuOpen }"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ active: isMobileMenuOpen }">
      <div class="mobile-nav-content">
        <ul class="mobile-nav-list">
          <li>
            <NuxtLink :to="localePath('/')" @click="closeMobileMenu" :class="{ active: isCurrentRoute('/') }">
              {{ t('common.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')" @click="closeMobileMenu" :class="{ active: isCurrentRoute('/about') }">
              {{ t('common.aboutUs') }}
            </NuxtLink>
          </li>
          <li class="has-submenu">
            <a @click="toggleSubmenu" class="submenu-toggle">
              {{ t('common.services') }}
              <i class="mdi mdi-chevron-down" :class="{ rotate: isSubmenuOpen }"></i>
            </a>
            <ul class="submenu" :class="{ active: isSubmenuOpen }">
              <li>
                <NuxtLink :to="localePath('/service?type=mold')" @click="closeMobileMenu">
                  {{ t('services.plasticMolds.title') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/service?type=cnc')" @click="closeMobileMenu">
                  {{ t('services.cncMachining.title') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/service?type=plastic')" @click="closeMobileMenu">
                  {{ t('services.plasticProducts.title') }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink :to="localePath('/gallery')" @click="closeMobileMenu" :class="{ active: isCurrentRoute('/gallery') }">
              {{ t('common.gallery') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')" @click="closeMobileMenu" :class="{ active: isCurrentRoute('/contact') }">
              {{ t('common.contact') }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Contact Info -->
        <div class="mobile-contact">
          <div class="contact-item">
            <i class="mdi mdi-phone"></i>
            <a href="tel:0982102088">0982102088 | 0329809522</a>
          </div>
          <div class="contact-item">
            <i class="mdi mdi-email"></i>
            <a href="mailto:cokhichinhxachk@gmail.com">cokhichinhxachk@gmail.com</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isSubmenuOpen = ref(false)

// Check if current route matches the given path
const isCurrentRoute = (path: string) => {
  const currentPath = route.path
  const cleanPath = currentPath.replace(/^\/[a-z]{2}/, '')
  return cleanPath === path || (path === '/' && cleanPath === '')
}

// Handle scroll events
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isSubmenuOpen.value = false
  document.body.style.overflow = ''
}

const toggleSubmenu = () => {
  isSubmenuOpen.value = !isSubmenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header-v3 {
  position: relative;
  z-index: 1000;
}

/* Top Bar */
.header-top {
  background: #1a1a1a;
  color: #ffffff;
  padding: 8px 0;
  font-size: 14px;
}

.header-top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-contact {
  display: flex;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-item i {
  color: #2980B9;
  font-size: 16px;
}

.contact-item a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #2980B9;
}

.header-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #ffffff;
  font-size: 18px;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #2980B9;
}

/* Main Header */
.header-main {
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease;
}

.header-main.header-scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.header-main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.header-logo img {
  height: 40px;
  width: auto;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #333333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #2980B9;
}

/* Dropdown */
.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 1rem 0;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  list-style: none;
  margin: 0;
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #333333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.dropdown-link:hover {
  background: #f8f9fa;
  color: #2980B9;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: #333333;
  transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1001;
  overflow-y: auto;
}

.mobile-nav.active {
  right: 0;
}

.mobile-nav-content {
  padding: 2rem;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-list li {
  margin-bottom: 0.5rem;
}

.mobile-nav-list a {
  display: block;
  padding: 1rem;
  color: #333333;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.mobile-nav-list a:hover,
.mobile-nav-list a.active {
  background: #f8f9fa;
  color: #2980B9;
}

.submenu-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.submenu-toggle i.rotate {
  transform: rotate(180deg);
}

.submenu {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.submenu.active {
  max-height: 200px;
}

.submenu a {
  padding: 0.75rem 1rem 0.75rem 2rem;
  font-size: 14px;
}

.mobile-contact {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.mobile-contact .contact-item {
  margin-bottom: 1rem;
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width: 768px) {
  .header-top {
    display: none;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .header-contact {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 100%;
    right: -100%;
  }

  .header-logo img {
    height: 35px;
  }
}
</style>