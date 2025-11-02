# 🎯 Vercel Dashboard Configuration - Exact Settings

## Problem: 404 NOT_FOUND Error

**Root Cause:** Vercel is looking for build files in the wrong location (root instead of `frontend/dist`)

---

## ✅ Solution: Set Root Directory to `frontend`

### Step-by-Step Visual Guide:

```
1. Vercel Dashboard → Your Project (NoorSprings)
   ↓
2. Settings (top menu)
   ↓
3. General (left sidebar)
   ↓
4. Scroll to "Root Directory"
   ↓
5. Click "Edit"
   ↓
6. Type: frontend
   ↓
7. Click "Save"
```

---

## 📋 Complete Settings Checklist

### General Settings
```
Root Directory: frontend
Node.js Version: 18.x (or latest)
```

### Build & Development Settings
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Development Command: npm run dev
```

### Environment Variables (Add Later)
```
VITE_API_URL=https://your-backend-api.com
```

---

## 🔄 After Changing Settings

1. Go to **Deployments** tab
2. Find latest deployment
3. Click **three dots (...)** → **Redeploy**
4. ✅ Wait for green checkmark
5. 🎉 Visit your site

---

## 🧪 Test Your Deployment

After redeployment, test these URLs:

### Should Work (No 404):
- ✅ `https://your-site.vercel.app/`
- ✅ `https://your-site.vercel.app/products`
- ✅ `https://your-site.vercel.app/spring-enquiry`
- ✅ `https://your-site.vercel.app/contact`
- ✅ `https://your-site.vercel.app/about`

### Should Load Assets:
- ✅ CSS styles visible
- ✅ JavaScript working
- ✅ React routing works
- ✅ No console errors

---

## 🐛 If Still Getting 404

### Check Build Logs:
1. Go to **Deployments** tab
2. Click on latest deployment
3. Click **"View Function Logs"** or **"Build Logs"**
4. Look for errors

### Common Issues:

**Issue 1: Build Failed**
```
Error: Command "npm run build" failed
```
**Fix:** Check if `package.json` has `"build": "vite build"`

**Issue 2: Wrong Output Directory**
```
Error: No output directory found
```
**Fix:** Verify Output Directory is set to `dist` (not `build` or `out`)

**Issue 3: Missing Dependencies**
```
Error: Cannot find module 'vite'
```
**Fix:** Ensure `package.json` includes all dependencies

---

## 📱 Alternative: Deploy via CLI

If dashboard doesn't work, use CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend
cd d:\Noor_Springs\frontend

# Login
vercel login

# Deploy
vercel --prod

# Follow prompts
```

---

## 🎯 Quick Verification

After deployment, run this checklist:

- [ ] Can access home page
- [ ] Products page loads
- [ ] Spring Enquiry form visible
- [ ] Contact page works
- [ ] All CSS/JS loads
- [ ] No 404 errors
- [ ] Mobile responsive
- [ ] All routes work

---

## 📞 Support

If still stuck:
1. Share your Vercel deployment URL
2. Share screenshot of Build & Development Settings
3. Share build logs (if failed)

Common URLs format:
- `https://noor-springs.vercel.app`
- `https://noor-springs-git-main-your-username.vercel.app`
- `https://noor-springs-abc123.vercel.app`

---

**Remember:** The key fix is setting **Root Directory** to `frontend` in Vercel project settings!

