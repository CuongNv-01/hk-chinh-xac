# HK Chính Xác - Nuxt 3 Project

## Overview
This is a modern Nuxt 3 website migrated from static HTML pages, featuring full TypeScript support and SEO optimization.

## Tech Stack
- **Framework:** Nuxt 3
- **Language:** TypeScript
- **Package Manager:** pnpm
- **CSS:** Bootstrap + Custom CSS
- **SEO:** Meta tags, structured data, sitemap

## Project Structure
```
frontend/
├── assets/           # CSS files
├── components/       # Vue components (Header, Footer)
├── composables/      # SEO utilities
├── layouts/          # Page layouts
├── pages/            # Route pages
├── plugins/          # Nuxt plugins
└── public/           # Static assets (images, fonts, js)
```

## Pages
- **Homepage** (`/`) - Company introduction and services
- **About Us** (`/about`) - Company information
- **Services** (`/services`) - Service overview
- **Service Detail** (`/service`) - Individual service details
- **Gallery** (`/gallery`) - Product gallery with filters
- **Contact** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy-policy`) - Legal information

## Development

### Install dependencies
```bash
pnpm install
```

### Run development server
```bash
pnpm run dev
```
Visit http://localhost:3000

### Build for production
```bash
pnpm run build
```

### Generate static site
```bash
pnpm run generate
```

### Preview production build
```bash
pnpm run preview
```

## Features
- ✅ Full TypeScript support
- ✅ SEO optimized with meta tags and structured data
- ✅ Responsive design
- ✅ Component-based architecture
- ✅ Static site generation support
- ✅ Original styling preserved
- ✅ Contact form ready
- ✅ Product gallery with filtering
- ✅ Service showcase
- ✅ Multi-language ready (Vietnamese)

## SEO Features
- Dynamic meta tags per page
- Open Graph tags
- Structured data (Organization, LocalBusiness, Service)
- Proper HTML lang attributes
- Optimized images with alt text

## Deployment
The project can be deployed as:
1. **Static Site** - Run `pnpm generate` and deploy the `.output/public` folder
2. **Node.js Server** - Run `pnpm build` and deploy with `node .output/server/index.mjs`
3. **Edge Functions** - Compatible with Vercel, Netlify, Cloudflare Workers

## Environment
- Node.js 18+ required
- pnpm 8+ recommended

## License
© 2025 HK Chính Xác. All rights reserved.


NOTE:
1. https://hk-chinh-xac.vercel.app/index.html - Trang chủ
2. https://hk-chinh-xac.vercel.app/about-us.html - Giới thiệu về công ty
3. https://hk-chinh-xac.vercel.app/contacts.html - Liên hệ
4. https://hk-chinh-xac.vercel.app/privacy-policy.html - Chính sách bảo mật
5. https://hk-chinh-xac.vercel.app/grid-gallery.html - Trang sản phẩm
6. https://hk-chinh-xac.vercel.app/services-2.html - Trang dịch vụ
7. https://hk-chinh-xac.vercel.app/single-service.html - Trang chi tiết dịch vụ

Note:
Kèm line tin tức, giá vàng,  chứng khoán, thời tiết hai bên trái phải

Anh và tiếng Nhật