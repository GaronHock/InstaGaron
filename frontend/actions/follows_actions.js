import * as FollowApiUtil from '../util/follows_api_util';

export const RECEIVE_ALL_FOLLOWERS = 'RECEIVE_ALL_FOLLOWERS';
export const RECEIVE_FOLLOWER = 'RECEIVE_FOLLOWER';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';
export const REMOVE_FOLLOWER = 'REMOVE_FOLLOWER'

const receiveAllFollowers = (followees) =>{

  return{
    type: RECEIVE_ALL_FOLLOWERS,
    followees
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

export const deleteFollower = (followerId) => {
  debugger;
  return {
    type: REMOVE_FOLLOWER,
    followerId
  }
}

export const fetchAllFollowers = (followers) => dispatch =>{

  return FollowApiUtil.fetchAllFollowers(followers).then(followers => { return dispatch(receiveAllFollowers(followers))},
  errors => dispatch(receiveFollowErrors(errors)))
}

export const createFollower = follow => dispatch =>{
  return FollowApiUtil.createFollower(follow)
  .then(follow => {  return dispatch(receiveFollower(follow))},
  errors => dispatch(receiveFollowErrors(errors)))
}

export const unFollowUser = followerId => dispatch => {
  return FollowApiUtil.deleteFollow(followerId).then(() => dispatch(deleteFollower(followerId)))
}






