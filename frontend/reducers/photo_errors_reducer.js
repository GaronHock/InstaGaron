import { RECEIVE_PHOTO_ERRORS , RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, } from '../actions/photo_actions'
const PhotoErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return [];
    case RECEIVE_PHOTO:
      return [];
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default PhotoErrorsReducer;