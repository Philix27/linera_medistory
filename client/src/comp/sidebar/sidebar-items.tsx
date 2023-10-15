import { ReactNode } from "react";
import { RiExchangeDollarFill } from "react-icons/ri";
import {
  MdDashboard,
  MdGroup,
  MdHistory,
  MdHome,
  MdSwapHoriz,
} from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { AppLinks } from "../../app_url";
import { IoReturnUpBack } from "react-icons/io5";

interface ISidebarItem {
  icon: ReactNode;
  title: string;
  link: string;
  callBack?: () => void;
}

export const sideBarItems: ISidebarItem[] = [
  {
    icon: <MdDashboard />,
    title: "Dashboard",
    link: AppLinks.dashboard,
  },
  {
    icon: <RiExchangeDollarFill />,
    title: "Checkout",
    link: AppLinks.checkout,
  },
  {
    icon: <MdGroup />,
    title: "Beneficiaries",
    link: AppLinks.employee,
  },
  {
    icon: <MdHistory />,
    title: "History",
    link: AppLinks.history,
  },
  {
    icon: <MdSwapHoriz />,
    title: "Wrap/Unwrap",
    link: AppLinks.wrap,
  },
  // {
  //   icon: <RiExchangeDollarFill />,
  //   title: "Good Dollar",
  //   link: AppLinks.goody,
  // },
  {
    icon: <IoMdSettings />,
    title: "Settings",
    link: AppLinks.settings,
  },
  {
    icon: <IoReturnUpBack />,
    title: "Home",
    link: AppLinks.landing,
  },
];
