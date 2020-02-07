import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class AddPictureForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      description: "",
      photoFile: null,
      photoUrl: null,
      photos:null,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInstagramAndCameraPicClick = this.handleInstagramAndCameraPicClick.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[description]', this.state.description);
    if (this.state.photoFile) {

      formData.append('photo[photo]', this.state.photoFile);
    }
    this.props.createPhoto(formData).then(() =>(this.props.history.push(`/users/${this.props.currentUser.id}`)))
  }
  handleInstagramAndCameraPicClick(e) {
    e.preventDefault();
    this.props.history.push('/welcome')
  }

  render(){
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
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
              <Link className="make-fully-white-link" to={`/users/${this.props.currentUser.id}`}><div className="profile-link"></div></Link>
          </div>
      </div>
        <div className='edit-profile-wrapper'>

        <form className='add-form'>
          
          <h2 className='add-photo-text'>Add a New Photo!</h2>
            <div className='image-preview'>{preview}</div>
            <input className='choose-file-button' type="file"
              onChange={this.handleFile} />
            <div className='preview-flex'>
              <label
                htmlFor="photo-description">
            <input 
            className ='caption-textarea'
            rows="4" cols="50"
            type="textarea"
            placeholder = "Write a caption..."
              id="photo-description"
              value={this.state.description}
              onChange={this.handleInput} />
              </label>
          <button className='add-photo-submit'onClick={this.handleSubmit}>Make a new Post!</button>
          </div>
        </form>
        </div>
      </div>

    )
  }
}

export default AddPictureForm;