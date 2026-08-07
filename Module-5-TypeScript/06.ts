/**
 * TYPESCRIPT SHARING – 06. CÁC KIỂU NÂNG CAO VÀ GENERICS
 *
 * Nội dung:
 * - Intersection Type
 * - Type Guard
 * - typeof / in / instanceof
 * - Discriminated Union
 * - Type Assertion
 * - Generic Function / Class / Interface
 */

// 1. Intersection Type
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Minh",
  employeeId: 1001,
};

console.log(employee); // Output: { name: 'Minh', employeeId: 1001 }

// 2. typeof – Type Guard
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello"); // Output: HELLO
printValue(12.5); // Output: 12.50

// 3. in – kiểm tra property
type Admin = {
  name: string;
  permissions: string[];
};

type Customer = {
  name: string;
  purchaseCount: number;
};

function describeUser(user: Admin | Customer): void {
  if ("permissions" in user) {
    console.log(`Admin: ${user.permissions.join(", ")}`); // Output: Admin: read, write
  } else {
    console.log(`Customer purchases: ${user.purchaseCount}`); // Output: Customer purchases: 5
  }
}

describeUser({
  name: "Minh",
  permissions: ["read", "write"],
  purchaseCount: 5, // Có thể có thêm property không xác định
});

// 4. instanceof
class Cat {
  meow() {
    console.log("Meow");
  }
}

class Dog {
  bark() {
    console.log("Woof");
  }
}

function speak(animal: Cat | Dog): void {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

speak(new Cat()); // Output: Meow
speak(new Dog()); // Output: Woof

// 5. Discriminated Union
type Success = {
  status: "success";
  data: string;
};

type Failure = {
  status: "error";
  message: string;
};

type ApiResult = Success | Failure;

function handleResult(result: ApiResult): void {
  if (result.status === "success") {
    console.log(result.data); 
  } else {
    console.error(result.message);
  }
}

handleResult({ status: "success", data: "OK" }); // Output: OK
handleResult({ status: "error", message: "Failed" }); // Output: Failed

// 6. Generic Function
function identity<T>(value: T): T {
  return value;
}

const text = identity<string>("TypeScript");
const number = identity<number>(123);

console.log(text, number); // Output: TypeScript 123

// Có thể để TypeScript tự suy luận T:
const inferred = identity("inferred");

// 7. Generic Function – giải quyết vấn đề bị cố định kiểu
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(getFirst([1, 2, 3])); // Output: 1
console.log(getFirst(["a", "b", "c"])); // Output: a

// 8. Generic Interface
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: {
    id: 1,
    name: "Minh",
  },
  success: true,
};

console.log(userResponse); // Output: { data: { id: 1, name: 'Minh' }, success: true }

// 9. Generic Class
class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

const stringBox = new Box("Hello");
const numberBox = new Box(123);

console.log(stringBox.getValue()); // Output: Hello
console.log(numberBox.getValue()); // Output: 123

// 10. Generic Class implements Generic Interface
interface Repository<T> {
  save(item: T): void;
  getAll(): T[];
}

class InMemoryRepository<T> implements Repository<T> {
  private items: T[] = [];

  save(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const repository = new InMemoryRepository<User>();
repository.save({ id: 1, name: "Minh" });

console.log(repository.getAll()); // Output: [ { id: 1, name: 'Minh' } ]

/*
 * LƯU Ý THỰC TẾ
 *
 * 1. Type Guard phải thật sự thu hẹp kiểu.
 *    `typeof` phù hợp với primitive, `instanceof` phù hợp với class,
 *    `in` phù hợp để kiểm tra property.
 *
 * 2. Discriminated Union nên có field phân biệt rõ ràng như `status`, `type`.
 *
 * 3. Generic không phải là `any`.
 *    Generic giữ lại quan hệ kiểu giữa input và output.
 *
 * 4. Type assertion vẫn có thể "đánh lừa" compiler:
 */
const raw: unknown = "hello";
const forced = raw as number;

// Compile có thể chấp nhận, nhưng dữ liệu runtime vẫn là string.
// Không nên dùng assertion để che lỗi logic.

/*
 * 5. Generic nên được ưu tiên khi cần code tái sử dụng mà vẫn an toàn kiểu.
 */
