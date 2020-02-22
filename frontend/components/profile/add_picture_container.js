import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions'
import AddPictureForm from './add_picture_form'

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
})

const mDTP = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
})


export default connect(mSTP,mDTP)(AddPictureForm)