# 🚀 Deployment Guide - Noor Springs Website

This guide covers multiple deployment options for your MERN stack website.

## 📋 Pre-Deployment Checklist

Before deploying to production:

- [ ] Test the website thoroughly locally
- [ ] Update all contact information and company details
- [ ] Replace placeholder email addresses
- [ ] Update Google Maps coordinates with actual location
- [ ] Add actual product images
- [ ] Test form submissions
- [ ] Configure email service (if using)
- [ ] Set up MongoDB Atlas account
- [ ] Prepare environment variables
- [ ] Test on multiple devices and browsers

## 🌐 Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend) [RECOMMENDED]

This is the easiest and most cost-effective option for beginners.

#### Deploy Backend to Render

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Push Code to GitHub** (if not already done)
   ```bash
   cd d:\Noor_Springs
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/noor-springs.git
   git push -u origin main
   ```

3. **Create Web Service on Render**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name:** `noor-springs-api`
     - **Root Directory:** `backend`
     - **Environment:** `Node`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Instance Type:** Free

4. **Add Environment Variables**
   ```
   MONGODB_URI=your-mongodb-atlas-connection-string
   NODE_ENV=production
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=noorsprings@example.com
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Note your backend URL (e.g., `https://noor-springs-api.onrender.com`)

#### Deploy Frontend to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Update Frontend API URL**
   - Create `frontend/.env.production`:
     ```
     VITE_API_URL=https://noor-springs-api.onrender.com/api
     ```

3. **Build and Deploy**
   ```bash
   cd frontend
   vercel
   ```
   - Follow prompts
   - Choose project name
   - Confirm settings

4. **Configure CORS on Backend**
   - Update `backend/server.js`:
     ```javascript
     app.use(cors({
       origin: ['https://your-vercel-domain.vercel.app']
     }));
     ```

---

### Option 2: Railway (Full Stack)

Railway can host both frontend and backend on one platform.

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Node.js
   - Add environment variables (same as Render)

3. **Deploy Frontend**
   - Create new service in same project
   - Select repository with frontend
   - Add build settings:
     ```
     Root Directory: frontend
     Build Command: npm run build
     Start Command: npx vite preview
     ```

---

### Option 3: MongoDB Atlas (Database)

Required for all deployment options:

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up (free tier available)

2. **Create Cluster**
   - Choose "Shared" (Free tier)
   - Select cloud provider and region (closest to your users)
   - Cluster name: `noor-springs`
   - Click "Create Cluster"

3. **Configure Database Access**
   - Database Access → Add New Database User
   - Create username and password (save these!)
   - Set privileges to "Atlas Admin"

4. **Configure Network Access**
   - Network Access → Add IP Address
   - For development: "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add specific IPs

5. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy connection string (EXAMPLE - not real credentials):
     ```
     mongodb+srv://YOUR_DB_USER:<YOUR_PASSWORD>@your-cluster.xxxxx.mongodb.net/noor-springs?retryWrites=true&w=majority
     ```
   - Replace `<YOUR_PASSWORD>` with your actual password
   - Replace `YOUR_DB_USER` with your database username
   - Use this as `MONGODB_URI` in environment variables

---

### Option 4: Heroku (Full Stack - Paid)

Note: Heroku no longer offers a free tier, but it's simple to use.

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login**
   ```bash
   heroku login
   ```

3. **Create Apps**
   ```bash
   # Backend
   cd backend
   heroku create noor-springs-api
   
   # Frontend
   cd ../frontend
   heroku create noor-springs-web
   ```

4. **Deploy Backend**
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Deploy backend"
   heroku git:remote -a noor-springs-api
   heroku config:set MONGODB_URI=your-mongodb-uri
   heroku config:set NODE_ENV=production
   git push heroku main
   ```

5. **Deploy Frontend**
   ```bash
   cd frontend
   # Add Heroku buildpack for Vite
   heroku buildpacks:set heroku/nodejs
   heroku config:set VITE_API_URL=https://noor-springs-api.herokuapp.com/api
   git init
   git add .
   git commit -m "Deploy frontend"
   git push heroku main
   ```

---

### Option 5: VPS (DigitalOcean, Linode, AWS EC2)

For full control, deploy on a VPS.

#### Initial Server Setup (Ubuntu)

```bash
# Connect to server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
apt update
apt install -y mongodb-org
systemctl start mongod
systemctl enable mongod

