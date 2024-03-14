// actions.js
import axios from 'axios'

export const setChartType = (chartType) => ({
    type: 'SET_CHART_TYPE',
    payload: chartType
});

export const setChartData = (chartData) => ({
    type: 'SET_CHART_DATA',
    payload: chartData
});

export const fetchData = () => async (dispatch) => {
    try {
        console.log("Fetching data...");
        const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
        dispatch({ type: 'SET_CHART_DATA', payload: response.data });
        console.log(response.data)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};