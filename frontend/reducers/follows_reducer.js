import {RECEIVE_ALL_FOLLOWERS, RECEIVE_FOLLOWER, REMOVE_FOLLOWER} from '../actions/follows_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {merge} from "lodash"

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_FOLLOWERS:
        return Object.assign({}, state, action.followees)
      case RECEIVE_FOLLOWER:
        return Object.assign({}, state, {[action.follow.followed_user_id]: action.follow})
      case REMOVE_FOLLOWER:
        let nextState = merge({}, state)
        delete nextState[action.followerId]
        return nextState;
      case RECEIVE_USER:
        return Object.assign({}, state, action.followees)
      default:
        return state;
  }
}

export default followsReducer;
