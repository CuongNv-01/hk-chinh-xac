export const useLayoutFix = () => {
  const fixLayout = () => {
    if (typeof window !== 'undefined') {
      // Trigger multiple resize events to ensure layout recalculation
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
        window.dispatchEvent(new Event('scroll'))
        
        // Also trigger jQuery resize if available
        const $ = (window as any).$
        if ($) {
          $(window).trigger('resize')
          
          // Fix footer position
          const footer = $('.section-footer')
          if (footer.length) {
            footer.css('position', 'relative')
            setTimeout(() => {
              footer.css('position', '')
            }, 100)
          }
        }
      }, 100)
    }
  }
  
  return {
    fixLayout
  }
}