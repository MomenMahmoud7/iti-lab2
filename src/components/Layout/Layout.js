import React, { useContext } from 'react';
import Header from '../UIElements/Header/Header';
import { Layout as AntdLayout } from 'antd';
import './Layout.css';
import { Global } from '../../contexts/Global';
const { Content, Footer } = AntdLayout;

const Layout = ({ children }) => {
  const { user } = useContext(Global);
  return (
    <AntdLayout className="layout">
      {user.username ? <Header /> : null}
      <Content className="layout-content">{children}</Content>
      <Footer className="layout-footer">ITI React Course</Footer>
    </AntdLayout>
  );
};

export default Layout;
