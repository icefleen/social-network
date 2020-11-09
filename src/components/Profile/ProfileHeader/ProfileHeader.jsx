import React from "react";
import styles from "./ProfileHeader.module.scss";
import classnames from "classnames";
import defaultAvatar from "../../../images/default-avatar.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileHeader = ({ avatar, fullName, status, updateStatus }) => {
  return (
    <div className={classnames(styles.profile__header)}>
      <div className={classnames(styles.profile__background)}></div>
      <div className={classnames(styles.profile__wrapper)}>
        <div className={classnames(styles.profile__about)}>
          <div className={classnames(styles.profile__avatar)}>
            <img src={avatar || defaultAvatar} alt="avatar" />
          </div>
          <h3 className={classnames(styles.profile__fullName)}>{fullName}</h3>
          <p className={classnames(styles.profile__status)}>
            <ProfileStatus status={status} updateStatus={updateStatus} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileHeader);
