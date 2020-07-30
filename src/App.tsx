import React from 'react';
import './styles/App.scss';
import {Navigation} from './components/Navigation/Navigation';
import {Main} from './components/Main/Main';
import {Header} from './components/Header/Header';
import {InfoCards} from './components/InfoCards/InfoCards';
import {Sidebar} from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Header />
      <div className='content-wrapper'>
          <InfoCards />
          <div className='content-wrapper__main'>
              <Main />
              <Sidebar />
          </div>
          <div className='cta'>Tailored design for Your business to make it unique and attractive!</div>
      </div>
    </div>
  );
}

export default App;
