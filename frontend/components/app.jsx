import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import {Switch} from 'react-router-dom';



const App = () => (
  <div>
    <header>
      <Switch>
      <Route exact path='/' component ={LoginFormContainer}/>
      <Route path='/welcome' component={GreetingContainer}/>
      </Switch>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;