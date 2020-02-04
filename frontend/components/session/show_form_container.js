import { connect } from 'react-redux';
import ShowUserProfile from './show_user_profile';
import { logout } from '../../actions/session_actions'
import {fetchUser} from '../../actions/user_actions'
import {fetchAllPhotos} from '../../actions/photo_actions'
import {createPhoto} from '../../actions/photo_actions'

const mSTP = (state, ownProps) =>({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  photos: Object.values(state.entities.photos),
  //published_photos: state.entities.user.id.published_photo_ids
})

const mDTP = (dispatch) =>({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout()),
  createPhoto: (photo) => dispatch(createPhoto(photo))
})

export default connect(mSTP,mDTP)(ShowUserProfile);


//make a selector
//take in user id
//set up array 
// if state.entities.user.id.publishedphotos.each{id} key in to photos slice of state state.entities.photos[id]
//push this object into empty array
//return array


//going to only grab photos that are associated photos. this.props.photos ---



