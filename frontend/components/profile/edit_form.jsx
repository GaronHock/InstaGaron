import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import NavBarContainer from '../nav-bar/nav_bar_container'

class EditForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      biography: this.props.currentUser.biography,  
      photoFile: this.props.currentUser.photoUrl
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.showProfilePicture = this.showProfilePicture.bind(this)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleInput(type){
    return (e) =>{
      let input = e.target.value;
      this.setState({[type]: input});
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
    this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
    fileReader.readAsDataURL(file);
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('user[profile_picture]', this.state.photoFile);
    }
    formData.append('user[id]', this.state.id)
    formData.append('user[username]', this.state.username);
    formData.append('user[biography]', this.state.biography);
    formData.append('user[email]', this.state.email);
    this.props.updateUserInformation(formData).then( () =>{
      this.props.history.push(`/users/${this.props.currentUser.id}`)
    })
  }

  showProfilePicture() {
    if (!this.props.user.photoUrl) {
      return <div className='edit-profile-pic'></div>
    }
    else {
      return <div className='edit-new-profile-pic-wrapper'>
        <img className="edit-profile-picture-photo" src={this.props.user.photoUrl}></img>
        </div>
    }
  }

  render(){
    return(
      <div>
        <NavBarContainer />
        <div className="edit-profile-wrapper">
          <form className='edit-form'>
            <h2 className='edit-profile-text'>Edit your profile</h2>
            <h2 className="edit-form-username">{this.props.currentUser.username}</h2>
            {this.showProfilePicture()};
            <div className='file-input-field-wrapper-edit'>
              <input className='choose-profile-picture-file-button' 
                type="file"
                onChange={this.handleFile}/>
              <div className='form-input-element'>
                <label className='username-edit-label'>Username</label>
                <input className='edit-username-input'
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput('username')} />
              </div>        
              <div className='form-input-element'>
                <label className='email-edit-label'>Email</label>
                <input
                  className='edit-email-input'
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')} />    
              </div> 
              <div className='form-input-element'>  
                <label className='bio-edit-label'> Bio  </label>
                <textarea
                  className='bio-edit-textarea'
                  type="text"
                  value={this.state.biography}
                  onChange={this.handleInput('biography')} />
              </div>
              <div className="flex-update-user-info-button">
                <button className='update-user-info-button' onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </form>
        </div> 
      </div>
    )
  }
}
//<button className='add-photo-submit' onClick={this.handleFileSubmit}>Make a new Post!</button>

export default EditForm;


