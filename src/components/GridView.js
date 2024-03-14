import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Grid.scss'

const GridView = ({data}) => {
    const navigate=useNavigate()
    const handleEdit = (employee) => {
        navigate('/Edit',{state:{data:employee}})
    }
  return (
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {data.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.employee_name}</td>
                        <td>{employee.employee_salary}</td>
                        <td>{employee.employee_age}</td>
                        <td>
                            <button onClick={() => handleEdit(employee)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default GridView