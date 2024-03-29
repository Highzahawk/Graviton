import { Link, useMatch, useResolvedPath, useLocation, NavLink } from "react-router-dom"
import { Menu, Layout, Dropdown, Avatar, Badge, Row, Col} from 'antd';
import {
  HomeFilled,
  FileFilled,
  FundFilled,
  EditFilled,
  UserOutlined
} from '@ant-design/icons';
import './navbar.css';
import Home from './Pages/Home';
import FileManager from './Pages/FileManager';
import Practice from './Pages/Practice';
import Dashboard from './Pages/Dashboard';
import React, { useState } from 'react'

export default function Navbar() {
    const location = useLocation();
    const { Header, Content, Footer } = Layout;

    return (
      <Layout>
        <Header style={{backgroundColor: '#EC8C8C'}}>
        <Avatar shape = "circle" icon = {<UserOutlined/>} size = 'large' style={{float: 'right', marginTop: '8px',  backgroundColor: '#412973'}} ></Avatar> 
        <Row gutter={[16, 20]} justify = 'center' align={'middle'}>
          <Menu className = "navbar" style={{backgroundColor: '#EC8C8C'}}
            mode="horizontal" 
            selectedKeys={[location.pathname]}>
          <Menu.Item key="/" className="nav-item" >
              <Link  to="/"> 
                <HomeFilled style={{ fontSize: '30px' }} />
              </Link>
          </Menu.Item>

          <Menu.Item key="/FileManager" className="nav-item" >
              <CustomLink to="/FileManager">
                <FileFilled className="icon" style={{ fontSize: '30px' }} />
              </CustomLink>
          </Menu.Item>

          <Menu.Item key="/Practice" className="nav-item" >
              <CustomLink to="Practice">
                <EditFilled style={{ fontSize: '30px' }} /> 
              </CustomLink>
          </Menu.Item>

          <Menu.Item key="/Dashboard" className="nav-item" >
              <CustomLink to="/Dashboard">
                <FundFilled style={{ fontSize: '30px' }} />
              </CustomLink>
          </Menu.Item>
          </Menu>

          </Row>
        </Header>
      </Layout>
    );
  }


function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return(
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}
  
  