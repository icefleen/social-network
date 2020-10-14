import React from "react";
import ProfileFriend from "./ProfileFriend/ProfileFriend";

const ProfileFriends = (props) => {
  return (
    <div className="profile__friends profile__block friends">
      <h3 className="about__title">
        Friends <span className="friends__count">46</span>
      </h3>
      <div className="friends__list">
        {props.friends.map((friend) => (
          <ProfileFriend avatar={friend.avatar} firstName={friend.firstName} />
        ))}
      </div>
    </div>
  );
};

export default ProfileFriends;
