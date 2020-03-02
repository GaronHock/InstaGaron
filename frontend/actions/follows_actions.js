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
  debugger;
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

export const fetchAllFollowers = (followers) => dispatch =>(
  FollowApiUtil.fetchAllFollowers(followers).then(followers => dispatch(receiveAllFollowers(followers)),
  errors => dispatch(receiveFollowErrors(errors)))
)

export const createFollower = follow => dispatch =>{
  debugger;
  return FollowApiUtil.createFollower(follow)
  .then(follow => { debugger; return dispatch(receiveFollower(follow))},
  errors => dispatch(receiveFollowErrors(errors)))
}




// import * as CommentApiUtil from '../util/comment_api_util';

// export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
// export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
// export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'

// const receiveAllComments = (allComments) => {
//   return {
//     type: RECEIVE_ALL_COMMENTS,
//     allComments
//   }
// }

// const receiveComment = (comment) => ({
//   type: RECEIVE_COMMENT,
//   comment: comment
// })

// const receiveCommentErrors = (errors) => ({
//   type: RECEIVE_COMMENT_ERRORS,
//   errors
// })

// export const fetchAllComments = (comments) => dispatch => (
//   CommentApiUtil.fetchAllComments(comments).then(comments => dispatch(receiveAllComments(comments)),
//     errors => dispatch(receiveCommentErrors(errors.responseJSON)))
// )
// export const createComment = comment => dispatch => (
//   CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)),
//     errors => dispatch(receiveCommentErrors(errors.responseJSON)))