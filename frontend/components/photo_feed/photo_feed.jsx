import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      comment: "",
      threeUniqueUsers: [],
    }
   this.handleClick = this.handleClick.bind(this);
   this.showPhotos = this.showPhotos.bind(this);
   this.handleInput = this.handleInput.bind(this);
   this.handleFollowSuggestions = this.handleFollowSuggestions.bind(this);
   this.handleCurrentUserPhoto = this.handleCurrentUserPhoto.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  componentDidMount(){
    this.props.fetchAllFollowers(this.props.currentUser);
    this.props.fetchAllPhotos(this.props.currentUser);
    this.props.fetchAllUsers().then(() => {
      this.handleFollowSuggestions()
    });
  }


  handleInput(type) {
    return (e) => {
      let input = e.target.value;
      this.setState({ [type]: input });
    }
  }

 handleCurrentUserPhoto(){
    let array = [];
    for (let i = 0; i < this.props.users.length; i++) {
      if(Object.values(Object.values(this.props.users)[i])[0].id === this.props.currentUser){
        array.push(Object.values(Object.values(this.props.users)[i])[0])
      }
    }

    if (!array.length) {
      return null;
    } else {
      let currentUserOnClick = () => this.props.history.push(`/users/${array[0].id}`);
      return (
        <div className="photo-feed-current-user-username-profile-picture-wrapper">
          <div
            onClick={currentUserOnClick}
            className="photo-feed-current-user-profile-picture"
            style={{ backgroundImage: `url(${array[0].photoUrl})` }}>   
          </div>
          <div 
            onClick={currentUserOnClick}
            className="photo-feed-current-user-username">
            {array[0].username}
          </div>
        </div>
      );
    }
  }


  handleFollowSuggestions(){
    let users = this.props.users
    let counter = this.props.users.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;
      let temp = users[counter];
      users[counter] = users[index];
      users[index] = temp;
    }
    let i = 0;
          let everyUserExceptCurrentUser = [];
    while (i < users.length){
        if (Object.values(users[i])[0].id !== this.props.currentUser){
          everyUserExceptCurrentUser.push(users[i])
        }
        i += 1;
    }
    this.setState( {threeUniqueUsers: Object.values(everyUserExceptCurrentUser.slice(0, 3))}) 

   // console.log(Object.values(everyUserExceptCurrentUser.slice(0, 3)))
  }

  showPhotos(){
    const sortedPhotos = this.props.followeesPhotos.sort(
      (a,b) => new Date(b.created_at) - new Date(a.created_at)
    )
  return  <div className="outer-photo-feed-photo-wrapper">

            {sortedPhotos.map(photo =>{
            let comments = photo.comments ? Object.values(photo.comments) : []; ///now it will map over empty array if comments do not exist
            let numberOfComments = comments.length;
            if (comments.length > 2 && !photo.description) {
              comments = comments.slice(-2);          
            } else if (comments.length > 2 && photo.description) {
              comments = comments.slice(-1);
            }
            let handleUsernameLogoClick = () => {
             return this.props.history.push(`/users/${photo.user_id}`)
            }
            return  <div className="photo-feed-photo-wrapper">
                      <div className="photo-feed-username-profile-picture-wrapper">
                        {photo.user_profile_pic_url ? 
                          <div className="photo-feed-user-profile-picture"
                            style={{ backgroundImage: `url(${photo.user_profile_pic_url})` }}
                            onClick={handleUsernameLogoClick}>
                          </div>                      
                          : 
                          <div
                            className='fas fa-user-circle photo-feed-picture-no-user-profile-pic'
                            onClick={handleUsernameLogoClick}>
                          </div>}
                      <h1 className="photo-feed-username" 
                          onClick={handleUsernameLogoClick}>
                        {photo.user}
                        </h1>
                      </div>
                      <img 
                        className="photo-feed-image" 
                        key={photo.id} 
                        src={photo.photoUrl}>
                      </img>
                      <div className="heart-comment-wrapper">
                      </div>
                      <ul className="photo-feed-photo-comments-wrapper">
                      {photo.description ?
                        <div 
                          className="description" 
                          style={{paddingLeft: "13px"}}>
                          <div 
                            className="show-profile-username-description"
                            onClick={handleUsernameLogoClick}>
                            {photo.user}
                          </div>
                          <div 
                            className="photo-description">
                            {photo.description}
                          </div>
                        </div>
                        :
                        null}
                      {numberOfComments > 2 ?                  
                      <button className="view-all-comments-button" onClick={() =>{
                        this.props.fetchUser(photo.user_id)
                          .then(() => this.props.history.push(`/users/${photo.user_id}/${photo.id}`))}}>
                          View all {`${numberOfComments}`} comments
                      </button> 
                      : 
                      null}
                          {comments.map(comment =>{
                            return <li className="photo-feed-photo-comments">
                              <div className="comment-username" 
                                key={comment.id}  
                                onClick={() => this.props.history.push(`/users/${comment.user_id}`)}>
                                <div>{comment.user}</div>
                              </div>
                              <div className="comment-body">{comment.body}</div>
                            </li>
                              })}
                      </ul>
                      <form className="photo-feed-comment-form-input">
                        <div className="photo-feed-comment-input-wrapper">
                          <input
                            className = "photo-show-comment-input"
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
                            this.props.createComment(comment)
                            .then(() => this.props.fetchPhoto(photo.id))
                            this.state.comment = "";
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

    if (!this.props.users) {
      return null;
      }else{
        let recommendedFollowers = this.state.threeUniqueUsers.map(uniqueUser => {
          let user = Object.values(uniqueUser)[0]
          let handleClick = () => {
            this.props.history.push(`/users/${user.id}`)
          }
            return  <div className="photo-feed-user-to-follow-list-item-wrapper">
                      <div className="photo-feed-user-to-follow-list-item">
                        {user.photoUrl ? 
                        <div
                          className="who-to-follow-photo-feed-user-profile-picture"
                          style={{ backgroundImage: `url(${user.photoUrl})` }}
                          onClick={handleClick}>
                        </div>
                        :
                        <div 
                          className='fas fa-user-circle photo-feed-no-user-profile-pic'
                          onClick={handleClick}>
                        </div>
                        }  
                        <div 
                          className="who-to-follow-username-or-creator-page-link-name"
                          onClick={handleClick}>
                          {user.username}
                        </div>
                      </div>
                    </div>
              })
        return(         
          <div>
            <NavBarContainer />
            <div style={{ display: "flex", flexDirection: "row-reverse", backgroundColor: "#fafafa"}}>
                {this.showPhotos()}
                {this.handleCurrentUserPhoto()}
              <div className="photo-feed-users-to-follow-wrapper">
                <h2 className="photo-feed-users-to-follow-header">Suggestions For You</h2>
                {recommendedFollowers}
              </div>
              <div className="creator-wrapper">
                <a 
                  className="photo-feed-user-to-follow-list-item" 
                  href="https://www.linkedin.com/in/garon-hock-15770327/">
                  <i class="fab fa-linkedin creator-favicon-links"></i>
                  <div className="who-to-follow-username-or-creator-page-link-name">
                    LinkedIn
                  </div>
                </a>
                <a 
                  className="photo-feed-user-to-follow-list-item" 
                  href="https://github.com/GaronHock">
                  <i class="fab fa-github-square creator-favicon-links"></i>
                  <div className="who-to-follow-username-or-creator-page-link-name">
                    GitHub
                  </div>
                </a>
                <a 
                  className="photo-feed-user-to-follow-list-item" 
                  href="https://angel.co/u/garon-hock">
                  <i class="fab fa-angellist creator-favicon-links"></i>
                  <div className="who-to-follow-username-or-creator-page-link-name">
                    AngelList
                  </div>
                </a>
                <a
                  className="photo-feed-user-to-follow-list-item"
                  href="https://kind-wozniak-514048.netlify.com/">
                  <i class="fas fa-folder-open creator-favicon-links"></i>
                  <div className="who-to-follow-username-or-creator-page-link-name">
                    Portfolio
                  </div>
                </a>
              </div>
              </div>
          </div>

        )
      }
  }
}
//<div>{this.handleCurrentUserPhoto()}</div>

export default Greeting;


