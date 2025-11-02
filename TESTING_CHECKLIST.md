# ✅ Spring Enquiry System - Testing Checklist

## 🧪 Test Status: Ready for Testing

### Pre-Test Verification ✅

#### Files Created/Modified
- ✅ `frontend/src/pages/SpringEnquiry.jsx` - Main form page exists
- ✅ `frontend/src/App.jsx` - Route `/spring-enquiry` registered
- ✅ `frontend/src/pages/Products.jsx` - CTA banner added
- ✅ `frontend/src/pages/Contact.jsx` - CTA info card added
- ✅ `backend/models/SpringEnquiry.model.js` - Schema defined
- ✅ `backend/controllers/springEnquiry.controller.js` - Controllers created
- ✅ `backend/routes/springEnquiry.routes.js` - API routes with multer
- ✅ `backend/utils/emailService.js` - Email template added
- ✅ `backend/server.js` - Routes registered

#### Code Quality
- ✅ No TypeScript/JavaScript errors
- ✅ Only CSS linting warnings (Tailwind - safe to ignore)
- ✅ All imports correctly added
- ✅ All dependencies installed (multer, axios, etc.)

---

## 🧪 Manual Testing Guide

### 1. Server Setup

**Backend Server:**
```bash
cd d:\Noor_Springs\backend
npm run dev
```
Expected: Server running on port 5000 ✅

**Frontend Server:**
```bash
cd d:\Noor_Springs\frontend
npm run dev
```
Expected: Dev server on http://localhost:3001 ✅

**MongoDB:**
```bash
# Should be running on port 27017
# Check connection in backend terminal
```
Expected: "MongoDB Connected" message ✅

---

### 2. Navigation Tests

#### Test 2.1: Direct URL Access
- **Action:** Visit `http://localhost:3001/spring-enquiry`
- **Expected Result:** 
  - ✅ Page loads without errors
  - ✅ Blue gradient hero section visible
  - ✅ "Spring Specification Enquiry" heading
  - ✅ Instructions card present
  - ✅ Form with all fields visible

#### Test 2.2: Products Page CTA
- **Action:** Go to `http://localhost:3001/products`
- **Expected Result:**
  - ✅ Blue CTA banner between filters and products
  - ✅ Text: "Need Custom Spring Specifications?"
  - ✅ Button: "Technical Enquiry Form"
  - **Action:** Click button
  - ✅ Redirects to `/spring-enquiry`

#### Test 2.3: Contact Page CTA
- **Action:** Go to `http://localhost:3001/contact`
- **Expected Result:**
  - ✅ Blue gradient info card above contact form
  - ✅ Text: "📐 Need to Submit Detailed Spring Specifications?"
  - ✅ Button with ArrowRight icon
  - **Action:** Click button
  - ✅ Redirects to `/spring-enquiry`

---

### 3. Form Field Tests

#### Test 3.1: Personal Information Section
Fill in the following:
```
Name: Test User
Email: test@example.com
Phone: 9876543210
Company: Test Industries (optional)
```
- ✅ All fields accept input
- ✅ No validation errors on valid data

#### Test 3.2: Spring Specifications Section
Fill in the following:
```
Spring Type: Compression Spring (dropdown)
Outer Diameter: 25.5 (with "mm" label visible)
Inner Diameter: 20.0 (with "mm" label visible)
Number of Rings: 10
Wire Diameter: 2.5 (with "mm" label visible)
Free Length: 50.0 (with "mm" label visible)
Quantity: 100
Material: Stainless Steel (SS304/SS316)
Finish: Zinc Plated
Load Requirement: 50N at 30mm (optional)
```
- ✅ All dropdowns work
- ✅ Number inputs accept decimals
- ✅ Unit labels ("mm") visible

#### Test 3.3: File Upload Section
- **Action:** Click "Upload files" or drag files
- **Expected:** 
  - ✅ File input opens
  - **Action:** Select 1 PDF file (< 10MB)
  - ✅ File appears in list with size
  - ✅ Remove button (X) visible
  - **Action:** Click X to remove
  - ✅ File removed from list
  - **Action:** Try to upload 6 files
  - ✅ Error: "Maximum 5 files allowed"
  - **Action:** Try to upload 15MB file
  - ✅ Error: "Each file must be less than 10MB"

#### Test 3.4: Additional Information
```
Special Requirements: Heat treatment required, ±0.1mm tolerance
```
- ✅ Textarea accepts text
- ✅ Text wraps properly

