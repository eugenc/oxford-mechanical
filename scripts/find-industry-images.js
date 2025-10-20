#!/usr/bin/env node

/**
 * Industry Images Finder Script
 * This script helps find and download appropriate background images for industry pages
 */

const fs = require('fs');
const path = require('path');

// Industry image requirements
const industryImages = {
  'condos.jpg': {
    industry: 'High-Rise Condos',
    searchTerms: [
      'high rise condominium building',
      'modern condo tower',
      'residential high rise',
      'apartment building exterior'
    ],
    description: 'Modern high-rise residential building'
  },
  'office.jpg': {
    industry: 'Office Buildings',
    searchTerms: [
      'modern office building',
      'corporate headquarters',
      'business district building',
      'glass office tower'
    ],
    description: 'Professional office building'
  },
  'education.jpg': {
    industry: 'Educational Facilities',
    searchTerms: [
      'university campus building',
      'school building exterior',
      'educational institution',
      'college campus'
    ],
    description: 'Educational institution building'
  },
  'healthcare.jpg': {
    industry: 'Healthcare Facilities',
    searchTerms: [
      'hospital building exterior',
      'medical center building',
      'healthcare facility',
      'modern hospital'
    ],
    description: 'Healthcare facility building'
  },
  'retail.jpg': {
    industry: 'Retail & Commercial',
    searchTerms: [
      'shopping center exterior',
      'retail complex',
      'commercial shopping mall',
      'retail building'
    ],
    description: 'Retail shopping center'
  },
  'industrial.jpg': {
    industry: 'Industrial Facilities',
    searchTerms: [
      'industrial facility building',
      'manufacturing plant exterior',
      'industrial complex',
      'factory building'
    ],
    description: 'Industrial manufacturing facility'
  }
};

// Free stock photo sources
const stockPhotoSources = [
  'https://pixabay.com/images/search/',
  'https://unsplash.com/s/photos/',
  'https://www.pexels.com/search/',
  'https://www.freepik.com/search'
];

console.log('🏢 Industry Images Finder');
console.log('========================\n');

console.log('📋 Required Industry Images:');
Object.entries(industryImages).forEach(([filename, info]) => {
  console.log(`\n📁 ${filename}`);
  console.log(`   Industry: ${info.industry}`);
  console.log(`   Description: ${info.description}`);
  console.log(`   Search terms: ${info.searchTerms.join(', ')}`);
  console.log(`   Recommended sources:`);
  stockPhotoSources.forEach(source => {
    console.log(`   - ${source}${info.searchTerms[0].replace(/\s+/g, '-')}`);
  });
});

console.log('\n🔍 Manual Search Instructions:');
console.log('1. Visit the recommended sources above');
console.log('2. Search for the suggested terms');
console.log('3. Download high-quality images (1920x1080px recommended)');
console.log('4. Save them in: /public/assets/industries/');
console.log('5. Ensure images are properly licensed for commercial use');

console.log('\n📝 Current Status:');
const industriesDir = path.join(__dirname, '../public/assets/industries');
const requiredFiles = Object.keys(industryImages);

// Create directory if it doesn't exist
if (!fs.existsSync(industriesDir)) {
  fs.mkdirSync(industriesDir, { recursive: true });
  console.log('✅ Created industries directory');
}

requiredFiles.forEach(filename => {
  const filePath = path.join(industriesDir, filename);
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? '✅' : '❌'} ${filename}`);
});

console.log('\n💡 Tips:');
console.log('- Use high-resolution images (1920x1080px minimum)');
console.log('- Choose images with good contrast for text overlay');
console.log('- Prefer modern, professional building exteriors');
console.log('- Ensure images represent the industry accurately');
console.log('- Test images with dark text overlay for readability');

console.log('\n🚀 Quick Start:');
console.log('1. Download the missing images listed above');
console.log('2. Place them in /public/assets/industries/');
console.log('3. Restart your development server');
console.log('4. Test each industry page to ensure images load correctly');
