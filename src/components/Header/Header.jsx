import React from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";
import { connect } from "react-redux";
import { logout } from "../../store/reducers/authReducer";
import { getIsLogged } from "../../store/selectors/authSelectors";

const Header = ({ isLogged, logout }) => {
  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.header__wrapper, styles.container)}>
        <div className={classnames(styles.header__brand)}>
          <h1>Social Network</h1>
        </div>
        <div className={classnames(styles.header__userActions)}>
          {isLogged && (
            <>
              <span href="#" onClick={() => logout()}>
                Logout
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

export default connect(mapStateToProps, { logout })(Header);
