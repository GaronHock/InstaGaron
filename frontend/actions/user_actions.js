import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (payload) =>{
        debugger;
 return {type: RECEIVE_USER,
         user: payload.user,
         photos: payload.photos,
         followees: payload.followeees
        }

}
  

export const fetchUser = (userId) => dispatch =>{
 return UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
}