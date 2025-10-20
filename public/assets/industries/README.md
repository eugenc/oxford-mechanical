# Industry Background Images

This directory contains background images for the industry-specific pages on the website.

## Required Images

### 1. Healthcare Facilities (`healthcare.jpg`)
**Purpose**: Healthcare industry page background
**Recommended Image**: Modern hospital or medical center exterior
**Suggested Sources**:
- [Pixabay - Hospital Buildings](https://pixabay.com/images/search/hospital%20building/)
- [Unsplash - Medical Centers](https://unsplash.com/s/photos/medical-center)
- [Pexels - Healthcare Facilities](https://www.pexels.com/search/healthcare/)

**Image Specifications**:
- Dimensions: 1920x1080px minimum
- Format: JPG or WebP
- Style: Modern, clean, professional medical facility
- Colors: Blue tones preferred (trust and healthcare)

### 2. High-Rise Condos (`condos.jpg`)
**Purpose**: Condo industry page background
**Recommended Image**: Modern high-rise residential building
**Suggested Sources**:
- [Pixabay - High Rise Buildings](https://pixabay.com/images/search/high%20rise%20building/)
- [Unsplash - Condominiums](https://unsplash.com/s/photos/condominium)
- [Pexels - Residential Towers](https://www.pexels.com/search/residential%20tower/)

**Image Specifications**:
- Dimensions: 1920x1080px minimum
- Format: JPG or WebP
- Style: Modern residential high-rise
- Colors: Neutral tones (grays, whites, or subtle blues)

### 3. Office Buildings (`office.jpg`)
**Purpose**: Office industry page background
**Recommended Image**: Modern corporate office building
**Suggested Sources**:
- [Pixabay - Office Buildings](https://pixabay.com/images/search/office%20building/)
- [Unsplash - Corporate Buildings](https://unsplash.com/s/photos/corporate-building)
- [Pexels - Business Districts](https://www.pexels.com/search/business%20district/)

**Image Specifications**:
- Dimensions: 1920x1080px minimum
- Format: JPG or WebP
- Style: Professional office building
- Colors: Blue or gray tones (professional and corporate)

### 4. Educational Facilities (`education.jpg`)
**Purpose**: Education industry page background
**Recommended Image**: University or school building exterior
**Suggested Sources**:
- [Pixabay - University Buildings](https://pixabay.com/images/search/university%20building/)
- [Unsplash - School Buildings](https://unsplash.com/s/photos/school-building)
- [Pexels - Educational Institutions](https://www.pexels.com/search/educational%20institution/)

**Image Specifications**:
- Dimensions: 1920x1080px minimum
- Format: JPG or WebP
- Style: Academic institution building
- Colors: Warm tones (browns, reds) or neutral tones

### 5. Retail & Commercial (`retail.jpg`)
**Purpose**: Retail industry page background
**Recommended Image**: Shopping center or retail complex
**Suggested Sources**:
- [Pixabay - Shopping Centers](https://pixabay.com/images/search/shopping%20center/)
- [Unsplash - Retail Buildings](https://unsplash.com/s/photos/retail-building)
- [Pexels - Commercial Centers](https://www.pexels.com/search/commercial%20center/)

**Image Specifications**:
- Dimensions: 1920x1080px minimum
- Format: JPG or WebP
- Style: Modern retail or shopping complex
- Colors: Bright, welcoming tones (whites, light colors)

### 6. Industrial Facilities (`industrial.jpg`)
**Purpose**: Industrial industry page background
**Recommended Image**: Manufacturing plant or industrial complex
**Suggested Sources**:
- [Pixabay - Industrial Buildings](https://pixabay.com/images/search/industrial%20building/)
- [Unsplash - Manufacturing Plants](https://unsplash.com/s/photos/manufacturing-plant)
- [Pexels - Industrial Complexes](https://www.pexels.com/search/industrial%20complex/)

**Image Specifications**:
- Dimensions: 1920x1080px minimum
- Format: JPG or WebP
- Style: Professional industrial facility
- Colors: Gray or blue tones (industrial and professional)

## Implementation Notes

- All images are used as background images in HeroSection components
- Images will be cropped to fit the hero section dimensions
- A dark overlay (80% opacity) is applied for text readability
- Images should have good contrast when overlaid with white text
- Consider using WebP format for better performance
- Ensure all images are properly licensed for commercial use

## Fallback Behavior

If any image fails to load, the pages will display:
- A gradient background matching the industry theme
- A fallback icon and text representing the industry
- Professional styling that maintains the page's visual appeal

## Current Status

- ✅ healthcare.jpg - Available
- ✅ condos.jpg - Available  
- ✅ office.jpg - Available
- ✅ education.jpg - Available
- ✅ retail.jpg - Available
- ✅ industrial.jpg - Available

## Quick Setup

1. ✅ Images have been renamed to match expected filenames
2. ✅ All industry pages are configured to use the correct image paths
3. ✅ Images are properly integrated into both main industries page and individual industry pages
4. ✅ Test each industry page to verify images load correctly
5. ✅ Verify text readability over the background images

## Implementation Complete

All industry images are now properly named and integrated:
- Main industries page (`/industries`) displays all 6 industry cards with images
- Individual industry pages use their respective images as hero backgrounds
- Images are also used in content sections where appropriate
- All image paths are correctly configured and should load properly
