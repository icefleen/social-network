import React, { useEffect } from "react";
import styles from "./App.module.scss";
import classnames from "classnames";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./store/reducers/appReducer";
import Spinner from "./components/common/Spinner/Spinner";
import { getInitialized } from "./store/selectors/appSelectors";
import Authorization from "./components/Authorization/Authorization";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PeopleContainer from "./components/People/PeopleContainer";

const MessengerContainer = React.lazy(() =>
  import("./components/Messenger/MessengerContainer")
);

const App = ({ initializeApp, initialized }) => {
  useEffect(() => initializeApp(), [initializeApp]);

  return (
    <>
      {!initialized ? (
        <Spinner />
      ) : (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <main className={classnames(styles.main)}>
            <div className={classnames(styles.main__wrapper, styles.container)}>
              <Navbar className={classnames(styles.main__nav)} />
              <React.Suspense fallback={<Spinner />}>
                <Switch>
                  <Redirect exact from="/" to="/profile" />
                  <Route path="/auth" render={() => <Authorization />} />
                  <Route
                    path="/profile/:id?"
                    render={() => <ProfileContainer />}
                  />
                  <Route
                    path="/messenger"
                    render={() => <MessengerContainer />}
                  />
                  <Route path="/people" render={() => <PeopleContainer />} />
                  <Route path="/news" render={() => <News />} />
                  <Route path="/music" render={() => <Music />} />
                  <Route path="/settings" render={() => <Settings />} />
                  <Route path="*" render={() => <div>404</div>} />
                </Switch>
              </React.Suspense>
            </div>
          </main>
        </BrowserRouter>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  initialized: getInitialized(state),
});

export default connect(mapStateToProps, { initializeApp })(App);
