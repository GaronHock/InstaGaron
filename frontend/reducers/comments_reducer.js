import {RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT} from '../actions/comment_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const commentsReducer = (state = {}, action) =>{
  Object.freeze(state)
    switch (action.type) {
      case RECEIVE_ALL_COMMENTS:
        return Object.assign({}, state, action.allComments);
      case RECEIVE_COMMENT:
        return Object.assign({}, state, {[action.comment.id]: action.comment})
      case RECEIVE_PHOTO:
        return Object.assign({}, state, action.comments)
      default:
        return state;
    }
}

export default commentsReducer;
