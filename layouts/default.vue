<template>
  <div class="page">
    <!-- Page Loader -->
    <div class="page-loader" v-if="loading">
      <div class="page-loader-body">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
          <div class="spinner-layer spinner-red">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
          <div class="spinner-layer spinner-yellow">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
          <div class="spinner-layer spinner-green">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HeaderV3 />

    <slot />

    <AppFooter />

    <!-- Back to Top Button -->
    <div class="ui-to-top ui-to-top-modern" :class="{ 'active': showBackToTop }" @click="scrollToTop">
      <span class="icon mdi mdi-arrow-up"></span>
    </div>

    <!-- Global Floating Zalo Button -->
    <a class="global-fab-zalo" href="https://zalo.me/0982102088" target="_blank" rel="noopener" aria-label="Zalo HK Chính Xác">
      <img src="/images/internal/zalo.webp" alt="Zalo" width="50" height="50" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const loading = ref(true)
const route = useRoute()
const showBackToTop = ref(false)
const { fixLayout } = useLayoutFix()

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Handle scroll events for back to top button
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

onMounted(() => {
  // Hide loader after page loads
  setTimeout(() => {
    loading.value = false
    fixLayout()
  }, 200)

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
})

// Clean up scroll listener
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Fix layout on route change
watch(() => route.path, () => {
  fixLayout()
})
</script>

<style scoped>
.global-fab-zalo {
	position: fixed;
	right: 40px;
	bottom: 110px; /* keep space above UItoTop */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	border-radius: 9999px;
	background: #ffffff;
	box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08);
	z-index: 1000;
	transition: transform 0.15s ease, box-shadow 0.2s ease;
}

.global-fab-zalo:hover {
	transform: translateY(-2px);
	box-shadow: 0 14px 28px rgba(0,0,0,0.18), 0 6px 12px rgba(0,0,0,0.12);
}

.global-fab-zalo img {
	width: 28px;
	height: 28px;
	display: block;
}

/* Back to Top Button */
.ui-to-top {
	position: fixed;
	right: 40px;
	bottom: 40px;
	width: 52px;
	height: 52px;
	border-radius: 9999px;
	background: #2980B9;
	color: #ffffff;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08);
	cursor: pointer;
	transition: all 0.3s ease;
	z-index: 999;
	opacity: 0;
	visibility: hidden;
	transform: translateY(20px);
}

.ui-to-top.active {
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}

.ui-to-top:hover {
	background: #1a5f8a;
	transform: translateY(-2px);
	box-shadow: 0 14px 28px rgba(0,0,0,0.18), 0 6px 12px rgba(0,0,0,0.12);
}

.ui-to-top .icon {
	font-size: 24px;
	line-height: 1;
}

@media (max-width: 768px) {
	.global-fab-zalo {
		right: 12px;
		bottom: 74px;
		width: 48px;
		height: 48px;
	}
	.global-fab-zalo img {
		width: 26px;
		height: 26px;
	}

	.ui-to-top {
		right: 12px;
		bottom: 12px;
		width: 48px;
		height: 48px;
	}
}
</style>