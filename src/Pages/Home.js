import react from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Col, Layout, Row, Space} from 'antd';
import {SearchOutlined, VerticalAlignBottomOutlined} from '@ant-design/icons';


function Home(){
    const navigate = useNavigate(); 
    return(
        <Space size = {1000}>

            <Button type = "primary" class = "NewClass" shape = "round" size = "large" style={{ background: "#412973", borderColor: "black"}}>
                Add new class
            </Button>

            <Button type="primary" class = "Search" shape = "round" size = "large" icon={<SearchOutlined />} style={{ background: "#412973", borderColor: "black"}}>
                Search
            </Button>

        </Space>
     
    );
}


export default Home;

