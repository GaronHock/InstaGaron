import * as UserApiUtil from '../util/user_api_util'


export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const recieveAllUsers = (users) => {
        return {
                type: RECEIVE_ALL_USERS,
                users
        }
}

const receiveUser = (payload) =>{
 return {type: RECEIVE_USER,
         user: payload.user,
         photos: payload.photos
        }
}

export const fetchAllUsers = () => dispatch => {
        return UserApiUtil.fetchAllUsers().then(users => dispatch(recieveAllUsers(users)))
}

export const fetchUser = (userId) => dispatch =>{
 return UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
}