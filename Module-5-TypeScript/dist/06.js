"use strict";
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
const employee = {
    name: "Minh",
    employeeId: 1001,
};
console.log(employee); // Output: { name: 'Minh', employeeId: 1001 }
// 2. typeof – Type Guard
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue("hello"); // Output: HELLO
printValue(12.5); // Output: 12.50
function describeUser(user) {
    if ("permissions" in user) {
        console.log(`Admin: ${user.permissions.join(", ")}`); // Output: Admin: read, write
    }
    else {
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
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
speak(new Cat()); // Output: Meow
speak(new Dog()); // Output: Woof
function handleResult(result) {
    if (result.status === "success") {
        console.log(result.data);
    }
    else {
        console.error(result.message);
    }
}
handleResult({ status: "success", data: "OK" }); // Output: OK
handleResult({ status: "error", message: "Failed" }); // Output: Failed
// 6. Generic Function
function identity(value) {
    return value;
}
const text = identity("TypeScript");
const number = identity(123);
console.log(text, number); // Output: TypeScript 123
// Có thể để TypeScript tự suy luận T:
const inferred = identity("inferred");
// 7. Generic Function – giải quyết vấn đề bị cố định kiểu
function getFirst(items) {
    return items[0];
}
console.log(getFirst([1, 2, 3])); // Output: 1
console.log(getFirst(["a", "b", "c"])); // Output: a
const userResponse = {
    data: {
        id: 1,
        name: "Minh",
    },
    success: true,
};
console.log(userResponse); // Output: { data: { id: 1, name: 'Minh' }, success: true }
// 9. Generic Class
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const stringBox = new Box("Hello");
const numberBox = new Box(123);
console.log(stringBox.getValue()); // Output: Hello
console.log(numberBox.getValue()); // Output: 123
class InMemoryRepository {
    constructor() {
        this.items = [];
    }
    save(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const repository = new InMemoryRepository();
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
const raw = "hello";
const forced = raw;
// Compile có thể chấp nhận, nhưng dữ liệu runtime vẫn là string.
// Không nên dùng assertion để che lỗi logic.
/*
 * 5. Generic nên được ưu tiên khi cần code tái sử dụng mà vẫn an toàn kiểu.
 */
//# sourceMappingURL=06.js.map