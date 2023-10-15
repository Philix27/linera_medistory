import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useSigner } from "@thirdweb-dev/react";
import SendMsg from "./form_comp";
import MessagesList from "./msg";

export default function WrapView() {
  const signer = useSigner();
  const [isFormActive, setFormActive] = useState(true);
  const [tokenValue, setTokenValue] = useState({
    base_coin: 1,
    converted_token: 1,
  });
  const handleSubmit = () => {};

  return (
    <div className={styles.container} id="container">
      <h1>Chat Anonymously</h1>
      <div className={styles.inner_container}>
        <div className={styles.top}>
          <div className={styles.buttons}>
            <p
              onClick={() => setFormActive(true)}
              className={isFormActive ? styles.active : ""}
            >
              Send Message
            </p>
            <p
              onClick={() => setFormActive(false)}
              className={!isFormActive ? styles.active : ""}
            >
              Your messages
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
