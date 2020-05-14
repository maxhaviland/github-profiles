import { fetchUser } from './user';
import { fetchRepositories } from './repositories';
import { fetchFollowers } from './followers';

async function start(username) {
  const user = await fetchUser(username, {mode: 'no-cors'});
  const followers = await fetchFollowers(username);
  const repositories = await fetchRepositories(username);

  return {
    ...user,
    followers,
    repositories
  }
};

export { start }
