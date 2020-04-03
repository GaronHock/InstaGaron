import React from 'react';
import {Link} from 'react-router-dom';
import thunk from 'redux-thunk';

class NavBar extends React.Component{
  constructor(props){
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
    this.handleClickGear = this.handleClickGear.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
  }

  handleClickGear() {
    document.querySelector('.popup').style.display = 'flex';
  }

  handleClickCancel() {
    document.querySelector('.popup').style.display = 'none';
  }
  handleUserClick(){
    this.props.history.push(`/users/${Object.values(this.props.currentUser)[0].id}`)
  }

  ///  <i className="far fa-plus-square add-photo-link"></i>   <<<<<<<ADD PHOTO LINK
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
          <i className="fas fa-user-circle profile-link" onClick={this.handleUserClick}></i>
          <i className="fas fa-cog nav-log-out-cog" onClick={this.handleClickGear}></i>
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

