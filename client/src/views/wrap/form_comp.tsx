import React, { useState, useEffect } from "react";
import styles from "./send.module.scss";
import { Button } from "comp/button";
import ProfileNavbar from "comp/navbar";
import { useSigner } from "@thirdweb-dev/react";

export default function SendMsg() {
  const [isWrap, setIsWrap] = useState(true);
  const [val, setValue] = useState({
    address: "",
    message: "",
  });
  const handleSubmit = () => {};

  return (
    <div className={styles.form_comp}>
      <div className={styles.content}>
        <div className={styles.field}>
          <input
            type="text"
            placeholder="Wallet Address"
            onChange={(e) => {
              setValue((prev) => ({
                ...prev,
                address: e.target.value,
              }));
            }}
            value={val.address}
          />
        </div>
        <div className={styles.field}>
          <textarea
            placeholder="Message to friend"
            maxLength={100}
            onChange={(e) => {
              console.log(e.target.value)
              setValue((prev) => ({
                ...prev,
                message: e.target.value,
              }));
            }}
            value={val.message}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <Button
          text={"Send"}
          onClick={() => {
            handleSubmit();
          }}
        />
      </div>
    </div>
  );
}
