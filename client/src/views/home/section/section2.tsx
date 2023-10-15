import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import { useRouter } from "next/router";

export default function Section2View() {
  const router = useRouter();
  return (
    <section className={styles.bg2}>
      <div className={styles.inner_container}>
        <div className={styles.image}>
          <img src="./images/couple_blue.png" alt="hero_img" />
        </div>
        <div className={styles.text_content}>
          <h1>Family settlement</h1>
          <p>Settle family regular needs with just few clicks of of button.</p>
          {<Button text={"Get started"} onClick={() => router.push("/")} />}
        </div>
      </div>
    </section>
  );
}
