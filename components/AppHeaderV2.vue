<template>
  <header class="v2-header">
    <!-- Topbar -->
    <div class="v2-topbar">
      <div class="v2-container v2-topbar-inner">
        <ul class="v2-contacts">
          <li class="v2-contact">
            <span class="icon mdi mdi-phone"></span>
            <a href="tel:0982102088" aria-label="Phone">0982102088 | 0329809522</a>
          </li>
          <li class="v2-contact">
            <span class="icon mdi mdi-map-marker"></span>
            <a href="#" aria-label="Address">21, Huu Cuoc, O Dien, Ha Noi City</a>
          </li>
        </ul>
        <ul class="v2-social">
          <li><a class="icon mdi mdi-facebook" href="#" aria-label="Facebook"></a></li>
          <li><a class="icon mdi mdi-twitter" href="#" aria-label="Twitter"></a></li>
          <li><a class="icon mdi mdi-instagram" href="#" aria-label="Instagram"></a></li>
          <li><a class="icon mdi mdi-google-plus" href="#" aria-label="Google Plus"></a></li>
        </ul>
      </div>
    </div>

    <!-- Main navbar -->
    <div class="v2-navbar">
      <div class="v2-container v2-navbar-inner">
        <NuxtLink class="v2-brand" :to="localePath('/')" aria-label="HK Chính Xác">
          <img src="/logo/Logo_HK.svg" :alt="t('company.name')" width="219" height="39" />
        </NuxtLink>

        <button class="v2-burger" :aria-expanded="isMenuOpen ? 'true' : 'false'" aria-label="Toggle menu" @click="toggleMenu">
          <span></span><span></span><span></span>
        </button>

        <!-- Desktop nav -->
        <nav class="v2-nav">
          <ul class="v2-nav-list">
            <li :class="['v2-nav-item', { active: isCurrentRoute('/') }]">
              <NuxtLink class="v2-nav-link" :to="localePath('/')">{{ t('common.home') }}</NuxtLink>
            </li>
            <li :class="['v2-nav-item', { active: isCurrentRoute('/about') }]">
              <NuxtLink class="v2-nav-link" :to="localePath('/about')">{{ t('common.aboutUs') }}</NuxtLink>
            </li>
            <li :class="['v2-nav-item', { active: isCurrentRoute('/services') }]">
              <NuxtLink class="v2-nav-link" :to="localePath('/services')">{{ t('common.services') }}</NuxtLink>
            </li>
            <li :class="['v2-nav-item', { active: isCurrentRoute('/gallery') }]">
              <NuxtLink class="v2-nav-link" :to="localePath('/gallery')">{{ t('common.gallery') }}</NuxtLink>
            </li>
            <li :class="['v2-nav-item', { active: isCurrentRoute('/contact') }]">
              <NuxtLink class="v2-nav-link" :to="localePath('/contact')">{{ t('common.contact') }}</NuxtLink>
            </li>
          </ul>
          <div class="v2-language">
            <LanguageSwitcher />
          </div>
        </nav>

        <!-- Mobile overlay + drawer -->
        <div class="v2-overlay" v-show="isMenuOpen" @click="closeMenu"></div>
        <aside class="v2-drawer" :class="{ open: isMenuOpen }" aria-hidden="true">
          <div class="v2-drawer-header">
            <NuxtLink class="v2-brand" :to="localePath('/')" @click="closeMenu">
              <img src="/logo/Logo_HK.svg" :alt="t('company.name')" width="180" height="32" />
            </NuxtLink>
            <button class="v2-close" aria-label="Close menu" @click="closeMenu">✕</button>
          </div>
          <nav class="v2-drawer-nav">
            <NuxtLink class="v2-drawer-link" :class="{ active: isCurrentRoute('/') }" :to="localePath('/')" @click="closeMenu">{{ t('common.home') }}</NuxtLink>
            <NuxtLink class="v2-drawer-link" :class="{ active: isCurrentRoute('/about') }" :to="localePath('/about')" @click="closeMenu">{{ t('common.aboutUs') }}</NuxtLink>
            <NuxtLink class="v2-drawer-link" :class="{ active: isCurrentRoute('/services') }" :to="localePath('/services')" @click="closeMenu">{{ t('common.services') }}</NuxtLink>
            <NuxtLink class="v2-drawer-link" :class="{ active: isCurrentRoute('/gallery') }" :to="localePath('/gallery')" @click="closeMenu">{{ t('common.gallery') }}</NuxtLink>
            <NuxtLink class="v2-drawer-link" :class="{ active: isCurrentRoute('/contact') }" :to="localePath('/contact')" @click="closeMenu">{{ t('common.contact') }}</NuxtLink>
          </nav>
          <div class="v2-drawer-lang">
            <LanguageSwitcher />
          </div>
        </aside>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

