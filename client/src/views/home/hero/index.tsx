import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import { useRouter } from "next/router";

export default function HeroComp() {
  const router = useRouter();
  return (
    <div className={styles.container} id="hero">
      <div className={styles.inner_container}>
        <div className={styles.image}>
          <img src="./images/emoji_love.png" alt="hero_img" />
        </div>
        <div className={styles.text_content}>
          <h1>Know more about yourself</h1>
          <p>
            Share your address on your social media and let your friends send
            you their thoughts about you anonymously.
          </p>
        </div>
      </div>
    </div>
  );
}
