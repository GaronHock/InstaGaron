import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
import { Redirect, Link } from 'react-router-dom';
class Greeting extends React.Component {
  constructor(props) {
    super(props)
   this.state = {loading: false}
   this.handleClick = this.handleClick.bind(this);
   this.showPhotos = this.showPhotos.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    (this.props.history.push('/'));
  }

  componentDidMount(){
    this.props.fetchAllFollowers(this.props.currentUser);
    this.props.fetchAllPhotos(this.props.currentUser);
  }

  // componentDidUpdate(prevProps) {
  //   debugger;
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.props.fetchUser(this.props.match.params.userId)
  //     this.props.fetchPhoto(this.props.match.params.photoId)
  //   }
  // }

showPhotos(){
debugger;
return  <div className="outer-photo-feed-photo-wrapper">
          {this.props.followeesPhotos.map(photo =>{
          let comments = photo.comments ? Object.values(photo.comments) : []; ///now it will map over empty array if comments do not exist
          let numberOfComments = comments.length;
          if(comments.length > 2) {
            comments = comments.slice(-2);
            
          }
          return  <div className="photo-feed-photo-wrapper">
                    <div className="photo-feed-username-profile-picture-wrapper">
                      <img className="photo-feed-user-profile-picture"src={photo.user_profile_pic_url}></img>
                      <h1 className="photo-feed-username">{photo.user}</h1>
                    </div>
                    <img className="photo-feed-image"src={photo.photoUrl}></img>
                    <div class="heart-comment-wrapper">
                      <i class="far fa-heart photo-feed-heart-logo"></i>
                      <i className="far fa-comment photo-feed-comment-logo"></i>
                    </div>
                    <div>{photo.user}</div>
                    <div>{photo.description}</div>
                    <ul className="photo-feed-photo-comments-wrapper">
                  
              {numberOfComments > 2 ? <button onClick={() =>{
                this.props.fetchUser(photo.user_id).then(() => this.props.history.push(`/users/${photo.user_id}/${photo.id}`))
              }}>Click Me!</button> : null}
                        {comments.map(comment =>{
                          return <li className="photo-feed-photo-comments">
                            <div class="comment-username" key={comment.id}>{comment.user}</div>
                            <div className="comment-body" key={comment.id}>{comment.body}</div>
                          </li>
                            })}
                    </ul>
                  </div>
              })}
      </div>
}

  render() {
    if (this.state.loading) {
      return null;
      }else{
        return(
          
          <div>
            <NavBarContainer />
            {this.showPhotos()}
          </div>

        )
      }
  }
}

export default Greeting;


