import React from 'react';
import './App.scss';

import Header from './components/Header';
import Navbar from './components/Navbar'
import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <div className="main__wrapper container">
          <Navbar />
            <Route path="/profile" render={ () => <Profile /> }/>
            <Route path="/messenger" component={ () => <Messenger /> }/>
            <Route path="/news" component={ () => <News /> }/>
            <Route path="/music" component={ () => <Music /> }/>
            <Route path="/settings" component={ () => <Settings /> }/>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
