const fs = require('fs');

const raw = fs.readFileSync('./db.json', 'utf-8');
const db = JSON.parse(raw);

console.log('Top-level keys:', Object.keys(db));

const products = db.products;
console.log('Tổng số sản phẩm:', products.length);
console.log('Sản phẩm đầu tiên:', products[0]);

const categories = [...new Set(products.map((p) => p.category))];
console.log('\nSố category:', categories.length);
console.log(categories);

const brands = [...new Set(products.map((p) => p.brand))];
console.log('\nSố brand:', brands.length);
console.log(brands);