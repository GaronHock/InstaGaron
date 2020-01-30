import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch} from 'react-router-dom';



const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/' component ={LoginFormContainer}/>
      <ProtectedRoute path='/welcome' component={GreetingContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;