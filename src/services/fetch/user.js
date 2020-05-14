import { api } from '../api';

async function fetchUser(username) {
  const url = api.url + username;
  const { id, avatar_url, login } = await fetch(url).then(response => response.json());
  const user = {
    id: id,
    avatar: avatar_url,
    username: login
  };
  return user;
}

export { fetchUser }; 