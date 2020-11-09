import React from "react";
import styles from "./User.module.scss";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import defaultAvatar from "../../../images/default-avatar.png";

const User = ({
  id,
  avatar,
  fullName,
  followingInProgress,
  location,
  followed,
  follow,
  unFollow,
}) => {
  return (
    <div key={id} className={classnames(styles.user)}>
      <NavLink
        to={`/profile/${id}`}
        className={classnames(styles.user__avatar)}
      >
        <img src={avatar || defaultAvatar} alt="avatar" />
      </NavLink>
      <div className={classnames(styles.user__info)}>
        <NavLink
          to={`/profile/${id}`}
          className={classnames(styles.user__fullName)}
        >
          {fullName}
        </NavLink>
        <div className={classnames(styles.user__location)}>
          {location.country}, {location.city}
        </div>
        {followed ? (
          <button
            disabled={followingInProgress}
            type="button"
            onClick={() => {
              unFollow();
            }}
            className={classnames(
              styles.user__followButton,
              styles.followButton,
              styles.followButton_active
            )}
          >
            Followed
          </button>
        ) : (
          <button
            type="button"
            disabled={followingInProgress}
            onClick={() => {
              follow();
            }}
            className={classnames(
              styles.user__followButton,
              styles.followButton
            )}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default User;
