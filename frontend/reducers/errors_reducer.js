import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import PhotoErrorsReducer from './photo_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer'

const errorsRedcuer = combineReducers({
  session: sessionErrorsReducer,
  photos: PhotoErrorsReducer,
  commments: commentErrorsReducer
})

export default errorsRedcuer;