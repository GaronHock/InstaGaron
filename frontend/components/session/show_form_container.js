import { connect } from 'react-redux';
import ShowUserProfile from './show_user_profile';
import { logout } from '../../actions/session_actions'
import {fetchUser} from '../../actions/user_actions'

const mSTP = (state, ownProps) =>({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId]
})


const mDTP = (dispatch) =>({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout())
})

export default connect(mSTP,mDTP)(ShowUserProfile);