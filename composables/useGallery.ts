export const useGallery = () => {
  let isotopeInstance: any = null
  let lgInstance: any = null
  
  const initGallery = async () => {
    if (typeof window === 'undefined') return
    
    // Dynamic imports for client-side only
    const [{ default: Isotope }, { default: lightGallery }] = await Promise.all([
      import('isotope-layout'),
      import('lightgallery')
    ])
    
    // Import CSS dynamically
    await Promise.all([
      import('lightgallery/css/lightgallery.css'),
      import('lightgallery/css/lg-zoom.css'),
      import('lightgallery/css/lg-thumbnail.css')
    ])
    
    nextTick(() => {
      // Initialize Isotope
      const grid = document.querySelector('.isotope')
      if (grid && !isotopeInstance) {
        isotopeInstance = new Isotope(grid as Element, {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          percentPosition: true,
          masonry: {
            columnWidth: '.isotope-sizer'
          }
        })
        
        // Handle filter buttons
        const filterButtons = document.querySelectorAll('[data-isotope-filter]')
        filterButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            e.preventDefault()
            const filterValue = button.getAttribute('data-isotope-filter')
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
              btn.classList.remove('active')
              btn.parentElement?.classList.remove('active')
            })
            
            // Add active class to clicked button
            button.classList.add('active')
            button.parentElement?.classList.add('active')
            
            // Apply filter
            if (isotopeInstance) {
              if (filterValue === '*') {
                isotopeInstance.arrange({ filter: '*' })
              } else {
                isotopeInstance.arrange({ filter: `[data-filter="${filterValue}"]` })
              }
            }
          })
        })
        
        // Layout after images load
        const images = grid.querySelectorAll('img')
        let loadedImages = 0
        
        const checkAllImagesLoaded = () => {
          loadedImages++
          if (loadedImages === images.length && isotopeInstance) {
            isotopeInstance.layout()
          }
        }
        
        images.forEach(img => {
          if (img.complete) {
            checkAllImagesLoaded()
          } else {
            img.addEventListener('load', checkAllImagesLoaded)
            img.addEventListener('error', checkAllImagesLoaded)
          }
        })
      }
      
      // Initialize lightGallery for gallery items
      const galleryContainer = document.querySelector('[data-lightgallery="group"]')
      if (galleryContainer && !lgInstance) {
        lgInstance = lightGallery(galleryContainer as HTMLElement, {
          selector: '[data-lightgallery="item"]',
          speed: 500,
          download: false,
          thumbnail: true,
          animateThumb: false,
          zoomFromOrigin: false,
          mobileSettings: {
            controls: true,
            showCloseIcon: true,
            download: false
          }
        })
      }
    })
  }
  
  const destroyGallery = () => {
    if (isotopeInstance) {
      isotopeInstance.destroy()
      isotopeInstance = null
    }
    
    if (lgInstance) {
      lgInstance.destroy()
      lgInstance = null
    }
  }
  
  onMounted(() => {
    setTimeout(() => {
      initGallery().catch(console.error)
    }, 500)
  })
  
  onUnmounted(() => {
    destroyGallery()
  })
  
  return {
    initGallery,
    destroyGallery
  }
}