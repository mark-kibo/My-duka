// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ backgroundColor: '#001529' }}>
      <div className="logo" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Your Company
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ backgroundColor: '#001529' }}>
        <Menu.Item key="home">
          <Link to="/" style={{ color: 'white' }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about" style={{ color: 'white' }}>
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="products" style={{ marginLeft: 'auto' }}>
          <Link to="/products" style={{ color: 'white' }}>
            Products <ShoppingCartOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile" style={{ color: 'white' }}>
            Profile <UserOutlined />
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
