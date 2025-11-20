// Wait for jQuery to be loaded
function initializeScripts() {
  if (typeof $ !== 'undefined' && typeof jQuery !== 'undefined') {
    // jQuery is loaded, now load the main script
    const script = document.createElement('script');
    script.src = '/js/script.js';
    script.onload = function() {
      console.log('Scripts initialized successfully');
    };
    document.body.appendChild(script);
  } else {
    // jQuery not yet loaded, try again
    setTimeout(initializeScripts, 100);
  }
}

// Start initialization after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeScripts);
} else {
  initializeScripts();
}