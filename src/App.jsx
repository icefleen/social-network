import React from "react";
import styles from "./App.module.scss";
import classnames from "classnames";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={classnames(styles.main)}>
        <div className={classnames(styles.main__wrapper, styles.container)}>
          <Navbar className={classnames(styles.main__nav)} />

          <Route
            path="/profile"
            render={() => (
              <ProfileContainer className={classnames(styles.main__profile)} />
            )}
          />
          <Route path="/messenger" render={() => <MessengerContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
