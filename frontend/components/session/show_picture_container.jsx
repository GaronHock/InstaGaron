import { connect } from 'react-redux';
import ShowPicture from './show_picture';
import { logout } from '../../actions/session_actions'
import { fetchUser } from '../../actions/user_actions'
import { createPhoto } from '../../actions/photo_actions'
import { selectSpecificUserPhotos } from '../../reducers/selectors'
import { fetchAllPhotos } from '../../actions/photo_actions'
import { fetchPhoto } from '../../actions/photo_actions'

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  photos: selectSpecificUserPhotos(state, ownProps),
  photo: state.entities.photos[ownProps.match.params.photoId]
  //showPhotos: state.entities.photos
  //published_photos: state.entities.user.id.published_photo_ids
})

const mDTP = (dispatch) => ({
  fetchPhoto: (photo) => dispatch(fetchPhoto(photo)),
  fetchAllPhotos: (photos) => dispatch(fetchAllPhotos(photos)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout()),
  createPhoto: (photo) => dispatch(createPhoto(photo))
})

export default connect(mSTP, mDTP)(ShowPicture);