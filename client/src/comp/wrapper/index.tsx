import React, { useState } from "react";
import styles from "./wrapper.module.scss";
import { SideBar } from "../sidebar/sidebar";
// import NavBar from "../navbar/navbar.comp";
import { useAppSelector } from "redux/hooks";
import { SettingsReduxType } from "redux/store";
import AuthWrapper from "./auth";
import Side_NavBar from "comp/sidebar/navbar.comp";

export default function BaseWrapper(props: any) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [collapseSidebar, setCollapseSidebar] = useState<boolean>(false);
  const redux_settings = useAppSelector(SettingsReduxType);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <AuthWrapper>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <SideBar collapseSidebar={redux_settings.isDarkTheme} />
        </div>
        <div className={styles.children_container}>
          <Side_NavBar
            collapsible={collapseSidebar}
            setCollapseSidebar={setCollapseSidebar}
          />
          {props.children}
        </div>
      </div>
    </AuthWrapper>
  );
}
