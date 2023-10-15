"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BiMenu, BiWindowClose } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useAddress, ConnectWallet, useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { AppLinks } from "app_url";

export default function ProfileNavbar() {
  const [showModal, setShowModal] = useState(false);
  const wallet_address = useAddress();
  const disconnect = useDisconnect();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h3>Paysync</h3>
          </Link>
        </div>
        {showModal ? (
          <AiOutlineClose
            className={styles.menu}
            onClick={() => setShowModal(false)}
            size={25}
          />
        ) : (
          <BiMenu
            className={styles.menu}
            onClick={() => setShowModal(true)}
            size={30}
          />
        )}
        <div
          onClick={() => setShowModal(false)}
          className={showModal ? styles.links : styles.no_link}
        >
          <p key="1">
            <Link href={AppLinks.dashboard}>Dashboard</Link>
          </p>
          <p key="2">
            <Link href={AppLinks.wrap}>Wrap/unwrap</Link>
          </p>
          <p key="3">
            <Link href={AppLinks.checkout}>Checkout</Link>
          </p>
          <p key="4">
            <Link href={AppLinks.employee}>Beneficiary</Link>
          </p>
          <p key="5">
            <Link href={AppLinks.goody}>Good Dollar</Link>
          </p>
          <p key="6">
            <Link href={AppLinks.history}>History</Link>
          </p>
          {wallet_address && (
            <p onClick={() => setShowModal(false)}>
              <Link href={AppLinks.dashboard}>Profile</Link>
            </p>
          )}
          {!wallet_address ? (
            <p onClick={() => setShowModal(false)}>
              <ConnectWallet />
            </p>
          ) : (
            <p
              onClick={() => {
                disconnect();
                setShowModal(false);
              }}
            >
              <Link href="/">Disconnect</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
