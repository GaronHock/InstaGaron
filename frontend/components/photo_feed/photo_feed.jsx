import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
import { Redirect, Link } from 'react-router-dom';
class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      comment: "",
    }
   this.textInput = React.createRef();
   this.focusTextInput = this.focusTextInput.bind(this);
   this.handleClick = this.handleClick.bind(this);
   this.showPhotos = this.showPhotos.bind(this);
   this.handleInput = this.handleInput.bind(this);
  }


  focusTextInput(){
    this.textInput.current.form.focus();
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  componentDidMount(){
    this.props.fetchAllFollowers(this.props.currentUser);
    this.props.fetchAllPhotos(this.props.currentUser);
  }


  handleInput(type) {
    return (e) => {
      let input = e.target.value;
      this.setState({ [type]: input });
    }
  }

  // <i class="far fa-heart photo-feed-heart-logo"></i> HEART LOGO <<<<<<<<<<<<<


showPhotos(){
return  <div className="outer-photo-feed-photo-wrapper">
          {this.props.followeesPhotos.map(photo =>{
          let comments = photo.comments ? Object.values(photo.comments) : []; ///now it will map over empty array if comments do not exist
          let numberOfComments = comments.length;
          if (comments.length > 2 && !photo.description) {
            comments = comments.slice(-2);          
          }else if (comments.length > 2 && photo.description) {
            comments = comments.slice(-1);
          }
          return  <div className="photo-feed-photo-wrapper">
                    <div className="photo-feed-username-profile-picture-wrapper">
                      <img className="photo-feed-user-profile-picture"src={photo.user_profile_pic_url}
                        onClick={() => this.props.history.push(`/users/${photo.user_id}`)}>   
                      </img>
                     <h1 className="photo-feed-username" 
                        onClick={() => this.props.history.push(`/users/${photo.user_id}`)}>
                       {photo.user}
                      </h1>
                    </div>
                    <img className="photo-feed-image"src={photo.photoUrl}></img>
                    <div className="heart-comment-wrapper">
                      <i className="far fa-comment photo-feed-comment-logo"
                      onClick={this.focusTextInput}></i>
                    </div>
                    <ul className="photo-feed-photo-comments-wrapper">
                    {photo.description ?
                      <div className="description" style={{paddingLeft: "13px"}}>
                        <div className="show-profile-username-description"
                          onClick={() => this.props.history.push(`/users/${photo.user_id}`)}>
                          {photo.user}
                        </div>
                        <div className="photo-description">
                          {photo.description}
                        </div>
                      </div>
                      :
                      null}
                    {numberOfComments > 2 ?                  
                    <button className="view-all-comments-button"onClick={() =>{
                      this.props.fetchUser(photo.user_id)
                        .then(() => this.props.history.push(`/users/${photo.user_id}/${photo.id}`))}}>
                        View all {`${numberOfComments}`} comments
                    </button> 
                    : 
                    null}
                        {comments.map(comment =>{
                          return <li className="photo-feed-photo-comments">
                            <div class="comment-username" 
                              key={comment.id} 
                              
                              onClick={() => this.props.history.push(`/users/${comment.user_id}`)}>
                              <div>{comment.user}</div>
                            </div>
                            <div className="comment-body">{comment.body}</div>
                          </li>
                            })}
                    </ul>
                    <form className="comment-form-input">
                      <div className="comment-input-wrapper">
                        <input style={{ width: "100%", backgroundColor: "white" }}
                          placeholder='Add a comment...'
                          type="text"
                          ref={this.textInput}
                          value={this.state.comment}
                          onChange={this.handleInput('comment')}
                        />
                      </div>
                      <button className="comment-form-button" onClick={() =>{
                          const comment = { 
                            body: this.state.comment,
                            user_id: this.props.currentUser, 
                            photo_id: photo.id
                          }
                          this.state.comment = "";
                          this.props.createComment(comment)
                          .then(() => this.props.fetchPhoto(photo.id))
                        }}>
                        Post
                      </button>
                    </form>
                  </div>
              })}
      </div>
}

///this.state.comment - points to another object - keys that correspond with ids given to all of the text boxes- all of the keys point to

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


