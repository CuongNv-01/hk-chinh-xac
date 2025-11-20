# Suggested Commands

## Development Commands
```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm run dev

# Build for production
pnpm run build

# Generate static site
pnpm run generate

# Preview production build locally
pnpm run preview

# Prepare Nuxt (run after dependencies change)
pnpm run postinstall
```

## System Commands (Linux)
```bash
# File operations
ls -la                  # List files with details
find . -name "*.vue"    # Find Vue files
grep -r "searchterm"    # Search in files
cat filename           # View file contents

# Git operations
git status             # Check repository status
git add .              # Stage all changes
git commit -m "message" # Commit changes
git push               # Push to remote

# Process management
ps aux | grep node     # Find Node processes
kill -9 <pid>          # Kill process by PID
```

## Package Management
```bash
# Add dependencies
pnpm add package-name

# Add dev dependencies  
pnpm add -D package-name

# Remove dependencies
pnpm remove package-name

# Update dependencies
pnpm update
```

## Build & Deployment
The project is configured for Vercel deployment:
- `pnpm run build` - Server-side rendering build
- `pnpm run generate` - Static site generation (recommended for Vercel)
- Deploy the `.output/public` folder for static sites
- Deploy with `node .output/server/index.mjs` for SSR