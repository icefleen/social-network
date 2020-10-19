import React from "react";
import styles from "./ProfileFriend.module.scss";
import classnames from "classnames";

const ProfileFriend = (props) => {
  return (
    <div className={classnames(props.className, styles.friend)}>
      <div className={classnames(styles.friend__avatar)}>
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className={classnames(styles.friend__name)}>{props.firstName}</div>
    </div>
  );
};

export default ProfileFriend;
