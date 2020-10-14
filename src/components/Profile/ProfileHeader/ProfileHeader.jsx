import React from "react";
import avatar from "./../../../images/avatar.jpg";

const ProfileHeader = () => {
  return (
    <div className="profile__header">
      <div className="profile__background"></div>
      <div className="profile__wrapper">
        <div className="profile__about">
          <div className="profile__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h3 className="profile__fullName">Daniil Yandybaev</h3>
          <p className="profile__status">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
            autem perspiciatis quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
