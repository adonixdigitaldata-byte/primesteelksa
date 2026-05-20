const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

const images = [
  "Galvanized fencing mesh.webp",
  "H-beam (HEB) steel bridges.webp",
  "H-bridges to JIS specifications.webp",
  "Lightweight H-beam (HEA) steel bridges.webp",
  "Plain aluminum sheets.webp",
  "Reinforcing steel for construction.webp",
  "UPE Light Drainage.webp",
  "UPN heavy bridges.webp",
  "Welded iron walkway mesh.webp",
  "Western Reinforcing Steel.webp",
  "domestic reinforcing steel.webp",
  "embossed aluminum sheets.webp",
  "metal baklava rack.webp",
  "solid reinforcing steel.webp"
];

for (const img of images) {
  const nameEn = img.replace('.webp', '');
  // Escape regex characters just in case, though names are mostly simple
  const escapedNameEn = nameEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(nameEn:\\s*['"]${escapedNameEn}['"][\\s\\S]*?gradeAr:\\s*['"][^'"]*['"])`, 'g');
  content = content.replace(regex, `$1,\n    image: '/images/products/${img}'`);
}

fs.writeFileSync('src/data/products.ts', content);
console.log("Updated products.ts");
