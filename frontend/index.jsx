import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'
import { login } from './actions/session_actions';
import {logout} from './actions/session_actions';

window.login = login;

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  // window.getState = store.getState;


  
  window.logout = logout;
  
  let store;
  if (window.current_user) {
    const preloadedState = {
      entities: {
        users: { [window.current_user.id]: window.current_user }
      },
      session: { id: window.current_user.id }
    };
    store = configureStore(preloadedState);
    console.log(preloadedState);

    delete window.current_user;
  } else {
    store = configureStore();  
  }

  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});