---

### 4. Form Validation Tests

#### Test 4.1: Required Fields
- **Action:** Leave name empty, click Submit
- **Expected:** ✅ Browser validation error "Please fill out this field"
- **Action:** Enter invalid email "notanemail"
- **Expected:** ✅ Browser validation error
- **Action:** Enter 9-digit phone "987654321"
- **Expected:** ✅ Browser validation error (requires 10 digits)

#### Test 4.2: Field Formats
- **Action:** Enter negative OD "-5"
- **Expected:** ✅ Field doesn't accept or shows error
- **Action:** Enter very large quantity "999999999"
- **Expected:** ✅ Accepts valid number

---

### 5. Submission Tests

#### Test 5.1: Form Submit (Save to Database)
1. Fill all required fields with valid data
2. Upload 1-2 test files (PDF/JPG)
3. Click "Submit Enquiry" button
4. **Expected:**
   - ✅ Button shows loading state with spinner
   - ✅ Button text changes to "Submitting..."
   - ✅ After ~1-2 seconds, success message appears
   - ✅ Green alert box at top: "Spring enquiry submitted successfully..."
   - ✅ Form resets to empty
   - ✅ Page scrolls to top

**Backend Verification:**
```bash
# In MongoDB
use noor_springs
db.springenquiries.find().pretty()
```
- ✅ New document exists
- ✅ All fields saved correctly
- ✅ attachments array has file info
- ✅ status is "pending"
- ✅ createdAt timestamp present

**File Storage Verification:**
- ✅ Check `backend/uploads/spring-enquiries/` folder
- ✅ Files exist with unique names
- ✅ File sizes correct

**Email Verification:**
- ✅ Check email inbox (if SMTP configured)
- ✅ Subject: "Spring Specification Enquiry - [Type] - [Name]"
- ✅ Email contains all specifications
- ✅ Attachments list visible

#### Test 5.2: WhatsApp Integration
1. Fill form with valid data
2. Click "Send to WhatsApp" button
3. **Expected:**
   - ✅ WhatsApp opens (desktop/web or mobile app)
   - ✅ Chat with +91-9440596384
   - ✅ Pre-filled message with:
     - Personal Details section
     - Spring Specifications section
     - All values populated
     - Note about sharing drawings via email
   - ✅ Customer can edit message before sending

#### Test 5.3: Gmail Integration
1. Fill form with valid data
2. Click "Send via Gmail" button
3. **Expected:**
   - ✅ Default email client opens OR Gmail web opens
   - ✅ To: noorsprings@gmail.com
   - ✅ Subject: "Spring Enquiry - [Type] - [Name]"
   - ✅ Body contains formatted specifications
   - ✅ All values populated
   - ✅ Professional format maintained

---

### 6. Responsive Design Tests

#### Test 6.1: Desktop (> 1024px)
- ✅ Form in centered container (max-width)
- ✅ Personal info: 2 columns
- ✅ Spring specs: 2 columns
- ✅ Submit buttons side-by-side
- ✅ Help section at bottom

#### Test 6.2: Tablet (768px - 1024px)
- ✅ Form adapts to width
- ✅ 2 columns maintained
- ✅ Buttons stack on smaller tablets

#### Test 6.3: Mobile (< 768px)
- **Action:** Open in mobile view or resize browser
- **Expected:**
  - ✅ Single column form layout
  - ✅ Full width inputs
  - ✅ Stacked buttons
  - ✅ Touch-friendly file upload
  - ✅ Readable text size
  - ✅ No horizontal scroll

---

### 7. Error Handling Tests

#### Test 7.1: Network Error
- **Action:** Stop backend server, submit form
- **Expected:**
  - ✅ Red error message appears
  - ✅ "Failed to submit enquiry. Please try again..."
  - ✅ Form data NOT cleared
  - ✅ User can retry

#### Test 7.2: Server Error
- **Action:** Submit with backend running but MongoDB down
- **Expected:**
  - ✅ Error message displayed
  - ✅ Clear error explanation

#### Test 7.3: File Upload Error
- **Action:** Try to upload .exe file
- **Expected:**
  - ✅ File rejected
  - ✅ Error message about file types

---

### 8. User Experience Tests

#### Test 8.1: Instructions Clarity
- ✅ Instructions card explains how to fill form
- ✅ Required fields marked with *
- ✅ Unit labels (mm) clearly visible
- ✅ Dropdown options comprehensive

