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
import { AppImg } from "utils/image";

export default function HomeView() {
  // const {} = useweb3;
  return (
    <div className={styles.container}>
      <HomeNavbar />
      {/* <NavComp /> */}
      <HeroComp
        title={"Manage your medical history"}
        subtitle={
          "A decentralized platform to manage all of your medical and medication history."
        }
      />
      {/* <JumbutronView /> */}
      <SectionView
        image={"./images/phone_lock.png"}
        title={"Stay in control"}
        subtitle={`Give permission and see all 
        those who has access to your medical
        record from your device.`}
      />
      <CardsView
        title="Solutions"
        list={[
          {
            title: "Case files",
            img: AppImg.card1,
            para: "Avoid locking case files and medical record of patients to the hospital.",
          },
          {
            title: "Diagnosis",
            img: AppImg.card2,
            para: "Stand a chance to get a better diagnosis for your illness. Easy access to an records anytime",
          },
          {
            title: "Linera",
            img: AppImg.card3,
            para: "Save your health record on a personalized micro-chain which gives you full ownership over your data",
          },
        ]}
      />
      {/* <Section2View /> */}

      <WrapView />
      <UseCaseView />
      <HomeFooter />
    </div>
  );
}
