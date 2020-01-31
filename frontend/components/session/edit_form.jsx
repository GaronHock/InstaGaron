import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class EditForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      biography: this.props.currentUser.biography
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleInput(type){
    return (e) =>{
      let input = e.target.value;
      this.setState({[type]: input});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUserInformation(this.state);
  }

  render(){
    return(
      <div>
          <div className="top-nav">
            <div className='camera-pic' onClick={this.handleInstagramAndCameraPicClick}>
            </div>
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
        <div className="edit-profile-wrapper">
              <form className='edit-form'>
                <input className='username-input'
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleInput('username')} />
                <input
                  className='email username-input'
                  type="text"
                  placeholder='email'
                  value={this.state.email}
                  onChange={this.handleInput('email')} />
                <input
                  className='biography username-input'
                  type="text"
                  placeholder='biography'
                  value={this.state.biography}
                  onChange={this.handleInput('biography')} />
                <button className='loginButton' onClick={this.handleSubmit}>Submit</button>
                </form>
      </div> 
    </div>
    )
  }
}


export default EditForm;


{/* <input
  className='username-password username-input'
  placeholder='password'
  type="password"
  value={this.state.password}
  onChange={this.handleInput('password')} /> */}