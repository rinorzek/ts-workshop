import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Topic1: NextPage = () => {
  const [formData, setFormData] = useState<{
    email: string;
    age: number;
    verified: boolean;
  }>({
    email: "",
    age: 0,
    verified: false,
  });

  function onChangeFormHandler() {}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Topic1</h1>
        <form>
          <input
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={(e) => {}}
          />
          <input
            type="number"
            placeholder="age"
            value={formData.age}
            onChange={(e) => {}}
          />
          <input
            type="checkbox"
            placeholder="verified"
            checked={formData.verified}
            onChange={(e) => {}}
          />
        </form>
      </main>
    </div>
  );
};

export default Topic1;
