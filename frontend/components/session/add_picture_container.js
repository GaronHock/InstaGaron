import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { createPhoto } from '../../actions/photo_actions'
import AddPictureForm from './add_picture_form';
const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  photos: Object.values(state.entities.photos)
})

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout()),
  createPhoto: (photo) => dispatch(createPhoto(photo))
})


export default connect(mSTP,mDTP)(AddPictureForm)