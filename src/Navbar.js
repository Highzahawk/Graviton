import { Link, useMatch, useResolvedPath, useLocation, NavLink } from "react-router-dom"
import { Menu, Layout, Dropdown, Avatar, Badge} from 'antd';
import {
  HomeFilled,
  FileFilled,
  FundFilled,
  EditFilled,
  UserOutlined
} from '@ant-design/icons';
import './navbar.css';
import React, { useState } from 'react'

export default function Navbar() {
    const location = useLocation();
    const { Header, Content, Footer } = Layout;

    return (
      <Layout>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Menu className = "navbar"  
            mode="horizontal" 
            selectedKeys={[location.pathname]}>
              
          <Menu.Item key="/" className="nav-item" >
              <Link  to="/"> 
                <HomeFilled style={{ fontSize: '30px' }} />
              </Link>
          </Menu.Item>

          <Menu.Item key="/pages/FileManager" className="nav-item" >
              <Link to="/pages/FileManager">
                <FileFilled className="icon" style={{ fontSize: '30px' }} />
              </Link>
          </Menu.Item>

          <Menu.Item key="/pages/practice" className="nav-item" >
              <Link to="/pages/practice">
                <EditFilled style={{ fontSize: '30px' }} /> 
              </Link>
          </Menu.Item>

          <Menu.Item key="/pages/dashboard" className="nav-item" >
              <Link to="/pages/dashboard">
                <FundFilled style={{ fontSize: '30px' }} />
              </Link>
          </Menu.Item>

          <Menu.Item key="/pages/account">
          <Link to="/pages/account">
            <span className="avatar-item">
              Walter White <Avatar shape = "circle" icon = {<UserOutlined/>} size = 'large' style = {{backgroundColor: '#412973'}}/>
            </span>
            </Link>
          </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
  
  