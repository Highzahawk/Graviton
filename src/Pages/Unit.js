import react from 'react';
import { useNavigate } from 'react-router-dom';
import {DownloadOutlined, FilterFilled, SearchOutlined, PlusOutlined, DownOutlined} from '@ant-design/icons'
import {Button, Layout, Space, Grid, Row, Col, Dropdown, Typography, Menu} from 'antd'
import styles from "./UnitStyles.css";

function Unit(){
    const navigate = useNavigate();

    return(
        <Row gutter={[16, 40]}>

            <Col span = {12} offset = {12}>
                <Button type="primary" className = "Toolbar" shape = "round" size = "large" >
                        <SearchOutlined style={{ fontSize: '24px' }} />
                </Button>
            </Col>  


            <Col span = {24}>
                <Space>
                <Button type="primary" className = "FileName" shape = "round" size = "large">
                Derivatives Lecture Slides
                </Button>
                <Button type="primary" className = "FileToolbar"  shape = "round" size = "large">
                    <DownloadOutlined style={{ fontSize: '25px' }} />
                </Button>
                </Space>
            </Col>  

        </Row>
    );
}

export default Unit;