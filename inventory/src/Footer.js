// Footer.js
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white' }}>
      Your Company &copy; {new Date().getFullYear()}
    </Footer>
  );
};

export default AppFooter;
