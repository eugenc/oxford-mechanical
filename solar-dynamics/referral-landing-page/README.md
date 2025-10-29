# Solar Referral Landing Page

A modern, responsive landing page for solar energy referral program built with React and Vite, featuring a 2-step form and FPL-themed design.

## Features

- 🎨 Modern UI with FPL brand colors and design tokens
- 📱 Fully responsive design
- 📝 2-step referral form with validation
- ✅ Form validation with helpful error messages
- 🔍 Address search functionality (ready for API integration)
- 🎯 Smooth scrolling and transitions
- ♿ Accessible components

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables from FPL theme
- **React Hook Form** - Form management (ready to integrate)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Form Structure

### Step 1: Referral Details
- Full Name
- Email Address
- Phone Number
- Street Address (with search functionality)
- City
- State
- ZIP Code
- Country (default: United States)

### Step 2: Your Information
- Your Full Name
- Your Email Address
- Your Phone Number

## Customization

### Theme

The theme is based on FPL brand colors and can be customized in:
- `src/theme.js` - JavaScript theme tokens
- `fpl-colors.json` - Color design tokens
- `fpl-theme.json` - Semantic theme tokens

### Content

Edit the following components to update content:
- `src/components/Hero.jsx` - Hero section
- `src/components/Benefits.jsx` - Benefits and process
- `src/components/ReferralForm.jsx` - Form fields and validation
- `src/components/Footer.jsx` - Footer information

## Integration Points

### Form Submission

The form data is currently logged to console. To integrate with your backend:

1. Update the `handleFormSubmit` function in `src/App.jsx`
2. Add your API endpoint and send the form data

```javascript
const handleFormSubmit = async (data) => {
  try {
    const response = await fetch('/api/referrals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    // Handle response
  } catch (error) {
    // Handle error
  }
}
```

### Address Autocomplete

To add Google Places API or similar:

1. Get an API key from Google Cloud Console
2. Add the API script to `index.html`
3. Update `handleAddressSearch` in `src/components/ReferralForm.jsx`

## Project Structure

```
referral-landing-page/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Benefits.jsx
│   │   ├── Benefits.css
│   │   ├── ReferralForm.jsx
│   │   ├── ReferralForm.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── theme.js
├── fpl-colors.json
├── fpl-theme.json
├── index.html
├── package.json
└── vite.config.js
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Green Approved Solutions. All rights reserved.

