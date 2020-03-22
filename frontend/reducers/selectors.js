
export const fetchSpecificUserPhotos = (state, ownProps) => {
  
  const array = [];
  const userId = state.entities.users[ownProps.match.params.userId]
  const photos = Object.values(state.entities.photos);
  
  photos.map( photo => {
    if(userId && userId.published_photo_ids){
      if (userId.published_photo_ids.includes(photo.id)){
        array.push(photo)
      }
    }
  })
  return array;
}

export const fetchCommentsForASpecificPhoto = (state, ownProps) => {
  const array = [];
  const photoId = state.entities.photos[ownProps.match.params.photoId];
  const comments = Object.values(state.entities.comments)
  const users = Object.values(state.entities.users);


  comments.map(comment => {
    if(photoId && photoId.comment_ids){
      if(photoId.comment_ids.includes(comment.id)){
        array.push(comment);
      }
    }
  })
  return array;
}



export const fetchFolloweesPhotos = (state) => {

  const userId = state.session.id
  const followers = Object.values(state.entities.follows);
  const photos = Object.values(state.entities.photos);
  let array = [];

  for(let i = 0; i < followers.length; i++){
    if(followers[i].follower_id === userId){
      let followed_user = followers[i].followed_user_id;
      debugger;
      for(let j = 0; j < photos.length; j++){
        if (photos[j].user_id === followed_user && photos[j].photoUrl) {
            array.push(photos[j])
        }
      }
    }
  }
  return array;


}

