import { Line,Pie,Bar } from "react-chartjs-2";
import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import '../styles/Chart.scss'


const EmployeeSalaryChart = ({data}) => {
  Chart.register(CategoryScale);
  const generateRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r},${g},${b},0.6)`; // Alpha value added for transparency
    };
  useEffect(()=>{setChartData({
    labels: data.map(employee => employee.employee_name), 
    datasets: [
        {
            label: 'Employee Salaries',
            data: data.map(employee => employee.employee_salary),
            backgroundColor: data.map(() => generateRandomColor()),
            fill: false,
            borderColor: 'rgb(0, 0, 0)',
            tension: 0.1
        }
    ]
});},[data])
const [chartData, setChartData] = useState({
  labels: data.map(employee => employee.employee_name), 
  datasets: [
      {
          label: 'Employee Salaries',
          data: data.map(employee => employee.employee_salary),
          backgroundColor: data.map(() => generateRandomColor()),
          fill: false,
          borderColor: 'rgb(0, 0, 0)',
          tension: 0.1
      }
  ]
});

    
  return (
    <div className="chart-container">
      <div className="chart">
        <Line data={chartData} height={600} width={600}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Employee Salary Line Chart"
            },
            legend: {
              display: false
            }
          }
        }}/></div>
        <div className="chart">
        <Pie height={600} width={600}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Employee Salary Pie Chart"
            }
          }
        }}
      /></div>
      <div className="chart-bottom" >
      <Bar height={600} width={600}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Employee Salary Bar Chart"
            }
          }
        }}
      /></div>
    </div>
  )
}

export default EmployeeSalaryChart