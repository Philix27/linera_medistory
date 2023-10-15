import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import ProfileNavbar from "comp/navbar";

export default function WrapView() {
  const [isWrap, setIsWrap] = useState(true);
  const [tokenValue, setTokenValue] = useState({
    base_coin: 1,
    converted_token: 1,
  });
  return (
    <div className={styles.container} id="container">
      <ProfileNavbar />
      <div className={styles.inner_container}>
        <div className={styles.top}>
          <div className={styles.buttons}>
            <p
              onClick={() => setIsWrap(true)}
              className={isWrap ? styles.active : ""}
            >
              Wrap
            </p>
            <p
              onClick={() => setIsWrap(false)}
              className={!isWrap ? styles.active : ""}
            >
              Unwrap
            </p>
          </div>
          <div>
            <p>1 Diax = 1 Dia</p>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.content}>
            <div className={styles.field}>
              <input type="number" placeholder="amount" maxLength={8} />
              <p>Coin Dia</p>
            </div>
            <div className={styles.field}>
              <input
                type="number"
                placeholder="amount"
                disabled
                maxLength={8}
              />
              <p>Coin Diax</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Button text={"Wrap"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
