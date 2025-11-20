import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const useServicesCarousel = () => {
  let swiperInstance: Swiper | null = null
  
  const initServicesCarousel = () => {
    if (typeof window === 'undefined') return
    
    nextTick(() => {
      const carouselElement = document.querySelector('.services-carousel')
      if (carouselElement && !swiperInstance) {
        swiperInstance = new Swiper(carouselElement as HTMLElement, {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            576: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
          observer: true,
          observeParents: true,
          watchOverflow: true,
        })
        
        // Handle resize events
        const handleResize = () => {
          if (swiperInstance) {
            swiperInstance.update()
          }
        }
        
        window.addEventListener('resize', handleResize)
        
        // Store resize handler for cleanup
        ;(swiperInstance as any).resizeHandler = handleResize
      }
    })
  }
  
  const destroyServicesCarousel = () => {
    if (swiperInstance) {
      // Remove resize handler
      if ((swiperInstance as any).resizeHandler) {
        window.removeEventListener('resize', (swiperInstance as any).resizeHandler)
      }
      
      swiperInstance.destroy(true, true)
      swiperInstance = null
    }
  }
  
  onMounted(() => {
    setTimeout(initServicesCarousel, 300)
  })
  
  onUnmounted(() => {
    destroyServicesCarousel()
  })
  
  return {
    initServicesCarousel,
    destroyServicesCarousel
  }
}