import react from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Statistic, Button, Card} from 'antd';
import styles from "./dashboardStyles.css";
import { Column } from '@ant-design/plots'; 



    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond | circule', 
      },
      tooltip: {
        formatter: (data) => {
          return {
            name: ''
          };
        },
        customContent: (name, data) =>
          `<div>${data?.map((item) => {
            return `<div class="tooltip-chart" >
                <span class="tooltip-item-name">${item?.name}</span>
                <span class="tooltip-item-value">${item?.value}</span>
              </div>`;
          })}</div>`,
      },
    };

    function Dashboard(){
    return <Column {...config} />;
    }
export default Dashboard;