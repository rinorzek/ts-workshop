import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Topic3: NextPage = () => {
  type IamString<T> = T extends string ? "I am string" : "I am not string";
  type str = IamString<string>; // "I am string"
  type notStr = IamString<number>; // "I am not string"

  // ///////////////////////////////

  function process(text: string) {
    return text && text.replace(/f/g, "p");
  }

  process("foo").toUpperCase();

  /// ---

  // function process(text: string | null): string | null {
  //   return text && text.replace(/f/g, "p")
  // }

  //               ⌄ Type Error! :(
  // process("foo").toUpperCase()

  // function process(text: null): null;
  // function process(text: string): string;
  // function process(text: any) {
  //   ...
  // }

  // process(string | null)

  // function process<T extends string | null>(
  //   text: T
  // ): T extends string ? string : null {
  //   ...
  // }

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
