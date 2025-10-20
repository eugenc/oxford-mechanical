# Trust Cards Background Images

This directory contains background images for the trust and certifications cards on the homepage.

## Required Images

### 1. License Certificate Background (`license-certificate-bg.jpg`)
**Purpose**: Licensed Since 2013 card
**Recommended Image**: Professional certificate or license document background
**Suggested Sources**:
- [Pixabay - Certificate Backgrounds](https://pixabay.com/images/search/certificate%2C%20license/)
- [Unsplash - Professional Documents](https://unsplash.com/s/photos/certificate)
- [Pexels - License Documents](https://www.pexels.com/search/certificate/)

**Image Specifications**:
- Dimensions: 800x600px minimum (will be cropped to fit)
- Format: JPG or WebP
- Style: Professional, clean, with subtle texture
- Colors: Neutral tones (grays, whites, or subtle blues)

### 2. Insurance Shield Background (`insurance-shield-bg.jpg`)
**Purpose**: Fully Insured card
**Recommended Image**: Shield, protection, or insurance-themed background
**Suggested Sources**:
- [Pixabay - Shield Protection](https://pixabay.com/images/search/shield%20protection/)
- [Unsplash - Security Shield](https://unsplash.com/s/photos/security-shield)
- [Pexels - Insurance Protection](https://www.pexels.com/search/insurance/)

**Image Specifications**:
- Dimensions: 800x600px minimum
- Format: JPG or WebP
- Style: Professional shield or protection symbol
- Colors: Blue tones preferred (trust and security)

### 3. Emergency Response Background (`emergency-response-bg.jpg`)
**Purpose**: 24/7 Emergency Response card
**Recommended Image**: Emergency services, 24/7 availability, or urgent response theme
**Suggested Sources**:
- [Pixabay - Emergency Services](https://pixabay.com/images/search/emergency%20services/)
- [Unsplash - 24/7 Support](https://unsplash.com/s/photos/24-7-support)
- [Pexels - Emergency Response](https://www.pexels.com/search/emergency/)

**Image Specifications**:
- Dimensions: 800x600px minimum
- Format: JPG or WebP
- Style: Professional emergency or support theme
- Colors: Red or orange tones (urgency and reliability)

### 4. Certified Excellence Background (`certified-excellence-bg.jpg`)
**Purpose**: 100% Satisfaction / Certified Excellence card
**Recommended Image**: Award, excellence, or quality certification background
**Suggested Sources**:
- [Pixabay - Award Excellence](https://pixabay.com/images/search/award%20excellence/)
- [Unsplash - Quality Award](https://unsplash.com/s/photos/quality-award)
- [Pexels - Excellence Certificate](https://www.pexels.com/search/excellence/)

**Image Specifications**:
- Dimensions: 800x600px minimum
- Format: JPG or WebP
- Style: Professional award or excellence symbol
- Colors: Gold, green, or premium tones (excellence and quality)

## Implementation Notes

- All images will be used as background images with `background-size: cover` and `background-position: center`
- A dark overlay (50% opacity) is applied for text readability
- Images should have good contrast when overlaid with dark text
- Consider using WebP format for better performance
- Ensure all images are properly licensed for commercial use

## Fallback Behavior

If any image fails to load, the cards will fall back to gradient backgrounds:
- Licensed: Gray gradient
- Insured: Blue gradient  
- Emergency: Red gradient
- Excellence: Green gradient
