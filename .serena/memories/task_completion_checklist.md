# Task Completion Checklist

## When a Development Task is Completed

### 1. Code Quality Checks
Since this project has no linting/testing configuration, manual verification is required:
- **TypeScript Check**: Run `pnpm run build` to verify TypeScript compilation
- **Manual Testing**: Test the development server with `pnpm run dev`
- **Build Verification**: Ensure `pnpm run generate` completes successfully

### 2. Required Commands to Run
```bash
# Essential checks after code changes:
pnpm run build          # Verify TypeScript compilation and build
pnpm run dev            # Test development server manually
pnpm run generate       # Test static generation for deployment
```

### 3. Verification Steps
- Check that all TypeScript types are correctly defined
- Verify that new components follow the established patterns
- Ensure SEO meta tags are properly configured for new pages
- Test responsive design manually in browser
- Verify that images and assets load correctly

### 4. Deployment Readiness
- Run `pnpm run generate` successfully
- Verify the `.output/public` folder contains expected static files
- Check that all routes are pre-rendered correctly

### 5. Git Workflow
- Review changes with `git status` and `git diff`
- Stage appropriate files with `git add`
- Commit with descriptive messages
- Only push after successful build verification

## Notes
- **No automated testing** - Manual testing required
- **No linting setup** - Code style must be maintained manually
- **TypeScript strict mode** - Compilation errors will block builds
- **Static generation** - All pages must be compatible with SSG