# TestTask
Technical specifications for the vacancy React-developer


## Technologies that were used in the project

- GitHub REST API
- TypeScript
- Redux Toolkit
- React
- Axios

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Usage/Examples
### receiving API, specifying data types:

```typescript
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchRepos = async (query: string, page: number = 1) => {
  const response = await axios.get(`${BASE_URL}/search/repositories`, {
    params: {
      q: query,
      per_page: 10,
      page,
    }
  });
  return response.data;
};

export const getRepoDetails = async (owner: string, repo: string) => { 
  const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`);
  return response.data;
};
```

## Tech Stack

**Client:** React, Redux, TypeScript

**Server:** Axios, GitHub REST API

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

# Project picture

![Image alt](https://github.com/bottlin-rnbclub/TestTask/blob/main/main/image%20fg/1.png)
![Image alt](https://github.com/bottlin-rnbclub/TestTask/blob/main/main/image%20fg/2.png)
![Image alt](https://github.com/bottlin-rnbclub/TestTask/blob/main/main/image%20fg/3.png)
