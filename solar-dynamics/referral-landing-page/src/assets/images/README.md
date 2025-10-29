# Image Assets

Place your images in this folder and import them into your components.

## Recommended Images

### Hero Section
- **hero-bg.jpg** - Background image for hero section (1920x800px recommended)
- **logo.png** - Company logo (transparent PNG, ~300px wide)

### Benefits Section
- **rising-costs-icon.svg** - Icon for rising energy costs
- **storm-protection-icon.svg** - Icon for storm season protection
- **sunshine-icon.svg** - Icon for sunshine advantage
- **home-value-icon.svg** - Icon for home value boost

### Additional
- **solar-panel-home.jpg** - Solar panels on a home
- **florida-home.jpg** - Florida home with solar
- **success-checkmark.svg** - Success icon

## Usage Example

```javascript
import logo from './assets/images/logo.png'
import heroBackground from './assets/images/hero-bg.jpg'

// In your component:
<img src={logo} alt="Company Logo" />
<div style={{ backgroundImage: `url(${heroBackground})` }} />
```

