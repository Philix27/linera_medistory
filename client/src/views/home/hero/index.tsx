import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { AppImg } from "utils/image";

export default function HeroComp(props: { title: string; subtitle: string }) {
  const router = useRouter();
  return (
    <div className={styles.container} id="hero">
      <div className={styles.inner_container}>
        <div className={styles.image}>
          <img src={AppImg.hero} alt="hero_img" />
        </div>
        <div className={styles.text_content}>
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
