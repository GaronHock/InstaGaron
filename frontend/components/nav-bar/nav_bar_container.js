import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {withRouter} from 'react-router';
import {fetchAllUsers} from '../../actions/user_actions';

export const mSTP = (state) =>({
  currentUser: state.entities.users[state.session.id],
  users: state.entities.users
})

export const mDTP = dispatch =>({
  logout: () => dispatch(logout()),
  fetchAllUsers: () => dispatch(fetchAllUsers()) 
})

export default withRouter(connect(mSTP, mDTP)(NavBar));
