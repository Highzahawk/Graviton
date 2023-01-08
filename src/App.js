import logo from './logo.svg';
import './App.css';
import {Button, Space, Icon, ConfigProvider, Menu, Layout} from 'antd';
import SignIn from './Components/Auth/SignIn';
import Home from './Pages/Home';
import FileManager from './Pages/FileManager';
import Practice from './Pages/Practice';
import Dashboard from './Pages/Dashboard';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import {
  HomeOutlined,
  DashboardOutlined,
  FileOutlined,
  EditOutlined,
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react'

function App() {
  return(
    <>
    <Navbar />
     <div className="container">
      { /*<SignIn /> */ }

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/FileManager" element={<FileManager />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </div>
    </>
  );
} 

export default App;




/*const App = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const styles = {
    menu: {
      justifyContent: 'center',
      color: '#412973',
      width: '100%',
    },
    icon: {
      color: '#412973',
      
    },
    selected: {
      color: '#ffffff',
    },
  };

 
function App() {
  const location = useLocation();
  return (
    <Navbar>
    <Layout>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Link to="/">
              <HomeOutlined />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/pages/file-manager">
            <Link to="/pages/file-manager">
              <FileOutlined />
              File Manager
            </Link>
          </Menu.Item>
          <Menu.Item key="/pages/practice">
            <Link to="/pages/practice">
              <DesktopOutlined />
              Practice
            </Link>
          </Menu.Item>
          <Menu.Item key="/pages/dashboard">
            <Link to="/pages/dashboard">
              <UserOutlined />
              Dashboard
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    </Layout>
    </Navbar>
  );
}
*/





