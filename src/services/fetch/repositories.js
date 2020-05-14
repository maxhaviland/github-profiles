import { api } from '../api';

async function fetchRepositories(username) {
  const url = api.url + username + api.prefix.repositories;
  const response = await fetch(url).then(response => response.json());
  const repositories = response.map(repository => {
    return {
      id: repository.id,
      forks: repository.forks_count,
      stars: repository.stargazers_count,
      url: repository.url,
      name: repository.name
    }
  })
  const compareForksAndStars = (a, b) => {
    if (b.forks < a.forks && b.stars < a.stars) return -1;
    if (b.forks > a.forks && b.stars > a.stars) return 0;
    return 0; 
  }
  return repositories.sort(compareForksAndStars);
}

export { fetchRepositories };


