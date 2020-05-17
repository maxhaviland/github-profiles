import { fetchRepositories } from './repositories';
import { fetchUser } from './user';

export async function start(username) {
  const user = await fetchUser(username);
  const repositories = user.status === 200 && await fetchRepositories(username) || {};

  return { ...user, repositories }
};

