#!/usr/bin/env node

/**
 * Image Finder Script for Trust Cards
 * This script helps find and download appropriate background images for the trust cards
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Image search terms for each card
const imageQueries = {
  'license-certificate-bg.jpg': [
    'professional certificate background',
    'license document background',
    'official certificate template'
  ],
  'insurance-shield-bg.jpg': [
    'insurance shield background',
    'protection shield image',
    'security shield professional'
  ],
  'emergency-response-bg.jpg': [
    'emergency services background',
    '24/7 support image',
    'urgent response professional'
  ],
  'certified-excellence-bg.jpg': [
    'award excellence background',
    'quality certificate image',
    'excellence award professional'
  ]
};

// Free stock photo sources
const stockPhotoSources = [
  'https://pixabay.com/images/search/',
  'https://unsplash.com/s/photos/',
  'https://www.pexels.com/search/',
  'https://www.freepik.com/search'
];

console.log('🖼️  Trust Cards Image Finder');
console.log('============================\n');

console.log('📋 Required Images:');
Object.entries(imageQueries).forEach(([filename, queries]) => {
  console.log(`\n📁 ${filename}`);
  console.log(`   Search terms: ${queries.join(', ')}`);
  console.log(`   Recommended sources:`);
  stockPhotoSources.forEach(source => {
    console.log(`   - ${source}${queries[0].replace(/\s+/g, '-')}`);
  });
});

console.log('\n🔍 Manual Search Instructions:');
console.log('1. Visit the recommended sources above');
console.log('2. Search for the suggested terms');
console.log('3. Download high-quality images (800x600px minimum)');
console.log('4. Save them in: /public/assets/trust/');
console.log('5. Ensure images are properly licensed for commercial use');

console.log('\n📝 Current Status:');
const trustDir = path.join(__dirname, '../public/assets/trust');
const requiredFiles = Object.keys(imageQueries);

requiredFiles.forEach(filename => {
  const filePath = path.join(trustDir, filename);
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? '✅' : '❌'} ${filename}`);
});

console.log('\n💡 Tips:');
console.log('- Use WebP format for better performance');
console.log('- Ensure good contrast for text overlay');
console.log('- Choose professional, clean backgrounds');
console.log('- Test images with dark text overlay');
