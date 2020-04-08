import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickGear = this.handleClickGear.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleReturnUser = this.handleReturnUser.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchAllUsers();
  // }



  handleInput(type) {
    return (e) => {
      let input = e.target.value;
      this.setState({ [type]: input });
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClickGear() {
    document.querySelector('.popup').style.display = 'flex';
  }

  handleClickCancel() {
    document.querySelector('.popup').style.display = 'none';
  }
  handleUserClick(){
    this.props.currentUser.id ? this.props.history.push(`/users/${this.props.currentUser.id}`) :
    this.props.history.push(`/users/${Object.values(this.props.currentUser)[0].id}`)
  }

  handleReturnUser(){
    let array = [];
    Object.values(this.props.users).forEach(user => {
      array.push(Object.values(user)[0].username)
    })
    
  }
render(){
  return(
  <div>
      <div className="top-nav">
        <Link to='/welcome' className='camera-pic'></Link>
        <div className='vl'></div>
        <div className="instatext">InstaGaron</div>
        <input className='search-text-area' 
          type='text' 
          autoCapitalize='none' 
          placeholder='Search' 
          size='26' 
          results='0'
         value={this.state.input}
         onChange={this.handleInput('input')}
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
      <div>{this.handleReturnUser}</div>
    </div>
    )
  }
}




export default NavBar;

