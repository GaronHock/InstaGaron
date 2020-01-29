import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';


const errorsRedcuer = combineReducers({
  session: sessionErrorsReducer
})

export default errorsRedcuer;