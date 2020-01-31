import React from 'react';
import { Link } from 'react-router-dom';
class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.logout()
    (this.props.history.push('/'));
  }


  render() {
    if (this.props.currentUser) {
      return (
        <div>
            <div className="top-nav">
            <div className='camera-pic'href="#news"></div>
            <div className="dummy-className"></div>
            <div className='vl'></div>
            <div className="instatext" href="#home">InstaGaron</div>
            <input className='search-text-area' type='text' autoCapitalize='none' placeholder='Search' size='26' results='0'/>
            <div className='compass-heart-link-profile-link-wrapper'>
            <div className="compass"></div>
            <div className="heart-link"></div>
            <Link className="make-fully-white-link"to={`/users/${this.props.currentUser.id}`}><div className="profile-link"></div></Link>
            </div>
            </div>
            <div>
            <button onClick={this.handleClick}>Log Out</button>
            </div>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <br></br>
          <Link to="/login">Log In</Link>
        </div> 
      )
    }
  }
}
export default Greeting;


