import React from "react";
import styles from "./ProfilePost.module.scss";
import classnames from "classnames";

const ProfilePost = ({ className, avatar, fullName, datetime, text }) => {
  return (
    <div className={classnames(className, styles.post)}>
      <div className={classnames(styles.post__header)}>
        <div className={classnames(styles.post__avatar)}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={classnames(styles.post__info)}>
          <div className={classnames(styles.post__owner)}>{fullName}</div>
          <div className={classnames(styles.post__datetime)}>{datetime}</div>
        </div>
      </div>
      <div className={classnames(styles.post__main)}>{text}</div>
      <div className={classnames(styles.post__footer)}></div>
    </div>
  );
};

export default ProfilePost;
