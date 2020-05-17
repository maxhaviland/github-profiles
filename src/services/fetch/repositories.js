import { api } from '../api';

export async function fetchRepositories(username) {
  const url = `${api.url}${username}/repos`
  const response = await fetch(url).then((res) => res.json());

  function compareForksAndStars(a, b) {
    if (b.forks_count < a.forks_count || b.stargazers_count < a.stargazers_count) return -1;
    if (b.forks_count > a.forks_count || b.stargazers_count > a.stargazers_count) return 0;
    return 0;
  }

  const repositories = response.sort(compareForksAndStars).map((repository, index) => {
    return {
      id: repository.id,
      forks: repository.forks_count,
      stars: repository.stargazers_count,
      url: repository.html_url,
      name: repository.name,
    };
  });
  return repositories;
}
