import React from "react";
import styles from "./People.module.scss";
import classnames from "classnames";
import Spinner from "../common/Spinner/Spinner";
import User from "./User/User";

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
        {people.map((user) => (
          <User
            id={user.id}
            avatar={user.avatar}
            fullName={user.fullName}
            followingInProgress={followingInProgress.includes(user.id)}
            location={user.location}
            followed={user.followed}
            follow={() => follow(user.id)}
            unFollow={() => unFollow(user.id)}
          />
        ))}
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
