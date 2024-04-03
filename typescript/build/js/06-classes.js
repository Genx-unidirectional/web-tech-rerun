"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Person3 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
//so basically we adhere to the types we declare in the interface
//readonly fields
//If the field is readonly we can only assign it in the constructor
class TestClass {
    constructor(otherName) {
        this.name = "jake";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    changeIt(value) {
        // this.name = value can't do this because field is readonly
    }
}
//we can overload the constructor
class OverloadExample {
    constructor(xs, y) { }
}
//Scope of variable and super keyword
// class Base {
//   k: number = 12;
// }
// class Derived extends Base {
//     constructor(){
//         super();
//         console.log(this.k)
//     }
// }
class Base2 {
    constructor(skill, experience, verified) {
        this.skill = skill;
        this.experience = experience;
        this.verified = verified;
        this.skill = skill;
        this.experience = experience;
        this.verified = verified;
    }
}
class Derived2 extends Base2 {
    constructor(computer, skill, experience, verified) {
        super(skill, experience, verified);
        this.computer = computer;
        this.computer = computer;
    }
    test(value) {
        // this.experience = value; --> cannot do this
    }
}
const d1 = new Derived2("windows", "code", "12", true);
//Scope of the variable
let x = 10;
class ScopeTest {
    constructor() {
        this.x = "hawk";
    }
    m() {
        // x = "jake";
        this.x = "jake";
    }
}
//Overriding method from the base class
class Base3 {
    greet() {
        console.log("hello friend!");
    }
}
class Derived3 extends Base3 {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`hello ${name}!s`);
        }
    }
}
class AnimalHouse {
    constructor(animal) {
        this.residents = animal;
    }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
}
class Info {
    constructor() {
        this.name = "lex";
        console.log(`Info class ${this.name}`);
    }
}
class Derived4 extends Info {
    constructor() {
        super();
        this.name = "derived";
        console.log(this.name);
    }
}
const d2 = new Derived4();
//Below here we have to manually adjust the prototype of the error class
// class MyError extends Error {
//   constructor(m: string) {
//     super(m);
//   }
//   sayHello() {
//     return "hello" + this.message;
//   }
// }
//when we use private modifier the accessibility of the field is only inside the base class but
// when we use protected the accessibility is only inside the derived class but we cannot manipulate the field using the instance
// using static we can access the field using the class name
class ModifierTest {
    constructor(message, name, age) {
        this.message = message;
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
    static divide(a, b) {
        return a / b;
    }
}
const mT = new ModifierTest("doit", "zod", 32);
//we can't do the below thing we need to make the function inside the base class to get their value
// console.log(mT.age)
// console.log(mT.message)
console.log(mT.getMessage());
// console.log(ModifierTest.name);
