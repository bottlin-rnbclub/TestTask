import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchRepos } from '../features/repos/reposSlice';
import { TextField, Button, Box } from '@mui/material';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState(''); //  реализация поисковой строки
  const dispatch = useAppDispatch(); // отправляет запрос на репозиторий по запросу user

  const handleSearch = () => {
    if (query) { // очередная проверка и получение query
      dispatch(fetchRepos(query));
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#00838F', padding: '30px', margin: '0px'}}> // styles
      <TextField
        label="Введите поисковый запрос"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Обработчик событий
        sx={{ backgroundColor: 'white', borderRadius: '4px', marginRight: '10px' }} // styles
      />
      <Button className='btn handle-Search' variant="contained" color="primary" onClick={handleSearch}> // кнопка с функцией handleSearch
        Искать
      </Button>
    </Box>
  );
};

export default SearchBar;
