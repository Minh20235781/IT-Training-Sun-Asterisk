const fs = require('fs');

const hits = JSON.parse(fs.readFileSync('./algolia-raw.json', 'utf-8'));

function extractCategory(hit) {
  let raw = hit.hierarchicalCategories?.lvl0 ?? hit.categories ?? hit.category ?? 'Uncategorized';

  while (Array.isArray(raw)) {
    raw = raw[0];
  }

  return raw || 'Uncategorized';
}

function extractBrand(hit) {
  if (hit.brand) return hit.brand;

  const match = hit.name?.match(/^([^-]+)-/);
  return match ? match[1].trim() : 'Unknown';
}

const products = hits.map((hit) => ({
  id: hit.objectID ?? hit.id,
  name: hit.name,
  category: extractCategory(hit),
  brand: extractBrand(hit),
  price: typeof hit.price === 'object' ? hit.price.value : hit.price ?? 0,
  rating: hit.rating ?? 4,
  image: hit.image,
  description: hit.description || '',
  freeShipping: hit.free_shipping ?? hit.freeShipping ?? false,
}));

fs.writeFileSync('./db.json', JSON.stringify({ products }, null, 2));
console.log(`Đã convert ${products.length} sản phẩm vào db.json`);