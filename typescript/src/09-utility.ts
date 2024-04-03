//Awaited<T>

type A = Awaited<Promise<string>>;
//It also recursively unwrap the types

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

//Partial<T>:basically give subset of type to a variable

interface GetInfo {
  description: string;
  fieldSkill: string;
}

function changeInfo(obj: GetInfo, newInfo: Partial<GetInfo>): GetInfo {
  return { ...obj, ...newInfo };
}

const infoOne: GetInfo = {
  description: "BigData",
  fieldSkill: "ballGame",
};

const infoTwo: GetInfo = changeInfo(infoOne, { description: "smallDate" });
console.log(infoTwo);

//Required<T>

interface Unit {
  a?: number;
  b?: number;
}

const u1: Required<Unit> = {
  a: 3,
  b: 3,
};

//Readonly<T>

interface Aisle {
  height: number;
  reach: number;
}

const r1: Readonly<Aisle> = {
  height: 23,
  reach: 23,
};

//Record<T>

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "dora" | "zyus";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 1, breed: "persian" },
  dora: { age: 23, breed: "animated" },
  zyus: { age: 1, breed: "caucasian" },
};

//Pick<T>

interface Picker {
  jug: string;
  mud: string;
  quality: string;
  address: string;
  inHouse: boolean;
}

type Hybrid = Pick<Picker, "address" | "inHouse">;

//Omit<T>
type Hybrid2 = Omit<Picker, "jug">;

//Extract<T>

type Picker2 = "jake" | "flake" | "amber";

type Hybrid3 = Extract<Picker2, "jake">;
//Exclude<T>
type Hybrid4 = Exclude<Picker2, "jake">;

// Q-Solve the loose autocomplete problem

// type Arg = "input" |"crabs" |string; here because of putting the string at the union literal type it consider "input" and "crabs" to be same and because it does not get the redundant information
// using type helper
type Arg = "input" | "crabs";
type Helper<T extends string> = T | Omit<string, T>;
type Helper2<T extends string> = T | Exclude<string, T>;

function testIt(arg: Helper<Arg>): void {
  if (arg === "crabs") return;
}
function testIt2(arg: Helper2<Arg>): void {
  if (arg === "kate") return;
}

//NonNullable

type Hybrid5 = NonNullable<string | undefined | number>;

//Parameter<T>

type PType = Parameters<() => string>;

type T1 = Parameters<(s: string) => void>;

const check: T1 = ["jake"];
//ReturnType<T>
