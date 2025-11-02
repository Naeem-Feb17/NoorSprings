# 📋 Spring Technical Enquiry System - Complete Guide

## 🎯 Overview

The Spring Technical Enquiry System is a comprehensive form for customers to submit detailed spring specifications with technical drawings. It supports file uploads and provides multiple submission methods (Form, WhatsApp, Gmail).

---

## 📄 Features

### ✅ Detailed Specification Form
- **Personal Information**: Name, Email, Phone, Company (optional)
- **Spring Specifications**:
  - Spring Type (dropdown)
  - Outer Diameter (OD) in mm
  - Inner Diameter (ID) in mm
  - Number of Rings/Coils
  - Wire Diameter in mm
  - Free Length in mm
  - Quantity Required
  - Material Selection
  - Surface Finish/Coating
  - Load Requirement (optional)
- **Additional Information**: Text area for special requirements
- **File Upload**: Support for up to 5 technical drawings (PDF, JPG, PNG, DWG, DXF)

### 📤 Multiple Submission Methods
1. **Direct Form Submission**: Saves to database with file attachments
2. **WhatsApp Integration**: Pre-filled message with all specifications
3. **Gmail Integration**: Pre-formatted email with specifications

### 🔒 Validation & Security
- Client-side form validation
- Server-side validation with express-validator
- File type restrictions (PDF, JPG, PNG, DWG, DXF)
- File size limit: 10MB per file, max 5 files
- Secure file storage in uploads directory

---

## 📁 File Structure

### Frontend Files
```
frontend/src/pages/
  └── SpringEnquiry.jsx          # Main enquiry form component

frontend/src/App.jsx              # Added /spring-enquiry route
```

### Backend Files
```
backend/models/
  └── SpringEnquiry.model.js     # Mongoose schema for spring enquiries

backend/controllers/
  └── springEnquiry.controller.js # CRUD operations

backend/routes/
  └── springEnquiry.routes.js    # API routes with multer config

backend/utils/
  └── emailService.js            # Email notification function (updated)

backend/server.js                # Registered spring enquiry routes

backend/uploads/
  └── spring-enquiries/          # File storage directory (auto-created)
```

---

## 🔌 API Endpoints

### Create Spring Enquiry
```http
POST /api/spring-enquiries
Content-Type: multipart/form-data

Body (FormData):
- name: string (required)
- email: string (required)
- phone: string (required, 10 digits)
- company: string (optional)
- springType: string (required, enum)
- outerDiameter: number (required)
- innerDiameter: number (required)
- numberOfRings: number (required)
- wireDiameter: number (required)
- length: number (required)
- numberOfPieces: number (required)
- material: string (required)
- finish: string (required)
- loadRequirement: string (optional)
- additionalInfo: string (optional)
- files: File[] (optional, max 5 files, 10MB each)
```

### Get All Spring Enquiries (Admin)
```http
GET /api/spring-enquiries?status=pending&page=1&limit=10
```

### Get Single Spring Enquiry
```http
GET /api/spring-enquiries/:id
```

### Update Enquiry Status
```http
PATCH /api/spring-enquiries/:id/status
Content-Type: application/json

{
  "status": "reviewed" | "quoted" | "confirmed" | "completed"
}
```

### Delete Spring Enquiry
```http
DELETE /api/spring-enquiries/:id
```

---

## 📊 Database Schema

