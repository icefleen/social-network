import React from "react";
import styles from "./ProfileFriends.module.scss";
import classnames from "classnames";

import ProfileFriend from "./ProfileFriend/ProfileFriend";

const ProfileFriends = (props) => {
  return (
    <div className={classnames(props.className, styles.friends)}>
      <h3 className={classnames(styles.friends__title)}>
        Friends <span className={classnames(styles.friends__count)}>46</span>
      </h3>
      <div className={classnames(styles.friends__list)}>
        {props.friends.map((friend) => (
          <ProfileFriend
            key={friend.id}
            avatar={friend.avatar}
            firstName={friend.firstName}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileFriends;
