import React from "react";
import styles from "./styles.module.scss";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";

export default function HomeFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.social_links}>
          <Link href="https://twitter.com/eligbue_felix">
            <AiFillTwitterSquare />
          </Link>
          <Link href="https://github.com/Philix27">
            <AiFillGithub />
          </Link>
          <Link href="www.linkedin.com/in/eligbue-felix">
            <AiFillLinkedin />
          </Link>
          <Link href="https://web.facebook.com/eligbue.felix.7">
            <AiFillFacebook />
          </Link>
        </div>
        <div className={styles.text_content}>
          <p> © 2023. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
