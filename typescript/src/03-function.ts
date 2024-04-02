//Let's create the function which takes the another function as the argument

const greet = (arg: string, func: (str: string) => void): void => {
  func(arg);
};
const printArgs = (arg: string) => {
  console.log(arg);
};

greet("hello", printArgs);

//function signatures
type DescribableFunction = {
  (str: string): void;
  description: string;
};

const test: DescribableFunction = (str: string): void => {};
test.description = "test";

//construct signatures
type FuncConstruct = {
  new (s: string): void;
  (s: string): void;
};

//Create generic for map function

const mapFunc = <Input, Output>(
  arr: Input[],
  callback: (item: Input) => Output
): Output[] => {
  return arr.map(callback);
};

console.log(mapFunc([1, 2, 3, 4], (a) => a * 2));
console.log(mapFunc([1, 2, 3, 4], (a) => a + "tim"));

//Constraining the types
//let's assume the function takes the argument which has length as a property

const compare = <T extends { length: number }>(a: T, b: T): void => {
  if (a.length < b.length) {
    console.log(" b is greater than a");
  } else {
    console.log("a is greater than b");
  }
};

//As we know that when we use generics we can explicitly give the type into that generic

const combine = <T>(a: T[], b: T[]): T[] => {
  return a.concat(b);
};

console.log(combine([1, 2, 3], [3, 4, 5]));

console.log(combine<string | number>([1, 2, 4, 5], ["tim", "jade"])); //here we explicitly tells to generic function what type to be takes

//Generic function for filter function of the array

const filterIt = <T>(arr: T[], callback: (item: T) => boolean): T[] => {
  return arr.filter(callback);
};

console.log(filterIt([3, 4, 5, 2, 33, 43, 122, 543, 123], (item) => item > 4));

//Using overload to the function

function makeDate(timeStamp: number): Date;
function makeDate(d: number, m: number, y: number): Date;
function makeDate(timeStampOrDay: number, m?: number, y?: number): Date {
  if (m !== undefined && y !== undefined) {
    return new Date(timeStampOrDay, m, y);
  } else {
    return new Date(timeStampOrDay);
  }
}

//rest parameters in function

const takeArg = (...arg: string[]): void => {
  for (let i of arg) {
    console.log(i);
  }
};

//using destructuring
const testDestructure = ({
  a,
  b,
  c,
}: {
  a: number;
  b: number;
  c: number;
}): void => {
  console.log(a, b, c);
};

//  we can use interface to create the object body

interface Props {
  a: number;
  b: number;
  c: number;
}

//tuple

const testTuple = (...tup: [string, number, boolean]) => {
  //
};

//using rest parameter in the tuple
const testTuple2 = (...tup: [a: string, b: number, ...c: boolean[]]): void => {
  const [a, b, ...boolean] = tup;
};

//We can make the all arguments in array constant

const arr = [1, 2, 4] as const; //it's totally means the all arguments in arr are readonly

//behavior of the return type void

type Func = () => void;
//here in below function the return type seems to be boolean but the void is assign this is because in array
const testFunc: Func = () => {
  return false;
};
//this function assign void to the variable
