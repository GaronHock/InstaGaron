import React from 'react';
import { Redirect, Link } from 'react-router-dom';
class ShowUserProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      description: "",
      photoFile: null,
      photoUrl: null
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleInstagramAndCameraPicClick = this.handleInstagramAndCameraPicClick.bind(this);
    this.handleEditButtonHiddenIfNotCurrentUser = this.handleEditButtonHiddenIfNotCurrentUser.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handlePublishedPhotosOnPage = this.handlePublishedPhotosOnPage.bind(this);
    this.handleAddPictureButtonIfNotCurrentUser = this.handleAddPictureButtonIfNotCurrentUser.bind(this);
  }
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
    this.props.history.push('/');
  }

  handleInstagramAndCameraPicClick(e){
    e.preventDefault();
    this.props.history.push('/welcome')
  }
  
  handleClickGear(){

      document.querySelector('.popup').style.display = 'flex';
  }

  handleClickCancel(){
    document.querySelector('.popup').style.display = 'none';
  }

  handleEditButtonHiddenIfNotCurrentUser(){
    if(this.props.currentUser.id == this.props.match.params.userId){
    return <Link to={`/users/${this.props.currentUser.id}/edit`}>
      <div className="edit-profile-button"><button>Edit Profile</button></div></Link>
    }
  }

  handleAddPictureButtonIfNotCurrentUser(){
    if(this.props.currentUser.id == this.props.match.params.userId){
      return <Link to={`/users/${this.props.currentUser.id}/newPhoto`}><div><button>Add A Picture</button></div></Link>
    }
  }

  handleInput(e) {
    this.setState({ description: e.currentTarget.value });
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
    handlePublishedPhotosOnPage(){
          return  <ul>
              {this.props.photos.map(photo =>{
              return  <li>
                  <img className="show_page_images"src={photo.photoUrl}></img>
                </li>
              })
          }
          </ul>
    }


  

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[description]', this.state.description);
    if (this.state.photoFile) {

      formData.append('photo[photo]', this.state.photoFile);
    }

    this.props.createPhoto(formData);
  }

  render(){
       const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    if(!this.props.user){
      return null;
    }else{
    return(
        <div>
          <div className="top-nav">
            <div className='camera-pic' onClick={this.handleInstagramAndCameraPicClick}></div>
            <div className="dummy-className"></div>
            <div className='vl'></div>
            <div className="instatext" onClick={this.handleInstagramAndCameraPicClick}>InstaGaron</div>
            <input className='search-text-area' type='text' autoCapitalize='none' placeholder='Search' size='26' results='0' />
            <div className='compass-heart-link-profile-link-wrapper'>
            <div className="compass"></div>
            <div className="heart-link"></div>
            <Link className="make-fully-white-link" to={`/users/${this.props.user.id}`}><div className="profile-link"></div></Link>
            </div>
            </div>
            <div>
            <div className="profile-info-wrapper">
            <div className="no-profile-pic"></div>
            <div className="username-edit-gear-wrapper">
            <div className='current-user-username'>{this.props.user.username}</div>
            {this.handleEditButtonHiddenIfNotCurrentUser()}
            <div className="gear" onClick={this.handleClickGear}></div>
           {this.handleAddPictureButtonIfNotCurrentUser()}
            <div className='current-user-biography'>{this.props.user.biography}</div>
            </div>
            </div>
            </div>
          <div className="popup">
            <div className='popup-content'>
              <div className="pop-up-delete-button" onClick={this.handleClick}>Log Out</div>
              <div className="cancel" onClick={this.handleClickCancel}>Cancel</div>
            </div>
          </div>
          <div>
          <form>
            <label htmlFor="photo-description">Body of Post</label>
            <input type="text"
              id="photo-description"
              value={this.state.description}
              onChange={this.handleInput} />
            <input type="file"
              onChange={this.handleFile} />
            <h3>Image preview </h3>
            {preview}
            <button onClick={this.handleSubmit}>Make a new Post!</button>
          </form>
          </div>
          {this.handlePublishedPhotosOnPage()}
        </div>   
      )
    }
  }
}
export default ShowUserProfile;

//{ this.handlePublishedPhotosOnPage }

