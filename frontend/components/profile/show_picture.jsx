import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';

class ShowPicture extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comment : ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComments = this.handleComments.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  handleComments(){
    return <ul>
    {this.props.comments.map(comment =>{
      return <li>{comment.body}</li>
    })}
    </ul>
  }
  handleSubmit(e){
    e.preventDefault();
    const comment = {body: this.state.comment, user_id: this.props.currentUser.id, photo_id: this.props.photo.id} 
    this.props.createComment(comment);
    this.props.fetchPhoto(this.props.match.params.photoId);
  }
  handleInput(type) {
    return (e) => {
      let input = e.target.value;
      this.setState({ [type]: input });
    }
  }
  render(){
    if(!this.props.photo || !this.props.comments){  //this is done so that when page is refreshed it doesnt have the photos slice 
      //state immediately redux store is empty once it is done running triggers component did mount 
      //this runs the action above grabs photo from server adds it to state, props now exists 
      return null;
    }
    return(
      <div>
        <NavBarContainer />
        <div className="show-photo-wrapper">
          <div className='photo-wrapper'>
            <img className="show-photo" src={this.props.photo.photoUrl}></img>
          <div className="description-comments-wrapper">
            <div className="description">{this.props.photo.description}</div>
            <form>
              <label>
                Comment on this photo!
                <input
                  type="text"
                  value={this.state.comment}
                  onChange={this.handleInput('comment')} />    
              </label>
              <button onClick={this.handleSubmit}>Create Comment!</button> 
            </form>
            {this.handleComments()}
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

export default ShowPicture;
