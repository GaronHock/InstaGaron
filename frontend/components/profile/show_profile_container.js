import { connect } from 'react-redux';
import ShowUserProfile from './show_user_profile';
import { logout } from '../../actions/session_actions'
import {fetchUser} from '../../actions/user_actions'
import {fetchSpecificUserPhotos} from  '../../reducers/selectors'
import { fetchAllPhotos } from '../../actions/photo_actions'
import {createFollower, fetchAllFollowers} from '../../actions/follows_actions'
const mSTP = (state, ownProps) =>({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  photos: fetchSpecificUserPhotos(state, ownProps),
  following: Object.values(state.entities.follows)
})

const mDTP = (dispatch) =>({ 
  fetchAllPhotos: (photos) => dispatch(fetchAllPhotos(photos)),
  createFollower: (follow) => dispatch(createFollower(follow)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchAllFollowers: (followers) => dispatch(fetchAllFollowers(followers)),
  logout: () => dispatch(logout()),
})

export default connect(mSTP,mDTP)(ShowUserProfile);





