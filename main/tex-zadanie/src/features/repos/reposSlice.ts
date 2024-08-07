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

export const fetchRepoDetails = createAsyncThunk<Repo, { owner: string; repo: string }>(
  'repos/fetchRepoDetails',
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
const reposSlice = createSlice({ 
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRepos.fulfilled, (state, action: PayloadAction<Repo[]>) => {
        state.status = 'idle';
        state.repos = action.payload;
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchRepoDetails.fulfilled, (state, action: PayloadAction<Repo>) => {
        state.selectedRepo = action.payload;
      });
  },
});

export default reposSlice.reducer;
