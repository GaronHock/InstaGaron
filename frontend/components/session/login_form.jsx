import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  handleInput(type) {
    return (e) => {
      e.preventDefault();
      let input = e.target.value
      this.setState({ [type]: input });
    }
  }

  handleClick(e){
    e.preventDefault();
    let Demo = {
      username: "DemoUser123",
      email: 'DemoUser123@yahoo.com',
      password: 'hunter12',
    }
  
    this.props.processForm(Demo)
  }

  render() {
   const otherForm = this.props.formType === 'login' ? 'signup' : 'login'
    const errorsList = <ul>
      {this.props.errors.map(error => <li>{error}</li>)}
      </ul>
    return (
      <div className="wrapper">
        <br/>
        <div className='logo'></div>
        <div className="form-signupform-container">
          <div className='form'>
            <h2 id='instagram'>InstaGaron</h2>
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
              <button className='login-button' onClick={this.handleSubmit}>Log In</button>
              <button className='demo-login-button' onClick ={this.handleClick}>Demo Log In</button>
              <ul className="errors-list">{errorsList}</ul>
            </form>
          </div>
          <div className="no-account">
            <p className="account-text">Dont have an account?<Link className="signup-link"to={`/${otherForm}`}>    Sign Up</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;