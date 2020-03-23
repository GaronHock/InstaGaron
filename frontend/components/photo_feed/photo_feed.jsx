import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
   this.showPhotos = this.showPhotos.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    (this.props.history.push('/'));
  }
  

  componentDidMount(){

    this.props.fetchUser(this.props.currentUser);
    this.props.fetchAllFollowers(this.props.currentUser);
    this.props.fetchAllPhotos(this.props.currentUser);
    //this.props.fetchAllComments(this.props.currentUser)
  }

  
  

showPhotos(){

  return <div className="outer-photo-feed-photo-wrapper">
    {this.props.followeesPhotos.map(photo =>{
      let comments = Object.values(photo.comments)
      debugger;
      return <div className="photo-feed-photo-wrapper">
          <div className="photo-feed-username-profile-picture-wrapper">
            <img className="photo-feed-user-profile-picture"
              src={photo.user_profile_pic_url}> 
            </img>
          <h1 className="photo-feed-username">{photo.user}</h1>
        </div>
          <img className="photo-feed-image"src={photo.photoUrl}>
          </img>
          <div>
          <i class="far fa-heart photo-feed-heart-logo"></i>
          <i className="far fa-comment photo-feed-comment-logo"></i>
          </div>
        <div>{photo.user}</div>
        <div>{photo.description}</div>
          {comments.map(comment =>{

            return  <div>
                    <div>
                    <div className="photo-feed-comments-wrapper">
                      <div >{comment.user}</div>
                      <div>{comment.body}</div>
                    </div>
                  </div>
                  </div>
          })}
      </div>
    })}
  </div>
}



  // handleComments() {
  //   return <div className='user-comments-wrapper'>
  //     <ul className='user-comments'>
  //       {this.props.comments.map(comment => {
  //         return <li className="comment-username-wrapper">
  //           {comment.user}
  //           <div className="comment-body">
  //             {comment.body}
  //           </div>
  //         </li>
  //       })}
  //     </ul>
  //   </div>
  // }

  render() {
    if (!this.props.followers) {
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


// render(){
//   if (!this.props.user) {
//     return null;
//   } else {
//     return (
//       <div>
//         <NavBarContainer />
//         <div className="profile-info-wrapper">
//           {this.showProfilePicture()}
//           <div className="username-edit-gear-wrapper">
//             <div className='current-user-username'>{this.props.user.username}</div>
//             {this.handleEditButtonHiddenIfNotCurrentUser()}
//             {this.handleAddPictureButtonIfNotCurrentUser()}
//             <div className="gear" onClick={this.handleClickGear}></div>
//           </div>
//         </div>
//         <div className="posts-followers-following-flex-container">
//           <span>{this.handleShowPostsCount()}</span>
//           <span className="posts-followers-following-font">posts</span>
//           0<span className="posts-followers-following-font">following</span>
//           0<span className="posts-followers-following-font">followers</span>
//         </div>
//         <div className='biography-flex-container'>
//           <div className='current-user-biography'>{this.props.user.biography}</div>
//           <button onClick={this.handleFollowUser}>Follow</button>
//         </div>
//         <div className="border-between-profile-info-and-images"></div>
//         <div className="popup">
//           <div className='popup-content'>
//             <div className="pop-up-delete-button" onClick={this.handleClick}>Log Out</div>
//             <div className="cancel" onClick={this.handleClickCancel}>Cancel</div>
//           </div>
//         </div>
//         <div className="photo-container">
//           {this.handlePublishedPhotosOnPage()}
//         </div>
//       </div>
//     )
//   }
// }
// }
// export default ShowUserProfile;
export default Greeting;


