import { connect } from 'react-redux';
import NavBar from './nav_bar';

export const mSTP = state =>({
  currentUser: state.entities.users[state.session.id]
})

export const mDTP = dispatch =>({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);