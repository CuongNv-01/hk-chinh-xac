# Codebase Structure

## Directory Layout
```
/
├── assets/              # CSS files (bootstrap.css, fonts.css, style.css)
├── components/          # Vue components
│   ├── AppHeader.vue    # Site header
│   ├── AppFooter.vue    # Site footer  
│   └── StructuredData.vue # SEO structured data component
├── composables/         # TypeScript composables
│   ├── useSEO.ts       # SEO utilities and structured data
│   ├── useGallery.ts   # Gallery functionality
│   ├── useLayoutFix.ts # Layout fixes
│   └── useServicesCarousel.ts # Services carousel
├── layouts/            # Page layouts
├── pages/              # Route pages (file-based routing)
│   ├── index.vue       # Homepage
│   ├── about.vue       # About page
│   ├── contact.vue     # Contact page
│   ├── services.vue    # Services overview
│   ├── service.vue     # Service detail page
│   ├── gallery.vue     # Product gallery
│   └── privacy-policy.vue # Privacy policy
├── plugins/            # Nuxt plugins
├── public/             # Static assets
│   ├── logo/          # Company logos and banners
│   ├── images/        # Product and company images
│   └── js/            # External JavaScript (core.min.js, init.js)
├── app.vue             # Main app component
├── nuxt.config.ts      # Nuxt configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Key Files
- **nuxt.config.ts**: Main configuration with SEO, sitemap, and performance settings
- **app.vue**: Main app with page transitions and layout fixes
- **composables/useSEO.ts**: Centralized SEO and structured data management
- **package.json**: Contains all npm scripts for development and deployment