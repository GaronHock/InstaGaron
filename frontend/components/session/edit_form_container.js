import { connect } from 'react-redux';
import EditForm from './edit_form';
import { update } from '../../actions/session_actions';
import {createPhoto} from '../../actions/photo_actions';

const mSTP = (state) =>({
  currentUser: state.entities.users[state.session.id],
  formType: 'Update'
})

const mDTP = dispatch =>({
  updateUserInformation: (user) => dispatch(update(user)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout()),
  createPhoto: (photo) => dispatch(createPhoto(photo))
})

export default connect(mSTP,mDTP)(EditForm)