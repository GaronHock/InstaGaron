export const signupUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user } // user - usrname, email, biography-null/ gets this from the form sends it to the controller
  })
)

export const loginUser = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
)


export const updateUser = user =>{
  return $.ajax({
    url: `api/users/${user.get('user[id]')}`,///user.id was trying to get it from form data have to use .get
    method: 'PATCH',
    data: user,
    contentType: false,
    processData: false
  })
}
export const showUsersPhotos = user => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'GET',
    data: { user }
  })
)

export const logoutUser = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
)
