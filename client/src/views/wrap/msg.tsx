import React, { useState, useEffect, Fragment } from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import ProfileNavbar from "comp/navbar";
import { useSigner } from "@thirdweb-dev/react";

const msgList = [
  {
    msg: "Send me some messages. Send me some messagesSend me some messages Send me some messages Send me some messages Send me some messages",
    timestamp: "27, July, 2023",
  },
  {
    msg: "Send me some messages Send me some messages",
    timestamp: "27, July, 2023",
  },
  {
    msg: "Send me some messages Send me some messages",
    timestamp: "27, July, 2023",
  },
];
export default function MessagesList() {
  return (
    <div className={styles.msg_comp}>
      <div className={styles.content}>
          {msgList.map((v, i) => {
            return (
              <div className={styles.msg_item} key={i}>
                <p className={styles.msg}>{v.msg}</p>
                <p className={styles.timestamp}>Timestamp: {v.timestamp}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
