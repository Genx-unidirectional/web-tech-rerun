"use strict";
//We can make interface and type signatures to make infer the object
const obj1 = {
    name: "ganesh",
    age: 22,
};
const obj2 = obj1;
// obj2.name = "tim" we cannot alter the readonly property
// but with by altering the obj1 we can alter the obj2 because they are pointing the same address
obj1.name = "jake";
const infoGiver = (shape) => {
    return {
        color: shape.color ? shape.color : "red",
        area: shape.length ? shape.length * 4 : 0,
    };
};
const TestObj3 = {
    shape: "circular",
    color: "red",
};
