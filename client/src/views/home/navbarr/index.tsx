"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BiMenu, BiWindowClose } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useAddress, ConnectWallet, useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { AppLinks } from "app_url";

export default function HomeNavbar() {
  const [showModal, setShowModal] = useState(false);
  const wallet_address = useAddress();
  const disconnect = useDisconnect();
  const router = useRouter();

  const ProfileRoutes: Array<JSX.Element> = [];
  const HomeRoutes: Array<JSX.Element> = [
    <p key="1">
      <Link href={"#use_case"}>Use case</Link>
    </p>,
    <p key="2">
      <Link href="#solutions">Solution</Link>
    </p>,
  ];

  function getLinks(path: string): Array<JSX.Element> {
    if (path === "/") return HomeRoutes;
    else return ProfileRoutes;
  }
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h3>Phun</h3>
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
          {...getLinks(router.pathname)}
          {/* {...ProfileRoutes} */}

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
