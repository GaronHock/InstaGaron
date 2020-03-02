export const fetchAllFollowers = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}/follows`,
    method: 'GET'
  })
}
export const createFollower = (follow) => {
  debugger;
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data:  {follow}   ///the key has to match the controller 
  })
}