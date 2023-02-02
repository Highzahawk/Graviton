import react from 'react';
import { useNavigate } from 'react-router-dom';
import {DownloadOutlined, FilterFilled, SearchOutlined, PlusOutlined, DownOutlined} from '@ant-design/icons'
import {Button, Layout, Space, Grid, Row, Col, Dropdown, Typography, Menu} from 'antd'
import styles from "./FileStyles.css";

function FileManager(){
    const navigate = useNavigate();

    const classNames = (
        <Menu>
            <Menu.Item key="0">
                AP Calculus AB
            </Menu.Item>
            <Menu.Item key="1">
                AP Caclulus BC
            </Menu.Item>
        </Menu>
    );

    const sectionNumber = (
        <Menu>
            <Menu.Item key="0">
                All Sections 
            </Menu.Item>
            <Menu.Item key="1">
                Section 001 
            </Menu.Item>
            <Menu.Item key="2">
                Section 002
            </Menu.Item>
            <Menu.Item key="3">
                Section 003
            </Menu.Item>
        </Menu>
    );

    return(
        <Row gutter={[16, 40]}>
           <Col span = {8}>
                <Dropdown overlay={classNames} trigger={['hover']}>
                    <Button type="primary" className = "ClassFilter" shape = "round" size = "large" >
                        Class Filter <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>

            <Col span = {8}>
                <Dropdown overlay={sectionNumber} trigger={['hover']}>
                    <Button type="primary" className = "SectionFilter" shape = "round" size = "large" >
                        Sections Filter <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>

            <Col span = {8}>
                <Button type="primary" className = "Toolbar" shape = "round" size = "large" >
                    <Space>
                        <SearchOutlined style={{ fontSize: '24px' }} />
                        <PlusOutlined style={{ fontSize: '24px' }}/>
                    </Space>
                </Button>
            </Col>  

            <Col span = {8}> 
                <Button type = "default" className = "Units" size = "large">
                Unit 1
            </Button>
            </Col>  
     
        </Row>
    );
}

export default FileManager;