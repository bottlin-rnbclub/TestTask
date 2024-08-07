import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchRepos } from '../features/repos/reposSlice';
import { TextField, Button, Box } from '@mui/material';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchRepos(query));
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#00838F', padding: '30px', margin: '0px'}}>
      <TextField
        label="Введите поисковый запрос"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ backgroundColor: 'white', borderRadius: '4px', marginRight: '10px' }}
      />
      <Button className='btn handle-Search' variant="contained" color="primary" onClick={handleSearch}>
        Искать
      </Button>
    </Box>
  );
};

export default SearchBar;
