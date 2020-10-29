import React from "react";
import styles from "./ProfileHeader.module.scss";
import classnames from "classnames";
import defaultAvatar from "../../../images/default-avatar.png";

const ProfileHeader = (props) => {
  return (
    <div className={classnames(styles.profile__header)}>
      <div className={classnames(styles.profile__background)}></div>
      <div className={classnames(styles.profile__wrapper)}>
        <div className={classnames(styles.profile__about)}>
          <div className={classnames(styles.profile__avatar)}>
            <img
              src={props.profileState.avatar || defaultAvatar}
              alt="avatar"
            />
          </div>
          <h3 className={classnames(styles.profile__fullName)}>
            {props.profileState.fullName}
          </h3>
          <p className={classnames(styles.profile__status)}>
            {props.profileState.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
