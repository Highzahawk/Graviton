
import react, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Statistic, Button, Card, Layout, Select} from 'antd';
import styles from "./dashboardStyles.css";
import { Column, Line } from '@ant-design/plots'; 
import { Content } from 'antd/es/layout/layout';



const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const data = [
  {
    class: 'AP Language',
    Grade: 85,
  },
  {
    class: 'AP Psychology',
    Grade: 90,
  },
  {
    class: 'AP Calculus AB',
    Grade: 78,
  },
  {
    class: 'Engineering 1',
    Grade: 83,
  },
  {
    class: 'Graphic Production',
    Grade: 100,
  },
  {
    class: 'AP Computer Science',
    Grade: 92,
  },
];

const config = {
  columnStyle: {
    fill:'#1A6680',
    stroke: 'black',
    lineWidth:2,
    cursor: 'pointer'
  },
  data,
  yField: 'Grade',
  xField: 'class',
  tooltip: {
    customContent: (title, items) => {
      return (
        <>
          <h5 style={{ marginTop: 16 }}>{title}</h5>
          <ul style={{ paddingLeft: 0 }}>
            {items?.map((item, index) => {
              const { name, value, color } = item;
              return (
                <li
                  key={item.class}
                  className="g2-tooltip-list-item"
                  data-index={index}
                  style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                >
                  <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                  <span
                    style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                  >
                    <span style={{ marginRight: 16 }}>{name}:</span>
                    <span className="g2-tooltip-list-item-value">{value}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      );
    },
  },
  point: {
    size: 5,
    shape: 'circle',
    style: {
      fill: 'whites',
      stroke: '#ffffff',
      lineWidth: 2,
    },
  },
};



function Dashboard() {
  const [selectedData, setSelectedData] = useState(data);
  const options = data.map(d => ({ value: d.class, label: d.class }));
  const onChange = (value) => {
    setSelectedData(data.filter(d => d.class === value));
  }
  return (
    <Row gutter={[32, 20]} justify = 'center'>
      <Col>
      <Select className='classDropdown'
      bordered = {false}
      placeholder = "Select Class"
      placement='topLeft'
      size='large'
        onChange={onChange}
        options={options}
      />
      </Col>
      <Col>
      <Select className='unitDropdown'
      bordered = {false}
      placeholder = "Select Unit"
      size='large'
        onChange={onChange}
        options={options}
      />
      </Col>
      <div style={{ width: '100%', height: '80vh' }}>
        <Column {...config} />
        </div>

      </Row>
  );
}

export default Dashboard;

