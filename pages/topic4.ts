export type Car = {
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
};

let carColor: Car["color"];

export type Fruit = {
  name: string;
  color: string;
  mass: string;
};

type Dict<T> = { [k: string]: T };

const fruitCatalog: Dict<Fruit> = {};
fruitCatalog.apple;

type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit };

function printFruitCatalog(fruitCatalog: MyRecord) {
  fruitCatalog.apple;
  fruitCatalog.cherry;

  // fruitCatalog.pineapple;
}
