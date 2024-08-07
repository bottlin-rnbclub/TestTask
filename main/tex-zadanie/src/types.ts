// Тип для репозитория
export interface Repo {
    id: number;
    name: string;
    owner: {
      login: string;
    };
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    updated_at: string;
    description: string | null;
    license: {
      name: string;
    } | null;
  }
  
  // Тип для состояния репозиториев
  export interface RepoState {
    repos: Repo[];
    status: 'idle' | 'loading' | 'failed';
    selectedRepo: Repo | null;
  }
