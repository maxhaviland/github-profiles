import { api } from '../api';

async function fetchFollowers (username) {
  const url = api.url + username + api.prefix.followers;
  const response = await fetch(url).then(response => response.json());
  const followers = response.map(follower => {
    return {
      id: follower.id, 
      avatar: follower.avatar_url, 
      username: follower.login
    }
  })
  return followers;
}

export { fetchFollowers };


