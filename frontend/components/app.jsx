import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch} from 'react-router-dom';
import ShowUserProfileContainer from './session/show_form_container';
import EditUserProfileContainer from './session/edit_form_container';


const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/' component ={LoginFormContainer}/>
      <ProtectedRoute path='/welcome' component={GreetingContainer}/>
      <ProtectedRoute exact path='/users/:userId' component={ShowUserProfileContainer} />
      <ProtectedRoute path='/users/:userId/edit' component={EditUserProfileContainer} />
      <ProtectedRoute path='/users/:userId/newPhoto' component ={AddPictureContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;


