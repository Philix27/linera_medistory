import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useSigner } from "@thirdweb-dev/react";
import SendMsg from "./form_comp";
import MessagesList from "./msg";

export default function WrapView() {
  const [isFormActive, setFormActive] = useState(true);

  const handleSubmit = () => {};

  return (
    <div className={styles.container} id="container">
      <h1>Case File</h1>
      <div className={styles.inner_container}>
        <div className={styles.top}>
          <div className={styles.buttons}>
            <p
              onClick={() => setFormActive(true)}
              className={isFormActive ? styles.active : ""}
            >
              {`Dr's Corner`}
            </p>
            <p
              onClick={() => setFormActive(false)}
              className={!isFormActive ? styles.active : ""}
            >
              Your Record
            </p>
          </div>
          {/* <div>
            <p>1 Diax = 1 Dia</p>
          </div> */}
        </div>
        {isFormActive ? <SendMsg /> : <MessagesList />}
      </div>
    </div>
  );
}
