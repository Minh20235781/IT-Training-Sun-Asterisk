# JavaScript: Bản Tóm Tắt Toàn Diện

Tài liệu này cung cấp một cái nhìn tổng quan toàn diện về các khái niệm JavaScript thiết yếu, được cấu trúc thành 16 phần chính.

---

## 1. Giới thiệu về Javascript (An Introduction To Javascript)

JavaScript (JS) là một ngôn ngữ lập trình thông dịch, cấp cao, chủ yếu được sử dụng để xây dựng các trang web tương tác và động. Nó là một công nghệ cốt lõi của World Wide Web, cùng với HTML và CSS.

*   **Vai trò:** Trong khi HTML cung cấp cấu trúc và CSS xử lý kiểu dáng, JS cung cấp hành vi và tính tương tác.
*   **Môi trường thực thi:** Ban đầu được thiết kế để chạy trong trình duyệt (phía máy khách - client-side), JS hiện có thể chạy trên máy chủ (phía máy chủ - server-side) bằng các môi trường như Node.js.
*   **Đặc điểm:** Kiểu động (dynamically typed), hướng đối tượng (dựa trên nguyên mẫu - prototype-based) và hỗ trợ các mô hình lập trình hàm.

---

## 2. Biến (Variables)

Biến là các thùng chứa có tên được sử dụng để lưu trữ các giá trị dữ liệu.

*   `let`: Khai báo các biến có phạm vi khối (block-scoped). Đây là cách ưu tiên để khai báo các biến mà giá trị của chúng có thể thay đổi.
    ```javascript
    let message = "Hello";
    message = "World"; // Được phép
    ```
*   `const`: Khai báo các hằng số có phạm vi khối. Được sử dụng cho các giá trị không bao giờ thay đổi sau khi khởi tạo. Phải được khởi tạo ngay khi khai báo.
    ```javascript
    const PI = 3.14159;
    // PI = 3.14; // Lỗi: Gán giá trị cho biến hằng (constant variable)
    ```
*   `var`: Khai báo các biến có phạm vi hàm (function-scoped) hoặc phạm vi toàn cục. Đây là cách cũ và thường tránh dùng trong JS hiện đại do các vấn đề bất thường về hoisting và phạm vi (scoping).

---

## 3. Kiểu Dữ Liệu (Data Types)

JavaScript có kiểu động, nghĩa là một biến có thể chứa bất kỳ kiểu dữ liệu nào và kiểu của nó có thể thay đổi.

**Kiểu Nguyên Thủy (Primitive Types - Bất biến theo giá trị):**

