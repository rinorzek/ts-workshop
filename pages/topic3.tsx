import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Topic3: NextPage = () => {
  type IamString<T> = T extends string ? "I am string" : "I am not string";
  type str = IamString<string>; // "I am string"
  type notStr = IamString<number>; // "I am not string"

  // ///////////////////////////////

  type FavoriteColors =
    | "dark sienna"
    | "sap green"
    | "baby blue"
    | [number, number, number]
    | { red: number; green: number; blue: number };

  type StringColors = Extract<FavoriteColors, string>;

  type ObjectColors = Extract<FavoriteColors, { red: number }>;

  type NonString = Exclude<FavoriteColors, string>;

  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
    </div>
  );
};

export default Topic3;
