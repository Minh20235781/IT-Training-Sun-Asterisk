"use strict";
/**
 * TYPESCRIPT SHARING – 03. TYPE SYSTEM
 *
 * Nội dung:
 * - Type annotation / Type inference
 * - Primitive types
 * - Array / Tuple
 * - any / unknown
 * - union / enum
 * - literal type / type alias
 * - null / undefined
 * - type assertion
 */
// 1. Type annotation
let fullName = "Nguyen Nhat Minh";
let studentAge = 21;
let active = true;
// 2. Type inference
let city = "Ha Noi"; // TypeScript suy luận: string
let year = 2026; // TypeScript suy luận: number
// Lỗi:
// city = 123; // Error: Type 'number' is not assignable to type 'string'.
// year = true; // Error: Type 'boolean' is not assignable to type 'number'.
// 3. Object và Array
const student = {
    name: "Minh",
    age: 21,
};
const scores = [8, 9, 9.5];
// 4. Tuple
const studentInfo = ["Minh", 21];
// Có thể push thêm phần tử tại runtime/type-system behavior cần đặc biệt chú ý:
studentInfo.push("HUST");
// Tuple đảm bảo kiểu/độ dài chủ yếu ở khai báo và truy cập theo vị trí.
// Không nên xem tuple là cấu trúc hoàn toàn bất biến.
// 5. any
let anything = "text";
anything = 123;
anything = false;
// 6. unknown – an toàn hơn any
let input = "hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
// Không thể dùng trực tiếp như any:
// console.log(input.toUpperCase());
// 7. Union
let id;
id = "SV001";
id = 1001;
// 8. Enum
var Status;
(function (Status) {
    Status[Status["NEW"] = 0] = "NEW";
    Status[Status["OLD"] = 1] = "OLD";
})(Status || (Status = {}));
const currentStatus = Status.NEW;
let direction = "left";
const user = {
    id: 1,
    name: "Minh",
};
// 11. null / undefined
let emptyValue = null;
let notAssigned = undefined;
// 12. Type assertion
const rawValue = "TypeScript";
const value1 = rawValue;
const value2 = rawValue;
console.log(value1.toUpperCase(), value2.toUpperCase());
/*
 * LƯU Ý THỰC TẾ
 *
 * 1. `any` làm mất kiểm tra kiểu → hạn chế sử dụng.
 *
 * 2. `unknown` bắt buộc phải kiểm tra kiểu trước khi thao tác.
 *
 * 3. Type assertion (`as`) KHÔNG biến đổi dữ liệu thật.
 *    Nó chỉ nói với TypeScript rằng "hãy xem giá trị này như kiểu X".
 *
 * 4. Không nên assertion bừa bãi:
 */
const suspiciousValue = 123;
const suspiciousString = suspiciousValue;
// Compile có thể không báo lỗi, nhưng runtime sẽ lỗi:
// console.log(suspiciousString.toUpperCase());
/*
 * 5. Union cần narrowing trước khi dùng API riêng của từng kiểu:
 */
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(0));
    }
}
printId("sv001");
printId(123);
//# sourceMappingURL=03.js.map