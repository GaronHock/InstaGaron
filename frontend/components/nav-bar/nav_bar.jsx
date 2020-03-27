import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
    this.handleClickGear = this.handleClickGear.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
    this.props.history.push('/');
  }

  handleClickGear() {
    document.querySelector('.popup').style.display = 'flex';
  }

  handleClickCancel() {
    document.querySelector('.popup').style.display = 'none';
  }
render(){
  return(
  <div>
      <div className="top-nav">
        <Link to='/welcome' className='camera-pic'></Link>
        <div className='vl'></div>
        <div className="instatext">InstaGaron</div>
        <input className='search-text-area' 
          type='text' autoCapitalize='none' 
          placeholder='Search' 
          size='26' 
          results='0' 
        />
        <div className='compass-heart-link-profile-link-wrapper'>
          <i className="far fa-plus-square add-photo-link"></i>   
          <Link className="make-fully-white-link" 
            to={`/users/${this.props.currentUser.id}`}>
            <i className="fas fa-user-circle profile-link"></i>
          </Link>
          <i className="fas fa-cog nav-log-out-cog" onClick={this.handleClickGear}></i>
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


export default NavBar;