# Install Nginx
apt install -y nginx

# Install PM2 (process manager)
npm install -g pm2
```

#### Deploy Application

```bash
# Create directory
mkdir -p /var/www/noor-springs
cd /var/www/noor-springs

# Clone repository
git clone https://github.com/yourusername/noor-springs.git .

# Install backend
cd backend
npm install
cp .env.example .env
nano .env  # Edit environment variables

# Start backend with PM2
pm2 start server.js --name noor-springs-api
pm2 save
pm2 startup

# Build frontend
cd ../frontend
npm install
npm run build
```

#### Configure Nginx

Create `/etc/nginx/sites-available/noor-springs`:

```nginx
server {
    listen 80;
    server_name yourdomainname.com www.yourdomainname.com;

    # Frontend
    location / {
        root /var/www/noor-springs/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
ln -s /etc/nginx/sites-available/noor-springs /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

#### Install SSL (Let's Encrypt)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomainname.com -d www.yourdomainname.com
```

---

## 🔒 Environment Variables Reference

### Backend (.env)

```env
# EXAMPLE ONLY - Replace with your actual MongoDB Atlas credentials
# Required
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@your-cluster.mongodb.net/noor-springs
NODE_ENV=production

# Optional (Email notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=noorsprings@example.com
```

### Frontend (.env.production)

```env
VITE_API_URL=https://your-backend-domain.com/api
```

---

## 📧 Setting Up Email Notifications

### Using Gmail

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Security → 2-Step Verification → Turn On

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other" → Enter "Noor Springs"
   - Copy the 16-character password

3. **Update Backend .env**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASS=your-16-char-app-password
   EMAIL_TO=noorsprings@example.com
   ```

### Using Other Providers

**SendGrid:**
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

**Mailgun:**
```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your-mailgun-username
EMAIL_PASS=your-mailgun-password
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install and Build
        run: |
          cd frontend
          npm install
          npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🧪 Testing Production Build Locally

Before deploying:

```bash
# Backend
cd backend
NODE_ENV=production npm start

# Frontend
cd frontend
npm run build
npm run preview
```

Test at `http://localhost:4173`

---

## 📊 Monitoring & Analytics

### Add Google Analytics

Add to `frontend/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Backend Monitoring

Use PM2 for monitoring (VPS deployment):

```bash
pm2 monit
pm2 logs
pm2 restart noor-springs-api
```

---

## 🐛 Troubleshooting

### Issue: CORS errors in production

**Solution:** Update `backend/server.js`:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://your-frontend-domain.com',
  credentials: true
}));
```

### Issue: MongoDB connection timeout

**Solution:** 
- Check MongoDB Atlas whitelist
- Verify connection string
- Check firewall rules

### Issue: Build fails on deployment

**Solution:**
- Check Node.js version compatibility
- Verify all dependencies in package.json
- Check build logs for specific errors

---

## ✅ Post-Deployment Checklist

- [ ] Website is accessible at production URL
- [ ] All pages load correctly
- [ ] Form submission works
- [ ] Email notifications working (if configured)
- [ ] Mobile responsive design verified
- [ ] SSL certificate installed (HTTPS)
- [ ] Google Maps displays correctly
- [ ] WhatsApp link works
- [ ] Contact information is correct
- [ ] Analytics configured
- [ ] Sitemap submitted to Google
- [ ] Backup system in place
- [ ] Monitoring alerts set up

---

## 🎉 You're Live!

Congratulations! Your Noor Springs website is now live and accessible to customers worldwide.

### Next Steps:
1. Share the website URL
2. Submit to Google Search Console
3. Set up regular backups
4. Monitor analytics
5. Gather customer feedback
6. Plan future enhancements

---

**Need Help?** Check the main README.md or contact support.
