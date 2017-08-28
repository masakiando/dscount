import {combineReducers} from 'redux';
import signup from './signupReducer';

const rootReducer = combineReducers({
  signup: signup
});

export default rootReducer;
