import styles from "./sidebar.module.scss";
import Link from "next/link";
import { sideBarItems } from "./sidebar-items";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useAppSelector } from "redux/hooks";
import { SettingsReduxType } from "redux/store";

interface Props {
  collapseSidebar: boolean;
}

export const SideBar: React.FC<Props> = ({ collapseSidebar }) => {
  const router = useRouter();
  const redux_settings = useAppSelector(SettingsReduxType);
  return (
    <Wrapper $isCollapse={redux_settings.isSidebarOpen}>
      <div
        className={
          redux_settings.isSidebarOpen
            ? styles.collapsible
            : styles.sidebar_menu
        }
      >
        <div className={styles.sidebar}>
          <div className={styles.links}>
            {sideBarItems.map((item, i) => (
              <div
                className={`${styles.link} ${
                  router.pathname === item.link ? styles.active : ""
                }`}
                key={i}
              >
                <Link href={item.link}>
                  {item.icon}
                  <p>{item.title}</p>
                </Link>
                <div
                  className={`${styles.active_indicator} ${
                    router.pathname === item.link ? styles.active : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isCollapse: boolean }>`
  /* width: max-content; */
  width: ${(props) => (props.$isCollapse ? "55px" : "max-content")};
  height: 100vh;
`;
