import { connect } from 'react-redux';
import EditForm from './edit_form';
import { update } from '../../actions/session_actions';

const mSTP = (state) =>({
  currentUser: state.entities.users[state.session.id],
  formType: 'Update'
})

const mDTP = dispatch =>({
  updateUserInformation: (user) => dispatch(update(user))
})

export default connect(mSTP,mDTP)(EditForm)