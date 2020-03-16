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
  followers: state.entities.followees
})

const mDTP = (dispatch) =>({ 
  fetchAllPhotos: (photos) => dispatch(fetchAllPhotos(photos)),
  createFollower: (follow) => dispatch(createFollower(follow)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchAllFollowers: (followers) => dispatch(fetchAllFollowers(followers)),
  logout: () => dispatch(logout()),
})

export default connect(mSTP,mDTP)(ShowUserProfile);


//make a selector
//take in user id
//set up array 
// if state.entities.user.id.publishedphotos.each{id} key in to photos slice of state state.entities.photos[id]
//push this object into empty array
//return array


//going to only grab photos that are associated photos. this.props.photos ---



