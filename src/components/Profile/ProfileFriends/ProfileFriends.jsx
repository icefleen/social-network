import React from "react";
import styles from "./ProfileFriends.module.scss";
import classnames from "classnames";

import ProfileFriend from "./ProfileFriend/ProfileFriend";
import defaultAvatar from "../../../images/default-avatar.png";

const ProfileFriends = (props) => {
  return (
    <div className={classnames(props.className, styles.friends)}>
      <h3 className={classnames(styles.friends__title)}>
        Friends{" "}
        <span className={classnames(styles.friends__count)}>
          {props.friends.length}
        </span>
      </h3>
      <div className={classnames(styles.friends__list)}>
        {props.friends.slice(0, 8).map((friend) => (
          <ProfileFriend
            key={friend.id}
            id={friend.id}
            avatar={friend.avatar || defaultAvatar}
            firstName={friend.fullName.split(" ")[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileFriends;
