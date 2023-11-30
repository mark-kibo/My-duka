// ClerkDashboard.js
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col } from 'antd';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  CheckCircleOutlined,
  BoxPlotOutlined,
  ShoppingOutlined,
  PlusOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { Line, Column, Pie } from '@ant-design/charts';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const ClerkDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  // Dummy data for the charts
  const dataLineChart = [
    { year: '2022', value: 30 },
    { year: '2023', value: 50 },
    { year: '2024', value: 45 },
    // Add more data points as needed
  ];

  const dataColumnChart = [
    { type: 'A', sales: 45 },
    { type: 'B', sales: 89 },
    { type: 'C', sales: 67 },
    // Add more data points as needed
  ];

  const dataPieChart = [
    { type: 'Category A', value: 25 },
    { type: 'Category B', value: 35 },
    { type: 'Category C', value: 40 },
    // Add more data points as needed
  ];

  // Dummy configuration for the charts
  const lineChartConfig = {
    data: dataLineChart,
    xField: 'year',
    yField: 'value',
  };

  const columnChartConfig = {
    data: dataColumnChart,
    xField: 'type',
    yField: 'sales',
  };

  const pieChartConfig = {
    data: dataPieChart,
    angleField: 'value',
    colorField: 'type',
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={80} theme="light">
        <Menu mode="vertical" selectedKeys={[selectedMenuItem]} onClick={handleMenuClick}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />} />
          <Menu.Item key="received" icon={<ShoppingCartOutlined />} />
          <Menu.Item key="payment" icon={<CheckCircleOutlined />} />
          <Menu.Item key="stock" icon={<BoxPlotOutlined />} />
          <Menu.Item key="spoilt" icon={<ShoppingOutlined />} />
          <SubMenu key="more" icon={<ShoppingOutlined />}>
            <Menu.Item key="buyingPrice" icon={<PlusOutlined />}>
              Buying Price
            </Menu.Item>
            <Menu.Item key="sellingPrice" icon={<DollarOutlined />}>
              Selling Price
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{selectedMenuItem.toUpperCase()}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {selectedMenuItem === 'dashboard' && (
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card title="Items Received" bordered={false}>
                    <p>Total Items: 100</p>
                    <p>New Items: 20</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Payment Status" bordered={false}>
                    <p>Total Payments: 50</p>
                    <p>Pending Payments: 10</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Items in Stock" bordered={false}>
                    <p>Total Stock: 200</p>
                    <p>Available Stock: 150</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Spoiled Items" bordered={false}>
                    <p>Total Spoiled: 5</p>
                    <p>Recently Spoiled: 2</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Buying Prices" bordered={false}>
                    <p>Average Buying Price: $10</p>
                    <p>Lowest Buying Price: $8</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Selling Prices" bordered={false}>
                    <p>Average Selling Price: $20</p>
                    <p>Highest Selling Price: $25</p>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card title="Supply Requests" bordered={false}>
                    <p>New Requests: 3</p>
                    <p>View Requests</p>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card title="Graphical Reports" bordered={false}>
                    <div style={{ marginBottom: '20px' }}>
                      <h3>Line Chart</h3>
                      <Line {...lineChartConfig} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <h3>Column Chart</h3>
                      <Column {...columnChartConfig} />
                    </div>
                    <div>
                      <h3>Pie Chart</h3>
                      <Pie {...pieChartConfig} />
                    </div>
                  </Card>
                </Col>
              </Row>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ClerkDashboard;
