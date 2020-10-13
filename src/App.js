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


function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <div className="main__wrapper container">
          <Navbar />
            <Route path="/profile" render={ () => 
              <Profile
                state={ props.state.profile }
                addPost={ props.addPost }
                updateNewPostText={ props.updateNewPostText }
              /> }
            />

            <Route path="/messenger" render={ () =>
              <Messenger
                state={ props.state.messenger }
                addMessage={ props.addMessage }
                updateNewMessageText={ props.updateNewMessageText }
              /> }
            />

            <Route path="/news" render={ () => <News /> }/>
            <Route path="/music" render={ () => <Music /> }/>
            <Route path="/settings" render={ () => <Settings /> }/>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