1.  **Number:** Biểu diễn cả số nguyên và số thực dấu phẩy động. Cũng bao gồm các giá trị đặc biệt: `Infinity`, `-Infinity`, và `NaN` (Not-a-Number).
2.  **BigInt:** Dành cho các số nguyên lớn hơn mức mà kiểu `Number` có thể biểu diễn an toàn. (Thêm `n` vào cuối số).
3.  **String:** Biểu diễn dữ liệu văn bản. Được đặt trong dấu nháy đơn (`'`), nháy kép (`"`), hoặc dấu backtick (`` ` `` - dùng cho template literals cho phép nội suy).
4.  **Boolean:** Thực thể logic chỉ có hai giá trị: `true` (đúng) hoặc `false` (sai).
5.  **Null:** Một từ khóa đặc biệt biểu thị một giá trị "trống" hoặc cố ý không có giá trị. Kiểu của nó là một object (một lỗi đã biết của JS).
6.  **Undefined:** Một biến đã được khai báo nhưng chưa được gán giá trị sẽ có giá trị là `undefined`.
7.  **Symbol:** Biểu diễn một định danh duy nhất và bất biến, thường được sử dụng làm khóa cho thuộc tính của đối tượng (object) để tránh xung đột.

**Kiểu Tham Chiếu (Reference Type):**

8.  **Object:** Được sử dụng để lưu trữ các bộ sưu tập dữ liệu và các thực thể phức tạp hơn. (Bao gồm Mảng - Arrays, Hàm - Functions, Ngày tháng - Dates, v.v.)

Sử dụng toán tử `typeof` để xác định kiểu của một giá trị.

---

## 4. Chuyển Đổi Kiểu (Type Conversions)

Chuyển đổi dữ liệu từ kiểu này sang kiểu khác.

*   **Chuyển đổi ngầm định (Coercion):** JavaScript tự động chuyển đổi các kiểu khi các toán tử được sử dụng với các kiểu khác nhau.
    *   `"1" + 2` -> `"12"` (Nối chuỗi)
    *   `"4" - 2` -> `2` (Trừ số học)
*   **Chuyển đổi tường minh (Explicit):** Chuyển đổi kiểu theo cách thủ công bằng cách sử dụng các hàm tích hợp sẵn.
    *   **Sang Chuỗi (String):** `String(value)` hoặc `value.toString()`
    *   **Sang Số (Number):** `Number(value)`, `parseInt(string)`, `parseFloat(string)`. (Các chuyển đổi không hợp lệ sẽ trả về `NaN`).
    *   **Sang Boolean:** `Boolean(value)`.
        *   Các giá trị Falsy (chuyển thành `false`): `0`, `""`, `null`, `undefined`, `NaN`, `false`.
        *   Các giá trị Truthy (chuyển thành `true`): Tất cả các giá trị còn lại.

---

## 5. Trình vòng lặp và Vòng lặp (Iterators and Loops)

Vòng lặp thực thi một khối mã lặp đi lặp lại miễn là một điều kiện được chỉ định còn đúng.

*   **Vòng lặp `while`:** Thực thi khối lệnh khi điều kiện đúng.
    ```javascript
    let i = 0;
    while (i < 3) {
      console.log(i);
      i++;
    }
    ```
*   **Vòng lặp `do...while`:** Thực thi khối lệnh ít nhất một lần, sau đó lặp lại khi điều kiện đúng.
*   **Vòng lặp `for`:** Một cách viết ngắn gọn cho vòng lặp, kết hợp khởi tạo, điều kiện và bước tăng.
    ```javascript
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
    ```
*   **`for...in`:** Lặp qua các khóa (keys) thuộc tính có thể đếm được của một đối tượng.
*   **`for...of`:** Lặp qua các giá trị của một đối tượng có thể lặp (iterable object) (như Mảng, Chuỗi).
    ```javascript
    const arr = ['a', 'b', 'c'];
    for (const val of arr) {
      console.log(val);
    }
    ```

**Điều khiển luồng trong vòng lặp:**
*   `break`: Thoát hoàn toàn khỏi vòng lặp.
*   `continue`: Bỏ qua lần lặp hiện tại và chuyển sang lần lặp tiếp theo.

---

## 6. Câu lệnh điều kiện (Conditionals)

Được sử dụng để thực hiện các hành động khác nhau dựa trên các điều kiện khác nhau.

*   **`if...else if...else`:**
    ```javascript
    let time = 10;
    if (time < 12) {
      console.log("Good morning");
    } else if (time < 18) {
      console.log("Good day");
    } else {
      console.log("Good evening");
    }
    ```
*   **Toán tử ba ngôi (Ternary Operator - `condition ? valueIfTrue : valueIfFalse`):** Cách viết tắt cho các câu lệnh `if...else` đơn giản.
    ```javascript
    let accessAllowed = (age > 18) ? true : false;
    ```
*   **Câu lệnh `switch`:** Thay thế cho nhiều kiểm tra `if...else if` trên cùng một biểu thức bằng cách sử dụng so sánh bằng nghiêm ngặt (`===`).
    ```javascript
    let fruit = 'apple';
    switch (fruit) {
      case 'banana':
        console.log("It's a banana.");
        break;
      case 'apple':
        console.log("It's an apple.");
        break;
      default:
        console.log("Unknown fruit.");
    }
    ```

---

## 7. Cơ bản về Hàm (Function basic)

Hàm là các khối mã có thể tái sử dụng được thiết kế để thực hiện một tác vụ cụ thể. Chúng là các khối xây dựng chính của chương trình.

**Khai báo hàm (Function Declaration):**
```javascript
function greet(name = "Guest") { // 'name' là một tham số với giá trị mặc định
  return "Hello, " + name + "!"; // 'return' chỉ định đầu ra
}

let greeting = greet("Alice"); // Gọi hàm, "Alice" là một đối số
```

*   **Tham số (Parameters):** Các biến được liệt kê trong định nghĩa hàm.
*   **Đối số (Arguments):** Các giá trị thực tế được truyền vào hàm khi được gọi.
*   **Giá trị trả về (Return Value):** Giá trị mà hàm gửi lại cho nơi gọi nó. Nếu không có câu lệnh `return` nào được thực thi, hàm trả về `undefined`.
*   **Phạm vi (Scope):** Các biến được khai báo bên trong một hàm là cục bộ (local) của hàm đó.

---

## 8. Biểu thức hàm (Function expressions)

Biểu thức hàm tạo ra một hàm như một phần của cú pháp biểu thức lớn hơn (thường là một phép gán).

**Biểu thức hàm thông thường (Regular Function Expression):**
```javascript
const multiply = function(a, b) {
  return a * b;
};
```

**Hàm mũi tên (Arrow Functions - `() => {}`):**
Một cú pháp ngắn gọn hơn để viết các biểu thức hàm, được giới thiệu trong ES6.

```javascript
// Nhiều dòng
const add = (a, b) => {
  return a + b;
};

// Một dòng (trả về ngầm định)
const square = x => x * x;

// Không có tham số
const sayHi = () => console.log("Hi");
```
*Điểm khác biệt chính:* Hàm mũi tên không có ràng buộc `this` của riêng nó; chúng kế thừa `this` từ ngữ cảnh từ vựng (lexical context) xung quanh.

---

## 9. Đối tượng (Objects)

Đối tượng được sử dụng để lưu trữ các bộ sưu tập có khóa của nhiều dữ liệu khác nhau và các thực thể phức tạp hơn. Chúng được tạo bằng dấu ngoặc nhọn `{...}` với một danh sách tùy chọn các thuộc tính (cặp khóa-giá trị).

```javascript
let user = {
  name: "John",        // Khóa: "name", Giá trị: "John"
  age: 30,
  "likes birds": true, // Các khóa có nhiều từ phải được đặt trong dấu ngoặc kép
  sayHi: function() {  // Phương thức (Method)
    console.log("Hello!");
  }
};

// Truy cập các thuộc tính
console.log(user.name);         // Ký pháp dấu chấm (Dot notation)
console.log(user["likes birds"]); // Ký pháp ngoặc vuông (Bracket notation) (bắt buộc đối với các khóa phức tạp hoặc biến)

// Thêm/Sửa đổi
user.isAdmin = true;

// Xóa
delete user.age;
```

---

## 10. Tham chiếu và sao chép đối tượng (Object references and copying)

Một trong những khác biệt cơ bản giữa các kiểu nguyên thủy và đối tượng là cách chúng được lưu trữ và sao chép.

*   **Kiểu nguyên thủy được sao chép theo giá trị (copied by value):**
    ```javascript
    let a = "Hello";
    let b = a; // b nhận được một bản sao riêng biệt của "Hello"
    b = "World"; // a vẫn là "Hello"
    ```

*   **Đối tượng được sao chép theo tham chiếu (copied by reference):** Một biến được gán cho một đối tượng sẽ lưu trữ một *tham chiếu* (địa chỉ bộ nhớ) đến đối tượng đó, chứ không phải bản thân đối tượng.
    ```javascript
    let user1 = { name: "John" };
    let user2 = user1; // Cả hai biến đều tham chiếu đến CÙNG MỘT đối tượng trong bộ nhớ

    user2.name = "Pete";
    console.log(user1.name); // Đầu ra: "Pete" (những thay đổi được phản ánh ở cả hai)
    ```

*   **Nhân bản (Sao chép) Đối tượng:**
    *   **Sao chép nông (Shallow Copy):** Sao chép các thuộc tính ở cấp cao nhất. (ví dụ: sử dụng `Object.assign({}, obj)` hoặc cú pháp spread `{...obj}`). Các đối tượng lồng nhau vẫn bị tham chiếu.
    *   **Sao chép sâu (Deep Copy):** Sao chép tất cả các cấp độ, tạo ra các đối tượng hoàn toàn độc lập. (ví dụ: sử dụng `structuredClone(obj)` trong các môi trường hiện đại, hoặc `JSON.parse(JSON.stringify(obj))` - mặc dù phương pháp JSON sẽ làm mất các hàm và symbols).

---

## 11. Mảng (Arrays)

Mảng là một loại đối tượng đặc biệt được sử dụng để lưu trữ các bộ sưu tập dữ liệu có thứ tự.

```javascript
let fruits = ["Apple", "Orange", "Plum"];

// Các phần tử được đánh số bắt đầu từ số không
console.log(fruits[0]); // Apple

// Sửa đổi các phần tử
fruits[2] = "Lemon";

// Thuộc tính độ dài (Length property)
console.log(fruits.length); // 3
```

Mảng có thể chứa các phần tử thuộc bất kỳ kiểu nào, trộn lẫn với nhau.

---

## 12. Các phương thức của Mảng (Array methods)

Mảng cung cấp nhiều phương thức tích hợp sẵn để thao tác.

**Thêm/Xóa các phần tử:**
*   `push(...items)`: Thêm các phần tử vào cuối mảng.
*   `pop()`: Xóa và trả về phần tử cuối cùng.
*   `unshift(...items)`: Thêm các phần tử vào đầu mảng.
*   `shift()`: Xóa và trả về phần tử đầu tiên.

**Lặp và Biến đổi:**
*   `forEach(fn)`: Thực thi một hàm cho mỗi phần tử.
*   `map(fn)`: Tạo một mảng *mới* với kết quả của việc gọi hàm trên mỗi phần tử.
*   `filter(fn)`: Tạo một mảng *mới* với tất cả các phần tử vượt qua bài kiểm tra được triển khai bởi hàm.
*   `reduce(fn, initialValue)`: Thực thi một hàm rút gọn (reducer) trên mỗi phần tử, dẫn đến một giá trị đầu ra duy nhất.

**Tìm kiếm:**
*   `indexOf(item, from)`: Trả về chỉ mục (index) của lần xuất hiện đầu tiên của phần tử, hoặc -1 nếu không tìm thấy.
*   `includes(item, from)`: Trả về `true` nếu mảng chứa phần tử, ngược lại trả về `false`.
*   `find(fn)`: Trả về *giá trị* của phần tử đầu tiên thỏa mãn hàm kiểm tra.

**Thao tác:**
*   `slice(start, end)`: Trả về một mảng mới sao chép các phần tử từ `start` đến `end` (không bao gồm `end`).
*   `splice(pos, deleteCount, ...items)`: Thay đổi nội dung mảng bằng cách xóa/thay thế các phần tử hiện có và/hoặc thêm các phần tử mới vào đúng vị trí (in place).

---

## 13. Xử lý lỗi (Error handling)

Cấu trúc `try...catch` cho phép bạn bắt các lỗi (ngoại lệ - exceptions) để kịch bản (script) không bị sập hoàn toàn.

```javascript
try {
  // Mã có thể ném ra lỗi
  let result = riskyOperation();
  console.log("Success");
} catch (error) {
  // Được thực thi nếu có lỗi xảy ra trong khối 'try'
  console.error("Đã xảy ra lỗi:", error.message);
} finally {
  // (Tùy chọn) Được thực thi bất kể thành công hay có lỗi
  console.log("Các hoạt động dọn dẹp (Cleanup operations)");
}
```

*   **Toán tử `throw`:** Được sử dụng để tạo ra một lỗi tùy chỉnh. `throw new Error("Dữ liệu không hợp lệ");`

---

## 14. Lời hứa (Promises)

Promise là một đối tượng đại diện cho việc hoàn thành (hoặc thất bại) cuối cùng của một thao tác bất đồng bộ và giá trị kết quả của nó. Nó giúp quản lý mã bất đồng bộ tốt hơn so với callback (tránh tình trạng "callback hell" - địa ngục callback).

Một Promise có ba trạng thái:
1.  **Pending (Đang chờ):** Trạng thái ban đầu, chưa được thực hiện hoàn tất cũng như chưa bị từ chối.
2.  **Fulfilled (Đã hoàn thành):** Thao tác hoàn thành thành công.
3.  **Rejected (Bị từ chối):** Thao tác thất bại.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Mô phỏng công việc bất đồng bộ (ví dụ: lấy dữ liệu)
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Lấy dữ liệu thành công!"); // Thay đổi trạng thái thành fulfilled
    } else {
      reject(new Error("Lỗi khi lấy dữ liệu")); // Thay đổi trạng thái thành rejected
    }
  }, 1000);
});

// Tiêu thụ promise
myPromise
  .then(result => console.log(result)) // Xử lý khi thành công
  .catch(error => console.error(error)) // Xử lý khi bị từ chối
  .finally(() => console.log("Hoàn thành"));    // Thực thi bất kể kết quả thế nào
```

---

## 15. Async/await

Được giới thiệu trong ES2017, `async/await` là cú pháp bọc ngoài (syntactic sugar) được xây dựng dựa trên Promises, giúp cho mã bất đồng bộ trông giống và hoạt động giống với mã đồng bộ hơn.

*   **Từ khóa `async`:** Được thêm vào khai báo hàm, nó đảm bảo hàm luôn trả về một Promise.
*   **Từ khóa `await`:** Chỉ có thể được sử dụng bên trong một hàm `async`. Nó làm cho JavaScript tạm dừng thực thi hàm đó cho đến khi Promise được giải quyết (thành công hoặc bị từ chối) và trả về kết quả của nó.

```javascript
async function fetchUserData() {
  try {
    // Quá trình thực thi tạm dừng tại đây cho đến khi fetch promise được giải quyết
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // Quá trình thực thi lại tạm dừng tại đây cho đến khi json promise được giải quyết
    let data = await response.json(); 
    
    console.log(data.name);
  } catch (error) {
    // Các lỗi do promise bị từ chối ném ra sẽ được bắt tại đây
    console.error("Lỗi khi lấy dữ liệu:", error);
  }
}

fetchUserData();
```

---

## 16. Modules (Mô-đun)

Modules cho phép bạn chia mã JavaScript của mình thành các tệp riêng biệt, dễ bảo trì. Mỗi tệp là một mô-đun độc lập.

**Xuất (Exporting - cung cấp các biến/hàm cho các tệp khác):**

```javascript
// tệp: math.js

// Xuất có tên (Named export)
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

// Xuất mặc định (chỉ được phép có một cho mỗi tệp)
export default function multiply(a, b) {
    return a * b;
}
```

**Nhập (Importing - đưa các biến/hàm vào một tệp):**

```javascript
// tệp: main.js

// Nhập các export có tên (phải sử dụng dấu ngoặc nhọn và tên chính xác)
import { PI, add } from './math.js';

// Nhập một export mặc định (có thể đặt tên bất kỳ)
import multi from './math.js';

// Nhập mọi thứ dưới dạng một đối tượng (object)
import * as MathUtils from './math.js';

console.log(PI);
console.log(add(2, 3));
console.log(multi(4, 5));
console.log(MathUtils.PI);
```
*Lưu ý:* Các modules yêu cầu một bước build (như Webpack) hoặc thiết lập cụ thể trong trình duyệt (`<script type="module">`) hoặc Node.js để hoạt động chính xác.