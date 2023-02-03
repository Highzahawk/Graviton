import React from 'react';
import { useNavigate } from 'react-router-dom';
import {DownloadOutlined, FilterFilled, SearchOutlined, PlusOutlined, DownOutlined} from '@ant-design/icons'
import {Button, Layout, Space, Grid, Row, Col, Dropdown, Typography, Menu} from 'antd'
import styles from "./PracticeStyles.css";

function Practice(){
    const navigate = useNavigate();
    
    const handleUnitButtonClick = () => {
        navigate('/Unit');
      };

    const classNames = (
        <Menu>
            <Menu.Item key="0">
                AP Calculus AB
            </Menu.Item>
            <Menu.Item key="1">
                AP Language
            </Menu.Item>
        </Menu>
    );

    return(
        <Row gutter={[16, 40]}>
           <Col span = {12}>
                <Dropdown overlay={classNames} trigger={['hover']}>
                    <Button type="primary" className = "ClassFilter" shape = "round" size = "large" >
                        Class Filter <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>

            <Col span = {12}>
                <Button type="primary" className = "Toolbar" shape = "round" size = "large" >
                        <SearchOutlined style={{ fontSize: '24px' }} />
    
                </Button>
            </Col>  

            <Col span = {12}> 
                <Button type = "default" className = "Units" size = "large" onClick={handleUnitButtonClick}>
                Unit 1
                </Button>
            </Col>  
     
        </Row>
    );
}

export default Practice;
