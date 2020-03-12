import { connect } from 'react-redux';
import ShowPicture from './show_picture';
import { fetchPhoto } from '../../actions/photo_actions';
import {createComment} from '../../actions/comment_actions';
//import {createFollower} from '../../actions/follows_actions';
import {fetchUser} from '../../actions/user_actions';
import {fetchCommentsForASpecificPhoto} from '../../reducers/selectors';
import {fetchComment} from '../../actions/comment_actions';
import {fetchAllComments} from  '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  users: state.entities.users,
  photo: state.entities.photos[ownProps.match.params.photoId],
  comment:{ body: ''},
  comments: fetchCommentsForASpecificPhoto(state,ownProps),
  followers: state.entities.followers
})

const mDTP = (dispatch) => ({
  fetchPhoto: (photo) => dispatch(fetchPhoto(photo)),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchComment: (comment) => dispatch(fetchComment(comment)),
  fetchAllComments: (comments) => dispatch(fetchAllComments(comments))
})

export default connect(mSTP, mDTP)(ShowPicture);