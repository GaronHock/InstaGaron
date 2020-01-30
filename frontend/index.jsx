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
  //let preloadedState = undefined;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);

    delete window.currentUser;
  } else {
    store = configureStore();  
  }

  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});