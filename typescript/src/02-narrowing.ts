//The typescript compiler has ability to deal with union and it reason out the visibility of union based on the code we write

//Let's say we have the argument in the function which is of union type we want to so some operation on it based on it's type so we use type guard and type checkers in order figure it out

const working = (work: string | boolean): string => {
  if (typeof work === "string") {
    return work;
  }
  return "not working";
};

//Narrow down based on what is type of padding

const padRight = (str: string, padding: string | number): string => {
  if (typeof padding === "number") {
    return str + " ".repeat(padding);
  }
  return str + padding;
};

//logic in if statements
//in if statements he the operands are get coerced into truthy and falsy value then they return the true and false and in terms of number and string they get coerced into number and string and then they got compared but in typescript we have strict type check which not only checks the value but also checks the type of the variable but it's better practice that we should use the === operator

// we also have following to check the truthiness
Boolean(34);
!!"kate";

//make the function which takes string| string[]|null union as arguments
const printArg = (str: string | string[] | null) => {
  if (str && typeof str === "object") {
    for (let i of str) {
      console.log(i);
    }
  } else if (typeof str === "string") {
    console.log(str);
  }
};

//Make the array using map function with number[] | null and factor:number as argument
const mapIt = (
  arr: number[] | undefined,
  factor: number
): number[] | undefined => {
  if (!arr) {
    return arr;
  }
  return arr.map((item) => item * factor);
};

type Bird = { fly: () => void };
type Fish = { swim: () => void };
type Human = { fly: () => {}; swim: () => void };

function action(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

function action2(animal: Fish | Bird | Human): void {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}

//Using instanceOf to in typesCheck

function isDate(date: Date | string): boolean {
  if (date instanceof Date) {
    return true;
  }
  return false;
}

//If we don't provide type typescript infer it based on what is on right side

const x1 = Math.random() > 0.5 ? "tim" : false;

//Control flow analysis
//When there is union used in function or anywhere typescript checks the code and reasoning of that code and based on that it it tells use the reachability of the code based on what left in union after reasoning out

function example() {
  let x: number | string | boolean;
  x = false;
  if (Math.random() > 0.5) {
    x = "tim";
  } else {
    x = 23;
  }
  return x;
}

//Type predicates

//We use type predicates which is basically the typeGuard which return boolean and also assign the type to the variable i.e two work in one function

const isFish = (animal: Fish | Bird): animal is Fish => {
  return (animal as Fish).swim !== undefined;
};

const perform = (animal: Fish | Bird) => {
  if (isFish(animal)) {
    return animal.swim();
  } else {
    return animal.fly();
  }
};

//Filter array based on the animal inside them is a fish

const animalArr = [
  {
    id: 1,
    name: "startFish",
    swim: () => {},
  },
  {
    id: 2,
    name: "crow",
    fly: () => {},
  },
  {
    id: 3,
    name: "shark",
    swim: () => {},
  },
  {
    id: 4,
    name: "peacock",
    fly: () => {},
  },
  {
    id: 5,
    name: "dolphin",
    swim: () => {},
  },
  {
    id: 6,
    name: "sparrow",
    fly: () => {},
  },
];

//Based on our predicate the type is assign

const filterFish = <T extends { fly: () => {} } | { swim: () => {} }>(
  arr: T[]
): T[] => {
  return arr.filter((animal) => isFish(animal));
};

//assertion
//In assertion we carried out overall checking on the argument and return true with the predicate type

interface Car {
  name: string;
  engine: string;
}

//here in assertion check we carried out overall checking of the all properties in the given object

const isCar = (obj: any): obj is Car => {
  return obj && typeof obj.name === "string" && typeof obj.engine === "string";
};

//Discriminated union which we gonna use when the array of object of the two union  types  have same key but difference in the the value of that key

interface Square {
  kind: "square";
  side: number;
}
interface circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | circle;
// const getArea = (shape: Shape): number => {
//   if (shape.kind === "circle") {
//     return shape.radius ** 2 * Math.PI * 2;
//   } else {
//     return shape.side * 4;
//   }
// };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": {
      return shape.radius ** 2 * Math.PI * 2;
    }
    case "square": {
      return shape.side * 4;
    }
    // default: {
    //   throw new Error("can't recognize the shape");
    // }
    default: {
      let _ExhaustiveType: never = shape;
      return _ExhaustiveType;
    }
  }
}
