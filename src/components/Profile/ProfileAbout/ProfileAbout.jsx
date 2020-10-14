import React from "react";

const ProfileAbout = () => {
  return (
    <div className="profile__block about">
      <h3 className="about__title">About me</h3>
      <ul className="about__list">
        <li className="about__item">
          <span className="about__key">From: </span>
          <span className="about__value">Saratov</span>
        </li>
        <li className="about__item">
          <span className="about__key">Birth date: </span>
          <span className="about__value">25 Jul 2020</span>
        </li>
        <li className="about__item">
          <span className="about__key">Education: </span>
          <span className="about__value">SSTU '22</span>
        </li>
        <li className="about__item">
          <span className="about__key">Web Site: </span>
          <span className="about__value">https://github.com/icefleen</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileAbout;
