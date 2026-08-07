"use strict";
/**
 * TYPESCRIPT SHARING – 02. TRÌNH BIÊN DỊCH VÀ CẤU HÌNH
 *
 * Các lệnh liên quan:
 *   npm install -g typescript
 *   tsc --version
 *   tsc app.ts
 *   tsc --watch
 *   tsc --init
 *
 * File này chủ yếu minh họa code mà compiler sẽ xử lý.
 */
// app.ts
const message = "Hello TypeScript";
console.log(message); // Output: Hello TypeScript
// Khi chạy:
// tsc app.ts
//
// TypeScript sẽ tạo:
// app.js
//
// Sau đó JavaScript có thể chạy trong môi trường hỗ trợ JavaScript.
/*
 * Ví dụ lỗi compile:
 */
const price = 100;
// Bỏ comment để xem compiler báo lỗi:
// const wrongPrice: number = "100"; // Error: Type 'string' is not assignable to type 'number'.
/*
 * tsconfig.json mẫu tương ứng với các cấu hình trong slide:
 *
 * {
 *   "compilerOptions": {
 *     "target": "ES5",
 *     "module": "commonjs",
 *     "rootDir": "./src",
 *     "outDir": "./dist",
 *     "sourceMap": true
 *   },
//  *   "include": ["src/**/ /*.ts"],
//  *   "exclude": ["scripts"]
//  * }
//  */
/*
 * LƯU Ý THỰC TẾ
 *
 * 1. Không nên compile thủ công từng file khi project lớn.
 *    → Dùng tsconfig.json + `tsc`.
 *
 * 2. `include` / `exclude` có thể khiến file không được compile.
 *    Nếu `tsc` không tạo JS cho một file, kiểm tra phạm vi này trước.
 *
 * 3. `target` và `module` không phải cùng một thứ:
 *    - target: JS version đầu ra.
 *    - module: hệ thống module khi compile.
 *
 * 4. `sourceMap: true` hữu ích khi debug JS nhưng muốn truy ngược về TS.
 */
//# sourceMappingURL=02.js.map