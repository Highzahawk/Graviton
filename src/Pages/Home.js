import react from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Card, Space, Col, Row} from 'antd';
import {SearchOutlined, VerticalAlignBottomOutlined} from '@ant-design/icons';
import styles from "./buttonStyles.css";


function Home(){
    const navigate = useNavigate(); 
    return(
        <Row gutter={[16, 40]}>
            <Col span = {8}>
                <Button type = "primary" className = "NewClass" shape = "round" size = "large">
                    Add New Class
                </Button>
            </Col>

            <Col span = {8} offset = {8}>
                <Button type="primary" className = "Search" shape = "round" size = "large" >
                    <SearchOutlined />
                    Search
                </Button>
            </Col>

            <Col span = {8}> 
                <Button type = "default" className = "Classes" size = "large">
                Calculus AB
            </Button>
            </Col>                 
        </Row>


        
     
    );
}


export default Home;

