# 🚀 Vercel Deployment Guide - Noor Springs

## ✅ Changes Applied

The following fixes have been implemented to resolve the 404 error:

### 1. Updated `vite.config.js`
```js
export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ Added - ensures assets load correctly
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
```

### 2. Created `vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This ensures all routes (like `/spring-enquiry`, `/products`, etc.) work correctly in production.

---

## 📦 Vercel Project Settings

When setting up on Vercel, use these settings:

### Root Directory
**Select:** `frontend` (if deploying frontend only)

### Build & Development Settings

| Setting              | Value           |
| -------------------- | --------------- |
| **Framework Preset** | `Vite`          |
| **Build Command**    | `npm run build` |
| **Output Directory** | `dist`          |
| **Install Command**  | `npm install`   |

---

## 🔧 Step-by-Step Deployment

### Option 1: Auto-Deploy from GitHub (Recommended)

1. **Go to Vercel Dashboard:** https://vercel.com/dashboard
2. **Click "Add New..." → Project**
3. **Import your GitHub repo:** `Naeem-Feb17/NoorSprings`
4. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Click "Deploy"**
6. **Wait for deployment** (2-3 minutes)
7. **Visit your URL** - Should work now! ✅

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to frontend folder
cd d:\Noor_Springs\frontend

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Confirm settings
# - Wait for deployment
```

---

## 🧪 Test Build Locally

Before each deployment, test locally:

```bash
cd d:\Noor_Springs\frontend

# Build production version
npm run build

# Preview production build
npm run preview
```

Then open the URL shown (usually `http://localhost:4173`)

**If it works locally, it will work on Vercel!**

---

## 🐛 Troubleshooting

### Issue: 404 on routes (e.g., `/spring-enquiry`)
**Solution:** Make sure `vercel.json` exists in frontend folder ✅

### Issue: Assets not loading (CSS/JS errors)
**Solution:** Verify `base: "./"` in `vite.config.js` ✅

### Issue: Build fails on Vercel
**Check:**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18.x or higher

### Issue: Environment variables not working
**Solution:** Add them in Vercel Dashboard:
- Go to Settings → Environment Variables
- Add `VITE_API_URL` etc.
- Redeploy

---

## 🌐 Environment Variables for Production

After deployment, you'll need to configure:

### Frontend Environment Variables (Vercel)
```env
VITE_API_URL=https://your-backend-url.com
```

### Backend Deployment
Deploy backend separately on:
- **Render:** https://render.com (Recommended)
- **Railway:** https://railway.app
- **Heroku:** https://heroku.com
- **DigitalOcean App Platform**

Then update `VITE_API_URL` in Vercel with your backend URL.

---

## 📋 Deployment Checklist

### Frontend (Vercel)
- ✅ `vite.config.js` has `base: "./"`
- ✅ `vercel.json` exists with rewrites
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ GitHub repo connected
- ✅ Auto-deploy enabled

### Backend (Render/Railway/etc)
- ⏳ Backend deployed separately
- ⏳ MongoDB connection configured
- ⏳ Environment variables set
- ⏳ API URL added to Vercel frontend

---

## 🎯 Post-Deployment Tasks

After successful deployment:

1. **Update URLs in code:**
   - `frontend/src/components/SEO.jsx` - Replace `https://noorsprings.in` with actual URL
   - `frontend/public/sitemap.xml` - Update URLs
   - `frontend/public/robots.txt` - Update sitemap URL

2. **Test all features:**
   - ✅ Home page loads
   - ✅ Products page loads
   - ✅ Spring Enquiry form works
   - ✅ Contact form works
   - ✅ All routes work (no 404s)
   - ✅ Images/CSS load correctly

3. **Configure custom domain (optional):**
   - Go to Vercel → Settings → Domains
   - Add your domain (e.g., `noorsprings.in`)
   - Update DNS records as instructed

4. **Set up monitoring:**
   - Enable Vercel Analytics
   - Set up error tracking (Sentry, etc.)
   - Configure Google Analytics

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html
- **Your GitHub Repo:** https://github.com/Naeem-Feb17/NoorSprings

---

## ✅ Expected Result

After following these steps, your website should:
- ✅ Load without 404 errors
- ✅ All routes work (/, /products, /spring-enquiry, /contact, /about)
- ✅ Assets load correctly (CSS, JS, images)
- ✅ Forms work (if backend is connected)
- ✅ Mobile responsive
- ✅ Fast loading times

---

## 🆘 Need Help?

If you still see 404 errors after deployment:

1. Check Vercel deployment logs
2. Verify `frontend/vercel.json` exists
3. Confirm Root Directory is set to `frontend`
4. Try redeploying: Vercel Dashboard → Deployments → Redeploy

---

**Last Updated:** November 2, 2025  
**Status:** ✅ Ready for Deployment  
**Changes Pushed:** Yes - Auto-deployment should start now
