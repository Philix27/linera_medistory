import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import { AiFillAppstore, AiFillSecurityScan } from "react-icons/ai";

export default function UseCaseView() {
  return (
    <section className={styles.container} id={"use_case"}>
      <h1>Use case</h1>
      <div className={styles.inner_container}>
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For Patients",
          p: "Manage all your medical records in one place.",
        })}
        {cardItem({
          icon: <AiFillAppstore />,
          title: "For Hospitals",
          p: "Save physical space and labour in managing patients record.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For Pharmacist",
          p: "Can access your patient's routine drugs and enable you checkup on them",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For Doctors",
          p: "Get better insight on your patient's laboratory readings, medication and medical history before making diagnosis.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For Nurses",
          p: "Enables you focus on more important task as you automate payment of bills using superfluid.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "For Lab scientist",
          p: "Guide you in making the best decisions prior to carrying out any findings.",
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
