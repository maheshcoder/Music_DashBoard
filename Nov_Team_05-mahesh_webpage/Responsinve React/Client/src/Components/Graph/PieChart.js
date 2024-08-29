// PieCharts.js
import React from 'react';
import "./PieChart.css";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = {
  // ... your data here
  pop: [
    { name: 'Interested', value: 25 },
    { name: 'Not Interested', value: 20 },
    { name: 'Bad', value: 15 },
    { name: 'Average', value: 40 },
  ],
  rock: [
    { name: 'Interested', value: 30 },
    { name: 'Not Interested', value: 15 },
    { name: 'Bad', value: 10 },
    { name: 'Average', value: 45 },
  ],
  hipHop: [
    { name: 'Interested', value: 20 },
    { name: 'Not Interested', value: 25 },
    { name: 'Bad', value: 30 },
    { name: 'Average', value: 25 },
  ],
  classical: [
    { name: 'Interested', value: 15 },
    { name: 'Not Interested', value: 30 },
    { name: 'Bad', value: 25 },
    { name: 'Average', value: 30 },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ chartData, title }) => {
  return (
    <div className="PieChartComponent">
      <h3 className="PieChartTitle">{title}</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          cx={150}
          cy={150}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="center" verticalAlign="bottom" />
      </PieChart>
    </div>
  );
};

const PieCharts = () => {
  return (
    <div className="PieCharts">
      {Object.entries(data).map(([genre, chartData]) => (
        <PieChartComponent key={genre} chartData={chartData} title={genre} />
      ))}
    </div>
  );
};

export default PieCharts;


