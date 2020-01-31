import { connect } from 'react-redux';
import ShowUserProfile from './show_user_profile';
import { logout } from '../../actions/session_actions'

const mSTP = (state, ownProps) =>({
  currentUser: state.entities.users[state.session.id],
  fetchUser: state.entities.users[ownProps.match.params.userId]
})


const mDTP = (dispatch) =>({
  
  logout: () => dispatch(logout())
})

export default connect(mSTP,mDTP)(ShowUserProfile);