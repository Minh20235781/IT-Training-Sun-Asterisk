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
let fullName: string = "Nguyen Nhat Minh";
let studentAge: number = 21;
let active: boolean = true;

// 2. Type inference
let city = "Ha Noi"; // TypeScript suy luận: string
let year = 2026;     // TypeScript suy luận: number

// Lỗi:
// city = 123; // Error: Type 'number' is not assignable to type 'string'.
// year = true; // Error: Type 'boolean' is not assignable to type 'number'.

// 3. Object và Array
const student: { name: string; age: number } = {
  name: "Minh",
  age: 21,
};

const scores: number[] = [8, 9, 9.5];

// 4. Tuple
const studentInfo: [string, number] = ["Minh", 21];

// Có thể push thêm phần tử tại runtime/type-system behavior cần đặc biệt chú ý:
studentInfo.push("HUST");
// Tuple đảm bảo kiểu/độ dài chủ yếu ở khai báo và truy cập theo vị trí.
// Không nên xem tuple là cấu trúc hoàn toàn bất biến.

// 5. any
let anything: any = "text";
anything = 123;
anything = false;

// 6. unknown – an toàn hơn any
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}

// Không thể dùng trực tiếp như any:
// console.log(input.toUpperCase());

// 7. Union
let id: string | number;
id = "SV001";
id = 1001;

// 8. Enum
enum Status {
  NEW,
  OLD,
}

const currentStatus: Status = Status.NEW;

// 9. Literal Type
type Direction = "left" | "right" | "up" | "down";

let direction: Direction = "left";

// Lỗi compile nếu gán giá trị không hợp lệ như center:
// direction = "center";

// 10. Type Alias
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Minh",
};

// 11. null / undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// 12. Type assertion
const rawValue: unknown = "TypeScript";

const value1 = rawValue as string;
const value2 = <string>rawValue;

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
const suspiciousValue: unknown = 123;
const suspiciousString = suspiciousValue as string;

// Compile có thể không báo lỗi, nhưng runtime sẽ lỗi:
// console.log(suspiciousString.toUpperCase());

/*
 * 5. Union cần narrowing trước khi dùng API riêng của từng kiểu:
 */
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}

printId("sv001");
printId(123);
