/**
 * TYPESCRIPT SHARING – 08. MODULES VÀ NAMESPACE
 *
 * Nội dung:
 * - export / import
 * - module
 * - re-export
 * - namespace
 * - /// <reference />
 * - so sánh module và namespace
 *
 * File này chứa các ví dụ minh họa. Trong project thật, mỗi module
 * thường nằm ở một file .ts riêng.
 */

// ============================================================
// 1. MODULE – export
// ============================================================

export interface Student {
  id: number;
  name: string;
}

export function calculateTuition(credits: number): number {
  return credits * 500_000;
}

export const UNIVERSITY = "HUST";

/*
 * Nếu file này được import từ file khác:
 *
 * import { Student, calculateTuition, UNIVERSITY }
 *   from "./08-Modules-va-Namespace";
 *
 * const student: Student = {
 *   id: 1,
 *   name: "Minh"
 * };
 *
 * console.log(calculateTuition(18));
 */

// ============================================================
// 2. Default export – ví dụ để tham khảo
// ============================================================

class Logger {
  log(message: string): void {
    console.log(message);
  }
}

export default Logger;

/*
 * Import default:
 *
 * import Logger from "./Logger";
 */

// ============================================================
// 3. Re-export
// ============================================================

/*
 * Một file middle/index có thể gom nhiều module:
 *
 * // index.ts
 * export { Student } from "./student";
 * export { calculateTuition } from "./tuition";
 *
 * File sử dụng chỉ cần:
 *
 * import { Student, calculateTuition } from "./index";
 *
 * → Giúp mã nguồn gọn và dễ bảo trì hơn.
 */

// ============================================================
// 4. Namespace
// ============================================================

namespace StudentCalc {
  export function calculateTuition(credits: number): number {
    return credits * 500_000;
  }

  export interface Student {
    id: number;
    name: string;
  }
}

const tuition = StudentCalc.calculateTuition(18);

const student: StudentCalc.Student = {
  id: 1,
  name: "Minh",
};

console.log(tuition, student); // Output: 900000 { id: 1, name: 'Minh' }

/*
 * Nếu thành phần bên trong namespace không `export`,
 * code bên ngoài namespace không thể truy cập trực tiếp.
 */

namespace InternalExample {
  const secret = "private";

  export function getSecret(): string {
    return secret;
  }
}

console.log(InternalExample.getSecret()); // Output: private

// Không thể:
// console.log(InternalExample.secret);

/*
 * Namespace có thể tham chiếu file khác bằng:
 *
 * /// <reference path="./other-file.ts" />
 *
 * Theo nội dung sharing, namespace được compile với `--outFile`.
 *
 * Module thường dùng:
 *   export / import
 *
 * Namespace thường dùng:
 *   namespace / export
 *   /// <reference />
 */

/*
 * LƯU Ý THỰC TẾ
 *
 * 1. Module và namespace không nên xem là hai cách hoàn toàn tương đương.
 *    Module phù hợp hơn với cách tổ chức code hiện đại theo file/module.
 *
 * 2. Khi dùng module, thành phần muốn dùng từ file khác phải `export`.
 *
 * 3. Khi import:
 *    - Named export → import { something }
 *    - Default export → import Something
 *
 * 4. Nếu import sai đường dẫn hoặc sai tên export → compiler/runtime
 *    có thể báo lỗi tùy trường hợp.
 *
 * 5. Khi project sử dụng module, phải cấu hình `module` phù hợp
 *    trong tsconfig.json.
 *
 * 6. Re-export giúp tạo "điểm vào" thống nhất cho nhiều module.
 */
