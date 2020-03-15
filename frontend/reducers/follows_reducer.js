
import {RECEIVE_ALL_FOLLOWERS, RECEIVE_FOLLOWER} from '../actions/follows_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_FOLLOWERS:
        return Object.assign({}, state, action.allFollowers)
      case RECEIVE_FOLLOWER:
        return Object.assign({}, state, {[action.follow.followed_user_id]: action.follow})
      case RECEIVE_USER:
        return Object.assign({}, state, action.followers)
      default:
        return state;
  }
}

export default followsReducer;
