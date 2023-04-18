import {
  Dashboard,
  Experiences,
  Messages,
  Portfolios,
  Skills,
  Users,
} from "../pages/admin";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { BsDiagram3Fill, BsJournalPlus } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { ROLE } from "../utils";

const routes = [
  {
    url: "dashboard",
    page: Dashboard,
    icon: <MdOutlineDashboardCustomize />,
    label: "Dashboard",
  },
  {
    url: "users",
    page: Users,
    icon: <GrUserSettings />,
    label: "Users",
  },
  {
    url: "experiences",
    page: Experiences,
    icon: <BsDiagram3Fill />,
    label: "Experiences",
  },
  {
    url: "messages",
    page: Messages,
    icon: <TbMessages />,
    label: "Messages",
  },
  {
    url: "portfolios",
    page: Portfolios,
    icon: <BsJournalPlus />,
    label: "Portfolios",
  },
  {
    url: "skills",
    page: Skills,
    icon: <GiSkills />,
    label: "Skills",
  },
];

let hiddenRoutes = ROLE === "client" ? ["users"] : [];

export const adminRoutes = routes.filter(
  (route) => !hiddenRoutes.includes(route.url)
);
