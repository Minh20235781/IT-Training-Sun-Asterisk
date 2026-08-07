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

// 1. Class Decorator
function LogClass<T extends new (...args: any[]) => object>(
  constructor: T
): T {
  console.log(`Class loaded: ${constructor.name}`); // Output: Class loaded: UserService
  return constructor;
}

@LogClass
class UserService {
  getUser() {
    return "user";
  }
}

// 2. Method Decorator
function LogMethod(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    console.log(`Calling ${propertyKey}`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Output: Calling add [ 2, 3 ]

// 3. Property Decorator
function Required(target: object, propertyKey: string): void {
  console.log(`Required property: ${propertyKey}`); // Output: Required property: username
}

class Form {
  @Required
  username!: string;
}

// 4. Accessor Decorator
function LogAccessor(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  console.log(`Accessor: ${propertyKey}`); // Output: Accessor: name
}

class User {
  private _name = "Minh";

  @LogAccessor
  get name(): string {
    return this._name;
  }
}

// 5. Parameter Decorator
function LogParameter(
  target: object,
  propertyKey: string,
  parameterIndex: number
): void {
  console.log(
    `Parameter ${parameterIndex} of ${propertyKey}` // Output: Parameter 0 of login
  );
}

class AuthService {
  login(@LogParameter username: string): void {
    console.log(`Login: ${username}`);
  }
}

// 6. Decorator Factory
function Prefix(prefix: string) {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      console.log(`${prefix}: ${propertyKey}`); // Output: [ORDER]: createOrder
      return originalMethod.apply(this, args);
    };
  };
}

class OrderService {
  @Prefix("[ORDER]")
  createOrder(): void {
    console.log("Creating order..."); // Output: Creating order...
  }
}

new OrderService().createOrder();

/*
 * 7. Decorator có thể trả về class mới
 */
function AddClassName<T extends new (...args: any[]) => object>(
  constructor: T
): T {
  return class extends constructor {
    name_class = constructor.name;
  } as T;
}

@AddClassName
class Product {}

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
