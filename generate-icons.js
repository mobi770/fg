#!/usr/bin/env node
// Generate SVG icons for the extension
const fs = require('fs');
const path = require('path');

const iconDir = path.join(__dirname, 'extension/icons');
if (!fs.existsSync(iconDir)) fs.mkdirSync(iconDir, { recursive: true });

const sizes = [16, 48, 128];

sizes.forEach(size => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#4f46e5"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#g)"/>
  <text x="50" y="68" font-size="56" text-anchor="middle" fill="white">🛡️</text>
</svg>`;
  fs.writeFileSync(path.join(iconDir, `icon${size}.svg`), svg);
  console.log(`Created icon${size}.svg`);
});

console.log('\n✅ Icons created! Convert SVG → PNG before loading in Chrome.');
console.log('   You can use: https://cloudconvert.com/svg-to-png');
console.log('   Or install: npm install sharp && node convert-icons.js\n');
