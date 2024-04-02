//We can make interface and type signatures to make infer the object

interface Person {
  name: string;
  verified: boolean;
}
type Person2 = {
  name: string;
  verified: boolean;
};

//we can make the property in the object readonly

type Test1 = {
  readonly name: string;
  readonly age: number;
};
type Test2 = {
  name: string;
  age: number;
};

const obj1: Test2 = {
  name: "ganesh",
  age: 22,
};

const obj2: Test1 = obj1;
// obj2.name = "tim" we cannot alter the readonly property

// but with by altering the obj1 we can alter the obj2 because they are pointing the same address
obj1.name = "jake";

//index signatures

type TestObjBody = {
  [index: string]: number | string;
  name: string;
  age: number;
};
//With index signatures we can define overall object only as a readonly
type TestObjBody2 = {
  readonly [index: string]: number | string;
};

//Excessive type checking means check the type and return some default value instead of that

interface Shaper {
  color?: string;
  length?: number;
}

const infoGiver = (shape: Shaper): { color: string; area: number } => {
  return {
    color: shape.color ? shape.color : "red",
    area: shape.length ? shape.length * 4 : 0,
  };
};

//With the use of the interface we can extend the types

interface Address {
  country: string;
  zipCode: number;
}
interface PersonInfo {
  name: string;
  address: Address;
  active: boolean;
  skill: string;
}

// but we want to add one more property to it so we can extend it

interface PersonIntoWithChallenge extends PersonInfo {
  hero: string;
}

//intersection types

type Circle = {
  shape: "circular";
};
type Color = {
  color: string;
};

type ColorFulCircle = Circle & Color;

const TestObj3: ColorFulCircle = {
  shape: "circular",
  color: "red",
};

type BoxType<T> = {
  box: T;
};
