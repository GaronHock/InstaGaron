import React from 'react';
import { Redirect, Link } from 'react-router-dom';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.history.push('/welcome'))
  }

  handleInput(type) {
    return (e) => {
      e.preventDefault();
      let input = e.target.value
      this.setState({ [type]: input });
    }
  }




  render() {


    const otherForm = this.props.formType === 'login' ? 'signup' : 'login'
    const errorsList = <ul>
      {this.props.errors.map(error => <li>{error}</li>)}
    </ul>
//<h3 className='sign-up-description'>Sign up to see photos and videos from your friends.</h3>

    return (
      <div className="sign-up-wrapper">
        <br />
        <div className="form-signupform-container">
          <div className='signup-form'>
            <h2 id='instagram-signup'>InstaGaron</h2>
            <h3 className='sign-up-description'>Sign up to see photos and videos from your friends.</h3>
            <form className='login-form'>
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
                className='username-password username-input'
                placeholder='password'
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
              <button className='sign-up-button' onClick={this.handleSubmit}>Sign Up</button>
              <ul className="errors-list">{errorsList}</ul>
            </form>
          </div>
          <div className="haveAccount">
            <p className="account-text">Already have an account?<Link className="signup-link" to={`/${otherForm}`}>Log In</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupForm;