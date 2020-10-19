import React from "react";
import styles from "./ProfileHeader.module.scss";
import classnames from "classnames";

import avatar from "./../../../images/avatar.jpg";

const ProfileHeader = () => {
  return (
    <div className={classnames(styles.profile__header)}>
      <div className={classnames(styles.profile__background)}></div>
      <div className={classnames(styles.profile__wrapper)}>
        <div className={classnames(styles.profile__about)}>
          <div className={classnames(styles.profile__avatar)}>
            <img src={avatar} alt="avatar" />
          </div>
          <h3 className={classnames(styles.profile__fullName)}>
            Daniil Yandybaev
          </h3>
          <p className={classnames(styles.profile__status)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
            autem perspiciatis quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
