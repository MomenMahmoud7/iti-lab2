import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Global } from '../../../contexts/Global';
import { Layout, Menu } from 'antd';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import 'antd/lib/button/style/index.css';
import 'antd/lib/layout/style/index.css';
import 'antd/lib/menu/style/index.css';
import './Header.css';

const { Header: AntdHeader } = Layout;

const Header = () => {
  const { setUser } = useContext(Global);
  const { pathname } = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('username');
    setUser({});
  };

  return (
    <AntdHeader className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/">
          <Link to="/" className="link">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="/repositories">
          <Link to="/repositories" className="link">
            Repositories
          </Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users" className="link">
            Users
          </Link>
        </Menu.Item>
      </Menu>
      <div className="header-controller">
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </AntdHeader>
  );
};

export default Header;
