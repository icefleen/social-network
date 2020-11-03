import React from "react";
import styles from "./ProfileFriend.module.scss";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

const ProfileFriend = (props) => {
  return (
    <NavLink to={`/profile/${props.id}`} className={classnames(props.className, styles.friend)}>
      <div className={classnames(styles.friend__avatar)}>
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className={classnames(styles.friend__name)}>{props.firstName}</div>
    </NavLink>
  );
};

export default ProfileFriend;
