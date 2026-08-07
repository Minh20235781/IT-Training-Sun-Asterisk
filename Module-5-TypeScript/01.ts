/**
 * TYPESCRIPT SHARING – 01. TỔNG QUAN VỀ TYPESCRIPT
 * Nội dung: TypeScript là gì, Type System, lợi ích khi dùng TypeScript.
 *
 * Lưu ý:
 * - TypeScript không chạy trực tiếp trên Browser/Node.js.
 * - File .ts cần được biên dịch sang JavaScript trước khi chạy.
 * - Các lỗi kiểu dữ liệu dưới đây thường được phát hiện ngay khi compile.
 */

// 1. TypeScript = JavaScript + Type System
let userName: string = "Minh";
let age: number = 21;
let isStudent: boolean = true;

console.log(userName, age, isStudent); // Output: Minh 21 true

// 2. TypeScript giúp phát hiện lỗi sớm
let score: number = 8.5; // Compile OK

// Lỗi compile:
// score = "8.5"; // Error: Type 'string' is not assignable to type 'number'.

// 3. TypeScript vẫn sử dụng được JavaScript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);

console.log(doubled); // Output: [2, 4, 6, 8]

/*
 * LƯU Ý THỰC TẾ
 *
 * Nếu dùng `any`, TypeScript gần như mất khả năng kiểm tra kiểu:
 */
let unsafeValue: any = "100";
unsafeValue = 100;
unsafeValue = { value: true };

// Có thể không báo lỗi compile nhưng dễ gây lỗi runtime:
console.log(unsafeValue.toUpperCase()); // Runtime error nếu unsafeValue đang là object

/*
 * Khuyến nghị:
 * - Hạn chế any.
 * - Ưu tiên kiểu cụ thể, unknown hoặc generic tùy trường hợp.
 * - Luôn kiểm tra lỗi compile trước khi đưa code vào runtime.
 */
