# Tabouni Steak House - GitHub Upload Package

This folder contains all the necessary files to upload to your GitHub repository for Vercel deployment.

## What's Fixed

✅ **Asset Path Issues Resolved:**
- Moved all assets (`logo-2.png`, `france.png`, `united-states.png`) to the `public/` folder
- Updated asset references in components to use root paths (`/logo-2.png` instead of `/assets/logo-2.png`)
- Fixed favicon path in `index.html`

## Files Structure

```
github-upload/
├── public/                    # Static assets (accessible at root URL)
│   ├── logo-2.png           # Main logo
│   ├── france.png           # French flag
│   └── united-states.png    # US flag
├── src/                      # Source code
│   ├── components/          # React components
│   └── contexts/           # React contexts
├── package.json             # Dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
├── index.html              # Main HTML file
└── ... (other config files)
```

## How to Deploy

1. **Upload to GitHub:**
   - Copy all files from this `github-upload` folder to your GitHub repository root
   - Make sure the `public/` folder is at the repository root level

2. **Vercel Deployment:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect this as a Vite project
   - The build should work correctly with the fixed asset paths

## Key Changes Made

- **Navbar.tsx**: Changed logo path from `/assets/logo-2.png` to `/logo-2.png`
- **LanguageSwitcher.tsx**: Changed flag paths from `/assets/` to root paths
- **index.html**: Favicon path already correct (`/logo-2.png`)
- **Assets**: Moved from `assets/` folder to `public/` folder

## Why This Fixes the Issue

The problem was that Vercel serves static files from the `public/` folder at the root URL. When you reference `/assets/logo-2.png`, Vercel looks for `public/assets/logo-2.png`, but your files were in `public/logo-2.png`. By moving the assets to the `public/` folder and updating the references, the images will now load correctly.

## Testing

After uploading to GitHub and deploying on Vercel:
- ✅ Logo should appear in the navbar
- ✅ Language flags should appear in the language switcher
- ✅ Favicon should appear in the browser tab

Your website should now display all assets correctly on Vercel!