import React from "react";
import styles from "./ProfileFriend.module.scss";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

const ProfileFriend = ({ id, className, avatar, firstName }) => {
  return (
    <NavLink
      to={`/profile/${id}`}
      className={classnames(className, styles.friend)}
    >
      <div className={classnames(styles.friend__avatar)}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classnames(styles.friend__name)}>{firstName}</div>
    </NavLink>
  );
};

export default ProfileFriend;
