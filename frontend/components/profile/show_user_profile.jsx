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
    this.handleEditButtonHiddenIfNotCurrentUser = this.handleEditButtonHiddenIfNotCurrentUser.bind(this);
    this.handlePublishedPhotosOnPage = this.handlePublishedPhotosOnPage.bind(this);
    this.handleAddPictureButtonIfNotCurrentUser = this.handleAddPictureButtonIfNotCurrentUser.bind(this);
    this.showProfilePicture = this.showProfilePicture.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleFollowUser = this.handleFollowUser.bind(this);
  }
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchAllFollowers(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId ){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  handlePhotoClick(photo){
    this.props.history.push(`/users/${this.props.match.params.userId}/${photo.id}`)
  }


  handleEditButtonHiddenIfNotCurrentUser(){
    if(this.props.currentUser.id == this.props.match.params.userId){
     return <div className="edit-profile-button">
        <Link to={`/users/${this.props.currentUser.id}/edit`}><button>Edit Profile</button></Link></div>
    }
  }

  handleAddPictureButtonIfNotCurrentUser(){
    if(this.props.currentUser.id == this.props.match.params.userId){
      return <Link className="add-profile-button"
              to={`/users/${this.props.currentUser.id}/newPhoto`}>
                <button>Add A Picture</button>
            </Link>
    }
  }
    handlePublishedPhotosOnPage(){
    return  <ul className= 'flex-wrap-photos'>
              {this.props.photos.reverse().map((photo) =>{          
              return  <li className="show-page-image-li" key={photo.id} onClick={() => this.handlePhotoClick(photo)}> 
                        <img 
                          className="show-page-images"  
                          src={photo.photoUrl}>
                        </img>
                        <div className="show-page-image-comment-hover">
                          <i className="fas fa-comment comment-logo"></i>
                          <div className="photo-comments-length">{photo.comment_ids.length}</div>
                        </div>
                      </li>
                  })
                } 
            </ul>
    }

    showProfilePicture(){
      if (!this.props.user.photoUrl){
        return <i class="fas fa-user-circle no-profile-pic"></i>
      }else{
        return  <img className="profile-picture-photo" src={this.props.user.photoUrl}></img>
      }
    }

    handleShowPostsCount(){
      return this.props.photos.length;
    }

    handleFollowUser(){
      let followed_user_arrays = Object.values(this.props.following)
      let follow = { follower_id: this.props.currentUser.id, followed_user_id: this.props.match.params.userId} 
      if(this.props.currentUser.id == this.props.match.params.userId){
        return null;
      }
      for(let i = 0; i < followed_user_arrays.length; i++){
        if (followed_user_arrays[i].followed_user_id == this.props.match.params.userId){
          return <button className="following-button" onClick={() =>{
            debugger;
            this.props.removeFollower(this.props.match.params.userId)
            console.log(followed_user_arrays[i].followed_user_id)
          }}>Following </button>
        }
      }
      return <button className="follow-button" onClick={(e) => {
                e.preventDefault();
                debugger;
                this.props.createFollower(follow).then(() => this.props.fetchUser(this.props.match.params.userId))
                }}>Follow
              </button>
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
            <div style={{display: "flex", flexDirection: "row"}}>
            <div className='current-user-username'>{this.props.user.username}</div>
            {this.handleFollowUser()}
            {this.handleEditButtonHiddenIfNotCurrentUser()}
            {this.handleAddPictureButtonIfNotCurrentUser()}
            </div>
            <div className="posts-followers-following-flex-container">
              <div className="posts-followers-following-font"> {this.handleShowPostsCount()} posts</div>
              <div className="posts-followers-following-font"> {this.props.following.length} following</div>
              <div className="posts-followers-following-font"> 0 followers</div>
            </div>
            <div className='biography-flex-container'>
              <div className='current-user-biography'>{this.props.user.biography}</div>
            </div>         
          </div>
        </div>
        <div className="border-between-profile-info-and-images"></div>
        <div className="posts-grid-square">
          <i class="fas fa-border-all"></i>
          <div className="posts-text">POSTS</div>
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


