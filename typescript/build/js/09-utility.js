"use strict";
//Awaited<T>
function changeInfo(obj, newInfo) {
    return Object.assign(Object.assign({}, obj), newInfo);
}
const infoOne = {
    description: "BigData",
    fieldSkill: "ballGame",
};
const infoTwo = changeInfo(infoOne, { description: "smallDate" });
console.log(infoTwo);
const u1 = {
    a: 3,
    b: 3,
};
const r1 = {
    height: 23,
    reach: 23,
};
const cats = {
    miffy: { age: 1, breed: "persian" },
    dora: { age: 23, breed: "animated" },
    zyus: { age: 1, breed: "caucasian" },
};
function testIt(arg) {
    if (arg === "crabs")
        return;
}
function testIt2(arg) {
    if (arg === "kate")
        return;
}
const check = ["jake"];
//ReturnType<T>
