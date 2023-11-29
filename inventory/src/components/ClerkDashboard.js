// ClerkDashboard.js
// Install ant-design to run the code using  npm install antd

import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  CheckCircleOutlined,
  BoxPlotOutlined,
  ShoppingOutlined,
  PlusOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const ClerkDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
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
            {/* Add content for each menu item based on the selectedMenuItem */}
            {selectedMenuItem === 'dashboard' && <h1>Dashboard Content</h1>}
            {selectedMenuItem === 'received' && <h1>Received Items Content</h1>}
            {selectedMenuItem === 'payment' && <h1>Payment Status Content</h1>}
            {selectedMenuItem === 'stock' && <h1>Stock Content</h1>}
            {selectedMenuItem === 'spoilt' && <h1>Spoilt Items Content</h1>}
            {selectedMenuItem === 'buyingPrice' && <h1>Buying Price Content</h1>}
            {selectedMenuItem === 'sellingPrice' && <h1>Selling Price Content</h1>}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ClerkDashboard;

// Regular React
// import React, { useState } from 'react';
// import './ClerkDashboard.css'; // Import your CSS file for styling

// const ClerkDashboard = () => {
//   const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

//   const handleMenuClick = (e) => {
//     setSelectedMenuItem(e.target.getAttribute('data-key'));
//   };

//   return (
//     <div className="clerk-dashboard">
//       <div className="menu">
//         <div
//           className={`menu-item ${selectedMenuItem === 'dashboard' ? 'selected' : ''}`}
//           data-key="dashboard"
//           onClick={handleMenuClick}
//         >
//           Dashboard
//         </div>
//         <div
//           className={`menu-item ${selectedMenuItem === 'received' ? 'selected' : ''}`}
//           data-key="received"
//           onClick={handleMenuClick}
//         >
//           Received Items
//         </div>
//         <div
//           className={`menu-item ${selectedMenuItem === 'payment' ? 'selected' : ''}`}
//           data-key="payment"
//           onClick={handleMenuClick}
//         >
//           Payment Status
//         </div>
//         <div
//           className={`menu-item ${selectedMenuItem === 'stock' ? 'selected' : ''}`}
//           data-key="stock"
//           onClick={handleMenuClick}
//         >
//           Stock
//         </div>
//         <div
//           className={`menu-item ${selectedMenuItem === 'spoilt' ? 'selected' : ''}`}
//           data-key="spoilt"
//           onClick={handleMenuClick}
//         >
//           Spoilt Items
//         </div>
//         <div className="submenu" onClick={handleMenuClick}>
//           <div
//             className={`menu-item submenu-item ${selectedMenuItem === 'buyingPrice' ? 'selected' : ''}`}
//             data-key="buyingPrice"
//           >
//             Buying Price
//           </div>
//           <div
//             className={`menu-item submenu-item ${selectedMenuItem === 'sellingPrice' ? 'selected' : ''}`}
//             data-key="sellingPrice"
//           >
//             Selling Price
//           </div>
//         </div>
//       </div>
//       <div className="content">
//         {/* Add content for each menu item based on the selectedMenuItem */}
//         {selectedMenuItem === 'dashboard' && <h1>Dashboard Content</h1>}
//         {selectedMenuItem === 'received' && <h1>Received Items Content</h1>}
//         {selectedMenuItem === 'payment' && <h1>Payment Status Content</h1>}
//         {selectedMenuItem === 'stock' && <h1>Stock Content</h1>}
//         {selectedMenuItem === 'spoilt' && <h1>Spoilt Items Content</h1>}
//         {selectedMenuItem === 'buyingPrice' && <h1>Buying Price Content</h1>}
//         {selectedMenuItem === 'sellingPrice' && <h1>Selling Price Content</h1>}
//       </div>
//     </div>
//   );
// };

// export default ClerkDashboard;
