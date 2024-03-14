import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EditPage from './components/EditPage';
import { useState,useEffect } from 'react';
import MobileDashboard from './components/MobileDashboard';
import { connect } from 'react-redux';
import { setChartType,setChartData, fetchData } from './redux/actions';

function App({ chartType, setChartType, chartData,fetchData}) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  useEffect(()=>{fetchData();console.log(chartData.data)},[]);
  return (
<Routes>
  <Route path='/' element={isDesktop?<Dashboard chartType={chartType} setChartType={setChartType} chartData={chartData}fetchData={fetchData}/>:<MobileDashboard chartType={chartType} setChartType={setChartType} chartData={chartData}fetchData={fetchData}/>}></Route>
  <Route path='/Edit' element={<EditPage/>}></Route>
</Routes>
  );
}

const mapStateToProps = (state) => ({
  chartType: state.chartType,
  chartData: state.chartData
});

const mapDispatchToProps = {
  setChartType,
  setChartData,
  fetchData
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
