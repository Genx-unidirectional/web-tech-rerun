//Typescript is a strongly typed language and the typescript compiler checks the types which you provided while writing the code and it's linter gives error if there is conflict in any of type instead of giving the error in the
//We are going to use the typescript because we don't want the runtime error which javascript produces

//General build in types provided by typescript

let a1: string = "tim";
let a2: boolean = false;
let a3: number = 12;
let a4: string[] = ["tim", "lena"];
let a5: [number, string] = [23, "lex"]; // this is a example of the tuple
let a6: (string | number)[] = [23, "ttt", 54];
let a7: any = 34;
let a8: never; //this is used or came when any function is returning error or we end up checking all union and there is no union left in the function argument
let a9: null;
let a10: undefined;
let a11: unknown;

// we can use type signatures to make the object body or anything
type Roster = {
  name: string;
  level: string;
  platform: string;
};

const pete: Roster = {
  name: "pete",
  level: "two",
  platform: "SNL",
};

// we can use interface to declare the types
interface Noob {
  name: string;
  level: number;
}

const jake: Noob = {
  name: "jake paul",
  level: 0,
};

//Type annotation with function

type Sum = (a: number, b: number) => number;

interface Sum2 {
  (a: number, b: number): number;
}
//Below is for object so be careful
interface ObjectFunc {
  sum: (a: number, b: number) => number;
}

//Types with arrays
let arr1: (string | boolean | number)[] = ["tim", 23, false];

let arr2: Array<number> = [23, 345];
let arr3: [string, number, boolean] = ["tim", 43, false]; //this is tuple which looks like array
let arr4: ReadonlyArray<string> = ["tim"];
let arr5: readonly string[];

//assertion

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c == "add") {
    return a + b;
  } else {
    return "" + a + b;
  }
};

const result = addOrConcat(23, 44, "concat") as string; //here we make the assertion but we need to be careful before making the assertion because it fails the typescript

//Where to use typescript

// const year = document.getElementById("year")!; we can use non-null operator here to tell explicitly to typescript compiler that the it's not a null

// also we can make assertion here
const year = document.getElementById("year") as HTMLSpanElement;
const presentYear: string = new Date().getFullYear().toString();
year.innerHTML = presentYear;
