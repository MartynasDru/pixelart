import React from 'react';
import './styles/App.scss';
import {NavigationBar} from './components/NavigationBar/NavigationBar';
import {Main} from './components/Main/Main';
import {Header} from './components/Header/Header';
import {InfoCards} from './components/InfoCards/InfoCards';
import {Sidebar} from './components/Sidebar/Sidebar';
import {CallToActionBlock} from './components/CallToActionBlock/CallToActionBlock';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
        <NavigationBar />
        <Header />
        <div className='content-wrapper'>
          <InfoCards />
          <div className='content-wrapper__main'>
              <Main />
              <Sidebar />
          </div>
          <CallToActionBlock />
        </div>
        <Footer />
    </div>
  );
}

export default App;
