# Noor Springs - Professional MERN Stack Website

A modern, responsive website for **Noor Springs** - a leading spring manufacturer in Visakhapatnam, Andhra Pradesh. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Industrial-themed design with metallic blue/gray color scheme
- **Dynamic Product Catalog** - Searchable and filterable product listings
- **Enquiry Form** - Integrated contact form with backend API and email notifications
- **WhatsApp Integration** - Direct WhatsApp contact button
- **Google Maps Integration** - Interactive map showing business location
- **Fast Performance** - Built with Vite for optimal loading speed

## 📁 Project Structure

```
Noor_Springs/
├── backend/                  # Node.js + Express backend
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── controllers/
│   │   └── enquiry.controller.js
│   ├── models/
│   │   └── Enquiry.model.js
│   ├── routes/
│   │   └── enquiry.routes.js
│   ├── middleware/
│   │   └── validation.middleware.js
│   ├── utils/
│   │   └── emailService.js
│   ├── .env.example         # Environment variables template
│   ├── package.json
│   └── server.js            # Express server entry point
│
├── frontend/                 # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Products.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

### Installation

#### 1. Clone or Navigate to the Project

```bash
cd d:\Noor_Springs
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env
```

**Configure your `.env` file:**

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/noor-springs
NODE_ENV=development

# Optional: Email Configuration for enquiry notifications
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=noorsprings@example.com
```

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd ../frontend

# Install dependencies
npm install
```

### 🎯 Running the Application

#### Start MongoDB

**Windows (if MongoDB is installed locally):**
```bash
net start MongoDB
```

Or run MongoDB manually:
```bash
mongod --dbpath="C:\data\db"
```

#### Start Backend Server

```bash
# From backend directory
cd backend
npm run dev
```

Backend will run on: `http://localhost:5000`

#### Start Frontend Development Server

```bash
# From frontend directory (open new terminal)
cd frontend
npm run dev
```

Frontend will run on: `http://localhost:3000`

### 🌐 Access the Website

Open your browser and navigate to:
```
http://localhost:3000
```

## 🛠️ Available Scripts

### Backend Scripts

```bash
npm start       # Start production server
npm run dev     # Start development server with nodemon
```

### Frontend Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 📋 API Endpoints

### Enquiries

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/enquiries` | Submit new enquiry |
| GET | `/api/enquiries` | Get all enquiries (admin) |
| GET | `/api/enquiries/:id` | Get single enquiry |
| PATCH | `/api/enquiries/:id/status` | Update enquiry status |
| DELETE | `/api/enquiries/:id` | Delete enquiry |

### Example Request (Submit Enquiry)

```javascript
POST /api/enquiries
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "productType": "Compression Spring",
  "message": "I need 100 units of compression springs with 5cm diameter..."
}
```

## 🎨 Customization

### Changing Colors

Edit `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your brand colors */ },
      steel: { /* Your secondary colors */ }
    }
  }
}
```

### Updating Contact Information

Update the following files:
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/Contact.jsx`
- `backend/.env` (for email configuration)

### Adding New Products

Edit `frontend/src/pages/Products.jsx` and add to the `products` array.

## 📧 Email Configuration (Optional)

To enable email notifications for enquiries:

1. **Using Gmail:**
   - Enable 2-Factor Authentication
   - Generate an App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)
   - Add to `.env`:
     ```
     EMAIL_HOST=smtp.gmail.com
     EMAIL_PORT=587
     EMAIL_USER=your-gmail@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_TO=noorsprings@example.com
     ```

2. **Using Other Providers:**
   - Update SMTP settings accordingly in `.env`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

#### Vercel:
```bash
cd frontend
npm run build
# Deploy dist/ folder to Vercel
```

#### Netlify:
```bash
cd frontend
npm run build
# Deploy dist/ folder to Netlify
```

### Backend Deployment (Render/Heroku)

#### Render:
1. Create new Web Service
2. Connect your repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables

#### Heroku:
```bash
cd backend
heroku create noor-springs-api
git push heroku main
heroku config:set MONGODB_URI=your-mongodb-uri
```

### Database (MongoDB Atlas)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env` or deployment config

## 🔧 Troubleshooting

### Port Already in Use

**Backend (Port 5000):**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill
```

**Frontend (Port 3000):**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### MongoDB Connection Error

1. Ensure MongoDB is running
2. Check connection string in `.env`
3. Verify network settings

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📱 Features Breakdown

### Pages

1. **Home** - Hero section, product highlights, features, company stats
2. **About Us** - Company history, mission, vision, values, timeline
3. **Products** - Complete catalog with search/filter functionality
4. **Contact** - Enquiry form, contact information, Google Maps

### Key Components

- **Responsive Navbar** - Mobile-friendly with hamburger menu
- **Footer** - Contact info, quick links, Google Maps, WhatsApp
- **Product Cards** - Hover effects, specifications, quote buttons
- **Enquiry Form** - Validation, loading states, success/error messages

## 🔒 Security Features

- Input validation (client and server-side)
- MongoDB injection prevention
- CORS configuration
- Environment variables for sensitive data
- Express validator middleware

## 📊 Technology Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **Express Validator** - Validation

## 📞 Support & Contact

**Noor Springs**
- **Address:** Door No. 21-16/6 1C, Suryabagh, Visakhapatnam, AP 530020
- **Phone:** 0891-2730891
- **Email:** noorsprings@example.com
- **GST:** 37AQFPM3706Q
- **Proprietor:** Mr. Noor Mohammed

## 📄 License

© 2024 Noor Springs. All rights reserved.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for optimal user experience
- Focused on conversion and customer engagement

---

**Need Help?** Contact the development team or refer to the documentation above.
