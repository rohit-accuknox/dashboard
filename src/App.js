import React from "react";

import "./App.css";

import { Route, Switch, Link } from "react-router-dom";

import {
  Layout,
  Menu,
  Row,
  Col,
  Input,
  Typography,
  Avatar,
  Dropdown,
} from "antd";

import {
  SearchOutlined,
  UserOutlined,
  DashboardOutlined,
  GlobalOutlined,
  SlidersOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  FolderOutlined,
  AppstoreOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Dashboard from "./components/Dashboard";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="0">Item 1</Menu.Item>
    <Menu.Item key="1">Item 2</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Item 3</Menu.Item>
  </Menu>
);

function App() {
  return (
    <Switch>
      <div className="app">
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <Row>
              <Col span={6}>
                <Title style={{ margin: "20px" }} level={3}>
                  <Link to="/">Tunes</Link>
                </Title>
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Search"
                  style={{ minHeight: "35px" }}
                  prefix={<SearchOutlined />}
                />
              </Col>
              <Col span={6} push={2}>
                <Dropdown overlay={menu}>
                  <div>
                    <Avatar icon={<UserOutlined />} />
                    <DownOutlined />
                  </div>
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                  <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                  <Link to="/users">Users</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<GlobalOutlined />}>
                  <Link to="/locations">Locations</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ShoppingOutlined />}>
                  <Link to="/shops">Shops</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<ShoppingCartOutlined />}>
                  <Link to="/orders">Orders</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<FolderOutlined />}>
                  <Link to="/categories">Categories</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<AppstoreOutlined />}>
                  <Link to="/templates">Templates</Link>
                </Menu.Item>
                <Menu.Item key="8" icon={<SlidersOutlined />}>
                  General Settings
                </Menu.Item>
              </Menu>
            </Sider>

            <Content style={{ background: "#041528" }}>
              <Route exact path="/dashboard" component={Dashboard} />
            </Content>
          </Layout>
        </Layout>
      </div>
    </Switch>
  );
}

export default App;
