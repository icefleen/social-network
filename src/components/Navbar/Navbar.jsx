import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import classnames from "classnames";

const Navbar = (props) => {
  return (
    <nav className={classnames(props.className, styles.nav)}>
      <div className="nav__item">
        <NavLink to={`/profile/${props.auth.userId}`} className={classnames(styles.nav__link)}>
          Profile
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/messenger" className={classnames(styles.nav__link)}>
          Messages
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/people" className={classnames(styles.nav__link)}>
          People
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/news" className={classnames(styles.nav__link)}>
          News
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/music" className={classnames(styles.nav__link)}>
          Music
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/settings" className={classnames(styles.nav__link)}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
