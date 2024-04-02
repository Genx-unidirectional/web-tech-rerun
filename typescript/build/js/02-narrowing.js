"use strict";
//The typescript compiler has ability to deal with union and it reason out the visibility of union based on the code we write
//Let's say we have the argument in the function which is of union type we want to so some operation on it based on it's type so we use type guard and type checkers in order figure it out
const working = (work) => {
    if (typeof work === "string") {
        return work;
    }
    return "not working";
};
//Narrow down based on what is type of padding
const padRight = (str, padding) => {
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
const printArg = (str) => {
    if (str && typeof str === "object") {
        for (let i of str) {
            console.log(i);
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
};
//Make the array using map function with number[] | null and factor:number as argument
const mapIt = (arr, factor) => {
    if (!arr) {
        return arr;
    }
    return arr.map((item) => item * factor);
};
function action(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function action2(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
}
//Using instanceOf to in typesCheck
function isDate(date) {
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
    let x;
    x = false;
    if (Math.random() > 0.5) {
        x = "tim";
    }
    else {
        x = 23;
    }
    return x;
}
//Type predicates
//We use type predicates which is basically the typeGuard which return boolean and also assign the type to the variable i.e two work in one function
const isFish = (animal) => {
    return animal.swim !== undefined;
};
const perform = (animal) => {
    if (isFish(animal)) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
};
//Filter array based on the animal inside them is a fish
const animalArr = [
    {
        id: 1,
        name: "startFish",
        swim: () => { },
    },
    {
        id: 2,
        name: "crow",
        fly: () => { },
    },
    {
        id: 3,
        name: "shark",
        swim: () => { },
    },
    {
        id: 4,
        name: "peacock",
        fly: () => { },
    },
    {
        id: 5,
        name: "dolphin",
        swim: () => { },
    },
    {
        id: 6,
        name: "sparrow",
        fly: () => { },
    },
];
//Based on our predicate the type is assign
const filterFish = (arr) => {
    return arr.filter((animal) => isFish(animal));
};
//here in assertion check we carried out overall checking of the all properties in the given object
const isCar = (obj) => {
    return obj && typeof obj.name === "string" && typeof obj.engine === "string";
};
// const getArea = (shape: Shape): number => {
//   if (shape.kind === "circle") {
//     return shape.radius ** 2 * Math.PI * 2;
//   } else {
//     return shape.side * 4;
//   }
// };
function getArea(shape) {
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
            let _ExhaustiveType = shape;
            return _ExhaustiveType;
        }
    }
}
