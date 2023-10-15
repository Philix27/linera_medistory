import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import { AiFillAppstore, AiFillSecurityScan } from "react-icons/ai";

export default function UseCaseView() {
  return (
    <section className={styles.container} id={"use_case"}>
      <div className={styles.inner_container}>
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For employees",
          p: "Receive your salary as you work in realtime. You don't have to wait till the end of the month to get paid.",
        })}
        {cardItem({
          icon: <AiFillAppstore />,
          title: "For family",
          p: "Settle reoccurring family expenses by setting up streams with sends money periodically.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For subscription based systems",
          p: "Can be embedded in subscription based systems. Where you pay as you use.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For streaming platforms",
          p: "A perfect way to implement a pay-as-you-go platform",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For employers",
          p: "Enables you focus on more important task as you automate payment of bills using superfluid.",
        })}
      </div>
    </section>
  );
}
function cardItem(data: {
  icon: JSX.Element;
  title: string;
  p: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      {/* <div className={styles.image}>{data.icon}</div> */}
      <div className={styles.text_content}>
        <h3>{data.title}</h3>
        <p>{data.p}</p>
      </div>
    </div>
  );
}
