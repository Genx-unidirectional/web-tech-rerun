interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(idOrName: number | string): IdLabel | NameLabel {
//   throw "unimplemented";
// }

// rather doing this we make the conditional types checking

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("jim");

//Create the type who give the type of the message
type Message<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMsgType = Message<Email>;

type ApiInfo<T, K extends keyof T> = T[K];

interface ApiData {
  name: string;
  age: number;
  active: boolean;
}

type ApiDateType = ApiInfo<ApiData, keyof ApiData>;

//Let's make the Message type which take any type and check that it extends the {message:unknown}

type Message2<T> = T extends { message: unknown } ? T["message"] : never;

//flattening the array means take the any type and check that type extends any[] idf yes then check the index type of that array

type Flatten<T> = T extends any[] ? T[number] : never;

type ArrIdxType = Flatten<string[]>;
