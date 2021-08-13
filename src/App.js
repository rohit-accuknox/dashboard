import React from "react";

import "./App.css";
import Donut from "./components/Donut";
import Bar from "./components/Bar";
import TopSearch from "./components/TopSearch";
import {
  Layout,
  Menu,
  Row,
  Col,
  Input,
  Card,
  Typography,
  Avatar,
  Dropdown,
  Button,
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
import LineChart from "./components/LineChart";
import Sales from "./components/Sales";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const style = { padding: "8px 0" };

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
    <div className="app">
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <Row>
            <Col span={6}>
              <Title style={{ margin: "20px" }} level={3}>
                Tunes
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
                Dashboard
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Users
              </Menu.Item>
              <Menu.Item key="3" icon={<GlobalOutlined />}>
                Locations
              </Menu.Item>
              <Menu.Item key="4" icon={<ShoppingOutlined />}>
                Shops
              </Menu.Item>
              <Menu.Item key="5" icon={<ShoppingCartOutlined />}>
                Orders
              </Menu.Item>
              <Menu.Item key="6" icon={<FolderOutlined />}>
                Categories
              </Menu.Item>
              <Menu.Item key="7" icon={<AppstoreOutlined />}>
                Templates
              </Menu.Item>
              <Menu.Item key="8" icon={<SlidersOutlined />}>
                General Settings
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ background: "#041528" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, background: "#000E1E" }}
            >
              <Title level={3}>Dashboard</Title>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Row gutter={[16, 24]}>
                  <Col xs={24} xl={9} md={12} span={6}>
                    <div style={style}>
                      <Card
                        title="Search Activity"
                        extra={
                          <Dropdown overlay={menu}>
                            <Button>
                              Year <DownOutlined />
                            </Button>
                          </Dropdown>
                        }
                      >
                        <Bar />
                      </Card>
                    </div>
                  </Col>
                  <Col xs={24} xl={8} md={12} span={6}>
                    <div style={style}>
                      <Card title="Daily Visitors">
                        <LineChart />
                      </Card>
                    </div>
                  </Col>
                  <Col xs={24} xl={7} md={12} span={6}>
                    <div style={style}>
                      <Card title="Top Searches">
                        <TopSearch />
                      </Card>
                    </div>
                  </Col>
                  <Col xs={24} xl={12} md={12} span={6}>
                    <div style={style}>
                      <Card
                        title="Sales Activity"
                        extra={
                          <Dropdown overlay={menu}>
                            <Button>
                              Month <DownOutlined />
                            </Button>
                          </Dropdown>
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Sales />
                          <Sales />
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col xs={24} xl={12} md={12} span={6}>
                    <div style={style}>
                      <Card title="Sales Distribution">
                        <Donut />
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
