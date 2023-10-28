'use client';
import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;

  return (
    <Layout className="layout">
      <Navbar />
      <Content
        style={{
          minHeight: '100vh',
          marginTop: '80px',
        }}
        className="container"
      >
        {children}
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default MainLayout;
