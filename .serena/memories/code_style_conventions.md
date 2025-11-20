# Code Style & Conventions

## TypeScript Configuration
- **Strict Mode**: Enabled (`strict: true` in tsconfig.json)
- **Target**: ESNext with bundler module resolution
- **Type Checking**: Strict type checking enforced
- **Imports**: ES modules with synthetic default imports allowed

## Vue.js Patterns
- **Composition API**: Uses `<script setup lang="ts">` syntax
- **Component Structure**: 
  ```vue
  <template>
    <!-- HTML template -->
  </template>
  
  <script setup lang="ts">
  // TypeScript logic
  </script>
  ```

## Naming Conventions
- **Components**: PascalCase (e.g., `AppHeader.vue`, `StructuredData.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useSEO`, `useGallery`)
- **Files**: kebab-case for pages (e.g., `privacy-policy.vue`)
- **Variables/Functions**: camelCase

## Code Organization
- **Composables**: Pure TypeScript functions returning reactive utilities
- **Components**: Single-file Vue components with TypeScript
- **Styling**: External CSS files loaded globally via nuxt.config.ts
- **Assets**: Organized in public/ directory with logical subdirectories

## SEO Patterns
- Structured data using JSON-LD format in composables
- Meta tags managed through Nuxt SEO module
- Page-specific meta data using route-based configuration
- Canonical URLs and Open Graph tags for all pages

## Error Handling
- TypeScript strict mode catches type errors at compile time
- No explicit error handling patterns observed (relies on Nuxt defaults)

## Import Style
- ES6 imports used throughout
- Auto-imports enabled by Nuxt for composables and utilities