import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_NEW_PHOTO = "RECEIVE_NEW_PHOTO"
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS"


const receiveAllPhotos = allPhotos =>{
  return {
  type: RECEIVE_ALL_PHOTOS,
  allPhotos
  }
}
const receivePhoto = payload => ({
  type: RECEIVE_PHOTO,
  photo: payload.photo,
  comments: payload.comments
})

const receiveNewPhoto = (new_photo) =>({
  type: RECEIVE_NEW_PHOTO,
  new_photo
})

const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
})

const receivePhotoErrors = errors =>({
  type: RECEIVE_PHOTO_ERRORS,
  errors
})

export const fetchAllPhotos = (user) => dispatch =>(
  PhotoAPIUtil.fetchPhotos(user).then(photos => dispatch(receiveAllPhotos(photos)),
  errors => dispatch(receivePhotoErrors(errors.responseJSON)))
)

export const fetchPhoto = photo => dispatch => {
 return PhotoAPIUtil.fetchPhoto(photo).then(photo => dispatch(receivePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors.responseJSON)))
}

export const createPhoto = photo => dispatch => {
  return PhotoAPIUtil.createPhoto(photo).then(photo => dispatch(receiveNewPhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors.responseJSON)))
}

export const updatePhoto = photo => dispatch => (
  PhotoAPIUtil.updatePhoto(photo).then(photo => dispatch(receivePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors.responseJSON)))
)

export const deletePhoto = photoId => dispatch => (
  PhotoAPIUtil.deletePhoto(photoId).then(() => dispatch(removePhoto(photoId)))
)