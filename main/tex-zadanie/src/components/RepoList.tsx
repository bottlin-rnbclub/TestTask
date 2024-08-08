import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchRepoDetails } from '../features/repos/reposSlice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Repo } from '../types';

const RepoList: React.FC = () => {
  const repos = useAppSelector((state) => state.repos.repos); // кастом хук для доступа к состоянию Redux из компонентов React, эффективный способ получения данных, если не понятно
  const dispatch = useAppDispatch();

  const handleRowClick = (owner: string, repo: string) => {
    dispatch(fetchRepoDetails({ owner, repo }));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Язык</TableCell>
            <TableCell>Число форков</TableCell>
            <TableCell>Число звёзд</TableCell>
            <TableCell>Дата обновления</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos.map((repo: Repo) => (
            <TableRow key={repo.id} onClick={() => handleRowClick(repo.owner.login, repo.name)} hover>
              <TableCell>{repo.name}</TableCell>
              <TableCell>{repo.language}</TableCell>
              <TableCell>{repo.forks_count}</TableCell>
              <TableCell>{repo.stargazers_count}</TableCell>
              <TableCell>{new Date(repo.updated_at).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RepoList;
