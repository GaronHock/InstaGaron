import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';

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
    this.props.createPhoto(formData)
    .then(() =>(this.props.history.push(`/users/${this.props.currentUser.id}`)))
  }

  render(){
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return(
    <div>
      <NavBarContainer />
      <div className='add-profile-wrapper'>
        <div style={{display:"flex", justifyContent: "center"}}>
          <form className='add-form'>
            <h2 className='add-photo-text'>Add a New Photo!</h2>
            <div className='image-preview'>{preview}</div>
            <input 
              className='choose-file-button' 
              type="file" 
              onChange={this.handleFile}/>
            <div className='preview-flex'>
              <label htmlFor="photo-description">
                <input 
                  className ='caption-textarea'
                  rows="4" cols="50"
                  type="textarea"
                  placeholder = "Write a caption..."
                  id="photo-description"
                  value={this.state.description}
                  onChange={this.handleInput} />
              </label>
              <div>
                <button 
                  className='add-photo-submit'
                  onClick={this.handleSubmit}>
                  Make a new Post!
                </button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default AddPictureForm;