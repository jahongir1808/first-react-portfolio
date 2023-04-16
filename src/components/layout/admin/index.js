import { Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { TOKEN } from "../../../const";
import { adminRoutes } from "../../../const/menus";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./admin.scss";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const logout = () => {
    localStorage.removeItem(TOKEN);
    window.location.href = "/";
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            ...adminRoutes.map((route, i) => ({
              key: i,
              icon: <Link to={"/" + route.url}>{route.icon}</Link>,
              label: route.label,
            })),
            {
              icon: (
                <Button
                  onClick={logout}
                  type="primary"
                  icon={<HiOutlineLogout />}
                >
                  Logout
                </Button>
              ),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
