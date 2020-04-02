import { connect } from 'react-redux';
import Greeting from './photo_feed';
import { logout } from '../../actions/session_actions';
import {fetchAllFollowers} from '../../actions/follows_actions'
import {fetchUser, fetchAllUsers} from '../../actions/user_actions';
import {fetchAllPhotos, fetchPhoto} from '../../actions/photo_actions';
import {fetchFolloweesPhotos} from '../../reducers/selectors';
import {fetchAllComments, createComment} from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
  followers: Object.values(state.entities.follows),
  photos: Object.values(state.entities.photos),
  followeesPhotos: fetchFolloweesPhotos(state),
  users: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAllPhotos: (photos) => dispatch(fetchAllPhotos(photos)),
  fetchAllFollowers: (followers) => dispatch(fetchAllFollowers(followers)),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchAllComments: (comments) => dispatch(fetchAllComments(comments)),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchPhoto: (photo) => dispatch(fetchPhoto(photo)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
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