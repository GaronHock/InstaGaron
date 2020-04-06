export const fetchAllFollowers = (user) => {
  return $.ajax({
    url: `/api/users/${user}/follows`,
    method: 'GET',
    data: { user }
  })
}
export const createFollower = (follow) => {
  
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data:  {follow}   ///the key has to match the controller 
  })
}

export const deleteFollow = (followId) =>{
  debugger;
  return $.ajax({
    url: `/api/follows/${followId}`,
    method: 'DELETE'
  })
}