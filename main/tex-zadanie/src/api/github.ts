import axios from 'axios'; // испортируем axios ( для HTTP-запросов )

const BASE_URL = 'https://api.github.com'; // Лутаем API гитхаба

export const searchRepos = async (query: string, page: number = 1) => {
  const response = await axios.get(`${BASE_URL}/search/repositories`, { // получаем данные репозиторий 
    params: {
      q: query,
      per_page: 10,
      page,
    }
  });
  return response.data;
};

export const getRepoDetails = async (owner: string, repo: string) => { // асинх функция
  const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`); //  owner - строка, представляющая имя владельца репозитория repo это репозиторий
  return response.data;
};