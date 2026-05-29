const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 48, 128];
const iconDir = './extension/icons';
if (!fs.existsSync(iconDir)) fs.mkdirSync(iconDir, { recursive: true });

async function createIcon(size) {
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#g)"/>
  <path d="M50 18 L72 28 L72 50 Q72 65 50 76 Q28 65 28 50 L28 28 Z" fill="white" opacity="0.95"/>
  <path d="M42 49 L47 55 L59 43" stroke="#7c3aed" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`);
  await sharp(svg).resize(size, size).png().toFile(path.join(iconDir, `icon${size}.png`));
  console.log(`✅ Created icon${size}.png`);
}

Promise.all(sizes.map(createIcon)).then(() => console.log('\n🎉 All icons generated!'));
