import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { searchRepos, getRepoDetails } from '../../api/github';
import { RepoState, Repo } from '../../types';

const initialState: RepoState = { // Объект
  repos: [],
  status: 'idle',
  selectedRepo: null,
};

export const fetchRepos = createAsyncThunk<Repo[], string>( // асинх функция с типизированием и попытки получить items
  'repos/fetchRepos',
  async (query, { rejectWithValue }) => {
    try {
      const data = await searchRepos(query);
      return data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchRepoDetails = createAsyncThunk<Repo, { owner: string; repo: string }>( // асинх функция для получения 2 параметров, автор и репозиторий
  'repos/fetchRepoDetails', // его обработка с помощью try catch
  async ({ owner, repo }, { rejectWithValue }) => {
    try {
      const data = await getRepoDetails(owner, repo);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);                                        
                                                              // редьюсер
const reposSlice = createSlice({ // срез ( slice ) для управление состоянием репос 
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {  //аргумент билдер - обработка асинх действий
    builder
      .addCase(fetchRepos.pending, (state) => { // Обработчик для действия `fetchRepos.pending` - вызывается когда он запущен
        state.status = 'loading'; // cтатус загрузки
      })
      .addCase(fetchRepos.fulfilled, (state, action: PayloadAction<Repo[]>) => { // вызод когда он завершен
        state.status = 'idle';
        state.repos = action.payload;
      })
      .addCase(fetchRepos.rejected, (state) => { // вызов ошибки
        state.status = 'failed';
      })
      .addCase(fetchRepoDetails.fulfilled, (state, action: PayloadAction<Repo>) => { // вызов непосредственно во время процесса action
        state.selectedRepo = action.payload;
      });
  },
});

export default reposSlice.reducer;
