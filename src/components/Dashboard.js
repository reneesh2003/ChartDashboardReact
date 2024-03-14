import React, { useState } from 'react'
import EmployeeSalaryChart from './EmployeeSalaryChart';
import EmployeeAgeChart from './EmployeeAgeChart';
import GridView from './GridView';
import '../styles/Dashboard.scss'

const Dashboard = ({ chartType, setChartType, chartData,fetchData}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionChange = (value) => {
      setChartType(value);
      setIsOpen(false);
    };

    return (
        <div className='dashboard'>
            <div className='dashboard-title'>DASHBOARD</div>
        <div className="custom-dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
        {chartType === 'salary' ? 'Employee Salary' : chartType === 'age' ? 'Employee Age' : 'Grid View'}
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div onClick={() => handleOptionChange('salary')}>Employee Salary</div>
          <div onClick={() => handleOptionChange('age')}>Employee Age</div>
          <div onClick={() => handleOptionChange('none')}>Grid View</div>
        </div>
      )}
    </div>
    
            {/* Conditional rendering based on chartType */}
            {chartType === 'salary' && <EmployeeSalaryChart data={chartData.data} />}
            {chartType === 'age' && <EmployeeAgeChart data={chartData.data} />}
            {chartType === 'none' && <GridView data={chartData.data} />}
        </div>
    );
}


export default Dashboard;
