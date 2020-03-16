export const fetchAllFollowers = (user) => {
  debugger;
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