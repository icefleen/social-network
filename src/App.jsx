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
import PeopleContainer from "./components/People/PeopleContainer";
import Authorization from "./components/Authorization/Authorization";
import { connect } from "react-redux";
import { initializeApp } from "./store/reducers/appReducer";
import Spinner from "./components/common/Spinner/Spinner";
import { getInitialized } from "./store/selectors/appSelectors";

class App extends React.Component {
  componentDidMount = () => {
    this.props.initializeApp();
  };

  render() {
    if (!this.props.initialized) return <Spinner />;
    return (
      <BrowserRouter>
        <Header />
        <main className={classnames(styles.main)}>
          <div className={classnames(styles.main__wrapper, styles.container)}>
            <Navbar className={classnames(styles.main__nav)} />
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
}

const mapStateToProps = (state) => ({
  initialized: getInitialized(state),
});

export default connect(mapStateToProps, { initializeApp })(App);
