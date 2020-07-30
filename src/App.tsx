import React from 'react';
import './styles/App.scss';
import {Navigation} from './components/Navigation/Navigation';
import {Main} from './components/Main/Main';
import {Header} from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Header />
    </div>
  );
}

export default App;
