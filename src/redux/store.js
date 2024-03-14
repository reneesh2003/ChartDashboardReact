// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import the 'thunk' function
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
