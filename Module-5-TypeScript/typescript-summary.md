# TỔNG HỢP KIẾN THỨC TYPESCRIPT
*(Tài liệu tham khảo: Tổng hợp TypeScript.pdf)*

Tài liệu này tổng hợp toàn diện các kiến thức về TypeScript, từ nền tảng JavaScript ES6+, các khái niệm cơ bản của TypeScript, cho đến các tính năng nâng cao như Generics, Decorators, cấu hình Webpack và các thư viện hỗ trợ.

---

## 1. Nền Tảng JavaScript (ES6+)
Trước khi bắt đầu với TypeScript, việc nắm vững các khái niệm của ES6+ là rất quan trọng vì TypeScript là tập hợp cha (superset) của JavaScript.

*   **Biến & Kiểu dữ liệu:** Sử dụng `let`, `const` thay cho `var` để quản lý phạm vi (scope) tốt hơn. Các kiểu nguyên thủy gồm: `string`, `number`, `boolean`, `null`, `undefined`, và kiểu tham chiếu `object`, `array`.
*   **Hàm mũi tên (Arrow Functions):** Cú pháp ngắn gọn `const greet = name => \`Hello ${name}\`;`.
*   **Cấu trúc điều khiển:** Các câu lệnh `if...else`, `switch`, vòng lặp `for`, `while`, `for...of`, `for...in`.
*   **Lớp (Classes):** Lập trình hướng đối tượng cơ bản với `class`, `constructor`, `extends` (kế thừa) và `super()`.
*   **Modules:** Chia nhỏ mã nguồn để tái sử dụng với `import` và `export` (Named export và Default export).
*   **Xử lý bất đồng bộ:**
    *   **Promise:** Đại diện cho một tác vụ bất đồng bộ với 3 trạng thái: `Pending`, `Fulfilled`, `Rejected`.
    *   **Async/Await:** Cú pháp giúp viết mã bất đồng bộ trông giống mã đồng bộ, sử dụng khối `try...catch` để bắt lỗi.

---

## 2. Giới Thiệu Về TypeScript & Định Kiểu Tĩnh

