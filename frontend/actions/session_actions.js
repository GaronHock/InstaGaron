import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = (current_user) => ({
  type: RECEIVE_CURRENT_USER,
  user: current_user.user,   /// keys i set up in jbuilder file
  photos: current_user.photos
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})




export const login = user => dispatch => (
  APIUtil.loginUser(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)
//if login was successful populate slice of state with user, otherwise populate state with errors
export const signup = user => dispatch => (
  APIUtil.signupUser(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)

export const update = user => dispatch => (
  APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)),
   errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)

export const logout = () => dispatch => (
  APIUtil.logoutUser().then(() => dispatch(logoutCurrentUser()))
)