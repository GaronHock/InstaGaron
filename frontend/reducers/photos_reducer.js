import {RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_NEW_PHOTO} from '../actions/photo_actions';
import {RECEIVE_USER} from '../actions/user_actions'
 
const PhotosReducer = (state = {}, action) => {
  

  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.allPhotos.photos)
    case RECEIVE_USER:
      return Object.assign({}, state, action.photos)
    case RECEIVE_PHOTO:
      return Object.assign({}, state, {[action.photo.id]: action.photo})
    case RECEIVE_NEW_PHOTO:
      return Object.assign({}, state, { [action.new_photo.id]: action.new_photo })
    case REMOVE_PHOTO:
      let nextState = Object.assign({},state);
      delete nextState[action.photoId]
      return nextState;
    default:
    return state;
  }
}

export default PhotosReducer;