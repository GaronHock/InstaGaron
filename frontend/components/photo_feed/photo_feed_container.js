import { connect } from 'react-redux';
import Greeting from './photo_feed';
import { logout } from '../../actions/session_actions';
import {fetchAllFollowers} from '../../actions/follows_actions'
import {fetchUser} from '../../actions/user_actions';
//import {fetchFolloweesPhotos} from '../../reducers/selectors';
const mapStateToProps = (state) => ({
  currentUser: state.session.id,
  followers: Object.values(state.entities.follows),
  photos: Object.values(state.entities.photos)
  //fetchFolloweesPhotos: fetchFolloweesPhotos(state)
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAllFollowers: (followers) => dispatch(fetchAllFollowers(followers)),
  fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);



// const mSTP = (state, ownProps) => ({
//   currentUser: state.entities.users[state.session.id],
//   user: state.entities.users[ownProps.match.params.userId],
//   photos: fetchSpecificUserPhotos(state, ownProps),
//   followers: state.entities.follower
// })

// const mDTP = (dispatch) => ({
//   fetchAllPhotos: (photos) => dispatch(fetchAllPhotos(photos)),
//   createFollower: (follow) => dispatch(createFollower(follow)),
//   fetchUser: (userId) => dispatch(fetchUser(userId)),
//   fetchAllFollowers: (followers) => dispatch(fetchAllFollowers(followers)),
//   logout: () => dispatch(logout()),
// })