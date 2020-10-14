import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main__nav nav">
      <div className="nav__item">
        <NavLink to="/profile" className="nav__link">
          Profile
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/messenger" className="nav__link">
          Messages
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/news" className="nav__link">
          News
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/music" className="nav__link">
          Music
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="/settings" className="nav__link">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
