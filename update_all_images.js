const fs = require('fs');
const path = require('path');

const imgDir = 'public/images/products';
const productsFile = 'src/data/products.ts';

const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.webp'));
let content = fs.readFileSync(productsFile, 'utf8');

for (const file of files) {
  const baseName = file.replace('.webp', '');
  
  // Find the block corresponding to the product
  // We can look for nameEn: '...' containing the baseName (case insensitive perhaps, or exact)
  // Let's find the exact block.
  // The block looks like:
  //   {
  //     id: '...',
  //     ...
  //     gradeAr: '...',
  //     image: '...' // optional
  //   },
  
  // A safer regex: find nameEn that starts with or includes baseName
  // Actually, we can parse the products array out, or just use regex replacement carefully.
  
  // Find nameEn: 'something' where 'something' includes baseName
  const escapedBase = baseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(nameEn:\\s*['"][^'"]*${escapedBase}[^'"]*['"][\\s\\S]*?gradeAr:\\s*['"][^'"]*['"])(?:,\\s*image:\\s*['"][^'"]*['"])?`, 'gi');
  
  content = content.replace(regex, `$1,\n    image: '/images/products/${file}'`);
}

fs.writeFileSync(productsFile, content);
console.log('Updated products.ts with all available images');
