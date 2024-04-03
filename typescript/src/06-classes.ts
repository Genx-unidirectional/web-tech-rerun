interface TypePerson {
  id: number;
  name: string;
  age: number;
}

class Person implements TypePerson {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

class Person3 implements TypePerson {
  constructor(public id: number, public name: string, public age: number) {}
}
//so basically we adhere to the types we declare in the interface

//readonly fields
//If the field is readonly we can only assign it in the constructor

class TestClass {
  readonly name: string = "jake";
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  changeIt(value: string) {
    // this.name = value can't do this because field is readonly
  }
}

//we can overload the constructor

class OverloadExample {
  constructor(x: number);
  constructor(s: string, y: string);
  constructor(xs: any, y?: string) {}
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
  constructor(
    public skill: string,
    readonly experience: string,
    public verified: boolean
  ) {
    this.skill = skill;
    this.experience = experience;
    this.verified = verified;
  }
}

class Derived2 extends Base2 {
  constructor(
    public computer: string,
    skill: string,
    experience: string,
    verified: boolean
  ) {
    super(skill, experience, verified);
    this.computer = computer;
  }
  test(value: string) {
    // this.experience = value; --> cannot do this
  }
}

const d1 = new Derived2("windows", "code", "12", true);

//Scope of the variable

let x: number = 10;

class ScopeTest {
  public x: string = "hawk";
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
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`hello ${name}!s`);
    }
  }
}

//
// extend clauses

interface Animal {
  dateOfBirth: number;
}
interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  residents: Animal;
  constructor(animal: Animal) {
    this.residents = animal;
  }
}

class DogHouse extends AnimalHouse {
  // so here we want to redeclare the resident with more specified type
  declare residents: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}

class Info {
  name: string = "lex";
  constructor() {
    console.log(`Info class ${this.name}`);
  }
}

class Derived4 extends Info {
  name = "derived";
  constructor() {
    super();
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
  constructor(
    private message: string,
    public name: string,
    protected age: number
  ) {
    this.name = name;
    this.age = age;
    this.message = message;
  }
  getMessage() {
    return this.message;
  }
  static divide(a: number, b: number) {
    return a / b;
  }
}

const mT = new ModifierTest("doit", "zod", 32);
//we can't do the below thing we need to make the function inside the base class to get their value
// console.log(mT.age)
// console.log(mT.message)
console.log(mT.getMessage());

// console.log(ModifierTest.name);
