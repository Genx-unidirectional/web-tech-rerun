"use strict";
//Let's create the function which takes the another function as the argument
const greet = (arg, func) => {
    func(arg);
};
const printArgs = (arg) => {
    console.log(arg);
};
greet("hello", printArgs);
const test = (str) => { };
test.description = "test";
//Create generic for map function
const mapFunc = (arr, callback) => {
    return arr.map(callback);
};
console.log(mapFunc([1, 2, 3, 4], (a) => a * 2));
console.log(mapFunc([1, 2, 3, 4], (a) => a + "tim"));
//Constraining the types
//let's assume the function takes the argument which has length as a property
const compare = (a, b) => {
    if (a.length < b.length) {
        console.log(" b is greater than a");
    }
    else {
        console.log("a is greater than b");
    }
};
//As we know that when we use generics we can explicitly give the type into that generic
const combine = (a, b) => {
    return a.concat(b);
};
console.log(combine([1, 2, 3], [3, 4, 5]));
console.log(combine([1, 2, 4, 5], ["tim", "jade"])); //here we explicitly tells to generic function what type to be takes
//Generic function for filter function of the array
const filterIt = (arr, callback) => {
    return arr.filter(callback);
};
console.log(filterIt([3, 4, 5, 2, 33, 43, 122, 543, 123], (item) => item > 4));
function makeDate(timeStampOrDay, m, y) {
    if (m !== undefined && y !== undefined) {
        return new Date(timeStampOrDay, m, y);
    }
    else {
        return new Date(timeStampOrDay);
    }
}
//rest parameters in function
const takeArg = (...arg) => {
    for (let i of arg) {
        console.log(i);
    }
};
//using destructuring
const testDestructure = ({ a, b, c, }) => {
    console.log(a, b, c);
};
//tuple
const testTuple = (...tup) => {
    //
};
//using rest parameter in the tuple
const testTuple2 = (...tup) => {
    const [a, b, ...boolean] = tup;
};
//We can make the all arguments in array constant
const arr = [1, 2, 4]; //it's totally means the all arguments in arr are readonly
//here in below function the return type seems to be boolean but the void is assign this is because in array
const testFunc = () => {
    return false;
};
//this function assign void to the variable
