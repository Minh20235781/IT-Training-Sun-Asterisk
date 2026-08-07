"use strict";
/**
 * TYPESCRIPT SHARING – 07. DECORATOR
 *
 * Nội dung:
 * - Decorator là gì
 * - Cấu hình experimentalDecorators
 * - Class / Property / Method / Accessor / Parameter Decorator
 * - Decorator Factory
 * - Giá trị trả về của Decorator
 * - Tự động liên kết
 *
 * LƯU Ý:
 * Decorator trong TypeScript có nhiều khác biệt tùy cơ chế decorator
 * đang sử dụng. Ví dụ này dùng syntax legacy decorator tương ứng với
 * `experimentalDecorators` trong nội dung sharing.
 *
 * tsconfig.json:
 * {
 *   "compilerOptions": {
 *     "experimentalDecorators": true
 *   }
 * }
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1. Class Decorator
function LogClass(constructor) {
    console.log(`Class loaded: ${constructor.name}`); // Output: Class loaded: UserService
    return constructor;
}
let UserService = class UserService {
    getUser() {
        return "user";
    }
};
UserService = __decorate([
    LogClass
], UserService);
// 2. Method Decorator
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey}`, args);
        return originalMethod.apply(this, args);
    };
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    LogMethod
], Calculator.prototype, "add", null);
const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Output: Calling add [ 2, 3 ]
// 3. Property Decorator
function Required(target, propertyKey) {
    console.log(`Required property: ${propertyKey}`); // Output: Required property: username
}
class Form {
}
__decorate([
    Required
], Form.prototype, "username", void 0);
// 4. Accessor Decorator
function LogAccessor(target, propertyKey, descriptor) {
    console.log(`Accessor: ${propertyKey}`); // Output: Accessor: name
}
class User {
    constructor() {
        this._name = "Minh";
    }
    get name() {
        return this._name;
    }
}
__decorate([
    LogAccessor
], User.prototype, "name", null);
// 5. Parameter Decorator
function LogParameter(target, propertyKey, parameterIndex) {
    console.log(`Parameter ${parameterIndex} of ${propertyKey}` // Output: Parameter 0 of login
    );
}
class AuthService {
    login(username) {
        console.log(`Login: ${username}`);
    }
}
__decorate([
    __param(0, LogParameter)
], AuthService.prototype, "login", null);
// 6. Decorator Factory
function Prefix(prefix) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`${prefix}: ${propertyKey}`); // Output: [ORDER]: createOrder
            return originalMethod.apply(this, args);
        };
    };
}
class OrderService {
    createOrder() {
        console.log("Creating order..."); // Output: Creating order...
    }
}
__decorate([
    Prefix("[ORDER]")
], OrderService.prototype, "createOrder", null);
new OrderService().createOrder();
/*
 * 7. Decorator có thể trả về class mới
 */
function AddClassName(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.name_class = constructor.name;
        }
    };
}
let Product = class Product {
};
Product = __decorate([
    AddClassName
], Product);
/*
 * LƯU Ý THỰC TẾ
 *
 * 1. Nếu decorator không chạy:
 *    → Kiểm tra `experimentalDecorators` trong tsconfig.json.
 *
 * 2. Thứ tự decorator rất quan trọng.
 *    Theo nội dung slide, thứ tự được trình bày từ thấp → cao:
 *    Class → Property → Accessor → Method → Parameter.
 *
 * 3. Decorator Factory cần được gọi:
 *    @Prefix("[ORDER]")
 *    chứ không phải @Prefix.
 *
 * 4. Khi decorator thay đổi method/class, phải cẩn thận với:
 *    - `this`
 *    - tham số truyền vào
 *    - kiểu dữ liệu
 *    - return value
 *
 * 5. Không nên lạm dụng decorator cho logic đơn giản vì nó làm
 *    hành vi của class/method khó nhìn thấy trực tiếp.
 */
//# sourceMappingURL=07.js.map