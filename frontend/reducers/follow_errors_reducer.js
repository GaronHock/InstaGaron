import { RECEIVE_FOLLOW_ERRORS, RECEIVE_ALL_FOLLOWERS, RECEIVE_FOLLOWER } from '../actions/follows_actions'
const followErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWERS:
      return [];
    case RECEIVE_FOLLOWER:
      return [];
    case RECEIVE_FOLLOW_ERRORS:
      debugger;
      return action.errors;
    default:
      return state;
  }
}

export default followErrorsReducer;