import { combineReducers } from '@reduxjs/toolkit';
import responceData from './reducers/responceData';

const rootReducer = combineReducers({
  responceData: responceData,
});
export default rootReducer;
