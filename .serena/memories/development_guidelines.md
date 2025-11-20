# Development Guidelines

## Design Patterns & Architecture

### Component Architecture
- **Layout Components**: `AppHeader.vue`, `AppFooter.vue` for consistent site structure
- **Utility Components**: `StructuredData.vue` for SEO management
- **Page Components**: File-based routing in `/pages` directory
- **Composables**: Reusable business logic in `/composables`

### SEO-First Approach
- Every page should use the `useSEO` composable for meta tags
- Structured data (JSON-LD) is mandatory for business pages
- Images must have proper alt attributes
- Page titles and descriptions should be unique and descriptive

### Styling Guidelines
- **Bootstrap-based**: Use Bootstrap classes for layout and components
- **Custom CSS**: Additional styling in `/assets/css/` files
- **Responsive**: Mobile-first approach with Bootstrap breakpoints
- **Colors**: Primary brand color is #2980B9 (blue)

### TypeScript Best Practices
- Use strict type checking (already configured)
- Define interfaces for complex data structures
- Leverage Nuxt's auto-imports for composables
- Use proper return types for functions

### Performance Considerations
- **Static Generation**: All routes are pre-rendered via `nitro.prerender`
- **Image Optimization**: Use proper image formats and sizes
- **Code Splitting**: Nuxt handles this automatically
- **Payload Extraction**: Disabled for better performance

### Vietnamese Localization
- Primary language is Vietnamese (`lang="vi"`)
- All text content should be in Vietnamese
- Date/time formats should follow Vietnamese conventions
- Consider future multi-language support (English, Japanese mentioned)

### External Dependencies
- **jQuery**: Used for legacy JavaScript functionality
- **Bootstrap**: For responsive grid and components  
- **Custom Plugins**: core.min.js and init.js for additional functionality
- **SEO Modules**: @nuxtjs/seo for comprehensive SEO features

### File Organization Principles
- Pages represent routes directly (file-based routing)
- Components are reusable UI elements
- Composables contain business logic and state
- Assets are static files that need processing
- Public files are served as-is