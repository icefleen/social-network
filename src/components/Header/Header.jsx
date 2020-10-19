import React from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";

const Header = () => {
  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.header__wrapper, styles.container)}>
        <div className={classnames(styles.header__brand)}>
          <h1>Social Network</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
