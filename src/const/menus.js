import {
  Dashboard,
  Experiences,
  Messages,
  Portfolios,
  Skills,
  Users,
} from "../pages/admin";
import { UserOutlined } from "@ant-design/icons";
import { ROLE } from "../utils";

const routes = [
  {
    url: "dashboard",
    page: Dashboard,
    icon: <UserOutlined />,
    label: "Dashboard",
  },
  {
    url: "users",
    page: Users,
    icon: <UserOutlined />,
    label: "Users",
  },
  {
    url: "experiences",
    page: Experiences,
    icon: <UserOutlined />,
    label: "Experiences",
  },
  {
    url: "messages",
    page: Messages,
    icon: <UserOutlined />,
    label: "Messages",
  },
  {
    url: "portfolios",
    page: Portfolios,
    icon: <UserOutlined />,
    label: "Portfolios",
  },
  {
    url: "skills",
    page: Skills,
    icon: <UserOutlined />,
    label: "Skills",
  },
];

let hiddenRoutes = ROLE === "client" ? ["users"] : [];

export const adminRoutes = routes.filter(
  (route) => !hiddenRoutes.includes(route.url)
);
