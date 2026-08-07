"use strict";
/**
 * TYPESCRIPT SHARING – 05. CLASS VÀ INTERFACE
 *
 * Nội dung:
 * - Class
 * - this / new
 * - public / private / protected / readonly
 * - inheritance
 * - abstract class
 * - static
 * - interface / implements
 */
// 1. Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `I am ${this.name}`;
    }
    getAge() {
        return this.age;
    }
}
const student = new Student("Minh", 21);
console.log(student.introduce()); // Output: I am Minh
console.log(student.getAge()); // Output: 21
// private chỉ truy cập bên trong class:
// console.log(student.age); // Error: Property 'age' is private and only accessible within class 'Student'
// 2. protected
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Developer extends Person {
    introduce() {
        // protected có thể truy cập trong class con
        return `Developer: ${this.name}`;
    }
}
const developer = new Developer("Minh");
console.log(developer.introduce()); // Output: Developer: Minh
// Không truy cập protected từ bên ngoài:
// console.log(developer.name); // Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses
// 3. readonly
class Account {
    constructor(id) {
        this.id = id;
    }
}
const account = new Account(1001);
// Không thể gán lại readonly:
// account.id = 1002; // Error: Cannot assign to 'id' because it is a read-only property
// 4. Inheritance
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
const dog = new Dog();
dog.move(); // Output: Moving...
dog.bark(); // Output: Woof!
// 5. Abstract class
class Shape {
    describe() {
        return "This is a shape";
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(10, 5);
console.log(rectangle.area()); // Output: 50
console.log(rectangle.describe()); // Output: This is a shape
// Không thể new abstract class:
// const shape = new Shape();
// 6. Static
class MathUtil {
    static square(value) {
        return value * value;
    }
}
MathUtil.PI = 3.14159;
console.log(MathUtil.PI); // Output: 3.14159
console.log(MathUtil.square(5)); // Output: 25
const user = {
    id: 1,
    name: "Minh",
};
console.log(user); // Output: { id: 1, name: 'Minh' }
class Report {
    print() {
        console.log("Printing report...");
    }
}
const report = new Report();
report.print(); // Output: Printing report...
/*
 * LƯU Ý THỰC TẾ
 *
 * 1. `private` và `protected` khác nhau:
 *    - private: chỉ class khai báo nó truy cập.
 *    - protected: class khai báo + class con truy cập.
 *
 * 2. `readonly` không đồng nghĩa với bất biến:
 *    - readonly: không thể gán lại sau khi khởi tạo.
 *    - const: không thể gán lại và phải khởi tạo ngay.
 *    Nếu readonly chứa object, các thuộc tính bên trong object vẫn có thể thay đổi.
 *
 * 3. Class con phải gọi `super()` trước khi sử dụng `this`
 *    trong constructor khi có kế thừa.
 *
 * 4. `implements` yêu cầu class đáp ứng contract của interface.
 */
//# sourceMappingURL=05.js.map