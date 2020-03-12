
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
  console.log(users);
  console.log(photoId);
  console.log(comments);

  comments.map(comment => {
    if(photoId && photoId.comment_ids){
      if(photoId.comment_ids.includes(comment.id)){
        array.push(comment);
      }
    }
  })
  return array;
}


// export const fetchUserForSpecificComment = (state, ownProps) => {
//   const users = Object.values(state.entities.users);
//   const photoId = state.entities.photos[ownProps.match.params.photoId];

//}



//make a selector
//take in user id
//set up array 
// if state.entities.user.id.publishedphotos.each{id} key in to photos slice of state state.entities.photos[id]
//push this object into empty array
//return array


//going to only grab photos that are associated photos. this.props.photos ---