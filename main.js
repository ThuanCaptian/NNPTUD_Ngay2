// ======================
// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ======================
// Câu 2: Khởi tạo mảng products
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Phone", true),
  new Product(2, "Samsung S24 Ultra", 32000000, 0, "Phone", true),
  new Product(3, "MacBook Pro M3", 55000000, 3, "Laptop", true),
  new Product(4, "AirPods Pro", 6500000, 10, "Accessories", true),
  new Product(5, "Apple Watch Ultra", 21000000, 0, "Accessories", false),
  new Product(6, "Logitech MX Master 3", 3500000, 7, "Accessories", true)
];

console.log("Câu 2 - Products:", products);

// ======================
// Câu 3: Mảng mới chỉ chứa name, price
const q3 = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", q3);

// ======================
// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const q4 = products.filter(p => p.quantity > 0);
console.log("Câu 4:", q4);

// ======================
// Câu 5: Có ít nhất 1 sản phẩm giá > 30.000.000?
const q5 = products.some(p => p.price > 30000000);
console.log("Câu 5:", q5);

// ======================
// Câu 6: Tất cả Accessories có đang bán?
const q6 = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
console.log("Câu 6:", q6);

// ======================
// Câu 7: Tổng giá trị kho
const totalValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
console.log("Câu 7 - Tổng giá trị kho:", totalValue);

// ======================
// Câu 8: for...of
console.log("Câu 8:");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// ======================
// Câu 9: for...in (thuộc tính & giá trị)
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// ======================
// Câu 10: Tên sản phẩm đang bán và còn hàng
const q10 = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", q10);