#### Test 8.2: Help Section
- ✅ Help section visible at bottom
- ✅ Phone number clickable (tel: link)
- ✅ WhatsApp link works
- ✅ Helpful guidance text

#### Test 8.3: Loading States
- ✅ Submit button shows spinner
- ✅ Button disabled during submission
- ✅ Visual feedback on file upload

---

### 9. SEO Tests

#### Test 9.1: Meta Tags
- **Action:** View page source (`Ctrl+U`)
- **Expected:**
  - ✅ Title: "Spring Enquiry Form - Custom Spring Quotation | Noor Springs"
  - ✅ Description meta tag present
  - ✅ Keywords meta tag present
  - ✅ Canonical URL set

#### Test 9.2: Structured Data
- ✅ JSON-LD schema (if applicable)
- ✅ Open Graph tags

---

### 10. Integration Tests

#### Test 10.1: Products → Spring Enquiry Flow
1. Start at `/products`
2. Click "Technical Enquiry Form"
3. Fill form
4. Submit
5. **Expected:** Complete flow works smoothly

#### Test 10.2: Contact → Spring Enquiry Flow
1. Start at `/contact`
2. Click technical enquiry button
3. Fill form
4. Send to WhatsApp
5. **Expected:** WhatsApp opens with data

---

## 🎯 Test Results Summary

### Critical Tests (Must Pass)
- [ ] Form page loads without errors
- [ ] Form submission saves to database
- [ ] File upload works
- [ ] WhatsApp integration works
- [ ] Gmail integration works
- [ ] Success/error messages display
- [ ] Form validation works
- [ ] Mobile responsive

### Secondary Tests (Should Pass)
- [ ] Email notifications sent
- [ ] All CTAs work (Products, Contact)
- [ ] File removal works
- [ ] Error handling graceful
- [ ] Help section visible

### Nice-to-Have Tests
- [ ] Loading animations smooth
- [ ] SEO tags correct
- [ ] Dark mode support (if enabled)

---

## 🐛 Bug Reporting Template

If you find issues, report using this format:

**Bug Title:** [Brief description]

**Steps to Reproduce:**
1. Go to [page]
2. Click on [element]
3. Enter [data]
4. Expected [X], got [Y]

**Environment:**
- Browser: [Chrome/Firefox/etc]
- Device: [Desktop/Mobile]
- Screen Size: [1920x1080]

**Screenshots:** [Attach if possible]

**Priority:** [Critical/High/Medium/Low]

---

## 📊 Testing Completion Checklist

### Functional Testing
- [ ] All form fields work correctly
- [ ] Form submission successful
- [ ] File upload works (single & multiple)
- [ ] WhatsApp integration functional
- [ ] Gmail integration functional
- [ ] Database records created
- [ ] Files stored on server
- [ ] Email notifications sent

### UI/UX Testing
- [ ] Responsive on all devices
- [ ] All buttons clickable
- [ ] Loading states visible
- [ ] Success/error messages clear
- [ ] Form validation user-friendly
- [ ] Instructions helpful

### Integration Testing
- [ ] Navigation from Products works
- [ ] Navigation from Contact works
- [ ] Backend API responds correctly
- [ ] MongoDB saves data properly
- [ ] File system stores files

### Performance Testing
- [ ] Page loads quickly (< 2s)
- [ ] Form submission fast (< 3s)
- [ ] File upload reasonable (< 5s per file)
- [ ] No memory leaks

### Security Testing
- [ ] XSS protection works
- [ ] File type validation enforced
- [ ] File size limits enforced
- [ ] Input sanitization active
- [ ] No sensitive data in console

---

## 🚀 Ready for Production?

**Before deploying to production, ensure:**
- ✅ All critical tests passed
- ✅ Email SMTP configured (`.env` file)
- ✅ MongoDB production connection ready
- ✅ File upload directory has proper permissions
- ✅ Backend API accessible from frontend
- ✅ CORS configured for production domain
- ✅ Error tracking enabled (optional)
- ✅ Analytics configured (optional)

---

## 📞 Support

If you encounter issues during testing:
- Check browser console for errors (F12)
- Check backend terminal for API errors
- Verify MongoDB connection
- Review documentation: `SPRING_ENQUIRY_GUIDE.md`
- Contact: +91-9440596384

---

**Last Updated:** November 2, 2025  
**Testing Status:** ⏳ Awaiting User Testing  
**Expected Duration:** 15-30 minutes for complete testing