```javascript
SpringEnquiry {
  // Personal Information
  name: String (required, max 100 chars)
  email: String (required, validated)
  phone: String (required, 10 digits)
  company: String (optional, max 200 chars)
  
  // Spring Specifications
  springType: String (required, enum)
  outerDiameter: Number (required, min 0.01)
  innerDiameter: Number (required, min 0.01)
  numberOfRings: Number (required, min 0.5)
  wireDiameter: Number (required, min 0.01)
  length: Number (required, min 0.01)
  numberOfPieces: Number (required, min 1)
  material: String (required)
  finish: String (required)
  loadRequirement: String (optional, max 200 chars)
  
  // Additional
  additionalInfo: String (optional, max 2000 chars)
  attachments: [{
    filename: String
    originalName: String
    mimetype: String
    size: Number
    path: String
  }]
  
  // Status Tracking
  status: String (enum: pending/reviewed/quoted/confirmed/completed)
  
  // Timestamps
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

---

## 🎨 UI/UX Features

### Form Sections
1. **Personal Information** - Blue border header
2. **Spring Specifications** - Technical fields with mm units
3. **Technical Documents** - Drag & drop file upload
4. **Additional Information** - Free text area

### Visual Elements
- **Status Messages**: Success (green) / Error (red) alerts at top
- **Instructions Card**: Blue info box with form filling guidelines
- **File Upload Zone**: Drag & drop with file list display
- **Unit Indicators**: "mm" suffix on measurement fields
- **Help Section**: Contact options at bottom

### Submission Options
1. **Primary Button**: Blue "Submit Enquiry" with loading state
2. **WhatsApp Button**: Green outline with icon
3. **Gmail Button**: Blue outline with icon

---

## 🚀 Usage Guide

### For Customers

#### 1. Access the Form
- Navigate to `/spring-enquiry`
- Or click "Technical Enquiry Form" buttons on Products or Contact pages

#### 2. Fill Personal Details
```
Name: John Doe
Email: john@company.com
Phone: 9876543210
Company: ABC Industries (optional)
```

#### 3. Enter Spring Specifications
```
Spring Type: Compression Spring
Outer Diameter (OD): 25.5 mm
Inner Diameter (ID): 20.0 mm
Number of Rings/Coils: 10
Wire Diameter: 2.5 mm
Free Length: 50.0 mm
Quantity Required: 100 pieces
Material: Stainless Steel (SS304/SS316)
Surface Finish: Zinc Plated
Load Requirement: 50N at 30mm compression (optional)
```

#### 4. Upload Technical Drawings (Optional)
- Click "Upload files" or drag & drop
- Supported formats: PDF, JPG, PNG, DWG, DXF
- Max 5 files, 10MB each

#### 5. Add Notes (Optional)
```
Special Requirements:
- Heat treatment required
- Tolerance: ±0.1mm
- Application: Automotive suspension
```

#### 6. Submit
Choose one method:
- **Submit Enquiry**: Saves to database
- **Send to WhatsApp**: Opens WhatsApp with pre-filled message
- **Send via Gmail**: Opens email client with formatted specs

---

## 📧 Email Notification Format

When a spring enquiry is submitted, Noor Springs receives:

**Subject**: Spring Specification Enquiry - [Spring Type] - [Customer Name]

**Body**:
- Customer Details table
- Complete Spring Specifications table
- Additional Information (if provided)
- Attachments list with file sizes
- Timestamp

---

## 🔗 Integration Points

### Products Page
```jsx
<Link to="/spring-enquiry">
  Technical Enquiry Form
</Link>
```
CTA banner appears between filters and products grid.

### Contact Page
```jsx
<Link to="/spring-enquiry">
  Technical Enquiry Form
</Link>
```
Info card appears above contact form.

### Navigation
Users can access via:
1. Products page CTA
2. Contact page CTA
3. Direct URL: `/spring-enquiry`

---

## 🛠️ Technical Implementation

### File Upload (Multer Configuration)
```javascript
const storage = multer.diskStorage({
  destination: 'uploads/spring-enquiries',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|jpg|jpeg|png|dwg|dxf/;
  // Validation logic
};

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 5
  },
  fileFilter
});
```

### WhatsApp Message Format
```javascript
const message = `
*Spring Enquiry Request*

*Personal Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Spring Specifications:*
Type: ${formData.springType}
OD: ${formData.outerDiameter} mm
ID: ${formData.innerDiameter} mm
Rings: ${formData.numberOfRings}
Wire Dia: ${formData.wireDiameter} mm
Length: ${formData.length} mm
Quantity: ${formData.numberOfPieces}

Note: Technical drawings can be shared via email.
`;

const whatsappUrl = `https://wa.me/919440596384?text=${encodeURIComponent(message)}`;
```

### Gmail Message Format
```javascript
const subject = `Spring Enquiry - ${formData.springType} - ${formData.name}`;
const body = `
Dear Noor Springs Team,

I would like to request a quotation...

[Complete specifications formatted]
`;

