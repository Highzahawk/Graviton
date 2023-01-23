import react from 'react';
import { useNavigate } from 'react-router-dom';
import {DownloadOutlined, FilterFilled} from '@ant-design/icons'
import {Button, Layout, Space, Grid, Row, Col, Dropdown, Typography} from 'antd'

function FileManager(){
    const navigate = useNavigate();

    const items = [
    {
        key: '1',
        label: 'Item 1',
    },
    {
        key: '2',
        label: 'Item 2',
    },
    {
        key: '3',
        label: 'Item 3',
    },
  ];

    return(
        <Row gutter={[16, 40]}>
        <Col span = {8} offset = {16}>
            <Dropdown
                menu={{
                items,
            selectable: true,
            defaultSelectedKeys: ['3'],
            }}
        >
            <Typography.Link>
             <Space>
             Filter
                <FilterFilled style={{ fontSize: '30px' }}/>
                </Space>
            </Typography.Link>
        </Dropdown>   
        </Col>           
        </Row>
    );
}

export default FileManager;