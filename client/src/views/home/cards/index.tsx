import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";

type T = {
  list: {
    img: string;
    title: string;
    para: string;
  }[];
};
export default function CardsView(props: T) {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        {props.list.map((v, i) =>
          cardItem({
            img: v.img,
            title: v.title,
            p: v.para,
          })
        )}
      </div>
    </section>
  );
}
function cardItem(data: {
  img: string;
  title: string;
  p: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={data.img} alt={data.title} height={250} width={250} />
      </div>
      <div className={styles.text_content}>
        <h3>{data.title}</h3>
        <p>{data.p}</p>
      </div>
    </div>
  );
}
