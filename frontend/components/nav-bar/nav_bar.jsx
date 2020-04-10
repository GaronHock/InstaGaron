import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input: "",
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickGear = this.handleClickGear.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleReturnUser = this.handleReturnUser.bind(this);
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

  updateSearch(e){
      this.setState({input: e.currentTarget.value})
      this.handleReturnUser();
  }

  handleReturnUser(){
    let array = [];
    Object.values(this.props.users).forEach(user => {

     if (Object.values(user)[0].username){
       array.push(Object.values(user)[0])
     }
    })

    if(this.state.input === ""){
      return null;
    }else{
        array = array.filter(user => {
          return user.username.includes(this.state.input)
        })

        return  <div className="searched-users-wrapper">
                  {array.map(user => {
                    let handleClick = () => this.props.history.push(`/users/${user.id}`)
                    return  <div 
                              className="single-searched-user-wrapper"
                              onClick={handleClick}>
                              {user.photoUrl ? 
                              <div style={{display:"flex"}}>
                                <div
                                  className="photo-feed-user-profile-picture"
                                  style={{ backgroundImage: `url(${user.photoUrl})` }}
                                  onClick={handleClick}>
                                </div>
                                <div>
                                  {user.username}
                                </div>
                              </div>
                              : 
                              <div style={{display:"flex"}}>
                                <div
                                  className='fas fa-user-circle photo-feed-no-user-profile-pic'
                                  onClick={handleClick}>
                                </div>
                                <div>
                                  {user.username}
                                </div>
                              </div>}
                            </div>
                        })}
                </div>
            }

  }


render(){
  if (!this.props.users){
    return null;
  }else{
    return (
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
            // onClick={this.handleReturnUser}
            onChange={(e) => this.updateSearch(e)}
          />
          {this.handleReturnUser()}
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
}





export default NavBar;

