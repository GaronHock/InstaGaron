

export const fetchPhoto = photoId => {
  return $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'GET'
  })
}

export const fetchPhotos = user => (
  $.ajax({
    url: `/api/users/${user}/photos`,
    method: 'GET',
    data: {user}
  })
)

  

export const createPhoto = (photo) => {
  return $.ajax({
    url: '/api/photos',
    method: 'POST',
    data: photo, ///photo is form data coming in dont want to destructure like a POJO because it isnt one!
    contentType: false, //using active support has file itself on request 
    processData: false
  })
  
}

export const updatePhoto = photo =>(
  $.ajax({
    url: `/api/photos/${photo.id}`,
    method: 'PATCH',
    data: {photo},
  })
)

export const deletePhoto = photoId =>(
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'DELETE'
  })
)
 
