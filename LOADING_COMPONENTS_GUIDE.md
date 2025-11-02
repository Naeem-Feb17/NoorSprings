# 🌀 Noor Springs Loading Components

## Overview

Unique, spring-themed loading components designed specifically for Noor Springs. Features bouncing springs, compression effects, and industrial-style animations that reflect the company's manufacturing identity.

---

## 📦 Components Available

### 1. **Main Loading Component** (`Loading.jsx`)

```jsx
import Loading from './components/Loading';

// Full screen loading
<Loading fullScreen={true} message="Loading products..." />

// Inline loading
<Loading fullScreen={false} message="Please wait..." />
```

**Features:**
- Animated spring coils with bounce effect
- Compression plate animation
- Company branding (Noor Springs)
- Progress bar
- Customizable message
- Dark mode support

---

### 2. **Loading Spinner** (`Loading.jsx`)

```jsx
import { LoadingSpinner } from './components/Loading';

<LoadingSpinner size="sm" />   // Small
<LoadingSpinner size="md" />   // Medium
<LoadingSpinner size="lg" />   // Large
```

**Use for:**
- Inline loading states
- Button loading
- Small content sections

---

### 3. **Button Loading** (`Loading.jsx`)

```jsx
import { ButtonLoading } from './components/Loading';

<ButtonLoading
  loading={isSubmitting}
  onClick={handleSubmit}
  className="btn-primary"
>
  Submit Enquiry
</ButtonLoading>
```

**Features:**
- Shows spinner while loading
- Disables button automatically
- Maintains button size
- Smooth transitions

---

### 4. **Circular Spring Loader** (`LoadingVariants.jsx`)

```jsx
import { CircularSpringLoader } from './components/LoadingVariants';

<CircularSpringLoader size="sm" />   // 16px
<CircularSpringLoader size="md" />   // 24px
<CircularSpringLoader size="lg" />   // 32px
```

**Perfect for:**
- Modern, eye-catching loading
- Dashboard widgets
- Card placeholders

---

### 5. **Bouncing Springs Loader** (`LoadingVariants.jsx`)

```jsx
import { BouncingSpringLoader } from './components/LoadingVariants';

<BouncingSpringLoader />
```

**Use for:**
- Playful loading states
- Product loading
- Fun transitions

---

### 6. **Industrial Spring Loader** (`LoadingVariants.jsx`)

```jsx
import { IndustrialSpringLoader } from './components/LoadingVariants';

<IndustrialSpringLoader />
```

**Features:**
- SVG-based spring animation
- Compression effect
- Professional industrial look
- "Manufacturing Quality..." text

**Perfect for:**
- Product pages
- Manufacturing processes
- Technical sections

---

### 7. **Spring Dots Loader** (`LoadingVariants.jsx`)

```jsx
import { SpringDotsLoader } from './components/LoadingVariants';

<SpringDotsLoader />
```

**Use for:**
- Minimal loading states
- Inline text loading
- Compact spaces

---

### 8. **Page Transition Loader** (`LoadingVariants.jsx`)

```jsx
import { PageTransitionLoader } from './components/LoadingVariants';

<PageTransitionLoader />
```

**Features:**
- Full-screen overlay
- Backdrop blur
- Company branding
- Large circular loader

**Use for:**
- Route changes
- Page transitions
- Initial app loading

---

### 9. **Skeleton Loader** (`LoadingVariants.jsx`)

```jsx
import { SkeletonLoader } from './components/LoadingVariants';

<SkeletonLoader lines={3} />
<SkeletonLoader lines={5} className="max-w-md" />
```

**Use for:**
- Content placeholders
- Text loading
- Article previews

---

### 10. **Card Skeleton** (`LoadingVariants.jsx`)

```jsx
import { CardSkeleton } from './components/LoadingVariants';

<CardSkeleton count={3} />  // Shows 3 card skeletons
```

**Perfect for:**
- Product grids
- Service cards
- Blog posts

---

## 🎨 Custom Animations

All animations are defined in `index.css`:

### Available Animations:
1. **spring-bounce** - Springs bouncing up and down
2. **compress** - Compression plate effect
3. **loading-bar** - Progress bar animation
4. **fade-in** - Smooth fade in
5. **rotate-spring** - Rotating spring coils
6. **pulse-glow** - Pulsing glow effect

---

## 💡 Usage Examples

### Example 1: Contact Form Loading
```jsx
import { useState } from 'react';
import { ButtonLoading } from './components/Loading';

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Submit form
      await submitEnquiry(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <ButtonLoading loading={loading} className="btn-primary">
        Submit Enquiry
      </ButtonLoading>
    </form>
  );
}
```

---

