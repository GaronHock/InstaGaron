import React from 'react';
import { Redirect, Link } from 'react-router-dom';

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
    this.handleInstagramAndCameraPicClick = this.handleInstagramAndCameraPicClick.bind(this);
    this.handleEditButtonHiddenIfNotCurrentUser = this.handleEditButtonHiddenIfNotCurrentUser.bind(this);
    this.handlePublishedPhotosOnPage = this.handlePublishedPhotosOnPage.bind(this);
    this.handleAddPictureButtonIfNotCurrentUser = this.handleAddPictureButtonIfNotCurrentUser.bind(this);
    this.showProfilePicture = this.showProfilePicture.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
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
    this.props.history.push(`/users/photo/${photo.id}`)
  }

  handleInstagramAndCameraPicClick(e){
    e.preventDefault();
    this.props.history.push('/welcome')
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
      return <Link className="add-profile-button"to={`/users/${this.props.currentUser.id}/newPhoto`}><div><button>Add A Picture</button></div></Link>
    }
  }
    handlePublishedPhotosOnPage(){
    return <ul className= 'flex-wrap-photos'>
        {this.props.photos.reverse().map((photo) =>{          
          return  <li><img onClick={() => this.handlePhotoClick(photo)} className="show_page_images" src={photo.photoUrl}></img></li>
         })///explain anonymous callback micheal by giving it the callback it doesnt automattially invoke it

         ///the callback invookes the function once it is ran 
      } 
      </ul>
    }

    showProfilePicture(){
      if (!this.props.user.photoUrl){
        return <div className='no-profile-pic'></div>
      }else{
        return <div className='show-profile-photo-wrapper'><img className="profile_picture_photo" src={this.props.user.photoUrl}></img></div>
      }
    }

    handleShowPostsCount(){
      return this.props.photos.length;
    }

  render(){
    if(!this.props.user){
      return null;
    }else{
    return(
        <div>
          <div className="top-nav">
            <div className='camera-pic' onClick={this.handleInstagramAndCameraPicClick}></div>
            <div className="dummy-className"></div>
            <div className='vl'></div>
            <div className="instatext" onClick={this.handleInstagramAndCameraPicClick}>InstaGaron</div>
            <input className='search-text-area' 
              type='text' 
                autoCapitalize='none'
                placeholder='Search' 
                size='26' 
                results='0'/>
            <div className='compass-heart-link-profile-link-wrapper'>
              <div className="compass"></div>
              <div className="heart-link"></div>
              <Link className="make-fully-white-link" 
                to={`/users/${this.props.user.id}`}>
              <div className="profile-link"></div>
                </Link>
            </div>
          </div>
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


