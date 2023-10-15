import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";

export default function JumbutronView() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.text_content}>
          <h1>Modern Payroll</h1>
          <p>
            You do not have to wait till the end of the month before paying your
            employees. You can simply stream their earnings all through the
            month.
          </p>
        </div>
      </div>
    </section>
  );
}
