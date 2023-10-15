import { useState } from "react";
import {
  BsReverseLayoutTextSidebarReverse,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
import styles from "./styles.module.scss";
import TimeAgo from "timeago-react"; // var TimeAgo =
import { SettingsReduxType } from "redux/store";
import { SettingsActions } from "redux/slice/settings";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useAddress, useNetworkMismatch } from "@thirdweb-dev/react";
import { formatWalletAddress } from "utils/helper";

interface IProps {
  collapsible: boolean;
  setCollapseSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavBar(data: IProps) {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useAppDispatch();
  const redux_settings = useAppSelector(SettingsReduxType);
  const address = useAddress();
  const isMismatched = useNetworkMismatch();
  return (
    <div className={styles.navbar}>
      <div
        onClick={() => {
          dispatch(SettingsActions.sidebar(!redux_settings.isSidebarOpen));
          console.log("Clicked Button", redux_settings.isSidebarOpen);
        }}
      >
        {redux_settings.isSidebarOpen ? (
          <BsReverseLayoutTextSidebarReverse />
        ) : (
          <BsLayoutSidebarInsetReverse />
        )}
      </div>
      <div>
        {isMismatched ? (
          <p>Network: Disconnected</p>
        ) : (
          <p> Network: Connected</p>
        )}
      </div>
      <div>
        <p>{formatWalletAddress(address!)}</p>
      </div>
      <div>
        <p>
          Last seen:
          <TimeAgo live={false} datetime={Date.now()} />
        </p>
      </div>
      <div>
        <p>
          Joined:
          <TimeAgo live={false} datetime={Date.UTC(2023, 7, 27)} />
        </p>
      </div>
    </div>
  );
}
