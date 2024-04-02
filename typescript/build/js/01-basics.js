"use strict";
//Typescript is a strongly typed language and the typescript compiler checks the types which you provided while writing the code and it's linter gives error if there is conflict in any of type instead of giving the error in the
//We are going to use the typescript because we don't want the runtime error which javascript produces
//General build in types provided by typescript
let a1 = "tim";
let a2 = false;
let a3 = 12;
let a4 = ["tim", "lena"];
let a5 = [23, "lex"]; // this is a example of the tuple
let a6 = [23, "ttt", 54];
let a7 = 34;
let a8; //this is used or came when any function is returning error or we end up checking all union and there is no union left in the function argument
let a9;
let a10;
let a11;
const pete = {
    name: "pete",
    level: "two",
    platform: "SNL",
};
const jake = {
    name: "jake paul",
    level: 0,
};
//Types with arrays
let arr1 = ["tim", 23, false];
let arr2 = [23, 345];
let arr3 = ["tim", 43, false]; //this is tuple which looks like array
let arr4 = ["tim"];
let arr5;
//assertion
const addOrConcat = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
};
const result = addOrConcat(23, 44, "concat"); //here we make the assertion but we need to be careful before making the assertion because it fails the typescript
//Where to use typescript
// const year = document.getElementById("year")!; we can use non-null operator here to tell explicitly to typescript compiler that the it's not a null
// also we can make assertion here (as we make assertion we are failing the typescript)
const year = document.getElementById("year");
const presentYear = new Date().getFullYear().toString();
year.innerHTML = presentYear;
const obj = {
    name: "Ganesh",
    age: 21,
    height: "176 cm",
};
for (let key in obj) {
    // console.log(obj[key]);// here problem comes because the key is dynamic so irt has implicit any type on it
    console.log(obj[key]);
}
const propPrinter = (obj, key) => {
    return obj[key];
};
//generics
const isObj1 = (arg) => {
    return arg;
};
//Make the  generic which check any thing is coming is object or not
const isObj = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && !obj == null;
};
//Make the generic which check truthy value of anything
const isTrue = (arg) => {
    if (typeof arg === "object" && Object.keys(arg).length < 0) {
        return { arg, is: false };
    }
    if (Array.isArray(arg) && arg.length < 0) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const isTrue2 = (arg) => {
    if (typeof arg === "object" && Object.keys(arg).length < 0) {
        return { value: arg, is: false };
    }
    if (Array.isArray(arg) && arg.length < 0) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const PropsArrMaker = (arr, key) => {
    return arr.map((item) => item[key]);
};
const testArr = [
    {
        id: 1,
        name: "tim",
    },
    {
        id: 2,
        name: "jake",
    },
    {
        id: 3,
        name: "cake",
    },
    {
        id: 3,
        name: "leo",
    },
];
console.log("heel");
const result1 = PropsArrMaker(testArr, "id");
console.log(result1);
//Utility types basics
//Pick utility type
//Omit utility
//Extract utility
//Exclude utility
//Record
//ReturnType
//ParameterType
//ReadonlyType
