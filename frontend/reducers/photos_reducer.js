import {RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_NEW_PHOTO} from '../actions/photo_actions';
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_ALL_COMMENTS} from '../actions/comment_actions'
import {RECEIVE_COMMENT} from '../actions/comment_actions'
const photosReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.allPhotos)
    case RECEIVE_USER:
      return Object.assign({}, state, action.photos)
    case RECEIVE_PHOTO:
      return Object.assign({}, state, {[action.photo.id]: action.photo})
    case RECEIVE_ALL_COMMENTS:
      
      return Object.assign({}, state, action.allComments)
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

//     case RECEIVE_NEW_PHOTO:
// let user = Object.assign({}, state[action.new_photo.photo.user_id])
// let newArray = user.published_photo_ids.slice() // making  copy of published photos 
// newArray.push(action.new_photo.id); // pushing id into new array 
// user.published_photo_ids = newArray;
// return Object.assign({}, state, { [action.new_photo.user_id]: user })

export default photosReducer;