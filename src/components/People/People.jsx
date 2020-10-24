import React from "react";
import styles from "./People.module.scss";
import classnames from "classnames";
import Spinner from "./../Spinner/Spinner";

import defaultAvatar from "./../../images/default-avatar.png";

const People = (props) => {
  return (
    <div className={classnames(props.className, styles.people)}>
      <div className={classnames(styles.people__wrapper)}>
        {props.peopleState.people.map((user) => {
          return (
            <div key={user.id} className={classnames(styles.user)}>
              <div className={classnames(styles.user__avatar)}>
                <img src={user.avatar || defaultAvatar} alt="avatar" />
              </div>
              <div className={classnames(styles.user__info)}>
                <div className={classnames(styles.user__fullName)}>
                  {user.fullName}
                </div>
                <div className={classnames(styles.user__location)}>
                  {user.location.country}, {user.location.city}
                </div>
                {user.followed ? (
                  <button
                    type="button"
                    onClick={() => {
                      props.unfollow(user.id);
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