import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Configure Swiper modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade])

export default defineNuxtPlugin((nuxtApp) => {
  let swiperInstances: Swiper[] = []
  
  // Helper function to set backgrounds from data-slide-bg attribute
  const setBackgrounds = (swiper: Swiper) => {
    const swipersBg = swiper.el.querySelectorAll('[data-slide-bg]')
    
    for (let i = 0; i < swipersBg.length; i++) {
      const swiperBg = swipersBg[i] as HTMLElement
      const bgImage = swiperBg.getAttribute('data-slide-bg')
      if (bgImage) {
        swiperBg.style.backgroundImage = `url(${bgImage})`
        swiperBg.style.backgroundRepeat = 'no-repeat'
        swiperBg.style.backgroundSize = 'cover'
        swiperBg.style.backgroundPosition = 'center'
        swiperBg.style.minHeight = '600px' // Ensure minimum height
      }
    }
  }
  
  // Helper function to animate captions
  const initCaptionAnimate = (swiper: Swiper) => {
    const animate = (caption: HTMLElement) => {
      return () => {
        const duration = caption.getAttribute('data-caption-duration')
        if (duration) {
          caption.style.animationDuration = duration + 'ms'
        }
        caption.classList.remove('not-animated')
        const animateClass = caption.getAttribute('data-caption-animate')
        if (animateClass) {
          caption.classList.add(animateClass)
          caption.classList.add('animated')
        }
      }
    }
    
    const initializeAnimation = (captions: NodeListOf<Element>) => {
      for (let i = 0; i < captions.length; i++) {
        const caption = captions[i] as HTMLElement
        const delay = parseInt(caption.getAttribute('data-caption-delay') || '0')
        setTimeout(animate(caption), delay)
      }
    }
    
    // Animate captions in active slide
    const activeSlide = swiper.slides[swiper.activeIndex]
    if (activeSlide) {
      const captions = activeSlide.querySelectorAll('[data-caption-animate]')
      initializeAnimation(captions)
    }
    
    // Handle slide change
    swiper.on('slideChangeTransitionStart', () => {
      // Reset animations on previous slide
      const prevSlide = swiper.slides[swiper.previousIndex]
      if (prevSlide) {
        const captions = prevSlide.querySelectorAll('[data-caption-animate]')
        captions.forEach((caption) => {
          const element = caption as HTMLElement
          element.classList.remove('animated')
          element.classList.add('not-animated')
          const animateClass = element.getAttribute('data-caption-animate')
          if (animateClass) {
            element.classList.remove(animateClass)
          }
        })
      }
      
      // Animate captions on new slide
      const activeSlide = swiper.slides[swiper.activeIndex]
      if (activeSlide) {
        const captions = activeSlide.querySelectorAll('[data-caption-animate]')
        initializeAnimation(captions)
      }
    })
  }
  
  // Clean up function
  const cleanupPlugins = () => {
    // Destroy all Swiper instances
    swiperInstances.forEach(instance => {
      if (instance && typeof instance.destroy === 'function') {
        instance.destroy(true, true)
      }
    })
    swiperInstances = []
    
    // Clean up other plugins
    if (typeof window !== 'undefined' && (window as any).$) {
      const $ = (window as any).$
      
      // Clean isotope
      $('.isotope').each(function() {
        if ($(this).data('isotope')) {
          $(this).isotope('destroy')
        }
      })
      
      // Skip owl carousel cleanup - handled by Vue composable
      // Owl Carousel is now replaced with Swiper and managed by useServicesCarousel
    }
  }
  
  // Initialize function
  const initializePlugins = () => {
    if (typeof window !== 'undefined') {
      const $ = (window as any).$
      
      if ($) {
        try {
          // Initialize Swiper with proper configuration
          $('.swiper-container').each(function(this: HTMLElement) {
            const configStr = $(this).attr('data-swiper')
            if (configStr && !this.swiper) {
              try {
                const config = JSON.parse(configStr)
                // Add default configuration with proper event handlers
                const swiperConfig = {
                  speed: 1000,
                  loop: true,
                  ...config,
                  modules: [Navigation, Pagination, Autoplay, EffectFade],
                  watchOverflow: true,
                  observer: true,
                  observeParents: true,
                  pagination: config.pagination ? {
                    ...config.pagination,
                    renderBullet: function(index: number, className: string) {
                      const pag = $(this.el).find('.swiper-pagination')
                      if (pag.attr('data-bullet-custom') === 'true') {
                        return '<span class="' + className + '">' +
                          '  <svg width="100%" height="100%" viewbox="0 0 24 24">' +
                          '    <circle class="swiper-bullet-line" cx="12" cy="12" r="10"></circle>' +
                          '    <circle class="swiper-bullet-line-2" cx="12" cy="12" r="10"></circle>' +
                          '  </svg>' +
                          '</span>'
                      } else {
                        return '<span class="' + className + '"></span>'
                      }
                    }
                  } : false,
                  on: {
                    init: function(this: Swiper) {
                      setBackgrounds(this)
                      setTimeout(() => initCaptionAnimate(this), 100)
                    }
                  }
                }
                
                const swiperInstance = new Swiper(this, swiperConfig)
                swiperInstances.push(swiperInstance)
              } catch (e) {
                console.error('Error parsing Swiper config:', e)
              }
            }
          })
          
          // Initialize RD Navbar
          if ($.fn.RDNavbar) {
            $('.rd-navbar').each(function() {
              if (!$(this).data('rd-navbar-initialized')) {
                $(this).RDNavbar()
                $(this).data('rd-navbar-initialized', true)
              }
            })
          }
          
          // Skip Owl Carousel initialization - replaced with Swiper
          // Services carousel is now managed by useServicesCarousel composable
          
          // Skip Isotope initialization - handled by Vue composable
          // Isotope is now managed by useGallery composable for better stability
          
          // Initialize WOW animations
          if ((window as any).WOW) {
            new (window as any).WOW().init()
          }
          
          // Initialize custom toggles
          if ($.fn.customToggle) {
            $('[data-custom-toggle]').customToggle()
          }
          
          // Initialize tabs
          if ($.fn.tab) {
            $('[data-toggle="tab"]').tab()
          }
          
          // Skip lightGallery initialization - handled by Vue composable
          // lightGallery is now managed by useGallery composable for better stability
          
          // Initialize counter
          if ($.fn.counter) {
            $('.counter').counter()
          }
          
          // Initialize parallax
          if ($.fn.parallax) {
            $('.parallax-container').parallax()
          }
          
          // Fix layout issues
          setTimeout(() => {
            $(window).trigger('resize')
          }, 100)
          
        } catch (e) {
          console.error('Error initializing plugins:', e)
        }
      }
    }
  }
  
  // Initialize on app mount
  nuxtApp.hook('app:mounted', () => {
    setTimeout(initializePlugins, 100)
  })
  
  // Handle page transitions
  nuxtApp.hook('page:start', () => {
    cleanupPlugins()
  })
  
  nuxtApp.hook('page:finish', () => {
    setTimeout(initializePlugins, 100)
  })
  
  // Also handle router afterEach
  nuxtApp.$router.afterEach(() => {
    setTimeout(() => {
      cleanupPlugins()
      initializePlugins()
    }, 100)
  })
})