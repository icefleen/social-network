import React from "react";
import styles from "./ProfilePost.module.scss";
import classnames from "classnames";

const ProfilePost = (props) => {
  return (
    <div className={classnames(props.className, styles.post)}>
      <div className={classnames(styles.post__header)}>
        <div className={classnames(styles.post__avatar)}>
          <img src={props.avatar} alt="avatar" />
        </div>
        <div className={classnames(styles.post__info)}>
          <div className={classnames(styles.post__owner)}>{props.fullName}</div>
          <div className={classnames(styles.post__datetime)}>
            {props.datetime}
          </div>
        </div>
      </div>
      <div className={classnames(styles.post__main)}>{props.text}</div>
      <div className={classnames(styles.post__footer)}></div>
    </div>
  );
};

export default ProfilePost;
