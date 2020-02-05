
export const selectSpecificUserPhotos = (state, ownProps) => {
  
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


//make a selector
//take in user id
//set up array 
// if state.entities.user.id.publishedphotos.each{id} key in to photos slice of state state.entities.photos[id]
//push this object into empty array
//return array


//going to only grab photos that are associated photos. this.props.photos ---