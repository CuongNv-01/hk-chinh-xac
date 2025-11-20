import $ from 'jquery'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Make jQuery available globally
    ;(window as any).$ = $
    ;(window as any).jQuery = $
    
    // Load core.min.js after jQuery is available
    const script = document.createElement('script')
    script.src = '/js/core.min.js'
    script.defer = false
    document.head.appendChild(script)
  }
})