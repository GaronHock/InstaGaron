import * as FollowApiUtil from '../util/follows_api_util';

export const RECEIVE_ALL_FOLLOWERS = 'RECEIVE_ALL_FOLLOWERS';
export const RECEIVE_FOLLOWER = 'RECEIVE_FOLLOWER';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';


const receiveAllFollowers = (allFollowers) =>{
  return{
    type: RECEIVE_ALL_FOLLOWERS,
    allFollowers
  }
}

const receiveFollower = (follow) =>{
  return {
    type: RECEIVE_FOLLOWER,
    follow
  }
}

const receiveFollowErrors = (errors) =>{
  return {
    type: RECEIVE_FOLLOW_ERRORS,
    errors
  }
}

export const fetchAllFollowers = (followers) => dispatch =>{
  debugger;
  return FollowApiUtil.fetchAllFollowers(followers).then(followers => { debugger; return dispatch(receiveAllFollowers(followers))},
  errors => dispatch(receiveFollowErrors(errors)))
}

export const createFollower = follow => dispatch =>{
  return FollowApiUtil.createFollower(follow)
  .then(follow => {  return dispatch(receiveFollower(follow))},
  errors => dispatch(receiveFollowErrors(errors)))
}






