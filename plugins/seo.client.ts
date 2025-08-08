export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const { organizationSchema, localBusinessSchema } = useSEO()
    
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())
    
    // Add organization schema
    const orgScript = document.createElement('script')
    orgScript.type = 'application/ld+json'
    orgScript.textContent = JSON.stringify(organizationSchema)
    document.head.appendChild(orgScript)
    
    // Add local business schema
    const bizScript = document.createElement('script')
    bizScript.type = 'application/ld+json'
    bizScript.textContent = JSON.stringify(localBusinessSchema)
    document.head.appendChild(bizScript)
  })
})