import React from "react";

const ProfileFriend = (props) => {
  return (
    <div className="friends__item friend">
      <div className="friend__avatar">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="friend__name">{props.firstName}</div>
    </div>
  );
};

export default ProfileFriend;
