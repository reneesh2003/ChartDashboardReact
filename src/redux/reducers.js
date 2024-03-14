// reducers.js


const initialState = {
    chartType: 'salary', // Initial chart type
    chartData: {
        "status": "success",
        "data": [],
        "message": "Successfully! All records has been fetched."
}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHART_TYPE':
            return {
                ...state,
                chartType: action.payload
            };
        case 'SET_CHART_DATA':
            return {
                ...state,
                chartData: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