### Example 2: Products Page Loading
```jsx
import { useState, useEffect } from 'react';
import { CardSkeleton } from './components/LoadingVariants';

function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="container py-8">
        <CardSkeleton count={6} />
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Product grid */}
    </div>
  );
}
```

---

### Example 3: Page Transition
```jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageTransitionLoader } from './components/LoadingVariants';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <PageTransitionLoader />}
      {/* App content */}
    </>
  );
}
```

---

### Example 4: Async Data Loading
```jsx
import { CircularSpringLoader } from './components/LoadingVariants';

function DashboardWidget({ data, loading }) {
  if (loading) {
    return (
      <div className="card p-8 text-center">
        <CircularSpringLoader size="md" />
        <p className="mt-4 text-steel-600">Loading stats...</p>
      </div>
    );
  }

  return (
    <div className="card p-8">
      {/* Widget content */}
    </div>
  );
}
```

---

### Example 5: Inline Content Loading
```jsx
import { SpringDotsLoader } from './components/LoadingVariants';

function InlineLoader({ isLoading, children }) {
  return (
    <div>
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <SpringDotsLoader />
          <span className="text-steel-600">Loading...</span>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
```

---

## 🎯 Best Practices

### 1. **Choose the Right Loader**
- **Full Page**: Use `Loading` or `PageTransitionLoader`
- **Cards/Grid**: Use `CardSkeleton`
- **Buttons**: Use `ButtonLoading`
- **Inline**: Use `SpringDotsLoader` or `LoadingSpinner`

### 2. **Provide Context**
Always add a message explaining what's loading:
```jsx
<Loading message="Loading your enquiry..." />
<Loading message="Fetching products..." />
```

### 3. **Maintain Consistent Sizing**
Use skeleton loaders that match your content size:
```jsx
// For a 3-card grid
<CardSkeleton count={3} />

// For text content
<SkeletonLoader lines={paragraph.length} />
```

### 4. **Dark Mode Support**
All loaders automatically support dark mode using Tailwind's dark mode classes.

### 5. **Accessibility**
Add ARIA labels for screen readers:
```jsx
<div role="status" aria-live="polite" aria-label="Loading content">
  <Loading />
</div>
```

---

## 🎨 Customization

### Change Colors
Loaders use the primary color from your Tailwind config. To customize:

```css
/* In tailwind.config.js */
colors: {
  primary: {
    400: '#60a5fa',  // Lighter blue
    600: '#2563eb',  // Main blue
    700: '#1d4ed8',  // Darker blue
  }
}
```

### Adjust Animation Speed
```css
/* In index.css */
.animate-spring-bounce {
  animation: spring-bounce 1s ease-in-out infinite; /* Changed from 1.5s */
}
```

### Create Custom Variants
```jsx
import { LoadingSpinner } from './components/Loading';

function CustomLoader() {
  return (
    <div className="flex flex-col items-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-lg font-medium text-primary-600">
        Custom message here
      </p>
    </div>
  );
}
```

---

## 📱 Responsive Behavior

All loaders are fully responsive:
- Scale appropriately on mobile
- Maintain aspect ratios
- Support dark mode
- Touch-friendly (no hover-only states)

---

## ⚡ Performance

- **Lightweight**: Pure CSS animations (no JavaScript)
- **GPU Accelerated**: Uses transform and opacity
- **No Dependencies**: Built with Tailwind CSS
- **Tree-shakeable**: Import only what you need

---

## 🧪 Testing

To test all loaders, import the demo component:

```jsx
import LoadingDemo from './components/LoadingDemo';

// In your route
<Route path="/loading-demo" element={<LoadingDemo />} />
```

Visit `/loading-demo` to see all variants in action.

---

## 📋 Quick Reference

| Component | Size | Use Case |
|-----------|------|----------|
| `Loading` | Full/Inline | Main loading states |
| `LoadingSpinner` | sm/md/lg | Inline spinners |
| `ButtonLoading` | Auto | Button states |
| `CircularSpringLoader` | sm/md/lg | Modern loaders |
| `BouncingSpringLoader` | Fixed | Playful loading |
| `IndustrialSpringLoader` | Fixed | Technical pages |
| `SpringDotsLoader` | Small | Minimal loading |
| `PageTransitionLoader` | Full screen | Page changes |
| `SkeletonLoader` | Custom | Text placeholders |
| `CardSkeleton` | Grid | Card placeholders |

---

## ✨ Special Features

### Spring-Themed
- All animations reflect the spring manufacturing theme
- Bouncing, compression, and coil effects
- Industrial and professional aesthetics

### Brand Consistent
- Uses Noor Springs colors (primary blue, steel gray)
- Company name and tagline integration
- Matches overall design system

### Production Ready
- Fully tested components
- Dark mode support
- Accessible markup
- Performance optimized

---

**Your unique spring-themed loading system is ready to use!** 🚀
