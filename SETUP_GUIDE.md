# 🚀 Quick Setup Guide - Noor Springs Website

Follow these steps to get your website up and running in minutes!

## ⚡ Quick Start (Windows)

### Step 1: Install Prerequisites

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Choose LTS version (v18 or higher)
   - Run installer and follow prompts
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Install MongoDB**
   - Download from: https://www.mongodb.com/try/download/community
   - Run installer (choose "Complete" installation)
   - Install as a Windows Service
   - Verify installation:
     ```bash
     mongod --version
     ```

### Step 2: Setup Backend

```bash
# Open PowerShell/Command Prompt
cd d:\Noor_Springs\backend

# Install packages
npm install

# Copy environment file
copy .env.example .env

# Edit .env file with your settings (use Notepad or VS Code)
notepad .env
```

**Minimum .env configuration:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/noor-springs
NODE_ENV=development
```

### Step 3: Setup Frontend

```bash
# Open new PowerShell/Command Prompt window
cd d:\Noor_Springs\frontend

# Install packages
npm install
```

### Step 4: Start the Application

**Terminal 1 - Start Backend:**
```bash
cd d:\Noor_Springs\backend
npm run dev
```

Wait until you see: "Server is running on port 5000" and "MongoDB Connected"

**Terminal 2 - Start Frontend:**
```bash
cd d:\Noor_Springs\frontend
npm run dev
```

Wait until you see: "Local: http://localhost:3000"

### Step 5: Open Website

Open your browser and go to:
```
http://localhost:3000
```

## 🎉 That's It!

Your website is now running locally. Try:
- Browsing different pages
- Searching products
- Submitting an enquiry (check MongoDB for saved data)

## 🛠️ Common Issues & Solutions

### MongoDB Not Starting

**Error:** "MongoServerError: connect ECONNREFUSED"

**Solution:**
```bash
# Start MongoDB service (Windows)
net start MongoDB

# Or run MongoDB manually
mongod --dbpath="C:\data\db"
```

### Port Already in Use

**Error:** "Port 5000 is already in use"

**Solution:**
```bash
# Find and kill process using port
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
```

### Module Not Found

**Error:** "Cannot find module..."

**Solution:**
```bash
# Delete node_modules and reinstall
cd backend
rmdir /s node_modules
npm install

# Same for frontend
cd ..\frontend
rmdir /s node_modules
npm install
```

## 📧 Email Setup (Optional)

To receive email notifications when customers submit enquiries:

1. **Get Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Enable 2FA if not already enabled
   - Generate new app password
   - Copy the 16-character password

2. **Update .env file:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   EMAIL_TO=noorsprings@example.com
   ```

3. **Restart backend server**

## 🌐 Going Live (Production)

### Option 1: Vercel (Frontend) + Render (Backend)

**Frontend on Vercel:**
1. Sign up at vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run in frontend folder: `vercel`
4. Follow prompts

**Backend on Render:**
1. Sign up at render.com
2. Create "New Web Service"
3. Connect GitHub repo
4. Add environment variables
5. Deploy

### Option 2: Single Server Deployment

Deploy both frontend and backend on:
- **Heroku** - heroku.com
- **Railway** - railway.app
- **DigitalOcean** - digitalocean.com

### Database: MongoDB Atlas

1. Sign up at mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update MONGODB_URI in production

## 🔄 Updating Content

### Change Contact Info
- Edit: `frontend/src/components/Footer.jsx`
- Edit: `frontend/src/pages/Contact.jsx`

### Add Products
- Edit: `frontend/src/pages/Products.jsx`
- Add to `products` array

### Change Colors
- Edit: `frontend/tailwind.config.js`
- Update `colors` section

### Change Logo/Company Name
- Edit: `frontend/src/components/Navbar.jsx`
- Edit: `frontend/index.html` (title tag)

## 📱 Test on Mobile

To test on your phone while developing:

1. Find your computer's IP address:
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. Update frontend vite.config.js:
   ```javascript
   server: {
     host: '0.0.0.0',
     port: 3000
   }
   ```

3. On your phone browser, visit:
   ```
   http://192.168.1.100:3000
   ```

## 🆘 Need Help?

- Check README.md for detailed documentation
- Review error messages carefully
- Google specific error messages
- Check Node.js and MongoDB versions

## ✅ Checklist

- [ ] Node.js installed and working
- [ ] MongoDB installed and running
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] .env file configured
- [ ] Backend server running (port 5000)
- [ ] Frontend server running (port 3000)
- [ ] Website accessible at localhost:3000
- [ ] Can submit enquiries successfully

---

**Happy Building! 🎊**
