import { connect } from 'react-redux';
import ShowPicture from './show_picture';
import { fetchPhoto } from '../../actions/photo_actions';
import {createComment} from '../../actions/comment_actions';
import {fetchCommentsForASpecificPhoto} from '../../reducers/selectors';


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  photo: state.entities.photos[ownProps.match.params.photoId],
  comment:{ body: ''},
  comments: fetchCommentsForASpecificPhoto(state,ownProps)
})

const mDTP = (dispatch) => ({
  fetchPhoto: (photo) => dispatch(fetchPhoto(photo)),
  createComment: (comment) => dispatch(createComment(comment)),
})

export default connect(mSTP, mDTP)(ShowPicture);