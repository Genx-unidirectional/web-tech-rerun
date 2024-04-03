type Player = {
  name: string;
  age: number;
  alive: boolean;
};

type P = Player["alive"];
type P2 = Player[keyof Player];

const myPlayer = {
  name: "jake",
  age: 25,
  alive: false,
};

type P3 = (typeof myPlayer)["age"];

const myArr = [
  {
    name: "jake",
    age: 25,
    alive: false,
  },
];

type P4 = (typeof myArr)[number]["age"];
