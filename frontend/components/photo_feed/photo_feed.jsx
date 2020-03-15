import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    //this.handleFollowers = this.handleFollowers.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    (this.props.history.push('/'));
  }
  

  componentDidMount(){

    this.props.fetchUser(this.props.currentUser);
    this.props.fetchAllFollowers(this.props.currentUser)
  }


  // handleFollowers(){
  //   debugger;

  //     return <ul>
  //       {this.props.followers.map((follower) => {
  //         return <li>{follower.id}</li>
  //       })}
  //     </ul>
  //   }

       //     { this.handleFollowers() }

  render() {
    if (!this.props.followers) {
        return null;
      }else{
        return(
          
          <div>
            <NavBarContainer />
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


