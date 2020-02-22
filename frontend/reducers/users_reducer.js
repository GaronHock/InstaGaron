import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_NEW_PHOTO} from '../actions/photo_actions'
import {RECEIVE_PHOTO} from '../actions/photo_actions'
const usersReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({},state,{[action.user.id]: action.user})  
    case RECEIVE_USER:
      return Object.assign({},state, {[action.user.id]: action.user})
    case RECEIVE_NEW_PHOTO:
       let user = Object.assign({}, state[action.new_photo.photo.user_id])
      let newArray = user.published_photo_ids.slice() // making  copy of published photos 
       newArray.push(action.new_photo.id); // pushing id into new array 
      user.published_photo_ids = newArray;
    return Object.assign({}, state, { [action.new_photo.user_id]: user })
    default:
      return state
  }   
}    
export default usersReducer;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     