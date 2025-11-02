# ⚡ Noor Springs - Quick Reference Card

## 🚀 QUICK START (First Time Setup)

### 1. Install Prerequisites
```bash
# Check if installed:
node --version  # Need v16+
mongod --version  # Need v5+

# If not installed, download:
# Node.js: https://nodejs.org/
# MongoDB: https://www.mongodb.com/try/download/community
```

### 2. Setup Project
```bash
# Open PowerShell in project folder
cd d:\Noor_Springs

# Install all dependencies (one command)
cd backend && npm install && cd ../frontend && npm install
```

### 3. Start Application
```bash
# Option A: Use the start script (Windows)
double-click start.bat

# Option B: Manual start (2 terminals)
# Terminal 1:
cd backend
npm run dev

# Terminal 2:
cd frontend  
npm run dev
```

### 4. Open Website
```
http://localhost:3000
```

---

## 📂 PROJECT STRUCTURE

```
Noor_Springs/
├── backend/          → Node.js API (Port 5000)
├── frontend/         → React App (Port 3000)
├── README.md         → Full documentation
├── SETUP_GUIDE.md    → Detailed setup steps
└── start.bat         → Quick start script
```

---

## 🌐 PAGES & ROUTES

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, products, features |
| About | `/about` | Company info, history |
| Products | `/products` | Full catalog, search |
| Contact | `/contact` | Enquiry form, map |

---

## 🔧 COMMON COMMANDS

### Backend Commands
```bash
cd backend
npm install           # Install dependencies
npm run dev          # Start dev server
npm start            # Start production
```

### Frontend Commands
```bash
cd frontend
npm install          # Install dependencies
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build
```

### Database
```bash
# Start MongoDB (Windows)
net start MongoDB

# Stop MongoDB
net stop MongoDB

# Check status
sc query MongoDB
```

---

## 🔑 ENVIRONMENT VARIABLES

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/noor-springs
NODE_ENV=development

# Optional: Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=noorsprings@example.com
```

---

## 📡 API ENDPOINTS

```
POST   /api/enquiries          → Submit enquiry
GET    /api/enquiries          → Get all (admin)
GET    /api/enquiries/:id      → Get one
PATCH  /api/enquiries/:id      → Update status
DELETE /api/enquiries/:id      → Delete
GET    /api/health             → Health check
```

---

## 🎨 CUSTOMIZATION QUICK GUIDE

### Change Colors
File: `frontend/tailwind.config.js`
```javascript
colors: {
  primary: { 600: '#YOUR_COLOR' },
  steel: { 900: '#YOUR_COLOR' }
}
```

### Update Contact Info
Files to edit:
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/Contact.jsx`

### Add Products
File: `frontend/src/pages/Products.jsx`
```javascript
const products = [
  {
    id: 13,
    name: 'Your New Product',
    category: 'Compression',
    description: 'Product description...',
    specs: ['Spec 1', 'Spec 2'],
    image: '🔵'
  }
]
```

### Change Company Name/Logo
File: `frontend/src/components/Navbar.jsx`
```javascript
<span>Your Company Name</span>
```

---

## 🐛 TROUBLESHOOTING

### Port Already in Use
```bash
# Find & kill process (Windows)
netstat -ano | findstr :5000
taskkill /PID [PID] /F
```

### MongoDB Not Running
```bash
# Start MongoDB
net start MongoDB

# Or run manually
mongod --dbpath="C:\data\db"
```

### Module Not Found
```bash
# Reinstall dependencies
cd backend
rm -rf node_modules
npm install

cd ../frontend
rm -rf node_modules
npm install
```

### Form Not Submitting
1. Check backend is running (port 5000)
2. Check MongoDB is running
3. Check console for errors
4. Verify API endpoint in frontend

---

## 📞 CONTACT INFORMATION

Update these details in the code:

**Current Settings:**
- **Phone:** 0891-2730891
- **Email:** noorsprings@example.com
- **Address:** Door No. 21-16/6 1C, Suryabagh, Visakhapatnam
- **GST:** 37AQFPM3706Q
- **Proprietor:** Mr. Noor Mohammed
- **WhatsApp:** +91-891-2730891

**Files to Update:**
- Footer: `frontend/src/components/Footer.jsx`
- Contact: `frontend/src/pages/Contact.jsx`
- Navbar: `frontend/src/components/Navbar.jsx`

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Update all contact information
- [ ] Configure email service
- [ ] Test all forms
- [ ] Build frontend: `npm run build`
- [ ] Set up MongoDB Atlas
- [ ] Deploy backend (Render/Railway)
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Update CORS settings
- [ ] Configure custom domain
- [ ] Install SSL certificate
- [ ] Test production site

---

## 📚 DOCUMENTATION FILES

| File | Purpose |
|------|---------|
| README.md | Complete documentation |
| SETUP_GUIDE.md | Step-by-step setup |
| DEPLOYMENT_GUIDE.md | Production deployment |
| PROJECT_SUMMARY.md | Project overview |
| FEATURES.md | Complete feature list |
| QUICK_REFERENCE.md | This file |

---

## 💡 TIPS

- **Development:** Always run backend before frontend
- **Testing:** Test form on localhost before deploying
- **Backups:** Backup MongoDB data regularly
- **Updates:** Keep dependencies updated
- **Security:** Never commit .env files to Git
- **Mobile:** Test on real mobile devices
- **Performance:** Run `npm run build` to check bundle size

---

## 🆘 HELP RESOURCES

- **Node.js:** https://nodejs.org/docs/
- **React:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **MongoDB:** https://www.mongodb.com/docs/
- **Express:** https://expressjs.com/

---

## ⚙️ TECH STACK SUMMARY

**Frontend:**
- React 18 + Vite
- Tailwind CSS
- React Router
- Axios

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Nodemailer
- Express Validator

---

## 📊 DEFAULT PORTS

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000
- **MongoDB:** mongodb://localhost:27017

---

## ✅ QUICK STATUS CHECK

```bash
# Check if everything is running
curl http://localhost:5000/api/health  # Backend
curl http://localhost:3000             # Frontend

# Check MongoDB
mongo --eval "db.version()"
```

---

**🎉 You're all set! Happy coding!**

For detailed information, check the other documentation files.
