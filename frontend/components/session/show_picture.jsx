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
    if(!this.props.photo){
      return null;
    }
    return(
    <img className="show-photo" src={this.props.photo.photoUrl}></img>
    )
  }
}

export default ShowPicture;

//make this component a modal 