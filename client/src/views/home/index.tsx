import React from "react";
import styles from "./styles.module.scss";
import HeroComp from "./hero";
import SectionView from "./section";
import HomeFooter from "./footer";
import CardsView from "./cards";
import Section2View from "./section/section2";
import UseCaseView from "./use_case";
import JumbutronView from "./jumbutron";
import HomeNavbar from "./navbarr";
import WrapView from "views/wrap";

export default function HomeView() {
  // const {} = useweb3;
  return (
    <div className={styles.container} id="container">
      <HomeNavbar />
      {/* <NavComp /> */}
      <HeroComp />
      {/* <JumbutronView /> */}
      <SectionView image={"./images/phone_lock.png"} title={"Secrete Chat"} />
      <CardsView
        list={[
          {
            title: "Identity",
            img: "./images/suprise.png",
            para: "Mask your identity by using a wallet address to send and receive anonymous messages",
          },
          {
            title: "Identity",
            img: "./images/suprise.png",
            para: "Mask your identity by using a wallet address to send and receive anonymous messages",
          },
          {
            title: "Identity",
            img: "./images/suprise.png",
            para: "Mask your identity by using a wallet address to send and receive anonymous messages",
          },
        ]}
      />
      {/* <Section2View /> */}
      {/* <UseCaseView /> */}
      <WrapView />
      <HomeFooter />
    </div>
  );
}
