import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Exercise2: NextPage = () => {
  // ///////////////////////////////////

  const post1 = {
    title: "first",
  };
  const post2 = {
    title: "second",
  };
  const post3 = {
    title: "third",
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
    </div>
  );
};

export default Exercise2;
