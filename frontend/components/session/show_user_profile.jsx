import React from 'react';
import { Redirect, Link } from 'react-router-dom';
class ShowUserProfile extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleInstagramAndCameraPicClick = this.handleInstagramAndCameraPicClick.bind(this);
  }
    // <p>Hello {this.props.currentUser.username}</p>

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
    this.props.history.push('/');
  }

  handleInstagramAndCameraPicClick(e){
    e.preventDefault;
    this.props.history.push('/welcome')
  }



  handleClickGear(){
      document.querySelector('.popup').style.display = 'flex';
  }

  handleClickCancel(){
    document.querySelector('.popup').style.display = 'none';
  }

  

//           {
//   document.querySelector('.gear').addEventListener('click', () => {
//     document.querySelector('.popup').style.display = 'flex'
//   })
// }

  render(){
    return(
      <div>
        <div className="top-nav">
          <div className='camera-pic' onClick={this.handleInstagramAndCameraPicClick}></div>
          <div className="dummy-className"></div>
          <div className='vl'></div>
          <div className="instatext" onClick={this.handleInstagramAndCameraPicClick}>InstaGaron</div>
          <input className='search-text-area' type='text' autoCapitalize='none' placeholder='Search' size='26' results='0' />
          <div className='compass-heart-link-profile-link-wrapper'>
          <div className="compass"></div>
          <div className="heart-link"></div>
          <Link className="make-fully-white-link" to={`/users/${this.props.currentUser.id}`}><div className="profile-link"></div></Link>
          </div>
          </div>
          <div>
          <div className="profile-info-wrapper">
          <div className="no-profile-pic"></div>
          <div className="username-edit-gear-wrapper">
          <div className='current-user-username'>{this.props.currentUser.username}</div>
          <div className="edit-profile-button"><button>Edit Profile</button></div>
          <div className="gear" onClick={this.handleClickGear}></div>
          </div>
          </div>
        </div>
         <div className="popup">
           <div className='popup-content'>
            <div className="pop-up-delete-button" onClick={this.handleClick}>Log Out</div>
            <div className="cancel" onClick={this.handleClickCancel}>Cancel</div>
          </div>
        </div>
      </div>   
    )
  }
}

export default ShowUserProfile;