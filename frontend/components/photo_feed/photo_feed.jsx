import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    (this.props.history.push('/'));
  }

  
  render() {
    if (this.props.currentUser) {
      return ( 
       <NavBarContainer />
      )
    }
  }
}
export default Greeting;


