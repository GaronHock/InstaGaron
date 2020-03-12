import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import NavBarContainer from '../nav-bar/nav_bar_container'

class ShowUserProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      description: "",
      photoFile: null,
      photoUrl: null,
      photos: null,
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleEditButtonHiddenIfNotCurrentUser = this.handleEditButtonHiddenIfNotCurrentUser.bind(this);
    this.handlePublishedPhotosOnPage = this.handlePublishedPhotosOnPage.bind(this);
    this.handleAddPictureButtonIfNotCurrentUser = this.handleAddPictureButtonIfNotCurrentUser.bind(this);
    this.showProfilePicture = this.showProfilePicture.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleFollowUser = this.handleFollowUser.bind(this);
  }
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId ){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout()
    this.props.history.push('/');
  }

  handlePhotoClick(photo){
    this.props.history.push(`/users/${this.props.match.params.userId}/${photo.id}`)
  }

  handleClickGear(){
      document.querySelector('.popup').style.display = 'flex';
  }

  handleClickCancel(){
    document.querySelector('.popup').style.display = 'none';
  }

  handleEditButtonHiddenIfNotCurrentUser(){
    if(this.props.currentUser.id == this.props.match.params.userId){
    return <Link to={`/users/${this.props.currentUser.id}/edit`}>
      <div className="edit-profile-button"><button>Edit Profile</button></div></Link>
    }
  }

  handleAddPictureButtonIfNotCurrentUser(){
    if(this.props.currentUser.id == this.props.match.params.userId){
      return <Link className="add-profile-button"
              to={`/users/${this.props.currentUser.id}/newPhoto`}>
              <div className="add-button">
                <button>Add A Picture</button>
              </div>
            </Link>
    }
  }
    handlePublishedPhotosOnPage(){
      //height: "310px", width: "310px"
    return <ul className= 'flex-wrap-photos'>
        {this.props.photos.reverse().map((photo) =>{          
          return <li className="show-page-image-li" key={photo.id}> 
                    <img onClick={() => this.handlePhotoClick(photo)} 
                      className="show-page-images"  
                      src={photo.photoUrl}>
                    </img>
            <div className="show-page-image-comment-hover">
              {photo.comment_ids.length}
            </div>
                  </li>
         })///explain anonymous callback micheal by giving it the callback it doesnt automattially invoke it

         ///the callback invookes the function once it is ran 
      } 
      </ul>
    }


    

    showProfilePicture(){
      if (!this.props.user.photoUrl){
        return <div className='no-profile-pic'></div>
      }else{
        return <div className='show-profile-photo-wrapper'>
                <img className="profile-picture-photo" src={this.props.user.photoUrl}></img>
              </div>
      }
    }

    handleShowPostsCount(){
      return this.props.photos.length;
    }

    handleFollowUser(e){
      e.preventDefault();
      if(this.props.currentUser.id !== this.props.match.params.userId){
        const followed_user_id = this.props.match.params.userId
       const follow = { follower_id: this.props.currentUser.id, followed_user_id} 
      this.props.createFollower(follow)
      }
    }
  render(){
    if(!this.props.user){
      return null;
    }else{
    return(
      <div>
        <NavBarContainer />
        <div className="profile-info-wrapper">
          {this.showProfilePicture()}
          <div className="username-edit-gear-wrapper">
            <div className='current-user-username'>{this.props.user.username}</div>
            {this.handleEditButtonHiddenIfNotCurrentUser()}
            {this.handleAddPictureButtonIfNotCurrentUser()}
            <div className="gear" onClick={this.handleClickGear}></div>
          </div>
        </div>
        <div className="posts-followers-following-flex-container">
          <span>{this.handleShowPostsCount()}</span>
          <span className="posts-followers-following-font">posts</span>
          0<span className="posts-followers-following-font">following</span>
          0<span className="posts-followers-following-font">followers</span>
        </div>
        <div className='biography-flex-container'>
          <div className='current-user-biography'>{this.props.user.biography}</div>
          <button onClick={this.handleFollowUser}>Follow</button>
        </div>
        <div className="border-between-profile-info-and-images"></div>
        <div className="popup">
          <div className='popup-content'>
            <div className="pop-up-delete-button" onClick={this.handleClick}>Log Out</div>
            <div className="cancel" onClick={this.handleClickCancel}>Cancel</div>
          </div>
        </div>
        <div className="photo-container">
          {this.handlePublishedPhotosOnPage()}  
        </div>
    </div>   
      )
    }
  }
}
export default ShowUserProfile;


