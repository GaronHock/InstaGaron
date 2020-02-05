import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class AddPictureForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      description: "",
      photoFile: null,
      photoUrl: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handlePublishedPhotosOnPage = this.handlePublishedPhotosOnPage.bind(this);
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
  handlePublishedPhotosOnPage() {
    return <ul>
      {this.props.photos.map(photo => {
        return <li>
          <img className="show_page_images" src={photo.photoUrl}></img>
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
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  render(){
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return(
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
    )
  }
}

export default AddPictureForm;