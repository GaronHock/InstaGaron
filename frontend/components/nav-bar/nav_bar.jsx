import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }
render(){
  return(
  <div>
      <div className="top-nav">
        <Link to='/welcome' className='camera-pic'></Link>
        <div className="dummy-className"></div>
        <div className='vl'></div>
        <div className="instatext">InstaGaron</div>
        <input className='search-text-area' type='text' autoCapitalize='none' placeholder='Search' size='26' results='0' />
        <div className='compass-heart-link-profile-link-wrapper'>
          <div className="compass"></div>
          <div className="heart-link"></div>
          <Link className="make-fully-white-link" to={`/users/${this.props.currentUser.id}`}><div className="profile-link"></div></Link>
        </div>
        </div>
      <div>
    </div>
  </div>
  )
  }
}


export default NavBar;
