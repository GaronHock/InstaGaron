import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'

const receiveAllComments = (allComments) =>{
  return {type: RECEIVE_ALL_COMMENTS,
          allComments}
}

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment: comment
})

const receiveCommentErrors = (errors) =>({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const fetchAllComments = (comments) => dispatch =>(
  CommentApiUtil.fetchAllComments(comments).then(comments => dispatch(receiveAllComments(comments)),
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)
export const createComment = comment => dispatch =>(
  CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)),
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)




