import { connect } from 'react-redux';
import Greeting from './photo_feed';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session}) => ({
  currentUser: entities.users[session.id]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
