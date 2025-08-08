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

    <AppHeader />

    <slot />

    <AppFooter />

    <!-- Global Floating Zalo Button -->
    <a class="global-fab-zalo" href="https://zalo.me/0982102088" target="_blank" rel="noopener" aria-label="Zalo HK Chính Xác">
      <img src="/images/internal/zalo.webp" alt="Zalo" width="50" height="50" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const loading = ref(true)
const route = useRoute()
const { fixLayout } = useLayoutFix()

onMounted(() => {
  // Hid
  // e loader after page loads
  setTimeout(() => {
    loading.value = false
    fixLayout()
  }, 200)
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
}
</style>