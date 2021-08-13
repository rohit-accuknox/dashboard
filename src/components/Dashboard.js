import React from "react";
import Donut from "./Donut";
import Bar from "./Bar";
import TopSearch from "./TopSearch";
import LineChart from "./LineChart";
import Sales from "./Sales";

import {
  Card,
  Row,
  Col,
  Switch,
  Dropdown,
  Menu,
  Button,
  Typography,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

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

const cardStyle = {
  borderRadius: "10px",
};
const Dashboard = () => {
  return (
    <div>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, background: "#000E1E" }}
      >
        <div>
          <Row>
            <Col span={16}>
              <Title level={3}>Dashboard</Title>
            </Col>
            <Col style={{ display: "flex" }} span={8} push={1}>
              <Title level={5}>Night Mode</Title>
              <Switch
                checkedChildren="on"
                unCheckedChildren="off"
                defaultChecked
              />
            </Col>
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Row gutter={[16, 24]}>
            <Col xs={20} xl={9} md={12}>
              <div style={style}>
                <Card
                  style={cardStyle}
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
            <Col xs={20} xl={9} md={12}>
              <div style={style}>
                <Card style={cardStyle} title="Daily Visitors">
                  <LineChart />
                </Card>
              </div>
            </Col>
            <Col xs={20} xl={6} md={8} lg={10}>
              <div style={style}>
                <Card style={cardStyle} title="Top Searches">
                  <TopSearch />
                </Card>
              </div>
            </Col>
            <Col xs={20} xl={14} md={15}>
              <div style={style}>
                <Card
                  style={cardStyle}
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
                    {/* <Sales /> */}
                  </div>
                </Card>
              </div>
            </Col>
            <Col xs={20} xl={10} md={12}>
              <div style={style}>
                <Card style={cardStyle} title="Sales Distribution">
                  <Donut />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
