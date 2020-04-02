import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';

class ShowPicture extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comment : "",
      comments: this.props.comments
    }
    this.textInput = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.showProfilePicture = this.showProfilePicture.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  focusTextInput(){
    this.textInput.current.focus();
  }

  handleComments(){
  return  <div className='user-comments-wrapper'>
            <ul className='user-comments'>
              {this.props.photo.description ? 
                  <div className="description">
                    <strong className="show-profile-username-description" onClick={() => {
                      this.props.history.push(`/users/${this.props.photo.user_id}`)
                      }}>{this.props.user.username}
                    </strong>
                    <div className="photo-description">{this.props.photo.description}</div>
                  </div> : 
                 null}
              {this.props.comments.map(comment =>{
              return  <li className="comment-username-wrapper">
                          {comment.user}
                          <div className="comment-body">
                            {comment.body}
                          </div>  
                      </li>
                })}
            </ul>
          </div>
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = {body: this.state.comment, user_id: this.props.currentUser.id, photo_id: this.props.photo.id} 
    this.props.createComment(comment).then(() => this.props.fetchPhoto(this.props.match.params.photoId))
  }

  handleInput(type) {
    return (e) => {
      let input = e.target.value;
      this.setState({ [type]: input });
    }
  } 

  showProfilePicture() {
    if (!this.props.user.photoUrl) {
      return <div className='no-profile-pic-show'></div>
    } else {
      return <div className='show-profile-photo-wrapper-show'>
        <img className="profile-picture-photo-show" src={this.props.user.photoUrl} onClick={() => {
          this.props.history.push(`/users/${this.props.photo.user_id}`)
        }}></img>
      </div>
    }
  }

  // handlePhotoDescription(){
  //   if (this.props.photo.description) {
  //     return  <div className="description">
  //               <strong className="show-profile-username-description" onClick={() =>{
  //                 this.props.history.push(`/users/${this.props.photo.user_id}`)
  //               }}>{this.props.user.username}</strong>
  //               <div className="photo-description">{this.props.photo.description}</div>
  //             </div>
  //   } else {
  //     return null;
  //   }
  // }

  render(){
    if(!this.props.photo || !this.props.comments || !this.props.user){  //this is done so that when page is refreshed it doesnt have the photos slice 
      //state immediately redux store is empty once it is done running triggers component did mount 
      //this runs the action above grabs photo from server adds it to state, props now exists 
      return null;
    }
    return(
      <div>
        <NavBarContainer />
        <div className="show-photo-wrapper">
          <div className='photo-wrapper'>
            <img className="show-photo" 
              src={this.props.photo.photoUrl}>
            </img>
            <div className="photo-accessories-wrapper" style={{backgroundColor: "white"}}>
              <div className="show-profile-picture-wrapper">
                <div style={{backgroundColor: 'white'}}>
                  {this.showProfilePicture()}
                </div>
                <h1 
                  className='show-profile-username'>
                  {this.props.user.username}
                </h1>
              </div>
                <div className="description-comments-wrapper">
                  {this.handleComments()}
                </div>      
                  <form className="comment-form-input">
                    <i className="far fa-comment photo-feed-comment-logo"
                    onClick={this.focusTextInput}></i> 
                    <div className="comment-input-wrapper">
                      <input 
                         ref={this.textInput}
                        className="photo-show-comment-input"
                        placeholder='Add a comment...'
                        type="text"
                        value={this.state.comment}
                        onChange={this.handleInput('comment')} 
                      />
                    <button 
                      className="comment-form-button"
                      onClick={this.handleSubmit}>
                        Post
                    </button> 
                    </div>    
                  </form>
            </div>
          </div> 
        </div>
      </div>  
    )
  }
}

export default ShowPicture;
