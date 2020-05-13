import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveAllComments = (allComments) =>{
  return {
    type: RECEIVE_ALL_COMMENTS,
    allComments
    }
}

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment: comment
})

const receiveCommentErrors = (errors) =>({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

const deleteComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

export const fetchAllComments = (imageId) => dispatch =>{
  return CommentApiUtil.fetchAllComments(imageId).then(allComments => {  return dispatch(receiveAllComments(allComments))},
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
}

export const fetchComment = (comment) => dispatch =>{
  return CommentApiUtil.fetchComment(comment).then(comment =>{
    return dispatch(receiveComment(comment))},
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
}
export const createComment = comment => dispatch =>{
  return CommentApiUtil.createComment(comment).then(comment =>{  return dispatch(receiveComment(comment))},
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
  }

export const removeComment = (commentId) => dispatch => {
  debugger;
  return CommentApiUtil.deleteComment(commentId).then(comment => {
    debugger; return dispatch(deleteComment(comment))
  }), 
  errors => dispatch(receiveCommentErrors(errors.responseJSON))
}