// Lock body scroll when drawer is open
watch(isMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

// Close menu on route change
watch(() => route.fullPath, () => { isMenuOpen.value = false })

const isCurrentRoute = (path: string) => {
  const currentPath = route.path
  const cleanPath = currentPath.replace(/^\/[a-z]{2}/, '')
  return cleanPath === path || (path === '/' && cleanPath === '')
}
</script>

<style scoped>
.v2-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Topbar */
.v2-topbar {
  background: #f7f7f7;
  border-bottom: 1px solid #eee;
  font-size: 13px;
}
.v2-topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
}
.v2-contacts { display: flex; gap: 22px; }
.v2-contact { display: inline-flex; align-items: center; gap: 6px; color: #333; }
.v2-contact .icon { color: #ff5200; }
.v2-social { display: flex; gap: 12px; }
.v2-social .icon { color: #444; transition: color 0.2s ease; }
.v2-social .icon:hover { color: #ff5200; }

/* Navbar */
.v2-navbar { background: #fff; border-bottom: 1px solid #f0f0f0; position: sticky; top: 0; z-index: 1200; }
.v2-navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  position: relative; /* anchor for absolute mobile elements */
}
.v2-brand img { display: block; height: 39px; }

.v2-burger {
  display: none;
  width: 44px; height: 44px;
  align-items: center; justify-content: center;
  border: 0; background: transparent; padding: 0; cursor: pointer;
}
.v2-burger span { display: block; width: 22px; height: 2px; background: #151515; margin: 4px 0; transition: background .2s ease; }

/* Desktop inline nav */
.v2-nav { display: none; align-items: center; gap: 20px; }
@media (min-width: 992px) {
  .v2-nav { display: flex; }
}
.v2-nav-list { display: flex; align-items: center; gap: 24px; }
.v2-nav-item { position: relative; }
.v2-nav-link { color: #151515; text-decoration: none; letter-spacing: .08em; }
.v2-nav-item.active .v2-nav-link { color: #151515; }
.v2-nav-item.active .v2-nav-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: -10px; height: 2px; background: #ff5200; }
.v2-language { margin-left: 12px; }

/* Mobile overlay & drawer */
.v2-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,.35); z-index: 1450; display: none;
}
.v2-overlay[style*="display: block"] { display: block; }

.v2-drawer {
  position: fixed; top: 0; left: 0; bottom: 0; width: 82%; max-width: 320px; background: #fff;
  transform: translateX(-100%); transition: transform .25s ease; z-index: 1600; box-shadow: 2px 0 24px rgba(0,0,0,.12);
  display: flex; flex-direction: column; padding: 16px 16px 24px 16px;
}
.v2-drawer.open { transform: translateX(0); }

.v2-close { border: 0; background: transparent; font-size: 20px; cursor: pointer; }
.v2-drawer-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 8px; border-bottom: 1px solid #eee; }

.v2-drawer-nav { display: flex; flex-direction: column; padding: 12px 0; }
.v2-drawer-link { padding: 12px 6px; color: #151515; text-decoration: none; letter-spacing: .08em; }
.v2-drawer-link.active { color: #ff5200; }

.v2-drawer-lang { margin-top: auto; padding-top: 12px; border-top: 1px solid #f0f0f0; }

/* Responsive tweaks */
@media (max-width: 992px) {
  .v2-burger { display: inline-flex; margin-left: auto; }
}
</style>