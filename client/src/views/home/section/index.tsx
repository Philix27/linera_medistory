import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import { useRouter } from "next/router";

export default function SectionView(props: { image: string;  title:string}) {
  const router = useRouter();
  return (
    <section className={styles.bg1}>
      <div className={styles.inner_container}>
        <div className={styles.image}>
          <img src={props.image} alt="hero_img" />
        </div>
        <div className={styles.text_content}>
          <h1>{ props.title}</h1>
          <p>
            Employees and workers get paid althrough the month as they work.
            They do not need to wait till the end of the month before getting
            their earnings.
          </p>
          {<Button text={"Get started"} onClick={() => router.push("/")} />}
        </div>
      </div>
    </section>
  );
}
