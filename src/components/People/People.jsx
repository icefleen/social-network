import React from "react";
import styles from "./People.module.scss";
import classnames from "classnames";
import Spinner from "./../common/Spinner/Spinner";

import defaultAvatar from "./../../images/default-avatar.png";

import { NavLink } from "react-router-dom";

const People = (props) => {
  return (
    <div className={classnames(styles.people)}>
      <div className={classnames(styles.people__wrapper)}>
        {props.peopleState.people.map((user) => {
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
                    disabled={props.peopleState.followingProgress.includes(
                      user.id
                    )}
                    type="button"
                    onClick={() => {
                      props.unFollow(user.id);
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
                    disabled={props.peopleState.followingProgress.includes(
                      user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
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
      {props.peopleState.isFetching && <Spinner />}
      <button
        type="button"
        className={classnames(styles.people__loadButton, styles.loadButton)}
        onClick={() => props.loadUsers(props.peopleState.people.length)}
      >
        Load More
      </button>
    </div>
  );
};

export default People;
