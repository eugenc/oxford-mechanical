# Image Assets Guide

## Folder Structure

```
referral-landing-page/
├── src/assets/images/          # Import these in React components
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── rising-costs-icon.svg
│   ├── storm-protection-icon.svg
│   ├── sunshine-icon.svg
│   └── home-value-icon.svg
└── public/images/              # Direct access at /images/filename.jpg
    └── (static images)
```

## Recommended Images

### 1. Logo
- **File:** `src/assets/images/logo.png`
- **Size:** 300px wide, transparent background
- **Format:** PNG
- **Usage:** Hero section, navbar

### 2. Hero Background
- **File:** `src/assets/images/hero-bg.jpg`
- **Size:** 1920x800px (or larger)
- **Format:** JPG
- **Content:** Florida home with solar panels, blue sky
- **Usage:** Hero section background

### 3. Benefit Icons (4 icons)
- **Files:** 
  - `rising-costs-icon.svg` - Dollar sign or upward graph
  - `storm-protection-icon.svg` - Lightning/battery icon
  - `sunshine-icon.svg` - Sun icon
  - `home-value-icon.svg` - House with upward arrow
- **Size:** 64x64px
- **Format:** SVG (preferred) or PNG
- **Style:** Simple, flat design matching FPL blue (#2F97DA)

### 4. Success Icon (Optional)
- **File:** `src/assets/images/success-checkmark.svg`
- **Size:** 80x80px
- **Format:** SVG
- **Usage:** Success message after form submission

## How to Add Images

### Method 1: Import in React Component (Recommended)
Place images in `src/assets/images/` and import them:

```javascript
import logo from '../assets/images/logo.png'

function Component() {
  return <img src={logo} alt="Logo" />
}
```

### Method 2: Public Folder
Place images in `public/images/` and reference directly:

```javascript
<img src="/images/logo.png" alt="Logo" />
```

## Where Images Are Already Configured

### Hero Component (`src/components/Hero.jsx`)
```javascript
// Uncomment these lines and add your images:
import logo from '../assets/images/logo.png'
import heroBackground from '../assets/images/hero-bg.jpg'
```

Then uncomment the logo in the JSX:
```jsx
<img src={logo} alt="Green Approved Solutions" className="hero-logo" />
```

And in `Hero.css`, uncomment:
```css
background-image: url('../assets/images/hero-bg.jpg');
```

### Benefits Component (`src/components/Benefits.jsx`)
```javascript
// Uncomment these lines:
import risingCostsIcon from '../assets/images/rising-costs-icon.svg'
import stormProtectionIcon from '../assets/images/storm-protection-icon.svg'
import sunshineIcon from '../assets/images/sunshine-icon.svg'
import homeValueIcon from '../assets/images/home-value-icon.svg'
```

Then uncomment the `image` properties in the benefits array.

## Image Optimization Tips

1. **Compress images** before adding:
   - Use TinyPNG for PNGs/JPGs
   - Use SVGOMG for SVGs

2. **Use appropriate formats:**
   - SVG for icons and logos (scalable)
   - PNG for images needing transparency
   - JPG for photos

3. **Responsive images:**
   - Provide high-res images (2x) for retina displays
   - Hero background should be at least 1920px wide

## Example: Adding Logo

1. Save your logo as `src/assets/images/logo.png`
2. Open `src/components/Hero.jsx`
3. Uncomment line 3: `import logo from '../assets/images/logo.png'`
4. Uncomment lines 11-12 in the JSX
5. Save and the logo will appear!

## Free Image Resources

If you need placeholder images:
- **Unsplash** - Free high-quality photos (solar panels, homes)
- **Flaticon** - Free icons (with attribution)
- **Heroicons** - Free SVG icons
- **Undraw** - Free illustrations

## Current State

✅ Folder structure created
✅ Import statements ready (commented out)
✅ Components configured to use images
⏳ Waiting for you to add image files

