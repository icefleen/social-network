import React from "react";
import styles from "./App.module.scss";
import classnames from "classnames";

import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PeopleContainer from "./components/People/PeopleContainer";
import Authorization from "./components/Authorization/Authorization";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={classnames(styles.main)}>
        <div className={classnames(styles.main__wrapper, styles.container)}>
          <NavbarContainer className={classnames(styles.main__nav)} />
          <Route path="/auth" render={() => <Authorization />} />
          <Route path="/profile/:id?" render={() => <ProfileContainer />} />
          <Route path="/messenger" render={() => <MessengerContainer />} />
          <Route path="/people" render={() => <PeopleContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
