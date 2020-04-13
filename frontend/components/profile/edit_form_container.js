import { connect } from 'react-redux';
import EditForm from './edit_form';
import { update } from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions'
import {updateUser} from '../../actions/session_actions';

const mSTP = (state, ownProps) =>({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  formType: 'Update'
})

const mDTP = dispatch =>({
  fetchUser: (user) => dispatch(fetchUser(user)),
  updateUserInformation: (user) => dispatch(update(user)),
  updateUser: (user) => dispatch(update(user))
})

export default connect(mSTP,mDTP)(EditForm)
