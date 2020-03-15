export const fetchAllFollowers = (user) => {
  return $.ajax({
    url: `/api/users/${user}/follows`,
    method: 'GET'
  })
}
export const createFollower = (follow) => {
  
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data:  {follow}   ///the key has to match the controller 
  })
}