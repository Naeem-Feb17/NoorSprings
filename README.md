# 🌊 Noor Springs - Complete Documentation

A MERN website for Noor Springs - a spring manufacturing company. Explore products, submit enquiries, and browse company info with multi-language and dark mode support.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Backend API](#backend-api)
- [Frontend Features](#frontend-features)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Project Overview

Noor Springs is a professional web application designed to:

- **Showcase Products**: Display spring manufacturing products with detailed information
- **Handle Enquiries**: Manage general customer enquiries through a contact form
- **Spring-Specific Inquiries**: Process specialized spring product enquiries
- **Multi-Language Support**: Support for multiple languages via the Language Context
- **Dark Mode Support**: Theme switching capability for better user experience
- **SEO Optimized**: Built with SEO best practices and sitemap support
- **Responsive Design**: Mobile-first approach with Tailwind CSS

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (v4.18.2)
- **Database**: MongoDB with Mongoose (v8.0.3)
- **Validation**: express-validator (v7.0.1)
- **Email**: Nodemailer (v6.9.7)
- **File Upload**: Multer (v2.0.2)
- **CORS**: CORS support enabled
- **Environment**: dotenv for configuration

### Frontend
- **Library**: React (v18.2.0)
- **Build Tool**: Vite (v5.0.8)
- **Routing**: React Router DOM (v6.20.1)
- **Styling**: Tailwind CSS (v3.3.6)
- **HTTP Client**: Axios (v1.6.2)
- **Icons**: Lucide React (v0.294.0)
- **SEO**: React Helmet Async (v2.0.5)
- **CSS Processing**: PostCSS (v8.4.32), Autoprefixer (v10.4.16)

### Development Tools
- **Dev Server**: Nodemon for Node.js hot reload
- **Concurrent Dev**: concurrently (v8.2.2)
- **Vite Plugin**: @vitejs/plugin-react (v4.2.1)

---

## 📁 Project Structure

```
noor-springs/
│
├── package.json                 # Root project configuration
├── vercel.json                  # Deployment configuration
│
├── backend/                     # Node.js/Express Backend
│   ├── package.json
│   ├── server.js               # Main server entry point
│   ├── config/
│   │   └── db.js               # MongoDB connection configuration
│   ├── controllers/
│   │   ├── enquiry.controller.js           # General enquiry logic
│   │   └── springEnquiry.controller.js     # Spring-specific enquiry logic
│   ├── middleware/
│   │   └── validation.middleware.js        # Request validation middleware
│   ├── models/
│   │   ├── Enquiry.model.js               # General enquiry schema
│   │   └── SpringEnquiry.model.js         # Spring enquiry schema
│   ├── routes/
│   │   ├── enquiry.routes.js              # Enquiry endpoints
│   │   └── springEnquiry.routes.js        # Spring enquiry endpoints
│   └── utils/
│       └── emailService.js                 # Email sending utilities
│
└── frontend/                    # React/Vite Frontend
    ├── index.html               # Main HTML entry point
    ├── package.json
    ├── postcss.config.js       # PostCSS configuration
    ├── tailwind.config.js      # Tailwind CSS configuration
    ├── vite.config.js          # Vite build configuration
    ├── vercel.json             # Frontend deployment config
    ├── public/
    │   ├── ads.txt             # Ad configuration
    │   ├── google64cacfe2f5bfb883.html  # Google verification
    │   ├── robots.txt          # SEO robots file
    │   ├── sitemap.xml         # XML sitemap for SEO
    │   └── icons/              # Favicon and icon assets
    └── src/
        ├── App.jsx             # Main app component with routing
        ├── index.css           # Global styles
        ├── main.jsx            # React entry point
        ├── Assests/            # Static assets
        ├── components/
        │   ├── AdBanner.jsx           # Advertisement banner
        │   ├── Footer.jsx             # Footer component
        │   ├── LanguageThemeSwitcher.jsx  # Language & theme toggle
        │   ├── Loading.jsx            # Loading spinner
        │   ├── Navbar.jsx             # Navigation bar
        │   ├── ScrollToTop.jsx        # Scroll to top button
        │   └── SEO.jsx                # SEO meta tags component
        ├── context/
        │   ├── LanguageContext.jsx    # Multi-language support
        │   └── ThemeContext.jsx       # Dark/light theme support
        ├── pages/
        │   ├── Home.jsx               # Landing page
        │   ├── About.jsx              # Company information
        │   ├── Contact.jsx            # Contact form page
        │   ├── Products.jsx           # Product showcase
        │   ├── SpringEnquiry.jsx      # Spring product enquiry form
        │   ├── PrivacyPolicy.jsx      # Privacy policy page
        │   └── TermsOfUse.jsx         # Terms of use page
        └── utils/
            └── translations.js        # Translation strings for multi-language
```

---

## 💻 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB instance (local or cloud-based)
- Git

### Step 1: Clone or Extract the Project
```bash
cd "f:\Noor Springs\NoorSprings"
```

### Step 2: Install All Dependencies
```bash
npm run install-all
```

This command will install dependencies for both backend and frontend.

Alternatively, install separately:
```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/noor-springs
# or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/noor-springs

# Server
PORT=5000
NODE_ENV=development

# Email Configuration (Optional - for Nodemailer)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

# Frontend API
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Running the Application

### Development Mode (All Services)
Run both backend and frontend simultaneously:
```bash
npm run dev
```

### Backend Only
```bash
npm run start-backend
```
Server runs on: `http://localhost:5000`

### Frontend Only
```bash
npm run start-frontend
```
Frontend runs on: `http://localhost:5173`

### Production Build
Build the frontend for production:
```bash
npm run build-frontend
```

Output will be in `frontend/dist/`

---

## 📡 Backend API

### API Base URL
Development: `http://localhost:5000/api`

### Health Check
```
GET /api/health
```
Returns API status and confirmation.

### General Enquiries Endpoints

#### Get All Enquiries
```
GET /api/enquiries
```

#### Create New Enquiry
```
POST /api/enquiries
Content-Type: application/json

{
  "name": "Customer Name",
  "email": "customer@example.com",
  "phone": "+1234567890",
  "subject": "Enquiry Subject",
  "message": "Enquiry message"
}
```

#### Get Specific Enquiry
```
GET /api/enquiries/:id
```

### Spring Enquiries Endpoints

#### Get All Spring Enquiries
```
GET /api/spring-enquiries
```

#### Create Spring Enquiry
```
POST /api/spring-enquiries
Content-Type: application/json

{
  "name": "Customer Name",
  "email": "customer@example.com",
  "phone": "+1234567890",
  "springType": "Compression Spring",
  "specifications": "Custom specifications",
  "quantity": 1000
}
```

#### Get Specific Spring Enquiry
```
GET /api/spring-enquiries/:id
```

---

## 🎨 Frontend Features

### Pages
- **Home**: Landing page with company introduction
- **About**: Company information and history
- **Products**: Spring product catalog
- **Contact**: General contact form
- **Spring Enquiry**: Specialized form for spring product enquiries
- **Privacy Policy**: Privacy policy document
- **Terms of Use**: Terms of service document

### Components
- **Navbar**: Navigation with responsive menu
- **Footer**: Site footer with links
- **Language Theme Switcher**: Toggle between languages and dark/light modes
- **Loading**: Reusable loading component
- **Ad Banner**: Advertisement display area
- **Scroll to Top**: Utility for smooth page scrolling
- **SEO**: Meta tag management for each page

### Contexts
- **LanguageContext**: Manages multi-language support
- **ThemeContext**: Manages dark/light theme

### Utilities
- **translations.js**: Contains all translation strings for supported languages

---

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI              # MongoDB connection string
PORT                     # Server port (default: 5000)
NODE_ENV                 # Environment mode (development/production)
EMAIL_USER              # Email sender address
EMAIL_PASSWORD          # Email app password
EMAIL_HOST              # SMTP host
EMAIL_PORT              # SMTP port
```

### Frontend (.env or .env.local)
```env
VITE_API_URL            # Backend API base URL
```

---

## 🚢 Deployment

### Vercel Deployment

The project is configured for Vercel deployment with `vercel.json` files in both root and frontend directories.

#### Deploy Backend
```bash
cd backend
vercel deploy
```

#### Deploy Frontend
```bash
cd frontend
vercel deploy
```

#### Environment Variables on Vercel
Add environment variables through Vercel dashboard:
- MONGODB_URI
- EMAIL_USER
- EMAIL_PASSWORD
- PORT

---

## 📊 Database Models

### Enquiry Model
```javascript
{
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: Date,
  updatedAt: Date
}
```

### SpringEnquiry Model
```javascript
{
  name: String,
  email: String,
  phone: String,
  springType: String,
  specifications: String,
  quantity: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔒 Security Features

- **CORS**: Cross-Origin Resource Sharing enabled
- **Input Validation**: express-validator middleware
- **Error Handling**: Comprehensive error handling middleware
- **Environment Variables**: Sensitive data protected with dotenv
- **HTTPS**: Ready for HTTPS deployment

---

## 📱 Responsive Design

- Mobile-first approach using Tailwind CSS
- Responsive navigation bar
- Mobile-optimized forms
- Flexible grid layouts
- Touch-friendly interface

---

## 🌐 Multi-Language Support

The application includes built-in multi-language support through:
- **LanguageContext**: Centralized language state management
- **translations.js**: Translation strings for all supported languages
- **Language Switcher**: UI component to change language

---

## 🎨 Theme Support

- **Dark Mode**: Full dark mode implementation
- **Light Mode**: Default light theme
- **ThemeContext**: Centralized theme state management
- **Persistent**: Theme preference can be saved to localStorage

---

## 📈 SEO Optimization

- **Sitemap**: `public/sitemap.xml` for search engines
- **Robots.txt**: `public/robots.txt` for crawlers
- **Meta Tags**: React Helmet for dynamic meta management
- **Semantic HTML**: Proper HTML structure
- **Google Verification**: Google Search Console verification file

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

## 📄 License

ISC License - See LICENSE file for details

---

## 📧 Support & Contact

For support or inquiries, please contact:
- **Email**: info@noorsprings.com
- **Website**: www.noorsprings.com
- **Phone**: +1 (XXX) XXX-XXXX

---

## 📝 Version History

- **v1.0.0** (Current): Initial release with full MERN stack implementation

---

**Last Updated**: December 27, 2025

---

## 🔗 Quick Links

- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)
- [API Documentation](#-backend-api)
- [Deployment Guide](#-deployment)

---

Developed with ❤️ for Noor Springs
