import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class ShowPicture extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.match.params.photoId)
  }
  render(){
    if(!this.props.photo){  //this is done so that when page is refreshed it doesnt have the photos slice 
      //state immediately redux store is empty once it is done running triggers component did mount 
      //this runs the action above grabs photo from server adds it to state, props now exists 
      return null;
    }
    return(
      <div>
        <div className="top-nav">
          <div className='camera-pic' onClick={this.handleInstagramAndCameraPicClick}></div>
          <div className="dummy-className"></div>
          <div className='vl'></div>
          <div className="instatext" onClick={this.handleInstagramAndCameraPicClick}>InstaGaron</div>
          <input className='search-text-area'
            type='text'
            autoCapitalize='none'
            placeholder='Search'
            size='26'
            results='0' />
          <div className='compass-heart-link-profile-link-wrapper'>
            <div className="compass"></div>
            <div className="heart-link"></div>
            <Link className="make-fully-white-link"
              to={`/users/${this.props.currentUser.id}`}>
              <div className="profile-link"></div>
            </Link>
          </div>
        </div>
      <div className='edit-profile-wrapper'>
      <div className='photo-wrapper'>
    <img className="show-photo" src={this.props.photo.photoUrl}></img>
      </div>
    </div>
    </div>
    )
  }
}

export default ShowPicture;

//make this component a modal 