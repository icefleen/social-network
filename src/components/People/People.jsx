import React from "react";
import styles from "./People.module.scss";
import classnames from "classnames";

import defaultAvatar from "./../../images/default-avatar.png";

import * as axios from "axios";

class People extends React.Component {
  componentDidMount() {
    this.loadUsers(0);
  }

  componentWillUnmount() {
    this.props.clearPeople();
  }

  loadUsers(offset) {
    axios.get(`/api/users?offset=${offset}&limit=3`).then((response) => {
      this.props.appendPeople(response.data.items);
    });
  }

  render() {
    return (
      <div className={classnames(this.props.className, styles.people)}>
        <div className={classnames(styles.people__wrapper)}>
          {this.props.peopleState.people.map((user) => {
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
                        this.props.unfollow(user.id);
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
                        this.props.follow(user.id);
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
        <button
          type="button"
          className={classnames(styles.people__loadButton, styles.loadButton)}
          onClick={() => this.loadUsers(this.props.peopleState.people.length)}
        >
          Load More
        </button>
      </div>
    );
  }
}

export default People;
