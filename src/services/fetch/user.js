import { api } from '../api';

export async function fetchUser(username) {
  const url = api.url + username;
  let status = 0;

  const response = await fetch(url).then(res => {
    status = res.status;
    return res.json();
  });

  const user = {
    id: response.id,
    avatar: response.avatar_url,
    username: response.login,
    url: response.html_url,
    followers: response.followers,
    repos: response.public_repos,
  };

  return { user, status };
}
