import React from 'react';
import { useAppSelector } from '../store/hooks';
import { Box, Chip, Typography } from '@mui/material';

const RepoDetails: React.FC = () => { // 
  const selectedRepo = useAppSelector((state) => state.repos.selectedRepo); // кастом хук useAppSelector( callback function )

  if (!selectedRepo) { // проверка с НЕ
    return (
      <Box sx={{ padding: '20px' }}> // styles
        <Typography variant="h6">Выберите репозиторий</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '20px', borderLeft: '1px solid #e0e0e0', height: '100vh' }}> // styles
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>{selectedRepo.name}</Typography> 
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>{selectedRepo.description}</Typography>
      {selectedRepo.language && (
        <Chip label={selectedRepo.language} sx={{ marginRight: '5px' }} />
      )}
      <Typography variant="body2" sx={{ marginTop: '20px' }}>License: {selectedRepo.license?.name || 'No license'}</Typography> 
    </Box>
  );
};

export default RepoDetails;
