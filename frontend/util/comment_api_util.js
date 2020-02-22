export const fetchAllComments = (photo, comments) => {
  return $.ajax({
    url: `/api/photos/${photo.id}/comments`,
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
