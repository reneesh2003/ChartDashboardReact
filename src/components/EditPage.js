import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setChartType,setChartData } from '../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/EditPage.scss'

function EditPage({chartData, setChartData}) {
    const navigate = useNavigate()
    const {state} =useLocation()
    const [name,setName] = useState(state.data.employee_name)
    const [salary,setSalary] = useState(state.data.employee_salary)
    const [age,setAge] = useState(state.data.employee_age)
    const handleSubmit = (e) => {
        e.preventDefault()
        const newChartData = chartData.data.map((data)=>{if(data.id===state.data.id){ return {"id":state.data.id,"employee_name":name,"employee_salary":salary,"employee_age":age}} else{ return data}})
        setChartData({
            "status": "success",
            "data": newChartData,
            "message": "Successfully! All records has been fetched."
    })
        navigate('/')
    }
    
  return (
    <div>
        <div className='page-title'>Edit Page</div>
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="employee_name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Salary:</label>
                    <input
                        type="number"
                        name="employee_salary"
                        value={salary}
                        onChange={(e)=>setSalary(e.target.value)}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="employee_age"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
    </div></div>
  )
}

const mapStateToProps = (state) => ({
    chartType: state.chartType,
    chartData: state.chartData
});

const mapDispatchToProps = {
    setChartType,
    setChartData
};


export default connect(mapStateToProps, mapDispatchToProps)(EditPage);