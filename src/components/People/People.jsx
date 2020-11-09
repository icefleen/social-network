import React from "react";
import styles from "./People.module.scss";
import classnames from "classnames";
import Spinner from "../common/Spinner/Spinner";
import defaultAvatar from "../../images/default-avatar.png";
import { NavLink } from "react-router-dom";

const People = ({
  people,
  followingInProgress,
  follow,
  unFollow,
  isFetching,
  getUsers,
}) => {
  return (
    <div className={classnames(styles.people)}>
      <div className={classnames(styles.people__wrapper)}>
        {people.map((user) => {
          return (
            <div key={user.id} className={classnames(styles.user)}>
              <NavLink
                to={`/profile/${user.id}`}
                className={classnames(styles.user__avatar)}
              >
                <img src={user.avatar || defaultAvatar} alt="avatar" />
              </NavLink>
              <div className={classnames(styles.user__info)}>
                <NavLink
                  to={`/profile/${user.id}`}
                  className={classnames(styles.user__fullName)}
                >
                  {user.fullName}
                </NavLink>
                <div className={classnames(styles.user__location)}>
                  {user.location.country}, {user.location.city}
                </div>
                {user.followed ? (
                  <button
                    disabled={followingInProgress.includes(user.id)}
                    type="button"
                    onClick={() => {
                      unFollow(user.id);
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
                    disabled={followingInProgress.includes(user.id)}
                    onClick={() => {
                      follow(user.id);
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
        })}
      </div>
      {isFetching && <Spinner />}
      <button
        type="button"
        className={classnames(styles.people__loadButton, styles.loadButton)}
        onClick={() => getUsers(people.length)}
      >
        Load More
      </button>
    </div>
  );
};

export default React.memo(People);
