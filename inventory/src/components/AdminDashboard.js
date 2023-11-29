// AdminDashboard.js
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const AdminDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={80} theme="light">
        <Menu mode="vertical" selectedKeys={[selectedMenuItem]} onClick={handleMenuClick}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />} />
          <Menu.Item key="supplyRequests" icon={<ShoppingCartOutlined />} />
          <Menu.Item key="paymentStatus" icon={<DollarOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{selectedMenuItem.toUpperCase()}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {/* Add content for each menu item based on the selectedMenuItem */}
            {selectedMenuItem === 'dashboard' && <h1>Admin Dashboard Content</h1>}
            {selectedMenuItem === 'supplyRequests' && <h1>Supply Requests Content</h1>}
            {selectedMenuItem === 'paymentStatus' && <h1>Payment Status Content</h1>}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