const gmailUrl = `mailto:noorsprings@gmail.com?subject=${subject}&body=${body}`;
```

---

## 📱 Responsive Design

### Mobile (< 768px)
- Single column form layout
- Full-width buttons
- Stacked submission options
- Touch-friendly file upload

### Tablet (768px - 1024px)
- 2-column specification grid
- Horizontal button layout
- Optimized spacing

### Desktop (> 1024px)
- 2-column specification grid
- Side-by-side CTA buttons
- Maximum width 4xl container
- Enhanced visual hierarchy

---

## 🎯 SEO Optimization

```jsx
<SEO
  title="Spring Enquiry Form - Custom Spring Quotation | Noor Springs"
  description="Get a custom quotation for springs. Submit detailed specifications including OD, ID, wire diameter, number of rings, and load requirements."
  keywords="spring quotation, custom spring enquiry, spring specifications, OD ID spring, wire diameter, spring load calculation"
  canonicalUrl="https://noorsprings.in/spring-enquiry"
/>
```

---

## 🔐 Security Considerations

### Client-Side
- Form validation (required fields, email format, phone pattern)
- File type checking
- File size validation
- Maximum file count limit

### Server-Side
- Express-validator for input sanitization
- Multer file filter for type validation
- File size limits enforced
- MongoDB injection prevention
- Error handling with sanitized messages

---

## 📈 Analytics & Tracking

### Recommended Tracking Events
```javascript
// When form is viewed
gtag('event', 'page_view', {
  page_title: 'Spring Technical Enquiry',
  page_location: '/spring-enquiry'
});

// When form is submitted
gtag('event', 'form_submit', {
  form_name: 'spring_enquiry',
  method: 'web_form'
});

// When WhatsApp is clicked
gtag('event', 'contact', {
  method: 'whatsapp',
  form_type: 'spring_enquiry'
});

// When Gmail is clicked
gtag('event', 'contact', {
  method: 'gmail',
  form_type: 'spring_enquiry'
});
```

---

## 🐛 Troubleshooting

### File Upload Not Working
**Problem**: Files not uploading or 500 error
**Solution**: 
1. Check if `uploads/spring-enquiries` directory exists
2. Verify directory permissions
3. Check multer configuration in routes
4. Ensure file types are allowed

### Email Notifications Not Sending
**Problem**: No email received after submission
**Solution**:
1. Check `.env` file for email configuration:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=noorsprings@gmail.com
   ```
2. Verify SMTP credentials
3. Check spam folder

### Form Validation Errors
**Problem**: Form won't submit despite filling all fields
**Solution**:
1. Check browser console for errors
2. Verify all required fields are filled
3. Check phone number format (10 digits)
4. Verify email format
5. Ensure numbers are valid (positive, decimal allowed)

### WhatsApp Not Opening
**Problem**: WhatsApp button doesn't work
**Solution**:
1. Ensure WhatsApp is installed (mobile) or WhatsApp Web is accessible
2. Check if phone number +919440596384 is correct
3. Verify form data is filled before clicking

---

## 🚀 Future Enhancements

### Planned Features
1. **Real-time Quote Calculator**: Calculate spring rate and load based on specs
2. **3D Spring Visualizer**: Show spring based on entered dimensions
3. **Specification Templates**: Save/load common specifications
4. **Bulk Upload**: CSV import for multiple enquiries
5. **Order Tracking**: Link enquiries to orders
6. **Customer Dashboard**: View past enquiries and quotes
7. **Admin Panel**: Manage enquiries, update status, send quotes

### Integration Ideas
1. **Payment Gateway**: Accept advance payments
2. **CAD File Viewer**: Preview DWG/DXF files in browser
3. **CRM Integration**: Sync with sales pipeline
4. **Automated Quoting**: AI-powered price estimation
5. **Video Call**: Schedule technical discussions
6. **Live Chat**: Real-time specification assistance

---

## 📞 Support

For technical issues or questions about the Spring Enquiry System:

- **Developer Support**: Check code comments in source files
- **Customer Support**: +91-9440596384 or noorsprings@gmail.com
- **Documentation**: This guide covers all features

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Complete spring specification form
- ✅ File upload support (5 files, 10MB each)
- ✅ WhatsApp & Gmail integration
- ✅ Email notifications
- ✅ MongoDB storage
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Form validation (client & server)
- ✅ Success/error messaging
- ✅ CTAs on Products and Contact pages

---

**Last Updated**: November 2, 2025
**Version**: 1.0.0
**Status**: Production Ready ✅
