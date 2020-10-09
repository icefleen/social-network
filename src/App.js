import React from 'react';
import './App.scss';

import Header from './components/Header';
import Navbar from './components/Navbar'
import Profile from './components/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__wrapper container">
          <Navbar />
          <Profile />
        </div>
      </main>
    </div>
  );
}

export default App;
