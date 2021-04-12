import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';

const reducer = combineReducers({ userReducer, adminReducer });

export default reducer;