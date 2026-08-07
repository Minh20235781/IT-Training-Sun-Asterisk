// 1. Function truyền thống
function add(a: number, b: number): number {
  return a + b;
}

// 2. Arrow function
const multiply = (a: number, b: number): number => a * b;

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6

// 3. Optional parameter
function greet(name?: string): string {
  return name ? `Hello ${name}` : "Hello";
}

console.log(greet()); // "Hello"
console.log(greet("Minh")); // "Hello Minh"

// 4. Default parameter
function calculateTax(price: number, rate: number = 0.1): number {
  return price * rate;
}

console.log(calculateTax()); // Error: Argument of type 'undefined' is not assignable to parameter of type 'number'.
console.log(calculateTax(100)); // 10
console.log(calculateTax(100, 0.08)); // 8

// 5. Rest parameter
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Vi phạm quy tắc rest parameter:
// function wrong(...numbers: number[], extra: number) {}

/*
 * Rest parameter:
 * - Chỉ có 1 rest parameter.
 * - Kiểu phải là array.
 * - Phải nằm cuối danh sách parameter.
 */

// 6. Spread operator
const first = [1, 2];
const second = [3, 4];

const merged = [...first, ...second];
const copied = [...first];

console.log(merged); // Output: [1, 2, 3, 4]
console.log(copied); // Output: [1, 2]

// Spread object
const baseUser = { name: "Minh", age: 21 };
const updatedUser = { ...baseUser, role: "developer" };

console.log(updatedUser); // Output: { name: "Minh", age: 21, role: "developer" }

// 7. void
function speech(output: string): void {
  console.log(output); // Output: Hello TypeScript
}

speech("Hello TypeScript");

// 8. never
function throwError(message: string): never {
  throw new Error(message);
}

// Không gọi trực tiếp nếu muốn chương trình tiếp tục:
// throwError("Something went wrong");

// 9. Callback
function processUser(
  name: string,
  callback: (value: string) => void
): void {
  callback(name);
}

processUser("Minh", (value) => {
  console.log(`User: ${value}`); // Output: User: Minh
});

/*
 * LƯU Ý THỰC TẾ
 *
 * 1. Optional parameter phải được xử lý vì nó có thể là undefined.
 */
function printName(name?: string) {
  // Không nên:
  // console.log(name.toUpperCase());

  // Nên:
  if (name) {
    console.log(name.toUpperCase());
  }
}

/*
 * 2. Spread là tạo cấu trúc mới ở mức shallow copy.
 *    Object/mảng lồng nhau vẫn có thể dùng chung reference.
 */
const original = {
  profile: {
    name: "Minh",
  },
};

const cloned = { ...original };
cloned.profile.name = "Other";

// original.profile.name cũng đã thay đổi.
console.log(original.profile.name); // Output: Other

/*
 * 3. `never` không phải là `void`:
 *    - void: hàm không trả về giá trị hữu ích.
 *    - never: hàm không kết thúc bình thường bằng việc trả về.
 */
