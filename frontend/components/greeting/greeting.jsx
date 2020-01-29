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
          <p>Hello, {this.props.currentUser.username}</p>
          <br />
          <button onClick={this.handleClick}>Log Out</button>
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


