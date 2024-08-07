import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import RepoDetails from './components/RepoDetails';
import './styles/style.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <SearchBar />
        <RepoList />
        <RepoDetails />
      </div>
    </Provider>
  );
};

export default App;