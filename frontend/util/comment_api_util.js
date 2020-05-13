export const fetchAllComments = (photo) => {
  return $.ajax({
    url: `/api/photos/${photo}/comments`,
    method: 'GET'
  })
}

export const fetchComment = (comment) =>{
  
  return $.ajax({
    url: `api/comments/${comment}`,
    method: 'GET'
  })
}

export const createComment = (comment) => {
  return $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: {comment}
  })
}


export const deleteComment = (commentId) => {
  return $.ajax({ 
    url: `/api/comments/${commentId}`,
    method: 'DELETE',
  })
}