### 2.1 Định kiểu tĩnh (Static Typing)
*   **Ưu điểm:** Phát hiện lỗi sớm trước khi chạy (Pre-Runtime Bug Catching), hỗ trợ IDE vượt trội (tự động điền, gợi ý mã), tự ghi chú thông qua kiểu dữ liệu, giúp tái cấu trúc (refactoring) mã nguồn lớn an toàn hơn.
*   **So sánh:**
    *   *Định kiểu tĩnh (TypeScript, Java, C#):* Kiểm tra kiểu lúc biên dịch (compile time).
    *   *Định kiểu động (JavaScript, Python):* Kiểm tra kiểu lúc chạy (runtime), linh hoạt nhưng dễ phát sinh lỗi ngầm.

### 2.2 TypeScript là gì?
*   Là ngôn ngữ mã nguồn mở do Microsoft phát triển.
*   Là **Superset (tập hợp cha)** của JavaScript, hỗ trợ toàn bộ tính năng của JS và bổ sung thêm hệ thống định kiểu tĩnh (Static Typing).
*   Được biên dịch ngược về JavaScript (ES5/ES6) thông qua compiler (`tsc`).

### 2.3 Cài đặt và Biên dịch
*   **Cài đặt:** `npm install -g typescript`
*   **Kiểm tra phiên bản:** `tsc -v`
*   **Biên dịch một file:** `tsc filename.ts` (Sẽ tạo ra file `filename.js`)
*   **Chế độ Watch mode:** `tsc -w` (Tự động biên dịch lại mỗi khi file được lưu).

---

## 3. Các Kiểu Dữ Liệu Cơ Bản (Basic Types)

TypeScript cung cấp hệ thống kiểu dữ liệu phong phú:

*   **Core Types:**
    *   `number`: Không phân biệt số nguyên hay số thực. (VD: `let age: number = 30;`)
    *   `string`: Chuỗi văn bản.
    *   `boolean`: `true` hoặc `false`.
    *   `object`: Đối tượng. (VD: `let person: { name: string; age: number }`)
    *   `array`: Mảng. Khai báo bằng `string[]` hoặc `Array<string>`.
*   **Special Types:**
    *   **Tuple:** Mảng có độ dài cố định và kiểu dữ liệu từng phần tử được xác định rõ. (VD: `let role: [number, string] = [1, 'Admin'];`). *Lưu ý:* Hàm `.push()` vẫn hoạt động với tuple.
    *   **Enum:** Tập hợp các hằng số. (VD: `enum Role { ADMIN, READ_ONLY }`)
    *   **Any:** Bỏ qua kiểm tra kiểu, cho phép gán bất kỳ giá trị nào.
    *   **Unknown:** Tương tự `any` nhưng an toàn hơn, yêu cầu kiểm tra kiểu (type check) trước khi thao tác.
    *   **Union:** Kiểu kết hợp, cho phép biến nhận một trong nhiều kiểu. (VD: `let id: string | number;`)
    *   **Literal Type:** Giới hạn giá trị của biến ở một tập hợp các giá trị cụ thể.
*   **Type Alias (Bí danh kiểu):** Tự định nghĩa kiểu mới. (VD: `type Combinable = string | number;`)
*   **Null & Undefined:** Thể hiện sự vắng mặt của giá trị.
*   **Type Assertions (Khẳng định kiểu):** "Ép" TypeScript hiểu kiểu dữ liệu. Dùng cú pháp `<Type>value` hoặc `value as Type`.

---

## 4. Hàm (Functions)

*   **Định nghĩa kiểu trả về:**
    ```typescript
    function sum(a: number, b: number): number { return a + b; }
    ```
*   **Tham số:**
    *   *Tùy chọn (Optional):* Đặt dấu `?` sau tên tham số (VD: `y?: number`).
    *   *Mặc định (Default):* Khởi tạo ngay lúc khai báo (VD: `x: number = 5`).
    *   *Rest Parameters:* Nhận vô số tham số dưới dạng mảng (VD: `...values: number[]`). Phải đặt ở cuối danh sách.
*   **Void & Never:**
    *   `void`: Hàm không trả về giá trị (chỉ thực thi lệnh).
    *   `never`: Hàm không bao giờ kết thúc (ví dụ vòng lặp vô tận hoặc luôn ném ra lỗi `throw error`).

---

## 5. Cấu Hình tsconfig.json

Sử dụng lệnh `tsc --init` để tạo file cấu hình trung tâm cho dự án:

*   **include / exclude:** Xác định các tệp/thư mục được phép biên dịch hoặc bị bỏ qua.
*   **target:** Phiên bản JavaScript xuất ra (VD: `"es5"`, `"es6"`).
*   **lib:** Các thư viện tích hợp (VD: `["dom", "es6"]`).
*   **allowJs / checkJs:** Cho phép biên dịch và kiểm tra lỗi trên cả file `.js`.
*   **sourceMap:** Tạo file `.js.map` giúp debug trực tiếp trên mã TypeScript trong trình duyệt.
*   **rootDir:** Thư mục chứa mã nguồn gốc (`.ts`).
*   **outDir:** Thư mục xuất các file đã biên dịch (`.js`).

---

## 6. Lớp & Giao Diện (Classes & Interfaces)

### 6.1 Lớp (Classes)
*   **Phạm vi truy cập (Access Modifiers):**
    *   `public` (Mặc định): Truy cập từ mọi nơi.
    *   `private`: Chỉ truy cập được bên trong lớp khai báo.
    *   `protected`: Truy cập được trong lớp khai báo và các lớp con (kế thừa).
    *   `readonly`: Chỉ được gán giá trị một lần khi khởi tạo.
*   **Kế thừa (Inheritance):** Dùng từ khóa `extends`. Lớp con bắt buộc gọi `super()` trong `constructor`. TypeScript không hỗ trợ đa kế thừa.
*   **Overriding (Ghi đè):** Viết lại phương thức của lớp cha trong lớp con.
*   **Thành viên Tĩnh (Static):** Truy cập trực tiếp qua tên lớp mà không cần khởi tạo đối tượng (dùng từ khóa `new`).
*   **Lớp trừu tượng (Abstract Class):** Lớp mẫu chứa các phương thức chưa có thân hàm, bắt buộc các lớp con phải triển khai (implement).

### 6.2 Giao diện (Interfaces)
*   Dùng để định nghĩa cấu trúc của một đối tượng (chỉ có phần khai báo, không có logic). Không được biên dịch ra JavaScript.
*   **Triển khai (Implements):** Một lớp có thể implement nhiều interface.
    ```typescript
    class Person implements Greetable, Runnable { ... }
    ```
*   **Kế thừa (Extends):** Interface có thể kế thừa interface khác.
*   **Interface cho Hàm:** Định nghĩa chữ ký hàm (function signature).
    ```typescript
    interface AddFn { (a: number, b: number): number; }
    ```

---

## 7. Kiểu Nâng Cao & Generics

### 7.1 Kiểu nâng cao (Advanced Types)
*   **Intersection Type (`&`):** Kết hợp nhiều kiểu lại thành một kiểu bao gồm tất cả thuộc tính của chúng.
*   **Type Guard:** Kỹ thuật thu hẹp kiểu dữ liệu để xử lý logic an toàn.
    *   `typeof` cho kiểu nguyên thủy.
    *   `instanceof` cho đối tượng của Lớp.
    *   `in` kiểm tra thuộc tính có tồn tại trong đối tượng.
*   **Discriminated Unions:** Dùng một thuộc tính literal (VD: `type: 'bird'`) để phân biệt các interface/class trong một Union type.
*   **Type Casting (Ép kiểu):** Chuyển đổi kiểu dữ liệu thủ công bằng `as` hoặc `<>`.

### 7.2 Generics (Kiểu tham số hóa)
*   Giải quyết vấn đề tái sử dụng code mà vẫn giữ được sự an toàn kiểu dữ liệu, tránh dùng kiểu `any`.
*   **Cú pháp:** Dùng biến kiểu (thường là `<T>`).
    ```typescript
    function identity<T>(arg: T): T { return arg; }
    ```
*   **Ràng buộc Generics (Constraints):** Dùng từ khóa `extends` (VD: `<T extends object>`).
*   **keyof Constraints:** Đảm bảo một biến kiểu là một thuộc tính (key) tồn tại trong một đối tượng. `K extends keyof T`.
*   Có thể áp dụng Generics cho **Hàm**, **Giao diện (Interface)**, và **Lớp (Class)**.

---

## 8. Decorators

*   **Định nghĩa:** Là cú pháp đặc biệt (`@expression`) gắn vào lớp, phương thức, thuộc tính, tham số hoặc bộ truy xuất (accessor) để thay đổi hoặc bổ sung hành vi tại lúc chạy (run-time).
*   Cần bật `"experimentalDecorators": true` trong `tsconfig.json`.
*   **Thứ tự ưu tiên:** Parameter -> Method -> Accessor/Property -> Class. (Hàm được đánh giá từ trên xuống, nhưng thực thi từ dưới lên).
*   **Decorator Factory:** Một hàm trả về một decorator, cho phép truyền tham số vào decorator.
    ```typescript
    function LoggerFactory(logString: string) {
        return function(constructor: Function) {
            console.log(logString);
        };
    }
    ```
*   **Ứng dụng:** Thường dùng để autobind `this`, lưu log, hoặc xác thực dữ liệu.

---

## 9. Modules, Namespaces & Webpack

### 9.1 Modules & Namespaces
*   **Modules:** Sử dụng `import` và `export`. Bắt buộc phải import ở nơi cần dùng. Mã nguồn chia nhỏ, dễ quản lý.
*   **Re-export:** Gom các module nhỏ vào một file `index.ts` để xuất ra chung.
*   **Namespaces:** Cách tổ chức code đặc thù của TypeScript, nhóm các hàm/lớp có liên quan. Sử dụng `namespace Tên { ... }` và gọi qua cú pháp tham chiếu `/// <reference path="..." />`.

### 9.2 Webpack
*   Là công cụ đóng gói (module bundler), gom nhóm nhiều file `.ts/.js` thành một file tĩnh duy nhất để chạy tối ưu trên trình duyệt.
*   **Cài đặt:** `npm install --save-dev webpack webpack-cli typescript ts-loader`
*   **Cấu hình (`webpack.config.js`):**
    *   `entry`: Điểm bắt đầu (VD: `./src/app.ts`).
    *   `output`: Thư mục và tên file xuất ra (VD: `dist/bundle.js`).
    *   `module/rules`: Sử dụng `ts-loader` để dịch file `.ts`.
    *   `resolve`: Tự động nhận diện phần mở rộng của file (`.ts`, `.js`).
    *   `mode`: Chế độ `development` hoặc `production`.

---

## 10. Các Thư Viện Hỗ Trợ (Validator)

Việc kết hợp TypeScript với các thư viện Javascript/TypeScript giúp tăng năng suất:

*   **Lodash:** Thư viện mạnh mẽ xử lý mảng, object, string.
    *   Cài đặt: `npm i --save lodash` và type: `npm i --save @types/lodash`.
*   **Class-transformer:** Chuyển đổi dữ liệu (từ API/JSON) dạng Object thông thường thành một bản thể (instance) thực sự của một Class.
    *   Sử dụng hàm: `plainToClass(KieuLop, DuLieu)`.
*   **Class-validator:** Xác thực (validate) dữ liệu dựa trên Decorator.
    *   Sử dụng các decorator như `@IsNotEmpty`, `@IsNumber`, `@IsPositive` gắn vào thuộc tính của lớp.
    *   Sử dụng hàm `validate(object)` để kiểm tra dữ liệu và trả về mảng lỗi (nếu có).
