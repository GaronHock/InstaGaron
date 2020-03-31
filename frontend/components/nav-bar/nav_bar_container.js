import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {withRouter} from 'react-router'

export const mSTP = (state) =>({
  currentUser: state.entities.users[state.session.id]
})

export const mDTP = dispatch =>({
  logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP, mDTP)(NavBar));
