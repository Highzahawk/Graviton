import { Link, useMatch, useResolvedPath, useLocation, NavLink } from "react-router-dom"
import { Menu, Layout } from 'antd';
import {
  HomeFilled,
  FileFilled,
  FundFilled,
  EditFilled
} from '@ant-design/icons';
import './navbar.css';
import React, { useState } from 'react'

export default function Navbar() {
    const location = useLocation();
    return (
      <Layout>
        <Layout.Header className = "navbar" style={{ backgroundColor: '#ffffff' }}>
          <Menu className = "navbar"  style={{ display: 'flex', justifyContent: 'center' }} mode="horizontal" selectedKeys={[location.pathname]}>
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
          </Menu>
        </Layout.Header>
      </Layout>
    );
  }
  
  