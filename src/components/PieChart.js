import React, { useState } from "react";
import "../styles/PieChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

  
const ReadMore = ({ children }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    console.log(children);

    const labelAssign=[];

const data = {
    labels: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
  datasets: [
    {
      label: 'Types of Product',
      data: [6, 4, 4, 5, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  const text = children;
  const [isOn, setIsOn] = useState(true);
  const toggleIsOn = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="text">
      {isOn ? '' : <Pie data={data} /> }
      <span onClick={toggleIsOn} className="read-or-hide">
        {isOn ? "Show PieChart" : "Hide Pie Chart"}
      </span>
    </div>
  );
};
  
const Content = (props) => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
        {props.data}
        </ReadMore>
      </h2>
    </div>
  );
};
  
export default Content;